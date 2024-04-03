import mongoose from  'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';


const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        default: uuidv4(), // Set a default UUID when a new user is created
        required: true,
        unique: true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true,
    },
    name :{
        type : String,
        required : true
    },
    phone_number: {
        type: Number,
        required: true,
    },
    priority: {
        type: Number, // 0, 1, 2
        required: true,
    },
},{timestamps : true});

userSchema.pre('save',function (next){
    const user = this;
    const salt  = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.Password,salt);
    user.Password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(Password) {
    return bcrypt.compareSync(Password, this.Password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, 'secret', {
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema);

export default User;

import User from '../models/User_model.js';

class UserRepository{

    async create(data) {
        try {
            const result = await User.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // finding user by this email
    
    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }


    async destroy(id) {
        try {
            const result = await this.user.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }


    async update(id, data) {
        try {
            const result = await this.user.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch(error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

}

export default UserRepository;
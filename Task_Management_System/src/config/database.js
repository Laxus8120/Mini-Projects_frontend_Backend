import mongoose  from "mongoose";

export const connect = async () => {
    await mongoose.connect('mongodb://localhost/Tasks_Dev');
}
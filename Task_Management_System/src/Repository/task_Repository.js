import Task from '../models/task_model.js';


//create a task
// get all user task
// Update task due_date , status, 
// Delete task

class TaskRepository {

    async create(data){
        try {
            const task = await Task.create(data);
            return task
        } catch (error) {
            console.log("something went wrong in creation of task")
            throw error;
        }
    }

    async getAll(data){
        try {
            const task = await Task.find().sort({priority: 1});
            return task;
        } catch (error) {
            console.log("not able to get All task")
           throw error; 
        }
    }

    async destroy(id) {
        try {
            const result = await Task.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in destroy repo layer");
            throw error;
        }
    }


    async update(id,data) {
        try {
            const result = await Task.findByIdAndUpdate(id,{ status: data.status, due_date: data.due_date, priority: data.priority },{new: true});
            return result;
        } catch(error) {
            console.log("Something went wrong in update repo");
            throw error;
        }
    }
}

export default TaskRepository;
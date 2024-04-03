import subTask from '../models/subTasks_model.js';


//create a subtask
// get all user task
// Update task due_date , status, 
// Delete task

class SubTaskRepository {

    async create(data){
        try {
            const task = await subTask.create(data);
            return task;
        } catch(error) {
            console.log("something went wrong in creation of subtask")
            throw error;
        }
    }

    async getAll(data){
        try {
            const task = await subTask.find(
                {
                   task_id : data.task_id  
                }
            );
            return task;
        } catch (error) {
            console.log("not able to get All subtask")
           throw error; 
        }
    }

    async update(id,status) {
        try {
            const result = await subTask.findByIdAndUpdate(id,{ status: status },{new: true});
            return result;
        } catch(error) {
            console.log("Something went wrong in update repo");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const result = await subTask.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in destroy repo layer");
            throw error;
        }
    }
}

export default SubTaskRepository;
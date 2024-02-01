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
                   user_id : data.task_id   
                }
            );
            return task;
        } catch (error) {
            console.log("not able to get All subtask")
           throw error; 
        }
    }
}

export default SubTaskRepository;
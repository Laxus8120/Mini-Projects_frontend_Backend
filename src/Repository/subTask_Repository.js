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
}

export default SubTaskRepository;
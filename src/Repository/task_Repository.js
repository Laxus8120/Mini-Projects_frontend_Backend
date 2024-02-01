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
}

export default TaskRepository;
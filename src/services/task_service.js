import TaskRepository from '../Repository/task_Repository.js';

class TaskService{

    constructor(){
        this.taskRepository = new TaskRepository();
    }

    async task(data){
        try {
             const user =  await this.taskRepository.create(data);
             return user;
        } 
        catch (error){
            console.log("error in service layer")
            throw error;
        }
    }
}

export default TaskService;
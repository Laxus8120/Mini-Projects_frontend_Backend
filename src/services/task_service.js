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

    async getAll(user_id){
        try {
            const task = await this.taskRepository.getAll(user_id);
            return task;
        } catch (error) {
            console.log("not able to get All task")
           throw error; 
        }
    }

    async destroy(user_id) {
        try {
            const result = await this.taskRepository.destroy(user_id);
            return result;
        } catch (error) {
            console.log("Something went wrong in destroy repo");
            throw error;
        }
    }


    async update(id,status) {
        try {
            const result = await this.taskRepository.update(id,status);
            return result;
        } catch(error) {
            console.log("Something went wrong in update repo");
            throw error;
        }
    }
}

export default TaskService;
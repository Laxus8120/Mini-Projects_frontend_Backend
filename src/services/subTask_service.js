import SubTaskRepository from '../Repository/subTask_Repository.js';

class SubTaskService{

    constructor(){
        this.subtaskRepository = new SubTaskRepository();
    }

    async create(data){
        try {
             const subTask =  await this.subtaskRepository.create(data);
             return subTask;
        } 
        catch (error){
            console.log("error in service layer of creation of subTask");
            throw error;
        }
    }
}

export default SubTaskService;
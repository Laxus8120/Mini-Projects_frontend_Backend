import TaskService from "../services/task_service.js";

const taskService  = new TaskService();

export const taskCreate  = async (req,res)=>{
    try {
        const task = await taskService.task({
            title : req.body.title,
            description: req.body.description,
            // priority: req.body.priority,
            // status : req.body.priority,
             user_id : req.body.user_id,            
        });
        return res.status(201).json({
            success : true,
            message : 'Succesfully task created',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to create task ',
            data : {},
            err: error
        })
    }
}

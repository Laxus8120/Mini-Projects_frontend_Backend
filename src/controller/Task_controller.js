import TaskService from "../services/task_service.js";

const taskService  = new TaskService();

export const taskCreate  = async (req,res)=>{
    try {
        const task = await taskService.task({
            title : req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            status : req.body.status,
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

export const getAll  = async (req,res)=>{
    try {
        const task = await taskService.getAll({
             user_id : req.body.user_id,            
        });
        return res.status(200).json({
            success : true,
            message : 'Succesfully fetched all task',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to find task ',
            data : {},
            err: error
        })
    }
}

export const update  = async (req,res)=>{
    try {
        const taskId = req.params.id;
        const task = await taskService.update(taskId,req.body.status);
        return res.status(200).json({
            success : true,
            message : 'Succesfully update all task',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to update task ',
            data : {},
            err: error
        })
    }
}

export const destroy  = async (req,res)=>{
    try {
        const taskId = req.params.id;
        const task = await taskService.destroy(taskId);
        return res.status(200).json({
            success : true,
            message : 'Succesfully Delete a task',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to delete a task ',
            data : {},
            err: error
        })
    }
}

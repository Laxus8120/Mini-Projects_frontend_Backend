import SubTaskService from "../services/subTask_service.js";

const subtask  = new SubTaskService();

export const subTaskCreate  = async (req,res)=>{
    try {
        const task = await subtask.create({
             task_id : req.body.task_id, 
             user_id : req.body.user_id,
             sub_Task: req.body.sub_Task           
        });
        return res.status(201).json({
            success : true,
            message : 'Succesfully Subtask created',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to create subtask ',
            data : {},
            err: error
        })
    }
}


export const getAllSubTask  = async (req,res)=>{
    try {
        const task = await subtask.getAll({
            task_id : req.body.task_id,            
        });
        return res.status(200).json({
            success : true,
            message : 'Succesfully fetched all subtask',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to find subtask ',
            data : {},
            err: error
        })
    }
}

export const updateSubTask  = async (req,res)=>{
    try {
        const taskId = req.params.id;
        const task = await subtask.update(taskId,req.body.status);
        return res.status(200).json({
            success : true,
            message : 'Succesfully update all sub_task',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to update sub_task ',
            data : {},
            err: error
        })
    }
}

export const destroySubTask  = async (req,res)=>{
    try {
        const taskId = req.params.id;
        const task = await taskService.destroy(taskId);
        return res.status(200).json({
            success : true,
            message : 'Succesfully Delete a subtask',
            data : task,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' not able to delete a subtask ',
            data : {},
            err: error
        })
    }
}

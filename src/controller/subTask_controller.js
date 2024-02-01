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

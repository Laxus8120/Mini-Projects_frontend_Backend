import mongoose from  'mongoose';

const subTaskSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: 'User',
    required: true,
    },
  task_id: {
    type: String,
    ref: 'Task',
    required: true,
  },
  sub_Task:{
    type: String,
    required: true
  },
  status: {
    type: Number, // 0, 1
    default: 0,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
},{timestamps : true});

const SubTask = mongoose.model('SubTask', subTaskSchema);

export default SubTask;


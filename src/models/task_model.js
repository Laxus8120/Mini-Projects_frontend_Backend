import mongoose from  'mongoose';

const taskSchema = new mongoose.Schema({
    
 user_id: {
    type: String,
    ref: 'User',
    required: true,
    },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: Number, // 0, 1, 2
    default: 0,
  },
  status: {
    type: String, // "TODO", "IN_PROGRESS", "DONE"
    default: "TODO",
  },
},{timestamps : true});

const Task = mongoose.model('Task', taskSchema);

export default Task;

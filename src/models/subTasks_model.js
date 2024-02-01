const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
  task_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true,
  },
  status: {
    type: Number, // 0, 1
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: null,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
},{timestamps : true});

const SubTask = mongoose.model('SubTask', subTaskSchema);

export default SubTask;

// priorityCron.js
import cron from 'node-cron';
import Task from '../models/task_model.js';
import moment from 'moment';

export const taskCron = cron.schedule('* * * * *', async () => {
  console.log('Cron job is running...');
  
  try {
    console.log("inside cron job")
    const tasksToUpdate = await Task.find({
      due_date: {
        $gte: moment().startOf('day').toDate(),
        $lte: moment().endOf('day').toDate(),
      },
    });

    console.log('Found tasks to update:', tasksToUpdate);

    // Update the priorities of the tasks
    for(const task of tasksToUpdate) {
      task.priority = 0;
      await task.save();
      console.log(`Task priority updated: ${task._id}`);
    }

    console.log('Task priorities updated based on due date!');
  } catch (error) {
    console.error('Error updating task priorities:', error);
  }
});

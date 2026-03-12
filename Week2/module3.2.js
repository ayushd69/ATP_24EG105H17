// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle, validatePriority, validateDueDate } from './module3.1.js';
const tasks = [];
// 1. Add new task
  function addTask(title, priority, dueDate) 
  {
  // Validate using imported functions
  if (!validateTitle(title) && !validatePriority(priority) && !validateDueDate(dueDate) ) {
  return "Invalid task";
  }
  else {
  // If valid, add to tasks array
  tasks.push({ title, priority, dueDate, completed: false });
  return "Task added successfully";
  }
  }
                  
// 2. Get all tasks
function getAllTasks() {
// Return all tasks

return tasks;

}
                  
// 3. Mark task as complete
function completeTask(taskId) {
  // Find task by ID and mark as completed
  const task = tasks.find(t => t.id === taskId);

  if (task) {
  task.completed = true;
  return "Task marked as complete";
  } else {
  return "Task not found";
  }
}

export { addTask, getAllTasks, completeTask };
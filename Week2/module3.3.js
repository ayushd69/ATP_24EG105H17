// TODO: Import task functions
// import { ... } from './task.js';
import { addTask,getAllTasks,completeTask } from "./module3.2.js";
// Test your module system
// 1. Add some tasks
addTask("mid1","HIGH","12-05-2026")
addTask("mid2","LOW","18-08-2026")
// 2. Display all tasks
console.log(getAllTasks())
// 3. Complete a task
completeTask(1)
 // 4. Display all tasks again
console.log(getAllTasks())
// validator.js

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return { valid: false, message: "Title must be at least 3 characters long." };
  }
  return { valid: true };
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  const allowedPriorities = ["low", "medium", "high"];
  
  if (!allowedPriorities.includes(priority.toLowerCase())) {
    return { valid: false, message: "Priority must be low, medium, or high." };
  }
  return { valid: true };
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  const today = new Date();
  const dueDate = new Date(date);

  if (isNaN(dueDate.getTime())) {
    return { valid: false, message: "Invalid date format." };
  }

  if (dueDate <= today) {
    return { valid: false, message: "Due date must be a future date." };
  }

  return { valid: true };
}
const todosKey = "reactTodo";

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todosKey);
    
    // Check if rawTodos is null or empty string before parsing
    if (!rawTodos) return []; // Return empty array if no data

    try {
        // Try to parse the JSON data and return it
        return JSON.parse(rawTodos);
    } catch (error) {
        // If parsing fails, log the error and return an empty array
        console.error("Error parsing todos from localStorage:", error);
        return [];
    }
}

export const setLocalStorageTodoData = (task) => {
    // Ensure task is an array before stringifying it
    if (Array.isArray(task)) {
        localStorage.setItem(todosKey, JSON.stringify(task));
    } else {
        console.error("Task must be an array.");
    }
}

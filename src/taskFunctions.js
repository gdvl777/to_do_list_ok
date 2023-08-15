export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const addTask = (tasks, description) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
};

export const deleteTask = (tasks, index) => {
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i=i+1) {
    tasks[i].index = i + 1;
  }
  saveTasks(tasks);
  return tasks;
};

export const editTask = (tasks, index, newDescription) => {
  tasks[index].description = newDescription;
  saveTasks(tasks);
  return tasks;
};
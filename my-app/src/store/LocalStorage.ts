export const saveTodoData = (todoData: ITodoItem[]): void => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
};

export const loadTodoData = (): ITodoItem[] => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};

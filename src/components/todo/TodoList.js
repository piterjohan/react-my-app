import "./TodoList.css";

export const TodoList = ({ todoslist, editTodo, deleteTodo }) => {
  const onDeleteTodo = (todoID, event) => {
    // Call the parent callback function
    event.preventDefault();

    deleteTodo(todoID);
  };

  const onUpdateTodo = (todo, todoIndex, event) => {
    event.preventDefault();

    const todoText = prompt("Great, Let's Edit Your Progress", todo.text);

    if (todoText !== null) {
      todo.text = todoText;
      editTodo(todo, todoIndex);
    }
  };

  return (
    <ul className="todo-list">
      {todoslist?.map((todo, todoIndex) => (
        <li key={todo.id}>
          <div className="todo-text">{todo.text}</div>
          <div className="todo-button">
            <button
              className="btn-todo-edit"
              onClick={(e) => onUpdateTodo(todo, todoIndex, e)}
            >
              Edit
            </button>
            <button
              className="btn-todo-delete"
              onClick={(e) => onDeleteTodo(todo.id, e)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

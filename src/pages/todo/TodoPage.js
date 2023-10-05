import "./TodoPage.css";
import { useEffect, useState } from "react";
import TodoList from "../../components/todo/TodoList";

function TodoPage() {
  //get todo
  const todoLS = JSON.parse(localStorage.getItem("todos"));
  const [todoText, setTodoText] = useState("");
  const [todos, setTodo] = useState(todoLS ?? []);

  const addTodo = () => {
    console.log("adding todo");
    const totalTodo = todos.length + 1;
    const newTodoItem = {
      id: totalTodo,
      text: todoText,
      status: "todo",
    };

    todos.unshift(newTodoItem);
    // setTodo([...todos, newTodoItem]);
    setTodoText("");
  };

  // mounting
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  // click on child component
  const deleteTodo = (idTodo) => {
    const newTodo = todos.filter((id) => {
      return id.id !== idTodo;
    });

    setTodo(newTodo);
  };

  const editTodo = (newTodo, indexTodo) => {
    console.log("editTodo");

    let updatedTodos = [...todos];
    updatedTodos[indexTodo] = newTodo;
    console.log(updatedTodos);

    setTodo(updatedTodos);
  };

  return (
    <div className="container">
      <div className="Todo-list">
        <div className="title-todo">
          <h1>Todo List</h1>
        </div>

        <form onSubmit={e => e.preventDefault()}>
          <div className="input-todo">
            <input
              className="center"
              type="text"
              placeholder="What are u going todo?"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button type="button" onClick={addTodo}>
              Add
            </button>
          </div>
        </form>

        <div className="content-todo">
          <TodoList
            todoslist={todos}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;

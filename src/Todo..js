import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((it, idx) => {
          return <li key={idx}>{it}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

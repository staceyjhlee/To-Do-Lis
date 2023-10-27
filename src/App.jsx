import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [editId, setEditId] = useState("");
  const [editValue, setEditValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = { item: value, id: count };
    setList([...list, newValue]);
    setCount(count + 1);
    setValue("");
  };

  const handleDelete = (id) => {
    const newList = list.filter((todo) => {
      return todo.id !== id;
    });
    setList(newList);
  };

  const handleUpdate = (id) => {
    setEditId(id);
  };

  const handleChange = (id) => {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, item: editValue };
      } else {
        return todo;
      }
    });
    setEditId("");
    setList(newList);
  };

  return (
    <>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <label>Add Task: </label>
        <input
          placeholder='add to-do here..'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button>add</button>
      </form>
      <ul>
        {list.map((toDo) => {
          return toDo.id === editId ? (
            <div key={toDo.id}>
              <input
                placeholder='add edit here...'
                onChange={(e) => setEditValue(e.target.value)}
              ></input>
              <button onClick={() => handleChange(toDo.id)}>change</button>
            </div>
          ) : (
            <li className='listItem' key={toDo.id}>
              {toDo.item}
              <button className='delete' onClick={() => handleDelete(toDo.id)}>
                delete
              </button>
              <button className='update' onClick={() => handleUpdate(toDo.id)}>
                update
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

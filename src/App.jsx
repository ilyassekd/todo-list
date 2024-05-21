
import { useRef } from "react"
import { useState } from "react"


export default function App() {

  const [todos, settodos] = useState([])

  const inputRef = useRef()

  const handleAddtodos = () => {
    const text = inputRef.current.value;
    settodos([...todos, text]);
    inputRef.current.value = "";

  }

  const handleDeletetodos = (id) => {
    settodos(todos.filter(item => item !== id));
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input ref={inputRef} type="text" placeholder="Enter item ..." />

      <button onClick={handleAddtodos}>Add</button>

      <ul>
        {todos.map((item) => {
          return <li key={item}>{item} <button onClick={() => handleDeletetodos(item)}>🚫</button></li>
        }
        )}
      </ul>
    </div>
  )
}

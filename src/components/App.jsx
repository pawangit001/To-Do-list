import React, { useState } from "react";

function App() {
  const [inputtext, settext] = useState("");
  const [item, setitem] = useState([]);
  function handleChage(event) {
    const inputValue = event.target.value;
    settext(inputValue);
  }
  function addItem(prevValue) {
    setitem((prevValue) => {
      return [...prevValue, inputtext];
    });
    settext("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChage} type="text" value={inputtext} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem) => {
            return <li>{todoitem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

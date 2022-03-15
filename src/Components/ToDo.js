import React, { useState, useEffect } from "react";

export const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  //Add a new task
  const addTask = () => {
    if (!task) {
    } else {
      setList([...list, task]);
      setTask("");
    }
  };

  //Delete a task
  const deleteTask = (id) => {
    //console.log(id);
    const newList = list.filter((elem, index) => {
      return index !== id;
    });
    setList(newList);
  };

  //Delete all the task by setting the TaskList to an empty array
  const removeAll = () => {
    setList([]);
  };

  return (
    <div className="Todo">
      <div className="Form">
        <input
          type="text"
          placeholder="Add todos"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>

        <button title="Add" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="ListTodos">
        <h2>Todos</h2>
        {list.map((elem, index) => {
          return (
            <div className="Child" key={index}>
              <h3>{elem}</h3>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      <div className="DeleteAll">
        <button onClick={removeAll}>Clear the list</button>
      </div>
    </div>
  );
};

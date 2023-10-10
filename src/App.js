import React, { useState } from 'react';
import './App.css';

const tasks = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 2,
    "id": 2,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 6,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 31,
    "id": 4,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 12,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 85,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }
];

function App() {
  const [taskStatus, setTaskStatus] = useState({});

  function handleTaskStatusChange(taskId, completed) {
    setTaskStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: completed,
    }));
  }

  return (
    <div className="App">
      <h1>Uzdevumu saraksts</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="radio"
                name={`task-${task.id}`}
                value="completed"
                checked={taskStatus[task.id] === true}
                onChange={() => handleTaskStatusChange(task.id, true)}
              />
              Pabeigts
            </label>
            <label>
              <input
                type="radio"
                name={`task-${task.id}`}
                value="not-completed"
                checked={taskStatus[task.id] === false}
                onChange={() => handleTaskStatusChange(task.id, false)}
              />
              Nav pabeigts
            </label>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

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
  return (
    <div className="App">
      <h1>Uzdevumu saraksts</h1>
        {tasks.map((task) => (
          <div key={task.id}>
           <div className="tuks"> <img src="user.png" width="22" height="22"></img> 
              <p className="tasksss">{task.id}</p>
            </div>
            <label>
              <input type="checkbox" className="aplis" />
              <span></span>
            </label>
            {task.title}
          </div>
        ))}

    </div>
  );
}

export default App;

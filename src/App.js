import React, { useState } from "react";
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [newTask, setnewTask] = useState('');
  const [tasks, settasks] = useState([]);

  //adding task
  function addTask() {
    settasks([...tasks, newTask]);
  }


  //deleting task
  function deleteTask(index) {
    var listTasks = [...tasks];
    listTasks.splice(index, 1);
    settasks(listTasks);
  }
  const tasksList = tasks.map((object, index) => {
    return <div className="container w-75">
      <div className={'row mt-4 bg-secondary'}>
        <div className="col-md-1">
          {index + 1}
        </div>
        <div className="col-md-10">
          {object}
        </div>
        <div className="col-md-1">
          <button className={'btn btn-danger'} onClick={() => { deleteTask(index) }}>delete</button>
        </div>
      </div>
    </div>
  })
  return (
    <div className={'container text-center'}>
      <h1>Todo List</h1>
      <div className="row justify-content-center">
        <div className="col-md-9 d-flex lala">
          <input value={newTask} type="text" placeholder={'taskName'} className={'form-control'}
            onChange={(e) => { setnewTask(e.target.value) }} />
          <button className={'btn btn-success btn-sm'} type={'submit'} onClick={addTask}>Add Task</button>
        </div>
        {tasksList}
      </div>
    </div>
  );
}
export default App;

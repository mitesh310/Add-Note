import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ task: "", date: "", time: "" });
  const [allTask, setAllTask] = useState([]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addData = () => {
    const { task, date, time } = data;
    setAllTask([...allTask, { task, date, time }]);
    setData({ task: "", date: "", time: "" }); // Reset input fields after adding
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <div className="card">
              <h5 className="card-header">Task Manager</h5>
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="task" className="form-label">
                          Task Detail
                        </label>
                        <input
                          type="text"
                          onChange={changeData}
                          name="task"
                          value={data.task}
                          className="form-control"
                          id="task"
                          placeholder="Enter Task"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                          Date
                        </label>
                        <input
                          type="date"
                          onChange={changeData}
                          name="date"
                          value={data.date}
                          className="form-control"
                          id="date"
                          placeholder="Enter Task"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                          Time
                        </label>
                        <input
                          type="time"
                          onChange={changeData}
                          name="time"
                          value={data.time}
                          className="form-control"
                          id="time"
                          placeholder="Enter Task"
                        />
                      </div>
                    </div>
                    <center>
                      <button
                        type="button"
                        onClick={addData}
                        className="btn btn-dark"
                      >
                        Add
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <div className="card">
              <h5 className="card-header">Output</h5>
              <div className="card-body">
                {allTask
                
                .map((task, index) => (
                  <div key={index}>
                    <span> {task.task}</span>
                    <span> {task.time}</span>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
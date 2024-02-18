import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setCounter(0);
    setIsRunning(true);
  }

  // Calculate minutes and seconds from counter
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  return (
    <div className="row">
      <div className="col-6">
        <img src="https://cdn.dribbble.com/users/743832/screenshots/3828695/media/20caa76e060a2a5232bb0920f9db93ea.gif" alt="" />
      </div>
      <div className="col-6" id='col-6'>
        <div className="card-body">
          <h1>Automatic Counter App</h1>
          <h3 className='fw-bold' style={{ fontSize: "70px" }}>
            {String(minutes).padStart(2, '0')}<span className='text-danger'>:</span>{String(seconds).padStart(2, '0')}
          </h3>
          <div className="button">
            <button onClick={stop} className='btn fw-bold' style={{ borderRadius: "30px", boxShadow: "0 4px 8px 0" }}>
              <i className="fa-solid fs-2 fa-circle-pause" style={{ color: 'red' }}></i>
            </button>
            <button onClick={reset} className='btn ms-2 fw-bolder' style={{ borderRadius: "30px", boxShadow: "0 4px 8px 0" }}>
              <i className="fa-regular fs-2 fa-circle-stop" style={{ color: "black" }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;


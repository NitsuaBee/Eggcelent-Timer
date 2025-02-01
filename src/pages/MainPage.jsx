import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles.css";

const MainPage = () => {
    const navigate = useNavigate();


  return (
    <div className='container'>
        <h1>Egg Timer App</h1>
        <button onClick={() => navigate("/select-timer")}>Start</button>
    </div>
  );
};


export default MainPage;
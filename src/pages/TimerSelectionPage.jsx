import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles.css";

const TimerSelectionPage = () => {
    const navigate = useNavigate();

    const timerOptions = [
        { label: "test (5 sec)", time: 5},
        { label: "Soft Boiled (5 min)", time: 300},
        { label: "Medium Boiled (7 min)", time: 420},
        { label: "Hard Boiled (10 min)", time: 600},
    ];

  return (
    <div className='container'>
        {timerOptions.map((option, index) => (
            <button key={index} onClick={() => navigate(`/timer/${option.time}`)}>
                {option.label}
            </button>
        ))}
    </div>
  )
}

export default TimerSelectionPage
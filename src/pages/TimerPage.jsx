import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../styles.css"

const TimerPage = () => {
    const { time } = useParams();
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(Number(time));
    const [alarm, setAlarm] = useState(null);

    useEffect(() => {
        if (seconds > 0){
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            playAlarm();
        }
    }, [seconds]);

    const playAlarm = () => {
        const alarmSound = new Audio("./alarm.mp3");
        alarmSound.loop =true;
        alarmSound.play();
        setAlarm(alarmSound);
    };

    const stopAlarm = () => {
        if (alarm) {
            alarm.pause();
            alarm.currentTime = 0;
            setAlarm(null);
        }
    }

  return (
    <div className="container">
        <h1>Time Remaining</h1>
        <h2 className="timer">
            {Math.floor(seconds / 60)}:{("0" + (seconds % 60)).slice(-2)}
        </h2>
        {seconds === 0 && <button onClick={stopAlarm}>Stop Alarm</button>}
        <button onClick={() => navigate("/")}>Back to Main</button>
    </div>
  )
}

export default TimerPage
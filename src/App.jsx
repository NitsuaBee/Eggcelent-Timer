import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage";
import TimerSelectionPage from './pages/TimerSelectionPage';
import TimerPage from './pages/TimerPage';
import "./styles.css"

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/select-timer' element={<TimerSelectionPage />} />
        <Route path='/timer/:time' element={<TimerPage />} />
      </Routes>
    </Router>
  )
}
export default App
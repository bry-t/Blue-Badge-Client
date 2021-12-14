import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Meals from './Components/Meals/Meals';
import Auth from './Components/Auth/Auth';

function App() {

  const [ sessionToken, setSessionToken ] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  })

  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  const clearLocalStorage = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  const viewer = () => {
    return sessionToken !== undefined ? 
    <Navbar sessionToken={updateLocalStorage} clearSession={clearLocalStorage} /> &&
    <Meals sessionToken={sessionToken}/> : 
    <Auth updateLocalStorage={updateLocalStorage} />
  }

  return (
    <div>
      {viewer()}
    </div>
  );
}

export default App;
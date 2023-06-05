import React from 'react'
import './App.css';
import { signInWithGoogle } from './Firebase'

function App() {
  return (
    <div className="App">
          <button onClick={signInWithGoogle}> Sign in with google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} alt='img'/>
    </div>
  );
}

export default App;

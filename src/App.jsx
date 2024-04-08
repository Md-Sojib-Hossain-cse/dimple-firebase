import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import './App.css'
import app from './firebase/firebase.config'
import { useState } from 'react';

function App() {
  const [user , setUser] = useState(null);


  const auth = new getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIN = () => {
    signInWithPopup(auth , googleProvider)
      .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
    <h1>Firebase + React</h1>
    <button onClick={handleGoogleSignIN}>Google SignIn</button>
    {
      user && <div>
        <h3>User : {user.displayName}</h3>
        <p>Email : {user.email}</p>
      </div>
    }
    </>
  )
}

export default App

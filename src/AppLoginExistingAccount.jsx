import "./App.css";
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  // CONRAD ADDED THIS FOR TESTING
  // const handleSubmit = () => {
  //   createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then((response) => {
  //       console.log(response.user);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };

  const addData = () => {
    signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const handlelogout = () => {
    signOut(auth);
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (data) => {
  //     if (data) {
  //       alert("Logged In");
  //     } else {
  //       alert("Not Logged In");
  //     }
  //   });
  // }, []);
  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />

      <button onClick={addData}>Log In</button>
      <button onClick={handlelogout}>Log out</button>
    </div>
  );
}

export default App;

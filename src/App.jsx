import "./App.css";
import { useEffect, useState } from "react";
import { app, database } from "./firebaseConfigVercel";
// import { app, database } from "./firebaseConfigCodeSandbox";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  let theIDToStore = "";

  const auth = getAuth(); // remove - CHQ
  // const [data, setData] = useState({
  //   email: "",
  //   password: ""
  // });

  const [data, setData] = useState({});

  const collectionRef = collection(database, "users");

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

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password,
    })
      .then(() => {
        alert("Data Added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getData = () => {
    let grabbedFirstItemID = false;
    // let i = 0;

    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          // if(i === 0 && !grabbedFirstItemID)
          if (!grabbedFirstItemID) {
            theIDToStore = item.id;
            grabbedFirstItemID = true;
          }

          // return item.data(); //regular
          return { ...item.data(), id: item.id }; //with the object IDs
          // ++i;
        })
      );
    });
  };

  const updateData = () => {
    // error
    // Invalid document reference. Document references must have an even number of segments, but users has 1.

    // const docToUpdate = doc(database, "users", theIDToStore);

    const docToUpdate = doc(database, "users", "IGRufyWEupueEuECd2wt");

    updateDoc(docToUpdate, {
      email: "ABDDDC@gmail.com",
      password: 1234567,
    })
      .then(() => {
        alert("Data Updated");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const addData = () => {
    signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const handlelogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        alert("Logged In");
      } else {
        alert("Not Logged In");
      }
    });
  }, []);
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

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={updateData}>Update Data</button>

      {/* <button onClick={handlelogout}>Log out</button> */}
    </div>
  );
}

export default App;

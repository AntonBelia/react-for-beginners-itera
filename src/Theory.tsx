import React, { useState } from "react";
import "./App.css";
import AppUseEffect from "./components/Effect/Counter";
import Context from "./components/Context/Context.example";
import Callback from "./components/Callback/Callback.example";
import Custom from "./components/Custom/Custom.example";

function Theory() {
  const [state, setState] = useState({ isAdmin: false, userName: "Olga" });
  const {isAdmin} = state;

  const assignAdmin = () => {
    setState({...state, isAdmin: true})
  }

  return (
    <div className="App">
      
        <h1>Hello user, you is {isAdmin ? "Super Admin" : "a user"}</h1>
        <button onClick={assignAdmin}>Assing admin</button>
        <div>============================</div>
        <AppUseEffect/>
        <div>============================</div>
        <Context/>
        <div>============================</div>
        <Callback />
        <div>============================</div>
        <Custom/>


    </div>
  );
}

export default Theory;
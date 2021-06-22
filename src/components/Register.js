// import { json } from "body-parser";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function signUp() {
    let item = { name, password, email };
    console.warn(item);

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.warn(item);
    result = await result.json();
    console.warn(result);

    localStorage.setItem("user-info", JSON.stringify(result));
    let itsv = localStorage.getItem("user-info");
    console.warn(itsv);
    history.push("/add");
    console.warn(item);
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
        <br />
        <button className="btn btn-primary" onClick={signUp}>
          Sing Up
        </button>
      </div>
    </>
  );
}
export default Register;

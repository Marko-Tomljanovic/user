import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [rPass, setRPass] = useState(null);
  let [check, setCheck] = useState(false);

  function postData(e) {
    if (email == null || pass == null || rPass == null) {
      alert("Popuniti sva polja!");
    } else if (pass !== rPass) {
      alert("Lozinke nisu iste!");
    } else if (check === false) {
      alert("Prihvatiti uvijete korištenja!");
    } else {
      axios
        .post("http://localhost:8080/api/addUser", {
          email: email,
          password: pass,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      clear();
    }
  }
  function getEmail(val) {
    setEmail(val.target.value);
  }
  function getPass(val) {
    setPass(val.target.value);
  }
  function getRPass(val) {
    setRPass(val.target.value);
  }
  function getCheck(val) {
    setCheck(val.target.checked);
  }
  function clear() {
    document.getElementById("signin").reset();
  }
  function formPreventDefault(e) {
    e.preventDefault();
  }

  return (
    <>
      <h4 className="text-center mt-4">Registracija</h4>
      <br />
      <form
        id="signin"
        className="col-5 mx-auto mt-2"
        onSubmit={formPreventDefault}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email adresa</label>
          <input
            type="email"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Unesi email"
            onChange={getEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lozinka">Lozinka</label>
          <input
            type="password"
            className="form-control mb-2"
            id="lozinka"
            placeholder="*****"
            onChange={getPass}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lozinkap">Ponovi lozinku</label>
          <input
            type="password"
            className="form-control mb-2"
            id="lozinkap"
            placeholder="*****"
            onChange={getRPass}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={getCheck}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Slažem se sa uvijetima korištenja
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-success mt-2"
          onClick={() => postData()}
        >
          Registriraj se
        </button>
      </form>
    </>
  );
};

export default SignIn;

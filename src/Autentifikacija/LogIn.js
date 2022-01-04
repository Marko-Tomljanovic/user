import React, { useState } from "react";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  function getLogInData() {
    if (email == null || pass == null) {
      alert("Popuniti sva polja!");
    } else {
      axios
        .get("http://localhost:8080/api/users", {})
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));

      clear();
    }
  }
  function getEmail(val) {
    setEmail(val.target.value);
  }
  function getPass(val) {
    setPass(val.target.value);
  }
  function clear() {
    document.getElementById("login").reset();
  }
  function formPreventDefault(e) {
    e.preventDefault();
  }

  return (
    <>
      <h4 className="text-center mt-4">Prijava</h4>

      <br />
      <form
        id="login"
        className="col-5 mx-auto mt-2"
        onSubmit={formPreventDefault}
      >
        <div className="form-group">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            className="form-control mb-3"
            id="email"
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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Zapamti me
          </label>
        </div>
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={() => getLogInData()}
        >
          Prijavi se
        </button>
      </form>
    </>
  );
};

export default LogIn;

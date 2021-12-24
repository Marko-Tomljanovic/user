import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [logInData, setLogInData] = useState({});

  function getLogInData() {
    if (email == null || pass == null) {
      alert("Popuniti sva polja!");
    } else {
      setLogInData({ email: email, pass: pass });
      console.log(logInData);
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
    setLogInData({});
  }

  return (
    <>
      <h4 className="text-center mt-4">Prijava</h4>
      <h5 className="text-center mt-4">email: {email}</h5>
      <h5 className="text-center mt-4">lozinka: {pass}</h5>

      <br />
      <form className="col-5 mx-auto mt-2">
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

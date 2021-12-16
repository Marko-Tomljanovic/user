import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [rPass, setRPass] = useState(null);
  function getEmail(val) {
    setEmail(val.target.value);
  }
  function getPass(val) {
    setPass(val.target.value);
  }
  function getRPass(val) {
    setRPass(val.target.value);
  }

  return (
    <>
      <h4 className="text-center mt-4">Registracija</h4>
      <h3 className="text-center">Email: {email}</h3>
      <h3 className="text-center">Lozinka: {pass} </h3>
      <h3 className="text-center">Ponovljena lozinka: {rPass}</h3>
      <br />
      <form className="col-5 mx-auto mt-2">
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
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Slažem se sa uvijetima korištenja
          </label>
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Registriraj se
        </button>
      </form>
    </>
  );
};

export default SignIn;

import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LogIn from "./Autentifikacija/LogIn";
import SignIn from "./Autentifikacija/SignIn";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  SignIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

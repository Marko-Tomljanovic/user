import React, { Component } from "react";
import "./App.css";
import UserComponent from "./UserComponent";

class Home extends Component {
  render() {
    return (
      <>
        <h4 className="p-3 mb-1 bg-info text-white text-center">
          PRIMJER AUTENTIFIKACIJE
        </h4>
        <div>
          {/* <img
            src="https://picsum.photos/1500/800?random=1"
            className="img-fluid"
            alt="Responsive"
          ></img> */}

          <br />
          <br />
          <UserComponent></UserComponent>
        </div>
      </>
    );
  }
}

export default Home;

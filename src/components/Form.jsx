import React from "react";
import {Link} from "react-dom";

function form() {
  return (
    <div>
              <h1>REGISTRATION FORM</h1>
      <div className="container">
        <form id="registration form">
          <div className="input">
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="input">
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="input">
            <input type="text" id="Phone" placeholder="Phone" />
          </div>
          <div className="input">
            <input type="text" id="address" placeholder="Address" />
          </div>
          <div className="button">
            <input
              type="submit"
              defaultValue="Submit"
              className="custom-btn btn-3"
            />
          </div>
          <div className="button">
          <input
              type="text"
              defaultValue="login"
              className="custom-btn btn-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default form;

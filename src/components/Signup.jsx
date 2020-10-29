import React from "react";
import { Link } from "react-router-dom";

export class Signup extends React.Component {
  render() {
    return (
      <div className="card col-lg-4 container  justify-content-center">
        <div className="card-header h5">Signup</div>
        <div className="card-body pt-4">
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
          </div>

          <center>
            <div type="button" className="btn btn-primary">
              Signup
            </div>
          </center>
        </div>
        <div className="card-footer">
          <Link to="/Login">Log in</Link>
        </div>
      </div>
    );
  }
}

export default Signup;

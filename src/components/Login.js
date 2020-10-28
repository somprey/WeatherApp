import React from "react";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card col-lg-4 container  justify-content-center'>
        <div className='card-header h5'>Login</div>
        <div className="card-body pt-4">


        <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" placeholder="username" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" placeholder="password" />
            </div>

          <center><div type="button" className="btn btn-primary">
            Login
          </div></center>

        </div>
        <div className="card-footer">
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    );
  }
}
export default Login;

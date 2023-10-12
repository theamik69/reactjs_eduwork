import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FormAndValidation extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleValidation = () => {
    let formIsValid = true;

    if (!this.state.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      this.setState({ emailError: "Email Not Valid" });
    } else {
      this.setState({ emailError: "" });
    }

    if (!this.state.password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      this.setState({ passwordError: "Only Letters and length must be at least 8 Characters and at most 22 Characters" });
    } else {
      this.setState({ passwordError: "" });
    }

    return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.handleValidation();

    if (isValid) {
      alert("It has been successfully submitted");
      this.setState({ email: "", password: "" });
    }
  };

  render() {
    const style = {
      margin: "200px auto",
    };

    return (
      <div style={style}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form id="loginform" onSubmit={this.handleSubmit}>
                <div className="form-group mb-3">
                  <label className="mb-2">Email address</label>
                  <input type="email" className="form-control" name="EmailInput" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                  <small id="emailHelp" className="text-danger form-text">
                    {this.state.emailError}
                  </small>
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2">Password</label>
                  <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                  <small id="passworderror" className="text-danger form-text">
                    {this.state.passwordError}
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

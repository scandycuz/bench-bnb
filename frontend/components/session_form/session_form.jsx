import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = this.state;
    this.props.processForm({user: {username: "Trevor7", password: "password"}});
  }

  render() {

    if (this.props.formType === "login") {
      return (
        <div>
          <h4>Login or <Link to="/signup">Sign up</Link></h4>
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Sign up or <Link to="/login">Login</Link></h4>
          <button onClick={this.handleSubmit}>Signup</button>
        </div>
      );
    }
  }
}

export default SessionForm;

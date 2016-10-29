import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {

  const logoutUser = () => props.logout();

  if ( props.currentUser ) {
    return(
      <div>
        <h3>Welcome {props.currentUser.username}</h3>
        <button onClick={logoutUser}>Logout</button>
      </div>
    )
  } else {
    return(
      <div>
        <Link to="/signup">Sign up</Link> or <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Greeting;

import React from "react"; // Must be all  react  component. 

class UserSignupPage extends React.Component {
   
    render() {
      return(
          <form> 
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input></input>
            </div>
            <div>
                <label>Display Name</label>
                <input></input> 
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <label>Password Repeat</label>
                <input type="password"></input>
            </div>
            <button>Sign Up</button>
          </form>
      );
    }
}

export default UserSignupPage;



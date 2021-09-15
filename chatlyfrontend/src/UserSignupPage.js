import React from "react"; // Must be all  react  component. 
import axios from 'axios';

class UserSignupPage extends React.Component {


    state = {
        username: null,
        displayName : null,
        password : null,
        passwordrepeat : null,
        agreedClicked : false
    }

    onChange = Event => {
        const { name , value} = Event.target;
        this.setState({
            [name] : value // burada name bir değişken keyi ifade ediyor o yüzden köşeli parantezle yazıyoruz.
        })
    }

    onChangeAgree = Event => {
        this.setState({
            agreedClicked: Event.target.checked
        })
    }

    onClickSignup = Event => {
        Event.preventDefault();

        const { username , displayName , password} = this.state

        const body = {
            username,
            displayName,
            password 
        }

        axios.post('http://localhost:8080/api/1.0/users',body)
    }
  
    render() {
      return(
          <form> 
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input name = "username" onChange={this.onChange}/>
            </div>
            <div>
                <label>Display Name</label>
                <input  name = "displayName" onChange={this.onChange}></input> 
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" onChange={this.onChange}></input>
            </div>
            <div>
                <label>Password Repeat</label>
                <input  name = "passwordrepeat" type="password" onChange={this.onChange}></input>
            </div>
            <input type="checkbox" onChange={this.onChangeAgree}/> Agreed
            <button onClick={this.onClickSignup} disabled={! this.state.agreedClicked}>Sign Up</button>
          </form>
      );
    }
}

export default UserSignupPage;



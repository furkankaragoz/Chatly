import React from "react"; // Must be all  react  component. 

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
            <button disabled={! this.state.agreedClicked}>Sign Up</button>
          </form>
      );
    }
}

export default UserSignupPage;



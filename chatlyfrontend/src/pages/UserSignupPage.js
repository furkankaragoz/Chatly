import React from "react"; // Must be all  react  component. 
import { signup } from '../api/apiCalls';

class UserSignupPage extends React.Component {


    state = {
        username: null,
        displayName : null,
        password : null,
        passwordrepeat : null,
        agreedClicked : false,
        pendingApiCall: false,
        errors : {
            
        }
    }

    onChange = Event => {
        const { name , value} = Event.target;
        const errors = {... this.state.errors}
        errors[name] = undefined
        this.setState({
            [name] : value, // burada name bir değişken keyi ifade ediyor o yüzden köşeli parantezle yazıyoruz.
            errors
        })
    }

    onClickSignup =  async Event => {
        Event.preventDefault();

        const { username , displayName , password} = this.state

        const body = {
            username,
            displayName,
            password 
        }
        this.setState({pendingApiCall: true});


        try {
            const response = await signup(body);
        }
        catch(error) {
            if(error.response.data.validationErrors) {
                this.setState({errors : error.response.data.validationErrors});
            }
        }

        this.setState({pendingApiCall: false});
      
        
        // signup(body)
        // .then((response) => {
        //     this.setState({pendingApiCall: false});
        // }).catch(error => {
        //     this.setState({pendingApiCall: false});
        // }); 
    };
  
    render() {
        const { pendingApiCall, errors} = this.state;
        const { username } = errors;

      return(
          <div className="container">
            <form> 
                <h1 className="text-center">Sign Up</h1>
                <div className="mb-3">
                    <label>Username</label>
                    <input className={username ? "form-control is-invalid" :"form-control"} name = "username" onChange={this.onChange}/>
                    <div className="invalid-feedback">{username}</div>
                </div>
                <div className="mb-3">
                    <label>Display Name</label>
                    <input  className="form-control" name = "displayName" onChange={this.onChange}></input> 
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input  className="form-control" name="password" type="password" onChange={this.onChange}></input>
                </div>
                <div className="mb-3">
                    <label>Password Repeat</label>
                    <input  className="form-control" name = "passwordrepeat" type="password" onChange={this.onChange}></input>
                </div>
                <div className="text-center">
                    <button  className="btn btn-primary"  onClick={this.onClickSignup}  disabled={pendingApiCall}>Sign Up
                        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                    </button>
                </div>          
            </form>
          </div>
          
      );
    }
}

export default UserSignupPage;











 */
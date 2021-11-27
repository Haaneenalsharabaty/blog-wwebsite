import React, { Component } from "react";
import './LogIn.css'


class LogIn extends Component{
   state = {
        name:'',
       password: ''
        
    }
    Change = (event, state) => {
        this.setState({ [state]: event.target.value })
    }
    onSubmit = (e) => {
        let flag = true;
        let Userss = [];
        Userss = (JSON.parse(localStorage.getItem('users')))
        for (let i = 0; i < Userss.length; i++) {
            if (this.state.name === Userss[i].FullName && this.state.password === Userss[i].password)
            {
                alert("Thank You ...You Can Go To Home")
                return (flag=false)
            } }
            if(flag===true) {
                alert('you Need to sign up ')
            }
            
       
        e.preventdefult();
    }
    render() {
        return (

 
            <div className="form" >
                <form className="login-form" onSubmit={this.onSubmit} action={'/Blog'}>
                    <h2>welcome {this.state.name} </h2>
                    <input type="text" id="login" className="login" name="login" value={this.state.name} placeholder="login" required onChange={(event)=>this.Change(event,'name')}/>
      <input type="password" id="password" className="password" name="password" required value={this.state.password} placeholder="password" onChange={(event)=>this.Change(event,'password')}/>
      <input type="submit" className="sumbit" value="Log In"/>
    </form>
</div>
  



        )
    }
}
export default LogIn;

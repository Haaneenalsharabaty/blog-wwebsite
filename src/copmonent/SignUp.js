import React, { Component } from "react";
// import { Link } from "react-router-dom";// header component
import"./SignUp.css"
class SignUp extends Component{
  constructor(props) {
    super(props);

   
    this.state = {
      first: "",
      last: "",
      phone: "",
      password: "",
      confPassword: "",
    }
  }
   register=(event,state)=>{
     this.setState({ [state]: event.target.value })
     
   }

  reg = (event) => {
    let users={FullName:`${this.state.first} ${this.state.last}`,password:this.state.password, phone:this.state.phone }
    let arr=[]
  
    console.log(this.users);
    let flag=true
    if(localStorage.length !== 0){
     arr=JSON.parse(localStorage.getItem('users'))
      for(let i=0; i<arr.length ; i++){
        if(arr[i].FullName===`${this.state.first} ${this.state.last}` ){
        alert("username is exist please go To login Page")
        return flag= false
        }}
        if(flag===true){
          arr.push(users)
          localStorage.setItem("users", JSON.stringify(arr))
          alert("Done...Go to login Page")
          
        }

      }

    else{
      arr.push(users)
      localStorage.setItem("users",JSON.stringify(arr))
    }
   
}
   render(){
     return(
  <div id='container'>
           <h1 id='regTitle'> Registration </h1>
    <div id='inputCont'>
    <br/>
    <form onSubmit={this.reg} action="/LogIn">
    <input value={this.state.first} onChange={(e)=>this.register(e,'first')} className='inputs' type={'text'} id='firstName' placeholder="  First Name" required></input>
    <input value={this.state.last} onChange={(e)=>this.register(e,'last')} className='inputs' type={'text'} id='lastName' placeholder="  Last Name" required></input>
    <br/>
    <input value={this.state.password} onChange={(e)=>this.register(e,'password')} className='inputs' type={'password'} id='Password' placeholder="  Password" required></input><br/>
    <input value={this.state.confPassword} onChange={(e)=>this.register(e,'confPassword')} className='inputs' type={'password'} id='confPassword' placeholder="  Repeat Password " required></input><br/>
    <input value={this.state.phone} onChange={(e)=>this.register(e,'phone')} className='phonenumber' type={'text'} id='phoneNumber' placeholder="  Phone Number " required></input><br/>
                     
                       
    {/* <Link to={'/Intro'}> */}
      <button className="regSubmit">Submit</button>
      {/* </Link> */}
    </form>
    </div>
</div> 
     )}}
     export default SignUp;
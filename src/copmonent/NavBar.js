import React, { Component } from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom"

function LogOut()
{
  localStorage.clear();
  }
class NavBar extends Component{
  
    render() {
        return (
            <header>
            <nav className="nav-bar" id="nav-bar">
              
              
              {/* <div className="navlist" id="navlist"> */}
                
                            <div className ="navlist">
                                <NavLink to="/intro" >
                                    Home
                                </NavLink>
                            </div>
      
                  
                  
                            <div className ="navlist">
                                <NavLink to="/Blog" >
                                    Blog
                                </NavLink>
                            </div>
                 
                
                    {/* </div> */}
                    
                    {/* <div className="logoimage"> */}
                <img className="logoimg"
                  src="logo_transparent.png"
                  alt="logo"
                />
              {/* </div> */}
                          {/* <div className="login"> */}
                              {/* <ul> */}
                                  
                                {/* <li> */}
                                    <NavLink to="/Login">
                                      <div className ="navlist">  Log In </div>
                                    </NavLink>
                                {/* </li> */}
                                {/* <li> */}
                                    <NavLink to="/signUp">
                                  <div className ="navlist">  Sign Up </div>
              </NavLink>
              
                <div className="logout" onClick={LogOut}
                
                ><i className="fas fa-sign-out-alt"></i></div>
              
                            {/* </li> */}
{/*                                   
                              </ul> */}
                          {/* </div> */}
            </nav>
          </header>
      
        )
    }
}







export default NavBar;
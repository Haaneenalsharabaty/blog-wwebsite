import React, { Component } from "react";
import './Intro.css'
import Post from "./Post";
export default class Intro extends Component {
    render() {
        return (
            <section className="Home" id="Home">
                <div className="text">
                    <h1> Hello I'M</h1>
                    <h3>Haneen Alsharabaty</h3>
                    
                </div>
                
                <Post
                    
                />
                {/* <div className="myimage">
        
                    <img src="5b68294a-db42-4b04-92f3-524e8f0c3ca2.jfif" alt="my pic" />
                </div> */}
            </section>




        )
    }
    
}

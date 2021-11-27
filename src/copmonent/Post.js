import React, { Component } from "react";

import"./Post.css"
class Post extends Component{
    render() {
        return (
            <div className="post">
                <h1>{this.props.title} </h1>
                <p>{this.props.story}</p>
                <img src= {this.props.img} />
             </div>
         )
     }
}
 export default Post
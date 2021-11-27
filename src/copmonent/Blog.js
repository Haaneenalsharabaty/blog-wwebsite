import React, { Component } from 'react'
import './Blog.css'
import Post from './Post';



export default class Blog extends Component {
    constructor(props) {
        super(props);
    
       
        this.state = {
            tiltle: "",
            story: "",
          img: "",
           arr : JSON.parse(localStorage.getItem("puplish"))
        }
    }
    post = (e) => {
        const {name,value} = e.target
        this.setState({ [name]: value })
        
       }
    
    onSubmit = (event) => {
       event.preventDefault(); 
        let puplish = { tiltle: this.state.tiltle, story: this.state.story, img: this.state.img }
        
        
        let a = this.state.arr
        
    a.push(puplish);
        localStorage.setItem("puplish", JSON.stringify(a))
        this.setState({ arr : JSON.parse(localStorage.getItem("puplish"))})
       
        
         
         
       
          


    }

    render() {
        return (
            
            <div className="write">
                <img
                    className="writeimg"
                    src="21542585.jpg" alt="" />
                
            <form className="writeForm" onSubmit={this.onSubmit}>
                 <div className="writeFormGroup">
                    <label htmlFor="filedinput"><i className=" writeicon fas fa-plus"></i>
                            <input type="file" id="filedinput" className="filedinput" name="img"
                                value={this.state.img} onChange={this.post}/></label>
                        <input type="text" name ="tiltle" placeholder="Title" className="writeinput" autoFocus={true} value={this.state.tiltle} onChange={this.post}/>
                 </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your Story... "  name="story" type="text" className="writeinput writetext" value={this.state.story} onChange={this.post}></textarea>
                        

                    </div>
                    <button type="submit" className="writesubmit">publish</button>



                </form>

                <div className="comments-container">
                  { this.state.arr.map(
                        (item) => <Post
                            
                            title={item.tiltle}
                            story={item.story}
                            img={item.img}
                        
                        
                        
                        />
                    )}
                    
                        
            
        </div>
            </div>
           
        ) 
    }
   
  
}

import React, { Component } from 'react';
import "./About.css";
import pic from "../assets/picture.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
              className="profile_image"
              src={pic}
              alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Aryan Aggarwal</div>
                <div className="brief_description">
                  Hi! I'm Aryan Aggarwal, a rising junior studying computer science at the University of Michigan.
                  In my free time I enjoy playing basketball with my friends, playing video games, and riding my bike.
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
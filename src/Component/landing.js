import React from "react";
import { Link } from "react-router-dom";



const linkStyle = {
  textDecoration: "none",
  color: "black",
};


// Default export
export default function Landing() {    
  return (
    <>
      <div className="landing">
        <div className="landingimg">
          <img
            width={400}
            src="https://i.pinimg.com/736x/2c/8e/98/2c8e981280d108b806c2e07bfbcc15b9.jpg"   // It will give these image by default
            alt=""
          />
        </div>
        <div className="enter">
          <h1> Welcome To Insta-Clone </h1>
          <h2>10X Team</h2>
          <button>
            {" "}
            <Link to="/main" style={linkStyle}>  
              Enter
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
}


import instaclone from "./instaclone.png";
import cameraicon from "./cameraicon.png";
import React from "react";
import { useNavigate } from "react-router-dom";




export function Postview(props) {   // props used to communicate parent to child
  return (
    <>
      <div className="card">
        <div className="header">
          <div>
            <h5>{props.name}</h5>
            <p>{props.location}</p>
          </div>
          <i className="bi bi-three-dots"></i>
        </div>
        <div className="image">
          <img width={450} height={450} src={props.image} alt="" />
        </div>
        <div className="lsd">
          <i className="bi bi-heart"></i>
          <i className="bi bi-send"></i>
          <p>{props.date}</p>
        </div>
        <p className="likes">{props.likes} likes</p>
        <div className="description">
          <h5>{props.description}</h5>
        </div>
      </div>
    </>
  );
}



export function Header() {
  let navigate = useNavigate();
  return (
    <>
      <div className="head">
        <img
          width={200}
          src={instaclone}
          onClick={() => navigate("../main", { replace: true })}   // Onclick event it will naviagate to the main file
          alt=""
        />
        <div className="camera">
          <img
            src={cameraicon}
            alt="Camera"
            width="100"
            height="90"
            onClick={() => navigate("../post", { replace: true })}  // Onclick event it will naviagate to the post file
          ></img>
        </div>
      </div>
    </>
  );
}



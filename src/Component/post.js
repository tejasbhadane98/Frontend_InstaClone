// Importing the Modules
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import React from "react";
import { Header } from "../PostView/postview";
import { useState } from "react";
import axios from "axios";


const Post = () => {
  const [post, setpost] = useState({});     //  Returns the Array of elements
  const formdata = [                         // Store in the array
    {
      id: "author",
      placeholder: "Author",
      type: "text",
    },
    {
      id: "location",
      placeholder: "Location",
      type: "text",
    },
    {
      id: "description",
      placeholder: "Description",
      type: "text",
    },
  ];
  const navigate = useNavigate();
  const handlesubmit = () => {
    axios({
      url: "https://backend-instaclone-tejas-bhadane.onrender.com/post",
      method: "POST",
      data: post,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("../main");
  };
  const handlechange = (e, id) => {
    setpost({ ...post, [id]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="postbody">
        <div className="center">
          <h1>New Post</h1>
          <div className="input-file">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setpost({ ...post, image: base64 })}
            />
          </div>
          <form>
            {formdata.map((data) => {
              return (
                <div id={data.id}>
                  <div className="inputbox">
                    <input
                      type={data.type}
                      placeholder={data.placeholder}
                      onChange={(e) => {
                        handlechange(e, data.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="inputbox">
              <input type="button" value="POST" onClick={handlesubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post;

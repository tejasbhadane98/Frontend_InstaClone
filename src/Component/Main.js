// Importing the Modules
import { Header, Postview } from "../PostView/postview";
import * as ReactBootstrap from "react-bootstrap";
import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";



export default function Main() {    // Default Export 
  const [users, setdata] = useState([]);     // Returns the Array of elements
  const [loading, setloading] = useState(true);  // Returns the Array of elements

   // To Limit the api Call
  useEffect(() => {
    axios
      .get(
        "https://backend-instaclone-tejas-bhadane.onrender.com/posts"   // Backend deployment useed for fetching the data
      )
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <>
      <Header />
      {[...users].reverse().map((user) => {
        return (
          <Postview
            key={user._id}
            name={user.author}
            location={user.location}
            image={`https://backend-instaclone-tejas-bhadane.onrender.com/${user.imagename}`}
            date={user.Date}
            likes={user.likes}
            description={user.description}
          />
        );
      })}

      <div className="spinner">
        {loading && (
          <ReactBootstrap.Spinner
            className="spinner"
            animation="border"
            variant="primary"
          />
        )}
      </div>
    </>
  );
}

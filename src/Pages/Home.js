import React from "react";


function Home() {
  return (
    <video autoPlay muted loop id="mainVideo">
      <source
        src={require("../Assets/Videos/demo.mp4")}
        type="video/ogg"
      ></source>
    </video>
  );
}

export default Home;

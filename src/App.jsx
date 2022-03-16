import React, { useState, useEffect } from "react";
import Greeting from "./components/Greeter";

const App = () => {
  const [username, setUserName] = useState("");
  const [loaded, setLoaded] = useState(false);

  const typingListener = (e) => {
    // console.log(setUserName);
    // console.log(username)
    setUserName(e.target.value);
  };

  const loadClick = () => {
    setLoaded(true);
    console.log("loaded bitch");
  };

  useEffect(() => {
      console.log('made it this far');
      setTimeout(() => {
          setLoaded(true)
      }, 3000);
  }, [loaded])

  if (loaded == false) {
    return (
      <div>
        <h1>Website is loading...</h1>
        <button onClick={loadClick}>Finish loading</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Greeting phrase="Well hello there" name="Cyah" />
          <Greeting phrase="The very jewish" name="john" />
          <Greeting phrase="If it isnt" name="fuckin mike" />
        </div>
        <div>
          <input value={username} onChange={typingListener} />
          <p>You are loggin in as: {username}</p>
        </div>
      </div>
    );
  }
};

export default App;

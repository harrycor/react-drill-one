import React from "react";

const Greeting = ({phrase, name}) => {

    return(
        <h1>{phrase}, {name}</h1>
    );
};

export default Greeting;
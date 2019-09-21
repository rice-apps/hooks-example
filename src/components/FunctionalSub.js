import React, { useState } from 'react';

function FunctionalSub(props) {
  // Declare a new state variable, which we'll call "name"
  const [name, setName] = useState(props.name);

  return (
    <div>
      {/* The below WILL update when the button is clicked.*/}
      <p>My name is {name}</p>
      {/* The below will NOT update when the button is clicked.*/}
      {/* <p>My name is {props.name}</p> */}
      <button onClick={() => setName("Joe")} />
    </div>
  );
}

export default FunctionalSub;
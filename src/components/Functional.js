import React, { useState, useEffect } from 'react';
import FunctionalSub from './FunctionalSub';

function Functional() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [component, setComponent] = useState(<h1>I love RiceApps!</h1>);

  useEffect(() => {
      document.title = `You clicked ${count} times.`
  });

  useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
      .then(response => response.json())
      .then(data => console.log(data.abilities));
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {component}
      <button onClick={() => setComponent(<h4>Just kidding.</h4>)}>
          Click me too
      </button>
      <FunctionalSub name="Josie" />
    </div>
  );
}

export default Functional;
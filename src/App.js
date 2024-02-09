import { useState } from "react";

// function useState(defaultValue) {
//     return {
//         yourState: defaultValue,
//         yourSetter: () => {}
//     }
// }

function App() {
  const [count, setCount] = useState(0);
//   const [value, setValue] = useState(0);

  console.log(useState(50)); // returns an array

  const handleClick = () => {
    // console.log("Button clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of Animals: {count}</div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useState} from "react"
import "./App.css"
import DataFetchingOne from "./DataFetchingOne"

function App() {
  const [foodState, setFoodState] = useState("...");

  return (
    <div className="container p-5">
      <select className="custom-select" value={foodState} onChange={(e) => {
        const selectedFood = e.target.value;
        setFoodState(selectedFood);
      }}>
        <DataFetchingOne />
      </select>
      {foodState}
    </div>
  );
}

export default App;

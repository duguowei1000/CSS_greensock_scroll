import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useRef } from 'react';
    
import React from "react";
import { gsap } from "gsap";

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function Container({ children }) {
  return <div><Box>Nested Box</Box></div>;
}
 
export default function App() {

// store a reference to the box div
const boxRef = useRef();
// const boxRef2 = useRef();
// const boxRef3 = useRef();
// const boxRef4 = useRef();
// const boxRef5 = useRef();
const el = useRef();
const q = gsap.utils.selector(el);
// wait until DOM has been rendered
useEffect(() => {
  // gsap.to(boxRef.current, { rotation: "+=360" });
  // gsap.to(boxRef2.current, { x: 100 });
  // gsap.to(boxRef3.current, { rotation: "+=360" });
  // gsap.to(boxRef4.current, { rotation: "+=360" });
  // gsap.to(boxRef5.current, { rotation: "+=360" });
  console.log(boxRef.current)
  // gsap.to(q(".children"), { x: 100 });
  gsap.to(q(".box"), { x: 100 });
});



// useEffect(() => {
//    // Target ALL descendants with the class of .box
//   gsap.to(q(".box"), { x: 100 });
// }, []);

 return (
   <div className="app" ref={el}>
     {/* <div className="box" ref={boxRef5}>Hello</div>
     <div className="box" ref={boxRef4}>2</div>
     <div className="box" ref={boxRef3}>3</div>
     <div className="box" ref={boxRef2}>4</div> */}
     <div className="children" >
      5
      
      </div>
      <Box>Box</Box>
      <Container/>
      <Box>Box</Box>
      {/* <div className="child">children</div> */}
   </div>
 );
}


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

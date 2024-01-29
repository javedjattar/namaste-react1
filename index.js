// Way to Create HTML Element
// const heading = React.createElement("h1",{},"Hello World From React!");
import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
  "h1",
  { id: "heading" }, //This Object used to provide Attribute to Tag
  "Hello World From React!"
);

console.log(heading)//It return an Object

const jsxHeading = <h1 id='heading'>Namaste React By JSX</h1>
// Both heading created using React.createElement()& jsxHeading are same i.e. serve the same purpose 

const root = ReactDOM.createRoot(document.getElementById("root"));
// Now rendering it using render method
root.render(jsxHeading);

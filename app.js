// Way to Create HTML Element
// const heading = React.createElement("h1",{},"Hello World From React!");

const heading = React.createElement(
  "h1",
  { id: "heading" }, //This Object used to provide Attribute to Tag
  "Hello World From React!"
);

console.log(heading)//It return an Object

// Way to Inject Element in Root Div Element
// We need to create root using React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// Now rendering it using render method
root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 className="head">Namaste React </h1>;
const HeadingComponent1 = () => {
  return <h1 className="heading">Namaste React Functional Component heading </h1>;
};
const TitleComponent1 = function () {
  return <h1 className="heading">Namaste React Title</h1>;
};
const Title = (<h1 className="heading">Namaste React Title JS</h1>)

// This is component Composition
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    {Title}    
    {HeadingComponent1()}
    <TitleComponent1/>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
// Above all three valid Functional Component Syntax

const root = ReactDOM.createRoot(document.getElementById("root"));
// Now rendering it using render method
root.render(<HeadingComponent />);

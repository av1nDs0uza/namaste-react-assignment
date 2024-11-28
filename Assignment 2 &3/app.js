
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const parent = React.createElement("div" ,{id:"parent"},[
    React.createElement("div" ,{id:"child1"},[
        React.createElement("h1" ,{id:"heading_1"}, "Heading 1"),
        React.createElement("h2" ,{id:"heading_2"}, "Heading 2"),
        React.createElement("h3" ,{id:"heading_3"}, "Heading 3"),

    ])
]);

const JsxHeading2 = () => (
    <div id="parent">
        <div id ="child">
            <h1 id="heading_1">Heading 1</h1>
            <h2 id="heading_2">Heading 2</h2>
            <h3 id="heading_3">Heading 3</h3>
            <h4 id="heading_4">Heading 4</h4>
            <h5 id="heading_5">Heading 5</h5>
        </div>

    </div>
)

const jsxHeading = (
    <div id="parent">
        <div id ="child">
            <JsxHeading2 />
            <h1 id="heading_1">Heading 1</h1>
            <h2 id="heading_2">Heading 2</h2>
            <h3 id="heading_3">Heading 3</h3>
            <h4 id="heading_4">Heading 4</h4>

        </div>

        

    </div>
)

const FuncComponent = () => (
    <div id="container">
        <JsxHeading2 />
    </div>
)
const Header = () => {
    return (
      <header className="header">
        
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
  
        
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
  
        
        <div className="user-icon">
          <img
            src=""
            className="icon"
          />
        </div>
      </header>
    );
  };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />)
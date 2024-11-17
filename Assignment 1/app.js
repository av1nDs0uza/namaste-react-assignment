// const heading = document.querySelector(".main h1"); // Select the <h1> inside .main
// if (heading) {
//     heading.innerHTML = "Assignment 1"; // Update the text

//     const divElement = document.getElementById("root"); // Get the <div id="root">
//     if (divElement && !divElement.contains(heading)) {
//         divElement.appendChild(heading); // Move <h1> into <div id="root">
//     }
// }

const parent = React.createElement("div" ,{id:"parent"},[
    React.createElement("div" ,{id:"child1"},[
        React.createElement("h1" ,{id:"heading_1"}, "Heading 1"),
        React.createElement("h1" ,{id:"heading_2"}, "Heading 2"),

    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
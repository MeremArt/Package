// test.js

// Import the React library and ReactDOM for rendering
const React = require("react");
const ReactDOM = require("react-dom");

// Import your Avatar component
const Avatar = require("./test/Avatar");

// Create a container element to render the Avatar component
const container = document.createElement("div");

// Define an onClick callback (optional)
function handleClick() {
  console.log("Avatar clicked!");
}

// Render the Avatar component with optional props (e.g., style, onClick)
ReactDOM.render(
  <Avatar style={{ margin: "20px" }} onClick={handleClick} />,
  container
);

// Append the container to the document body
document.body.appendChild(container);

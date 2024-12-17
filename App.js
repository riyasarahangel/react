import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const elem =<span>React Element</span>
const heading = (
<h1 className="head" tabIndex="5">
    {elem}
    Namaste React from JSX
    </h1>
);

const data = api.getData();
// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {data}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(<HeadingComponent />);


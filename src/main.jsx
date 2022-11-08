import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="body">
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </div>
);

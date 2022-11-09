import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { ThemeProvider } from "./Context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="body">
    <React.StrictMode>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </React.StrictMode>
  </div>
);

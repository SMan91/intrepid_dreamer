import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import StoriesProvider from "./providers/StoriesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <StoriesProvider>
          <App />
        </StoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

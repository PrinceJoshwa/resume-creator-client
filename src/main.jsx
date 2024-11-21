import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="352112236-q2che8r2qdoscgovbi09vkc7oglgkj8a.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

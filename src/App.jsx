// //client/src/App.jsx
// import "./App.css";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// const App = () => {
//   const login = useGoogleLogin({
//     onSuccess: async (response) => {
//       try {
//         // The access token is directly available in the response
//         const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//           headers: {
//             Authorization: `Bearer ${response.access_token}`, // Use access_token here
//           },
//         });
//         console.log(res.data); // Log user info
//       } catch (err) {
//         console.error("Error fetching user info:", err);
//       }
//     },
//     onError: (error) => {
//       console.error("Login Failed:", error);
//     },
//   });

//   return <button onClick={() => login()}>Sign in with Google 🚀</button>;
// };

// export default App;




// import React from "react";
// import LoginPage from "./components/Login";

// const App = () => {
//   return <LoginPage />;
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import TemplatesPage from "./TemplatesPage"; // Example template page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/templates" element={<TemplatesPage />} />
    </Routes>
  );
};

export default App;


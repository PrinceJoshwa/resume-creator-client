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

////22-11-2024
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./components/Login"; // Updated import path
// import Templates from "./pages/Templates";
// import Sidebar from "./components/Sidebar";

// const Layout = ({ children }) => {
//   const handleLogout = () => {
//     // TODO: Implement logout logic
//     console.log("Logout clicked");
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar onLogout={handleLogout} />
//       <main className="flex-1 overflow-auto">
//         {children}
//       </main>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/templates" element={<Layout><Templates /></Layout>} />
//       <Route path="/dashboard" element={<Layout><div>Dashboard Content</div></Layout>} />
//       {/* <Route path="/my-resumes" element={<Layout><div>My Resumes Content</div></Layout>} /> */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/Login"; 
import Templates from "./pages/Templates";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  const handleLogout = () => {
    // Implement logout logic
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/templates" element={<Layout><Templates /></Layout>} />
        <Route path="/dashboard" element={<Layout><div>Dashboard Content</div></Layout>} />
        <Route path="/my-resumes" element={<Layout><div>My Resumes Content</div></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
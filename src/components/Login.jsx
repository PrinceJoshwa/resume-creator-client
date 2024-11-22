// import React, { useState } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     // TODO: Implement your email/password login logic here
//     console.log("Email login with:", email, password);
//     // You would typically send a request to your backend here
//   };

//   const googleLogin = useGoogleLogin({
//     onSuccess: async (response) => {
//       try {
//         const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//           headers: {
//             Authorization: `Bearer ${response.access_token}`,
//           },
//         });
//         console.log("Google login successful:", res.data);
//         navigate("/templates");
//         // TODO: Handle successful login (e.g., store user data, redirect)
//       } catch (err) {
//         console.error("Error fetching user info:", err);
//       }
//     },
//     onError: (error) => {
//       console.error("Google Login Failed:", error);
//     },
//   });

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-center">Login</h1>
//         <form className="space-y-4" onSubmit={handleEmailLogin}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="m@example.com"
//               required
//               className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot your password?
//               </a>
//             </div>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
//           >
//             Login
//           </button>
//         </form>
//         <button
//           type="button"
//           className="w-full px-4 py-2 text-black border border-black rounded-md hover:bg-gray-100"
//           onClick={() => googleLogin()}
//         >
//           Login with Google
//         </button>
//         <p className="text-sm text-center">
//           Don't have an account?{" "}
//           <a href="#" className="text-blue-600 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

//22-11-2024
import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    // TODO: Implement your email/password login logic here
    console.log("Email login with:", email, password);
    // You would typically send a request to your backend here
    // For now, let's simulate a successful login
    navigate("/templates");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        console.log("Google login successful:", res.data);
        navigate("/templates");
        // TODO: Handle successful login (e.g., store user data in state or context)
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    },
    onError: (error) => {
      console.error("Google Login Failed:", error);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleEmailLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        <button
          type="button"
          className="w-full px-4 py-2 text-black border border-black rounded-md hover:bg-gray-100"
          onClick={() => googleLogin()}
        >
          Login with Google
        </button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


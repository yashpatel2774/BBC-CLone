import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="h-screen bg-[#000000] text-white flex justify-center items-center">
      
      <div className=" w-full max-w-md rounded-md p-8 text-center shadow-sm">
        
        <div className="flex gap-8 text-center items-center justify-center mb-25">
        <div className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-2xl">
          <span className=" text-xl font-bold">B</span>
        </div>
        <div className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-2xl">
          <span className="text-xl font-bold">B</span>
        </div>
        <div className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-2xl">
          <span className="text-xl font-bold">C</span>
        </div>

      </div>

        <h1 className="text-3xl font-bold text-white mb-6">
Enter your email address to sign in or create an account</h1>

        <form className="text-white" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-white  mb-4"
          />

          <button
            type="submit"
            className="w-full bg-[#0071F1] hover:bg-[#0051AD] text-white font-semibold py-2 rounded"
          >
            <Link to='/'>Continue</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

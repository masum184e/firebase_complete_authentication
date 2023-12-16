import { useState } from "react";
import { Link } from "react-router-dom";
import SocialAuthentication from "../components/SocialAuthentication";

const Login = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setloginData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

  }

  return (
    <>
      <div className="flex h-screen items-center max-w-screen-xl mx-auto">
        <div className="flex-1">
          <div className="w-[450px] p-4">
            <div>
              <h2 className="text-5xl font-semibold">Login</h2>
              <p className="text-lg text-justify mt-3 mb-4">Doesn&#39;t have an account yet? <Link to="/registration" className="text-buttonBackground underline">Sign Up</Link></p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="font-semibold text-lg" htmlFor="email">Email Address</label>
                <input onChange={handleChange} className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1" placeholder="your@example.com" type="email" name="email" id="email" value={loginData.email} />
              </div>
              <div className="my-6">
                <label className="font-semibold text-lg" htmlFor="password">Password</label>
                <input onChange={handleChange} className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1" placeholder="Enter 6 character or more" type="password" name="password" id="password" value={loginData.password} />
              </div>
              <button className="btn btn-block btn-warning text-white" type="button">Login</button>
            </form>
            <div className="divider">OR</div>
            <SocialAuthentication />
          </div>
        </div>
        <div className="flex-1">
          <img className="scale-125" src="/images/login.jpg" alt="LOGIN" />
        </div>
      </div>
    </>
  );
};

export default Login;
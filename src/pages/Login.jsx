import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthentication from "../components/SocialAuthentication";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUserData, loginUser } = useAuth();
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setloginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(loginData.email, loginData.password);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (loggedInUserData !== null && loggedInUserData !== undefined) {
      return navigate("/");
    }
  }, [navigate, loggedInUserData]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex h-screen items-center max-w-screen-xl mx-auto">
        <div className="flex-1">
          <div className="w-[450px] p-4">
            <div>
              <h2 className="text-5xl font-semibold">Login</h2>
              <p className="text-lg text-justify mt-3 mb-4">
                Doesn&#39;t have an account yet?{" "}
                <Link
                  to="/registration"
                  className="text-buttonBackground underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="font-semibold text-lg" htmlFor="email">
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                  placeholder="your@example.com"
                  type="email"
                  name="email"
                  id="email"
                  value={loginData.email}
                  required
                />
              </div>
              <div className="mt-6">
                <label className="font-semibold text-lg" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                    placeholder="Enter 6 character or more"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={loginData.password}
                    required
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <FaEye className="text-xl" />
                    ) : (
                      <FaEyeSlash className="text-xl" />
                    )}{" "}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <Link to="/reset-password-email" className="text-warning">
                  Reset Password ?
                </Link>
              </div>
              <button
                className="btn btn-block btn-warning text-white"
                type="submit"
              >
                Login
              </button>
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

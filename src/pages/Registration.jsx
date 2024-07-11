import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthentication from "../components/SocialAuthentication";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUserData, registerUser, updateDisplayName, emailVerification } = useAuth();
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerUser(registrationData.email, registrationData.password);
      await updateDisplayName(registrationData.fullName);
      if (user) {
        await emailVerification();
        console.log("Verification email sent.");
      } else {
        throw new Error("Something wen wrong");
      }
      navigate("/profile");
    } catch (error) {
      console.error("Registration failed:", error);
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
              <h2 className="text-5xl font-semibold">Join Now</h2>
              <p className="text-lg text-justify mt-2 mb-4">
                Already have an account?{" "}
                <Link to="/login" className="text-buttonBackground underline">
                  Login
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="font-semibold text-lg" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  onChange={handleChange}
                  className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                  placeholder="Your Full Name"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={registrationData.fullName}
                  required
                />
              </div>
              <div className="my-6">
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
                  value={registrationData.email}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-semibold text-lg" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                    placeholder="Enter 6 character or more"
                    type= {showPassword?"text":"password"}
                    name="password"
                    id="password"
                    value={registrationData.password}
                    required
                  />
                  <button onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-3">{showPassword?<FaEye className="text-xl" />:<FaEyeSlash className="text-xl" />} </button>
                </div>
              </div>
              <button
                className="btn btn-block btn-warning text-white"
                type="submit"
              >
                Join
              </button>
            </form>
            <div className="divider">OR</div>
            <SocialAuthentication />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/images/registration.png"
            alt="REGISTRATION"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Registration;

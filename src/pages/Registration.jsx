import { useEffect, useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import SocialAuthentication from "../components/SocialAuthentication";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const { loggedInUserData } = useAuth();
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    password: ""
  })
  const handleChange = event => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    if (loggedInUserData !== null && loggedInUserData !== undefined) {
      return navigate("/");
    }
  }, [navigate, loggedInUserData])

  return (
    <>
      <div className="flex h-screen items-center max-w-screen-xl mx-auto">
        <div className="flex-1">
          <div className="w-[450px] p-4">
            <div>
              <h2 className="text-5xl font-semibold">Join Now</h2>
              <p className="text-lg text-justify mt-2 mb-4">Already have an account? <Link to="/login" className="text-buttonBackground underline">Login</Link></p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="font-semibold text-lg" htmlFor="fullName">Full Name</label>
                <input onChange={handleChange} className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1" placeholder="Your Full Name" type="text" name="fullName" id="fullName" value={registrationData.fullName} />
              </div>
              <div className="my-6">
                <label className="font-semibold text-lg" htmlFor="email">Email Address</label>
                <input onChange={handleChange} className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1" placeholder="your@example.com" type="email" name="email" id="email" value={registrationData.email} />
              </div>
              <div className="my-6">
                <label className="font-semibold text-lg" htmlFor="password">Password</label>
                <input onChange={handleChange} className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1" placeholder="Enter 6 character or more" type="password" name="password" id="password" value={registrationData.password} />
              </div>
              <button className="btn btn-block btn-warning text-white" type="submit">Join</button>
            </form>
            <div className="divider">OR</div>
            <SocialAuthentication />
          </div>
        </div>
        <div className="flex-1">
          <img src="/images/registration.png" alt="REGISTRATION" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default Registration;
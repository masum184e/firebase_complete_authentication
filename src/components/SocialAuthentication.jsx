import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialAuthentication = () => {
  const { googleLogin, facebookLogin } = useAuth();
  const navigate = useNavigate();
  const loginWithGoogle = async () => {
    try {
      await googleLogin();
      console.log("Log In With Google");
      navigate(location?.state ?? "/profile");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message);
    }
  };
  const loginWIthFacebook = async () => {
    try {
      await facebookLogin();
      console.log("Log In With Facebook");
      navigate(location?.state ?? "/profile");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="space-y-2">
        <button
          onClick={loginWithGoogle}
          className="btn btn-outline border-warning btn-block hover:bg-white hover:text-black"
        >
          <FcGoogle className="text-xl" />
          <span>Continue With Google</span>
        </button>
        <button
          onClick={loginWIthFacebook}
          className="btn btn-outline border-warning btn-block hover:bg-white hover:text-black"
        >
          <FaFacebook className="text-xl text-[#0866FF]" />
          <span>Continue With Facebook</span>
        </button>
      </div>
    </>
  );
};

export default SocialAuthentication;

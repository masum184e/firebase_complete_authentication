import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loggedInUserData } = useAuth();
  const [email, setEmail] = useState("");
  const { verifyForgetPassword, confirmForgetPasswordReset, loginUser } =
    useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [resetPasswordData, setResetPasswordData] = useState({
    newPwd: "",
    reTypePwd: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (resetPasswordData.newPwd === resetPasswordData.reTypePwd) {
      try {
        const code = searchParams.get("oobCode");
        await confirmForgetPasswordReset(code, resetPasswordData.newPwd);
        await loginUser(email, resetPasswordData.newPwd);
        toast.success("Password Reset Successfully");
        navigate("/profile");
      } catch (error) {
        console.error("Password Changed Failed: ", error);
        toast.error(error.message);
      }
    } else {
      toast.error("Password Mismatch");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setResetPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const fetchEmail = async () => {
      const code = searchParams.get("oobCode");
      if (code) {
        try {
          const email = await verifyForgetPassword(code);
          setEmail(email);
        } catch (error) {
          toast.error("Invalid or expired password reset code.");
        }
      }
    };

    fetchEmail();
  }, [searchParams]);

  if (loggedInUserData) {
    return <Navigate to="/profile"></Navigate>;
  }

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
      <div className="w-[450px] p-4 mx-auto shadow-lg rounded mt-16">
        <div className="mb-6">
          <h2 className="text-5xl font-semibold text-center">Reset Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font-semibold text-lg" htmlFor="newPwd">
              New Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                placeholder="Enter a strong password"
                type={showPassword ? "text" : "password"}
                name="newPwd"
                id="newPwd"
                value={resetPasswordData.newPwd}
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
          <div className="my-3">
            <label className="font-semibold text-lg" htmlFor="reTypePwd">
              Re-Type Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                placeholder="Enter a strong password"
                type={showPassword ? "text" : "password"}
                name="reTypePwd"
                id="reTypePwd"
                value={resetPasswordData.reTypePwd}
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

          <button
            className="btn btn-block btn-warning text-white mt-2"
            type="submit"
          >
            Update Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;

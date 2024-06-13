import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ResetPasswordEmail = () => {
  const { forgetPassword } = useAuth();
  const navigate = useNavigate();
  const [resetPasswordData, setResetPasswordData] = useState({
    email: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await forgetPassword(resetPasswordData.email);
      toast.success("Reset Password Email Sent Successfully");
      navigate("/login");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setResetPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };
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
              value={resetPasswordData.email}
              required
            />
          </div>

          <button
            className="btn btn-block btn-warning text-white mt-2"
            type="submit"
          >
            Send Reset Password Link
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordEmail;

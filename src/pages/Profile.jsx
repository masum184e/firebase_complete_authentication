import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { loggedInUserData, logOut } = useAuth();
  const [changePasswordData, setChangePasswordData] = useState({
    newPwd: "",
    reTypePwd: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChangePasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Sign Out");
      navigate(location?.state ?? "/");
    } catch (error) {
      console.error("Sign Out Failed:", error);
    }
  };
  return (
    <>
      <div className="flex mt-8 gap-5">
        <div className="flex-1">
          <div className="flex gap-4 items-center mb-2">
            <img
              className="w-20 rounded-full border-2 border-[#ffbe00] p-2"
              src={loggedInUserData.photoURL}
              alt={loggedInUserData.displayName}
            />
            <div>
              <h2 className="text-4xl font-bold">
                {loggedInUserData.displayName}
              </h2>
              <h4>{loggedInUserData.email}</h4>
            </div>
          </div>
          <button
            className="btn btn-block btn-warning text-white mt-24"
            type="button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-lg" htmlFor="newPwd">
                New Password
              </label>
              <input
                onChange={handleChange}
                className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                placeholder="Enter a strong password"
                type="password"
                name="newPwd"
                id="newPwd"
                value={changePasswordData.newPwd}
              />
            </div>
            <div className="my-6">
              <label className="font-semibold text-lg" htmlFor="reTypePwd">
                Re-Type Password
              </label>
              <input
                onChange={handleChange}
                className="w-full border-2 outline-borderColor border-borderColor rounded py-1 px-2 mt-1"
                placeholder="Enter a strong password"
                type="password"
                name="reTypePwd"
                id="reTypePwd"
                value={changePasswordData.reTypePwd}
              />
            </div>
            <button
              className="btn btn-block btn-warning text-white"
              type="submit"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
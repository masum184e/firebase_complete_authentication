import { useState } from "react";

const Profile = () => {
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
  return (
    <>
      <div className="flex mt-8">
        <div className="flex-1">
            <div className="flex gap-4 items-center"> 
                <img className="w-20 rounded-full border-2 border-[#ffbe00] p-2" src="/images/logo.png" alt="" />
                <div>
                    <h2 className="text-4xl font-bold">Masum Billah</h2>
                    <h4>masum184e@gmail.com</h4>
                </div>
            </div>
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

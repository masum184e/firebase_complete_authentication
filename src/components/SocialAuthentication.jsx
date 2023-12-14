import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";

const SocialAuthentication = () => {
    const loginWithGoogle = async () => {

    }
    const loginWIthFacebook = async () => {

    }
    return (
        <>
            <div className="space-y-2">
                <button onClick={loginWithGoogle} className="btn btn-outline border-warning btn-block hover:bg-white hover:text-black" >
                    <FcGoogle className="text-xl" />
                    <span>Continue With Google</span>
                </button>
                <button onClick={loginWIthFacebook} className="btn btn-outline border-warning btn-block hover:bg-white hover:text-black" >
                    <FaFacebook className="text-xl text-[#0866FF]" />
                    <span>Continue With Facebook</span>
                </button>
            </div>
        </>
    )
}

export default SocialAuthentication
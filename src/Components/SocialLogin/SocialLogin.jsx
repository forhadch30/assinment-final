import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate("/")
            })
    }
    return (
        <div>
            <div className="divider divider-secondary mb-10">
                <button onClick={handleGoogle} className="btn">
                    <FcGoogle className="text-2xl" />
                    Sign Up and Login Google
                </button>
            </div>
        </div>
    )
};

export default SocialLogin;
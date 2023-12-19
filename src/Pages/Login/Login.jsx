import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/login/login 1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FiEyeOff, FiEye } from "react-icons/fi";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
    const [disabled, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                Swal.fire({
                    title: "User Login Successfull?",
                    showClass: {
                        popup: 'animate__animated animate__fadeInUpanimate__faster'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    const handleValidate = (e) => {
        const value = e.target.value;
        if (validateCaptcha(value)) {
            setDisable(false)

        } else {
            setDisable(true)
        }
    }


    return (
        <>
            <Helmet>
                <title>Assinment 12 || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <img className="h-[800px]" src={login} alt="" />
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl border-4">
                        <form onSubmit={handleLogin} className="card-body">

                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="text-black input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "password" : "text"} name="password" placeholder="password" className="text-black w-full input input-bordered" required />
                                    <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidate} type="text" name="captcha" placeholder="type the text the above" className="text-black input input-bordered" required />
                                <button className="btn btn-outline btn-info btn-xs">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-secondary btn-outline" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='px-8 text-2xl'><small className="text-white">New Here? Create a New Account</small></p>
                        <Link to="/signup" className='text-yellow-400 text-2xl text-center mt-5 mb-5 font-bold underline'>Sign Up</Link>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
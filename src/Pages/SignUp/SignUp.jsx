import { Link, useNavigate } from "react-router-dom";
import signup from '../../assets/pexels-moose-photos-1037993.jpg'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useState } from "react";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User created successfully.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <>
            <Helmet>
                <title>Assinment 12 || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <img className="h-[900px]" src={signup} alt="" />
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold">Sign Up New!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register('name', { required: true })} name="name" placeholder="name" className="text-black input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Photo URL" className="text-black input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="text-black input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "password" : "text"} {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="password" className="w-full input input-bordered" />
                                    <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>
                                        }
                                    </span>
                                </div>
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be 20 lessthen characters</p>)}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have one uppercase one lower case one number and one special
                                        characters</p>)}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary border-0 border-b-4 btn-outline" type="submit" value="Sing Up" />
                            </div>
                            <p className="px-8 text-2xl"><small>Already resgisterd? Login</small></p>
                            <p className="text-center">Or Sign Up with</p>
                            <Link to='/login' className="text-2xl text-center font-bold text-secondary underline">Login</Link>
                            
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
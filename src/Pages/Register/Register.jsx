import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    useEffect(() => {
        document.title = 'Registration - Artful'
    }, []);


    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(true);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    console.log(success, error);

    const notify = (error) => toast.error(error);
    const registerSuccess = (mes) => toast.success(mes);



    const handleSignUp = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photo');
        const password = form.get('password');

        console.log(name, email, photoUrl, password);

        console.log('photo: ', photoUrl);

        e.target.reset();

        if (password.length < 6) {
            notify("Password at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            notify("Password must have an uppercase characters");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            notify("Password must have an lower characters");
            return;
        }


        createUser(email, password)
            .then(res => {
                console.log(res.user);

                const user = "User Created Successfully!"
                setSuccess(user)
                updateProfile(res.user, {

                    displayName: name,
                    email: e.target.email.value,
                    photoURL: photoUrl

                }).then(() => {

                }).catch((error) => {
                    console.error(error);
                });

                registerSuccess(user);
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })

    }

    return (
        <div className={` bg-[url('https://i.ibb.co/87P5DHm/Polygon-Luminary-1.png')] bg-no-repeat bg-cover `}>
            <div className="max-w-[1536px] mx-auto min-h-[calc(100vh-112px)] flex justify-center items-center">
                <div className="font-rubik bg-indigo-100 bg-opacity-40 p-10 lg:p-20">

                    <form onSubmit={handleSignUp}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            <div className='flex'>
                                <img src='https://i.ibb.co/5vQ4LNM/sign-up.png' alt="" />
                            </div>


                            <div className="max-w-full max-h-full  flex flex-col items-center justify-center">
                                <h1
                                    className="text-indigo-800 font-semibold text-center text-2xl my-4">
                                    Registration Form
                                </h1>


                                <div className="w-full">
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type="text"
                                            name="photo"
                                            placeholder="photoURL"
                                            required />
                                    </div>
                                    <div className="relative">
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type={showPassword ? 'password' : 'text'}
                                            name="password"
                                            placeholder="Password"
                                            required />

                                        <div
                                            onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-7">
                                            {
                                                showPassword ? <FaEye className="text-[#2ed9ff]"></FaEye> : <FaEyeSlash className="text-[#28d8ff]"></FaEyeSlash>
                                            }
                                        </div>

                                    </div>

                                    <div>
                                        <input
                                            className="w-full bg-indigo-700 font-semibold text-indigo-200 py-3 mt-3 border-2 border-indigo-700 hover:bg-transparent duration-500 hover:border-2 hover:text-white hover:border-indigo-700 cursor-pointer"
                                            type="submit"
                                            value='Sign up' />
                                    </div>

                                    <div className="text-center text-sm mt-4  ">
                                        <p>Already have an account? <Link className="font-bold text-rose-500" to="/login">Login</Link> now!
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
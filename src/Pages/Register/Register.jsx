import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className={` bg-[url('https://i.ibb.co/87P5DHm/Polygon-Luminary-1.png')] bg-no-repeat bg-cover `}>
            <div className="max-w-[1536px] mx-auto min-h-[calc(100vh-112px-75.58px)] flex justify-center items-center">
                <div className="font-rubik bg-indigo-100 bg-opacity-40 p-10 lg:p-20">

                    <form>

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
                                            placeholder="Name"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type="email"
                                            placeholder="Email"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type="url"
                                            placeholder="photoURL"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-indigo-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-indigo-300 focus:border-indigo-700 w-full"
                                            type="password"
                                            placeholder="Password"
                                            required />
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
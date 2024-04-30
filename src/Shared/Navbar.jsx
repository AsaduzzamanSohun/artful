import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    } , [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }

    }

    


    const [open, setOpen] = useState(false);

    const { user, logout, } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [photoURL, setPhotoURL] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (user && user.photoURL) {
                setPhotoURL(user.photoURL);
            } else {
                setPhotoURL('https://i.ibb.co/9WfLbkH/user.png');
            }
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [user]);

    console.log(photoURL, loading);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const navLogout = () => {
        logout()
            .then(() => {

            })
            .catch(() => {
            })
    }





    const link = <>

        <li>
            <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/all_arts'>All Art & Craft</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/add_arts'>Add Craft Item</NavLink>
        </li>
        <li>
            {user
                &&
                <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/my_arts'>My Art&Craft</NavLink>
            }
        </li>

        {/* <li>

            {
                user ?
                    <Link onClick={navLogout} className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/'>
                        Logout
                    </Link>

                    :

                    <div className="flex items-center">
                        <Link
                            className={`px-4 py-1 bg-transparent text-indigo-200 border-r hover:bg-indigo-200 hover:text-indigo-900 duration-700 hover:border-indigo-900`}
                            to='/login'>
                            Login
                        </Link>

                        <Link
                            className={`px-4 py-1 bg-transparent text-indigo-200 hover:bg-indigo-200 hover:text-indigo-900 duration-700 hover:border-indigo-900`}
                            to='/register'>
                            Register
                        </Link>

                    </div>
            }

        </li> */}

    </>

    return (
        <>

            <nav className="w-screen fixed shadow-xl z-50">
                <div className="flex items-center justify-between p-2 md:px-6 md:py-4 bg-indigo-700 ">
                    <Link to='/'>
                        <img className="w-24 lg:w-36" src="https://i.ibb.co/b6G8gnh/artful-4-tr.png" alt="" />
                    </Link>


                    <div className="hidden md:flex items-center gap-12 xl:gap-24">

                        <ul className="flex gap-4 lg:gap-8 xl:gap-10 text-xs lg:text-base font-bold">
                            {
                                link
                            }

                            <li>
                                {/* Theme Change Toggle */}
                                <input
                                onChange={handleToggle}
                                    type="checkbox"
                                    value="synthwave"
                                    className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2" />

                            </li>
                        </ul>



                        <div>

                            {
                                user ?

                                    <div className="dropdown dropdown-end z-40">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                                            <div className="relative">
                                                <img
                                                    src={user ? user.photoURL : user.photoURL}
                                                    alt=""
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    className="w-10 h-10 rounded-full inline-flex hover:cursor-pointer ring-green-500 ring-4"
                                                />
                                                {isHovered &&
                                                    <div
                                                        className="absolute -bottom-8 left-1/2 
                                                    transform -translate-x-1/2 bg-green-900 
                                                    bg-opacity-60 text-indigo-100 px-2 py-1 
                                                    rounded z-40 font-bold">

                                                        {user?.displayName ? user.displayName : ""}

                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 w-32">
                                            <li>
                                                {user ?

                                                    <Link onClick={navLogout}
                                                        className="cursor-pointer bg-indigo-50 font-semibold rounded-none text-indigo-700 hover:bg-indigo-100 
                                                    hover:text-indigo-800"
                                                        to='/'>
                                                        Logout
                                                    </Link>
                                                    :
                                                    <Link
                                                        className="bg-indigo-100 font-semibold 
                                                    border-2 text-indigo-900 px-4 py-1 
                                                    hover:bg-transparent duration-700 
                                                    hover:border-2 hover:text-indigo-100 
                                                    hover:border-indigo-100 
                                                    border-indigo-950"
                                                        to='/login'>
                                                        <button>Login </button>
                                                    </Link>

                                                }
                                            </li>

                                        </ul>
                                    </div>

                                    :

                                    <>
                                        <Link
                                            className="bg-indigo-100 font-semibold border-2 text-indigo-900 px-4 py-1 hover:bg-transparent duration-700 hover:border-2 hover:text-indigo-100 
                                        hover:border-indigo-100 border-indigo-950"
                                            to='/login'>
                                            <button>Login </button>
                                        </Link>

                                        <Link
                                            className="bg-indigo-100 font-semibold border-2 
                                        text-indigo-900 px-4 py-1 hover:bg-transparent 
                                        duration-700 hover:border-2 hover:text-indigo-100 
                                        hover:border-indigo-100 border-indigo-950"
                                            to='/register'>
                                            <button > Register</button>
                                        </Link>
                                    </>
                            }

                        </div>
                    </div>


                    <div onClick={() => setOpen(!open)} className="md:hidden">

                        <div className="text-3xl text-neon ">
                            {
                                open ? <TfiClose /> : <CiMenuFries />
                            }
                        </div>

                        <div className={`absolute bg-indigo-6 w-full start-0 px-3 py-6 text-base -z-50  
                    ${!open ? `-top-[1000px] duration-[1000ms]`
                                : 'top-10 duration-1000'}`}>
                            <ul className="space-y-2 font-light">
                                {
                                    link
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 
            <div>
                {
                    open ? <h1 className=" mt-[200px] duration-[2000m"></h1>
                        : <h1 className="duration-[1000ms]"></h1>
                }
            </div> */}

        </>

    );
};

export default Navbar;



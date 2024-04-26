import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";



const Navbar = () => {

    const [open, setOpen] = useState(false);

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
            <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/my_arts'>My Art&Craft</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/login'>
                Login
            </NavLink>
        </li>
        <li >
            <NavLink className={({ isActive }) => isActive ? `text-neon border-b-2 border-[#A3FF66]` : `text-green-fair`} to='/register'>
                Register
            </NavLink>
        </li>

    </>

    return (
        <>
            <nav className="flex items-center justify-between p-2 md:px-6 md:py-4  bg-indigo-6">
                <div>
                    <img className="w-24 lg:w-36" src="https://i.ibb.co/b6G8gnh/artful-4-tr.png" alt="" />
                </div>

                <div className="hidden md:block">

                    <ul className="flex gap-4 lg:gap-8 xl:gap-10 text-xs lg:text-base font-bold">
                        {
                            link
                        }
                    </ul>
                </div>


                <div onClick={() => setOpen(!open)} className="md:hidden">

                    <div className="text-3xl text-light-green ">
                        {
                            open ? <TfiClose /> : <CiMenuFries />
                        }
                    </div>

                    <div className={`absolute bg-light w-full start-0 px-3 py-6 text-base -z-10 
                    ${!open ? `-top-96 duration-[1000ms]`
                            : 'top-10 duration-1000'}`}>
                        <ul className="text-green space-y-2 font-light">
                            {
                                link
                            }
                        </ul>
                    </div>



                </div>
            </nav>

            <div>
                {
                    open ? <h1 className=" mt-[190px] bg-blue-600 duration-1000"></h1>
                        : <h1 className="duration-[470ms]"></h1>
                }
            </div>

        </>

    );
};

export default Navbar;
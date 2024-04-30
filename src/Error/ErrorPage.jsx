import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">


            {
                <img className="w-[400px]" src="https://i.ibb.co/Y7gCP7H/page-404.png" alt="" />

            }

            <h1 className="text-5xl text-gray-500 mb-12">Page Not Found!!</h1>

            <Link to="/">
                <button className="btn rounded-none px-8 bg-indigo-100 text-indigo-700 font-semibold text-lg hover:bg-transparent hover:text-indigo-400 hover:border-indigo-700 duration-700 transition-all">
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-slate-100 text-indigo-700 font-bold">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-600">
                        <img className="" src="https://i.ibb.co/GdszBGY/artful-1-tr.png" alt="" />
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a rel="noopener noreferrer" href="#">All Rights Reserved</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl">
                        <span className=" text-green-600 font-extrabold">Art</span>
                        <span className=" text-green-600 font-light">Ful</span>
                    </h1>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Facebook</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
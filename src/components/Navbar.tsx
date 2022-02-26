import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="absolute w-full h-16 bg-white shadow-md transition lg:h-20">
            <nav className="container m-auto py-3 lg:px-20 lg:py-4">
                <div className="relative flex flex-wrap items-center justify-between">
                    <div className="relative z-10 w-full px-6 flex items-center justify-between lg:w-auto">
                        <Link to={'/'}>
                            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="w-32" alt="logo"/>
                        </Link>
                        <h1 className="text-base font-medium ml-4">Find Countries</h1>
                        <button id="hamburger" className="relative w-10 h-10 lg:hidden">
                            <div id="line" className="inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300"/>
                            <div id="line2" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300"/>
                        </button>
                    </div>

                    <div id="navlinks" className="hidden w-full px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent">
                        <ul className="py-4 text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                            <li>
                                <Link to={'/'} className="block w-full py-3 transition hover:text-cyan-600">Home</Link>
                            </li>
                            <li className="mt-4 lg:mt-0">
                                <Link to={'/'} className="block w-full py-3 px-6 rounded-xl bg-cyan-500 transition hover:bg-cyan-600 focus:bg-cyan-700 active:bg-cyan-800">
                                    <span className="block text-center text-white font-semibold lg:text-base">Contact us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

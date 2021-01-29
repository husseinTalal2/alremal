import React, { useState } from "react";
import Link from "next/link";
import ActiveLink from "../utils/ActiveLink";
import { Menu, Phone } from "react-feather";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const toggleNav = () => {
        setToggle(() => !toggle);
    };
    return (
        <>
            <header className="flex flex-col justify-center items-center">
                <div className="md:w-4/5 h-24 flex justify-between items-center">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img
                                    width="50"
                                    src="https://res.cloudinary.com/dest-life-storage/image/upload/v1609838147/LOGOwithoutText_ys5kjm.svg"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="flex ">
                        <Phone /> <span>+964 (770) 000-0000</span>
                    </div>
                </div>
                <nav className="md:w-4/5 h-20 flex justify-between items-center bg-white">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full nav-items hidden md:flex justify-between">
                            <ActiveLink activeClassName="active" href="/">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    HOME
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink
                                activeClassName="active"
                                href="/projects"
                            >
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    PROJECTS
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink activeClassName="active" href="/about">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    ABOUT US
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink activeClassName="active" href="/team">
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    OUR TEAM
                                </a>
                            </ActiveLink>
                            <span>|</span>
                            <ActiveLink
                                activeClassName="active"
                                href="/contact"
                            >
                                <a className="nav-item mx-2 hover:text-gray-700">
                                    CONTACT US
                                </a>
                            </ActiveLink>
                        </div>
                        <div
                            className="nav-toggle md:hidden cursor-pointer"
                            onClick={() => toggleNav()}
                        >
                            <Menu />
                        </div>
                    </div>
                </nav>
                <div
                    className={
                        !toggle && "mobile-nav bg-white md:hidden hidden"
                    }
                >
                    <div className="flex flex-col mobile-nav bg-white h-100 w-full items-center pb-10">
                        <ActiveLink activeClassName="active" href="/">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max align-center">
                                HOME
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/projects">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                PROJECTS
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/about">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                ABOUT US
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/team">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                OUR TEAM
                            </a>
                        </ActiveLink>

                        <ActiveLink activeClassName="active" href="/contact">
                            <a className="nav-item mx-2 hover:text-gray-700 pt-5 text-center w-max">
                                CONTACT US
                            </a>
                        </ActiveLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;

'use client';
import appLogo from "@/assets/images/rectem_logo.jpg";
import {Modal} from "@/app/ui_components/Modal";
import {SignUpButton} from "@/app/ui_components/SignUpButton";
import {usePathname} from "next/navigation";
import Link from "next/link";
import SignInButton from "@/app/ui_components/SignInButton";
import {useAuth} from "@/app/context/AuthContext";
import ProfileComponent from "@/app/ui_components/ProfileComponent";
export const NavBar = () => {
    const { user, logout } = useAuth();
    const  path = usePathname();
    if(path==="/books" || path==="/admin"){
        return (
            <div></div>
        )
    }
    return (
        <>

            < div className="container mx-auto navbar bg-base-100 ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Support</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost hover:bg-transparent items-start"><img src={appLogo.src}
                                                                                       className={"w-24"}/></a>
                </div>
                <div className="navbar-center flex  ">
                    <ul className="menu menu-horizontal px-1 space-x-5 self-center">
                        <li><Link href={"/"}
                                  className={path === "/" ? "bg-base-300 btn btn-sm" : "btn btn-sm bg-base-100"}>Home</Link>
                        </li>

                        <li><Link href={"/books"}
                                  className={path === "/books" ? "bg-base-300 btn btn-sm" : "btn btn-sm bg-base-100"}>Books</Link>
                        </li>

                        <li><Link href={"/about"}
                                  className={path === "/about" ? "bg-base-300 btn btn-sm" : "btn btn-sm bg-base-100"}>About</Link>
                        </li>
                        <li><Link href={"/support"}
                                  className={path === "/support" ? "bg-base-300 btn btn-sm" : "btn btn-sm bg-base-100"}>Support</Link>
                        </li>

                    </ul>
                </div>


                <div className="navbar-end space-x-5 ">
                    {user !== null && <ProfileComponent/>}
                    {user ===null && <SignInButton/>}
                    {user ===null && <SignUpButton/> }
                    {user!==null &&  <button className={"btn "} onClick={logout}>Log Out</button> }
                </div>


            </div>

        </>
    );
};
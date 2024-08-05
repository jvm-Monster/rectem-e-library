'use client';
import appLogo from "@/assets/images/rectem_logo.jpg";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {useAuth} from "@/app/context/AuthContext";
const SideBar= () => {
    const  path = usePathname();
    const { user, logout } = useAuth();
    return (
        <>

            <aside className={"bg-base-300 p-5 h-screen space-y-10 "}>
                <div className={"flex justify-center"}><img className={"max-w-32"} src={appLogo.src}/></div>

                <ul className={"flex flex-col justify-between space-y-10"}>
                    <li><Link href={"/books/dashboard"}
                              className={path === "/books/dashboard" ? "bg-base-content text-white btn w-full px-10" : "btn btn-full w-full px-10"}>Dashboard</Link>
                    </li>

                    <li><Link href={"/books"}
                              className={path === "/books" ? "bg-base-content text-white btn w-full px-10" : "btn btn-full px-10 w-full"}>Books</Link>
                    </li>


                    <li>
                        <Link href={"/books/bookmarks"}
                              className={path === "/books/bookmarks" ? "bg-base-content text-white btn w-full px-10" : "btn btn-full px-10"}>Bookmarks</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="btn w-full px-10">About</Link>
                    </li>

                    <li>
                        <Link href={"/support"} className="btn w-full px-10">Support</Link>
                    </li>


                    <li>
                        <Link href={"/"} className="btn w-full px-10" onClick={logout}>Logout</Link>
                    </li>
                </ul>

            </aside>
        </>
    );
};

export default SideBar;
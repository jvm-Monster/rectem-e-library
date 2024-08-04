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
                <li><Link href={"/books"}
                          className={path === "/books" ? "bg-base-content text-white btn w-full" : "btn btn-full"}>Dashboard</Link>
                </li>


                <div>
                    <Link href={"/"} className="btn w-full" >Home</Link>
                </div>

                <div>
                    <Link href={"/about"} className="btn w-full">About</Link>
                </div>

                <div>
                    <Link href={"/support"} className="btn w-full">Support</Link>
                </div>


                <div>
                    <Link href={"/"} className="btn w-full" onClick={logout}>Logout</Link>
                </div>
            </aside>
        </>
    );
};

export default SideBar;
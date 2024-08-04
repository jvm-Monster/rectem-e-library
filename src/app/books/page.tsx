'use client';
import SideBar from "@/app/ui_components/SideBar";
import {ListOfBooks} from "@/app/ui_components/ListOfBooks";

import Link from "next/link";
import {useAuth} from "@/app/context/AuthContext";

const Books = () => {
   const {user,logout} = useAuth();


   if(user===null){
       return (
           <div className={"flex   h-screen items-center justify-center"}>
               <div className={"space-y-10"}>
                   <h1 className={"text-2xl flex justify-center"}>You can't access Rectem if you are not registered or logged in</h1>
                   <div>
                       <Link href={"/"} className="btn w-full">Go to main page</Link>
                   </div>
               </div>

           </div>
       )
   }
    return (
        <>
            <div className={"container mx-auto p-2"}>
                <div className={"flex space-x-10"}>

                    <SideBar/>

                    <main className={"space-y-10"}>

                        <div className={"flex justify-between space-x-5"}>
                            <input
                                type="text"
                                placeholder="Search for a book"
                                className="input input-bordered input-md w-full "/>

                           {/* <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>*/}

                            <h1 className={"text-3xl"}>{user.username}</h1>
                        </div>

                        <div className="dropdown dropdown-right">
                            <div tabIndex={0} role="button" className="btn m-1">Select Course</div>
                            <ul tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Computer Science</a></li>
                                <li><a>Computer Engineering</a></li>
                            </ul>
                        </div>

                        <ListOfBooks />
                    </main>

                </div>
            </div>


        </>
    );
};

/*Books.getLayout = function getLayout(children:ReactNode) {
    return (
        <BooksLayout>
            {children}
        </BooksLayout>
    );
};*/

export default Books;

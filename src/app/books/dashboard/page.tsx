'use client';
import SideBar from "@/app/ui_components/SideBar";
import {ListOfBooks} from "@/app/ui_components/ListOfBooks";

import Link from "next/link";
import {useAuth} from "@/app/context/AuthContext";
import ProfileComponent from "@/app/ui_components/ProfileComponent";
import {DashBoard} from "@/app/ui_components/DashBoard";
import {AlignJustify} from "lucide-react";

const DashBoardPage = () => {
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

                    <main className={"space-y-5 w-full"}>
                        <DashBoard/>
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

export default DashBoardPage;

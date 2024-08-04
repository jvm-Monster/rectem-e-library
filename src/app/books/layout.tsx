// components/BooksLayout.js
import { ReactNode } from "react";
import SideBar from "@/app/ui_components/SideBar";

const BooksLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <section>
                {children}
            </section>

        </>
    );
};

export default BooksLayout;

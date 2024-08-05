import Pdf from "@/app/interfaces/Pdf";
import React from "react";
import Link from "next/link";
import {pdfUrl} from "@/app/api_endpoints";
import {Bookmark} from "lucide-react";

export const BookComponent :React.FC<Pdf>= ({id,name,course,description}) => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <div className={"flex justify-between"}>
                        <h2 className="card-title">{name}</h2>
                        <button >
                            <Bookmark className={" active:-scale-50 duration-1000 text-gray-600"}/>
                        </button>

                    </div>

                    <p>{course}</p>
                    <p>{description}</p>
                    <p>{course}</p>
                    <div className="card-actions justify-end">
                        <Link href={`${pdfUrl}/${id}`} target="_blank" className="btn btn-primary btn-sm" >Read</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
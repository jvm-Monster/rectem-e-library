import Pdf from "@/app/interfaces/Pdf";
import React from "react";
import Link from "next/link";

export const BookComponent :React.FC<Pdf>= ({id,name,course,description}) => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{course}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link href={`http://localhost:8082/rectem/api/pdfs/${id}`} target="_blank" className="btn btn-primary" >Read</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
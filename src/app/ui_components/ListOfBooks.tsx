'use client';
import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";
import {BookComponent} from "@/app/ui_components/BookComponent";
import Pdf from "@/app/interfaces/Pdf";
import {pdfUrl} from "@/app/api_endpoints";

export const ListOfBooks = () => {
    const [data, setData] = useState<Pdf[]>([]); // Initialize data state as an array of Pdf objects

    useEffect(() => {
        const fetchPdfsInfo = async () => {
            try {
                const response:AxiosResponse<Pdf[]> = await axios.get<Pdf[]>(`${pdfUrl}`);
                setData(response.data); // Set fetched data to the state
            } catch (error) {
                console.error("Error fetching PDFs:", error);
            }
        };

        fetchPdfsInfo(); // Call fetchPdfsInfo function when component mounts
    }, []);

    return (
        <>
            <h1 className={"text-3xl"}>Rectem E-Libary Books</h1>
            <ul className={"grid grid-cols-3 gap-x-32 gap-y-20"}>
                {data.map((pdf) => (
                    <li key={pdf.id}>
                        <BookComponent  id={pdf.id} name={pdf.name} course={pdf.course} description={pdf.description}/>
                    </li>
                ))}

            </ul>
        </>
    );
};

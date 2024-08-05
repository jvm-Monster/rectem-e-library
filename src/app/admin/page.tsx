'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const Admin: React.FC = () => {
    const [bookName, setBookName] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [fileSubmitSuccess, setFileSubmitSuccess] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setPdfFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setFileSubmitSuccess(null);

        const formData = new FormData();
        formData.append('name', bookName);
        formData.append('course', course);
        formData.append('description', description);

        if (pdfFile) {
            formData.append('file', pdfFile);
        }

        try {
            const response = await axios.post('http://localhost:8082/rectem/api/pdfs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
            setFileSubmitSuccess(true);
        } catch (error) {
            console.error('Error uploading file:', error);
            setFileSubmitSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center space-y-5 p-20 shadow-2xl rounded-2xl">
                <h1 className="text-2xl font-bold">Rectem E-Library Admin Panel</h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    <input
                        type="text"
                        placeholder="Book name"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        className="input input-bordered input-md w-full"
                    />



                    <select className="select w-full max-w-xs" onSelect={event => {setCourse(event.currentTarget.value)}}>
                        <option disabled selected>Pick department</option>
                        <option>Computer Sciecne</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <textarea
                        placeholder="Book description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>

                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full"
                    />

                    <button type="submit" className="btn btn-primary w-full">
                        {loading ? 'Uploading...' : 'Upload PDF'}
                    </button>
                </form>
                {fileSubmitSuccess === true && (
                    <div className="text-green-500">File uploaded successfully!</div>
                )}
                {fileSubmitSuccess === false && (
                    <div className="text-red-500">Error uploading file. Please try again.</div>
                )}
            </div>


        </div>
    );
};

export default Admin;

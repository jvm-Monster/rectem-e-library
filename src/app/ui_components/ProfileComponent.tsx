'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from "@/app/context/AuthContext";

export const ProfileComponent: React.FC = () => {
    const { user, logout } = useAuth();
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        if (user && user.profilePicture) {
            // Assuming user.profilePicture is already a base64 string
            setImageSrc(`data:image/jpeg;base64,${user.profilePicture}`);
        }
    }, [user]);

    if (!user) {
        return <div>Loading...</div>; // Or redirect to login page
    }

    return (
        <div className={"flex space-x-5 items-center avatar"}>
            <h1 className={"font-bold"}> {user.username}</h1>
            {imageSrc && <img src={imageSrc} className={"max-w-14 max-h-20 rounded-full"} alt="Profile" />}

        </div>
    );
};

export default ProfileComponent;

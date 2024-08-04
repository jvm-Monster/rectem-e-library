'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from "@/app/context/AuthContext";

export const ProfileComponent: React.FC = () => {
    const { user, logout } = useAuth();
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        if (user && user.profilePicture) {
            const readByteData = () => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImageSrc(reader.result as string);
                };
                reader.readAsDataURL(new Blob([user.profilePicture]));
            };

            readByteData();
        }
    }, [user]);

    if (!user) {
        return <div>Loading...</div>; // Or redirect to login page
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>

            {imageSrc && <img src={imageSrc} alt="Profile" />}
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default ProfileComponent;

'use client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface User {
    id: number;
    username: string;
    password: string;
    profilePicture: string; // Assuming profile image is a URL or base64 encoded image
}

interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    login: (id: number, username: string, password: string, profilePicture: string, rememberMe: boolean) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isMounted,setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
        const storedId = localStorage.getItem('id');
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        const storedProfilePicture = localStorage.getItem('profilePicture');
        console.log(storedPassword);
        if (storedId && storedUsername && storedPassword && storedProfilePicture) {
            const user: User = {
                id: parseInt(storedId, 10),
                username: storedUsername,
                password: storedPassword,
                profilePicture: storedProfilePicture,
            };
            setUser(user);
            // router.push('/dashboard');
        }
    }, []);

    const login = (id: number, username: string, password: string, profilePicture: string, rememberMe: boolean = false) => {
        if (rememberMe) {
            localStorage.setItem('id', id.toString());
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('profilePicture', profilePicture);
        }

        setUser({ id, username, password, profilePicture });
        // router.push('/dashboard'); // Uncomment and ensure you import useRouter from next/router
    };

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('profilePicture');

        setUser(null);
        // router.push('/login'); // Uncomment and ensure you import useRouter from next/router
    };

    const authContextValue: AuthContextType = {
        user,
        setUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

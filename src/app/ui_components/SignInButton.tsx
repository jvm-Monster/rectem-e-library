'use client';
import { Modal } from "@/app/ui_components/Modal";
import signInImage from "@/assets/images/signin_image.jpg";
import { useRouter } from 'next/navigation';
import axios, {AxiosResponse} from 'axios';
import { useState } from 'react';
import {useAuth, User} from "@/app/context/AuthContext";

const SignInButton = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router =  useRouter();
    const { setUser,login} = useAuth();
    const savePassword = (username:string,password:string,user:User)=>{
        login(user.id,username,password,user.profilePicture,true);
    }
    const handleSignIn = async () => {
        setLoading(true);

        try {
            // Replace with your API endpoint for sign-in
            const response:AxiosResponse<User> = await axios.post('http://localhost:8082/rectem/api/users/login', {
                username: username,
                password: password
            });

            // Assuming response contains user data upon successful login
            console.log('Sign in successful:', response.data);
            savePassword(username,password,response.data);


            // Navigate to another page upon successful login
            router.push('/books');// Replace '/dashboard' with your desired route
        } catch (error) {

            console.error('Error signing in:', error);
            alert('Sign in failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Modal imageSrc={signInImage.src} text={"Sign In"} buttonColor={"btn btn-primary"}>
                <div className={"space-y-10"}>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Username</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered min-w-96"
                            value={username}
                            onChange={event => {setUsername(event.target.value)}}
                        />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="password"
                            placeholder="Type here"
                            className="input input-bordered min-w-96"
                            value={password}
                            onChange={event => {setPassword(event.target.value)}}
                        />
                    </label>

                    <button
                        className="btn w-full"
                        onClick={handleSignIn}
                        disabled={loading}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default SignInButton;

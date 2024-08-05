import { Modal } from "@/app/ui_components/Modal";
import signUpImage from "@/assets/images/signup_image.jpg";
import React, { useState } from "react";
import axios from "axios";
import {baseUrl} from "@/app/api_endpoints";

interface SignUpInfo {
    name?: string;
    password?: string;
    confirmPassword?: string;
    profilePicture?: File | null; // Adjusted to use File | null for profile picture
}

const SignUpInputComponent = ({ text, type, prompt, onChange }: { text: string; type: string; prompt: string; onChange: (value: string) => void }) => {
    const [passwordLength, setPasswordLength] = useState(0);

    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{text}</span>
            </div>
            <input
                onChange={(event) => {
                    onChange(event.target.value);
                    if (type === "password") {
                        setPasswordLength(event.target.value.length);
                    }
                }}
                type={type}
                placeholder={prompt}
                className="input input-bordered min-w-96"
            />
            {/*{type === "password" && passwordLength < 4 && <h1 className={"text-error text-sm"}>Password length must be more than 4</h1>}*/}
        </label>
    );
};

export const SignUpButton = () => {
    const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
        name: "",
        password: "",
        confirmPassword: "",
        profilePicture: null, // Initialize profile picture state
    });
    const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Basic validation
        if (!signUpInfo.name || !signUpInfo.password || !signUpInfo.confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (signUpInfo.password !== signUpInfo.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Prepare form data for file upload
        const formData = new FormData();
        formData.append("username", signUpInfo.name || "");
        formData.append("password", signUpInfo.password || "");
        if (signUpInfo.profilePicture) {
            formData.append("file", signUpInfo.profilePicture);
        }

        try {
            setLoading(true);
            const response = await axios.post(`${baseUrl}/users`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("File uploaded successfully:", response.data);
            setSubmitSuccess(true);
        } catch (error) {
            console.error("Error uploading file:", error);
            setSubmitSuccess(false);
        } finally {
            setLoading(false);
            // Reset form fields after submission
            setSignUpInfo({
                name: "",
                password: "",
                confirmPassword: "",
                profilePicture: null,
            });
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSignUpInfo({ ...signUpInfo, profilePicture: event.target.files[0] });
        }
    };

    return (
        <Modal imageSrc={signUpImage.src} text={"Sign Up"} buttonColor={"btn btn-error text-white"}>
            <div className="">
                <form onSubmit={handleSignUp} className="space-y-5">
                    <SignUpInputComponent
                        text={"Name"}
                        type={"text"}
                        prompt={"Your name"}
                        onChange={(value) => {
                            setSignUpInfo({ ...signUpInfo, name: value });
                        }}
                    />
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Add a profile picture</span>
                        </div>
                        <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-md w-full" />
                    </label>
                    <SignUpInputComponent
                        text={"Password"}
                        type={"password"}
                        prompt={"Create your password"}
                        onChange={(value) => {
                            setSignUpInfo({ ...signUpInfo, password: value });
                        }}
                    />
                    <SignUpInputComponent
                        text={"Confirm password"}
                        type={"password"}
                        prompt={"Confirm password"}
                        onChange={(value) => {
                            setSignUpInfo({ ...signUpInfo, confirmPassword: value });
                        }}
                    />
                    <button type="submit" className="btn w-full">
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                    {submitSuccess !== null && (
                        <p className={submitSuccess ? "text-success" : "text-error"}>{submitSuccess ? "Signup successful!" : "Signup failed."}</p>
                    )}
                </form>
            </div>
        </Modal>
    );
};

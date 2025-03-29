"use client";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        profilepic: "",
        coverpic: "",

    });

    // Initialize form fields properly
    useEffect(() => {
        if (typeof window !== "undefined") {
            setForm({
                name: "",
                email: "",
                username: "",
                profilepic: "",
                coverpic: "",
                interests: "",
                plans: "",
            });
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.username) {
            alert("Please fill out all required fields.");
            return;
        }

        console.log("Form submitted:", form);
    };

    return (
        <div className="container mx-auto py-5 px-6">
            <h1 className="text-center my-5 text-3xl font-bold">
                Welcome to your Dashboard
            </h1>

            <form onSubmit={handleSubmit}>
                {[
                    { label: "Name", name: "name", type: "text", required: true },
                    { label: "Email", name: "email", type: "email", required: true },
                    { label: "Username", name: "username", type: "text", required: true },
                    { label: "Profile Picture", name: "profilepic", type: "text" },
                    { label: "Cover Picture", name: "coverpic", type: "text" },
                    { label: "Major", name: "razorpayid", type: "text" },
                    { label: "Goals", name: "razorpaysecret", type: "password" },
                ].map(({ label, name, type, required }) => (
                    <div className="my-2" key={name}>
                        <label
                            htmlFor={name}
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {label} {required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                            value={form[name]}
                            onChange={handleChange}
                            type={type}
                            name={name}
                            id={name}
                            required={required}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                ))}

                <div className="my-6">
                    <button
                        type="submit"
                        className="block w-full p-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Dashboard;

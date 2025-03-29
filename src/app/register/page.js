"use client";
import React, { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.username || !form.password) {
            alert("Please fill out all required fields.");
            return;
        }

        console.log("Form submitted:", form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
                <h1 className="text-center text-4xl font-extrabold text-purple-700 mb-6">LOGIN</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        { label: "Name", name: "name", type: "text", required: true },
                        { label: "Email", name: "email", type: "email", required: true },
                        { label: "Username", name: "username", type: "text", required: true },
                        { label: "Password", name: "password", type: "password", required: true },
                    ].map(({ label, name, type, required }) => (
                        <div key={name}>
                            <label
                                htmlFor={name}
                                className="block text-lg font-medium text-purple-900"
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
                                className="w-full p-3 border border-purple-400 rounded-lg bg-gray-50 text-gray-900 text-lg focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                    ))}

                    <div className="mt-6">
                        <Link href="/login" >
                            <button
                                type="submit"
                                className="w-full p-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-purple-500 focus:ring-4 font-bold text-lg"
                            >
                                Login
                            </button>
                        </Link>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Dashboard;

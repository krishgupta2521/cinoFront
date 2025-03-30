"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";




const goalsList = [
    { label: "AI Concepts", icon: "🤖" },
    { label: "Machine Learning", icon: "📊" },
    { label: "NLP", icon: "🗣️" },
    { label: "Image Recognition", icon: "📸" },
    { label: "AI Development", icon: "💻" },
    { label: "AI Projects", icon: "🚀" },
];

const skillsList = [
    { label: "Python", icon: "🐍" },
    { label: "Data Analysis", icon: "📊" },
    { label: "Deep Learning", icon: "🧠" },
    { label: "TensorFlow", icon: "📦" },
    { label: "PyTorch", icon: "🔥" },
    { label: "Cloud Computing", icon: "☁️" },
];

const SelectionComponent = ({ title, items, maxSelection, localStorageKey }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem(localStorageKey));
        if (savedItems) setSelectedItems(savedItems);
    }, [localStorageKey]);

    const handleSelect = (item) => {
        let updatedItems = [...selectedItems];

        if (updatedItems.includes(item)) {
            updatedItems = updatedItems.filter((i) => i !== item);
        } else {
            if (updatedItems.length < maxSelection) {
                updatedItems.push(item);
            }
        }

        setSelectedItems(updatedItems);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));
    };

    return (
        <div className="w-full max-w-md mx-auto bg-purple-300 shadow-lg rounded-lg p-6 mt-20">
            <h2 className="text-xl font-bold text-gray-800 text-center">{title}</h2>
            <p className="text-gray-600 text-center mb-4">Select up to {maxSelection}</p>

            <div className="flex flex-wrap justify-center gap-4">
                {items.map(({ label, icon }) => (
                    <button
                        key={label}
                        onClick={() => handleSelect(label)}
                        className={`flex items-center px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer
                            ${selectedItems.includes(label) ? "bg-purple-500 text-white" : "bg-gray-100 border border-purple-400 text-gray-700"}
                        `}
                    >
                        {icon} {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

const UserSelections = () => {
    const router = useRouter();

    const handleContinue = () => {
        const selectedGoals = JSON.parse(localStorage.getItem("userInterests")) || [];
        const selectedSkills = JSON.parse(localStorage.getItem("userSkills")) || [];

        console.log("Selected Goals:", selectedGoals);
        console.log("Selected Skills:", selectedSkills);

        setTimeout(() => {
            router.push("/login");
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-6 space-y-6">
            <SelectionComponent title="Select Your Goals" items={goalsList} maxSelection={6} localStorageKey="userInterests" />
            <SelectionComponent title="Select Your Skills" items={skillsList} maxSelection={6} localStorageKey="userSkills" />
            <button
                onClick={handleContinue}
                className="cursor-pointer mt-10 animate-bounce bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-300"
            >
                Continue
            </button>
        </div>
    );
};

export default UserSelections;

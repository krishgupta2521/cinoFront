"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Devains?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        question: "How does Devains help in career guidance?",
        answer: "Devains provides tailored career advice and resources to help individuals navigate their professional journey.",
    },
    {
        question: "Can Devains help with resume building?",
        answer: "Yes! Devains offers AI-powered resume building tools to enhance your job applications.",
    },
    {
        question: "Where can I download the app?",
        answer: "Yes! Devains offers AI-powered resume building tools to enhance your job applications.",
    },
];

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-5xl mx-auto p-8 space-y-1">

            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 rounded-b-lg shadow-lg ">
                    <button
                        className="w-full flex justify-between items-center p-7 bg-purple-500 text-pink-100 text-2xl text-center font-bold rounded-t-lg focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        {faq.question}
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-purple-500 text-pink-100 px-4 text-xl rounded-b-lg"
                    >
                        <p className="py-4">{faq.answer}</p>
                    </motion.div>
                </div >
            ))
            }
        </div >
    );
}

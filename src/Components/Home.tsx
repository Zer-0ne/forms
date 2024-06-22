"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Data } from "@/utils/interface";
import Link from "next/link";

export function HomeBackground({ data, setIsSubmit, setData }: {
    data: Data,
    setIsSubmit: Dispatch<SetStateAction<boolean>>;
    setData: Dispatch<SetStateAction<Data>>
}) {
    return (
        <div className="h-[100vh] m-0 w-full  relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl capitalize  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Welcome {`${data.firstname || data.name} ${data.lastname || ''}`}
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome! Here, you will find assistance in exploring new and interesting knowledge. Our goal is to provide you with help and solutions to your questions. Let's embark on a journey together to start new experiences!
                </p>
            </div>
            {/* <BackgroundBeams /> */}
            <button onClick={() => {
                setData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmpassword: ""
                });
                setIsSubmit(false);
            }} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>{`Forms`}</span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                        ></path>
                    </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>

            <div
                className="container justify-center flex items-center gap-3 flex-wrap max-w-[50%] mt-10"
            >
                <Link target="_blank" className="opacity-60" href={'https://github.com/Zer-0ne/'}>Github</Link>
                <Link target="_blank" className="opacity-60" href={'https://www.linkedin.com/in/sahil-khan-7a718a259/'}>Linkedin</Link>
                <Link target="_blank" className="opacity-60" href={'https://leetcode.com/u/sahil_khan_5/'}>LeetCode</Link>
            </div>
            <p
                className=" mt-5 mx-[auto] font-semibold text-[20px] opacity-60 capitalize "
            >
                Sahil khan
            </p>
            <p>
                {JSON.stringify(data)}
            </p>
        </div>
    );
}

import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { motion } from "framer-motion";


const Dropdown = ({ options, selectedOption, shake, onOptionSelect, className, ...props }: {
    options: string[];
    selectedOption: string;
    onOptionSelect: (option: string) => void;
    className?: string,
    shake: boolean
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    return (
        <motion.div {...props} className={cn(`flex mt-3 flex-col  relative cursor-pointer space-y-2 w-full  h-10  border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] 
           group-hover/input:shadow-none transition duration-400`, className)} animate={shake ? { x: [0, -10, 10, -10, 10, -10, 10, 0] } : {}} >
            <div className={`w-full my-[auto] ${![...options].includes(selectedOption) ? 'opacity-60' : 'opacity-100'}`} onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <div className=" z-[10] absolute left-0 top-[100%] flex mt-3  flex-col h-[auto] cursor-pointer space-y-2 w-full  border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400">
                    {options.map((option, index) => (
                        <div key={index} className="dropdown-option" onClick={() => handleOptionClick(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Dropdown;

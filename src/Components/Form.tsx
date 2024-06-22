"use client";
import React, { Dispatch, InputHTMLAttributes, SetStateAction, useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { Data, ToggleBool } from "@/utils/interface";
import { motion } from "framer-motion";
import { BtnType, Switch, basicForm, jobApplication, surveyForm } from "@/utils/constant";
import Dropdown from "./DropDown";
import { TextArea } from "@/ui/textarea";

type FormActionType = "basic" | "job" | "survey";

const actions = {
    'basic': basicForm,
    'job': jobApplication,
    'survey': surveyForm
}

export function Form({ handleSubmit, setData, data,  formActions, setformActions }: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    setData: Dispatch<SetStateAction<Data>>
    data: Data,
    setformActions: Dispatch<SetStateAction<string>>
    formActions: string
}) {
    const [shake, setShake] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [experiences, setExperiences] = useState<ToggleBool>()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'experience' && parseInt(value, 10) <= 0) {
            setShake(true)
            return;
        }
        setData({
            ...data,
            [name]: value
        });
    };

    useEffect(() => {
        setPasswordMatch(data.password === data.confirmpassword);
    }, [data.password, data.confirmpassword]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data)
        const isAnyFieldEmpty = Object.values(data).some(field => field === '');
        if (isAnyFieldEmpty || !passwordMatch) {
            setShake(true);
            setTimeout(() => setShake(false), 500); // Reset the shake effect after animation
        } else {
            handleSubmit(e);
        }
    };

    return (
        <div className="max-w-md max-h-[90vh] overflow-y-scroll w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome Coders
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Welcome to UserConnect if you can because we don&apos;t have a login flow
                yet
            </p>

            {/* swtich */}
            <div
                className="flex w-full flex-1 gap-3 justify-evenly flex-wrap items-center p-2 my-4"
            >
                {Switch.map((item, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer py-1 px-2 relative ${item.name === formActions as string ? `before:absolute before:-bottom-[10px] before:left-[50%] before:h-[5px] before:bg-black before:w-[5px] before:rounded-full opacity-100` : 'opacity-60'} `}
                        onClick={() => {
                            setformActions(item.name)
                        }}
                    >{item.label}</div>
                ))}
            </div>


            <form className="my-8" onSubmit={onSubmit}>
                {
                    actions[formActions as FormActionType]?.map((item, index) => (
                        <div key={index}>
                            {
                                ['name', 'name_email'].includes(item.name) && <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                    {item.fields?.map((field, idx) => (
                                        <LabelInputContainer key={idx} shake={shake && data[field.name as keyof Data] === ''}>
                                            <Label required htmlFor={field.name}>{field.label}</Label>
                                            <Input id={field.name} required={field.required} name={field.name} placeholder={field.placeholder} type={field.type} onChange={handleChange} />
                                        </LabelInputContainer>
                                    ))}
                                </div>
                            }{
                                (item.type === 'textarea') ? <LabelInputContainer className={`mb-4 ${item.display}`} shake={shake && data[item.name as keyof Data] === ''}>
                                    <Label required htmlFor={item.name}>{item.label}</Label>
                                    <TextArea id={item.name} required={item.required} name={item.name} placeholder={item.placeholder} type={item.type} onChange={handleChange} />
                                </LabelInputContainer> :
                                    (!['btn', 'name'].includes(item.name)) &&
                                    <LabelInputContainer className={`mb-4 ${item.display}`} shake={shake && data[item.name as keyof Data] === ''}>
                                        <Label required htmlFor={item.name}>{item.label}</Label>
                                        <Input id={item.name} required={item.required} name={item.name} placeholder={item.placeholder} type={item.type} onChange={handleChange} />
                                    </LabelInputContainer>
                            }
                            {
                                (item.type === 'dropdown') && <>
                                    <LabelInputContainer className="mb-4" shake={shake && data[item.name as keyof Data] === ''}>
                                        <Label required htmlFor={item.name}>{item.label}</Label>
                                        <Dropdown
                                            options={item.options as string[]}
                                            onOptionSelect={(s) => {
                                                setData({
                                                    ...data,
                                                    [item.name]: s
                                                });
                                            }}
                                            shake={false}
                                            selectedOption={data[item.name] as string || item.placeholder as string}
                                        />
                                    </LabelInputContainer>
                                </>
                            }
                            {
                                (['experience', 'portfolio-url', 'management-experience'].includes(item.name)) && <LabelInputContainer className="mb-4" shake={shake && data[item.name as keyof Data] === ''}>
                                    <div className="flex gap-1">
                                        <input type="checkbox" className="cursor-pointer" checked={experiences?.[item.name] || false} onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                                            setExperiences((prevExperiences) => ({
                                                ...prevExperiences,
                                                [item.name]: !prevExperiences?.[item.name]
                                            }));
                                        }} />
                                        <Label required={experiences?.[item.name] || false} htmlFor={item.name}>{item.label}</Label>
                                    </div>
                                    <Input id={item.name} className={`${!experiences || !experiences[item.name] ? 'hidden' : 'block'}`} disabled={!experiences || !experiences[item.name] ? true : false} required={item.required} name={item.name} placeholder={item.placeholder} type={item.type} onChange={handleChange} />
                                </LabelInputContainer>
                            }
                            {
                                item.options?.includes(data?.['survey-topic'] as string) ?
                                    <div>
                                        {
                                            item.sections?.map((section, i) => (
                                                <LabelInputContainer key={i} className={`mb-4 ${!section.name?.includes(data?.['survey-topic'] as string) && 'hidden'}`} shake={shake && data[section.name as keyof Data] === ''}>
                                                    {/* <Label required={false} className="mb-2" htmlFor={section.name}>{section.label}</Label> */}
                                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 flex-wrap gap-3">
                                                        {
                                                            section.fields.map((field, fieldIdx) => (
                                                                <LabelInputContainer key={fieldIdx} className={` ${!section.name?.includes(data?.['survey-topic'] as string) && 'hidden'}`} shake={shake && data[section.name as keyof Data] === ''}>
                                                                    <Label required htmlFor={field.name}>{field.label}</Label>
                                                                    {field?.type === 'dropdown' ? <Dropdown
                                                                        className="mt-0"
                                                                        options={field.options as string[]}
                                                                        onOptionSelect={(s) => {
                                                                            setData({
                                                                                ...data,
                                                                                [field.name]: s
                                                                            });
                                                                        }}
                                                                        shake={false}
                                                                        selectedOption={data[field.name] as string || item.placeholder as string}
                                                                    /> :
                                                                        <Input id={field.name} className="w-full" required={field.required} name={field.name} placeholder={field.placeholder} type={field.type} onChange={handleChange} />}
                                                                </LabelInputContainer>
                                                            ))
                                                        }
                                                    </div>

                                                </LabelInputContainer>
                                            ))
                                        }
                                    </div>
                                    : <></>
                            }
                            {
                                (item.name === 'additional-skills') && <LabelInputContainer className=" flex flex-wrap gap-2 mb-4" shake={shake && data[item.name as keyof Data] === ''}>
                                    <Label required htmlFor={item.name}>{item.label}</Label>
                                    <div
                                        className="flex flex-wrap gap-5"
                                    >
                                        {item && item?.skills?.map(skill => (
                                            <div key={skill} className="flex flex-wrap gap-2">
                                                <input
                                                    type="checkbox"
                                                    name={skill}
                                                    checked={data?.[item.name]?.includes(skill)}
                                                    onChange={(event) => {
                                                        const skill = event.target.name;
                                                        if (data?.[item.name]?.includes(skill)) {
                                                            setData({
                                                                ...data,
                                                                [item.name]: (data?.[item.name] as string[]).filter(s => s !== skill)
                                                            });
                                                        } else {
                                                            setData({
                                                                ...data,
                                                                [item.name]: [...(Array.isArray(data[item.name]) ? data[item.name] : []) as string[], skill]
                                                            });
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={skill}>
                                                    {skill}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                </LabelInputContainer>
                            }

                            {
                                item.name === 'btn' && <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type={item.type as BtnType}
                                >
                                    Submit &rarr;
                                    <BottomGradient />
                                </button>
                            }
                        </div>
                    ))
                }
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
    shake,
}: {
    children: React.ReactNode;
    className?: string;
    shake?: boolean;
}) => {
    return (
        <motion.div
            className={cn("flex flex-col space-y-2 w-full", className)}
            animate={shake ? { x: [0, -10, 10, -10, 10, -10, 10, 0] } : {}}
        >
            {children}
        </motion.div>
    );
};

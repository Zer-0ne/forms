"use client"
import { Background } from "@/Components/Background";
import { HomeBackground } from "@/Components/Home";
import { Form } from "@/Components/Form";
import { Data } from "@/utils/interface";
import { useEffect, useState } from "react";

const action: Record<string, Data> = {
  basic: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  },
  job: {
    name: ''
    , email: ''
    , phone: ''
    , position: ''
    , 'additional-skills': []
  },
  survey: {
    name: '',
    email: ''
    , "survey-topic": '',
    feedback: ''
  }
}


export default function Home() {
  const [formActions, setformActions] = useState('basic')
  const [data, setData] = useState<Data>(action[formActions]);
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    setData(action[formActions])
  }, [formActions])
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(data)
    e.preventDefault();
    setIsSubmit(true);
  };
  return (
    <Background
    >

      {
        !isSubmit ?
          <Form
            handleSubmit={handleSubmit}
            setData={setData}
            data={data}
            setformActions={setformActions}
            formActions={formActions}
          /> : <HomeBackground
            setData={setData}
            setIsSubmit={setIsSubmit} data={data} />

      }
    </Background>
  );
}

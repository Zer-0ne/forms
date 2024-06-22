
export type BtnType = "submit" | "reset" | "button" | undefined

export const basicForm = [
    {
        name: 'name',
        fields: [
            {
                name: 'firstname',
                type: 'text',
                required: true,
                placeholder: 'Sahil',
                label: 'First name'
            },
            {
                name: 'lastname',
                label: 'Last name',
                type: 'text',
                required: true,
                placeholder: 'Khan'
            }
        ]
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'email@gmail.com'
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        placeholder: '••••••••'
    },
    {
        name: 'confirmpassword',
        label: 'Confirm Password',
        type: 'password',
        required: true,
        option: [],
        placeholder: '••••••••'
    }, {
        name: 'btn',
        type: 'submit' as BtnType,
    }
]

const name_mail = {
    name: 'name_email',
    fields: [
        {
            name: 'name',
            label: 'Full Name',
            placeholder: 'Sahil khan',
            required: true,
            type: 'text'
        },
        {
            name: 'email',
            label: 'Email',
            placeholder: 'example@gmail.com',
            required: true,
            type: 'email'
        },
    ],
    display: 'hidden'
}
export const jobApplication = [
    {
        name: 'name_email',
        fields: [
            {
                name: 'name',
                label: 'Full Name',
                placeholder: 'Sahil khan',
                required: true,
                type: 'text'
            },
            {
                name: 'email',
                label: 'Email',
                placeholder: 'example@gmail.com',
                required: true,
                type: 'email'
            },
        ],
        display: 'hidden'
    }, {
        name: 'phone',
        label: 'Phone Number',
        placeholder: '79*******5',
        required: true,
        type: 'tel'
    }, {
        name: 'position',
        label: 'Position',
        placeholder: 'Developer, Designer, Manager',
        options: ["Developer", 'Designer', 'Manager'],
        display: 'hidden',
        required: true,
        type: 'dropdown'
    }, {
        name: 'experience',
        type: 'number',
        label: 'Experience',
        placeholder: '1-5 year',
        display: 'hidden'
    }, {
        name: 'portfolio-url',
        type: 'url',
        label: 'Portfolio Url',
        display: 'hidden',
        placeholder: 'https://www.linkedin.com/in/sahil-khan-7a718a259'
    }, {
        name: 'management-experience',
        type: 'text',
        label: 'Management Experiences',
        display: 'hidden',
        placeholder: 'https://www.linkedin.com/in/sahil-khan-7a718a259'
    }, {
        name: 'additional-skills',
        display: 'hidden',
        type: 'text',
        label: 'Addition Skill',
        skills: [
            'JavaScript',
            'CSS',
            'Python',
            'Java',
            'C++',
            'Ruby',
            'PHP',
            'Swift'
        ],
        placeholder: 'Manager at infosys',
    }, {
        name: 'interview-date',
        sections: [{
            fields: []
        }],
        type: 'datetime-local',
        option: [],
        required: true,
        placeholder: '10-10-2024 10:40am',
        label: 'Preferred Interview Time'
    }, {
        name: 'btn',
        type: 'submit' as BtnType,
    }
]


export const surveyForm = [
    {
        name: 'name_email',
        fields: [
            {
                name: 'name',
                label: 'Full Name',
                placeholder: 'Sahil khan',
                required: true,
                type: 'text'
            },
            {
                name: 'email',
                label: 'Email',
                placeholder: 'example@gmail.com',
                required: true,
                type: 'email'
            },
        ],
        display: 'hidden'
    }, {
        name: 'survey-topic',
        label: 'Survey Topic',
        placeholder: 'Technology, Health, Education',
        options: ["Technology", 'Health', 'Education'],
        display: 'hidden',
        skills: [],
        sections: [
            {
                name: 'Technology',
                label: 'Technology',
                fields: [
                    {
                        name: 'Favorite-Programming-Language',
                        display: 'hidden',
                        placeholder: 'Select your favorite language',
                        options: ['JavaScript', 'Python', "Java", "C#"],
                        type: 'dropdown',
                        required: false,
                        label: 'Favorite Programming Language'
                    }, {
                        name: 'experience',
                        type: 'number',
                        label: 'Experience',
                        required: false,
                        placeholder: '1-5 year',
                        display: 'hidden'
                    },
                ]
            }, {
                name: 'Health',
                label: 'Health',
                fields: [
                    {
                        name: 'Exercise-Frequency',
                        placeholder: 'Select your routine',
                        display: 'hidden',
                        options: ['Daily', 'Weekly', "Monthly", "Rarely"],
                        type: 'dropdown',
                        required: false,
                        label: 'Exercise Frequency'
                    },
                    {
                        name: 'Diet-Preference',
                        placeholder: 'Select your diet',
                        options: ['Vegetarian', 'Vegan', "Non-Vegetarian"],
                        display: 'hidden',
                        type: 'dropdown',
                        required: false,
                        label: 'Diet Preference'
                    },
                ]
            }, {
                name: 'Education',
                label: 'Education',
                fields: [
                    {
                        name: 'Highest-Qualification',
                        placeholder: 'Your Qualification',
                        display: 'hidden',
                        options: ['High School', 'Bachelor\'s', " Master\'s", "PhD"],
                        type: 'dropdown',
                        required: false,
                        label: 'Highest Qualification'
                    }, {
                        name: 'Field-of-Study',
                        type: 'text',
                        required: false,
                        label: 'Field of Study',
                        placeholder: 'MCA',
                        display: 'hidden'
                    },
                ]
            },
        ],
        required: true,
        type: 'dropdown'
    }, {
        // display: 'hidden',
        name: 'feedback',
        skills: [],
        label: 'Feedback',
        placeholder: 'Enter your feedback here',
        type: 'textarea',
        required: true
    }, {
        name: 'btn',
        type: 'submit' as BtnType,
    }
]

export const Switch = [
    {
        name: 'basic',
        label: 'Basic'
    }, {
        name: 'job',
        label: 'Job'
    }, {
        name: 'survey',
        label: 'Survey'
    }
]
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const returnValue = {
    name: "Ishraq R. Rahman",
    title: "Software Developer",
    email: "ishraq.r.rahman@gmail.com",
    contact: "+8801961229150",
    address: "Dhaka-1217, Bangladesh",

    socials: {
        Facebook: {
            link: "https://www.facebook.com/shwarup.rahman/",
            text: "facebook",
            icon: <FacebookIcon />,
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/ishraq-r-rahman-b014631a9/",
            text: "linkedIn",
            icon: <LinkedInIcon />,
        },
        Github: {
            link: "https://github.com/Ishraq-R-Rahman",
            text: "github",
            icon: <GitHubIcon />,
        },
    },

    about: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,

    interest: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    education: [
        {
            title: "Bangladesh University of Engineering & Technology",
            date: "2017-2022",
            description: "B.Sc. in Computer Science & Engineering",
            subDescription: "CGPA: 3.57 / 4.00",
        },
        {
            title: "Notre Dame College",
            date: "2014-2016",
            description: "Higher Secondary School Certificate",
            subDescription: "GPA: 5.00 / 5.00",
        },
        {
            title: "Ideal School & College",
            date: "2003-2014",
            description: "Secondary School Certificate",
            subDescription: "GPA: 5.00 / 5.00",
        },
    ],

    work: [
        {
            company: "IEIMS",
            title: "Software Developer",
            date: "2022-Present",
            description:
                "As a full stack developer, here I'm working with tech stacks like React, Java Sping Boot framework etc.",
        },
        {
            company: "Share My Skill",
            title: "Software Developer",
            date: "2021-2022",
            description:
                "As part of a contractual job, I worked with the MERN stack to build a Fiverr like website where users could upload tutorials and courses.",
        },
    ],

    skills: [
        {
            title: "FRONT-END",
            description: ["React", "CSS", "SASS", "Bootstrp", "Material UI"],
        },
        {
            title: "BACK-END",
            description: ["NodeJS", "Python/Django", "Java"],
        },
        {
            title: "ML",
            description: ["Python", "Keras", "Scikit-learn"],
        },
        {
            title: "DATABASES",
            description: ["MongoDB", "PostgreSQL", "MySQL"],
        },
        {
            title: "SRC CONTROL",
            description: ["Git", "Github", "BitBucket"],
        },
        {
            title: "SCRIPTING",
            description: ["Bash", "Powershell", "Python"],
        },
        {
            title: "OS",
            description: ["Linux", "Windows", "Android"],
        },
        {
            title: "DATA",
            description: ["Excel", "Scrapy", "Selenium"],
        },
    ],
};

export default returnValue;

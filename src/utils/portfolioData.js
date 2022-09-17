import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const returnValue = {
    name: "Ishraq R. Rahman",
    title: "Software Developer",
    email: "ishraq.r.rahman@gmail.com",
    contact: "+8801961229150",

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
};

export default returnValue;

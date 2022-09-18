import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

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

    reference: {
        name: "Dr. Mahmuda Naznin",
        email: "mahmudanaznin@cse.buet.ac.bd",
        title: "Professor",
        link: "https://cse.buet.ac.bd/faculty_list/detail/mahmudanaznin",
    },

    projects: [
        {
            tag: "Web Development",
            image: "https://images.unsplash.com/photo-1604332195161-dd16db9dd6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            icons: ["React", "NodeJS", "PostgreSQL", "Docker"],
            title: "Messenger",
            caption: "A messenger app with its common functionalities",
            description: `A messenger app that allows sending texts. Read and seen status are also implemented. The project has been implemented using NodeJS for Back-end , React for Front-end, PostgreSQL for Database.`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/Messenger", // insert paper link if it is published
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Web Development",
            image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            icons: ["NodeJS", "MongoDB"],
            title: "Devcamper",
            caption: "Bootcamp for young developers",
            description: `This project is mostly back-end focused where the idea was to create API routes, so that a bootcamp for young developers can access these and manage their entire camp easily`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/Devcamper", // insert paper link if it is published
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Web Development",
            image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            icons: ["NodeJS", "MongoDB"],
            title: "Healthcare Management System",
            caption: "A centralized healthcare management system.",
            description: `This project is mostly back-end focused where the idea was to create API routes, so that a clinic for patients can access these and manage their entire hospital easily`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/HealthCare-Management-System", // insert paper link if it is published
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Web Development",
            image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "KAIZEN",
            icons: ["React", "NodeJS", "MongoDB", "Heroku"],
            caption: "A P2P Lending Platform.",
            description: `A P2P lending platform allowing regular people to exchange loans for a little amount of interest.`,
            link: {
                paper: "https://github.com/Rafsani/KAIZEN", // insert paper link if it is published
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Machine Learning",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Audio Sentiment Analysis",
            icons: ["Python", "Scikit-learn", "Keras"],
            caption: "Finding positive or negative connotation in a review",
            description: `Whenever a reviewer gives a review about a product it can either have positive or negative connotation. This project intends to find that and categorize the reviews to find the positive or negative sentiment behind it.`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/Audio-sentiment-analysis",
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Machine Learning",
            image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            title: "CNN",
            icons: ["Python"],
            caption: "Implementing convolutional neural network from scratch.",
            description: `Implementing convolutional neural network from scratch.`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/CNN",
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Machine Learning",
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            title: "HMM Viterbi Baum-welch",
            icons: ["Python"],
            caption: "Implementing HMM Viterbi Baum-welch model from scratch.",
            description: `Implementing HMM Viterbi Baum-welch model from scratch.`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/HMM-Viterbi-Baum_welch",
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Security",
            image: "https://care247.tech/uploads/service/internet-security-firewall-154017bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png",
            title: "AES",
            icons: ["Python"],
            caption: "An implementation of AES algorithm",
            description: `A rudimentary implementation of AES algorithm`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/AES-Final",
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Miscellaneous",
            image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            title: "Discord Debate Timer",
            icons: ["Javascript"],
            caption: "A debate timer bot for Discord",
            description: `A debate timer bot for Discord`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/Discord-Debate-Timer-Bot",
                icon: <GitHubIcon />,
            },
        },
        {
            tag: "Miscellaneous",
            image: "https://vegibit.com/wp-content/uploads/2021/03/Python-Scrapy-Introduction.png",
            title: "Middleman Ad Platform",
            icons: ["Javascript", "Python", "Scrapy", "Selenium", "SQLite3DB"],
            caption: "A scraper based middleman ad platform",
            description: `The idea was to reduce user time in finding and comparing the prices of similar products. I scrape different E-commerce platforms to find similar products and created APIs for user to access these products prices.`,
            link: {
                paper: "https://github.com/Ishraq-R-Rahman/middleman-ad",
                icon: <GitHubIcon />,
            },
        },
    ],

    research: [
        {
            tag: "Security",
            image: "https://onlinelibrary.wiley.com/cms/asset/1f1875ba-1a89-479a-b19f-bb0d4b9c701f/ett3872-fig-0001-m.jpg",
            title: "The Comparative Study of Semantic Aware Shilling Attacks for Collaborative Filtering",
            supervisor: {
                link: "https://cse.buet.ac.bd/faculty_list/detail/mahmudanaznin",
                name: "Dr. Mahmuda Naznin",
            },
            caption:
                "A comparative picture is drawn between low knowledge shilling attacks against high knowledge for recommendation systems as part of my thesis.",
            description: `Recommendation systems have become unspoken tool that helps modern users save their time while making a choice  and provides a neutral platform for competing products to prove itself. Since, the entire idea of recommendation systems is hinged upon neutrality, the platform has to be open to multitude of users. This introduces some vulnerability that can be easily exploited via shilling attacks. There are a varied methods to conduct a shilling attack against such a platform like random , bandwagon and average attack. But it has been proven, with semantic awareness between the user and item in mind, an attacker can vastly improve the efficacy of the attack. Our paper intends to evaluate the "Love Hate Attack" in its baseline form and find an approach that will look into the semantic relatedness between items and users. For this, the same approach as the baseline model of love hate attack is  followed. Only when the shilling profiles are generated to conduct the attack, the semantic relatedness is taken into consideration. Extensive experiments on data collected from DBPedia show the improvement in efficacy for all attacks. Even though the improvement is smaller for love hate attack, it is no less significant.`,
            link: {
                paper: "https://docs.google.com/presentation/d/1xECaDy07mKa_xwT2t8RImHDlzGCU77esJhqjDRbucFg/edit?usp=sharing", // insert paper link if it is published
                icon: <BiotechOutlinedIcon />,
            },
        },
        {
            tag: "Security",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Android_logo_2019.png/800px-Android_logo_2019.png",
            title: "Android Malware Detection",
            supervisor: {
                link: "https://cse.buet.ac.bd/faculty_list/detail/mshohrabhossain",
                name: "Dr. Md. Shohrab Hossain",
            },
            caption:
                "Detection of android malwares based on their system behavior by inspecting the system calls made. \n **Paper still ongoing**",
            description: `Detection of android malwares based on their system behavior by inspecting the system calls made.`,
            link: {
                paper: "",
                icon: <BiotechOutlinedIcon />,
            },
        },
        {
            tag: "Network",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "DeepVRM: Deep Learning Based Virtual Resource Management for Energy Efficiency",
            supervisor: {
                link: "https://cse.buet.ac.bd/faculty_list/detail/mahmudanaznin",
                name: "Dr. Mahmuda Naznin",
            },
            caption:
                "Finding an energy efficient network with dynamic virtual network resource management model by forecasting required VNF and vCPU more accurately than other models.",
            description: `Network Function Virtualization (NFV) provides dynamic, energy-efficient, and cost-effective network services with the goal of segregating network services from expensive and energy hungry hardware. NFV provides the services through Virtual Network Functions (VNFs). Traditional hardware-based network functions are kept on running always results in a huge energy consumption. With NFV, network operators turn off the virtual instances of the network services according to the service demand. When the demand is low, these can be off to save significant energy saving. For smooth connectivity, operators need to estimate the future requirement of VNFs for energy efficiency. We propose deep learning based VNF forecasting methods to forecast vCPU requirement for different service functions depending on the traffic. Our results show promising accuracy, less errors. We find the impact of several deep learning based forecasting models like LSTM, Bidirectional-LSTM, CNN-LSTM, and CNN based models considering both univariate and multivariate traffic. We find that CNN and Bidirectional-LSTM based forecasting models can forecast required VNF and vCPU more accurately than the other machine learning models. We think our research findings will lead to an energy efficient network with dynamic virtual network resource management model.`,
            link: {
                paper: "",
                icon: <BiotechOutlinedIcon />,
            },
        },
        // {
        //     tag: "Machine Learning",
        //     image: "https://care247.tech/uploads/service/internet-security-firewall-154017bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png",
        //     title: "Title 4",
        //     supervisor: {
        //         link: "",
        //         name: "Dr. Mahmuda Naznin",
        //     },
        //     caption: "A short description",
        //     description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        //     link: {
        //         paper: "",
        //         icon: <BiotechOutlinedIcon />,
        //     },
        // },
    ],
};

export default returnValue;

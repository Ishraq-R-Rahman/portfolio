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

    about: `I am a graduate of Bangladesh University of Engineering & Technology, Class of 2016. I'm incredibly passionate about Computer Science. I am currently working as a Software Developer in IEIMS where I'm currently involved with projects funded by Bangladesh Bureau of Educational Information and Statistics. I am a fast learner and a believer in hard work. My interests include software design and development, machine learning, system design and information security.`,

    interest: `I am particularly interested in Information security , Computer Networks and the practical applications of Machine Learning. In fact, my thesis was focused on the security in Recommender Platforms. Nonetheless, I'm very interested to explore the nitty and gritty of these fields in the near future.`,
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
            tag: "Machine Learning",
            image: "https://care247.tech/uploads/service/internet-security-firewall-154017bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png",
            title: "Machine Learning Approaches to Metastasis Bladder and Secondary Pulmonary Cancer Classification Using Gene Expression Data",
            status: {
                text: "Submitted in ICCIT",
                color: "success",
            },
            supervisor: {
                link: "",
                name: "",
            },
            caption:
                "Finding the best classifier to distinguish between cancer types that similar causal link is imperative for better diagnosis. In this paper, only bladder and lung cancer were considered.",
            description: `Similar causal relationships can exist between many cancer types, for example, metastatic bladder cancer and secondary lung cancer. This relatedness must therefore be taken into account for the diagnosis to be more accurate. The categorization of cancers can benefit from gene expression studies. In order to categorize cancer tissues with a comparable causal link, the best classifier model is sought after in this research. The CuMiDa dataset is used to obtain the lung and bladder cancer datasets, and parameters are modified to improve accuracy once fewer classifiers are taken into account. According to the experimental findings, Linear SVC performs the highest with 0.97 accuracy, followed by Logistic Regress and XGBoost, which perfroms with 0.96 accuracy.`,
            link: {
                paper: "",
                icon: <BiotechOutlinedIcon />,
            },
        },
        {
            tag: "Machine Learning",
            image: "https://pbblogassets.s3.amazonaws.com/uploads/2015/08/Audio-Waveforms-Featued-Image.jpg",
            title: "Dataset Preparation and Automated Categorization of Bangla Audio Content using Publicly Available Data",
            status: {
                text: "Submitted in ICASSP",
                color: "success",
            },
            supervisor: {
                link: "",
                name: "",
            },
            caption:
                "We propose an automated system that categorizes audio data and develop our own dataset which has been generated by extracting the audio data from Bangla YouTube videos.",
            description: `Audio content categorization has become a very difficult task due to the sheer volume of user generated video/audio data in social media platforms. This is especially true for low-resource languages like Bangla. In this paper, we propose an automated system that categorizes audio data. We develop our own dataset which has been generated by extracting the audio data from Bangla YouTube videos. For the classification task, Log Mel Spectogram and Log MFCC based models are considered. We use XGBoost as our baseline classifier as well as a deep learning classifier that uses a pretrained ImageNet as transfer model. We have developed a novel algorithm for dynamic clip selection that achieves better result than naive approaches for clip selection e.g. random selection or fixed selection. We then compare the effectiveness of our dataset on different state-of-the-art models. We also propose a novel classifier for content categorization and validated its accuracy on our Bangla audio content dataset. We have found that log Mel-Spectogram based classifiers achieve the highest accuracy of about 92.3%.`,
            link: {
                paper: "",
                icon: <BiotechOutlinedIcon />,
            },
        },
        {
            tag: "Network",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "DeepVRM: Deep Learning Based Virtual Resource Management for Energy Efficiency",
            status: {
                text: "Submitted in Springer",
                color: "success",
            },
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
        {
            tag: "Security",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Android_logo_2019.png/800px-Android_logo_2019.png",
            title: "Android Malware Detection",
            status: {
                text: "Ongoing Work",
                color: "primary",
            },
            supervisor: {
                link: "https://cse.buet.ac.bd/faculty_list/detail/mshohrabhossain",
                name: "Dr. Md. Shohrab Hossain",
            },
            caption:
                "Detection of android malwares based on their system behavior by inspecting the system calls made.",
            description: `Detection of android malwares based on their system behavior by inspecting the system calls made.`,
            link: {
                paper: "",
                icon: <BiotechOutlinedIcon />,
            },
        },
    ],
};

export default returnValue;

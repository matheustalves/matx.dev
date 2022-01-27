export const langs = [
    "python",
    "c++",
    "java",
    "c#",
    "javascript",
    "typescript",
];
export const webDev = [
    "react",
    "next.js",
    "node.js",
    ".net",
    "django",
    "flask",
    "apis",
    "frameworks",
];
export const databases = [
    "ms sql server",
    "mysql",
    "mongodb",
    "firebase",
    "sqlite",
];
export const ml = ["numpy", "pytorch", "tensorflow", "tk", "opencv"];
export const other = ["git", "docker", "azure", "aws", "linux", "windows"];

type projectItem = {
    title: string;
    description: string;
    stack: string[];
    link: string;
    img: string;
    colors: string[];
};

export const projectsData: { [key: string]: projectItem[] } = {
    wd: [
        {
            title: "Node.js Clinic CRUD App",
            description: "Simple CRUD application for medical clinics.",
            stack: ["node", "express", "bootstrap", "mongodb"],
            link: "https://clinica-matx.herokuapp.com/",
            img: "/clinic.gif",
            colors: ["#50f27b", "#50e5f2", "#f25096", "#f2f250"],
        },
        {
            title: "Dataset Enhancer",
            description:
                "Generates samples for Neural Networks using Data Augmentation.",
            stack: ["python", "django", "tensorflow", "bootstrap"],
            link: "https://datasetenhancer.pythonanywhere.com/",
            img: "/de.gif",
            colors: ["#5094f2", "#acf250", "#f27950", "#f25096"],
        },
        {
            title: "This Website",
            description: "My personal website.",
            stack: ["next.js", "material ui", "vercel"],
            link: "/",
            img: "/personal.gif",
            colors: ["#f25050", "#8650f2", "#c6f5c8"],
        },
        {
            title: ".NET Clinic CRUD App",
            description: "Simple CRUD application for medical clinics.",
            stack: [".net mvc", "bootstrap", "ms sql server"],
            link: "https://clinica-matx.somee.com/",
            img: "/clinic.gif",
            colors: ["#6050f2", "#f25096", "#f2f250"],
        },
    ],
    ml: [
        {
            title: "BIRADS Classifier",
            description:
                "Data System with GUI for breast cancer classification and image processing.",
            stack: ["python", "tkinter", "numpy", "sk"],
            link: "https://github.com/matheustalves/BIRADS-Classifier",
            img: "/birads.png",
            colors: ["#5094f2", "#f2506b", "#e7f250", "#ea50f2"],
        },
        {
            title: "CNN MMORPG BOT",
            description:
                "Bot for a videogame using a convolutional neural net and computer vision.",
            stack: ["python", "pytorch", "numpy", "opencv"],
            link: "https://github.com/matheustalves/rs-netbot",
            img: "/bot.gif",
            colors: ["#5094f2", "#f27950", "#e7f250", "#50f263"],
        },
        {
            title: "Dataset Enhancer",
            description:
                "Generates samples for Neural Networks using Data Augmentation.",
            stack: ["python", "django", "tensorflow", "bootstrap"],
            link: "https://datasetenhancer.pythonanywhere.com/",
            img: "/de.gif",
            colors: ["#5094f2", "#acf250", "#f27950", "#f25096"],
        },
    ],
    ot: [
        {
            title: "L Language Compiler",
            description:
                "A Complete Compiler (Lexer, Parser, Code Gen for Assembly x64) for a C subset language.",
            stack: ["java", "assembly", "nasm"],
            link: "https://github.com/matheustalves/L-Language-Compiler",
            img: "/nasm.png",
            colors: ["#f26868", "#68f2bd", "#f268ee"],
        },
        {
            title: "Runescape Clicker",
            description: "An open source Runescape Clicker with GUI.",
            stack: ["python", "tkinter", "pynput"],
            link: "https://github.com/matheustalves/RunescapeClicker",
            img: "/rsc.png",
            colors: ["#5094f2", "#f2506b", "#68f294"],
        },
        {
            title: "Java Data Structures from Scratch",
            description:
                "Popular data structures from scratch for a custom class.",
            stack: ["java"],
            link: "https://github.com/matheustalves/Java-Data-Structures",
            img: "/java.png",
            colors: ["#f26868"],
        },
    ],
};

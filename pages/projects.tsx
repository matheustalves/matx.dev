import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'
import { Container, Typography, Box, Link, Grid, Paper, FormControl, InputLabel, MenuItem, Avatar, Chip } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';

type projectItem = {
    title: string,
    description: string,
    stack: string[],
    link: string,
    img: string
}

const projectsData: { [key: string]: projectItem[] } = {
    "wd": [
        {
            title: "Node.js Clinic CRUD App",
            description: "Simple CRUD application for medical clinics.",
            stack: ["node", "express", "bootstrap", "mongodb"],
            link: "https://clinica-matx.herokuapp.com/",
            img: "/clinic.gif"
        },
        {
            title: "Dataset Enhancer",
            description: "Generates samples for Neural Networks using Data Augmentation.",
            stack: ["python", "django", "tensorflow", "bootstrap"],
            link: "https://datasetenhancer.pythonanywhere.com/",
            img: "/de.gif"

        },
        {
            title: "This Website",
            description: "My personal website.",
            stack: ["next.js", "material ui", "vercel"],
            link: "/",
            img: "/personal.gif"

        },
        {
            title: ".NET Clinic CRUD App",
            description: "Simple CRUD application for medical clinics.",
            stack: [".net mvc", "bootstrap", "ms sql server"],
            link: "https://clinica-matx.somee.com/",
            img: "/clinic.gif"

        },
    ],
    "ml": [
        {
            title: "BIRADS Classifier",
            description: "Data System with GUI for breast cancer classification and image processing.",
            stack: ["python", "tkinter", "numpy", "sk"],
            link: "https://github.com/matheustalves/BIRADS-Classifier",
            img: "/birads.png"

        },
        {
            title: "CNN MMORPG BOT",
            description: "Bot for a videogame using a convolutional neural net and computer vision.",
            stack: ["python", "pytorch", "numpy", "opencv"],
            link: "https://github.com/matheustalves/rs-netbot",
            img: "/bot.gif"

        },
        {
            title: "Dataset Enhancer",
            description: "Generates samples for Neural Networks using Data Augmentation.",
            stack: ["python", "django", "tensorflow", "bootstrap"],
            link: "https://datasetenhancer.pythonanywhere.com/",
            img: "/de.gif"

        },
    ],
    "ot": [
        {
            title: "L Language Compiler",
            description: "A Complete Compiler (Lexer, Parser, Code Gen for Assembly x64) for a C subset language.",
            stack: ["java", "assembly", "nasm"],
            link: "https://github.com/matheustalves/L-Language-Compiler",
            img: "/nasm.png"

        },
        {
            title: "Runescape Clicker",
            description: "An open source Runescape Clicker with gui.",
            stack: ["python", "tkinter", "pynput"],
            link: "https://github.com/matheustalves/RunescapeClicker",
            img: "/rsc.png"

        },
        {
            title: "Java Data Structures from Scratch",
            description: "Famous data structures from scratch for a custom class.",
            stack: ["java"],
            link: "https://github.com/matheustalves/Java-Data-Structures",
            img: "/java.png"
        },
    ]
}

const Projects: NextPage = () => {
    const [projectCategory, setprojectCategory] = useState('ml');

    const handleChange = (event: SelectChangeEvent) => {
        setprojectCategory(event.target.value);
    };

    return (
        <Container maxWidth="md" sx={{ p: 5 }}>
            <Head>
                <title>projects | matx</title>
                <meta name="description" content="projects matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box display="flex" marginBottom={5} justifyContent="space-between" alignItems="center">
                <Typography variant="h4" fontWeight="bold">
                    projects
                </Typography>

                <Box>
                    <Link href="/" color="secondary" sx={{ mr: 1 }}>home</Link>
                    <Link href="/about" color="secondary" sx={{ mx: 1 }}>about</Link>
                    <Link href="/skills" color="secondary" sx={{ mx: 1 }}>skills</Link>
                    <Link href="/projects" color="inherit" sx={{ ml: 1 }}>projects</Link>
                </Box>
            </Box>

            <Paper elevation={6} sx={{ pt: 0, height: "100%", width: "100%", borderRadius: '10px' }}>
                <Box display="flex" justifyContent="center" sx={{ background: '#e2e7f5' }}>
                    <FormControl sx={{ minWidth: "100%" }} color="primary" variant="standard">
                        <Select
                            id="simpleSelect"
                            value={projectCategory}
                            autoWidth
                            onChange={handleChange}
                            sx={{ background: '#e2e7f5', color: "#1A1B26" }}
                        >
                            <MenuItem value="ml">
                                <Box display="flex" alignContent="center" justifyContent="center" p={1} pb={0}>
                                    <Box sx={{ mx: 1 }}>
                                        <VisibilityIcon color="success" />
                                    </Box>
                                    <Typography variant="subtitle2" fontWeight="bold" color="success">
                                        Machine Learning
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem value="wd">
                                <Box display="flex" alignContent="center" justifyContent="center" p={1} pb={0}>
                                    <Box sx={{ mx: 1 }}>
                                        <WebIcon color="secondary" />
                                    </Box>
                                    <Typography variant="subtitle2" fontWeight="bold" color="success">
                                        Web Development
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem value="ot">
                                <Box display="flex" alignContent="center" justifyContent="center" p={1} pb={0}>
                                    <Box sx={{ mx: 1 }}>
                                        <BuildIcon color="warning" />
                                    </Box>
                                    <Typography variant="subtitle2" fontWeight="bold" color="success">
                                        Other
                                    </Typography>
                                </Box>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Grid container sx={{ m: 0, p: 3, maxHeight: "100%", maxWidth: "100%" }} alignItems="center" alignContent="center" justifyContent="center" textAlign="center">
                    {projectsData[projectCategory].map((item, index) => (
                        <Grid container key={index} spacing={3} sx={{ p: 2, maxHeight: "100%", maxWidth: "100%" }} alignItems="center" alignContent="center" justifyContent="center" textAlign="center">
                            <Grid item sm={12} md={6} sx={{ maxHeight: "100%", maxWidth: "100%" }}>
                                <Box sx={{ my: 1 }}>
                                    <Typography variant="h5" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ my: 1 }}>
                                    <Typography variant="caption" >
                                        {item.description}
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    {item.stack.map((stackItem, stackIndex) => {
                                        return <Chip label={stackItem} key={stackIndex} size="small" sx={{ m: .5, background: '#73DACA', color: '#1A1B26' }} />
                                    })}
                                </Box>
                            </Grid>
                            <Grid item sm={12} md={6} sx={{ height: "100%", width: "100%" }}>
                                <Box sx={{ background: '#24283B', border: '3px solid #7AA2F7', borderRadius: '10px', height: "100%", width: "100%" }}>
                                    <Image
                                        alt="itemImg"
                                        src={item.img}
                                        width={250}
                                        height={250}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container >
    )
}

export default Projects

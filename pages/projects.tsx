import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'
import { Container, Typography, Box, Link, Grid, Paper, FormControl, InputLabel, MenuItem, Avatar } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';

import img from '../public/node.png'

type projectItem = {
    title: string,
    description: string,
    stack: string[],
    link: string
}

const projectsData: { [key: string]: projectItem[] } = {
    "wd": [
        {
            title: "Node.Js Clinic CRUD App",
            description: "Simple CRUD application for medical clinics.",
            stack: ["node", "express", "bootstrap", "mongodb"],
            link: "https://clinica-matx.herokuapp.com/"
        },
        {
            title: ".NET Clinic CRUD App",
            description: "Simple CRUD application for medical clinics.",
            stack: [".net mvc", "bootstrap", "ms sql server"],
            link: "https://clinica-matx.somee.com/"
        },
        {
            title: "Dataset Enhancer",
            description: "Generates samples for Neural Networks using Data Augmentation.",
            stack: ["python", "django", "tensorflow", "bootstrap"],
            link: "https://datasetenhancer.pythonanywhere.com/"
        },
        {
            title: "This Website",
            description: "My personal website.",
            stack: ["next.js", "material ui", "vercel"],
            link: "/"
        },
    ],
    "ml": [
        {
            title: "BIRADS Classifier",
            description: "Data System with GUI for breast cancer classification and image processing.",
            stack: ["python", "tkinter", "numpy", "sk"],
            link: "https://github.com/matheustalves/BIRADS-Classifier"
        },
        {
            title: "CNN MMORPG BOT",
            description: "Bot for a videogame using a convolutional neural net and computer vision.",
            stack: ["python", "pytorch", "numpy", "opencv"],
            link: "https://github.com/matheustalves/rs-netbot"
        },
        {
            title: "Dataset Enhancer",
            description: "Generates samples for Neural Networks using Data Augmentation.",
            stack: ["python", "django", "tensorflow", "bootstrap"],
            link: "https://datasetenhancer.pythonanywhere.com/"
        },
    ],
    "ot": [
        {
            title: "L Language Compiler",
            description: "A Complete Compiler (Lexer, Parser, Code Gen for Assembly x64) for a C subset language.",
            stack: ["java", "assembly", "nasm"],
            link: "https://github.com/matheustalves/L-Language-Compiler"
        },
        {
            title: "Runescape Clicker",
            description: "An open source Runescape Clicker with gui.",
            stack: ["python", "tkinter", "pynput"],
            link: "https://github.com/matheustalves/RunescapeClicker"
        },
        {
            title: "Java Data Structures from Scratch",
            description: "Famous data structures from scratch for a custom class.",
            stack: ["java"],
            link: "https://github.com/matheustalves/Java-Data-Structures"
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
                    <Link href="/skills" color="secondary" sx={{ ml: 1 }}>skills</Link>
                </Box>
            </Box>

            <Paper elevation={6} sx={{ pt: 0, height: "100%", width: "100%" }}>
                <Box display="flex" justifyContent="center" sx={{ background: '#e2e7f5' }}>
                    <FormControl sx={{ minWidth: 20 }} color="secondary" variant="standard">
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

                <div>
                    <Grid container spacing={5} sx={{ m: 0, p: 3, maxHeight: "100%", maxWidth: "100%" }} alignItems="center" alignContent="center" justifyContent="center" textAlign="center">
                        {projectsData[projectCategory].map((item, index) => (
                            <Grid container item key={index} spacing={1} xs={12} alignItems="center" alignContent="center" justifyContent="center" textAlign="center">
                                <Grid item md={6}>
                                    <Typography variant="h5" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="caption">
                                        {item.description}
                                    </Typography>
                                </Grid>
                                <Grid item md={6}>
                                    <Box sx={{ background: '#e2e7f5', border: '2px solid #BB9AF7' }}>
                                        <Image
                                            alt="Avatar"
                                            src={img}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </div>


            </Paper>
        </Container >
    )
}

export default Projects

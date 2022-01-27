import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import {
    Container,
    Typography,
    Box,
    Link,
    Grid,
    Paper,
    FormControl,
    MenuItem,
    Chip,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import WebIcon from "@mui/icons-material/Web";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BuildIcon from "@mui/icons-material/Build";
import LaunchIcon from "@mui/icons-material/Launch";

import { projectsData } from "../utils/data";

const Projects: NextPage = () => {
    const [projectCategory, setprojectCategory] = useState("ml");

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

            <Grid container spacing={3} marginBottom={5} alignItems="center">
                <Grid item sm={6}>
                    <Typography variant="h4" fontWeight="bold">
                        projects
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Box textAlign="right">
                        <Link href="/" color="secondary" sx={{ mr: 1 }}>
                            home
                        </Link>
                        <Link href="/about" color="secondary" sx={{ mx: 1 }}>
                            about
                        </Link>
                        <Link href="/skills" color="secondary" sx={{ mx: 1 }}>
                            skills
                        </Link>
                        <Link href="/projects" color="inherit" sx={{ ml: 1 }}>
                            projects
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Paper
                elevation={6}
                sx={{
                    pt: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ background: "#e2e7f5" }}
                >
                    <FormControl
                        sx={{ minWidth: "100%" }}
                        color="primary"
                        variant="standard"
                    >
                        <Select
                            id="simpleSelect"
                            value={projectCategory}
                            autoWidth
                            onChange={handleChange}
                            sx={{ background: "#e2e7f5", color: "#1A1B26" }}
                        >
                            <MenuItem value="ml">
                                <Box
                                    display="flex"
                                    alignContent="center"
                                    justifyContent="center"
                                    p={1}
                                    pb={0}
                                >
                                    <Box sx={{ mx: 1 }}>
                                        <VisibilityIcon color="success" />
                                    </Box>
                                    <Typography
                                        variant="subtitle2"
                                        fontWeight="bold"
                                        color="success"
                                    >
                                        Machine Learning
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem value="wd">
                                <Box
                                    display="flex"
                                    alignContent="center"
                                    justifyContent="center"
                                    p={1}
                                    pb={0}
                                >
                                    <Box sx={{ mx: 1 }}>
                                        <WebIcon color="secondary" />
                                    </Box>
                                    <Typography
                                        variant="subtitle2"
                                        fontWeight="bold"
                                        color="success"
                                    >
                                        Web Development
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem value="ot">
                                <Box
                                    display="flex"
                                    alignContent="center"
                                    justifyContent="center"
                                    p={1}
                                    pb={0}
                                >
                                    <Box sx={{ mx: 1 }}>
                                        <BuildIcon color="warning" />
                                    </Box>
                                    <Typography
                                        variant="subtitle2"
                                        fontWeight="bold"
                                        color="success"
                                    >
                                        Other
                                    </Typography>
                                </Box>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Grid
                    container
                    sx={{ m: 0, p: 3, maxHeight: "100%", maxWidth: "100%" }}
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    {projectsData[projectCategory].map((item, index) => (
                        <Grid
                            container
                            key={index}
                            spacing={2}
                            sx={{ p: 1, maxHeight: "100%", maxWidth: "100%" }}
                            alignItems="center"
                            alignContent="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                            <Grid
                                item
                                sm={12}
                                md={6}
                                sx={{ maxHeight: "100%", maxWidth: "100%" }}
                            >
                                <Box
                                    display="flex"
                                    flexWrap="wrap"
                                    justifyContent="center"
                                    alignContent="center"
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        margin={1}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        margin={1}
                                    >
                                        <LaunchIcon />
                                    </Link>
                                </Box>
                                <Box sx={{ my: 1 }}>
                                    <Typography variant="caption">
                                        {item.description}
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    {item.stack.map((stackItem, stackIndex) => {
                                        return (
                                            <Chip
                                                label={stackItem}
                                                key={stackIndex}
                                                size="small"
                                                sx={{
                                                    m: 0.5,
                                                    background:
                                                        item.colors[stackIndex],
                                                    color: "#000000",
                                                }}
                                            />
                                        );
                                    })}
                                </Box>
                            </Grid>
                            <Grid
                                item
                                sm={12}
                                md={6}
                                sx={{ height: "100%", width: "100%" }}
                            >
                                <Box
                                    sx={{
                                        background: "#24283B",
                                        height: "100%",
                                        width: "100%",
                                        position: "relative",
                                    }}
                                >
                                    <Image
                                        alt="itemImg"
                                        src={item.img}
                                        layout="responsive"
                                        objectFit="contain"
                                        width="100%"
                                        height="100%"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
};

export default Projects;

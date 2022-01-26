import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography, Box, Link, Grid, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BuildIcon from "@mui/icons-material/Build";

import { langs, webDev, databases, ml, other } from "../utils/data";

const Skills: NextPage = () => {
    return (
        <Container maxWidth="md" sx={{ p: 5 }}>
            <Head>
                <title>skills | matx</title>
                <meta name="description" content="skills matx." />
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
                        <Link href="/skills" color="inherit" sx={{ mx: 1 }}>
                            skills
                        </Link>
                        <Link href="/projects" color="secondary" sx={{ ml: 1 }}>
                            projects
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Paper elevation={6} sx={{ p: 5, borderRadius: "10px" }}>
                <Grid container spacing={10}>
                    <Grid container item direction="column" spacing={2} md={12}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            <LanguageIcon color="primary" />
                            <Typography
                                variant="h5"
                                color="primary"
                                sx={{ mx: 2 }}
                            >
                                programming languages
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={3}
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            {langs.map((item, index) => (
                                <Grid item key={index}>
                                    {item}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={12}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            <WebIcon color="secondary" />
                            <Typography
                                variant="h5"
                                color="secondary"
                                sx={{ mx: 2 }}
                            >
                                web dev
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={3}
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            {webDev.map((item, index) => (
                                <Grid item key={index}>
                                    {item}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={12}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            <StorageIcon color="error" />
                            <Typography
                                variant="h5"
                                color="error"
                                sx={{ mx: 2 }}
                            >
                                databases
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={3}
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            {databases.map((item, index) => (
                                <Grid item key={index}>
                                    {item}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={12}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            <VisibilityIcon color="success" />
                            <Typography
                                variant="h5"
                                color="#9ECE6A"
                                sx={{ mx: 2 }}
                            >
                                machine learning
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={3}
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            {ml.map((item, index) => (
                                <Grid item key={index}>
                                    {item}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={12}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            <BuildIcon color="warning" />
                            <Typography
                                variant="h5"
                                color="#FF9E64"
                                sx={{ mx: 2 }}
                            >
                                other
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={3}
                            alignItems="center"
                            textAlign="center"
                            alignContent="center"
                            justifyContent="center"
                        >
                            {other.map((item, index) => (
                                <Grid item key={index}>
                                    {item}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Skills;

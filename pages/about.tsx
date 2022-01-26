import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
    ButtonGroup,
    Container,
    Typography,
    Avatar,
    Box,
    Link,
    Grid,
    Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const About: NextPage = () => {
    return (
        <Container maxWidth="md" sx={{ p: 5 }}>
            <Head>
                <title>about | matx</title>
                <meta name="description" content="about matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid container spacing={3} marginBottom={5} alignItems="center">
                <Grid item sm={6}>
                    <Typography variant="h4" fontWeight="bold">
                        about
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Box textAlign="right">
                        <Link href="/" color="secondary" sx={{ mr: 1 }}>
                            home
                        </Link>
                        <Link href="/about" color="inherit" sx={{ mx: 1 }}>
                            about
                        </Link>
                        <Link href="/skills" color="secondary" sx={{ mx: 1 }}>
                            skills
                        </Link>
                        <Link href="/projects" color="secondary" sx={{ ml: 1 }}>
                            projects
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Paper elevation={6} sx={{ p: 5, borderRadius: "10px" }}>
                <Grid container spacing={7}>
                    <Grid item sm={12} md={6}>
                        <Avatar
                            src="/s4f.jpg"
                            sx={{
                                width: "auto",
                                height: "auto",
                                border: "2px solid white",
                            }}
                        />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography
                            variant="h4"
                            color="primary"
                            textAlign="center"
                            sx={{ mb: 3 }}
                        >
                            Hello,
                        </Typography>
                        <Typography variant="body1" textAlign="justify">
                            My name is Matheus Teixeira and I&apos;m a software
                            engineer from Brazil. I&apos;m currently in the last
                            semester of graduation in computer science at
                            PUC-MG. I&apos;m most interested in software
                            engineering, deep learning and embedded systems. I
                            like fast, minimal, functional software and my
                            favorite programming langs are python and js/tsx.
                            Currently, I&apos;m learning react native and rust.
                        </Typography>
                        <Box textAlign="center" marginY={1}>
                            <Typography
                                variant="caption"
                                color="primary"
                                fontWeight="bold"
                            >
                                You can reach me with the following links:
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Link
                                href="mailto:matheustalves@outlook.com"
                                marginX={1}
                            >
                                <EmailIcon />
                            </Link>
                            <Link
                                href="https://github.com/matheustalves"
                                marginX={1}
                            >
                                <GitHubIcon />
                            </Link>
                            <Link
                                href="https://wa.me/+5531983973383"
                                marginX={1}
                            >
                                <WhatsAppIcon />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default About;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Typography, Avatar, Box, Link, Grid } from "@mui/material";

import avatar from "../public/avatar.gif";

const Home: NextPage = () => {
    return (
        <div>
            <Container
                maxWidth="lg"
                sx={{ p: 5, height: "100%", margin: "auto" }}
            >
                <Head>
                    <title>matheus teixeira</title>
                    <meta
                        name="description"
                        content="Matheus Teixeira's personal website."
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Grid
                    container
                    spacing={0}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Image alt="Avatar" src={avatar} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ textAlign: "left", p: 3 }}
                        id="boxTextLeft"
                    >
                        <Typography variant="h4">hi, my name is</Typography>
                        <Typography
                            variant="h2"
                            color="primary"
                            fontWeight="bold"
                        >
                            matheus teixeira.
                        </Typography>
                        <Box
                            textAlign="center"
                            sx={{ my: 3 }}
                            id="boxTextRight"
                        >
                            <Typography variant="body1" color="#C0CAF5">
                                i&apos;m a developer who enjoys over-engineering
                                stuff.
                            </Typography>
                        </Box>
                        <Box textAlign="right" id="boxTextRight">
                            <Link
                                href="/about"
                                color="secondary"
                                sx={{ mr: 1 }}
                            >
                                about
                            </Link>
                            <Link
                                href="/skills"
                                color="secondary"
                                sx={{ mx: 1 }}
                            >
                                skills
                            </Link>
                            <Link
                                href="/projects"
                                color="secondary"
                                sx={{ ml: 1 }}
                            >
                                my projects
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default Home;

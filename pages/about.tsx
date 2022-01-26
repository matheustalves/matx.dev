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
} from "@mui/material";

const About: NextPage = () => {
    return (
        <Container maxWidth="lg" sx={{ p: 4, height: "100%", margin: "auto" }}>
            <Head>
                <title>about | matx</title>
                <meta name="description" content="about matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Hello</h1>
        </Container>
    );
};

export default About;

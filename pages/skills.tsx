import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Typography, Box, Link, Grid, Paper } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';

const Skills: NextPage = () => {
    return (
        <Container maxWidth="md" sx={{ p: 4, height: "100%", margin: "auto", justifyContent: "center", alignItems: "center" }}>
            <Head>
                <title>skills | matx</title>
                <meta name="description" content="skills matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box display="flex" marginBottom={5} justifyContent="space-between" alignItems="center">
                <Typography variant="h4" fontWeight="bold">
                    i&apos;m familiar with...
                </Typography>
                <Box>
                    <Link href="/" color="secondary" sx={{ mr: 1 }}>home</Link>
                    <Link href="/about" color="secondary" sx={{ mx: 1 }}>about</Link>
                    <Link href="/projects" color="secondary" sx={{ ml: 1 }}>projects</Link>
                </Box>
            </Box>

            <Paper elevation={6} sx={{ p: 5 }}>
                <Grid container spacing={5}>
                    <Grid container item direction="column" spacing={2} md={6}>
                        <Grid item container direction="row" alignItems="center">
                            <LanguageIcon color="primary" />
                            <Typography variant="h5" color="primary" sx={{ mx: 2 }}>
                                programming languages
                            </Typography>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item>
                                &rsaquo; python
                            </Grid>
                            <Grid item>
                                &rsaquo; c++
                            </Grid>
                            <Grid item>
                                &rsaquo; java
                            </Grid>
                            <Grid item>
                                &rsaquo; c#
                            </Grid>
                            <Grid item>
                                &rsaquo; javascript
                            </Grid>
                            <Grid item>
                                &rsaquo; typescript
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={6}>
                        <Grid item container direction="row" alignItems="center">
                            <WebIcon color="secondary" />
                            <Typography variant="h5" color="secondary" sx={{ mx: 2 }}>
                                web dev
                            </Typography>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item>
                                &rsaquo; react
                            </Grid>
                            <Grid item>
                                &rsaquo; next.js
                            </Grid>
                            <Grid item>
                                &rsaquo; node.js
                            </Grid>
                            <Grid item>
                                &rsaquo; .net
                            </Grid>
                            <Grid item>
                                &rsaquo; django
                            </Grid>
                            <Grid item>
                                &rsaquo; flask
                            </Grid>
                            <Grid item>
                                &rsaquo; apis
                            </Grid>
                            <Grid item>
                                &rsaquo; frameworks
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={6}>
                        <Grid item container direction="row" alignItems="center">
                            <StorageIcon color="error" />
                            <Typography variant="h5" color="error" sx={{ mx: 2 }}>
                                databases
                            </Typography>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item>
                                &rsaquo; ms sql server
                            </Grid>
                            <Grid item>
                                &rsaquo; mysql
                            </Grid>
                            <Grid item>
                                &rsaquo; mongodb
                            </Grid>
                            <Grid item>
                                &rsaquo; firebase
                            </Grid>
                            <Grid item>
                                &rsaquo; sqlite
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} md={6}>
                        <Grid item container direction="row" alignItems="center">
                            <VisibilityIcon color="success" />
                            <Typography variant="h5" color="#9ECE6A" sx={{ mx: 2 }}>
                                machine learning
                            </Typography>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item>
                                &rsaquo; numpy
                            </Grid>
                            <Grid item>
                                &rsaquo; pytorch
                            </Grid>
                            <Grid item>
                                &rsaquo; tensorflow
                            </Grid>
                            <Grid item>
                                &rsaquo; tk
                            </Grid>
                            <Grid item>
                                &rsaquo; opencv
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2}>
                        <Grid item container direction="row" alignItems="center">
                            <BuildIcon color="warning" />
                            <Typography variant="h5" color="#FF9E64" sx={{ mx: 2 }}>
                                other
                            </Typography>
                        </Grid>
                        <Grid container item spacing={2}>
                            <Grid item>
                                &rsaquo; git
                            </Grid>
                            <Grid item>
                                &rsaquo; docker
                            </Grid>
                            <Grid item>
                                &rsaquo; azure
                            </Grid>
                            <Grid item>
                                &rsaquo; aws
                            </Grid>
                            <Grid item>
                                &rsaquo; linux
                            </Grid>
                            <Grid item>
                                &rsaquo; windows
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>



        </Container>
    )
}

export default Skills

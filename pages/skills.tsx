import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Typography, Box, Link, Grid, CircularProgress } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Skills: NextPage = () => {
    return (
        <Container maxWidth="md" sx={{ p: 4, height: "100%", margin: "auto" }}>
            <Head>
                <title>skills | matx</title>
                <meta name="description" content="skills matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Typography variant="h4">
                i&apos;m familiar with...
            </Typography>

            <Grid container spacing={4} sx={{ p: 4, justifyContent: "center", alignItems: "center" }}>
                <Grid container item direction="column" spacing={2} md={6}>
                    <Grid item container direction="row">
                        <LanguageIcon color="primary" />
                        <Typography variant="h6" color="primary" sx={{ mx: 2 }}>
                            programming languages
                        </Typography>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item>
                            &raquo; python
                        </Grid>
                        <Grid item>
                            &raquo; c/c++
                        </Grid>
                        <Grid item>
                            &raquo; java
                        </Grid>
                        <Grid item>
                            &raquo; c#
                        </Grid>
                        <Grid item>
                            &raquo; javascript
                        </Grid>
                        <Grid item>
                            &raquo; typescript
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="column" spacing={2} md={6}>
                    <Grid item container direction="row">
                        <WebIcon color="secondary" />
                        <Typography variant="h6" color="secondary" sx={{ mx: 2 }}>
                            web dev
                        </Typography>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item>
                            &raquo; react | next.js
                        </Grid>
                        <Grid item>
                            &raquo; node.js
                        </Grid>
                        <Grid item>
                            &raquo; .net
                        </Grid>
                        <Grid item>
                            &raquo; django
                        </Grid>
                        <Grid item>
                            &raquo; flask
                        </Grid>
                        <Grid item>
                            &raquo; apis
                        </Grid>
                        <Grid item>
                            &raquo; frameworks
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="column" spacing={2} md={6}>
                    <Grid item container direction="row">
                        <StorageIcon color="error" />
                        <Typography variant="h6" color="error" sx={{ mx: 2 }}>
                            databases
                        </Typography>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item>
                            &raquo; ms sql server
                        </Grid>
                        <Grid item>
                            &raquo; mysql
                        </Grid>
                        <Grid item>
                            &raquo; mongodb
                        </Grid>
                        <Grid item>
                            &raquo; firebase
                        </Grid>
                        <Grid item>
                            &raquo; sqlite
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="column" spacing={2} md={6}>
                    <Grid item container direction="row">
                        <VisibilityIcon color="success" />
                        <Typography variant="h6" color="#9ECE6A" sx={{ mx: 2 }}>
                            machine learning
                        </Typography>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item>
                            &raquo; pytorch
                        </Grid>
                        <Grid item>
                            &raquo; tensorflow
                        </Grid>
                        <Grid item>
                            &raquo; tk
                        </Grid>
                        <Grid item>
                            &raquo; opencv
                        </Grid>
                        <Grid item>
                            &raquo; numpy | pandas
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Skills

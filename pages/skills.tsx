import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Typography, Box, Link, Grid, Paper } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';

const langs = ['python', 'c++', 'java', 'c#', 'javascript', 'typescript']
const webDev = ['react', 'next.js', 'node.js', '.net', 'django', 'flask', 'apis', 'frameworks']
const databases = ['ms sql server', 'mysql', 'mongodb', 'firebase', 'sqlite']
const ml = ['numpy', 'pytorch', 'tensorflow', 'tk', 'opencv']
const other = ['git', 'docker', 'azure', 'aws', 'linux', 'windows']

const Skills: NextPage = () => {
    return (
        <Container maxWidth="md" sx={{ p: 5 }}>
            <Head>
                <title>skills | matx</title>
                <meta name="description" content="skills matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box display="flex" flexDirection="column">
                <Box display="flex" marginBottom={5} justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" fontWeight="bold">
                        i&apos;m familiar with...
                    </Typography>
                    <Box>
                        <Link href="/" color="secondary" sx={{ mr: 1 }}>home</Link>
                        <Link href="/about" color="secondary" sx={{ mx: 1 }}>about</Link>
                        <Link href="/skills" color="inherit" sx={{ mx: 1 }} >skills</Link>
                        <Link href="/projects" color="secondary" sx={{ ml: 1 }}>projects</Link>
                    </Box>
                </Box>

                <Paper elevation={6} sx={{ p: 5, borderRadius: '10px' }}>
                    <Grid container spacing={5} >
                        <Grid container item direction="column" spacing={2} md={6}>
                            <Grid item container direction="row" alignItems="center" >
                                <LanguageIcon color="primary" />
                                <Typography variant="h5" color="primary" sx={{ mx: 2 }}>
                                    programming languages
                                </Typography>
                            </Grid>
                            <Grid container item spacing={2} justifyContent="center">
                                {langs.map((item, index) => (
                                    <Grid item key={index} xs={6}>&rsaquo; {item}</Grid>
                                ))}
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
                                {webDev.map((item, index) => (
                                    <Grid item key={index} xs={6}>&rsaquo; {item}</Grid>
                                ))}
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
                                {databases.map((item, index) => (
                                    <Grid item key={index} xs={6}>&rsaquo; {item}</Grid>
                                ))}
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
                                {ml.map((item, index) => (
                                    <Grid item key={index} xs={6}>&rsaquo; {item}</Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid container item direction="column" spacing={2} md={6}>
                            <Grid item container direction="row" alignItems="center">
                                <BuildIcon color="warning" />
                                <Typography variant="h5" color="#FF9E64" sx={{ mx: 2 }}>
                                    other
                                </Typography>
                            </Grid>
                            <Grid container item spacing={2}>
                                {other.map((item, index) => (
                                    <Grid item key={index} xs={6}>&rsaquo; {item}</Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>


        </Container >
    )
}

export default Skills

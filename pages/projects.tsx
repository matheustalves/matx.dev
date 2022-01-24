import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { Container, Typography, Box, Link, Grid, Paper, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BuildIcon from '@mui/icons-material/Build';

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

            <Box display="flex" flexDirection="column">
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

                <Paper elevation={6} sx={{ pt: 0 }}>
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

                    <Grid item container spacing={5}>
                        <Grid item sx={{ background: '#FF9E64' }}></Grid>
                        <Grid item sx={{ background: '#FF9E64' }}></Grid>
                        <Grid item sx={{ background: '#FF9E64' }}></Grid>
                        <Grid item sx={{ background: '#FF9E64' }}></Grid>
                        <Grid item sx={{ background: '#FF9E64' }}></Grid>
                        <Grid item sx={{ background: '#FF9E64' }}></Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container >
    )
}

export default Projects

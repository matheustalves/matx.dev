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
    const [projectCategory, setprojectCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setprojectCategory(event.target.value);
    };

    return (
        <Container maxWidth="md" sx={{ p: 5, height: "100%", margin: "auto" }}>
            <Head>
                <title>projects | matx</title>
                <meta name="description" content="projects matx." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box display="flex" flexDirection="column" height="100%" alignContent="center" justifyContent="center">
                <Box display="flex" marginBottom={5} justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" fontWeight="bold">
                        projects
                    </Typography>
                    <FormControl sx={{ m: 1, minWidth: 80 }} color="secondary">
                        <Select
                            id="simpleSelect"
                            value={projectCategory}
                            autoWidth
                            onChange={handleChange}
                            sx={{ background: '#7AA2F7', color: "#1A1B26" }}
                        >
                            <MenuItem value={10}>Machine Learning</MenuItem>
                            <MenuItem value={20}>Web Development</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <Box>
                        <Link href="/" color="secondary" sx={{ mr: 1 }}>home</Link>
                        <Link href="/about" color="secondary" sx={{ mx: 1 }}>about</Link>
                        <Link href="/skills" color="secondary" sx={{ ml: 1 }}>skills</Link>
                    </Box>
                </Box>
            </Box>


        </Container >
    )
}

export default Projects

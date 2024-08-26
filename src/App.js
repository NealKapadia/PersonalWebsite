import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box, Tabs, Tab, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { deepPurple, amber, teal } from '@mui/material/colors';

// Import Google Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/pacifico/400.css';

const projects = [
  { title: 'Project 1', description: 'An AI-powered chatbot for customer service' },
  { title: 'Project 2', description: 'A blockchain-based voting system' },
  { title: 'Project 3', description: 'A machine learning model for stock prediction' },
];

const skills = ['React', 'JavaScript', 'Python', 'Java', 'Node.js', 'SQL', 'Git', 'Three.js', 'Machine Learning'];

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      color: deepPurple[700],
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      color: teal[600],
    },
    h4: {
      fontFamily: 'Pacifico, cursive',
      color: amber[800],
    },
  },
});

const AnimatedCube = ({ position }) => {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
  });
  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={amber[500]} />
    </mesh>
  );
};

const SkillSphere = ({ skill, index, totalSkills }) => {
  const radius = 5;
  const angle = (index / totalSkills) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  return (
    <group position={[x, 0, z]}>
      <Text
        color={teal[400]}
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
};

const Scene = ({ currentTab }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      {currentTab === 0 && (
        <Text
          color={deepPurple[500]}
          fontSize={6}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          Neal Kapadia
        </Text>
      )}
      {currentTab === 1 && projects.map((_, index) => (
        <AnimatedCube key={index} position={[index * 2 - 2, 0, 0]} />
      ))}
      {currentTab === 2 && skills.map((skill, index) => (
        <SkillSphere key={skill} skill={skill} index={index} totalSkills={skills.length} />
      ))}
    </Canvas>
  );
};

const Portfolio = () => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>About Me</Typography>
            <Typography variant="body1">
              I'm a sophomore Computer Engineering student at the University of Texas at Dallas, passionate about software development and problem-solving. I'm actively seeking internship opportunities to apply my skills and learn from industry professionals.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Projects</Typography>
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ backgroundColor: teal[50], transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" color={deepPurple[700]}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color={teal[800]}>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Skills</Typography>
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  <Button variant="contained" color="secondary" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {skill}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, backgroundColor: 'background.default', minHeight: '100vh' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {isMobile && (
              <Button color="inherit" sx={{ mr: 2 }}>
                ☰
              </Button>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Pacifico, cursive' }}>
              Neal Kapadia
            </Typography>
            <Button color="inherit" href="https://github.com/NealKapadia" target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
            <Button color="inherit" href="https://linkedin.com/in/nealkapadia" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Button>
            <Button color="inherit" href="mailto:nrk220003@utdallas.edu">
              Email
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Neal Kapadia
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom>
              Computer Engineering Student at UTD
            </Typography>
          </Box>
          <Tabs value={value} onChange={handleChange} centered sx={{ mb: 2 }}>
            <Tab label="About" sx={{ color: deepPurple[700] }} />
            <Tab label="Projects" sx={{ color: deepPurple[700] }} />
            <Tab label="Skills" sx={{ color: deepPurple[700] }} />
          </Tabs>
          <Box sx={{ height: '50vh', my: 4, backgroundColor: 'white', borderRadius: '8px', boxShadow: 3 }}>
            <Scene currentTab={value} />
          </Box>
          {renderContent()}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Hero: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Alex Santos
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        color="text.secondary"
      >
        Software Development Educator
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto" }}>
        Passionate about bridging the gap between theory and practice in
        software development. I believe in empowering the next generation of
        developers through hands-on learning and real-world projects.
      </Typography>
    </Box>
  );
};

export default Hero;

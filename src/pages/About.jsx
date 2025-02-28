import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, mt: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Our Community
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Welcome to our homeowner's subdivision, where we strive to create a
          safe, comfortable, and engaging environment for all residents.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our community offers modern amenities, responsive management, and a
          platform for homeowners to connect and collaborate.
        </Typography>

        <Box mt={3}>
          <Typography variant="h5" fontWeight="medium" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary">
            To foster a thriving community through transparency, effective
            management, and inclusive engagement.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" fontWeight="medium" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> contact@subdivision.com
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> +123 456 7890
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

import React from "react";
import { Container, Typography, Grid, Box, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* User Management & Announcements */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              User Management
            </Typography>
            <Typography variant="body2">
              Manage accounts for homeowners, administrators, and staff.
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
              Announcements
            </Typography>
            <Typography variant="body2">
              Stay updated with community news and events.
            </Typography>
          </Grid>

          {/* Payments & Reservations */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Billing & Payments
            </Typography>
            <Typography variant="body2">
              Pay dues and fees securely online.
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
              Facility Reservation
            </Typography>
            <Typography variant="body2">
              Book community amenities easily.
            </Typography>
          </Grid>

          {/* Service Requests & Documents */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Service Requests
            </Typography>
            <Typography variant="body2">
              Submit and track maintenance or security requests.
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
              Documents
            </Typography>
            <Typography variant="body2">
              Access forms, reports, and guidelines.
            </Typography>
          </Grid>

          {/* Community Forum & Security */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Community Forum
            </Typography>
            <Typography variant="body2">
              Engage with neighbors in discussions.
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
              Security Features
            </Typography>
            <Typography variant="body2">
              Manage visitor passes and emergency contacts.
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Homeowner's Subdivision | All Rights Reserved
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" color="inherit" underline="hover">
              Terms of Service
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

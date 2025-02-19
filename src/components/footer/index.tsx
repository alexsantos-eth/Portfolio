import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Let&apos;s Connect
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Interested in collaborating or have a teaching opportunity? I&apos;d love to
        hear from you!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="mailto:alexdsantosv@gmail.com"
        size="large"
      >
        Get in Touch
      </Button>
    </Box>
  );
}

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primaryColor } from "@/pages/_app";
import { title, subtitle, email, phone } from "@/constants";

const Footer = () => {
  return (
    <Box sx={{ background: primaryColor }} p={2}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Typography color="#fff" variant="body1">
            {`${title} - ${subtitle}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="#fff" variant="body1">
            Email: {email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="#fff" variant="body1">
            Phone: {phone}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="#fff" variant="body1">
            {`© ${new Date().getFullYear()} - All Rights Reserved`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

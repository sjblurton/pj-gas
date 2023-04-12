import { email, phone } from "@/constants";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Divider from "@mui/material/Divider";
import PinDropIcon from "@mui/icons-material/PinDrop";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContactDetails = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Grid container maxWidth={600} width="95%" m="auto" mt={6} mb={6}>
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1">JP</Typography>
          <Typography textAlign={"center"} variant={isDesktop ? "h2" : "h3"}>
            Gas and Plumbing
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            sx={{
              a: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <IconButton aria-label="delete" size="large">
                <EmailIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1">{email}</Typography>
            </a>
            <Divider />
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            sx={{
              a: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <a href={`tel:${phone}`}>
              <IconButton aria-label="delete" size="large">
                <PhoneAndroidIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1">{phone}</Typography>
            </a>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            sx={{
              a: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <a href={`https://goo.gl/maps/Rzk1z49u8puFuW3o6`} target="_blank">
              <IconButton aria-label="delete" size="large">
                <PinDropIcon fontSize="large" />
              </IconButton>
              <Typography variant="body1">
                9 The Square, Hessle HU13 0AD
              </Typography>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactDetails;

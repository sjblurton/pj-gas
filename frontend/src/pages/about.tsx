import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "@/components/shared/Header";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <>
      <Header title="About Us" />
      <Container>
        <Grid container mt={6} mb={6} gap={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color={"text.secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              pulvinar leo. Donec at enim tempus, fringilla metus ac, blandit
              purus. Phasellus vitae sapien sed justo condimentum accumsan ut
              eget quam. Morbi at nisl a felis luctus scelerisque tincidunt eget
              nibh. Pellentesque a consectetur elit. Ut in hendrerit justo, eget
              tristique urna. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Proin justo tellus, consequat id molestie non,
              bibendum vitae mauris. Etiam placerat arcu et molestie vestibulum.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

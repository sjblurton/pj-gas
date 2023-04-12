import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";

const KeyPoint = ({
  title,
  body,
  image,
  odd = false,
}: {
  title: string;
  body: string;
  image: StaticImageData;
  odd?: boolean;
}) => {
  return (
    <Grid container xs={12} p={2}>
      <Grid
        order={{ xs: odd ? 2 : 1, md: odd ? 1 : 2 }}
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Box>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{body}</Typography>
          <Link href="/contact">
            <Button variant="outlined">Contact Us</Button>
          </Link>
        </Box>
      </Grid>
      <Grid
        order={{ xs: odd ? 1 : 2, md: odd ? 2 : 1 }}
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            maxHeight: "300px",
            maxWidth: "300px",
            position: "relative",
            background: "rgb(0,0,0,0.7)",
            zIndex: 1,
          }}
        >
          <Image
            src={image}
            alt="Radiator"
            style={{ objectFit: "cover" }}
            fill
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default KeyPoint;

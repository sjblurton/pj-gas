import { subtitle, title } from "@/constants";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container>
      <Typography variant="h1">{title}</Typography>
      <Divider />
      <Typography variant="h3">{subtitle}</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      </Typography>
    </Container>
  );
}

import Container from "@mui/material/Container";
import Header from "@/components/shared/Header";
import Details from "@/components/pages/home/Details";
import KeyPoint from "@/components/pages/home/KeyPoint";
import Seo from "@/components/shared/Seo";
import Radiator from "@/assets/radiator.jpg";
import bathroom from "@/assets/bathroom.jpg";

export default function Home() {
  return (
    <>
      <Seo />
      <Header title="Over 20 years Gas Safe Registered." />
      <Container maxWidth="md">
        <Details />
        <KeyPoint
          image={Radiator}
          odd
          title="All your gas, heating, and plumbing"
          body="From design and installation to maintenance and repair, with more than 20 years in business you can relay on us."
        />
        <KeyPoint
          image={bathroom}
          title="We fit bathrooms and showers"
          body="We can fit a new bathroom or shower for you, from design to installation."
        />
      </Container>
    </>
  );
}

export const getStaticProps = async () => ({
  props: {},
});

// export type Props = InferGetStaticPropsType<typeof getStaticProps>;

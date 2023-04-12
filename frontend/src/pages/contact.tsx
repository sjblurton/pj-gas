import ContactDetails from "@/components/pages/contact/ContactDetails";
import Header from "@/components/shared/Header";
import Seo from "@/components/shared/Seo";
import Container from "@mui/material/Container";

const Contact = () => {
  return (
    <>
      <Seo />
      <Header title="Contact Us" />
      <Container maxWidth="md">
        <ContactDetails />
      </Container>
    </>
  );
};

export default Contact;

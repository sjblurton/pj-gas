import ContactDetails from "@/components/pages/contact/ContactDetails";
import Header from "@/components/shared/Header";
import Container from "@mui/material/Container";

const Contact = () => {
  return (
    <>
      <Header title="Contact Us" />
      <Container>
        <ContactDetails />
      </Container>
    </>
  );
};

export default Contact;

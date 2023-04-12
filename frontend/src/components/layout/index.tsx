import { ReactNode } from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { appBarHeight } from "@/constants";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      mt={appBarHeight}
      minHeight={`calc(100vh - ${appBarHeight})`}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { appBarHeight } from "@/constants";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      p={2}
      mt={appBarHeight}
      minHeight={`calc(100vh - ${appBarHeight})`}
    >
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;

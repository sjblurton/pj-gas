import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import React from "react";
import GasOven from "@/assets/gas-oven.jpg";

const Header = ({ title }: { title: string }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "50vh",
        position: "relative",
      }}
    >
      <Typography
        variant={isDesktop ? "h1" : "h2"}
        component={"h1"}
        sx={{
          position: "absolute",
          inset: 0,
          color: "#fff",
          zIndex: 1,
          background: "rgb(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>
      <Image
        src={GasOven}
        alt="Gas oven burning"
        style={{ objectFit: "cover" }}
        fill
      />
    </Box>
  );
};

export default Header;

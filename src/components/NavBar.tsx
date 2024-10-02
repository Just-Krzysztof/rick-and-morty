import React from "react";
import Logo from "../assets/logo.png";
import { Image } from "@chakra-ui/react";
const NavBar = () => {
  return <Image src={Logo} width={{ sm: "60%", md: "30%", lg: "20%" }} />;
};

export default NavBar;

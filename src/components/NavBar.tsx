import React from "react";
import Logo from "../assets/logo.png";
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitcher";
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={Logo} width={{ sm: "60%", md: "30%", lg: "20%" }} />;
      <ColorModeSwitch />
    </HStack>
  )
  
};

export default NavBar;

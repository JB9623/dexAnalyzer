import React from 'react'
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {Moon, Sun} from "../../assests/icon"
import style from './Header.module.css'

export default function Header() {
  const menuClass = useColorModeValue(
    style.header + " " + style.headerLight,
    style.header + " " + style.headerDark
  );

  const { colorMode, toggleColorMode  } = useColorMode()
  return (
    <Box className={menuClass}>
        {
        colorMode == "dark" ? 
        <Sun className={style.themeMode} onClick={toggleColorMode}/>:
        <Moon className={style.themeMode} onClick={toggleColorMode}/>
        }
        <Button
          marginLeft={"10px"}
          backgroundColor={"#0085FF"}
          borderRadius={"15px"}
          color={"white"}
        >
          Connect Wallet        
        </Button>
    </Box>
  );
}
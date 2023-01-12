import React from 'react'
import { Box, useColorModeValue } from "@chakra-ui/react"
import style from './MenuBar.module.css'
import {GameMenuBar, GameMenuBarMini, TopMenuBar, TopMenuBarMini} from '../../assests/icon'
import {TradeMenuBar, TradeMenuBarMini} from '../../assests/icon'
import { PlayMode } from '../../utils/type'
import Link from 'next/link'
import { SCREEN2XL_SIZE, SCREENSM_SIZE } from '../../utils/constant'
import useSize from '../../hooks/useSize'

export default function MenuBar({
  selectMode,
  onOpen
}:{
  selectMode: PlayMode,
  onOpen: () => void
}) {

  const windowDimensions = useSize();
  const menuClass = useColorModeValue(
    style.menuBar + " " + style.menuBarLight,
    style.menuBar + " " + style.menuBarDark
  );
  const chartSelectColor = useColorModeValue("#0067C6", "#2F2F2F");

  const onMenuClick = () => {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    if (width < SCREEN2XL_SIZE && selectMode == PlayMode.Trade)
      onOpen();
  }

  return (
    <Box className={menuClass}>
      <Box style={{
        display: "flex", 
        justifyContent:"center", 
        height:"4.8rem", 
        alignContent:"center",
        cursor: "pointer",
        flexDirection: "column",
        width:"100%",
        alignItems:"center",
      }}
      _hover={{bg:chartSelectColor}}
      onClick = {onMenuClick}
      >
        {
          windowDimensions.width < SCREENSM_SIZE ? <TopMenuBarMini/> : <TopMenuBar/>
        }
        
      </Box>
      <Box style={{
        display: "flex", 
        justifyContent:"center", 
        height: windowDimensions.width < SCREENSM_SIZE ? "3.5rem" : "5rem", 
        alignContent:"center",
        cursor: "pointer",
        flexDirection: "column",
        width:"100%",
        alignItems:"center"
        }}
        _hover={{bg:chartSelectColor}}
        background = {selectMode === PlayMode.Trade ? chartSelectColor : "transparent"}
      >
        <Link href = {'/trade'}>
          {
            windowDimensions.width < SCREENSM_SIZE ? <TradeMenuBarMini/> : <TradeMenuBar/>
          }
        </Link>
      </Box>
      <Box style={{
        display: "flex", 
        justifyContent:"center", 
        height: windowDimensions.width < SCREENSM_SIZE ? "3.5rem" : "5rem", 
        alignContent:"center",
        cursor: "pointer",
        flexDirection: "column",
        width:"100%",
        alignItems:"center"
        }}
        _hover={{bg:chartSelectColor}}
        background = {selectMode === PlayMode.Game ? chartSelectColor : "transparent"}
      >
        <Link href = {'/game'}>
          {
            windowDimensions.width < SCREENSM_SIZE ? <GameMenuBarMini/> : <GameMenuBar/>
          }
          
        </Link>   
      </Box>   
      
    </Box>
  );
}
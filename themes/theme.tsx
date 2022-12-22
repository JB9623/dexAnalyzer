import React from 'react'
import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
const dark = "#232323";
const light = "#ffffff";

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bg: mode(light, dark)(props)
      }
    })
  },
  // components: {
  //   Table: {
  //     parts: ['th', 'td'],
  //     baseStyle: {
  //       th: {
  //         borderColor: '#404040',
  //       },
  //       td: {
  //         borderColor: '#404040',
  //       },
  //     },
  //   },
  // },
  letterSpacings:
  {
    wider:'0em'
  },
  colors: {
    borderColor: 'white',
    transactionTable: {
      100: '#F1F1F1',
      700: '#262626',
    },
  },
  borders: {
    '2px': '2px solid gray.200'
  },
  sizes: {
    4: '0.6rem',
    10: '2.2rem',
  },
  fontSizes: {
    sm: '0.9rem',
    xs: '0.8rem'
  },
  lineHeights: {
    4: '1.5rem',
  }
});

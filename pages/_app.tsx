import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import {TokenInfoProvider} from '../hooks/useTokenInfo'
import Layout from '../components/PageLayout'
import { theme } from "../themes/theme";
import { LpTokenPriceProvider } from '../hooks/useLPTokenPrice';
import { WalletTokenBalanceProvider } from '../hooks/useWalletBalanceTokens';
import { StableCoinPriceProvider } from '../hooks/useStableCoinPrice';
import { LPTransactionProvider } from '../hooks/useLPTransaction';
import { PlayModeProvider } from '../hooks/usePlayMode';

export default function App({ Component, pageProps }: AppProps) {

  const desiredChainId = ChainId.Mainnet;
  const supportChain = [1, 56];

  return (
    <ChakraProvider theme={theme}>
      <ThirdwebProvider desiredChainId={desiredChainId} supportedChains={supportChain}>
        <PlayModeProvider>
          <StableCoinPriceProvider>
            <TokenInfoProvider>
              <LpTokenPriceProvider>
                <LPTransactionProvider>
                    <WalletTokenBalanceProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                    </WalletTokenBalanceProvider>
                  </LPTransactionProvider>
              </LpTokenPriceProvider>
            </TokenInfoProvider>
          </StableCoinPriceProvider>
          </PlayModeProvider>
      </ThirdwebProvider>
    </ChakraProvider>
    
  )
}

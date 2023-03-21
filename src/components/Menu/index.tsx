import React, { useContext, useEffect, useState } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@wizswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import { injected, walletconnect } from 'connectors'
import { usePairContract } from 'hooks/useContract'
import links, { socials } from './config'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const [price, setPrice] = useState(0)
  const usdtAWiz = "0xFfB2c8Ed370B1fdb82C4Ef01ddf56811845c5622";
  const contract = usePairContract(usdtAWiz)

  useEffect(() => {
    (async () => {
      try {
        const reserves = await contract?.getReserves()
        if (reserves) {
          const priceAWiz = ((reserves.reserve1 / 10 ** 18) / (reserves.reserve0 / 10 ** 6))
          setPrice(priceAWiz)
        }
      } catch (error) {
        // console.log('no liquidity for usdc/awiz');
      }
    })()
  }, [contract])

  return (
    <UikitMenu
      links={links}
      socials={socials}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={price}
      cakePriceLink="https://dexscreener.com/arbitrum/0xe70b3b01f4f53d8c340e4120450da40c8b27f8b5"
      // removeNav
      {...props}
    />
  )
}

export default Menu

import { Currency, ETHER, Token } from '@wizswap-libs/sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import CoinLogo from '../pancake/CoinLogo'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${address}/logo.png`

const StyledBnbLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo) <{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, `/images/coins/${currency?.symbol?.toLowerCase() ?? 'token'}.png`, `/images/coins/${currency?.symbol?.toLowerCase() ?? 'token'}.gif`, getTokenLogoURL(currency.address)]
      }

      return [`/images/coins/${currency?.symbol?.toLowerCase() ?? 'token'}.png`, `/images/coins/${currency?.symbol?.toLowerCase() ?? 'token'}.gif`, getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <StyledBnbLogo src="/images/coins/eth.png" size={size} style={style} />
  }

  return (currency as any)?.symbol?.toLowerCase() ? (
    <CoinLogo size={size} srcs={srcs} alt={`${currency?.symbol?.toLowerCase() ?? 'token'} logo`} style={style} />
  ) : (
    <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol?.toLowerCase() ?? 'token'} logo`} style={style} />
  )
}

import { MenuEntry } from '@wizswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farms.corewiz.net',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Stake LP',
    icon: 'PoolIcon',
    href: 'https://farms.corewiz.net/stakelps',
  },
  {
    label: 'Stake Tokens',
    icon: 'PoolIcon',
    href: 'https://farms.corewiz.net/staketokens',
  },
  {
    label: 'Partnership LPs',
    icon: 'PoolIcon',
    href: 'https://farms.corewiz.net/partnershiplps',
  },
  {
    label: 'Partnership Pools',
    icon: 'PoolIcon',
    href: 'https://farms.corewiz.net/partnerships',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://wizswap.finance/lottery',
  // },
  // {
  //   label: 'IWO',
  //   icon: 'PoolIcon',
  //   href: 'https://wizswap.finance/iwo',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'WizSwap',
  //       href: 'https://info.wizswap.finance/token/0x68b24D0AAfC2CdfF9f4379f4bc7252F827Abfe37',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/wizswap/',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/wizswap/',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/wizswap/',
  //     },
  //     // {
  //     //   label: 'Docs',
  //     //   href: 'https://goosedefi.gitbook.io/wiz/',
  //     // },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://wizswap.medium.com/',
  //     // },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IWO',
  //   icon: 'IfoIcon',
  //   href:
  //     'https://google.com',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/wiz/',
  // },
]

export default config

export const socials: MenuEntry[] = [
  // {
  //   label: "Github",
  //   icon: "GithubIcon",
  //   href: "https://github.com/wizswap"
  // },
  // {
  //   label: "Docs",
  //   icon: "GitbookIcon",
  //   href: "https://docs.wizswap.finance",
  // },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://medium.com/@thewizardbridge",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/wizardbridge_",
  },
  // {
  //   label: "Discord",
  //   icon: "DiscordIcon",
  //   href: "https://twitter.com/wizardbridge_",
  // },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/corewiz",
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/wizardbridge",
    //   },
    // {
    //   label: "Announcements",
    //   href: "https://t.me/wizardbridge",
    // },
    // ],
  },
];

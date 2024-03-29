const chains = [
    {
        name: 'polkadot',
        displayName: 'Polkadot Relay Chain',
        prefix: 0,
        tokens: [
            {
                symbol: 'DOT',
                decimals: 10,
            },
        ],
        paraId: null,
        relay: null,
        genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
        website: 'https://polkadot.network',
    },
    {
        name: 'acala',
        displayName: 'Acala',
        prefix: 10,
        tokens: [
            {
                symbol: 'ACA',
                decimals: 12,
            },
        ],
        paraId: 2000,
        relay: 'polkadot',
        genesisHash: '0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c',
        website: 'https://acala.network/',
    },
    {
        name: 'ares',
        displayName: 'Ares Protocol',
        prefix: 34,
        tokens: [
            {
                symbol: 'ARES',
                decimals: 12,
            },
        ],
        paraId: 2028,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://www.aresprotocol.com/',
    },
    {
        name: 'astar',
        displayName: 'Astar Network',
        prefix: 5,
        tokens: [
            {
                symbol: 'ASTR',
                decimals: 18,
            },
        ],
        paraId: 2006,
        relay: 'polkadot',
        genesisHash: '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6',
        website: '',
    },
    {
        name: 'centrifuge',
        displayName: 'Centrifuge',
        prefix: 36,
        tokens: [
            {
                symbol: 'CFG',
                decimals: 18,
            },
        ],
        paraId: 2031,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://centrifuge.io/',
    },
    {
        name: 'clover',
        displayName: 'Clover Finance',
        prefix: 128,
        tokens: [
            {
                symbol: 'CLV',
                decimals: 18,
            },
        ],
        paraId: 2002,
        relay: 'polkadot',
        genesisHash: '0x5c7bd13edf349b33eb175ffae85210299e324d852916336027391536e686f267',
        website: 'https://clover.finance',
    },
    {
        name: 'coinversation',
        displayName: 'Coinversation',
        prefix: null,
        tokens: [
            {
                symbol: 'CTO',
                decimals: 10,
            },
        ],
        paraId: 2027,
        relay: 'polkadot',
        genesisHash: null,
        website: '',
    },
    {
        name: 'composable',
        displayName: 'Composable Finance',
        prefix: 50,
        tokens: [
            {
                symbol: 'LAYR',
                decimals: 12,
            },
        ],
        paraId: 2019,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://composable.finance',
    },
    {
        name: 'crust',
        displayName: 'Crust Network',
        prefix: 66,
        tokens: [
            {
                symbol: 'CRU',
                decimals: 12,
            },
        ],
        paraId: 2008,
        relay: 'polkadot',
        genesisHash: '0x8b404e7ed8789d813982b9cb4c8b664c05b3fbf433309f603af014ec9ce56a8c',
        website: 'https://crust.network',
    },
    {
        name: 'darwinia',
        displayName: 'Darwinia Network',
        prefix: 18,
        tokens: [
            {
                symbol: 'RING',
                decimals: 9,
            },
            {
                symbol: 'KTON',
                decimals: 9,
            },
        ],
        paraId: 2003,
        relay: 'polkadot',
        genesisHash: '0x729cb8f2cf428adcf81fe69610edda32c5711b2ff17de747e8604a3587021db8',
        website: 'https://darwinia.network/',
    },
    {
        name: 'efinity',
        displayName: 'Efinity',
        prefix: 1110,
        tokens: [
            {
                symbol: 'EFI',
                decimals: 18,
            },
        ],
        paraId: 2021,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://efinity.io/',
    },
    {
        name: 'equilibrium',
        displayName: 'Equilibrium',
        prefix: 68,
        tokens: [
            {
                symbol: 'EQ',
                decimals: 9,
            },
        ],
        paraId: 2011,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://equilibrium.io',
    },
    {
        name: 'hydradx',
        displayName: 'HydraDX',
        prefix: 63,
        tokens: [
            {
                symbol: 'HDX',
                decimals: 12,
            },
        ],
        paraId: 2034,
        relay: 'polkadot',
        genesisHash: '0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc',
        website: 'https://hydradx.io',
    },
    {
        name: 'interlay',
        displayName: 'Interlay',
        prefix: 2032,
        tokens: [
            {
                symbol: 'INTR',
                decimals: 10,
            },
        ],
        paraId: 2032,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://interlay.io/',
    },
    {
        name: 'litentry',
        displayName: 'Litentry Network',
        prefix: 31,
        tokens: [
            {
                symbol: 'LIT',
                decimals: 12,
            },
        ],
        paraId: 2013,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://litentry.com/',
    },
    {
        name: 'manta',
        displayName: 'Manta network',
        prefix: 77,
        tokens: [
            {
                symbol: 'MANTA',
                decimals: 18,
            },
        ],
        paraId: 2015,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://manta.network',
    },
    {
        name: 'moonbeam',
        displayName: 'Moonbeam',
        prefix: 1284,
        tokens: [
            {
                symbol: 'GLMR',
                decimals: 18,
            },
        ],
        paraId: 2004,
        relay: 'polkadot',
        genesisHash: '0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d',
        website: 'https://moonbeam.network',
    },
    {
        name: 'nodle',
        displayName: 'Nodle Chain',
        prefix: 37,
        tokens: [
            {
                symbol: 'NODL',
                decimals: 18,
            },
        ],
        paraId: 2026,
        relay: 'polkadot',
        genesisHash: '0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23',
        website: 'https://nodle.io/',
    },
    {
        name: 'parallel',
        displayName: 'Parallel',
        prefix: 172,
        tokens: [
            {
                symbol: 'PARA',
                decimals: 12,
            },
        ],
        paraId: 2012,
        relay: 'polkadot',
        genesisHash: '0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97',
        website: 'https://parallel.fi/',
    },
    {
        name: 'phala',
        displayName: 'Phala Network',
        prefix: 30,
        tokens: [
            {
                symbol: 'PHA',
                decimals: 12,
            },
        ],
        paraId: 2035,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://phala.network',
    },
    {
        name: 'polkadex',
        displayName: 'Polkadex',
        prefix: 88,
        tokens: [
            {
                symbol: 'PDEX',
                decimals: 12,
            },
        ],
        paraId: 2036,
        relay: 'polkadot',
        genesisHash: null,
        website: 'https://polkadex.trade',
    },
    {
        name: 'statemint',
        displayName: 'Statemint',
        prefix: 0,
        tokens: [
            {
                symbol: 'DOT',
                decimals: 10,
            },
        ],
        paraId: 1000,
        relay: 'polkadot',
        genesisHash: '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
        website: '',
    },
    {
        name: 'subdao',
        displayName: 'SubDAO',
        prefix: 12,
        tokens: [
            {
                symbol: 'GOV',
                decimals: 12,
            },
        ],
        paraId: 2018,
        relay: 'polkadot',
        genesisHash: null,
        website: '',
    },
    {
        name: 'subgame',
        displayName: 'SubGame Network',
        prefix: null,
        tokens: [
            {
                symbol: 'GSGB',
                decimals: 10,
            },
        ],
        paraId: 2017,
        relay: 'polkadot',
        genesisHash: null,
        website: '',
    },
    {
        name: 'kusama',
        displayName: 'Kusama Relay Chain',
        prefix: 2,
        tokens: [
            {
                symbol: 'KSM',
                decimals: 12,
            },
        ],
        paraId: null,
        relay: null,
        genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
        website: 'https://kusama.network',
    },
    {
        name: 'altair',
        displayName: 'Altair',
        prefix: 136,
        tokens: [
            {
                symbol: 'AIR',
                decimals: 18,
            },
        ],
        paraId: 2088,
        relay: 'kusama',
        genesisHash: '0xaa3876c1dc8a1afcc2e9a685a49ff7704cfd36ad8c90bf2702b9d1b00cc40011',
        website: 'https://centrifuge.io/',
    },
    {
        name: 'basilisk',
        displayName: 'Basilisk',
        prefix: 10041,
        tokens: [
            {
                symbol: 'BSX',
                decimals: 12,
            },
        ],
        paraId: 2090,
        relay: 'kusama',
        genesisHash: '0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755',
        website: 'https://bsx.fi',
    },
    {
        name: 'bifrost',
        displayName: 'Bifrost Kusama',
        prefix: 6,
        tokens: [
            {
                symbol: 'BNC',
                decimals: 12,
            },
        ],
        paraId: 2001,
        relay: 'kusama',
        genesisHash: '0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed',
        website: 'https://bifrost.finance/',
    },
    {
        name: 'pioneer',
        displayName: 'Pioneer Network',
        prefix: 268,
        tokens: [
            {
                symbol: 'NEER',
                decimals: 18,
            },
        ],
        paraId: 2096,
        relay: 'kusama',
        genesisHash: '0xf22b7850cdd5a7657bbfd90ac86441275bbc57ace3d2698a740c7b0ec4de5ec3',
        website: '',
    },
    {
        name: 'calamari',
        displayName: 'Calamari Network',
        prefix: 78,
        tokens: [
            {
                symbol: 'KMA',
                decimals: 12,
            },
        ],
        paraId: 2084,
        relay: 'kusama',
        genesisHash: '0x4ac80c99289841dd946ef92765bf659a307d39189b3ce374a92b5f0415ee17a1',
        website: 'https://manta.network',
    },
    {
        name: 'crust-shadow',
        displayName: 'Crust Shadow',
        prefix: 66,
        tokens: [
            {
                symbol: 'CSM',
                decimals: 12,
            },
        ],
        paraId: 2012,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'darwinia-crab',
        displayName: 'Darwinia Crab',
        prefix: 42,
        tokens: [
            {
                symbol: 'CRAB',
                decimals: 18,
            },
        ],
        paraId: 2105,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'encointer',
        displayName: 'Encointer',
        prefix: 2,
        tokens: [
            {
                symbol: 'KSM',
                decimals: 12,
            },
        ],
        paraId: 1001,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'genshiro',
        displayName: 'Genshiro Network',
        prefix: 67,
        tokens: [
            {
                symbol: 'GENS',
                decimals: 9,
            },
            {
                symbol: 'EQD',
                decimals: 9,
            },
            {
                symbol: 'LPT0',
                decimals: 9,
            },
        ],
        paraId: 2024,
        relay: 'kusama',
        genesisHash: '0x615853d331292f8801d0171e941ba9327475e5b71de24f1a47b06300f1287e94',
        website: 'https://genshiro.equilibrium.io',
    },
    {
        name: 'integritee',
        displayName: 'Integritee Network',
        prefix: 13,
        tokens: [
            {
                symbol: 'TEER',
                decimals: 12,
            },
        ],
        paraId: 2015,
        relay: 'kusama',
        genesisHash: null,
        website: 'https://integritee.network',
    },
    {
        name: 'karura',
        displayName: 'Karura',
        prefix: 8,
        tokens: [
            {
                symbol: 'KAR',
                decimals: 12,
            },
        ],
        paraId: 2000,
        relay: 'kusama',
        genesisHash: '0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b',
        website: 'https://karura.network/',
    },
    {
        name: 'khala',
        displayName: 'Khala Network',
        prefix: 30,
        tokens: [
            {
                symbol: 'PHA',
                decimals: 12,
            },
        ],
        paraId: 2004,
        relay: 'kusama',
        genesisHash: '0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d',
        website: '',
    },
    {
        name: 'kico',
        displayName: 'KICO',
        prefix: 51,
        tokens: [
            {
                symbol: 'KICO',
                decimals: 14,
            },
        ],
        paraId: 2107,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'kilt',
        displayName: 'KILT',
        prefix: 38,
        tokens: [
            {
                symbol: 'KILT',
                decimals: 18,
            },
        ],
        paraId: 2086,
        relay: 'kusama',
        genesisHash: '0x411f057b9107718c9624d6aa4a3f23c1653898297f3d4d529d9bb6511a39dd21',
        website: 'https://kilt.io/',
    },
    {
        name: 'kintsugi',
        displayName: 'Kintsugi',
        prefix: 2092,
        tokens: [
            {
                symbol: 'KINT',
                decimals: 12,
            },
        ],
        paraId: 2092,
        relay: 'kusama',
        genesisHash: '0x9af9a64e6e4da8e3073901c3ff0cc4c3aad9563786d89daf6ad820b6e14a0b8b',
        website: 'https://interlay.io/',
    },
    {
        name: 'kpron',
        displayName: 'Kpron Network',
        prefix: null,
        tokens: [
            {
                symbol: 'KPN',
                decimals: 12,
            },
        ],
        paraId: 2019,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'litmus',
        displayName: 'Litmus',
        prefix: 131,
        tokens: [
            {
                symbol: 'LIT',
                decimals: 12,
            },
        ],
        paraId: 2106,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'loom',
        displayName: 'Loom Network',
        prefix: null,
        tokens: [
            {
                symbol: 'LOOM',
                decimals: null,
            },
        ],
        paraId: 2080,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'mars',
        displayName: 'Mars',
        prefix: null,
        tokens: [
            {
                symbol: 'AMAS',
                decimals: 12,
            },
        ],
        paraId: 2008,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'moonriver',
        displayName: 'Moonriver',
        prefix: 1285,
        tokens: [
            {
                symbol: 'MOVR',
                decimals: 18,
            },
        ],
        paraId: 2023,
        relay: 'kusama',
        genesisHash: '0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b',
        website: 'https://moonbeam.network',
    },
    {
        name: 'heiko',
        displayName: 'Heiko Finance',
        prefix: 110,
        tokens: [
            {
                symbol: 'HKO',
                decimals: 12,
            },
        ],
        paraId: 2085,
        relay: 'kusama',
        genesisHash: '0x64a1c658a48b2e70a7fb1ad4c39eea35022568c20fc44a6e2e3d0a57aee6053b',
        website: 'https://parallel.fi/',
    },
    {
        name: 'picasso',
        displayName: 'Picasso',
        prefix: 49,
        tokens: [
            {
                symbol: 'PICA',
                decimals: 12,
            },
        ],
        paraId: 2087,
        relay: 'kusama',
        genesisHash: null,
        website: 'https://picasso.composable.finance',
    },
    {
        name: 'pichiu',
        displayName: 'Pichiu',
        prefix: null,
        tokens: [
            {
                symbol: 'PCHU',
                decimals: 18,
            },
        ],
        paraId: 2102,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'polkasmith',
        displayName: 'PolkaSmith',
        prefix: 98,
        tokens: [
            {
                symbol: 'PKS',
                decimals: 18,
            },
        ],
        paraId: 2009,
        relay: 'kusama',
        genesisHash: null,
        website: 'https://polkafoundry.com',
    },
    {
        name: 'quartz',
        displayName: 'Quartz',
        prefix: 255,
        tokens: [
            {
                symbol: 'QTZ',
                decimals: 18,
            },
        ],
        paraId: 2095,
        relay: 'kusama',
        genesisHash: '0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554',
        website: '',
    },
    {
        name: 'robonomics',
        displayName: 'Robonomics',
        prefix: 32,
        tokens: [
            {
                symbol: 'XRT',
                decimals: 9,
            },
        ],
        paraId: 2048,
        relay: 'kusama',
        genesisHash: '0x631ccc82a078481584041656af292834e1ae6daab61d2875b4dd0c14bb9b17bc',
        website: 'https://robonomics.network',
    },
    {
        name: 'sakura',
        displayName: 'Sakura',
        prefix: 42,
        tokens: [
            {
                symbol: 'SKU',
                decimals: 18,
            },
        ],
        paraId: 2016,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'sherpax',
        displayName: 'SherpaX',
        prefix: 44,
        tokens: [
            {
                symbol: 'KSX',
                decimals: 18,
            },
        ],
        paraId: 2013,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'shiden',
        displayName: 'Shiden Network',
        prefix: 5,
        tokens: [
            {
                symbol: 'SDN',
                decimals: 18,
            },
        ],
        paraId: 2007,
        relay: 'kusama',
        genesisHash: '0xf1cf9022c7ebb34b162d5b5e34e705a5a740b2d0ecc1009fb89023e62a488108',
        website: '',
    },
    {
        name: 'sora',
        displayName: 'SORA',
        prefix: 420,
        tokens: [
            {
                symbol: 'XOR',
                decimals: 18,
            },
        ],
        paraId: 2011,
        relay: 'kusama',
        genesisHash: null,
        website: 'https://sora.org',
    },
    {
        name: 'statemine',
        displayName: 'Statemine',
        prefix: 2,
        tokens: [
            {
                symbol: 'KSM',
                decimals: 12,
            },
        ],
        paraId: 1000,
        relay: 'kusama',
        genesisHash: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
        website: '',
    },
    {
        name: 'subgame-gamma',
        displayName: 'SubGame Gamma',
        prefix: null,
        tokens: [
            {
                symbol: 'GSGB',
                decimals: 10,
            },
        ],
        paraId: 2018,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'subsocial',
        displayName: 'Subsocial',
        prefix: 28,
        tokens: [],
        paraId: 2100,
        relay: 'kusama',
        genesisHash: '0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8',
        website: '',
    },
    {
        name: 'unorthodox',
        displayName: 'Unorthodox',
        prefix: null,
        tokens: [
            {
                symbol: 'STND',
                decimals: 15,
            },
        ],
        paraId: 2094,
        relay: 'kusama',
        genesisHash: null,
        website: '',
    },
    {
        name: 'zeitgeist',
        displayName: 'Zeitgeist',
        prefix: 73,
        tokens: [
            {
                symbol: 'ZTG',
                decimals: 10,
            },
        ],
        paraId: 2101,
        relay: 'kusama',
        genesisHash: null,
        website: 'https://zeitgeist.pm',
    },
] as const

export default chains

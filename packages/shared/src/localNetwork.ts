import { Chain } from 'viem/chains'

export const localNetwork: Chain = {
  id: 31337,
  name: 'BYOR Local Kaushik Chain',
  network: 'byorkaushiktestnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://127.0.0.1:8545'] },
    default: { http: ['http://127.0.0.1:8545'] },
  },
}

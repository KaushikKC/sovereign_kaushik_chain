import { TypedDataDomain } from 'abitype'

export function getTypedDataDomain(): TypedDataDomain {
  return process.env.NODE_ENV === 'production'
    ? productionTypedDataDomain
    : localTypedDataDomain
}

const localTypedDataDomain: TypedDataDomain = {
  name: 'BYOR Sovereign Kaushik Rollup',
  version: '1',
  chainId: 31337,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
}

const productionTypedDataDomain: TypedDataDomain = {
  name: 'BYOR Sovereign Kaushik Rollup',
  version: '1',
  chainId: 17000,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
}

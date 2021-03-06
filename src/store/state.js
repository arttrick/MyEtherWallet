const state = {
  web3: {

  },
  network: {
    chainId: 0,
    RpcUrl: 'default rpc url',
    port: 8545,
    username: null,
    password: null
  },
  wallet: null,
  ABI: {
    ETH: [],
    ROP: [],
    hashAsKey: {name: '', address: '', ABI: []}
  },
  Tokens: {
    ETH: [],
    ROP: []
  },
  Transactions: {},
  Networks: {
    ETH: {},
    ROP: {}
  },
  Errors: {},
  homepage: {
    sublink: 'about'
  }
}

export default {
  state
}

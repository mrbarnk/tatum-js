import process from 'process'
import { CardanoRosetta, Network, TatumSDK } from '../../../service'
import { e2eUtil } from '../../e2e.util'

const getCardanoRosettaRpc = async (testnet?: boolean) =>
  await TatumSDK.init<CardanoRosetta>({
    network: testnet ? Network.CARDANO_ROSETTA_PREPROD : Network.CARDANO_ROSETTA,
    apiKey: {
      v4: testnet ? process.env.V4_API_KEY_TESTNET : process.env.V4_API_KEY_MAINNET,
    },
    verbose: e2eUtil.isVerbose,
  })

const networks = [
  { testnet: false, blockchain: 'cardano', network: 'mainnet' },
  { testnet: true, blockchain: 'cardano', network: 'preprod' },
]

describe.each(networks)('Cardano Rosetta', ({ testnet, network, blockchain }) => {
  describe(`${testnet ? 'Testnet' : 'Mainnet'}`, () => {
    let tatum: CardanoRosetta

    beforeEach(async () => {
      tatum = await getCardanoRosettaRpc(testnet)
    })

    afterEach(async () => {
      await tatum.destroy()
    })

    it('should get network status', async () => {
      const response = await tatum.rpc.getNetworkStatus({
        networkIdentifier: { blockchain, network },
      })
      expect(response).toBeDefined()
    })

    it('should get network list', async () => {
      const response = await tatum.rpc.getNetworkList({})
      expect(response).toBeDefined()
    })

    it('should get block', async () => {
      const response = await tatum.rpc.getBlock({
        networkIdentifier: { blockchain, network },
        blockIdentifier: { index: 1 },
      })
      expect(response).toBeDefined()
    })
  })
})

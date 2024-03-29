import {ProcessorConfig} from '../interfaces/processorConfig'

export const config: ProcessorConfig = {
    chainName: 'bifrost',
    prefix: 'bifrost',
    dataSource: {
        archive: 'https://bifrost.archive.subsquid.io/graphql',
        chain: 'wss://bifrost-parachain.api.onfinality.io/public-ws',
    },
}

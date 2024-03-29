import {BatchContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {Store} from '@subsquid/typeorm-store'
import {getChain} from './chains'
import {Account, ChainState} from './model'

const {api} = getChain()

const DAY_MS = 24 * 60 * 60 * 1000

export async function saveChainState(ctx: BatchContext<Store, unknown>, block: SubstrateBlock) {
    const state = new ChainState({id: block.id})

    state.timestamp = new Date(getDayTimestamp(block.timestamp))
    state.blockNumber = block.height
    state.councilMembers = (await api.storage.getCouncilMembersCount(ctx, block)) || 0
    state.councilProposals = (await api.storage.getCouncilProposalsCount(ctx, block)) || 0
    state.democracyProposals = (await api.storage.getDemocracyProposalsCount(ctx, block)) || 0
    state.tokenBalance = (await api.storage.getTotalIssuance(ctx, block)) || 0n

    state.tokenHolders = await ctx.store.count(Account)

    await ctx.store.save(state)
    ctx.log.child('state').info(`saved at block ${block.height}`)
}

export function isOneDay(timestamp1: number, timestamp2: number) {
    return getDayTimestamp(timestamp1) === getDayTimestamp(timestamp2)
}

function getDayTimestamp(timestamp: number) {
    return Math.floor(timestamp / DAY_MS) * DAY_MS
}

# balances-squid

A Substrate squid that indexes native account balances on Polkadot, Kusama, and several parachains, built with the SQD (Subsquid) SDK.

## What it is

This is a [squid](https://docs.sqd.dev/en/sdk/): an indexer built on `@subsquid/substrate-processor` that reads onchain data, transforms it, and stores it in a PostgreSQL database exposed through a GraphQL API. It is part of [SQD](https://sqd.dev), an open data platform for Web3.

The processor subscribes to `Balances` pallet events (`Endowed`, `Transfer`, `BalanceSet`, `Reserved`, `Unreserved`, `ReserveRepatriated`, `Deposit`, `Withdraw`, `Slashed`) and to call origins, then reads each affected account's free and reserved balance from chain storage. It writes the results to two entities (see `schema.graphql`):

- `Account`: per-account `free`, `reserved`, and `total` balance, plus the block it was last updated at.
- `ChainState`: periodic snapshots of total issuance, token holder count, council members, council proposals, and democracy proposals, with timestamp and block number.

### Supported chains

The chain to index is selected at runtime through the `CHAIN` environment variable. The following values are wired up in `src/chains/index.ts`:

`polkadot`, `kusama`, `acala`, `karura`, `moonbeam`, `moonriver`, `bifrost`, `phala`, `hydradx`

Each chain has its own data source and balance-storage configuration under `src/chains/<chain>/`. Deployment manifests for several of these chains are in `manifests/`.

## Prerequisites

- Node.js
- Docker (for the local PostgreSQL database)

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## Run

Start the PostgreSQL database:

```bash
docker-compose up -d
```

Apply the database migrations:

```bash
npm run db:migrate
```

Select a chain and start the processor (`CHAIN` must be set to one of the supported values above):

```bash
CHAIN=kusama node -r dotenv/config lib/processor.js
```

Start the GraphQL API in a separate terminal:

```bash
npm run query-node:start
```

A `Makefile` provides shortcuts for these steps (for example `make up`, `make migrate`, and `make kusama`).

## Project layout

```
src/
  processor.ts        Processor entry point: events, call origins, balance updates
  chainState.ts       Periodic ChainState snapshots
  chains/             Per-chain data source and storage config (one dir per chain)
  model/              Generated TypeORM entities (Account, ChainState)
schema.graphql        Entity schema for the GraphQL API
manifests/            Deployment manifests per chain
db/                   Database migrations
typegen/              Generated type bindings for chain events and storage
```

## Documentation

For the SQD SDK, see https://docs.sqd.dev/en/sdk/ and https://docs.sqd.dev.

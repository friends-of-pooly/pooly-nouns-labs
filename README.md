# Pooly Nouns Labs

![TS](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-MIT-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

# Checklist

The Pooly<>Nouns stack is divided into application and packages.

## Nouns WAGMI React Library

package: `@pooly-nouns-labs/nouns-wagmi`

### Hooks

- [x] useNounsAuctionHouseContract
- [x] useNounsAuctionHouseRead
- [x] useNounsAuctionHouseWrite
- [x] useNounsDescriptorContract
- [x] useNounsDescriptorRead
- [x] useNounsDescriptorWrite
- [x] useNounsSeederContract
- [x] useNounsSeederRead
- [x] useNounsSeederWrite
- [x] useNounsTokenContract
- [x] useNounsTokenRead
- [x] useNounsTokenWrite

### Components

- [ ] AuctionActivity
- [ ] AuctionDateHeadline
- [ ] AuctionNounTitle
- [ ] AuctionTimer
- [ ] BidHistory
- [ ] ChangeDelegator
- [ ] CurrentBid
- [ ] NounCard
- [ ] NounImage
- [ ] NounInfoCard
- [ ] NounProfile
- [ ] Noun
- [ ] ProposalContent
- [ ] ProposalHeader
- [ ] ProposalStatus
- [ ] ProposalTransactions
- [ ] Proposal
- [ ] Proposals
- [ ] VoteCards

## Nouns WAGMI App

package: `@pooly-nouns-labs/wagmi-app`

### View

- [ ] Home (index.ts)
- [ ] Noun (noun.ts)
- [ ] Profile (profile.ts)

### Installation & Usage

```sh
git clone git@github.com:turbo-eth/turbo-eth.git
```

The `pnpm` package manager is **required** for node module management.

Please reference the `pnpm` [documentation](https://pnpm.io/) for installation instructions.

```sh
pnpm install
```

Packages use [direnv](https://direnv.net/) to manage environment variables. You'll likely need to install it.

```sh
cp .envrc.example .envrc
```

### Task Pipelines

Build flows are handled via tasks pipelines: schedule, execute, and cache.

Edit the `turbo.json` file in the root directory to define new [pieplines](https://turborepo.org/docs/core-concepts/pipelines)

**Start Building**

```sh
pnpm lab
```

The fastest way to start hacking is to run the `lab` task pipeline: starts local blockchain, creates frontend development server and watches for `packages` files for changes.

**Example:**

```json
{
  "$schema": "https://turborepo.org/schema.json",
  "baseBranch": "origin/main",
  "pipeline": {
    "chain": {
      "dependsOn": ["^chain"],
      "outputs": [""],
      "inputs": ["contracts/**/*.sol"]
    },
    "compile": {
      "dependsOn": ["^compile"],
      "outputs": [""],
      "inputs": ["contracts/**/*.sol"]
    },
    "lab": {
      "dependsOn": ["^watch", "^chain", "@turbo-eth/demo-app#dev"],
      "outputs": [""]
    }
  }
}
```

## Modules

The monorepo includes 3 primary folders

- [apps](https://github.com/turbo-eth/turbo-eth/tree/main/apps)
- [contracts](https://github.com/turbo-eth/turbo-eth/tree/main/contracts)
- [packages](https://github.com/turbo-eth/turbo-eth/tree/main/packages)

## Developer Experience

- [Turborepo](https://turborepo.org/docs)
- [pNPM](https://pnpm.io/)
- [TSDX](https://tsdx.io/)

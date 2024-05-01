# Solana Attendance Deposit Dapp

## Overview

This is a Solana program that allows users to deposit funds into a program account and then withdraw them after meeting two conditions:
- Payment will be returned after a lock-in period, specified by the course manager (ex. after the last day of classes).
- Student has to check-in within a given timeframe and have 100% attendance.

The program is designed to be used as a way to incentivize attendance at events, such as courses, hackathons or meetups.

## Components
**Smart Contract for Deposit and Refund**
- Manages the logic for depositing USDC and processes refunds.

This project is generated with the [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp) generator.

[Anchor Source](https://github.com/superical/solana-attendance-deposit)

## Interaction Flow
1. Course Manager ➡️ Creates courses ➡️ Specifies required deposit and number of lessons in course
2. Students ➡️ Register courses ➡️ Deposit Funds (SPL tokens)
3. Course Manager ➡️ Creates lessons and sets a deadline for logging attendance
4. Students log their attendance for every lesson before the deadline
5. If students miss the deadline, students are marked absent
6. When the number of lessons created equals the number of lessons specified when creating the course, the course is considered completed.
7. Students can withdraw their deposit after the course is completed if all of their attendances are checked.


## Getting Started

### Prerequisites

- Node v18.18.0 or higher

- Rust v1.70.0 or higher
- Anchor CLI 0.29.0 or higher
- Solana CLI 1.17.0 or higher

### Installation

#### Clone the repo

```shell
git clone <repo-url>
cd <repo-name>
```

#### Install Dependencies

```shell
npm install
```

#### Start the web app

```
npm run dev
```

## Apps

### anchor

This is a Solana program written in Rust using the Anchor framework.

#### Commands

You can use any normal anchor commands. Either move to the `anchor` directory and run the `anchor` command or prefix the command with `npm run`, eg: `npm run anchor`.

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/basic-exports.ts` to match the new program id.

```shell
npm run anchor keys sync
```

#### Build the program:

```shell
npm run anchor-build
```

#### Start the test validator with the program deployed:

```shell
npm run anchor-localnet
```

#### Run the tests

```shell
npm run anchor-test
```

#### Deploy to Devnet

```shell
npm run anchor deploy --provider.cluster devnet
```

### web

This is a React app that uses the Anchor generated client to interact with the Solana program.

#### Commands

Start the web app

```shell
npm run dev
```

Build the web app

```shell
npm run build
```

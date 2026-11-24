[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/zeromix555/u-po-pu-say-what-actually-broke-a2c153b5-entry/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/zeromix555/u-po-pu-say-what-actually-broke-a2c153b5-entry/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

# Say What Actually Broke

An entry for the [make.fun bounty "Say What Actually Broke"](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) ($2 in USDC).

## The line

> Your file is gone: the only backup lived on the same drive that just died, in a folder called backup_final_FINAL_v2. Recreate it — and back it up somewhere that isn't here.

One single line of software error copy (174 characters) that tells the user the
brutal truth — the backup was on the same drive that died — and tells them what
to do next, with a folder name every engineer has seen in the wild.

## How it is made

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`. It is fully deterministic: no input, no randomness, no
clock, no network — running it twice produces byte-identical output.

```sh
node main.ts
```

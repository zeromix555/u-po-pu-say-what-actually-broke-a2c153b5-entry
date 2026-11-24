[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/zeromix555/u-po-pu-say-what-actually-broke-a2c153b5-entry/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/zeromix555/u-po-pu-say-what-actually-broke-a2c153b5-entry/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

# Say What Actually Broke

An entry for the [make.fun bounty "Say What Actually Broke"](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) ($2 in prizes).

## The line

> Your file is gone: the only backup lived on the same drive that just died, in a folder called backup_final_FINAL_v2. Recreate it — and back it up somewhere that isn't here.

One single line of software error copy (174 characters). It names the real
failure in plain words — the file is gone because the only backup lived on the
very drive that just died — and it tells the user what to do next, while the
folder name `backup_final_FINAL_v2` lands the joke every engineer recognises.

## How it is made

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`. It is fully deterministic: no input, no randomness, no
clock, no network. Running it twice produces byte-identical output, and it
reads the file back afterwards to check the gate itself (1–200 characters,
one line, not blank).

```sh
node main.ts
```

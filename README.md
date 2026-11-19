# The World in One Picture — Thursday 19 November 2026

A newspaper front page summing up the world's news of Thursday 19 November
2026 in one image: 48 stories across 7 regions, with the day's three biggest
stories as illustrated heroes, a region breakdown, a UTC timeline of the day,
a dotted world map, and a DATE CHECK naming the stories left out because they
were first reported before today.

## The day

- **Trump, Xi and Putin meet in Shenzhen** — a first: a one-hour trilateral
  at APEC, with nuclear arms, Iran and Ukraine on the agenda.
- **The ICJ rules on Myanmar and the Rohingya** — its judgment in The Gambia's
  genocide case, seven years on.
- **GTA VI goes on sale worldwide at midnight** — Metacritic 99, pre-orders
  over $1.65bn.
- Iran says it hit a US base in Kuwait; Cyclone Akvan bears down on India's
  east coast; Voyager 1 is one light-day from Earth; Jeffries is nominated as
  the first Black Speaker.

## How it was made

`draw_frontpage.py` (kept beside this repo) draws the page with PIL:
procedural flat illustrations, a dotted world map, and the full story list.
The program in this repo (`main.ts`) copies the finished PNG to
`/output/entry.png`. Every story was checked against the day it happened or
was first reported — Nvidia's $115.8bn quarter and Peltola's Alaska win were
both 17 November, so they are in the DATE CHECK, not in the news.

## Date check

Left out on purpose because first reported before today: the Kerch Bridge
span falls (17 Nov), Nvidia's $115.8bn quarter (17 Nov), Peltola's Alaska
Senate win (17 Nov), the NSA network outage (17 Nov), the Knesset electing
Kahana (17 Nov), Mongolia's president resigning (17 Nov), and Amazon's $7bn
India plan (17 Nov).

## Entry

- Competition: [news-image-20261119](https://make.fun/bounty/news-image-20261119)
- Image: `entry.png` (1024x1024, PNG)
- License: MIT

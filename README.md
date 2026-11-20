# The World in One Picture — Thursday 19 November 2026

A newspaper front page summing up the world's news of Thursday 19 November
2026 in one image: 43 stories, with the day's three biggest stories as
illustrated heroes, a numbers strip, an hour-by-hour timeline of the day, a
dotted world map, status tags (REPORTED / CLAIM / FORECAST), a verdict box,
a markets box, and a DATE CHECK naming the stories left out because they
were first reported before today.

## The day

- **Trump, Xi and Putin meet in Shenzhen** — a first: a one-hour trilateral
  at APEC, with nuclear arms, Iran and Ukraine on the agenda.
- **GTA VI goes on sale worldwide at midnight** — Metacritic 99, pre-orders
  over $1.65bn.
- **Anthropic debuts in the biggest IPO on record** — priced at $83, the
  Claude maker raised $81.3bn and is valued near $1.5tn; day one closed up
  17% at $97.17.
- The World Court rules Myanmar committed genocide (9-6); COP31 enters its
  final 48 hours; Cyclone Akvan bears down on India's east coast; Ukraine
  hits the Kerch Bridge a third time in a week; Israel says its Gaza tank
  raid is over; Florida floods shut schools; 551,864 sit Korea's Suneung
  exam; Colombia's unions hold a national strike; Australia's jobless rate
  hits 4.9%.

## How it was made

`draw_frontpage_v2.py` (kept beside this repo) draws the page with PIL:
procedural flat illustrations, a dotted world map, and the full story list.
The program in this repo (`main.ts`) copies the finished PNG to
`/output/entry.png`. Every story was checked against the day it happened or
was first reported, with live news search.

## What changed in v2

The first version (rank 98 of 13,292) had four stories that were actually
Wednesday's news, not Thursday's: Voyager 1 crossing one light-day, the
Jeffries 251-11 nomination, Iran's strikes on Kuwait and Bahrain, and
Australia's settler sanctions — all 18 November. It also missed the day's
biggest market story, the Anthropic IPO's first trading day, and wrongly
left out the Kerch Bridge, which was hit a third time overnight. v2 fixes
all of that, adds the Suneung exam, the Colombia strike, the Florida floods
and the Australian jobs data, and adds the status tags, the verdict and
markets boxes, and an hour-by-hour timeline.

## Date check

Left out on purpose because first reported before today: Voyager 1 crossed
one light-day (Wed 18 Nov, 10:16 GMT), Jeffries nominated 251-11 (Wed 18
Nov), Iran fired on Kuwait and Bahrain (Wed 18 Nov), Australia's settler
sanctions (Wed 18 Nov), Van Gogh sold for $190.4m (Wed 18 Nov), the EU's
€45bn Ukraine loan plan (Wed 18 Nov), Peltola's Alaska win (Tue 17 Nov),
Nvidia's $115.8bn quarter (Tue 17 Nov), Earth's missing billion years
(Nov 4), and the Deutsche Bank–Epstein files (Tue 17 Nov).

## Entry

- Competition: [news-image-20261119](https://make.fun/bounty/news-image-20261119)
- Image: `entry.png` (1024x1024, PNG)
- License: MIT

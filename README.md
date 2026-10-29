# Learning Deadlines

Countdowns to conference deadlines across education research: AI in education, learning analytics and educational data mining, the learning sciences and CSCL, computing education, STEM education, comparative and international education, educational technology, engineering education and general education research.

**Live site:** https://sumeghp.github.io/educonf-dates/

Inspired by [aideadlin.es](https://aideadlin.es/), which does the same for AI/ML conferences.

## Features

- Live countdowns for every deadline, with the next one front and centre
- A six-week calendar showing each deadline on its day
- Filters by topic, region, country and status, plus search
- Sorting by next deadline, most time left, conference date or name
- Times shown in your own time zone, Anywhere on Earth, IST, UTC and others
- Star the conferences you care about (saved in your browser)
- One-click Google Calendar links, or copy deadlines as `.ics`
- Dark mode and an OpenDyslexic font option

## How reliable are the dates?

Every deadline carries a status:

| Status | Meaning |
|---|---|
| **announced** | Published on the conference's official website |
| **provisional** | Marked tentative by the organisers, or taken from a third-party CFP listing |
| **estimated** | The call isn't out yet; the date follows last year's pattern |

Deadlines without a stated time zone are treated as 23:59 Anywhere on Earth (UTC−12). Always confirm on the conference website before planning around a date.

## Add or correct a conference

All data lives in [`data.js`](data.js). Each conference looks like this:

```js
{
  id: "lak27", country: "Brazil", start: "2027-03-08",
  short: "LAK", year: 2027,
  name: "International Conference on Learning Analytics & Knowledge",
  topics: ["la"],                 // keys from TOPICS at the top of data.js
  region: "Americas",             // Asia, Europe, Americas, Oceania or TBA
  place: "Recife, Brazil", dates: "8–12 Mar 2027",
  url: "https://www.solaresearch.org/events/lak/lak27/general-call/",
  deadlines: [
    { label: "Full & short papers", date: "2026-09-28", status: "announced" },
    { label: "Posters & demos", date: "2026-11-09", status: "announced",
      note: "Optional note shown in the details" }
  ]
}
```

Deadline fields: `date` (YYYY-MM-DD), optional `time` (HH:MM, default 23:59), optional `tz` (`AoE` by default, or `UTC`, or an IANA zone like `Europe/London`), `status`, and an optional `note`.

To contribute:

1. **Open an issue** using the "Suggest a conference" template, with a link to the call for papers, or
2. **Send a pull request** editing `data.js`. Please link the source in the PR description.

## Running locally

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server
```

## Credits

- Built by [Sumegh P](https://github.com/sumeghp)
- [OpenDyslexic](https://opendyslexic.org/) font by Abbie Gonzalez, used under the SIL Open Font License
- Fonts: Bricolage Grotesque and Instrument Sans via Google Fonts

If this saves you a missed deadline, you can [buy me a coffee](https://buymeacoffee.com/sumeghp).

## Licence

Code: MIT (see [LICENSE](LICENSE)). Conference information is collected from public calls for papers.

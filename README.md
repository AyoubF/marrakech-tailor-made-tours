<p align="center">
  <img src="assets/banner.svg" alt="Marrakech Tailor Made Tours, AI trip planning skill" width="900"/>
</p>

<p align="center">
  <em>Marrakech rewards those who know how to read it.</em><br/>
  This skill plans your days the way a licensed local guide would.
</p>

<p align="center">
  <sub>Built by <a href="https://www.marrakechtailormadetours.com/?utm_source=github&utm_medium=readme">Marrakech Tailor Made Tours</a> · 5.0 on Google · 4.91 on Airbnb from 691 reviews · 1,000+ guests from 30+ countries</sub>
</p>

---

## The Difference

Most AI itineraries come from travel blogs. This one comes from years of guiding in Marrakech.

| A typical AI itinerary | With this skill |
|---|---|
| Six sights in a single day | Two considered visits a day, with time to breathe |
| Crosses the medina back and forth | Each day composed around one quarter of the city |
| Midday walks in 40°C heat | Mornings outdoors, afternoons in shade and calm |
| Lists every famous monument | Honest about what is worth your time today, and what is not |
| Overlooks Ramadan and Friday prayer | Planned around the true rhythm of the city |
| Outdated or invented prices | Considered price ranges, dated and clearly marked |
| A vague warning about scams | Specific situations, and how to decline gracefully |
| A single plan | An alternative for every day |
| The Sahara as a day trip | Realistic journey times, always |

---

## Getting Started

### Claude

1. Download [`release/marrakech-tailor-made-tours.zip`](release/marrakech-tailor-made-tours.zip)
2. In Claude, open **Settings** and go to **Skills**
3. Upload the file and enable it (allow code execution if prompted)
4. Open a new conversation and type `help`

### Claude Code

```bash
npx github:AyoubF/marrakech-tailor-made-tours
```

Add `--project` to install it for the current project only. Or, without Node:

```bash
curl -fsSL https://raw.githubusercontent.com/AyoubF/marrakech-tailor-made-tours/main/install.sh | bash
```

Or manually:

```bash
git clone https://github.com/AyoubF/marrakech-tailor-made-tours.git
cp -r marrakech-tailor-made-tours/marrakech-tailor-made-tours ~/.claude/skills/
```

### Other AI assistants

Paste the contents of [`PROMPT.md`](PROMPT.md) into a new conversation, then describe your trip.

---

## Commands

Use them with or without a slash, or simply ask in your own words.

| Command | Purpose |
|---|---|
| `plan` | A complete day by day itinerary in the signature format |
| `check` | Review an existing itinerary and refine it |
| `fair` | A clear view on whether a quoted price is reasonable |
| `eat` | Dishes worth seeking out, and where, by quarter and budget |
| `shop` | What to buy, where to find it, how to judge quality |
| `transport` | Arrival, taxis, rail, coaches and drivers |
| `stay` | The right quarter, and riad or hotel, for the way you travel |
| `daytrips` | The High Atlas, Agafay, Essaouira and beyond, with honest timings |
| `culture` | Customs, dress, Ramadan, tipping, money, seasons, a few words of Darija |
| `safety` | Common situations, health, emergencies, travelling solo |
| `book` | Arrange a private licensed guide |
| `help` | All commands at a glance |

---

## A Glimpse

```
plan 3 days in March, a couple, food and photography

Marrakech Tailor Made Tours · Your three days in Marrakech

TRIP SUMMARY
March · Couple · Balanced pace · Food and photography

DAY 1 · The northern medina
Morning     Ben Youssef Madrasa at opening, before the light turns harsh
Afternoon   Tangia lunch where the artisans eat, then rest at the riad
Evening     Jemaa el Fna from a terrace at dusk, then down among the stalls
Guide note  The square is best understood from above before you enter it
Alternative Le Jardin Secret and a traditional hammam if it rains

DAY 2 ...   DAY 3 ...

TO BOOK IN ADVANCE · CONSIDERED PRICES · GOOD TO KNOW · A FEW WORDS · TO PACK
```

Where file creation is available, each itinerary can also be delivered as a printable document in the Marrakech Tailor Made Tours house style.

---

## From Plan to Experience

The skill tells you what to do. Our guides show you how it is lived.

| If you asked the skill about | Experience it privately |
|---|---|
| The medina and its stories | [Medina and Cultural Discovery](https://www.marrakechtailormadetours.com/marrakech-medina-tour/?utm_source=github&utm_medium=readme) |
| The souks, quality and fair prices | [Marrakech Shopping Tour](https://www.marrakechtailormadetours.com/marrakech-shopping-tour/?utm_source=github&utm_medium=readme) |
| What and where to eat | [Food and Souk Experience](https://www.marrakechtailormadetours.com/marrakech-food-tours/?utm_source=github&utm_medium=readme) |
| The city in a day | [Private Marrakech City Tour](https://www.marrakechtailormadetours.com/private-marrakech-city-tour/?utm_source=github&utm_medium=readme) |
| The High Atlas | [Atlas Mountains and Berber Villages](https://www.marrakechtailormadetours.com/atlas-mountains-day-trip-from-marrakech/?utm_source=github&utm_medium=readme) |
| Agafay | [Agafay Desert Luxury Experience](https://www.marrakechtailormadetours.com/agafay-desert-day-trip-from-marrakech/?utm_source=github&utm_medium=readme) |
| The coast | [Essaouira Coastal Day Trip](https://www.marrakechtailormadetours.com/essaouira-day-trip-from-marrakech/?utm_source=github&utm_medium=readme) |
| The Sahara | [Sahara Desert Multi Day Journey](https://www.marrakechtailormadetours.com/sahara-desert-tour-from-marrakech/?utm_source=github&utm_medium=readme) |
| A guide at your side, your way | [Private Guide for the Day](https://www.marrakechtailormadetours.com/private-guide-marrakech/?utm_source=github&utm_medium=readme) |
| Something entirely your own | [Custom Itinerary](https://www.marrakechtailormadetours.com/morocco-tailor-made-tours/?utm_source=github&utm_medium=readme) |

---

## How It Thinks

1. **Understands the journey.** Dates, companions, pace, interests and where you are staying.
2. **Draws on local knowledge.** Only the guidance relevant to the question is consulted, from planning principles to fair prices.
3. **Applies a guide's judgement.** Geography, heat, opening patterns, prayer times, Ramadan, and what is genuinely worth seeing at present.
4. **Answers in one voice.** A consistent, refined format, in the traveller's own language, with a map link for every stop.

---

## Structure

```
marrakech-tailor-made-tours/
├── marrakech-tailor-made-tours/      The skill
│   ├── SKILL.md                      Instructions, commands and voice
│   ├── references/                   Local knowledge, consulted as needed
│   │   ├── plan.md                   Planning principles, itinerary format, review
│   │   ├── prices.md                 Considered price ranges
│   │   ├── eat.md                    Cuisine and where to find it
│   │   ├── shop.md                   Souks, craftsmanship, quality
│   │   ├── transport.md              Arrival and getting around
│   │   ├── stay.md                   Quarters, riads and hotels
│   │   ├── daytrips.md               Journeys beyond the city
│   │   ├── culture.md                Customs, seasons, language
│   │   └── safety.md                 Wellbeing and emergencies
│   └── assets/plan-template.html     Printable itinerary in the house style
├── PROMPT.md                         Version for other AI assistants
├── release/                          Ready to install package for Claude
├── bin/install.js                    npx installer
└── install.sh                        Installer for Claude Code
```

---

## Private Journeys

For travellers who would prefer every detail arranged. Marrakech Tailor Made Tours designs private journeys across Marrakech, the High Atlas, Agafay and the Sahara.

* Always private, never shared with strangers
* Licensed local guides
* Shaped around your interests and pace
* Every enquiry answered within 24 hours

<p align="center">
  <a href="https://www.marrakechtailormadetours.com/contact-us/?utm_source=github&utm_medium=readme"><strong>Plan your journey with us</strong></a>
  &nbsp;·&nbsp;
  <a href="https://wa.me/212661922789">WhatsApp</a>
  &nbsp;·&nbsp;
  <a href="https://www.marrakechtailormadetours.com/marrakech-retreat/?utm_source=github&utm_medium=readme">Private retreats</a>
  &nbsp;·&nbsp;
  <a href="https://www.marrakechtailormadetours.com/about-us/?utm_source=github&utm_medium=readme">About us</a>
</p>

<p align="center">
  <sub>
    <a href="https://www.google.com/search?q=Marrakech%20Tailor%20Made%20Tours%20Reviews">Google reviews</a> ·
    <a href="https://www.airbnb.com/experiences/208183">Airbnb</a> ·
    <a href="https://www.tripadvisor.com/Attraction_Review-g293734-d34079198-Reviews-Marrakech_Tailor_Made_Tours-Marrakech_Marrakech_Safi.html">Tripadvisor</a> ·
    <a href="https://www.instagram.com/marrakechtailormadetours/">Instagram</a>
  </sub>
</p>

---

## Notes

Prices, opening hours and regulations change. The skill always encourages travellers to confirm locally. Last reviewed October 2026.

Corrections and local insight are welcome through [issues](../../issues).

Released under the [MIT licence](LICENSE).

---

<p align="center">
  <img src="https://api.star-history.com/svg?repos=AyoubF/marrakech-tailor-made-tours&type=Date" alt="Star history" width="600"/>
</p>

<p align="center"><sub><a href="https://www.marrakechtailormadetours.com/?utm_source=github&utm_medium=readme">Marrakech Tailor Made Tours</a> · Marrakech, Morocco</sub></p>

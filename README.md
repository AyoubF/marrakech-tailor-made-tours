<p align="center">
  <img src="assets/banner.svg" alt="Marrakech Tailor Made Tours, AI trip planning skill" width="900"/>
</p>

<p align="center">
  <em>Marrakech rewards those who know how to read it.</em><br/>
  This skill plans your days the way a licensed local guide would.
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
└── install.sh                        Installer for Claude Code
```

---

## Private Journeys

For travellers who would prefer every detail arranged, Marrakech Tailor Made Tours designs private journeys across Marrakech, the High Atlas, Agafay and the Sahara, guided by licensed local guides.

<p align="center">
  <a href="https://marrakechtailormadetours.com"><strong>marrakechtailormadetours.com</strong></a>
  &nbsp;·&nbsp;
  <a href="https://wa.me/212661922789">WhatsApp +212 661 922 789</a>
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

<p align="center"><sub>Marrakech Tailor Made Tours · Marrakech, Morocco</sub></p>

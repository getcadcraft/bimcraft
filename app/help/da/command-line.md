---
title: Kommandolinjen i statuslinjen
summary: I en layout med en kommandolinje kan du skrive hvor som helst, og bogstaverne havner i linjen nederst. Den viser, hvad der matcher, gemmer en historik og dækker aldrig tegningen.
keywords: kommandolinje, skriv hvor som helst, skrevet kommando, statuslinje, historik, piletaster, enter, mellemrum, WALL, DOOR, Duncan-layout, Rhino-layout, genvej, taster, kommandosøgning
from: d583b52d
---

## Hvad du gør

Kør værktøjer ved at skrive deres navne, uden først at klikke i en boks.

## Trin

1. Vælg en layout, der har en kommandolinje: åbn {{ui:Indstillinger}}, vælg {{ui:Globalt}}, derefter {{ui:Layout}}, og vælg **Duncan** (eller **Rhino**). Linjen sidder i statuslinjen nederst i vinduet.
2. Med markøren et vilkårligt sted og ingen boks i brug, skriv `wall`. Bogstaverne vises i kommandolinjen, og en liste over den viser de kommandoer, der matcher.
3. Tryk på {{key:Enter}}. Værktøjet Væg starter.
4. Klik i kommandolinjen (eller tryk på en tast igen). Når linjen er tom, viser listen de kommandoer, du skrev før. {{key:Up}} og {{key:Down}} bevæger sig gennem dem; {{key:Enter}} kører den, der vises.

## Hvad du kan skrive

- Et kommandoord fra den menustil, der er i brug, hvor stilen har dem (`WALL`, `WA`, `DOOR` i tegnestilen).
- En kommandos tast som et ord: `W` og derefter {{key:Enter}} eller {{key:Space}} er Væg, `D` er Dør.
- Navnet på en kommando, med eller uden mellemrum: `split wall`, `wallrectangle`.
- Starten på et ord eller et navn, når kun én kommando starter sådan.
- Alt andet åbner kommandosøgningen med det, du skrev.

## Godt at vide

- {{key:Esc}} tømmer linjen og giver tasterne tilbage til tegningen.
- I disse layouts starter et enkelt bogstav ikke længere et værktøj af sig selv: det venter i linjen på {{key:Enter}} eller {{key:Space}}. Taster med {{key:Ctrl}}, funktionstasterne, {{key:Delete}} og {{key:Esc}} virker som før. I de andre layouts ændres intet.
- Mens et tegneværktøj kører, bliver cifre hos værktøjet (en skrevet længde).
- Skrivning i en boks, en dialog eller Indstillinger bliver der.
- Historikken gemmes på denne computer, 50 kommandoer for hver app.

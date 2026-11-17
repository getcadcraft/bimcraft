---
title: Kommandolinjen i statuslinjen
summary: I et oppsett med kommandolinje skriver du hvor som helst, og bokstavene havner i linjen nederst. Den viser hva som passer, beholder en historikk og dekker aldri tegningen.
keywords: kommandolinje, skriv hvor som helst, skrevet kommando, statuslinje, historikk, piltaster, enter, mellomrom, WALL, DOOR, Duncan-oppsett, Rhino-oppsett, snarvei, taster, kommandosøk
from: d583b52d
---

## Hva du gjør

Kjør verktøy ved å skrive navnene deres, uten å klikke i en boks først.

## Steg

1. Velg et oppsett som har en kommandolinje: åpne {{ui:Innstillinger}}, velg {{ui:Globalt}}, deretter {{ui:Layout}}, og velg **Duncan** (eller **Rhino**). Linjen ligger i statuslinjen nederst i vinduet.
2. Med pekeren hvor som helst og ingen boks i bruk, skriv `wall`. Bokstavene vises i kommandolinjen, og en liste over den viser kommandoene som passer.
3. Trykk {{key:Enter}}. Veggverktøyet starter.
4. Klikk i kommandolinjen (eller trykk en tast igjen). Med tom linje viser listen kommandoene du skrev tidligere. {{key:Up}} og {{key:Down}} går gjennom dem; {{key:Enter}} kjører den som vises.

## Hva du kan skrive

- Et kommandoord i menystilen som er i bruk, der stilen har dem (`WALL`, `WA`, `DOOR` i Tegning-stilen).
- Tasten til en kommando, som et ord: `W` og deretter {{key:Enter}} eller {{key:Space}} er Vegg, `D` er Dør.
- Navnet på en kommando, med eller uten mellomrom: `split wall`, `wallrectangle`.
- Starten på et ord eller navn, når bare én kommando starter slik.
- Alt annet åpner kommandosøket med det du skrev.

## Greit å vite

- {{key:Esc}} tømmer linjen og gir tastene tilbake til tegningen.
- I disse oppsettene starter en enkelt bokstav ikke et verktøy alene: den venter i linjen på {{key:Enter}} eller {{key:Space}}. Taster med {{key:Ctrl}}, funksjonstastene, {{key:Delete}} og {{key:Esc}} virker som før. I de andre oppsettene endrer ingenting seg.
- Mens et tegneverktøy kjører, blir sifre hos verktøyet (en skrevet lengde).
- Skriving i en boks, en dialog eller Innstillinger blir der.
- Historikken lagres på denne datamaskinen, 50 kommandoer for hver app.

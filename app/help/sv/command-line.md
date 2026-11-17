---
title: Kommandoraden i statusfältet
summary: I en layout med en kommandorad skriver du var som helst, och bokstäverna hamnar på raden längst ned. Den listar det som matchar, sparar historik och täcker aldrig ritningen.
keywords: kommandorad, skriv var som helst, skrivet kommando, statusfält, historik, piltangenter, enter, mellanslag, WALL, DOOR, Duncan-layout, Rhino-layout, genväg, tangenter, kommandosökning
from: d583b52d
---

## Vad du gör

Kör verktyg genom att skriva deras namn, utan att först klicka i en ruta.

## Steg

1. Välj en layout som har en kommandorad: öppna {{ui:Inställningar}}, välj {{ui:Globalt}}, sedan {{ui:Layout}}, och välj **Duncan** (eller **Rhino**). Raden ligger i statusfältet längst ned i fönstret.
2. Med muspekaren var som helst och ingen ruta i användning, skriv `wall`. Bokstäverna visas på kommandoraden och en lista ovanför visar kommandona som matchar.
3. Tryck på {{key:Enter}}. Väggverktyget startar.
4. Klicka i kommandoraden (eller tryck på en tangent igen). När raden är tom visar listan de kommandon du skrev tidigare. {{key:Up}} och {{key:Down}} bläddrar bland dem; {{key:Enter}} kör det som visas.

## Det du kan skriva

- Ett kommandoord i den menystil som används, där stilen har dem (`WALL`, `WA`, `DOOR` i Drafting-stilen).
- Ett kommandos tangent, som ett ord: `W` följt av {{key:Enter}} eller {{key:Space}} är Vägg, `D` är Dörr.
- Ett kommandos namn, med eller utan mellanslag: `split wall`, `wallrectangle`.
- Början på ett ord eller namn, när bara ett kommando börjar så.
- Allt annat öppnar kommandosökningen med det du skrev.

## Bra att veta

- {{key:Esc}} tömmer raden och ger tangenterna tillbaka till ritningen.
- I dessa layouter startar inte längre en enskild bokstav ett verktyg av sig själv: den väntar på raden på {{key:Enter}} eller {{key:Space}}. Tangenter med {{key:Ctrl}}, funktionstangenterna, {{key:Delete}} och {{key:Esc}} fungerar som förut. I de andra layouterna ändras inget.
- Medan ett ritverktyg körs hör siffror kvar till verktyget (en inmatad längd).
- Att skriva i en ruta, en dialog eller Inställningar stannar där.
- Historiken sparas på den här datorn, 50 kommandon för varje app.

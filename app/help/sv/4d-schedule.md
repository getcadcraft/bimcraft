---
title: Spela upp ett byggschema på modellen
summary: Öppna en uppgiftslista som CSV, koppla varje uppgift till element via en egenskap och gå igenom datumen för att se vad som är byggt, pågår och inte har påbörjats ännu.
keywords: 4d, schema, byggordning, tidslinje, etappindelning, tidplan, gantt, uppgifter, datum, simulering, framsteg, byggt, csv, etapp, fas, arbetspaket, wbs, grupp
from: 1b985a64
---

## Vad du gör

Se byggnaden växa fram: varje uppgift i ditt schema kopplad till de element den bygger, visad dag för dag.

## Steg

1. Öppna en IFC-modell och öppna {{ui:4D schedule}} i vänster panel.
2. Klicka på {{ui:Download a template}} för en uppgiftslista med en vecka per våningsplan, och ändra den i ett kalkylblad. Eller skriv din egen.
3. Klicka på {{ui:Open a task list…}} och välj CSV-filen.
4. Dra datumreglaget eller klicka på {{ui:Play}}.

## Uppgiftslistan

En CSV med en rubrikrad och kolumnerna **Task**, **Start**, **Finish**, **Field** och **Value**. Kommatecken eller semikolon fungerar båda.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Nivå 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Tak | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Tak | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Skriv datum som YYYY-MM-DD.
- En rad kopplar uppgiften till varje element vars **Field** har exakt det **Value**. Fältet är en egenskap som Storey, Class, Name, Type, Material, Tag eller GlobalId, eller en egenskap skriven med dess uppsättning och namn: `Pset_WallCommon.FireRating`.
- Upprepa en uppgift på fler rader, med samma datum, för att koppla fler element till den.

## Etapper och arbetspaket

Lägg till en kolumn **Stage**, en kolumn **Package** eller båda för att samla uppgifter i etapper och arbetspaket. Phase och WBS fungerar också som kolumnnamn.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Bjälklag nivå 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Stomme | Ram |
| Väggar nivå 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Stomme | Ram |
| Dörrar | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Inredning | Snickeri |

- En uppgift hör till en etapp och ett arbetspaket. Om en senare rad för samma uppgift anger ett annat, listas den raden med sitt radnummer och utelämnas.
- Samma arbetspaketsnamn i två etapper är två arbetspaket.

När listan har grupper visas en lista {{ui:Show}} ovanför datumet. Välj en etapp eller ett arbetspaket så spelas det upp som en enhet:

- reglaget och {{ui:Play}} går från gruppens första start till dess sista slut,
- bara gruppens uppgifter listas och målas, och allt utanför gruppen är genomskinligt,
- raden under listan säger hur många av dess uppgifter som är klara, pågår och återstår på det datumet,
- {{ui:Select its elements}} markerar alla element i gruppen, för {{ui:Show}}, {{ui:Section}} eller ett schema.

Välj **Alla uppgifter** för att se hela schemat igen.

## Vad du ska se

- **Byggt**: element vars uppgifter är klara, i sina egna färger.
- **Pågår**: element med en uppgift som pågår den dagen, i ockra. En uppgift pågår från sitt startdatum till och med sitt slutdatum.
- **Ej påbörjat**: genomskinliga.
- Element som inte ingår i någon uppgift förblir som de är. Listan visar hur många element varje uppgift hittade. Rader som inte kunde läsas, eller som inte hittade något, listas med sina radnummer.

## Länkar, Gantt-diagrammet och MS Project

- Öppna en Microsoft Project XML-fil (`.xml`) eller en CSV som har en kolumn `Predecessors`. Länkarna kan vara slut till start, start till start, slut till slut eller start till slut, var och en med en fördröjning eller framförskjutning i dagar.
- Under uppgiftslistan ritar Gantt-diagrammet varje uppgift som en stapel, med pilar för länkarna. Uppgifter på den kritiska vägen är röda. En länkslinga eller en föregångare som inte finns listas i panelen.
- {{ui:Save as MS Project XML}} och {{ui:Save CSV with links}} skriver tillbaka schemat med dess länkar.

## Nästa

- [Hitta element efter klass, namn eller egenskap](topic:find)
- [Färgsätt element efter en egenskap](topic:color-by-property)

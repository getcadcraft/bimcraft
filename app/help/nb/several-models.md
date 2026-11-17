---
title: Se flere IFC-modeller sammen
summary: Legg til flere IFC-filer i scenen, for eksempel arkitektur, konstruksjon og installasjoner, se dem i samme koordinater, flytt én, skjul én og velg hvilken du redigerer.
keywords: føderering, føderert modell, flere modeller, flere filer, kombiner, overlegg, koordinering, fag, konstruksjon, mep, installasjoner, forskyvning, flytt modell, aktiv modell, legg til modell
from: df0efbbf
---

## Hva du gjør

Se på modeller fra ulike fag på ett sted: arkitektens modell med konstruksjons- og installasjonsmodellene i samme visning. Hver beholder sin egen fil. BimCraft viser dem bare sammen.

## Trinn

1. Åpne den første IFC-modellen som vanlig.
2. I {{ui:Modeller}} til venstre klikker du {{ui:Legg til en modell…}} og velger én eller flere IFC-filer. Hver av dem vises i listen og i 3D-visningen.
3. Fjern haken for en modell for å skjule den. Sett haken igjen for å vise den på nytt.
4. Hvis en modell kommer på feil sted (et annet oppmålingspunkt), klikker du {{ui:Flytt}} under den, skriver hvor langt den skal flyttes langs X, Y og Z i meter, og klikker {{ui:Bruk}}.
5. Modellen med prikken er den du redigerer. Klikk på en annen modells prikk for å redigere den.
6. Klikk × ved siden av en modell for å ta den ut av scenen.

## Åpne teamets modeller

Når den åpne modellen er en skyfil i et teamprosjekt, vises {{ui:Åpne teamets modeller}} under listen. Den åpner prosjektets andre IFC-modeller ved siden av denne, hver flyttet med forskyvningen prosjektet har satt. Modeller som er skjult for deg, holdes utenfor og telles. En modell som prosjektet har rotert, åpnes uten rotasjon og telles også. Filer som ikke er IFC (en DWG, for eksempel), hoppes over og nevnes i statuslinjen. En modell som allerede er åpen, åpnes aldri to ganger. Knappen er skjult for en fil som ikke er i et teamprosjekt.

## Hva som vises

- Hver modell i den første modellens koordinater, slik filen plasserer den. Modeller eksportert fra samme prosjekt står på linje uten å flyttes.
- Når du velger et element i en modell du ikke redigerer, vises egenskapene skrivebeskyttet, med {{ui:Rediger den modellen}} for å bytte.
- {{ui:Modelltre}}, {{ui:Etasjer}}, {{ui:Farge}}, listen over {{ui:Endringer}}, plassering av bibliotekselementer og {{ui:Lagre som IFC}} virker på modellen du redigerer. Skjul, isoler, gjennomsiktig og {{ui:Velg alle}} virker på tvers av alle modeller.
- {{ui:Lagre som IFC}} laster ned modellen du redigerer, med bare endringene dine.

## Vanlige feil

- **En modell er langt unna eller mangler.** Filen bruker andre koordinater. Bruk {{ui:Tilpass}} for å finne den, og flytt den så på plass med {{ui:Flytt}}.
- **Slett eller Kopier er nedtonet for et valgt element.** Det hører til en annen modell. Bytt til den først.
- **Åpning av en fil med Velg en fil erstattet alt.** Da startes en ny scene. Bruk {{ui:Legg til en modell…}} for å legge filer til i den du har.

## Neste

- [Skjul, isoler og gjennomsiktige elementer](topic:hide-and-isolate)
- [Farge elementer etter en egenskap](topic:color-by-property)

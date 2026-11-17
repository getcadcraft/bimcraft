---
title: Beregn varme- og kjølelaster
summary: Varmetapet til hvert rom, oppvarmingen over et år etter graddager og kjøletoppen, fra det som avgrenser rommet i modellen og hvert elements U-verdi, med alle inndata vist. Et dimensjoneringshjelpemiddel, ikke en samsvarsberegning.
keywords: energi, oppvarming, kjøling, varmetap, varmelast, kjølelast, U-verdi, varmegjennomgang, graddager, hdd, ventilasjon, luftvekslinger, interne varmetilskudd, solvarme, lambda, varmeledningsevne, isolasjon, tidlig prosjektering, analyse, rom
from: ec312d20
---

I fanen {{ui:Dagslys}}, etter {{ui:Beregn}}, åpner du {{ui:Varme- og kjølelaster}} og klikker på {{ui:Beregn lastene}}. Hvert rom får sitt **varmetap** på en kald dimensjonerende dag, sin **oppvarming over et år** og sin **kjøletopp** på en varm dag. Ingenting lastes opp, og ingenting i modellen endres med mindre du skriver inn en U-verdi.

:::warning
Dette er **et dimensjoneringshjelpemiddel, ikke en beregning for samsvar med krav**: et stasjonært overslag med alle inndata på skjermen. Det er **ikke** metoden ISO 52016-1, ikke en simulering og ikke et energisertifikat. Det dimensjonerer ikke kjeler, varmepumper eller kjøleaggregater. Kontroller resultatene, og dimensjoner utstyr sammen med en ingeniør.
:::

## Hva som avgrenser hvert rom

BimCraft finner det i selve modellen, så enhver IFC fra alle programmer fungerer (den trenger ikke avgrensningsflatene som noen programmer eksporterer). Fra hver bit av rommets egen flate ser den rett ut:

- det første elementet den møter (vegg, vindu, dør, gulv, tak, bekledning, gardinvegg eller bjelke) **avgrenser** den biten;
- rett forbi det elementet er det enten **et annet rom** (regnes som naboen, med samme temperatur: ingen tap), **ingenting** (utenfor), eller, under et gulv på laveste nivå, **grunnen**;
- en åpen dørgang inn i et annet rom regnes som nabo; en bit som ikke møter noe i det hele tatt (innenfor 1.5 m sideveis eller nedover, 8 m oppover) listes under rommet og utelates.

Vinduer og dører tar sin egen størrelse fra IFC-filen (samlet bredde × høyde) fra veggen de sitter i. Klikk på et rom i tabellen for å se hvert element som avgrenser det, med areal, U-verdi og hvor U-verdien kommer fra.

## U-verdier

For hvert element bruker BimCraft, i denne rekkefølgen:

1. **IFC-ens egen U-verdi**: `ThermalTransmittance` i elementets felles egenskapssett (for eksempel `Pset_WallCommon`) eller i typens. De fleste prosjekteringsprogrammer kan skrive den.
2. **Materiallagene**: 1 ÷ (innvendig overflatemotstand + hvert lags tykkelse ÷ varmeledningsevne λ + utvendig overflatemotstand), med vanlige overflatemotstander (0.13 og 0.04 m²K/W for vegger; 0.10 oppover og 0.17 nedover innvendig). Typiske varmeledningsevner å starte med er steinull 0.035, murstein 0.77 og betong 1.4 …. Under {{ui:Materialenes varmeledningsevne}} skriver du produsentens verdi, og alle U-verdier fra disse lagene følger med.
3. **En typisk verdi** (vegger 0.3, tak 0.2, gulv 0.25, vinduer 1.4, dører 1.6 W/m²K), merket som slik. Skriv inn din egen.

En U-verdi du skriver inn i et rom sin detaljvisning, lagres i elementets felles egenskapssett som `ThermalTransmittance` (ett steg; {{key:Mod+Z}} angrer det). Hvis flere elementer deler det settet (for eksempel én veggtype), endres de alle sammen, og statuslinjen sier hvor mange.

## Oppvarming

- **Varmetap** = Σ U × A × (innvendig − utvendig) for alt som vender ut + Σ U × A × (innvendig − grunn) for gulv på grunnen + 0.335 × luftvekslinger per time × rommets volum × (innvendig − utvendig). 0.335 Wh per m³ per kelvin er luftens tetthet (1.2 kg/m³) ganget med varmekapasiteten (1005 J/kgK).
- **Oppvarming over et år** = (rommets tap per grad mot utsiden, gjennom konstruksjonen og luften, pluss grunntapet skalert til samme differanse) × **graddagene** × 24 ÷ 1000, i kWh. Skriv inn graddagene for stedet, eller {{ui:Les graddager fra en CSV…}} (én rad per dag eller måned; det siste tallet i hver rad legges sammen). Bruk graddager med grunntemperaturen kilden din bruker. Den grunntemperaturen tar allerede hensyn til gratisvarmen fra folk, lys og sol.

## Kjøling

**Kjøletoppen** = varmen gjennom konstruksjonen og luften ved sommerens dimensjonerende temperatur + folk (gulvareal per person × varme per person) + belysning og utstyr per m² gulvareal + **solen**: toppen av {{ui:Sol gjennom vinduene på en dato}} for det rommet. Beregn solen først, på en varm dag. Inntil da teller solen 0, og seksjonen sier det. Toppen for hver del legges sammen, selv om de inntreffer på ulike tidspunkter, noe som overdriver litt.

## Hva den utelater

- ISO 52016-1s månedlige og timebaserte metoder (en betalt standard), varme lagret i bygningens masse, kuldebroer, hvordan oppvarmings- og kjøleanlegg yter, og klimafiler.
- Rom som ligger inntil hverandre settes til samme temperatur. Uoppvarmede rom modelleres ikke.

Se også [Beregn dagslyset i hvert rom](topic:daylight-factor).

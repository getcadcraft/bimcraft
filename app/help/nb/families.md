---
title: Familier og deres størrelser
summary: Dører, vinduer og møbler kommer i familier. Hver størrelse i en familie er én type i IFC-filen, så typelisten holder seg kort i BimCraft, mens andre programmer leser vanlige typer.
keywords: familie, familier, type, typer, størrelse, størrelser, dørtype, vindustype, møbler, bord, hylle, skap, ny størrelse, dupliser, plasser familie, familiefil, ccfamily, ifc-bibliotek, prosjektbibliotek, gruppe, synlighet, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Hva en familie er

En familie er én type ting i flere størrelser: en enkel svingdør som kommer 32, 36 og 42 tommer bred, eller et bord som kommer langt og kort. I BimCraft ser du familien én gang, med størrelsene under seg, i stedet for en lang liste med typer.

IFC har ingen familier. I filen er hver størrelse en vanlig type (en dørtype, en vindustype, en møbeltype …), og familien er en gruppe som lister opp størrelsene. Andre BIM-programmer leser typene og gruppen slik de er; BimCraft leser familien tilbake fra dem.

## Hvor de finnes

- Gruppen **Familier** i prosjektutforskeren lister familiene i denne modellen, med hvor mange størrelser hver har og hvor mange som er plassert. Under dem finnes **Startfamilier**: dørene og vinduene i verktøyene Dør og Vindu, og et bord, en hyllenhet og et underskap.
- {{ui:Bygg}} › {{ui:Familier…}} viser den samme listen i et vindu.
- Klikk en familie for å åpne den: størrelsene, verdiene til hver størrelse, og hvor mange elementer som bruker hver.

## Dører og vinduer

Verktøyene Dør og Vindu lister familiene av den typen, og en **størrelsesliste** ved siden av dem. Velg en størrelse, eller skriv inn **W** og **H**: en bredde og høyde som ingen størrelse har ennå, blir en ny størrelse i familien når døren plasseres. Dører av samme størrelse deler én type.

I {{ui:Egenskaper}} viser en valgt dør eller et valgt vindu **Familie** og **Størrelse**. Velg en annen størrelse fra listen, eller skriv inn ny bredde eller høyde. {{ui:Åpne familien}} åpner familien den tilhører.

Hver dørs eller hvert vindus karm følger tykkelsen på sin egen vegg, slik det gjorde før familier. Typen til størrelsen beholder også døren tegnet i en 140 mm vegg, for programmer som leser typer.

## Ny størrelse fra denne familien

1. Åpne familien.
2. Under **Ny størrelse fra denne familien** skriver du inn verdiene (Bredde, Høyde og familiens andre parametere) og, hvis du vil, et navn. Uten navn får størrelsen navn etter verdiene.
3. Klikk {{ui:Lag størrelsen}}.

To størrelser kan ikke ha samme verdier. **Gi nytt navn** endrer navnet på en størrelse; **Fjern** tar bort en størrelse ingen bruker; **Velg** velger elementene i størrelsen.

## Plasser møbler

1. {{ui:Bygg}} › {{ui:Plasser familie}}, eller {{ui:Plasser}} i familiens vindu.
2. Velg familien og størrelsen i linjen.
3. Klikk i planen for å plassere den på etasjen. Trykk {{key:R}} for å snu den 90° før du klikker. {{key:Esc}} stopper.

En plassert del viser størrelsen, hvor den er og hvor mye den er snudd, i {{ui:Egenskaper}}; {{key:Delete}} fjerner den. Alle deler av én størrelse deler formen til den størrelsen, så endring av familien endrer dem alle.

## Størrelser fra en tabell

{{ui:Størrelser fra en tabell…}} i en familiens vindu leser en CSV-fil (komma, semikolon eller tabulator). Den første raden navngir kolonnene: en parameters navn eller etikett, og valgfritt `Name`. Lengder er millimeter med mindre du skriver en enhet (`1.2 m`, `36 in`). Ja / Nei-kolonner tar yes, no, true, false, 1 eller 0, og en parameter uten kolonne beholder standardverdien sin. Hver rad blir en størrelse, i ett steg som kan angres; en størrelse som allerede finnes, hoppes over. En rad som ikke kan leses, eller som familien ikke kan tegne, avviser hele tabellen og oppgir linjenummeret. Høyst 200 rader og 1 MB. {{ui:Lagre størrelsene som en tabell}} skriver samme tabell tilbake.

## Angis på hvert element

En parameter merket **Per element** i redigeringsprogrammet (et Ja / Nei som legger til en sprosse, en etikett eller et materiale) er ikke en del av en størrelse: to dører av samme størrelse kan være forskjellige. Velg elementet, så viser {{ui:Egenskaper}} disse parameterne; endrer du én, tegnes elementet på nytt med sin egen form (møbler og armatur får en egen form, dører og vinduer lages på nytt i veggene sine). Setter du dem alle tilbake til standardverdiene, går elementet tilbake til formen til størrelsen.

## Detaljnivå

{{ui:Bygg}} › {{ui:Familier…}} › **Detaljnivå** angir, for hver familie i modellen, hva som lagres i legemene og tegnes i planssymbolene: **Fin** beholder alt, **Middels** og **Grov** utelater delene redigeringsprogrammet merker som finere (mindre filer, raskere visninger). **Automatisk** lagrer alt og lar arkvisningen velge etter målestokk: 1:50 og større fin, 1:100 middels, 1:200 og mindre grov. Ett steg som kan angres.

## Dupliser en familie

Du må ikke starte fra null. {{ui:Dupliser}} kopierer en familie med dens parametere, legemer og størrelser under et nytt navn. Endre kopien i redigeringsprogrammet; originalen forblir som den var.

## Familiefiler

- {{ui:Lagre familiefilen}} lagrer en `.ccfamily.json`: familiens parametere, legemer og størrelser. Åpne den i en annen modell med {{ui:Åpne en familiefil…}} i gruppen Familier.
- {{ui:Lagre som IFC}} lagrer familien som en liten IFC-fil: typene til størrelsene og gruppen, deklarert av et IFC-prosjektbibliotek. Andre programmer åpner den som et sett med typer; BimCraft åpner den igjen som familien.

En familiefil som åpnes her, leses som data og kontrolleres før noe skrives. En familie hvis nøkkel allerede finnes i modellen, kommer inn som en egen familie. En familie som inneholder andre (se {{ui:Familier inni}} i redigeringshjelpen), tar dem med: filen lister dem, og modellen beholder dem den allerede har.

## Familier i biblioteket

Åpne {{ui:Familier…}} og velg {{ui:Fra Biblioteket…}} for å se familiene som er delt i biblioteket. {{ui:Legg til i dette prosjektet}} leser en av dem som en familiefil: BimCraft kontrollerer hvert felt før den lager noe, familien kommer inn som en egen familie, og den åpnes i redigeringsprogrammet. Å legge den til er ett steg i angre. For å dele din egen familie, bruk {{ui:Lagre alle som et bibliotek}} og send filen til biblioteket (bibliotekets ansatte publiserer en familiefil med en kommando, og hver familie er et eget element med sine størrelser). Hvis biblioteket ikke kan nås, sier listen det, og ingenting endres.

## Andre programmers typer

Typer laget av andre programmer vises også i gruppen Familier, gruppert etter en gjetning: etter den delen av elementenes navn som står før første kolon, ellers etter typenavn som bare skiller seg i tallene. Familievinduet sier hvilken gjetning som ble brukt. De listes, og du kan velge elementene deres, men de redigeres ikke her: de har ingen familieoppskrift.

:::note
Startdørene og -vinduene tegnes akkurat som før familier. Filer laget før familier åpnes uendret: dørene og vinduene deres vises under familien sin med størrelsene som er i bruk, og flyttes over til en egen størrelse første gang du endrer dem.
:::

Se også [Rediger en familie](topic:family-editor) og [Dører og vinduer](topic:doors-and-windows).

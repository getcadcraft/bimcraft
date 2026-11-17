---
title: Tegn vegger
summary: Tegn vegger på planen til et nivå ved å klikke på hjørnene eller skrive inn lengder; hjørner sammenføyes av seg selv, og veggene lagres som IFC.
keywords: buet, bue, referanselinje, justering, vegg, vegger, tegn, plan, planskisse, rom, hjørne, sammenføy, vegg type, 2x6, 2x4, cmu, betong, høyde, nivå, nivåer, etasje, skrevet lengde, ortho, fang
from: 8269cd4b
---

## Hva du skal gjøre

Tegn veggene i en bygning på en plan for hvert nivå. Klikk der en vegg starter, og deretter på hvert hjørne. BimCraft sammenføyer hjørnene for deg, gir hver vegg dens lag (kledning, underlag, stendere, gipsplate …) og fører den opp til nivået over. 3D-visningen viser veggene etter hvert som du tegner.

## Åpne planen

1. Start et nytt bygg ([Start et nytt bygg](topic:start-a-new-building)) eller åpne en IFC-modell.
2. Klikk {{ui:Tegn}} på verktøylinjen. Et nytt bygg åpnes med den allerede på.
3. Planen for et nivå vises til venstre og 3D-visningen til høyre. Velg nivå i listen øverst i planen, eller med den runde knappen ved siden av i panelet **Nivåer**.
4. {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} er verktøy på raden {{ui:Visning}} på verktøylinjen (kommandoene PLAN, SPLIT og tastene fungerer som før). Bruk {{ui:Plan}} for bare planen, {{ui:Del}} for begge, og {{ui:3D}} for å lukke planen. Når vinduet er smalt (eller grensesnittet er stort), setter {{ui:Del}} planen over 3D-visningen i stedet for ved siden av.

Planen skjærer nivået 4'-0" (1200 mm) over gulvet, slik en etasjeplan gjør. Rull for å zoome, dra med midtknappen eller høyreknappen (eller hold nede {{key:Space}} og dra) for å panorere; med {{ui:Velg}} på, panorerer et vanlig dra også. {{key:F}} med pekeren over planen tilpasser den.

## Tegn et rom

1. Klikk {{ui:Vegg}} (eller trykk {{key:W}}).
2. Velg veggtypen i den første listen, for eksempel **Yttervegg 2×6** eller **Innervegg 2×4**.
3. Velg høyden: **Opp til nivået over** (veggen følger hvis nivået flyttes), **Opp til** et nivå lenger opp for en vegg som går gjennom flere nivåer (en trappehall, et rom med dobbel høyde, en høy gavl), eller **Fast høyde** og skriv den inn. En slik vegg hører til nivået du tegnet den på; planene for nivåene den går gjennom viser den lysere, rommene der lukkes mot den, og du kan klikke dører og vinduer inn i den fra disse planene (en dør står på gulvet til det nivået). For å flytte eller endre formen på selve veggen, gå til nivået den starter på.
4. Klikk der den første veggen starter.
5. Klikk på hvert hjørne. Hvert klikk lager en vegg; den neste starter der den forrige sluttet. Lengden og vinkelen vises ved siden av pekeren.
6. Klikk det første punktet igjen for å lukke rommet. Statuslinjen viser hvor mange vegger rommet har, og i senterlinjemodus får hver vegg sitt ytre lag på utsiden av rommet.
7. Trykk {{key:Esc}} (eller høyreklikk, eller dobbeltklikk) for å stoppe uten å lukke.

Hjørnene sammenføyes av seg selv: to vegger møtes i en geringsskjøt, en vegg som ender på en annen stopper ved dens flate (en T), og tre eller flere vegger i ett punkt deler hjørnet. Vegger som krysser hverandre, blir liggende som de er.

Et helt rom på én gang: åpne {{ui:Former}} for et rektangel, et rotert rektangel, en mangekant, buer, vegger på valgte linjer eller rundt en kontur (se [Veggformer, del, forskyv, strekk og lås](topic:wall-tools)).

## Velg tegningsreferanse

Velg **Senterlinje**, **Innside flate** eller **Utside flate** før det første klikket. Når en flate er valgt, beskriver klikkene og de innskrevne lengdene den flaten; BimCraft forskyver veggens senterlinje med halvparten av total tykkelse og sammenføyer påfølgende hjørner. Velg **Utside til venstre** eller **Utside til høyre** i forhold til tegneretningen. For en lukket kontur tegnet mot klokken er utsiden til høyre; med klokken, til venstre. Med **Innside flate** går veggens kropp til utsiden av linjen din; med **Utside flate**, til den andre siden. Flatetegning beholder den utsiden du valgte når du lukker løkken. På senterlinjen tar vegger som ikke lukker et rom, den utsiden du valgte; å lukke et rom setter hver vegg sin utside til rommets utside av seg selv, uansett hvilken vei du tegnet.

Å endre veggtype, referanse eller utside avslutter gjeldende kjede. Nær et vendende hjørne avsluttes lange geringer med rette ender.

Mens du tegner, kan et endepunkt over tomt rom justeres vannrett eller loddrett mot et veggendepunkt eller et tidligere hjørne. En stiplet hjelpelinje forbinder det punktet med den fangede pekeren. {{key:Shift}} holder tegneretningen rett; justeringen stopper da langs den retningen. Nære endepunkter, midtpunkter og veggkryss har forrang foran justering på avstand.

## Referanselinje

Med **Referanse** på **Utside flate** eller **Innside flate** beholder veggen den flaten som referanselinje. Senere, hvis veggen blir tykkere eller utsiden snus, blir flaten stående der den er, og veggen vokser eller snur seg rundt den. En rett vegg som møter den i et hjørne, følger med, slik at hjørnet fortsatt lukkes. Du kan endre referanselinjen etterpå under **Egenskaper**: se [Endre en vegg, dør eller vindu](topic:change-a-wall-or-door).

## Tegn en buet vegg

1. Klikk {{ui:Vegg}}, og velg deretter **Buet** i listen **Form** på alternativraden.
2. Klikk der veggen starter, og deretter der den slutter.
3. Klikk et punkt på buen. Eller skriv inn buehøyden og trykk {{key:Enter}}.
4. Kjeden fortsetter fra enden av veggen. Trykk {{key:Esc}} for å avslutte den.

En buet vegg sammenføyes med veggene i endene (hjørne- og T-skjøter fungerer), lager rom, og holder dører og vinduer langs buen. De forblir rette enheter, vinkelrett på veggen i midten, og avstanden deres måles langs buen. En vegg kan dreie høyst tre firedeler av en sirkel. Den fanger endene og midtpunktet på buen.

Ikke bygget ennå for buede vegger: {{ui:Trim / forleng}} og {{ui:Hjørne}}, stendere, automatiske planmål og fangst langs buen. Se [Hva som ikke er bygget ennå](topic:not-built-yet).

## Skriv inn en lengde i stedet for å klikke

Etter det første klikket skriver du inn og trykker {{key:Enter}}:

| Skriv inn | Tegner |
|---|---|
| `12'6"` eller `3810` | en vegg så lang, i retningen pekeren viser |
| `12'6"<90` | så lang, i den vinkelen (grader, mot klokken fra høyre) |
| `@3000,0` | til et punkt så langt fra det forrige, på tvers og opp |
| `1200,3400` | til det punktet på planen |

Når veggverktøyet er på, går det du skriver inn med et tall rett inn i boksen {{ui:Lengde}}. I fot og tommer er et vanlig tall tommer; i millimeter er det millimeter. Du kan alltid skrive enheten: `3.5 m`, `10 ft`, `6 1/2"`.

## Fangepunkter

- Veggendene, hjørnene deres og veggmidtpunktene fanges når pekeren er nær dem (et kvadrat, en trekant).
- Pekeren fanger veggens senterlinje eller en av flatene (et kryss).
- Fra det siste punktet holder retningen seg hver 15° når den er nær; hold {{key:Shift}} for å holde den på 0°, 90°, 180° eller 270°.
- Frie retninger runder lengden av til 1/2" (eller 10 mm).

## Endre, angre, slett

- Hver vegg er ett steg i **Endringer**: {{ui:Angre}} og {{ui:Gjør om}} tar veggene tilbake og legger dem tilbake.
- Med {{ui:Velg}} på, klikk en vegg i planen for å velge den; 3D-visningen og **Egenskaper** følger med. {{key:Delete}} sletter de valgte veggene, og veggene de var sammenføyd med, ryddes opp igjen.

## Nivåer

Panelet **Nivåer** lister hvert nivå med høyde over null og høyde.

- Skriv inn nytt navn, ny høyde over null eller ny høyde og trykk {{key:Enter}}. Når du endrer høyden (eller høyden over null) til et nivå, flyttes nivåene over det med samme beløp, og vegger som går opp til et nivå, følger med.
- {{ui:Legg til et nivå på toppen}} legger til et nivå over det øverste, like høyt som det.
- {{ui:Legg til et nivå under}} legger til et nivå under det laveste (en kjeller), like høyt som dette: høyden over null blir negativ når det laveste nivået står på 0, og ingen andre nivåer flyttes. Angre fjerner det igjen.
- {{ui:Kopier dette nivået…}} tegner det som ligger på nivået du ser på, på nytt på et annet nivå, eller på et nytt nivå på toppen: veggene med dører og vinduer, gulv og himlinger (ikke tak). Vegger som gikk opp til nivået over, går opp til nivået over det nye; rom vises av seg selv. Ett {{ui:Angre}} tar hele kopien tilbake. Hvis det andre nivået allerede har vegger, legges kopien til dem.
- {{ui:Enheter}} på verktøylinjen velger enhetene (fot og tommer, tommer, desimalfot, millimeter, centimeter eller meter) for alt verktøyene viser og leser.

## Lagre

Klikk {{ui:Lagre som IFC}}. Hver vegg er en IFC-vegg med senterlinjen sin, sin sammenføyde form, sin type og lag, `Pset_WallCommon` og grunnmengder (lengde, høyde, arealer og volumer), slik at andre BIM-programmer kan åpne den og lage lister av den.

## Greit å vite

- Vegger tegnes på senterlinjen. Tykkelsen kommer fra veggtypen.
- Planen viser vegger tegnet her fylt, og alt annet (bibliotekselementer, modeller fra andre programmer) kuttet av samme plan, med det som ligger under kuttet i tynne linjer.
- Vegger laget av andre programmer vises i planen, men kan ikke endres med disse verktøyene ennå.

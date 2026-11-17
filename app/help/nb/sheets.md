---
title: Fasader, snitt og ark
summary: Tegn snittlinjer i plantegningen, og åpne Ark for et utskriftsklart sett laget fra modellen: plantegninger av hvert nivå, de fire fasadene, bygningssnitt, tabeller og veggstending, med tegningshoder og målestokker, som én PDF.
keywords: ark, tegningssett, byggetegninger, utskrift, plott, pdf, fasade, fasader, nordfasade, snitt, bygningssnitt, snittlinje, kutt, skjulte linjer, tegningshode, arknummer, målestokk, 1/4" = 1'-0", 1:50, 1:100, papir, 11x17, 24x36, A3, A1, byggesøknadssett
from: 91ed0cde
---

## Hva du gjør

Lag et tegningssett fra modellen: plantegningen av hvert nivå, nord-, øst-, sør- og vestfasadene, et bygningssnitt for hver snittlinje, tabellene for dører, vinduer, rom og tømmer, og en fasade av hver stendervegg. Settet tegnes på nytt fra modellen hver gang du åpner det, så det alltid stemmer med det du har bygget.

## Tegn en snittlinje

1. På et nivå åpner du {{ui:Bygg}} og velger {{ui:Snittlinje}}.
2. Klikk der linjen starter og der den slutter. Den korte linjen i midten viser siden snittet ser mot: venstre for linjen, i retning fra første til andre klikk.
3. Linjen vises i plantegningen med sine hoder og sin bokstav (A, så B, og så videre).

Velg linjen for å endre den i **Egenskaper**: bokstaven, **Snu visningen** for å se den andre veien, og **Se så langt som** for å stoppe visningen en bestemt avstand bak snittet (0 viser alt bak det). Trykk {{key:Delete}} for å fjerne den.

## Åpne arkene

1. Klikk {{ui:Ark}} i modellinjen (ved siden av {{ui:Skriv ut}}).
2. Arkene listes til venstre: **A-101** og oppover for plantegninger, **A-201** for fasader, **A-301** for snitt, **A-401** for tabeller og **S-101** for veggstending. Klikk på ett for å se det.
3. Velg **Papir**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 eller A1. Papiret beholder sitt standardnavn, og størrelsen skrives i de {{ui:Enheter}} du valgte, for eksempel *Letter · 8.5 × 11 in* eller *A3 · 297 × 420 mm*.
4. Klikk {{ui:Last ned settet som PDF}}: én side per ark.

## Standardnotater fra en regelpakke

I et ark kan {{ui:Standardnotater}} brukes til å plassere notater fra en regelpakke (etter fag) i arkets høyre kolonne. Hvert notat beholder pakken og paragrafen det kommer fra, og det utskrevne arket sier når pakken ikke er verifisert. Notatene er et utgangspunkt: den ansvarlige for tegningen bestemmer hva de skal si. De krever tillegget for byggeregler.

## Hva som er på arkene

- **Plantegninger** viser vegger, dører, vinduer, rom med arealer, mål og snittlinjer, i den største standardmålestokken som passer: 1/4" = 1'-0" eller mindre (1:50 eller mindre i millimeter).
- **Fasader** tegnes fra 3D-modellen med skjulte linjer fjernet, to per ark, alle i samme målestokk, med en terrenglinje under. Taket, fundamentene og terrenget vises slik de er modellert.
- **Snitt** fyller det snittet går gjennom (vegger, dekker, taket) og tegner det som sees bak det.
- **Fasader og snitt har sine notater:** en markering for hvert nivå med navn og høyde til høyre, høyden mellom nivåene til venstre, og på en fasade bygningens bredde under den og en merkelapp (D1, W1) på hver dør og hvert vindu i en vegg som vender mot deg. For et rom sine egne vegger, se [Innvendige fasader](topic:interior-elevations).
- **Tabeller** er de samme som {{ui:Tabeller}} i modellinjen.
- **Stending** viser hver stendervegg sine stendere, rambånd, dragere og underkarmer sett fra utsiden, slik at et mannskap kan legge den ut. Se [Stending av vegger, dekker og tak](topic:framing).

Hvert ark har et tegningshode med nummer, tittel, filnavnet og datoen.

:::tip
Ark lages fra modellen: for å endre en tegning, endre modellen og åpne {{ui:Ark}} på nytt.
:::

:::note
Fasader og snitt viser bare linjer og fyll: mål, nivåmerker og notater på dem er ikke bygget ennå.
:::

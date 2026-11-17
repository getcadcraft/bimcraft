---
title: Facader, snit og ark
summary: Tegn snitlinjer i planen, og åbn derefter Ark for et klar-til-udskrivning sæt lavet af modellen: planer af hvert niveau, de fire facader, bygningssnit, lister og vægkonstruktion, med tegningshoveder og målestoksforhold, som én PDF.
keywords: ark, tegningssæt, byggetegninger, udskriv, plot, pdf, facade, facader, nordfacade, snit, bygningssnit, snitlinje, skær, skjulte linjer, tegningshoved, arknummer, målestok, 1/4" = 1'-0", 1:50, 1:100, papir, 11x17, 24x36, A3, A1, byggesagssæt
from: 91ed0cde
---

## Hvad du skal gøre

Lav et tegningssæt af modellen: planen for hvert niveau, nord-, øst-, syd- og vestfacaderne, et bygningssnit for hver snitlinje, dør-, vindues-, rum- og tømmerlisterne og en facade af hver rammevæg. Sættet tegnes igen ud fra modellen, hver gang du åbner det, så det altid svarer til det, du har bygget.

## Tegn en snitlinje

1. På et niveau åbner du {{ui:Byg}} og vælger {{ui:Snitlinje}}.
2. Klik, hvor linjen starter, og hvor den slutter. Den korte linje midt på viser den side, snittet kigger mod: venstre for linjen, når man går fra første til andet klik.
3. Linjen vises i planen med sine ender og sit bogstav (A, derefter B osv.).

Vælg linjen for at ændre den i **Egenskaber**: dens bogstav, **Vend visningen** for at kigge den anden vej, og **Kig så langt** for at stoppe visningen en bestemt afstand bag snittet (0 viser alt bag det). Tryk {{key:Delete}} for at fjerne den.

## Åbn arkene

1. Klik på {{ui:Ark}} i modellinjen (ved siden af {{ui:Udskriv}}).
2. Arkene vises til venstre: **A-101** og videre for planer, **A-201** for facader, **A-301** for snit, **A-401** for lister og **S-101** for vægkonstruktion. Klik på et for at se det.
3. Vælg **Papir**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 eller A1. Papiret beholder sit standardnavn, og dets størrelse skrives i den {{ui:Enheder}}, du valgte, fx *Letter · 8.5 × 11 in* eller *A3 · 297 × 420 mm*.
4. Klik på {{ui:Download sættet som PDF}}: én side pr. ark.

## Standardnoter fra et forskriftssæt

I et ark lader {{ui:Standardnoter}} dig placere noter fra et forskriftssæt (efter fag) i arkets højre kolonne. Hver note beholder det sæt og den paragraf, den kommer fra, og det udskrevne ark siger, når sættet er ubekræftet. Noterne er et udgangspunkt: den ansvarlige for tegningen afgør, hvad de siger. De kræver add-on'en Bygningsregler.

## Hvad der er på arkene

- **Planer** viser vægge, døre, vinduer, rum med deres arealer, målsætninger og snitlinjer, i den største standardmålestok, der passer: 1/4" = 1'-0" eller mindre (1:50 eller mindre i millimeter).
- **Facader** tegnes ud fra 3D-modellen med skjulte linjer fjernet, to pr. ark, alle i samme målestok, med en jordlinje under. Taget, fundamenterne og terrænet vises, som de er modelleret.
- **Snit** udfylder det, snittet går gennem (vægge, gulve, taget), og tegner det, der ses bagved.
- **Facader og snit har deres noter:** et mærke for hvert niveau med navn og højde til højre, højden mellem niveauerne til venstre, og på en facade bygningens bredde under den samt et mærke (D1, W1) på hver dør og hvert vindue i en væg, der vender mod dig. For et rums egne vægge, se [Indvendige facader](topic:interior-elevations).
- **Lister** er de samme tabeller som {{ui:Lister}} i modellinjen.
- **Vægkonstruktion** viser hver rammevægs stolper, rammer, overliggere og vindueskarme, set udefra, så et hold kan udlægge den. Se [Rammer til vægge, gulve og tage](topic:framing).

Hvert ark har et tegningshoved med sit nummer, sin titel, filens navn og datoen.

:::tip
Ark laves ud fra modellen: vil du ændre en tegning, ændrer du modellen og åbner {{ui:Ark}} igen.
:::

:::note
Facader og snit viser kun linjer og udfyldninger: målsætninger, niveaumærker og noter på dem er ikke lavet endnu.
:::

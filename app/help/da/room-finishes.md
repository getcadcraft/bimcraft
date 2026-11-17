---
title: Rumoverflader og overfladelister
summary: Angiv, hvad der dækker hvert rums gulv, vægge og loft, tilføj zoner som en flisebeklædt stænkplade, og få overfladelister pr. rum, væg og zone med arealer, antal fliser inklusive skæringer og underlagsvolumener.
keywords: overflade, overflader, overfladeliste, rumoverflader, gulvoverflade, vægoverflade, loftsoverflade, fodliste, flise, fliser, skårne fliser, antal fliser, spild, underlag, afretning, gipsplade, puds, zone, stænkplade, sokkel, vådzone, interiør, mængder
from: 8c30498c
---

## Hvad du skal gøre

Fortæl BimCraft én gang, hvad hvert rum er færdigbehandlet med. Overfladelisterne giver så arealerne, de fliser der skal bestilles, og underlagsvolumenerne, og de ændrer sig med modellen.

## Trin

1. Slå {{ui:Draw}} til, åbn **Lister** i venstre panel og klik på **Rumoverflader**.
2. Under **Overfladetyper** klikkes **Tilføj en overfladetype**. Giv den et navn, en type (Flise, Plade, Belægning eller Bræt) og en tykkelse. For en flise angives flisens længde og bredde, fugen og et spildtillæg i procent. Hvis noget ligger under overfladen (en afretning, en gipsplade, et pudslag), navngives det under **Underlag**, og dets tykkelse angives.
3. Under **Rum** vælges gulv-, væg- og loftsoverfladen for hvert rum. Skriv et fodlistenavn og dets højde, hvis rummet har en.
4. Under **Zoner** klikkes **Tilføj en zone** for en del af et rum, der får en anden overflade:
   - en **væg**zone er et bånd mellem to højder over gulvet (en flisebeklædt stænkplade fra 0 til 1200, en sokkel). Den er på alle rummets vægge, eller vælg rummets vægge i modellen og klik på knappen **Tændt** for at begrænse den til dem;
   - en **gulv**- eller **loft**zone er et areal, du skriver. Det tages fra rummets egen overflade.
5. Klik på **Gem**. Det er ét trin i Fortryd. Længder skrives i projektets enheder.

## Listerne

Fire poster føjes til listen under **Lister**:

- **Overflader pr. rum**: hvert rum med dets gulv-, væg- og loftsoverflade, deres arealer og fodlisten med dens længde.
- **Overflader pr. væg**: hver strækning væg på et rums side og det bånd af den, en overflade dækker, med dens længde, bruttoareal, fradrag, nettoareal og, for fliser, hele fliser, skårne fliser og fliser der skal bestilles.
- **Overflader pr. zone**: hver zone med dens overflade, nettoareal, fliser og underlagsvolumen.
- **Overflademængder**: én række pr. overflade: nettoareal, hele og skårne fliser, fliser der skal bestilles, underlaget og dets volumen, og overfladens eget volumen.

Gruppér, totaler, gem og eksportér dem som enhver liste: se [Layout, gem og eksportér en liste](topic:schedule-layouts). Klik på et tal for at vælge det, det stammer fra: fradragene for en væg vælger dens døre og vinduer.

## Sådan måles overflader

- **Vægge**: hver strækning væg på rummets side, dens længde langs rummet gange den højde overfladen dækker, minus den del af hver dør og hvert vindue inden for den højde. En væg lavere end rummet overfladebehandles til sin egen top. Projektets måleregel bestemmer, hvilke åbninger der er for små til at blive trukket fra ([Lister](topic:plan-schedules-and-pdf)).
- **Gulve og lofter**: rummet inden for dets vægflader, minus øer i det.
- **Fodlister**: rummets væglængde minus bredden af dets døre.
- **Fliser**: lagt som et gitter fra det ene hjørne af fladen, med én fuge mellem flisene. En flise helt på fladen er en hel flise; en flise delvist på den (ved en kant, rundt om en åbning) er en skåret flise. Fliser der skal bestilles er hele plus skårne plus spildtillægget, rundet op. Hver skåret flise tælles som en ny flise: afskær genbruges ikke.
- **Underlagsvolumen**: nettoarealet gange underlagets tykkelse.
- En optælling markeret **≈** beregnes ud fra arealet i stedet for at blive lagt ud flise for flise: en flade med en indtastet zone taget ud af den, eller en meget stor flade.

## Godt at vide

- Overfladerne gemmes i bygningsfilen (egenskabssættet `CadCraft_Finishes` på projektet). Hvert rum, der har en overflade, får også det standardiserede IFC-egenskabssæt `Pset_SpaceCoveringRequirements`, så andre programmer kan læse navnene.
- Flisegitteret starter i et hjørne. En layout centreret i rummet, et mønster (fiskebensmønster, murforbandt) og genbrug af afskær beregnes ikke.
- En buet væg og en rumgrænse, der ikke er en væg (en rumseparator), angives som **Anden grænse** med dens længde og ingen åbninger.
- Posten **Overflader**, der var der før, lister overfladelagene for vægtyper; **Lag: areal og volumen** lister hvert lag i hver lagdelt type. Rumoverfladerne her er det, der lægges på rummet oven på disse.
- En assistent kan sætte overflader for dig med `finishes_set`: se [Lad en AI-assistent arbejde med din model](topic:assistants).

---
title: Stålrørspooler og spoolark
summary: Kutt en stålrørstrekning med stumpsveis i spooler med en største lengde og ved feltsveisene du plasserer, nummerer dem, og last ned et spoolark per spool (3D-visning, kuttlengder, rørdeler, sveiser, stykkliste) som PDF og CSV; kanaler får en kappeliste med rette stykker.
keywords: spool, spooler, spoolark, isometri, produksjon, forhåndsfabrikasjon, feltsveis, verkstedsveis, stumpsveis, kuttlengde, kappeliste, stykkliste, stykkliste, stålrør, schedule 40, linjenummer, kanalkappeliste, kanaldeler
from: 539f51de
---

## Hva du gjør

Gjør en stålrørstrekning om til delene et verksted sveiser sammen og en montør setter inn: spooler som ikke er lengre enn en lengde du velger, delt der du plasserer feltsveiser, hver med sitt eget ark.

Bare **stålrør med stumpsveis** kuttes i spooler (rørdimensjoner ASME B36.10M, bend etter ASME B16.9 langradius). Kobber-, PVC- og PEX-skjøter er ikke stumpsveis, så strekningene deres har ingen spooler.

## Kutt en strekning i spooler

1. Velg en stålrørstrekning. Under {{ui:Properties}} krysser du av for **Cut into spools**.
2. **Longest spool**: størst senterlinjelengde en spool kan ha (til å begynne med 6 m, omtrent 20 ft).
3. **Line number**: en del av nummeret til hver spool. En ny spoolet strekning får neste ledige nummer i systemet sitt.

Spoolene nummereres langs strekningen fra det første punktet: `CHW-12-S01`, `CHW-12-S02` … (systemet, linjenummeret, spoolen). En spool vokser del for del; delen som ville gjort den for lang, starter den neste, og en rett lengde som er lengre enn en spool, kuttes der spoolen er full.

## Plasser feltsveiser

1. Åpne {{ui:Build}} og velg {{ui:Field weld}}.
2. Klikk på et spoolet rør der feltsveisen skal stå. Inne i en rett lengde kuttes røret der; inne i en rørdel eller en ventil flyttes sveisen til den nærmeste skjøten.

{{ui:Properties}} lister strekningens feltsveiser, hver med {{ui:Remove}}. Hver endring er ett steg i {{ui:Undo}}.

## Spoolark

Under {{ui:Properties}} for en spoolet strekning:

- {{ui:Spool sheets (PDF)}}: én side per spool. Til venstre spoolen i en 30° isometrisk visning: de rette lengdene nummerert, verkstedsveiser som prikker, feltsveiser merket FW, og planens nord. Til høyre spoolens nummer, størrelse, tabell og lengde, deretter dens **cut lengths** (kuttlengder), **fittings** (rørdeler), **welds** (sveiser: en verkstedssveis ved hver skjøt inne i spoolen, en feltsveis der den møter neste spool) og **bill of materials** (stykkliste) med rørets vekt (ASME B36.10M vekt for glatt ende).
- {{ui:Spool list (CSV)}}: det samme, en blokk per spool.

:::note
Kuttlengdene er ende til ende slik de er tegnet: ingen rotgap eller sveisetillegg trekkes fra. Bend er med B16.9 langradius; T-stykker, reduksjoner og ventiler er generiske, dimensjonert ut fra røret og ikke etter B16.9 eller en produsent, og arket sier det. Vekter for rørdeler oppgis ikke. Et hjelpemiddel for tegning og koordinering, dimensjonert av en ingeniør.
:::

## I IFC-filen

Hver del av en spoolet strekning bærer **CadCraft_Spool** med sin SpoolId, strekningen, spoolens nummer i strekningen, og hvor den starter og slutter langs strekningen. Strekningen beholder reglene sine (lengste spool, feltsveiser, linjenummer) i sitt eget sett, slik at spoolene blir de samme når filen åpnes igjen.

## Kanaler: en kappeliste

Åpne {{ui:Build}} og klikk {{ui:Duct cut list}}: en CSV over de rette kanalstykkene etter system, form og størrelse, der hver rett lengde kuttes i stykker med **Piece length** i kanallinjen (til å begynne med 1500 mm, omtrent 5 ft), og det som blir igjen. Bare lengder: ingen skjøter, tykkelser eller koblinger.

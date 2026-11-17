---
title: Mengder til TakeoffCraft
summary: Ett klikk sender modellens mengder til TakeoffCraft: vegger etter type, tak etter skrå areal, møner, valmer og renner, fundamenter, dører og vinduer, skap, elektriske enheter, gulvareal og kappelisten for virke. Mengdene merkes på en plan for hvert nivå, med fagpakkenes sammensatte poster på postene.
keywords: mengdeuttak, mengdeberegning, kalkyle, overslag, materialliste, mengdebeskrivelse, takeoffcraft, mengder, veggareal, takareal, takruter, fundament, betong, kubikkmeter, kappeliste, virke, fagpakke, sammensatt post
from: c5a745af
---

## Hva du skal gjøre

Gjør modellen om til en materialliste og et kalkyle i TakeoffCraft. BimCraft tegner en plan for hvert nivå i en standard målestokk, merker hver mengde på den, og legger mengdeuttaket inn i PDF-en. TakeoffCraft måler merkene selv, så hvert tall kan kontrolleres på arket.

## Send den

1. Klikk {{ui:Mengdeuttak}} i modellinjen (ved siden av {{ui:Ark}}).
2. TakeoffCraft åpnes i en ny fane med planene. Når det spørres, velges å åpne mengdeuttaket som ble funnet i PDF-en.
3. Legg til priser i mengdetabellen i TakeoffCraft. De sammensatte postene lister allerede materialene.

:::note
Når TakeoffCraft ikke er tilgjengelig her, laster knappen ned PDF-en i stedet. Åpne den i TakeoffCraft senere: den finner mengdeuttaket inni.
:::

## Hva som måles

- **Vegger** etter type og høyde: senterlinjene deres som strekninger, med veggens høyde på posten, slik at TakeoffCraft gir lengden og veggarealet. Hver strekning bærer veggens dører og vinduer, så TakeoffCraft trekker dem fra veggarealet én gang, etter samme regel som BimCraft-tabellene: de to stemmer overens for brutto, fradrag og netto. Mengdedataene for en veggtype (enhet, mørtel, sats; se [Vegg-sammensetninger](topic:wall-assemblies)) følger med som én prissatt linje på typens post. Ved en annen målemetode enn standard (se [Velg en målemetode](topic:plan-schedules-and-pdf#choose-a-measurement-method)) bærer mengdeuttaket metoden, hver strekning bærer det skjøtene tar av veggflaten, og TakeoffCraft måler etter samme metode og navngir den. En type der enheten har en lengde og en høyde, overleverer to komponenter med mengder: enhetene som skal bestilles og mørtelvolumet, prissatt når typens sats er per enhet, per 1000 enheter eller per m³ mørtel. En telling som lander nøyaktig på et heltall, kan bli én enhet høyere i TakeoffCraft, fordi overleveringen runder av posisjonene på arket.
- **Tak**: hvert takplan som et areal med sin takvinkel (TakeoffCraft gir det skrå arealet), møner, valmer og renner (valmer og renner langs deres skråning), takfot og gavlkanter.
- **Fundamenter**: fundamenter og grunnmurer som strekninger rundt midtene deres, plater som areal med sin tykkelse, slik at betongen kommer ut etter volum.
- **Dører og vinduer** telt etter type, med vindusomramming.
- **Underskap** etter lengden på fronten.
- **Elektriske enheter** telt etter type.
- **Gulvareal** for hvert nivå, fra rommene.
- **Kappelisten for virke** fra stenderverket, telt på et eget ark (én prikk per stykke).

Der en fagpakke har en tilsvarende sammensatt post (yttervegger og innervegger, plater, fundamenter, grunnmurer, takshingel, møne- og valmehette, renner, takfot, innerdører, vindusomramming, underskap, uttak, brytere, lys, koblingsbokser og tavlen), får posten sine materialer og formler. Pakkene leveres uten priser og er ennå ikke gjennomgått av en kalkylator.

:::tip
Planene lages av modellen hver gang det klikkes, så etter en endring klikkes {{ui:Mengdeuttak}} på nytt.
:::

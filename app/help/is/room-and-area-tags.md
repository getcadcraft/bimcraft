---
title: Rýma- og flatarmálsmerki
summary: Settu merki með númeri, heiti og flatarmáli á rými eða svæði. Merkið fylgir því og stærðin ræðst af hæð þess á pappír.
keywords: merki, rýmismerki, flatarmálsmerki, merkja rými, merkja flatarmál, merkja allt, merkimiði, textahæð, pappírshæð, athugasemd
from: 67059d8a
---

## Hvað þú gerir

Merktu rými og svæði eitt í einu eða öll í einu, og færðu merki þangað sem það er læsilegt.

## Hvar verkfærin eru

- Borðauppsetningar: {{ui:Arkitektúr}} › **Rými og flatarmál** › {{ui:Merkja rými}} og {{ui:Merkja flatarmál}}.
- Klassísk uppsetning: teiknistikan › valmyndin {{ui:Rými}}.
- Valið rými eða svæði: Eiginleikar › {{ui:Bæta við merki}}.

## Skref

1. Veldu {{ui:Merkja rými}} og smelltu í rýmið, þar sem merkið á að vera.
2. Eða ýttu á {{ui:Merkja allt ómerkt}} í röðinni: sérhvert rými á þessari hæð sem hefur ekki merki fær eitt, í miðju sinni. Það er eitt skref í afturköllun.
3. Til að færa merki velurðu það með Velja og dregur það. Eiginleikar hefur {{ui:Setja aftur á miðju}}.
4. {{ui:Merkja flatarmál}} virkar eins fyrir svæði.

## Hvað merki gerir

- Það sýnir númerið, heitið og flatarmálið í þínum birtingareiningum.
- Það fylgir rýminu sínu: endurnefndu rýmið, færðu vegg, og orð merkisins og staðsetning þess breytast í sama skrefi.
- Það er stærðað á pappír: {{ui:Textahæð á pappír}} er í millimetrum (2.5 til að byrja). Við mælikvarðann 1:50 er 2.5 mm merki 125 mm á hæð í líkaninu; við 1:100 er það 250 mm.
- Rými með merki sýnir merkið í stað venjulegs heitis síns.
- Þegar rýmið eða svæðið er horfið fer merkið með því. Afturköllun skilar hvoru tveggja.

## Í IFC

Merki er IfcAnnotation (ObjectType ROOMTAG eða AREATAG) með texta sínum sem textalínu, og GlobalId þess sem það nefnir. Textinn í skránni gefur flatarmálið í fermetrum.

## Ekki gert enn

- Eigin merkjaform og leiðarlína.
- Merki á hurðum, gluggum og veggjum er sérstakt verkfæri (sjá merkjastíla blaðanna).

Sjá einnig [Rými og rýmaskil](topic:rooms-and-separators).

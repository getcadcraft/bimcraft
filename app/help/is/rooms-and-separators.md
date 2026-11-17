---
title: Rými og rýmaskil
summary: Veldu rými til að nefna það og númera, og lestu flatarmál þess, ummál og rúmmál. Teiknaðu rýmaskil þar sem tvö rými mætast án veggs á milli.
keywords: rými, rýmaskil, skilalína, svæði, IfcSpace, heiti, númer, flatarmál, ummál, rúmmál, opið skipulag, skipta rými, eldhús og stofa, ekki lokað
from: d4c1d66b
---

## Hvað þú gerir

Nefndu rýmin sem veggirnir mynda, og skiptu opnu rými í tvö án veggs.

## Hvar verkfærin eru

- Borðauppsetningar: {{ui:Arkitektúr}} › **Rými og flatarmál** › {{ui:Rými}} og {{ui:Rýmaskil}}.
- Klassísk uppsetning: teiknistikan › valmyndin {{ui:Rými}}.
- Hvaða valmyndarstíll sem er: skipanirnar heita Rými og Rýmaskil; skipanaspjaldið finnur þær.

## Skref

1. Teiknaðu veggina. Sérhver lokuð lykkja veggja er nú þegar rými: BimCraft býr það til, númerar það og gefur því flatarmál þegar þú teiknar.
2. Veldu {{ui:Rými}}. Færðu bendilinn yfir grunnmyndina: rýmið undir bendlinum lýsist upp með flatarmáli sínu, ummáli og rúmmáli.
3. Til að nefna rými hratt skaltu fyrst slá inn {{ui:Heiti}} og {{ui:Númer}} í röðinni og smella síðan í rýmið. Númerið hækkar um einn fyrir næsta rými (101, 102; A-09, A-10).
4. Eða smelltu bara á rými: það er valið og Eiginleikar sýna heiti þess, númer, flatarmál, ummál, rúmmál og merki.
5. Til að skipta opnu rými velurðu {{ui:Rýmaskil}} og smellir á tvo punkta: vegg í vegg, eða vegg í annað skil. Haltu áfram að smella fyrir keðju; Enter, Esc eða tvísmellur lýkur henni.

## Hvað skil gerir

- Það afmarkar rými eins og veggur án þykktar. Flatarmál rýmanna tveggja leggst saman nákvæmlega í það rými sem það var.
- Rýmið sem geymir miðju gamla rýmisins heldur heiti sínu og númeri. Hitt er nýtt.
- Skil sem stöðvast úti í opinu og snertir ekki neitt í öðrum enda skiptir engu. Lengdu það og þá gerir það það.
- Sá hluti skils sem liggur innan veggs er hunsaður, svo þú getur smellt á miðlínur veggja.
- Veldu skil og ýttu á Delete til að fjarlægja það: rýmin tvö verða aftur eitt. Afturköllun setur það aftur.

## Ef enginn er rými þar sem þú smellir

Stöðulínan segir það: veggirnir lokast ekki þar. Lokaðu bilinu, eða teiknaðu skil þvert yfir það. Ekkert er hafnað; það er einfaldlega ekkert lokað rými enn.

## Í IFC

Rými er IfcSpace með númeri sínu (Name), heiti (LongName) og Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Rúmmálið er flatarmálið sinnum hæðin upp að næstu hæð fyrir ofan.

Skil fyrir rými er IfcVirtualElement, einingin sem IFC notar fyrir mörk sem ekki eru byggð. Það hefur línu og engan búk, þannig að annað forrit les engan vegg og telur ekkert fyrir það.

## Ekki gert enn

- Bogadregin skil.
- Rými sem fylgir hallandi lofti: rúmmálið er alltaf flatarmál sinnum hæð hæðarinnar.
- Tengsl rýmismarka (IfcRelSpaceBoundary) eru ekki skrifuð, hvorki fyrir veggi né skil.

Sjá einnig [Rýma- og flatarmálsmerki](topic:room-and-area-tags), [Flatarmál og flatarmálsmörk](topic:areas-and-area-boundaries).

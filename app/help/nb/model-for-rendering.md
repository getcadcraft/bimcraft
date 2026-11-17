---
title: Send modellen til et renderingsprogram
summary: Lagre det 3D-visningen viser som en glTF-modell (.glb) med materialer, teksturer og lamper, for rendering- og visualiseringsprogrammer som leser glTF.
keywords: glb, gltf, gl transmission format, eksport, rendering, render, visualisering, sanntid, archviz, materialer, teksturer, lamper, lys, ressurs, egendefinert ressurs
from: e62d57dc
---

{{ui:For rendering}} på verktøylinjen lagrer det 3D-visningen viser som én **.glb**-fil (glTF 2.0, det åpne formatet fra Khronos Group). Renderingsprogrammer som leser glTF, åpner den med modellens materialer og lamper. Twinmotion lister glTF og GLB blant geometrifilene den importerer, og beholder lysene deres (Epics dokumentasjon, "Importing geometry in Twinmotion"): bruk {{ui:For rendering}} og importer .glb der. Ingenting lastes opp: filen lages på denne datamaskinen.

## Lagre den

1. Åpne IFC-modellen og sett opp 3D-visningen: skjul etasjene, elementene eller de tilknyttede modellene du ikke vil ha, og [mal materialene](topic:paint-materials) du vil se.
2. Klikk {{ui:For rendering}} (eller skriv `GLB`).
3. Filen lastes ned som "<model name>.glb". Statuslinjen sier hvor mange trekanter, materialer og lamper den inneholder.

## Hva filen inneholder

- **Geometri** for hvert element 3D-visningen viser, i meter, med Y opp (glTFs egne akser). Ett objekt per etasje og materiale, navngitt "Level 1 — Brick, red", slik at du kan velge et materiale i renderingsprogrammet og bytte det med sitt eget.
- **Materialer:** hver farge med utseendet du valgte for den i [Render](topic:render) (matt, satin, blankt, metall, glass …), og hvert malt bibliotekmateriale med sin farge, ruhet og **tekstur** (bildet ligger i filen, skalert til sin virkelige størrelse: en murstein er murstein-størrelse). Glass er gjennomsiktig.
- **Lamper:** hver lysarmatur som er slått på i Render › Lamper, som et punkt- eller spotlys med sin lysstyrke (lumen omregnet til candela), farge og strålevinkel.
- **Hvor tomten er:** tomtens breddegrad og lengdegrad skrives i filen som referanse. Renderingsprogrammer har sin egen sol: skriv inn stedet der.

## Hva den utelater

- Snittet (hele elementer tas med) og elementer vist gjennomsiktig (de utelates).
- Objekter for hvert enkelt element (ett objekt per etasje og materiale i stedet), IFC-egenskaper, bump-kart, lagrede visninger og innspilte gjennomganger.
- Kanter og bakgrunn.

## Enscape og andre renderere som tilleggsprogrammer

Enscape kjører inne i et annet designprogram og har ingen fil å åpne et helt prosjekt med. To måter:

- Åpne modellens **IFC** (Fil › Lagre) i programmet Enscape kjører i; de fleste leser IFC. Farger følger med; bibliotekmaterialene følger som sine farger.
- Ta inn en **liten del** (et møbel, en armatur) som egendefinert ressurs: isoler den først, og klikk deretter {{ui:For Enscape (.gltf)}}. Enscapes bibliotek for egendefinerte ressurser lister .gltf-, .obj- og .fbx-filer, ikke .glb, så denne knappen lagrer samme scene som én selvstendig **.gltf**-fil (binærdataene og bildene ligger inne i filen; det er ingenting annet å kopiere med). Enscape anbefaler små ressurser (under omtrent 20 000 trekanter).

:::note
I CadCraft Studio kan den samme glTF-filen (og en USD-fil) også lagres fra {{ui:Render}} › Motor › **glTF-fil** / **USD-fil**, eller åpnes direkte i et program på denne datamaskinen: se [Åpne scenen i et annet program](topic:render-open-in). Et tilleggsprogram eller en direkte kobling for Enscape eller Twinmotion er ikke bygget ennå. FBX- og Datasmith-formatene har ingen publisert spesifikasjon, så BimCraft skriver dem ikke; glTF er den åpne veien.
:::

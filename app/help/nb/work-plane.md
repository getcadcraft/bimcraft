---
title: Arbeidsplanet: angi det, vis det, se rett på det
summary: Arbeidsplanet er planet som modelllinjer, modelltekst og arbeidsplanvisningen bruker. Angi det til en etasje, en flate, et navngitt referanseplan eller en linje; vis det i visningene; åpne arbeidsplanvisningen for å tegne på et loddrett plan.
keywords: arbeidsplan, angi arbeidsplan, vis arbeidsplan, referanseplan, arbeidsplanvisning, navngitt plan, flate, etasje, loddrett plan, vertikalt plan, tegne på en vegg, fasadetegning, fang, justering, ref-plan
from: 8aceee1d
---

## Hva du gjør

Velg planet du tegner på, se hvor det er, og tegn på et plan som står loddrett.

## Steg

1. Slå på **Tegn** og åpne **Bygg**-menyen (i båndoppsett: fanen Arkitektur, Arbeidsplan).
2. Velg **Angi arbeidsplan**. Gjør deretter ett av følgende:
   - velg en etasje i **Angi til**;
   - velg et navngitt referanseplan i listen ved siden av;
   - klikk på en linje i planen: en vegg, en rutenettlinje, et referanseplan, en modelllinje eller et gardinveggsystem. Arbeidsplanet blir det loddrette planet gjennom den linjen;
   - klikk på en flat flate i 3D-visningen. Arbeidsplanet ligger på den flaten.
3. Velg **Vis arbeidsplan** for å se det: et tonet ark med et meterrutenett i 3D-visningen, en stiplet kontur eller linje i planen, og en stiplet kontur i fasade- og snittpanelet. Velg det igjen for å skjule det.
4. Velg **Arbeidsplanvisning** for å se rett på planet. De svarte linjene er modellen kuttet av planet. Bruk verktøyene der til å tegne en modelllinje, en modelltekst eller et referanseplan på planet. **Se på den i 3D** dreier 3D-visningen mot planet.

## Referanseplan

Et referanseplan er et navngitt plan du tegner som en linje.

1. Velg **Referanseplan**. Skriv inn et navn i raden hvis du vil ha ett (det får et navn for deg ellers), og en høyde.
2. Klikk der det starter og der det slutter. I planen gir dette et loddrett plan. I arbeidsplanvisningen gir det et plan som står vinkelrett på arbeidsplanet.
3. Det vises som en stiplet grønn linje med navnet sitt i planen, og som en stiplet kontur i 3D-visningen og i fasade- og snittpanelet.
4. Velg det for å gi det nytt navn, endre lengden, høyden og fotpunktet, eller trykk **Bruk som arbeidsplan**.

To referanseplan kan ikke ha samme navn, fordi navnet er hvordan du velger ett.

## Greit å vite

- En modell uten angitt arbeidsplan bruker sin laveste etasje.
- Arbeidsplanet lagres i filen. Å vise eller skjule det huskes i denne nettleseren, ikke i filen.
- Hvis arbeidsplanet følger et referanseplan og du flytter det planet, flyttes arbeidsplanet med det.
- På et loddrett arbeidsplan åpner verktøyene Modelllinje og Modelltekst arbeidsplanvisningen, fordi en plan ikke kan peke på en høyde.
- Tegneverktøyene fanger endene av referanseplaner tegnet i planen på samme måte som de fanger endene av andre linjer i visningen.

## I IFC-filen

- Arbeidsplanet er et egenskapssett (CadCraft_WorkPlane) på prosjektet.
- Et referanseplan er en IfcAnnotation med objekttypen ReferencePlane og navnet sitt. Formen er den lukkede konturen av planet, slik at et annet program viser hvor det er. Egenskapssettet CadCraft_ReferencePlane holder origo, retning, normal og utstrekning. IFC har ingen klasse for et referanseplan; en merknad telles ikke som et bygningselement og avgrenser ikke rom.

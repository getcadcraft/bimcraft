---
title: Arbejdsplanet: angiv det, vis det, se direkte på det
summary: Arbejdsplanet er det plan, som modellinjer, modeltekst og Arbejdsplanviseren bruger. Angiv det til et niveau, en flade, et navngivet referenceplan eller en linje; vis det i visningerne; åbn viseren for at tegne på et lodret plan.
keywords: arbejdsplan, angiv arbejdsplan, vis arbejdsplan, referenceplan, arbejdsplanviser, navngivet plan, flade, niveau, lodret plan, vertikalt plan, tegn på en væg, facadetegning, fangst, justering, ref plan
from: 8aceee1d
---

## Hvad du gør

Vælg det plan, du tegner på, se hvor det er, og tegn på et plan, der står lodret.

## Trin

1. Slå **Tegn** til, og åbn menuen **Byg** (i en båndlayout: fanen Arkitektur, Arbejdsplan).
2. Vælg **Angiv arbejdsplan**. Gør derefter et af følgende:
   - vælg et niveau under **Angiv til**;
   - vælg et navngivet referenceplan i listen ved siden af;
   - klik på en linje i planen: en væg, en gitterlinje, et referenceplan, en modellinje eller et facadesystem. Arbejdsplanet bliver det lodrette plan gennem linjen;
   - klik på en plan flade i 3D-visningen. Arbejdsplanet ligger på fladen.
3. Vælg **Vis arbejdsplan** for at se det: et farvet ark med et meter-gitter i 3D-visningen, en stiplet kontur eller linje i planen og en stiplet kontur i facade- og snitpanelet. Vælg det igen for at skjule det.
4. Vælg **Arbejdsplanviser** for at se direkte på planet. De sorte linjer er modellen skåret af planet. Brug dets værktøjer til at tegne en modellinje, en modeltekst eller et referenceplan på planet. **Se det i 3D** drejer 3D-visningen, så den vender mod planet.

## Referenceplaner

Et referenceplan er et navngivet plan, du tegner som en linje.

1. Vælg **Referenceplan**. Skriv et navn i dets række, hvis du vil have et (ellers får det et navn automatisk), og en højde.
2. Klik, hvor det starter, og hvor det slutter. I planen laver det et lodret plan. I Arbejdsplanviseren laver det et plan, der står vinkelret på arbejdsplanet.
3. Det vises som en stiplet grøn linje med sit navn i planen, en stiplet kontur i 3D-visningen og i facade- og snitpanelet.
4. Vælg det for at omdøbe det, ændre dets længde, højde og fod, eller tryk **Brug som arbejdsplan**.

To referenceplaner kan ikke have samme navn, fordi navnet er den måde, du vælger dem på.

## Godt at vide

- En model uden angivet arbejdsplan arbejder på sit laveste niveau.
- Arbejdsplanet gemmes i filen. Om det vises eller skjules, huskes i denne browser, ikke i filen.
- Hvis arbejdsplanet følger et referenceplan, og du flytter det plan, flytter arbejdsplanet med.
- På et lodret arbejdsplan åbner værktøjerne Modellinje og Modeltekst Arbejdsplanviseren, fordi en plan ikke kan pege på en højde.
- Tegneværktøjer fanger endepunkterne af referenceplaner, tegnet i planen, på samme måde som de fanger andre linjers endepunkter i visningen.

## I IFC-filen

- Arbejdsplanet er et egenskabssæt (CadCraft_WorkPlane) på projektet.
- Et referenceplan er en IfcAnnotation med objekttypen ReferencePlane og dets navn. Dens form er planets lukkede kontur, så et andet program viser, hvor det er. Dets sæt CadCraft_ReferencePlane indeholder origo, retning, normal og udstrækning. IFC har ingen klasse for et referenceplan; en annotation tælles ikke som et bygningselement og afgrænser ikke rum.

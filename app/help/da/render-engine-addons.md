---
title: Tilføj en renderingsmotor med en add-on
summary: Hvad en add-on kan tilføje til motorlisten i dialogen Render, tilladelsen den skal bruge for at køre et program, og hvad Studio kontrollerer og spørger om.
keywords: add-on, addon, motor, renderingsmotor, udvikler, engine.run, tilladelse, program, script, signeret, studio, api
from: 06295376
---

En add-on (Indstillinger › Add-ons) kan tilføje en motor til motorlisten i {{ui:Render}}. Den fulde tekst til add-on-udviklere er afsnit 16 i add-on-specifikationen; kort fortalt:

- Add-on'en registrerer en motor med et id, der starter med dens eget, et navn, valgfri indstillinger og **enten** et program, der skal køres, **eller** en funktion i JavaScript, der tegner billedet.
- En motor, der kører et program, kræver tilladelsen **`engine.run`**, som vises før installation og i Indstillinger. Den kører kun i Studio; i browseren vises den som en fil, der kan gemmes.
- Add-on'en angiver programmet (et almindeligt filnavn, aldrig en shell), et script, der **ligger inde i den signerede add-on**, og argumenter bestående af pladsholdere og almindelige ord. Studio finder programmet eller beder dig pege på det én gang.
- Første gang en add-on kører et program, **spørger Studio dig i sin egen dialog**: hvilken add-on, hvilket program, og at et script kan gøre alt, programmet kan. Tillad det kun for en add-on, du stoler på. Dit svar huskes for den add-on og det program.
- Pakken (scenen som USD og en indstillingsfil, med glTF-filen når add-on'en beder om den) og add-on'ens script lægges i en ny midlertidig mappe, programmet kører dér, og billedet kommer tilbage markeret med add-on'ens motornavn.

:::note
Add-ons kan kun tilføje renderingsmotorer fra add-on API 1.4. Et gennemarbejdet eksempel på en open source-kommandolinjerenderer findes i sit eget repository; det er endnu ikke kørt i den renderer.
:::

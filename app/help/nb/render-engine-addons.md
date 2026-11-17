---
title: Legg til en rendermotor med et tillegg
summary: Hva et tillegg kan legge til i motorlisten i dialogboksen Render, tillatelsen det trenger for å kjøre et program, og hva Studio kontrollerer og spør om.
keywords: tillegg, addon, motor, rendermotor, utvikler, engine.run, tillatelse, program, skript, signert, studio, api
from: 06295376
---

Et tillegg (Innstillinger › Tillegg) kan legge til en motor i motorlisten i {{ui:Render}}. Hele teksten for forfattere av tillegg står i del 16 i spesifikasjonen for tillegg. Kort sagt:

- Tillegget registrerer en motor med en id som starter med sin egen, et navn, valgfrie innstillinger og **enten** et program som skal kjøres **eller** en funksjon i JavaScript som tegner bildet.
- En motor som kjører et program, trenger tillatelsen **`engine.run`**, som vises før installasjon og i Innstillinger. Den kjører bare i Studio. I nettleseren vises den som en fil du kan lagre.
- Tillegget oppgir programmet (et vanlig filnavn, aldri et skall), et skript som ligger **inne i det signerte tillegget**, og argumenter laget av plassholdere og vanlige ord. Studio finner programmet, eller ber deg peke på det én gang.
- Første gang et tillegg kjører et program, **spør Studio deg i sin egen dialogboks**: hvilket tillegg, hvilket program, og at et skript kan gjøre alt programmet kan gjøre. Tillat det bare for et tillegg du stoler på. Svaret ditt huskes for dette tillegget og programmet.
- Pakken (scenen som USD og en innstillingsfil, med glTF-filen når tillegget ber om den) og tilleggets skript legges i en ny midlertidig mappe. Programmet kjører der, og bildet kommer tilbake merket med tilleggets motornavn.

:::note
Tillegg kan bare legge til rendermotorer fra tillegg-API 1.4. Et utarbeidet eksempel for en renderer på kommandolinjen med åpen kildekode ligger i et eget depot. Det er ikke kjørt i den rendereren ennå.
:::

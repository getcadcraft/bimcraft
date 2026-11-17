---
title: Send scenen til en spillmotor
summary: Studio kan skrive scenen inn i et Unreal Engine-prosjekt og holde den oppdatert ved hver sending. Dine egne endringer ligger i et lag som CadCraft aldri skriver. Plugin-en som åpner den, er ikke utgitt ennå.
keywords: unreal, unreal engine, spillmotor, lenke, send, USD-scene, prosjekt, direkte, Cine Camera, Movie Render Queue
from: 154d55ef
---

I CadCraft Studio kan motorlisten inneholde en **lenke** til et Unreal Engine-prosjekt. Det går bare én vei: fra CadCraft til Unreal.

## Send scenen

1. Velg Unreal-oppføringen i motorlisten. Første gang ber Studio deg velge prosjektmappen din (den med `.uproject`-filen). Studio husker den.
2. Klikk {{ui:Send}}. Studio skriver `CadCraft/<filnavn>/` inne i prosjektet: scenen som en USD-fil, innstillingsfilen, lysprofiler og to små lagfiler.
3. Endre modellen, lagre og send på nytt. Bare scenen og innstillingsfilen erstattes.

## Dine egne endringer er trygge

Scenen Unreal åpner, er en liten rotlagfil som lages én gang, med to lag under seg: **dine** øverst (`<name>.user.usda`, tomt i starten, og skrives aldri om av CadCraft) og CadCraft sin scene under. Endringer du lagrer i ditt eget lag, blir værende når scenen sendes på nytt. Lys og andre aktører du plasserer i Unreal-nivået, ligger utenfor scenen og berøres heller ikke.

## Uten Studio

I nettleseren, eller på en datamaskin der Studio ikke finner Unreal, velg **Unreal-prosjektmappe (.zip)** i motorlisten og klikk {{ui:Render}}. Den lagrer den samme mappen som en zip. Pakk den ut i prosjektets `CadCraft`-mappe. La **Inkluder scenefilene** stå på første gang. Slå den av ved senere lagringer, slik at zip-filen bare inneholder scenen og innstillingsfilen, og ditt eget lag aldri erstattes.

:::note
Unreal-plugin-en som åpner scenen, bruker sol, lamper, kameraer og eksponering, følger hver sending og rendrer et kamera, er **ikke utgitt ennå** og er ikke kjørt i Unreal. Inntil den er det, legger Send filene i prosjektet, og Unreals egne USD-verktøy kan åpne dem. Windows er første system. macOS kommer etterpå.
:::

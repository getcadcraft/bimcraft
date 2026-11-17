---
title: Zgjidhni përplasjet me rregullimet e secilës disiplinë
summary: Nga rezultatet e përplasjeve, Propozo rregullime liston për çdo përplasje çfarë mund të bëjë secila disiplinë — një kanal i devijuar nën një tra, një tub i zhvendosur anash, një kolonë e zhvendosur, një hapje në një tra — secili i provuar në një kopje të modelit, me kompromiset e tij, që ju ta pranoni ose ta refuzoni. Rregullimet e pranuara hyjnë si një hap i vetëm zhbërjeje.
keywords: përplasje, rregullim përplasjeje, zgjidhni përplasjet, koordinim, propozo rregullime, devijo, kanal, tub, tra, kolonë, hapje, mëngë, kompromis, disiplinë, strukturë, mekanike, hidraulike, elektrike, arkitekturë, asistent
from: f7bafdd9
---

## Çfarë do të bëni

Shndërroni një listë përplasjesh në vendime. Secila disiplinë (strukturë, mekanike, hidraulikë, elektrike, arkitekturë) propozon rregullime vetëm për elementët e vet, çdo propozim kontrollohet në një kopje të modelit, dhe ju zgjidhni.

## Hapat

1. Bëni më parë kontrollin e përplasjeve. Shihni [Kontrollo për përplasje](topic:clash-check) dhe [Kontrollo tubat dhe kanalet kundrejt strukturës](topic:mep-against-structure).
2. Poshtë rezultateve, klikoni **Propozo rregullime**. Paneli **Rregullimet e propozuara** hapet pranë modelit.
3. Për çdo përplasje shihni propozimet e secilës disiplinë, më të mirin e para. Çdo rresht thotë çfarë bën dhe kompromiset e tij: nëse e zgjidh përplasjen, sa përplasje të reja krijon, cilat rregulla thyen, sa rrjedhë shton ose sa larg zhvendoset, sa pjesë lidhëse dhe një pikë kostoje.
4. Klikoni {{ui:Show}} për të parë elementët në 3D. Klikoni {{ui:Accept}} te rregullimi që dëshironi (një për përplasje), ose **Refuzo**.
5. Rreshti në fund thotë çfarë bëjnë bashkë të gjitha rregullimet tuaja të pranuara: sa përplasje zgjidhen, sa mbeten dhe nëse diçka e re përplaset.
6. Klikoni **Zbato rregullimet e pranuara (një hap zhbërjeje)**. Kontrolli i përplasjeve nis sërish. {{ui:Undo}} i kthen të gjitha njëherësh.

## Çfarë mund të bëjë secila disiplinë

- **Mekanike** (kanale ajri, tuba ngrohjeje dhe ftohjeje): devijim mbi ose nën pjesën që godet, ngritje ose ulje e gjithë rrjedhës, zhvendosje anash, ose një kanal drejtkëndor më i sheshtë me të njëjtën sipërfaqe.
- **Hidraulike** (ujë, kanalizime, gaz, zjarr): të njëjtat lëvizje, përveç se një kanalizim me rënie gravitacionale nuk i jepet kurrë devijim; mund të zhvendoset vetëm si një e tërë, duke ruajtur pjerrësinë.
- **Elektrike** (kanale kabllesh dhe tubacione): të njëjtat lëvizje; një kanal duhet të mbajë 150 mm hapësirë të lirë mbi të për të vendosur kabllot.
- **Strukturë**: zhvendosni një kolonë (deri në 300 mm), ose një hapje në bërthamën e një trari ose në një soletë për rrjedhën që kalon. Çdo rregullim strukturor thotë se inxhinieri strukturor e miraton.
- **Arkitekturë**: një mëngë në një mur për rrjedhën që kalon, ose zhvendosni një mur që dihet se nuk mban ngarkesë.

## Çfarë duhet të shihni

- Rregullimet që thyejnë një rregull shënohen: më afër se hapësira 25 mm me diçka tjetër, nën linjën e lirë 2,100 mm, një hapje në bërthamë më e madhe se 40% e lartësisë së trarit ose shumë afër skajeve të tij, ose një trar që do të ndryshonte deschën.
- Rregullimet që BimCraft mund t'i bëjë aplikohen në model: rrjedhat që keni vizatuar me mjetet Tub dhe Kanal ajri, dhe kolonat që keni vizatuar. Të tjerët thonë **Vetëm këshillë**: pranimi i tyre shton një çështje te skeda {{ui:Issues}}.

## Gjëra të dobishme

- Rregullimet vijnë nga rregulla të ndërtuara në aplikacion; nuk përdoret AI për to.
- Nëse lidhni një asistent (shihni [Lejoni një asistent AI të punojë me modelin tuaj](topic:assistants)), ai mund të lexojë përplasjet dhe të shtojë propozimet e veta për një disiplinë në panelin e hapur. Ato kontrollohen në të njëjtën mënyrë, shënohen me emrin e asistentit, dhe asgjë nuk ndryshohet derisa t'i pranoni dhe zbatoni.
- Kopja kontrollohet me kuti rreth çdo elementi dhe çdo pjese të rrjedhës, kështu që një rrjedhë e pjerrët mund të tregojë një përplasje që kontrolli i përplasjeve nuk do ta tregonte. Ekzekutoni kontrollin e përplasjeve sërish pas zbatimit: ai është fjala e fundit.
- Kufijtë (sa larg mund të zhvendoset një rrjedhë, sa lart mund të ngjitet një devijim, hapësira) janë parazgjedhjet e shkruara në panel.

## Më pas

- [Çështjet dhe skedarët BCF](topic:issues-bcf)
- [Vizato rrjedha tubash dhe kanalesh](topic:pipes-and-ducts)

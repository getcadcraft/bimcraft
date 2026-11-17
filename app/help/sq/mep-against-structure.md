---
title: Kontrollo tubat dhe kanalet ndaj strukturës
summary: Nis grupet e gatshme të përplasjeve të tubave dhe kanaleve ndaj mureve, soletave, trarëve dhe kolonave, gjej vargjet më afër strukturës sesa izolimi dhe një hapësirë, dhe listo hapjet që u nevojiten vargjeve nëpër mure dhe soleta si CSV dhe BCF.
keywords: mep, përplasje, kontroll përplasjesh, koordinim, struktura, muret, soletat, trarët, kolonat, distanca, përplasje e butë, izolim, hapësirë, hapje, hapjet, depërtim, mëngë, bërthamë, punë ndërtimi, bcf, csv
from: 2d597f01
---

## Çfarë do të bësh

Sigurohu që shërbimet i përshtaten ndërtesës: çfarë përplaset me strukturën, çfarë kalon shumë afër saj dhe ku murët dhe soletat kanë nevojë për vrima. Hap {{ui:Kontrolli i përplasjeve}} në panelin e majtë; seksioni **Tubat dhe kanalet ndaj strukturës** është nën kontrollin e zakonshëm.

## Përplasjet e forta

Dy listat e grupeve ofrojnë tani edhe **Tubat dhe kanalet**, **Muret**, **Soletat dhe çatitë**, **Trarët**, **Kolonat** dhe **Struktura** (të katër), me sa elemente mban secila. Kliko {{ui:Tubat dhe kanalet × struktura}} për të zgjedhur të parën dhe të fundit dhe për të nisur kontrollin; ose zgjidh vetë çdo çift dhe kliko {{ui:Nis}}. Shih [Kontrolli i përplasjeve](topic:clash-check).

## Distancat

Disa shërbime kanë nevojë për hapësirë përreth: izolimin e tyre dhe vend për punë ose për një mëngë.

1. Jepi një vargu tubi ose kanali trashësinë e **Izolimit** te Vetitë (për të nuk vizatohet asgjë).
2. Shkruaj **Hapësirën rreth tubave dhe kanaleve** (mm) te Kontrolli i përplasjeve.
3. Kliko {{ui:Kontrollo distancat}}: çdo pjesë më afër një muri, soletë, trau ose kolone sesa izolimi plus hapësira listohet me distancën që ka dhe distancën që kërkon. Kliko një rresht për t'i parë të dyja.

Një pjesë që kalon nëpër një mur ose soletë është një hapje, jo një distancë, dhe listohet atje në vend të kësaj.

## Hapje të nevojshme

Kliko {{ui:Hapje të nevojshme}}. Aty ku boshti qendror i një vargu kalon nëpër një mur ose soletë, BimCraft liston hapjen që i nevojitet: rrethore për një tub ose kanal rrethor, përndryshe drejtkëndëshe, aq e madhe sa madhësia e jashtme e vargut plus dy herë izolimi i tij plus dy herë hapësira, e qendërzuar aty ku kalon vargu. Kliko një rresht për të parë vargun dhe murin ose soletën.

- {{ui:Hapjet si CSV}}: një rresht për çdo hapje me vargun, madhësinë dhe izolimin e tij, madhësinë e hapjes, elementin nëpër të cilin kalon dhe GlobalId-në e tij, nivelin, X, Y dhe Z të qendrës, dhe sa larg shkon vargu nëpërmes saj.
- {{ui:Hapjet si çështje BCF}}: një çështje për çdo hapje, me një kamerë që e shikon dhe vargun dhe elementin e zgjedhur, për programin e inxhinierit strukturor.

:::note
Asgjë nuk pritet: hapjet janë një listë për njerëzit që i përcaktojnë përmasat. Hapësirën e shkruan ti; asnjë kod nuk thotë sa e madhe duhet të jetë një hapje. Trarët dhe kolonat janë përplasje, jo hapje: nëse një tub mund të kalojë nëpër një të tillë, kjo është vendim i inxhinierit strukturor.
:::

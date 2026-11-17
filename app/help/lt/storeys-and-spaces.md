---
title: Rodyti ir slėpti aukštus, erdves ir kraštines
summary: Išjunkite aukštus, kad pamatytumėte pastato vidų, rodykite patalpas ir erdves bei įjunkite ar išjunkite kraštinių linijas.
keywords: aukštai, lygiai, grindys, slėpti, izoliuoti, patalpos, erdvės, ifcspace, kraštinės, matomumas, pjūvis
from: b838dcc0
---

## Ką darysite

Pažiūrėkite į IFC modelio vidų išjungdami aukštus virš to, kurį norite matyti, tada parodykite patalpas ir erdves bei išjunkite kraštinių linijas, kad vaizdas būtų švaresnis.

## Žingsniai: pažiūrėti vieną aukštą

1. Atidarykite IFC modelį. Žr. [Atidaryti IFC modelį ir apžiūrėti 3D](topic:open-ifc-model).
2. Raskite kairėje esantį {{ui:Aukštai}} sąrašą. Viršutinis aukštas yra pirmas, lyg skaitytumėte pjūvį nuo stogo žemyn.
3. Nuimkite žymėjimą nuo stogo ir nuo visų aukštų virš norimo grindų aukšto.
4. Spustelėkite {{ui:Viršus}}, kad pažvelgtumėte žemyn į tuos grindis.
5. Vėl pažymėkite aukštus, kad juos grąžintumėte.

## Ką turėtumėte matyti

Kiekvienas išjungtas aukštas iš karto dingsta kartu su visu, kas jame yra. Sąraše rodomi tik aukštai, kuriuose yra matomų elementų. Elementai, nepriskirti jokiam aukštui, sugrupuojami kaip **Ne aukšte** sąrašo apačioje; sklypo elementai ir kai kurie baldai dažnai patenka ten.

## Žingsniai: rodyti patalpas ir erdves

1. Spustelėkite {{ui:Erdvės}} įrankių juostoje virš modelio. Mygtukas lieka nuspaustas.
2. Pažiūrėkite į modelį: patalpos ir erdvės rodomos kaip blyškūs, permatomi tūriai.
3. Spustelėkite erdvę, kad dešinėje perskaitytumėte jos savybes, pavyzdžiui pavadinimą, numerį ir plotą.
4. Spustelėkite {{ui:Erdvės}} dar kartą, kad jas paslėptumėte.

Erdvės paslepiamos atidarius modelį, nes kitaip jos uždengtų sienas ir grindis.

## Žingsniai: kraštinės

1. Spustelėkite {{ui:Kraštinės}}, kad išjungtumėte plonas kraštinių linijas.
2. Spustelėkite dar kartą, kad vėl jas įjungtumėte.

Labai dideliuose modeliuose (daugiau nei 1.5 milijono trikampių) mygtukas yra pilkas, su patarimu „Kraštinės išjungtos labai dideliems modeliams“. Tai taupo atmintį.

## Dažnos klaidos

- **Nuėmus aukšto žymą, vis dar matote jo dalis.** Elementas priklauso aukštui, kuriam jį priskyrė eksportuojanti programa. Aukšta siena ar laiptai dažnai priklauso tik savo apatiniam aukštui, todėl lieka matomi, kai aukštas virš jų paslepiamas, arba dingsta kartu su apatiniu aukštu.
- **Aukštų slėpimas, kad pamatytumėte vidų.** Pjūvio dėžė dažnai greitesnė: žr. [Supjaustyti IFC modelį pjūvio plokštuma](topic:section-plane#a-section-box). Taip pat galite nuimti žymas {{ui:Modelio medis}} eilutėse (žr. [Orientuotis modelio medyje](topic:model-tree)).
- **Spustelėjimas erdvę per sieną.** Spustelėjimas pasirenka artimiausią matomą paviršių. Paslėpkite aukštą virš jos arba perjunkite į {{ui:Viršus}} ir tada spustelėkite.
- **Aukštų pavadinimai atrodo keistai.** BimCraft rodo failyje išsaugotus aukštų pavadinimus. Jei ten parašyta „Level 1“ ar skaičius, tai yra tai, ką įrašė eksportuotojas.

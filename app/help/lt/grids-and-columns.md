---
title: Tinkleliai ir kolonos
summary: Išdėstykite tinklelio linijas su numeruotomis ir raidinėmis žymėmis, pagal tarpus arba po vieną, nubrėžkite sienas ir kolonas išilgai jų ir matykite jas planuose, fasaduose ir pjūviuose.
keywords: tinklelis, tinkleliai, tinklelio linija, kolonų tinklelis, ašis, ašys, žymė, konstrukcinis tinklelis, 1 2 3, A B C, kolona, kolonos, stulpas, atrama, pritraukimas, IfcGrid, IfcColumn
from: bf99a8f7
---

## Ką atliksite

Išdėstykite pastatą pagal tinklelį, tada nubrėžkite sienas ir padėkite kolonas išilgai jo linijų.

## Išdėstyti visą tinklelį

1. Įjunkite {{ui:Braižymas}}, tada pasirinkite {{ui:Versija}} › {{ui:Tinklelis}}.
2. Spustelėkite {{ui:Padėti tinklelį…}}. Nurodykite, kiek **numeruotų linijų** (1, 2, 3…) ir **raidinių linijų** (A, B, C…) norite ir koks atstumas tarp jų. Įveskite vieną tarpą arba kelis, atskirtus kableliais, netolygioms atkarpoms (pavyzdžiui, `20', 24', 20'`). {{ui:Už paskutinių linijų}} nurodo, kiek kiekviena linija išsikiša už kitos rūšies išorinių linijų, o {{ui:Pasukta (laipsniais)}} pasuka visą tinklelį.
3. Spustelėkite {{ui:Padėti}}, tada spustelėkite, kur turi būti pirmoji sankirta (1 / A). Peržiūra seka žymeklį.

Numeruotos linijos eina plane aukštyn ir išdėstomos per jį skersai; raidinės linijos eina per planą skersai ir išdėstomos aukštyn. Raidės praleidžia I ir O, kaip brėžiniuose, todėl jos niekada nepainiojamos su 1 ir 0.

## Nubrėžti tinklelio linijas po vieną

Kai {{ui:Tinklelis}} įjungtas, spustelėkite, kur linija prasideda, ir kur ji baigiasi. Ji gauna kitą žymę iš linijų, kurių kryptimi eina (po 3 ateina 4; po B ateina C). Paspauskite {{key:Esc}}, kad sustabdytumėte.

## Keisti tinklelio liniją

Kai {{ui:Tinklelis}} įjungtas, spustelėkite liniją, kad ją pasirinktumėte. Įveskite naują {{ui:Žymė}} ir paspauskite {{key:Enter}}, arba spustelėkite {{ui:Naikinti šią liniją}} (arba paspauskite {{key:Delete}}). {{ui:Žymės}} padeda žymes abiejuose kiekvienos linijos galuose arba nerodo jų visai. Kiekvienas pakeitimas yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia.

## Braižyti išilgai tinklelio

{{ui:Siena}} įrankis, {{ui:Kolona}} įrankis ir kiti braižymo įrankiai prisega prie tinklelio linijų ir prie jų sankirtų (prisegimo žymė – mažas apskritimas su kryžiumi).

**Kolonos:** pasirinkite {{ui:Versija}} › {{ui:Kolona}}, nurodykite formą (stačiakampę arba apvalią), dydį ir ar kolona eina **iki aukščiau esančio aukšto**, ar iki fiksuoto aukščio, tada spustelėkite. {{ui:Kiekviename tinklelio susikirtime}} padeda koloną kiekviename susikirtime, kuriame jos dar nėra. Spustelėkite koloną, kad pakeistumėte jos formą, dydį ar aukštį skiltyje {{ui:Savybės}}; {{key:Delete}} ją pašalina. Kolonos, einančios iki aukščiau esančio aukšto, seka jį, kai keičiasi to aukšto aukštis.

## Ką turėtumėte matyti

- Tinklelį kiekvieno aukšto plane, su žymeniu ir jo etikete kiekvienos linijos galuose.
- Tinklelio linijas brėžinių rinkinyje: planuose, o fasaduose ir pjūviuose tose vietose, kur linija matoma iš galo, su žymeniu virš pastato. Žr. [Fasadai, pjūviai ir lapai](topic:sheets).
- IFC faile: vienas tinklelis pastatui (IfcGrid, jo numeruotos linijos viename sąraše, raidinės – kitame), o kolonos – kaip IfcColumn su dydžiu, aukščiu ir kiekiais. Kitos BIM programos rodo abu.

:::note
Tinklelis, gautas iš kitos programos failo, rodomas, o įrankiai į jį prisega, bet jo linijų čia keisti negalima.
:::

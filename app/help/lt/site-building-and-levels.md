---
title: Sklypas, jame esantis pastatas ir jo lygiai
summary: Braižykite sklypo kontūrą, dėkite ir sukite pastatą sklype, pridėkite lygius nurodytais aukščiais arba padalykite pastato aukštį ir braižykite pasirinktame lygyje.
keywords: sklypas, sklypo planas, statybos linija, atitraukimas, servitutas, servitutas, važiavimo teisė, nuosavybės riba, parcela, sklypo riba, pastato padėtis, pastato sukimas, pastato dėjimas, lygiai, aukštai, pridėti lygius, padalyti aukštį, aukštis tarp grindų, IfcSite, IfcBuilding, IfcBuildingStorey, erdvinė struktūra
from: 48d10c1e
---

## Ką darysite

Sukurkite IFC modelio dalis, kuriose laikomi visi kiti: sklypą, jame esantį pastatą ir pastato lygius.

Modelis organizuojamas kaip **sklypas**, kuriame yra **pastatas**, o jame – jo **lygiai** (aukštai); sienos, perdangos ir visa kita priklauso lygiui. {{ui:Failas}} › {{ui:Naujas pastatas}} sukuria visus tris. Iš kitos programos modelis, turintis pastatą, bet neturintis sklypo, gauna sklypą, kai pirmą kartą jį nubraižote: pastatas lieka ten, kur buvo.

## Nubraižykite sklypą

1. Įjunkite {{ui:Braižymas}}, tada pasirinkite {{ui:Versija}} › {{ui:Sklypas}}.
2. Spustelėkite sklypo kampus (įrankis prilimpa kaip Sienos įrankis). Spustelėkite pirmą kampą dar kartą, dukart spustelėkite arba paspauskite {{key:Enter}}, kad baigtumėte. {{key:Backspace}} atšaukia kampą.
3. Eilutėje rodomas sklypo plotas. Braižykite jį iš naujo, kad pakeistumėte.

Kiekvieno lygio plane sklypo kontūras rodomas kaip nuosavybės linija.

## Dėkite pastatą sklype

Su įjungtu {{ui:Sklypas}} įveskite pastato **X** ir **Y** sklype bei jo **Pasukimą** laipsniais arba spustelėkite {{ui:Padėti pastatą spustelėjimu}} ir spustelėkite, kur turi būti pastato pradžios taškas. Viskas pastate (lygiai, sienos, tinkleliai, viskas, ką nubraižėte) juda kartu; sklypas ir jo kontūras lieka. Planai ir toliau rodo kiekvieną lygį statmenai pastatui.

## Statybos linijos ir servitutai

Statybos linijos ir servitutai (servitutai, važiavimo teisės) braižomi sklype kaip apribojimai. Jie **įspėja, bet niekada neblokuoja**: sienos, esančios virš jų, nubraižoma, kaip prašėte, o įspėjimas, nurodantis sieną ir liniją ar servitutą, pasirodo {{ui:Problemos}}. Perkėlus sieną atgal, įspėjimas išnyksta. Įspėjimą galima priimti su priežastimi (pvz., institucijos suteiktu nukrypimu).

- **Statybos linija iš atitraukimų.** {{ui:Versija}} › {{ui:Statybos linija}}, tada {{ui:Atitraukimai}}: įveskite, kiek linija nutolusi nuo kiekvienos sklypo ribos. Ribos plane sunumeruojamos, kol įrankis įjungtas. Linija apskaičiuojama pagal tuos atstumus ir seka sklypo kontūrą, jei jį braižysite iš naujo su tiek pat ribų. Atstumai yra jūsų – imami iš nuosavybės dokumento ar teritorijų planavimo schemos; BimCraft nieko nepildo.
- **Nubraižyta statybos linija.** Kai įjungta {{ui:Statybos linija}}, spustelėkite jos taškus ir baikite dukart spustelėdami arba paspausdami {{key:Enter}}. Baikite pirmajame taške – uždaros linijos atveju: viduje esanti sritis yra ta, kur leidžiama statyti, o siena, kurios bet kuri dalis yra išorėje, gauna įspėjimą. Atvira linija įspėja tik apie sieną, kuri ją kerta.
- **Servitutas.** {{ui:Versija}} › {{ui:Servitutas}}: pasirinkite jo rūšį, įveskite pavadinimą, įregistruotą nuorodą ir plotį, tada spustelėkite jo centrinę liniją ir baikite (juosta) arba uždarykite jį pirmajame taške (sritis). Apie sieną, kurios bet kuri dalis jame yra, įspėjama kiekviename lygyje.
- Paviršius, esantis tiksliai ant linijos, yra liečiantis, o ne kertantis (tolerancija 1 mm).
- Dabartinis kiekvieno variantų rinkinio masės variantas tikrinamas taip pat kaip sienos: masė už ribos, ant statybos linijos ar servituto gauna įspėjimą. Žr. [Masės variantai greta](topic:massing-options).
- Pasirinkę jį su {{ui:Pasirinkti}}, galite pakeisti jo pavadinimą, nuorodą, rūšį ar plotį, perkelti jį ar ištrinti.

Jie braižomi kiekvieno lygio plane, lapuose ir plano PDF: statybos linijos brūkšnine linija, servitutai punktyrine, kiekvienas su savo žyma. IFC faile kiekvienas yra anotacija (IfcAnnotation, tipas BuildingLine arba Servitude) sklype, o jo linija yra paprasta kreivė, kurią gali skaityti kitos programos. Tikrinimas naudoja kiekvienos sienos tikrą kontūrą plane su jungtimis, kaip nubraižyta; lenkta siena tikrinama pagal savo storį apie centro liniją.

## Pridėkite lygius

{{ui:Lygiai}} skydelyje {{ui:Pridėti lygį viršuje}} prideda vieną, {{ui:Pridėti lygį žemiau}} prideda vieną po žemiausiu (rūsys, neigiamame aukštyje). {{ui:Pridėti lygius…}} prideda kelis iš karto:

- **Šiais aukščiais**: įveskite aukščius virš žemiausio lygio, atskirtus kableliais (pvz., `12', 24', 36'`). Aukščiai, kuriuose jau yra lygis, praleidžiami.
- **Padalyti pastato aukštį**: įveskite pastato aukštį ir lygių skaičių. Turimi lygiai perkeliami į naujus aukščius nuo žemiausio aukštyn, trūkstami pridedami, o virš jų esantys lieka savo vietose.

Sienos, einančios iki aukštesnio lygio, seka jį, kaip ir kolonos bei rampos.

{{ui:Kopijuoti šį lygį…}} (tame pačiame skydelyje) nukopijuoja tai, kas nubraižyta lygyje, kurį žiūrite, į kitą lygį arba į naują lygį viršuje, taigi aukšto planą galima perkelti per visą pastatą vienu žingsniu. Žr. [Braižyti sienas](topic:draw-walls).

## Braižykite lygyje

Kiekvienas braižymo įrankis veikia lygyje, pasirinktame plano lygių sąraše (arba pasirinktame skydelyje {{ui:Lygiai}}): tai, ką braižote, priklauso tam lygiui.

## Ką turėtumėte matyti

- Kiekvienas šių pakeitimų yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia.
- IFC faile: sklypas (IfcSite) su kontūru ir plotu, pastatas (IfcBuilding), įdėtas jame, ir lygiai (IfcBuildingStorey) pastate.

Taip pat žr. [Koordinatės BimCraft](topic:coordinates) projekto pradžios ir geodezinio taško klausimais.

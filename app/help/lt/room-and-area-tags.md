---
title: Patalpų ir plotų žymos
summary: Uždėkite žymą su numeriu, pavadinimu ir plotu ant patalpos ar ploto. Žyma seka savo patalpą ir yra dydžiuojama pagal savo aukštį popieriuje.
keywords: žyma, patalpos žyma, ploto žyma, žymėti patalpą, žymėti plotą, žymėti visas, etiketė, teksto aukštis, aukštis popieriuje, anotacija
from: 67059d8a
---

## Ką darysite

Žymėkite patalpas ir plotus po vieną arba visus iškart ir perkelkite žymą ten, kur ji gerai matoma.

## Kur yra įrankiai

- Juostos išdėstymai: {{ui:Architektūra}} › **Patalpa ir plotas** › {{ui:Žymėti patalpą}} ir {{ui:Žymėti plotą}}.
- Klasikinis išdėstymas: {{ui:Braižymas}} juosta › {{ui:Patalpos}} meniu.
- Pasirinkta patalpa ar plotas: Savybės › {{ui:Pridėti žymę}}.

## Žingsniai

1. Pasirinkite {{ui:Žymėti patalpą}} ir spustelėkite patalpoje, kur žyma turi stovėti.
2. Arba paspauskite {{ui:Pažymėti visas nepažymėtas}} eilutėje: kiekviena šio aukšto patalpa, neturinti žymos, gauna vieną – viduryje. Tai vienas žingsnis Anuliuoti.
3. Norėdami perkelti žymą, pasirinkite ją įrankiu Pasirinkti ir vilkite. Savybėse yra {{ui:Grąžinti į vidurį}}.
4. {{ui:Žymėti plotą}} veikia taip pat, tik plotams.

## Ką daro žyma

- Ji nurodo numerį, pavadinimą ir plotą jūsų rodymo vienetais.
- Ji seka savo patalpą: pervadinkite patalpą ar perkelkite sieną – žymos žodžiai ir vieta pasikeičia tuo pačiu žingsniu.
- Dydis nustatomas popieriuje: {{ui:Teksto aukštis popieriuje}} nurodomas milimetrais (pradžiai 2.5). Esant rodinio masteliui 1:50, 2.5 mm žyma modelyje yra 125 mm aukščio; esant 1:100 – 250 mm.
- Patalpa su žyma rodo žymą vietoj paprasto pavadinimo.
- Kai jos patalpa ar plotas dingsta, žyma dingsta kartu. Anuliuoti grąžina abu.

## IFC faile

Žyma yra IfcAnnotation (ObjectType ROOMTAG arba AREATAG), jos tekstas – teksto literalas, ir GlobalId to, ką ji nurodo. Tekstas faile nurodo plotą kvadratiniais metrais.

## Dar neįgyvendinta

- Savo žymų formos ir rodyklės linija.
- Žymos ant durų, langų ir sienų yra atskiras įrankis (žr. lapų žymų stilius).

Taip pat žr. [Patalpos ir patalpų skyrikliai](topic:rooms-and-separators).

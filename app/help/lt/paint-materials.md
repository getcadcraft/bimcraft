---
title: Dažyti medžiagas ant sienų, grindų ir stogų
summary: Suteikite elementams medžiagą, pavyzdžiui, plytas, apkalimą, čerpes, medieną ar plyteles, visam elementui arba vienai jo pusei; ji išsaugoma IFC ir rodoma atvaizdavimo paveikslėliuose.
keywords: dažymas, medžiaga, medžiagos, apdaila, apdailos, tekstūra, plytos, apkalimas, čerpės, stogo dengimas, mediena, akmuo, plytelė, betonas, tinkas, žolė, žvyras, stiklas, metalas, sienos pusė, vidus, išorė, grindų apdaila, patalpa, paviršiaus stilius
from: fbfed676
---

{{ui:Dažyti}} įrankių juostoje atveria medžiagų biblioteką virš 3D vaizdo: plytos ir blokeliai, apkalimas, stogo dengimas, mediena, akmuo, plytelės, betonas, tinkas, žemė, stiklas ir metalas.

## Dažyti elementus

1. Spustelėkite {{ui:Dažyti}}.
2. Spustelėkite medžiagą.
3. Spustelėkite elementus 3D vaizde. Kiekvienas paspaudimas nudažo elementą, ant kurio spustelėjote.

Norėdami nudažyti daug elementų vienu metu, pirmiausia juos pažymėkite (spustelėkite, {{key:Ctrl}}+spustelėkite arba naudokite [paiešką](topic:find)), tada spustelėkite medžiagą: kiekvienas pažymėtas elementas ją gauna vienu žingsniu.

Elementas 3D vaizde iš karto rodo medžiagos spalvą. Jo tekstūra matoma [atvaizduotame paveikslėlyje](topic:render). {{key:Esc}} arba {{ui:Uždaryti}} baigia dažymą.

## Dažyti vieną pusę

Pasirinkite {{ui:Tik spustelėta pusė}}, tada spustelėkite norimą pusę: sienos išorę apkalimu, o vidų kita apdaila; grindų viršų mediena, o apačią palikite tokią, kokia yra. Likusi elemento dalis išlaiko savo medžiagą.

Pusė nustatoma pagal paties elemento kryptis, todėl ji lieka ta pati, kai elementą perkeliate ar sukate.

Norėdami dažyti grindis kambarys po kambario, kiekvienam kambariui suteikite atskiras grindis ({{ui:Braižymas}} › {{ui:Grindys}} › **Šis kambarys**, žr. [Patalpos, grindys, lubos ir stogai](topic:floors-and-roofs)), tada nudažykite kiekvienų grindų viršų.

## Nuimti medžiagą

Spustelėkite dryžuotą pavyzdėlį ({{ui:Be medžiagos}}), tada spustelėkite elementą. Nuimama kiekviena medžiaga, įskaitant pusių medžiagas.

## Faile

Dažymas keičia IFC (kiekvienas veiksmas – vienas žingsnis; {{key:Ctrl+Z}} jį atšaukia) ir lieka paprastas IFC:

- kiekvienas nudažytas elementas gauna savybių rinkinį `CadCraft_Render`, nurodantį jo medžiagą, ir po vieną savybę kiekvienai nudažytai pusei;
- jo kūnas gauna paviršiaus stilių su medžiagos spalva, kad kitos BIM programos rodytų spalvą. IFC4 stilius taip pat nurodo tekstūrą.

Kai BimCraft pertvarko jūsų nudažytą sieną (pavyzdžiui, pakeičiate jos galą), siena išlaiko savo medžiagą ir spalvą – BimCraft, paveikslėliuose ir kitose programose.

:::note
Tekstūras piešia pats BimCraft: jos veikia neprisijungus ir yra nemokamos naudoti bet kam (CC0). Jūsų pačių paveikslėlių tekstūros dar nepalaikomos.
:::

## Tekstūros 3D vaizde

Nudažyta plytų siena rodo savo plytas, medinės grindys – lentas, realiu dydžiu, kai tik medžiaga uždėta. Nuimkite žymėjimą nuo **Rodyti tekstūras 3D vaizde** dažymo skydelyje, kad matytumėte plokščias spalvas (labai didelis modelis jas pats išjungia ir apie tai praneša). Spalva pagal savybę visada rodo savo spalvas. Tekstūras piešia programa, todėl nieko neatsisiunčiama, o atvaizdai ir glTF failas jas visada turi.

---
title: Orientavimasis su modelio medžiu
summary: Naršykite IFC modelį pagal projektą, sklypą, pastatą, aukštą ir erdvę, o elementai sugrupuoti pagal rūšį; pažymėkite langelius, kad rodytumėte ir slėptumėte, spustelėkite eilutę, kad pasirinktumėte, dukart spustelėkite, kad priartintumėte.
keywords: modelio medis, medis, struktūra, erdvinė struktūra, naršyklė, apžvalga, navigatorius, aukštas, lygis, grindys, erdvė, kambarys, grupė, klasė, slėpti, rodyti, pasirinkti, priartinti
from: 69de4ab7
---

## Ką darysite

Pamatysite, kaip modelis sudėtas, ir pasieksite bet kurį elementą be ieškojimo 3D vaizde: pastatą, jo aukštus, erdves kiekviename aukšte ir juose esančius elementus, sugrupuotus pagal rūšį (sienos, durys, perdangos…).

## Veiksmai

1. Atidarykite IFC modelį. Kairėje esantis {{ui:Modelio medis}} atsiveria iki aukštų.
2. Spustelėkite rodyklę šalia eilutės, kad ją atidarytumėte ar uždarytumėte. Aukšte pirmiausia yra jo erdvės, tada elementai pagal rūšį su jų skaičiumi. Elementas, sudarytas iš dalių, kaip laiptai, turi savo dalis.
3. Nuimkite eilutės langelio žymėjimą, kad paslėptumėte viską jame; pažymėkite, kad vėl parodytumėte. Langelis su brūkšniu reiškia, kad rodoma tik dalis to, kas jame yra.
4. Spustelėkite eilutės pavadinimą, kad pasirinktumėte, ką ji reiškia: vieną elementą arba visus grupės, aukšto ar erdvės elementus. {{key:Mod}}+spustelėjimas prideda juos prie pasirinkimo arba išima iš jo.
5. Spustelėkite mygtuką {{ui:i}} šalia aukšto, erdvės ar pastato, kad pamatytumėte jo paties savybes.
6. Dukart spustelėkite eilutę, kad priartintumėte prie jos.

## Ką turėtumėte matyti

- Pasirinkus elementą 3D vaizde, medis atsiveria iki jo ir jį pažymi.
- Paslėpti elementai perbraukti. Medžio langeliai ir {{ui:Rodyti}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) veikia kartu: žr. [Slėpkite, izoliuokite ir matykite per elementus](topic:hide-and-isolate).
- Elementai, kurių modelis nededa jokiame aukšte, yra grupėje gale – **Ne erdvinėje struktūroje**.
- Ilga grupė rodo po 200 eilučių; spustelėkite **Rodyti daugiau** po ja, kad pamatytumėte likusias.

## Klavišai

Kai eilutės pavadinimas yra fokusuotas: {{key:Up}} ir {{key:Down}} perkelia, {{key:Right}} atidaro, {{key:Left}} uždaro arba pakyla aukščiau, {{key:Space}} pažymi langelį, {{key:Enter}} pasirenka.

## Dažnos klaidos

- **Aukšto langelis pažymėtas, bet nieko nerodoma.** Sąrašas {{ui:Aukštai}} po medžiu pats išjungia visus aukštus: pažymėkite ir ten.
- **Eilutė nieko nepasirenka.** Kai kurios eilutės, pavyzdžiui tuščia erdvė, neturi elementų, kuriuos galima nubrėžti; būsenos eilutė tai pasako.

## Toliau

- [Ištrinkite, iškirpkite, kopijuokite ir įklijuokite pastatų elementus](topic:edit-elements)
- [Rodykite ir slėpkite aukštus, erdves ir kraštines](topic:storeys-and-spaces)

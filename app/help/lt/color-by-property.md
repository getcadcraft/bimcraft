---
title: Elementų nudažymas pagal savybę
summary: Nudažykite kiekvieną elementą pagal vienos savybės reikšmę, pvz., klasę, tipą, aukštą, medžiagą, atsparumo ugniai klasę ar kainą, perskaitykite legendą, spustelėkite reikšmę, kad būtų rodomi tik tie elementai, ir įrašykite spalvas kaip schemą naudoti kituose modeliuose.
keywords: spalva, spalva pagal, legenda, išmanusis vaizdas, išvaizda, savybė, tipas, medžiaga, atsparumas ugniai, filtras, izoliuoti, tema, reikšmės, schema, spalvų schema, įrašyti spalvas, pakartotinis naudojimas, komanda, json, spalvos pavyzdys
from: f081d343
---

## Ką darysite

Vienu žvilgsniu matykite, kaip savybė pasiskirsto modelyje: kurios sienos yra išorinės, kokios medžiagos kur naudojamos, kurie elementai neturi atsparumo ugniai klasės. Kiekvienas elementas įgyja savo reikšmės spalvą, o legenda parodo, ką reiškia kiekviena spalva ir kiek elementų ją turi.

## Žingsniai

1. Atidarykite IFC modelį.
2. Dešinėje spustelėkite skirtuką {{ui:Spalva}}.
3. Pasirinkite savybę sąraše. Pirmosios priklauso kiekvienam elementui ({{ui:Klasė}}, {{ui:Tipas}}, {{ui:Aukštas}}, {{ui:Medžiaga}}, {{ui:Pavadinimas}}…); likusios ateina iš modelio savybių rinkinių ir kiekių rinkinių, pagal rinkinio pavadinimą. Skaičius po kiekvienos yra tiek elementų, kiek ją turi.
4. Perskaitykite legendą: spalva, reikšmė ir tiek elementų, kiek ją turi.
5. Spustelėkite reikšmę, kad būtų rodomi tik tie elementai. Laikydami nuspaudę {{key:Mod}}, spustelėkite, kad pridėtumėte daugiau reikšmių. Paspauskite {{key:Shift+H}}, kad vėl būtų rodoma viskas.
6. Spustelėkite {{ui:Išjungta}}, kad grįžtumėte prie modelio savųjų spalvų.

## Ko turėtumėte matyti

- Iki septynių reikšmių gauna savo spalvą, pirmiausia dažniausia reikšmė. Daugiau reikšmių turi vieną pilką spalvą ir išvardijamos kaip **kitos reikšmės**.
- Skaičius su daugybe skirtingų reikšmių suskirstomas į šešis vienodus intervalus – nuo šviesaus (mažos reikšmės) iki tamsaus (didelės).
- Elementai be šios savybės yra blankiai pilki ir išvardijami kaip **Nėra reikšmės**, kad spalvoti elementai išsiskirtų.
- Spalvos keičiasi su Paper ir Model ir išlieka redaguojant modelį.
- Tipo savybė galioja kiekvienam to tipo elementui; kai elementas turi savo reikšmę tai pačiai savybei, galioja jo paties reikšmė.

## Keiskite spalvas ir įrašykite jas kaip schemą

- Spustelėkite reikšmės spalvos pavyzdį legendoje, kad pasirinktumėte jai kitą spalvą. Modelis iš karto perdažomas.
- {{ui:Save scheme}} atsisiunčia spalvas kaip nedidelį `.json` failą, pavadintą pagal savybę, pavyzdžiui, `Class colors.json`.
- Kitame modelyje arba komandos nario kompiuteryje spustelėkite {{ui:Open scheme…}} ir pasirinkite tą failą. Kiekviena schemos reikšmė gauna savo spalvą, todėl tas pats atsparumo ugniai klasė ar sistema visuose modeliuose yra vienodos spalvos.
- Reikšmė, kurios schemoje nėra, nudažoma pilkai ir išvardijama kaip „nėra schemoje“; schemos reikšmės, kurių šis modelis neturi, lieka išvardytos su 0, kad matytumėte visą schemą.
- Schema išlaiko savo spalvas abiejose temose. Pasirinkus savybę sąraše, vėl pradedama nuo automatinių spalvų.

## Dažnos klaidos

- **„Šiame modelyje nėra … reikšmių.“** Schema įrašyta savybei, kurios šis modelis neturi (pavyzdžiui, kitas savybių rinkinio pavadinimas). Atidarykite šio tipo modeliui skirtą schemą arba pasirinkite savybę sąraše.

- **Savybės nėra sąraše.** Nė vienas modelio elementas su forma jos neturi. Pačių aukštų ir erdvių savybės nėra išvardytos.
- **Visi elementai vienodos spalvos.** Visi elementai turi tą pačią reikšmę arba jokios: žiūrėkite legendos skaičius.

## Toliau

- [Slėpti, izoliuoti ir matyti per elementus](topic:hide-and-isolate)
- [Orientuokitės modelio medyje](topic:model-tree)

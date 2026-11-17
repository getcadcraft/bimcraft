---
title: Savybių skydelio laukai
summary: Ką reiškia kiekvienas Savybių, Failo, Brėžinio ir Aplanko skydelio laukas ir kuriuos iš jų galima keisti.
keywords: savybės, laukai, atributai, globalid, guid, kopijuoti, kopijuoti reikšmę, kopijuoti viską, csv, iškarpinė, serijos numeris, žymė, objekto tipas, linija, EXPRESS ID, savybių rinkinys, pset, kiekiai, schema, failo skydelis
from: fe55b435
---

## IFC elementas

Viršuje {{ui:Savybės}} skydelyje rodoma elemento rūšis be „Ifc“ priešdėlio (pvz., „Door“, „WallStandardCase“, „FurnishingElement“) ir jo pavadinimas arba, jei jo nėra, „Be pavadinimo“.

| Laukas | Reikšmė | Redaguojamas |
|---|---|---|
| Pavadinimas | Elemento pavadinimas, dažnai šeimos ir tipo pavadinimas iš eksportuotojo | Taip |
| Tipas | Elemento tipo pavadinimas, kai jį turi | Ne |
| Objekto tipas | Laisvas tekstinis tipo aprašymas, kurį kai kurie eksportuotojai užpildo | Taip |
| Žymė | Elemento žymė arba ženklas; daugelis eksportuotojų čia rašo elemento ID | Taip |
| Aprašymas | Laisvas tekstas | Taip |
| GlobalId | Pastovus 22 simbolių IFC identifikatorius, toks pats kiekviename to paties elemento eksporte | Ne |
| Linija | Elemento eilutės numeris (`#1234`) šiame IFC faile. Keičiasi tarp eksportų | Ne |

Žemiau rodomi **savybių rinkiniai**, surikiuoti pagal pavadinimą:

- Kiekvienas rinkinys atsidaro ir užsidaro spustelėjus jo pavadinimą. Pirmieji trys atidaryti.
- Rinkinys, pažymėtas „(type)“, priklauso elemento tipui: „Tipo savybė: pakeitimas taikomas kiekvienam šio tipo elementui.“
- Kiekių rinkiniai (ilgiai, plotai, tūriai, kiekiai, svoriai) tik skaitomi.
- Sąrašai ir išvardytos reikšmės rodomi tik skaitomai.
- Reikšmės Yes ir No rodomos kaip **Taip** arba **Ne**.
- Skaičiai rodomi suapvalinti iki keturių skaitmenų po kablelio. Ilgiai (ilgio savybė arba kiekio ilgis) rodomi pagal {{ui:Vienetai}}, pasirinktus įrankių juostoje, šalia jų – vieneto žymė. Naują reikšmę galite įrašyti tuo vienetu arba kitu vieneto žymėjimu (2.4 m, 8'-0"): BimCraft į failą įrašo jo paties skaičių. Kiti skaičiai rodomi taip, kaip juos turi failas.
- Tuščia reikšmė rodoma kaip *tuščia*. Pakeista reikšmė rodoma paryškinta, šalia jos – mėlyna juosta.

## Kopijuoti reikšmę

Kiekviena {{ui:Savybės}} reikšmė turi mažą kopijavimo mygtuką: spustelėkite jį, kad reikšmė būtų nukopijuota į iškarpinę tiksliai taip, kaip rodoma, pavyzdžiui, GlobalId, serijos numeris ar bet kuri savybių rinkinio reikšmė. Kopijavimas niekada nepradeda redagavimo.

Viršuje {{ui:Kopijuoti viską}} nukopijuoja visas elemento reikšmes kaip tekstą, rinkinys po rinkinio, o {{ui:Kopijuoti kaip CSV}} nukopijuoja jas kaip grupės, savybės ir reikšmės eilutes, kurias galima įklijuoti į skaičiuoklę. Tuščios reikšmės paliekamos, kad kiekvienas laukas turėtų eilutę. Tas pats veikia elementui iš kito atidaryto modelio; kai atidaryta daugiau nei vienas modelis, CSV pradžioje yra Modelio stulpelis su failo pavadinimu.

## Failo skydelis (IFC)

| Laukas | Reikšmė |
|---|---|
| Failas, Dydis | Atidarytas failas |
| Schema | IFC versija, pvz., IFC2X3 arba IFC4 |
| Projektas | Projekto pavadinimas ir ilgas pavadinimas |
| Fazė | Projekto fazė, jei eksportuotojas ją įrašė |
| Eksportuota iš | Eksportuojanti programa pagal failo antraštę |
| Autorius | Autorius failo antraštėje |
| Eksportuota | Data ir laikas failo antraštėje |
| Elementai | Kiek elementų su forma buvo nubraižyta |
| Trikampiai | Kiek trikampių sudaro jų formos; modelio svorio matas |

## Failo skydelis (projektų ir šeimų failai)

| Laukas | Reikšmė |
|---|---|
| Rūšis | Projektas, Projekto šablonas, Šeima arba Šeimos šablonas |
| Įrašyta | Paskutinė versija, kuria failas buvo įrašytas |
| Build | Tikslus tos versijos build numeris |
| Skaityta | Kiek failo BimCraft perskaitė iš viso jo dydžio |

## Brėžinio skydelis (DWG ir DXF)

| Laukas | Reikšmė |
|---|---|
| Formatas | Versija, kuria brėžinys įrašytas, su formato kodu, pvz., AC1032 |
| Vienetai | Brėžinio įterpimo vienetai, kai nustatyti |
| Objektai | Kiek objektų perskaityta |
| Sluoksniai | Kiek sluoksnių |
| Lapai | Kiek lapų (maketų) arba Nėra |
| Susieti brėžiniai | Kiek susietų brėžinių rasta ir įkelta |
| Įranga | Kiek pažymėtos įrangos elementų yra lapuose |

## Aplanko skydelis

| Laukas | Reikšmė |
|---|---|
| Aplankas, Failai, Dydis | Atidarytas aplankas, kiek jame yra failų ir jų bendras dydis |
| Modeliai | Projekto ir šeimų failai, kiekvienas su savo atsarginėmis kopijomis, suskaičiuotomis vieną kartą |
| CAD brėžiniai, IFC modeliai | Kiek kiekvieno |
| Problemos | Kiek modelių kopijų neišsamios arba neskaitomos, arba Nėra |

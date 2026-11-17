---
title: Atkurti potvynį, vėją ar žemės drebėjimą pastate
summary: Vanduo kyla per patalpas, vėjo slėgis kiekviename aukšte arba žemės drebėjimas, drebinantis aukštus, atkuriami plane arba fasade su laiko slankikliu. Paprasti modeliai su išvardytomis prielaidomis; tai nėra kodo patikra ar konstrukcijos projektas.
keywords: pavojus, potvynis, vėjas, žemės drebėjimas, seisminis, poslinkis, svyravimas, bazinė jėga, vandens lygis, klimatas, scenarijus, jūros lygis, atkūrimas, aukštas, periodas
from: ff0d34d1
---

Skyrius {{ui:Pavojaus atkūrimas}} kairiajame skydelyje atkuria pavojų atidarytame IFC modelyje. Modelyje nieko nekeičiama.

:::warning
Tai **paprasti modeliai, parodantys, ką pavojus daro šiam išplanavimui**, o ne potvynio tyrimas, vėjo kodo patikra ar konstrukcijos projektas. Kiekvienas rezultatas išvardija savo prielaidas.
:::

## Potvynis

Nustatykite aukščiausią vandens lygį virš žemiausio aukšto ir minutes, per kurias jis kyla, lieka ir nusileidžia. Vanduo patenka į patalpą per angą, kurios slenkstį jis jau perėjo, o patalpos, sujungtos su šlapiomis patalpomis angomis žemiau vandens lygio, stovi tame pačiame lygyje (kvazistatiškai). Lentelėje nurodoma, kada kiekviena patalpa pirmą kartą sušlampa ir kiek giliai; planas tai atkuria. Įveskite didžiausią vandens kiekį, kurį patalpa gali priimti, ir patalpos, kuriose vandens yra daugiau, rodomos kaip įspėjimai. **Klimato ateitis:** įkelkite savo scenarijaus failą (JSON arba CSV su metais, jūros lygio kilimu ir potvynio koeficientu) ir pasirinkite metus. Arba įjunkite priedą Klimato ateitis, pasirinkite scenarijų ir metus: potvynis paleidžiamas du kartus, dabartinis šalia būsimo (žr. „Klimato ateitis: 2050 ir 2080 m. potvynis, karštis ir gaisrai“). Rūšys Gaisro poveikis ir Karštis: būsimo oro failas taip pat yra tame pačiame sąraše.

## Vėjas

Slėgis seka ½ρV², o greitis didėja aukštyn; jėga aukštui yra tas slėgis, padaugintas iš gūsio koeficiento, dviejų slėgio koeficientų, pločio ir aukšto aukščio. Gaunate skersinę jėgą, apvertimo momentą ir svyravimą.

## Žemės drebėjimas

Šlyties modelis: pastatas su mase kiekviename aukšte (pagrindo plotas × kilogramai kvadratiniam metrui, kuriuos nustatote), tuo pačiu standumu kiekviename aukšte, pritaikytu prie pirmojo periodo, kurį nurodote (dešimtadalis sekundės vienam aukštui, jei paliekate tuščią – ir tai nurodoma), slopinimas bei sukurtas žemės judesys (impulsas arba filtruotas triukšmas) su pasirinktu didžiausiu pagreičiu. Rezultatas – kiekvieno aukšto poslinkis, aukštų pagreičiai ir pagrindo skersinė jėga; fasade rodomas svyravimas, nubrėžtas didesnis nei tikrasis. Įveskite leidžiamą poslinkio santykį, ir aukštai, viršijantys jį, rodomi kaip įspėjimai. Tai tamprus modelis: nieko nepasiduoda ir neįtrūksta.

## Aukštų standumas pagal Analizės karkasą

Žemės drebėjimui ar vėjo svyravimui pasirinkite **Analizės karkasas** kaip standumo šaltinį vietoj periodo įvedimo. Kiekvienas aukštas iš eilės pastumiamas į šoną, karkasas (sijos, kolonos, įtvirtinimai, perdangos) išsprendžiamas, o aukštų standumas, veikiantis kartu, valdo skaičiavimą. Svoris – narių pačių svoris ir aukšto plane nurodyta perdangos apkrova kvadratiniam metrui. Rodomas tikrasis pirmasis periodas. Tai tamprus modelis: nieko nepasiduoda plastiškai, o sukimas nemodeliuojamas. Vėjui aukštų jėgos vis dar yra aukščiau aprašytos prielaidinės (galios dėsnio profilis, jūsų gūsio koeficientas ir fiksuoti slėgio koeficientai, o ne vėjo kodas); iš karkaso gaunamas tik svyravimas, išsprendžiant pilną karkaso standumo matricą su tomis jėgomis. Modeliui reikalingas IFC su karkasu, kurį Analizės skirtukas gali nuskaityti.

## Vienetai

Vandens gylis, svyravimas ir poslinkis pagal aukštus, atstumai bei plotai rodomi pasirinktais {{ui:Vienetai}}. Jėgos (kN), laikas ir pagreičiai išlaiko savus vienetus, o reikšmė, kurią įvedate laukelyje, pažymėtame metrais, lieka metrais. Tas pats galioja evakuacijos, dienos šviesos, šildymo ir vėsinimo bei įrengimo rezultatams: ilgiai, plotai ir tūriai seka jūsų pasirinkimą; slėgis, srautas, temperatūra, energija ir galia niekada nekonvertuojami.

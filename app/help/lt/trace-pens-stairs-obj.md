---
title: Aukšto atsekimas, pieštukai pagal vaizdą, laiptai iš eskizo ir OBJ atidarymas
summary: Rodyti kitą aukštą punktyrine linija po planu ir sulygiuoti jį; suteikti sienoms, durims ir langams atskirą pieštuką viename vaizde; nubrėžti vaikščiojimo liniją laiptams gauti; atidaryti Wavefront OBJ tinklą.
keywords: atsekimo nuoroda, šešėlis, pagrindas, pieštukas, linijos storis, linijos tipas, perrašymas, laiptai, eskizas, tarpsprintis, OBJ, tinklas, importas, Wavefront
from: 333ebbde
---

## Atsekti aukštą

Pasirinkite {{ui:Trace}} meniu {{ui:Versija}}, tada vaizdą sąraše: kito aukšto planą, aukšto lubų planą ar išsamų fragmentą (iškirptą pagal jo apkarpymo sritį). Jo sienos, kolonos ir grindys rodomos punktyrinės po planu, kurį braižote. Perkelkite jį spustelėdami bazinį tašką ant nuorodos, tada vietą, kur tas taškas turi būti, arba įveskite X, Y ir kampą (jis sukasi apie savo centrą). {{ui:Reset}} grąžina jį į vietą, {{ui:Hide}} pašalina. Tai tik nuoroda: jos niekas nepasirenka, ji nespausdinama ir neįrašoma į IFC. BimCraft kiekvienam aukštui prisimena ją šioje naršyklėje.

## Pieštukai pagal vaizdą

Pasirinkite {{ui:Pens}}. Nurodykite, kam skirtas pieštukas: visoms sienoms, visoms durims, visiems langams, pasirinkto elemento tipui ar pasirinktiems elementams. Pasirinkite storį, liniją (ištisinė, brūkšninė, punktyrinė) ir spalvą, tada {{ui:Apply}}. Pakeitimas galioja tik šio aukšto planui. Pasirinkimas stipresnis už tipą, o tipas stipresnis už visą kategoriją. {{ui:Clear all}} pašalina juos. Jie išsaugomi šioje naršyklėje. Pažymėkite **Pieštukų spalvos 3D**, kad spalvoti pieštukai nudažytų modelį 3D vaizde (storis ar brūkšnys yra linijos savybė, todėl ten matoma tik spalva); atžymėkite, kad grįžtumėte. {{ui:Print}} nubraižo juos ant plano PDF: storis keičiamas pagal ekraną (numatytasis sienos pieštukas 1.75 pikselio yra 0.5 mm), brūkšniai lieka brūkšniais, o spalva spausdinama pagal popieriaus temos reikšmę.

## Laiptai iš eskizo

Pasirinkite {{ui:Sketch stair}} ir spustelėkite vaikščiojimo linijos kampus, pradedant apatine pakopa. Viena linija yra tiesūs laiptai, dvi linijos, susitinkančios stačiu kampu, yra L formos, o trys linijos (aukštyn, skersai, atgal) yra U formos. Paspauskite {{key:L}}, kad nubraižytumėte tarpsprintį: spustelėkite jo kampus ir paspauskite {{key:Enter}}; jo trumpoji kraštinė nustato laiptų plotį. Paspauskite {{key:Enter}}, kad įdėtumėte laiptus. Kiekviena pakopa apskaičiuojama pagal jūsų linijos ilgį ir stakčių skaičių, kurio reikia aukščiui. Po to tai įprasti laiptai: keiskite juos **Properties**, o laiptinė ir turėklai seka pakeitimus.

Prieš {{key:Enter}} įrankio eilutėje pažymėkite **Padaryti šeimą** (arba paspauskite {{key:F}}), kad laiptai būtų įdėti kaip šeima (tiesūs, L ar U formos). Jie įkeliami kaip vienas elementas ir atidaromi šeimos redaktoriuje, kur plotis, pakopa, bendras aukštis, pakopos kiekviename bėgyje ir U formos tarpas yra parametrai, todėl galite pridėti dydžių, plano simbolį ar aktyviuosius taškus. Pakopos ir stakto aukštis iš jų seka. Šeimos laiptai neturi turėklų ar laiptinės: tai priklauso įprastiems laiptams.

## Atidaryti OBJ

Atidarykite `.obj` failą kaip bet kurį kitą failą. OBJ neturi vienetų, todėl BimCraft skaito metrus su Y aukštyn, kaip dauguma programų jį rašo. Kiekvienas objektas ar grupė tampa vienu tinklo elementu viename aukšte, ir tada galite jį peržiūrėti, matuoti, pjauti pjūviu, įdėti į modelį ir įrašyti kaip IFC. Linijos, kreivės ir paviršiai praleidžiami, o būsenos eilutė tai nurodo.

Objektas, kuris yra tiksliai tiesi prizmė (uždarasis tinklas su dviem lygiagrečiais, identiškais galo paviršiais ir plokščiomis šoninėmis sienelėmis, statmenomis jiems: plokštė, stulpas, sienos blokas, plokštė su skylėmis), IFC įrašomas kaip IFC pačios ištęsta kieta forma su savo kontūru ir gyliu, o ne kaip trikampių sąrašas. Kitos programos skaito jį kaip tikrą kietą kūną, jis lieka mažas, o jo gylis ir kontūras vėliau gali būti keičiami. Būsenos eilutė nurodo, kiek objektų išsaugota taip. Viskas, kas nėra tiksliai prizmė (nusmailėjusi forma, tinklas su vienu pastumtu tašku, tinklas su tarpu), lieka trikampiais. STEP failas skaitomas tuo pačiu būdu.

---
title: Vairāku IFC modeļu skatīšana kopā
summary: Pievienojiet scēnai citus IFC failus, piemēram, arhitektūru, konstrukcijas un inženiertīklus, skatiet tos vienās koordinātēs, pārvietojiet vienu, paslēpiet vienu un izvēlieties, kuru rediģēt.
keywords: federēt, federācija, federēts modelis, vairāki modeļi, vairāki faili, apvienot, pārklāt, koordinācija, disciplīna, konstrukcija, mep, inženiertīkli, nobīde, pārvietot modeli, aktīvais modelis, pievienot modeli
from: df0efbbf
---

## Ko jūs darīsiet

Skatiet dažādu disciplīnu modeļus vienuviet: arhitekta modeli kopā ar konstrukciju un inženiertīklu modeļiem. Katrs paliek sava fails; BimCraft tikai parāda tos kopā.

## Soļi

1. Atveriet pirmo IFC modeli kā parasti.
2. Sadaļā {{ui:Modeļi}} pa kreisi noklikšķiniet uz {{ui:Pievienot modeli…}} un izvēlieties vienu vai vairākus IFC failus. Katrs parādās sarakstā un 3D skatā.
3. Noņemiet atzīmi, lai paslēptu modeli; atzīmējiet, lai to parādītu atkal.
4. Ja modelis ienāk nepareizā vietā (citā uzmērījuma punktā), noklikšķiniet uz {{ui:Pārvietot}} zem tā, ierakstiet, cik tālu pārvietot pa X, Y un Z metros, un noklikšķiniet uz {{ui:Lietot}}.
5. Modelis ar punktu ir tas, ko rediģējat. Lai rediģētu citu, noklikšķiniet uz cita modeļa punkta.
6. Noklikšķiniet uz × blakus modelim, lai to izņemtu no scēnas.

## Atvērt komandas modeļus

Kad atvērtais modelis ir mākoņa fails komandas projektā, zem saraksta parādās {{ui:Atvērt komandas modeļus}}. Tā atver projekta citus IFC modeļus blakus šim, katru pārvietotu par projekta iestatīto nobīdi. Modeļi, kas jums paslēpti, paliek ārpusē un tiek saskaitīti; modelis, ko projekts ir pagriezis, tiek atvērts nepagriezts un arī saskaitīts; faili, kas nav IFC (piemēram, DWG), tiek izlaisti un nosaukti statusa rindā. Modelis, kas jau ir atvērts, nekad netiek atvērts divreiz. Poga ir paslēpta failam, kas nav komandas projektā.

## Ko jums vajadzētu redzēt

- Katrs modelis ir pirmā modeļa koordinātēs, tā, kā to novieto tā fails. Modeļi, kas eksportēti no viena projekta, sakrīt bez kustināšanas.
- Atlasot elementu modelim, kuru nerediģējat, tā īpašības tiek rādītas tikai lasāmas, un ir {{ui:Rediģēt šo modeli}}, lai pārslēgtos.
- {{ui:Modeļa koks}}, {{ui:Stāvi}}, {{ui:Krāsa}}, {{ui:Izmaiņas}} saraksts, bibliotēkas vienumu novietošana un {{ui:Saglabāt kā IFC}} darbojas ar modeli, ko rediģējat. Paslēpt, izolēt, caurspīdīgums un {{ui:Atlasīt visu}} darbojas visos modeļos.
- {{ui:Saglabāt kā IFC}} lejupielādē modeli, ko rediģējat, tikai ar tā izmaiņām.

## Biežākās kļūdas

- **Modelis ir tālu vai nav redzams.** Tā fails izmanto citas koordinātes. Izmantojiet {{ui:Pielāgot}}, lai to atrastu, un tad {{ui:Pārvietot}}, lai to novietotu pareizi.
- **Dzēst vai Kopēt ir pelēkots atlasītam elementam.** Tas pieder citam modelim: vispirms pārslēdzieties uz to.
- **Faila atvēršana ar Izvēlēties failu aizstāja visu.** Tā sāk jaunu scēnu. Lai pievienotu failus tai, kas jums jau ir, izmantojiet {{ui:Pievienot modeli…}}.

## Tālāk

- [Paslēpt, izolēt un padarīt caurspīdīgus elementus](topic:hide-and-isolate)
- [Krāsot elementus pēc īpašības](topic:color-by-property)

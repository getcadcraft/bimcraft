---
title: Krāsot materiālus uz sienām, grīdām un jumtiem
summary: Piešķiriet elementiem materiālu, piemēram, ķieģeli, apšuvumu, šindeļus, koku vai flīzes, visam elementam vai vienai tā pusei; tas tiek saglabāts IFC un rādīts renderētos attēlos.
keywords: krāsot, krāsošana, materiāls, materiāli, apdare, apdares, tekstūra, ķieģelis, apšuvums, šindeļi, koks, akmens, flīzes, betons, apmetums, zāle, grants, stikls, metāls, sienas puse, iekšpuse, ārpuse, grīdas apdare, telpa, virsmas stils
from: fbfed676
---

{{ui:Krāsot}} rīkjoslā atver materiālu bibliotēku virs 3D skata: ķieģeļi un bloki, apšuvums, jumta segums, koks, akmens, flīzes, betons, apmetums, zeme, stikls un metāls.

## Krāsot elementus

1. Noklikšķiniet uz {{ui:Krāsot}}.
2. Noklikšķiniet uz materiāla.
3. Noklikšķiniet uz elementiem 3D skatā. Katrs klikšķis nokrāso elementu, uz kura noklikšķiniet.

Lai nokrāsotu daudzus uzreiz, vispirms atlasiet tos (noklikšķiniet, {{key:Ctrl}}+klikšķis vai [meklēšana](topic:find)), tad noklikšķiniet uz materiāla: katrs atlasītais elements to saņem vienā solī.

Elements uzreiz 3D skatā rāda materiāla krāsu. Tā tekstūra parādās [renderētā attēlā](topic:render). {{key:Esc}} vai {{ui:Aizvērt}} beidz krāsošanu.

## Krāsot vienu pusi

Izvēlieties {{ui:Tikai noklikšķinātā puse}} un tad noklikšķiniet uz vēlamās puses: sienas ārpusi apšuvumā un tās iekšpusi citā apdarē, grīdas augšējo pusi kokā, bet apakšējo atstājot, kāda tā bija. Pārējais elements saglabā savu materiālu.

Puse tiek atrasta pēc paša elementa virzieniem, tāpēc tā paliek tā pati puse, kad elementu pārvietojat vai pagriežat.

Lai krāsotu grīdas telpu pēc telpas, piešķiriet katrai telpai savu grīdu ({{ui:Zīmēšana}} › {{ui:Grīda}} › **Šī telpa**, skatiet [Telpas, grīdas, griesti un jumti](topic:floors-and-roofs)), tad nokrāsojiet katras grīdas augšējo pusi.

## Noņemt materiālu

Noklikšķiniet uz svītrainā paraugs ({{ui:Bez materiāla}}), tad noklikšķiniet uz elementa. Viss materiāls uz tā, ieskaitot puses, tiek noņemts.

## Failā

Krāsošana maina IFC (katrs solis ir viens; {{key:Ctrl+Z}} to atsauc), un tā paliek vienkāršs IFC:

- katram nokrāsotajam elementam tiek piešķirta rekvizītu kopa `CadCraft_Render`, kas nosauc tā materiālu, un viens rekvizīts katrai nokrāsotajai pusei;
- tā ķermenim tiek piešķirts virsmas stils ar materiāla krāsu, tāpēc citas BIM programmas rāda krāsu. IFC4 stilā nosaukta arī tekstūra.

Kad BimCraft pārveido nokrāsotu sienu (piemēram, jūs pārvietojat tās galu), siena saglabā savu materiālu un krāsu BimCraft, attēlos un citās programmās.

:::note
Tekstūras zīmē pati BimCraft: tās darbojas bezsaistē un ir brīvi lietojamas jebkam (CC0). Jūsu pašu attēlu tekstūras vēl nav izveidotas.
:::

## Tekstūras 3D skatā

Nokrāsota ķieģeļu siena rāda savus ķieģeļus, koka grīda savus dēļus, reālajā izmērā, tiklīdz krāsa ir uzklāta. Noņemiet atzīmi no **Rādīt tekstūras 3D skatā** krāsošanas panelī, lai redzētu vienkāršas krāsas (ļoti liels modelis tās automātiski izslēdz un par to paziņo). Krāsa pēc rekvizīta vienmēr rāda savas krāsas. Tekstūras zīmē programma, tāpēc nekas netiek lejupielādēts, un renderi un glTF fails tās satur jebkurā gadījumā.

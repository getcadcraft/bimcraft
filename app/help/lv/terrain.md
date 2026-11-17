---
title: Zemes reljefs, ēkas pamatplatne un segumi
summary: Ievietojiet zemi modelī no uzmērījuma punktiem, horizontālēm, LAS / LAZ skenējuma, GeoTIFF, LandXML virsmas (CivilCraft) vai dažām punktveida augstuma vērtībām; iegrieziet mājas ēkas pamatplatni ar tās nogāzēm un izrakumu / uzbērumu; novietojiet piebraucamos ceļus, celiņus un terases uz tās; nododiet to CivilCraft kā LandXML.
keywords: reljefs, zeme, vieta, topogrāfija, uzmērījums, punkti, PNEZD, horizontāles, LAS, LAZ, LiDAR, GeoTIFF, DEM, augstums, punktveida augstums, nivelējums, vertikālā plānošana, pamatplatne, ēkas pamatplatne, izrakums, uzbērums, zemes darbi, izrakuma robeža, nogāze, piebraucamais ceļš, celiņš, terase, segums, LandXML, CivilCraft
from: 208298d6
---

## Ko jūs darīsiet

Novietojiet māju uz tās vietas. Zeme kļūst par modeļa daļu: tā tiek rādīta 3D režīmā, griezumos un fasādēs, un plānā ir redzamas horizontāles. Zem mājas tiek izgriezta ēkas pamatplatne, piebraucamie ceļi un celiņi seko zemes reljefam, un pamati nolaižas kopā ar to.

## Ievietojiet zemi

1. Atveriet {{ui:Būvējums}} un izvēlieties {{ui:Reljefs}}.
2. Vai nu:
   - **Atvērt uzmērījuma failu…**: uzmērījuma punkti (PNEZD, PENZD vai vienkārši X, Y, augstums; atdalīti ar komatu, tabulēciju vai atstarpi), horizontāles DXF vai DWG formātā (polilīnijas savā augstumā, 3D polilīnijas), LAS vai LAZ skenējums (zemes punkti tiek saglabāti, retināti līdz aptuveni vienam uz kvadrātmetru), GeoTIFF vai ASCII augstumu režģis, vai **LandXML** virsma, piemēram, ko eksportē CivilCraft (tās paša punkti un trijstūri tiek saglabāti; ja failā ir vairākas virsmas, BimCraft pajautā, kura ir zeme; tās mērvienības nāk no faila). Vispirms izvēlieties faila mērvienības (LandXML norāda savas).
   - Vai ierakstiet **Punktveida augstums** (no šī līmeņa grīdas, tātad `-1'` ir par vienu pēdu zemāk) un noklikšķiniet punktus plānā, mainiet augstumu un noklikšķiniet vēl, pēc tam nospiediet **Izveidot zemi**. Sākumam pietiek ar trim punktiem.

Uzmērījuma koordinātas, kas atrodas tālu no modeļa (valsts plakne, UTM), tiek pārvietotas uz māju, un augstumi tiek iestatīti tā, lai zeme pie mājas būtu aptuveni 8" zem pirmā stāva. **Paaugstināt zemi** sadaļā **Rekvizīti** to var labot par jebkuru vērtību.

## Ēkas pamatplatne

1. Izvēlieties {{ui:Ēkas pamatplatne}}.
2. Iestatiet **Robežu** ap māju, cik tālu **pamatplatne atrodas zem grīdas** (8" zem plātnes, vairāk zem tukšas telpas zem grīdas) un **Nogāzes** līdz esošajai zemei (`2:1` = divas pēdas uz āru katrai pēdai uz augšu vai uz leju).
3. Noklikšķiniet mājas iekšpusē.

Zeme zem mājas un līdz robežai tiek noplakināta, pēc tam nogāzes paceļas kalna pusē (izrakums) un nolaižas zemākajā pusē (uzbērums), līdz sastopas ar esošo zemi. Zemes un pamatplatnes **Rekvizīti** rāda izrakuma un uzbēruma tilpumus. Ja pārvietojat sienas, pamatplatne seko tām.

## Piebraucamie ceļi, celiņi un terases

Izvēlieties {{ui:Segumi}}, atlasiet **Celiņš**, **Piebraucamais ceļš** vai **Terase** un noklikšķiniet stūrus. Lai pabeigtu, vēlreiz noklikšķiniet pirmo stūri, veiciet dubultklikšķi vai nospiediet {{key:Enter}}. Segums seko gatavajam reljefam; tā veidu vai biezumu mainiet sadaļā **Rekvizīti**.

## Pamati seko reljefam

Kad zeme ir modelī, balstsienas un šķērstelpas pamati seko tai: gar katru sienu pamats paliek savā dziļumā zem ārpuses zemes, pakāpeniski soļojot pa veseliem 8" soļiem tur, kur zeme krītas (skatiet [Pamati zem sienām](topic:foundations)).

## Nododiet CivilCraft

**LandXML CivilCraft vajadzībām** (reljefa rindā vai zemes **Rekvizīti**) lejupielādē esošo zemi un gatavo reljefu kā LandXML failu. Atveriet to CivilCraft īstai reljefa veidošanai, drenāžai un zemes darbiem.

## Noderīgi zināt

- Zemei nepieciešams IFC4 modelis, tāpat kā katram jaunam būvējumam.
- Horizontāles tiek rādītas zemes līmeņa plānā ar intervālu, kas iestatīts zemes **Rekvizīti**; katra piektā ir treknāka.
- Zeme tiek saglabāta kā IFC reljefa elements (slēgta trijstūru virsma, lai griezumi to var nogriezt); pamatplatne un segumi tiek saglabāti kopā ar to. Lai sāktu no jauna, dzēsiet zemi: tās pamatplatne un segumi tiek dzēsti kopā ar to.

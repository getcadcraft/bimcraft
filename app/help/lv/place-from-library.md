---
title: Novietot aprīkojumu un mēbeles no bibliotēkas
summary: Atrodiet vienumu bibliotēkā, failā vai atvērtajā rasējumā, novietojiet to IFC modeļa stāvā ar caurspīdīgu priekšskatījumu, pagrieziet, piesaistiet sienai un saglabājiet.
keywords: pārvietot, pagriezt, vilkt, bibliotēka, librarycraft, novietot, ievietot, aprīkojums, mēbeles, bloks, ģimene, vienums, katalogs, saturs, kcl, csv, gltf, obj, rfa, dwg, ifc tips
from: 3dad5d4b
---

## Ko jūs darīsiet

Ievietojiet bibliotēkas vienumu IFC modelī: izlietni, darba galdu, krēslu. BimCraft to ieraksta kā pareizu IFC elementu ar tipu, tāpēc katra šā paša vienuma kopija kopīgi izmanto vienu ģeometrijas kopu, un tā dati, vienuma numurs un licence pārvietojas kopā ar to.

## Soļi

1. Atveriet IFC modeli.
2. Noklikšķiniet cilni {{ui:Bibliotēka}} blakus {{ui:Rekvizīti}} labajā pusē vai {{ui:Bibliotēka}} rīkjoslā virs modeļa.
3. Izvēlieties avotu:
   - **Iebūvētie simboli**: vispārīgi santehnikas plāna simboli, kas iekļauti BimCraft ar Apache-2.0 licenci, pieejami bezsaistē. Pārbaudiet to izmērus pirms būvniecības. Elektrisko plāna simbolu un IFC elektroierīču gadījumā izmantojiet **Būvējums › Elektroinstalācija**.
   - **Bibliotēka**: CadCraft bibliotēka šajā vietnē. Publiskiem vienumiem pierakstīšanās nav vajadzīga.
   - **Šis fails**: atvērta DWG vai DXF rasējuma bloki. Dinamisks bloks ar redzamības stāvokļiem tiek piedāvāts katram stāvoklim atsevišķi, nosaukts "Izlietne: Divas kausas", katrs uzzīmēts tikai ar šā stāvokļa objektiem.
   - **Faili…**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA vai CSV fails jūsu datorā. To nolasa šajā cilnē; nekas netiek augšupielādēts.
   - **Citas plūsmas**: cita bibliotēka, kas runā tādā pašā plūsmas formātā. Pievienojiet tās adresi vienreiz; tā tiek saglabāta šajā pārlūkprogrammā.
4. Meklējiet vai izvēlieties kategoriju un noklikšķiniet uz kartītes. Kartītē redzams plāna priekšskatījums, nosaukums, ražotājs un modelis, licence un versija.
5. Noklikšķiniet {{ui:Novietot plānā}} (plāna skatā) vai {{ui:Novietot modelī}} (3D skatā). Skatā {{ui:Sadalīt}}, kur redzami gan plāns, gan 3D skats, poga ir dalīta poga: tās galvenā darbība ir {{ui:Novietot plānā}}, bet bultiņa tās labajā galā atver izvēlni ar {{ui:Novietot modelī}}. Vai velciet kartīti vai attēlu vienuma informācijā uz plāna vai 3D skata: vienums tiek novietots tur, kur to atlaižat. Ar pildspalvu vai pirkstu nospiediet un turiet kartīti mirkli, tad velciet.
6. Izvēlieties stāvu novietošanas joslā. 3D skatā stāvi virs tā tiek paslēpti, kamēr novietojat, un skats pagriežas uz augšu; plānā plāns jau rāda šo stāvu. Ja no plāna izvēlaties {{ui:Novietot modelī}}, 3D skats parādās līdzās tam.
7. Pārvietojiet rādītāju pār modeli: caurspīdīga kaste rāda, kur vienums nonāks.
8. Nospiediet {{key:R}}, lai to pagrieztu par 90°. Nospiediet {{key:Tab}} (vai {{ui:Piesaistīt sienai}}), lai tā aizmugure atrastos pie tuvākās sienas, pret telpu.
9. Noklikšķiniet, lai novietotu. Vai ierakstiet pozīciju laukā **X, Y (mm)**, piemēram `1200, 3400`, un nospiediet {{key:Enter}}.

Gaismu vai citu no augšas piekarinātu vienumu iestatiet **Stiprinājums** uz **Pie griestiem**. Tad vienuma augša atrodas zem griestiem virs šīs vietas (vai līmeņa augstumā, ja griestu nav). Ja plāna skatā ir griestu plāns, **Stiprinājums** sākotnēji ir **Pie griestiem**.

10. Atbildiet uz vienu jautājumu: **vienuma numurs** (aizpildīts nākamais brīvais numurs), daudzums un piezīme. Nospiediet {{key:Enter}}.
11. Novietojiet vēl vai nospiediet {{key:Esc}}, lai apturētu.
12. Noklikšķiniet {{ui:Saglabāt kā IFC}}, lai lejupielādētu rediģēto kopiju.

## Plāns vai modelis

Bibliotēkas novietošanas poga seko skatam, kurā atrodaties, un mainās, tiklīdz maināt skatu ({{ui:Plāns}}, {{ui:Sadalīt}} un {{ui:3D}} pogas, taustiņi, faila atvēršana). Plāns rāda vienu pogu, {{ui:Novietot plānā}}; 3D rāda vienu pogu, {{ui:Novietot modelī}}; Sadalīt rāda dalīto pogu ar {{ui:Novietot plānā}} kā galveno darbību un {{ui:Novietot modelī}} tās izvēlnē. Abi veidi izmanto to pašu novietošanas joslu un ieraksta to pašu IFC elementu: rādītājs darbojas plāna skatā vienam un 3D skatā otram. Nospiediet {{key:Esc}} jebkurā brīdī, lai apturētu.

Kartītes vilkšanai nav savas taustiņu kombinācijas: dalītā poga vai parastā poga dara to pašu ar tastatūru.

## Novietota vienuma pārvietošana vai pagriešana

Izvēlieties vienumu plānā {{ui:Zīmēšana}} režīmā. Tā ievietošanas punktā parādās kvadrātveida rokturis un blakus apaļš rokturis.

- Velciet vienumu vai tā kvadrātveida rokturi, lai to pārvietotu. Tas piesaistās kā sienu rīkā (sienu galiem un virsmām); {{key:Shift}} tur to taisnu pret tā iepriekšējo vietu.
- Velciet apaļo rokturi, lai pagrieztu to soļos pa 15°. Turiet {{key:Shift}} 1° soļiem.
- Nospiediet {{key:R}}, lai pagrieztu to par 90°.
- **Rekvizītos** (arī 3D skatā) ierakstiet **X**, **Y** un **Pagrieziens (°)**, vai noklikšķiniet **Pagriezt par 90°**.

Katra pārvietošana ir viens atsaukšanas solis un tiek pārraidīta Live TeamWork. Vienums saglabā savu vienuma numuru, bibliotēkas datus un augstumu virs līmeņa. Vēl nav izveidots: vilkšana 3D skatā.

## Ko jūs redzēsiet

- Vienums modelī, atlasīts, ar rekvizītiem labajā pusē: lodziņš **Bibliotēkas vienums** ar tā licenci un autorību, un kopas `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` un, vienumiem no atzīmētiem rasējumiem, `CadCraft_SourceAttributes`.
- "Novietots: *vienums* (vienums *n*)" izmaiņu sarakstā. {{key:Mod+Z}} to atsauc.
- Statusa rindā: "Novietots *vienums* kā vienums *n*."

## Labi zināt

- Daži vienumi ir vairākos izmēros vai variantos: kartītei tad ir **Variants** izvēle, un novietots tiek tas, ko izvēlaties. Skatiet [Novietot un nomainīt bibliotēkas vienumu, kuram ir varianti](topic:library-variants).
- Vienums bez 3D korpusa (2D simbols) tiek novietots ar vietturi-kasti; jums tiek jautāts tā augstums.
- Vairāk tādu pašu: izvēlieties novietotu vienumu un izmantojiet {{ui:Kopēt}} un {{ui:Ielīmēt}} vai {{key:Mod+D}}. Skatiet [Bibliotēkas vienumu kopēšana, ielīmēšana un dublēšana](topic:copy-paste).
- Lai ikvienu novietošanu sāktu ar piesaisti sienai, ieslēdziet **Sākt ar piesaisti sienai** [BimCraft iestatījumos](topic:settings).
- Garumi tiek pārvērsti modeļa pašu mērvienībās neatkarīgi no tā, kādas tās ir.
- **Entourage** (koki, krūmi, cilvēki, automašīnas) arī ir bibliotēkā: meklējiet "tree", "person" vai "car". Tos zīmē CadCraft (CC0), un novietojot tie saglabā savas krāsas (stumbrs brūns, lapas zaļas, automašīnas logi caurspīdīgi) BimCraft un citās BIM programmās. Tie redzami [renderētos attēlos](topic:render).
- IFC2X3 failā ķermenis tiek ierakstīts kā sakārtots cietais ķermenis; IFC4 — kā trijstūrveida virsmu kopa. Abi atveras citos IFC rīkos.
- Rasējumu (DWG vai DXF) šeit nevar saglabāt, tāpēc vienumi tiek novietoti tikai IFC modeļos. Izmantojiet **Šis fails** rasējumā, lai redzētu, kas kļūtu par tā blokiem.

## Vienumi jūsu valodā

Vienumam var būt nosaukums, apraksts un tips citās valodās. Ja tie ir valodā, uz kuru BimCraft iestatīts (Iestatījumi › Vispārīgi › Valoda), vienuma lapā tie tiek rādīti, un zem tiem — nosaukums, ko tam devis ražotājs; **Novietot** ieraksta nosaukumu jūsu valodā modelī, tāpēc {{ui:Aprīkojums}} specifikācija to uzskaita tā. Vienums paliek tas pats vienums: atjauninājumu pārbaude un nomaiņa notiek pēc paša vienuma, nekad pēc nosaukuma. Vienumi bez tulkojuma saglabā savus vārdus.

## Biežākās kļūdas

- **Novietošanas poga trūkst.** Nav atvērts IFC modelis. Vispirms atveriet to.
- **Caurspīdīgais priekšskatījums neseko rādītājam.** Rādītājs ir ārpus modeļa apgabala vai stāva plakne nav redzama. Noklikšķiniet {{ui:Augša}}.
- **{{ui:Piesaistīt sienai}} saka, ka sienu nav.** Stāvā IFC failā nav sienu (dažos eksportos sienas ir citā stāvā). Izvēlieties šo stāvu vai ierakstiet X un Y.
- **Faila vienumi ir nepareizā izmērā.** Failam nav mērvienību vai tās ir nepareizas. Lodziņā {{ui:Faili…}} izvēlieties mērvienības un nolasiet to vēlreiz.

:::tip
Ja vienu un to pašu vienumu novietojat divreiz, tiek izmantots viens IFC tips, tāpēc modelis ar četrdesmit krēsliem uzglabā krēslu tikai vienreiz.
:::

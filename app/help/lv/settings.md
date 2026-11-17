---
title: BimCraft iestatījumi
summary: Izvēlieties, vai rādīt telpas un zonas, vai zīmēt malas un kādā skatā atvērt modeli, kā arī sākt novietošanu ar ieslēgtu sienu piesaisti.
keywords: iestatījumi, izvēles, opcijas, telpas, zonas, ifcspace, malas, līnijas, veiktspēja, liels modelis, atvēršanas skats, kamera, skats no augšas, sienu piesaiste, piesaistīšana
from: 4416e64f
---

Atveriet {{ui:Iestatījumi}} ar zobrata ikonu lietotnes joslā vai ar {{key:Mod+,}}. Pirmajā cilnē, {{ui:BimCraft}}, ir iestatījumi, kas pieder šai lietotnei; {{ui:Vispārīgi}} satur tos, ko visas CadCraft lietotnes izmanto kopīgi (motīvs, rīkjosla, paneļi). BimCraft iestatījumi pastāv tikai lietotnē: jūs tos mainiet šeit, un šī pārlūkprogramma tos atceras. {{ui:Atiestatīt BimCraft iestatījumus}} dialoga apakšā atjauno tos un kopīgos iestatījumus sākotnējā stāvoklī.

## Izvēlnes, taustiņi un pele

Izvēlnes stils (BimCraft pašu rīkjosla, mājas dizaina izvēlņu josla, BIM lente vai rasēšanas komandrinda), jūsu pašu taustiņi un izvēlnes, kā arī tas, ko dara ritenītis un peles pogas. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).

## Kad modelis tiek atvērts

- **Rādīt telpas un zonas** (sākumā izslēgts): telpas un zonas ir caurspīdīgas kastes, kas var paslēpt aiz tām esošās sienas, tāpēc sākumā tās ir paslēptas. Poga {{ui:Telpas}} virs modeļa joprojām ieslēdz un izslēdz tās atvērtajam modelim.
- **Malas**: {{ui:Malas ieslēgtas}} (sākumā) zīmē malu līnijas, kas piešķir rasējuma izskatu. {{ui:Tikai mazi modeļi}} zīmē tās tikai modeļiem ar mazāk nekā 300,000 trijstūriem, kas ļauj lielus modeļus pārslēgt ātrāk. {{ui:Malas izslēgtas}} katru modeli atver bez malām. Poga {{ui:Malas}} joprojām pārslēdz tās atvērtajam modelim. Virs 1.5 miljoniem trijstūru malas vienmēr ir izslēgtas.

## Rasējumi tiek atvērti

Kā DWG vai DXF rasējums sākumā tiek rādīts: {{ui:3D (ātrākais)}} (sākumā) zīmē pat lielu rasējumu ātri, vai {{ui:Modelis (2D)}} atver plakano modeļa telpas skatu. Cilnes virs rasējuma jebkurā brīdī pārslēdz starp {{ui:Modelis}}, lapām un {{ui:3D}}. Rasējums, kurā modeļa telpā nekā nav, vai pārlūkprogramma, kas nevar rādīt 3D, vienmēr tiek atvērts 2D.

## Atvēršanas skats

Kamera, ar kuru modelis tiek atvērts: {{ui:Pielāgot}} (sākumā, viss modelis no stūra), {{ui:Augša}}, {{ui:Priekšpuse}} vai {{ui:Sāns}}. Pogas virs modeļa jebkurā brīdī maina skatu.

**Ēka, pagriezta zemesgabalā**: daudzi modeļi tiek saņemti ar ēku leņķī pret faila asīm (uzmērījuma vai kopīgās koordinātēs). {{ui:Taisni attiecībā pret ēku}} (sākumā) rāda šādu ēku taisni: {{ui:Pielāgot}}, {{ui:Augša}}, {{ui:Priekšpuse}}, {{ui:Sāns}}, skata kuba sejas un katrs jauns griezums seko tās sienām, un skata kuba kompass joprojām rāda uz modeļa ziemeļiem. {{ui:Kā novietota zemesgabalā}} saglabā faila asis. Ēka, kuras sienas iet pa asīm, izskatās vienādi abos gadījumos.

## Bibliotēkas vienumu novietošana

**Sākt ar ieslēgtu sienu piesaisti** (sākumā izslēgts): kad sākas bibliotēkas vienuma novietošana vai ielīmēšana, tā aizmugure piesaistās tuvākajai sienai, vērsta pret telpu. {{key:Tab}} vai {{ui:Piesaistīt sienai}} novietošanas joslā to uz brīdi izslēdz. Stāvs bez sienām sākas bez tās.

## Griezuma kaste

{{ui:Rezerve ap atlasi}} ir, cik daudz vietas {{ui:Griezuma kaste ap atlasi}} atstāj katrā pusē atlasītajiem elementiem, milimetros: sākumā 300, līdz 5000. Skatiet [Griezt IFC modeli ar griezuma plakni](topic:section-plane).

## Atrašanās vieta

{{ui:Platums un garums sistēmā}} izvēlas sistēmu, kādā {{ui:Mērīt}} › {{ui:Atrašanās vieta}} rāda platumu un garumu: WGS 84 (EPSG:4326, sākumā, kā to izmanto GPS un tīmekļa kartes), {{ui:Faila pašu datums}} vai viena no ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 un CGCS2000. Faila pašu kartes sistēma un datums vienmēr tiek rādīti arī. Skatiet [Mērīt attālumus, virsmu laukumus un atrašanās vietas 3D](topic:measure).

## Stūra indikators

Kas atrodas 3D skatu apakšējā labajā stūrī (IFC modelis un rasējums, pārslēgts uz 3D): {{ui:Skata kubs}} (sākumā), {{ui:Asu ikona}} (mazs X, Y un Z) vai {{ui:Nav}}. Izmaiņa notiek uzreiz. 2D rasējuma skats nekad nerāda nevienu.

Uz skata kuba noklikšķiniet uz sejas, malas vai stūra, lai skatītos no tās puses, velciet kubu, lai orbītu, velciet gredzenu, lai pagrieztos, un noklikšķiniet uz mājiņas, lai atgrieztos sākuma skatā.

## Jūsu vārds problēmās

Pierakstījoties, problēmās ir jūsu konta vārds, un BimCraft neprasa neko: šī daļa rāda {{ui:No jūsu konta (<name>)}}. {{ui:Izmantot citu vārdu}} atver lodziņu citam vārdam, kas ir spēkā, līdz izvēlaties {{ui:Izmantot sava konta vārdu}}. Ja neesat pierakstījies, problēmas veidlapa prasa vārdu kā līdz šim. Skatiet [Problēmas un BCF faili](topic:issues-bcf).

## Asistenti

**Ļaut MI asistentiem un skriptiem izmantot BimCraft** (sākumā izslēgts) ļauj asistentam jūsu datorā piekļūt atvērtajam modelim caur CadCraft Studio: **Lasīt** atrod elementus un nolasa to īpašības, **Mainīt skatu** izolē, paslēpj un rāda tos. **Aktivitāte** uzskaita tā izsaukumus. Skatiet [Ļaut MI asistentam strādāt ar jūsu modeli](topic:assistants).

:::note
Pārējie iestatījumi piemērojas, kad modelis tiek atvērts vai sākas novietošana. Modelis, kas jau ir atvērts, saglabā savu izskatu, līdz izmantojat rīkjoslas pogas vai atverat to vēlreiz.
:::

## Saistītie

- [Kopēt, ielīmēt un dublēt bibliotēkas vienumus](topic:copy-paste)
- [Novietot aprīkojumu un mēbeles no bibliotēkas](topic:place-from-library)
- [BimCraft ekrāns](topic:workspace)
- [Ļaut MI asistentam strādāt ar jūsu modeli](topic:assistants)

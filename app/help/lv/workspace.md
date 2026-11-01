---
title: BimCraft ekrāns
summary: Ekskursija pa katru joslu, paneli un pogu pēc to ekrāna nosaukuma un tas, kā ekrāns mainās katram failu veidam.
keywords: ekrāns, izkārtojums, paneļi, rīkjosla, saskarne, ui, ekskursija, rekvizītu panelis, pārlūkprogramma, lietotnes josla
from: 2eb01ec2
---

BimCraft ekrānam ir josla augšā un trīs apgabali zem tās: panelis pa kreisi, skatuve vidū un {{ui:Rekvizīti}} panelis pa labi. Kas parādās katrā apgabalā, atkarīgs no tā, ko atvērāt: IFC modeli, projekta vai ģimenes failu, rasējumu vai mapi.

## Lietotnes josla

Plāna josla augšā pieder CadCraft vietnei, nevis pašam BimCraft. No kreisās uz labo:

- CadCraft zīme: ved uz CadCraft sākumlapu.
- Lietotnes nosaukums un versijas izvēlne. Iekšējā versijā tā rāda, kuru versiju palaižat, un ļauj pārslēgties uz izlaistu versiju.
- {{ui:Par BimCraft}}: lietotnes lapa vietnē.
- {{ui:Iestatījumi}}: BimCraft paša iestatījumi un tie, ko koplieto visas lietotnes. Skatiet [BimCraft iestatījumi](topic:settings).
- {{ui:Pilnekrāns}}: pārslēdz ekrāna režīmus. Skatiet [Ekrāna režīmi](topic:workspace#screen-modes) zemāk.
- {{ui:Papīrs}} un {{ui:Modelis}}: gaišā un tumšā tēma. 3D skats un 2D rasējumi seko izvēlētajai tēmai.

## Kreisais panelis

Kreisais panelis vienmēr sākas ar **Atvērt failu vai mapi**:

- Nomešanas apgabals, {{ui:Izvēlieties failu vai ievelciet šeit failu vai mapi}}. Noklikšķiniet, lai izvēlētos vienu failu, vai ievelciet failu vai mapi uz tā (vai jebkur lapā).
- {{ui:Atvērt mapi}}: izvēlieties visu projekta mapi. Skatiet [Atvērt visu projekta mapi](topic:open-project-folder).
- {{ui:Pēdējās mapes}}: parādās Chrome un Edge pēc tam, kad atvērāt mapi ar mapes izvēlni vai ievelkot to. Noklikšķiniet uz {{ui:Atkārtoti atvērt}} un mapes nosaukuma, lai to atkal atvērtu, vai uz mazā × , lai to aizmirstu.

Zem tā sadaļas parādās, kad tās attiecas uz jūsu darbu:

| Sadaļa | Kad tā rādās | Kas tajā ir |
|---|---|---|
| {{ui:Izmaiņas}} | Ir atvērts IFC modelis | Jūsu nesaglabātās izmaiņas, jaunākās augšā, ar {{ui:Atsaukt}} un {{ui:Saglabāt kā IFC}} |
| {{ui:Fails}} | Ir atvērts modelis vai failu kartīte | Fakti par failu: izmērs, shēma vai versija, projekts, autors, elementu skaits |
| {{ui:Rasējums}} | Ir atvērts DWG vai DXF | Formāts, mērvienības, entītiju un slāņu skaits, lapas, saistītie rasējumi, aprīkojums |
| {{ui:Mape}} | Ir atvērta mape | Failu un modeļu skaits, izmērs, atrastās problēmas |
| {{ui:Atpakaļ uz mapi}} | Jūs atvērāt failu no mapes | Atgriežas mapes pārskatā |
| {{ui:Slāņi}} | Ir atvērts rasējums | Izvēles rūtiņa katram slānim, ar {{ui:Visi ieslēgti}} un {{ui:Visi izslēgti}} |
| {{ui:Stāvi}} | Ir atvērts IFC modelis | Izvēles rūtiņa katram stāvam, augstākais stāvs pirmais |
| {{ui:Elementi}} | Ir atvērts IFC modelis | Cik elementu katra veida modelis satur (30 biežākie) |

## Skatuve

Ekrāna vidus rāda atvērto failu.

- **Tukšs**: "Atveriet ēkas modeli." ar {{ui:Izvēlēties failu}} un {{ui:Atvērt mapi}}, un īsu katra formāta aprakstu.
- **IFC modelis**: 3D skats ar rīkjoslu tā augšā nosauktās grupās, kā CadCraft zīmēšanas lietotnē. Katra rīka ikona ir virs tā nosaukuma: {{ui:Skats}} ({{ui:Pielāgot}}, {{ui:Augša}}, {{ui:Priekšpuse}}, {{ui:Sāns}}, {{ui:Malas}}, {{ui:Telpas}}); {{ui:Rediģēt}} ({{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}}, {{ui:Ielīmēt}} un {{ui:Vairāk}}, skatiet [Kopēt, ielīmēt un dublēt bibliotēkas vienumus](topic:copy-paste)); {{ui:Modelis}} ({{ui:Mērvienības}} un {{ui:Zīmēšana}}); {{ui:Bibliotēka}} ({{ui:Bibliotēka}}, {{ui:Aprīkojums}}, {{ui:Atjauninājumi}}, {{ui:Pateicības}}); {{ui:Pārskats}} ({{ui:Rādīt}}, {{ui:Griezums}}, {{ui:Staigāt}}, {{ui:Mērīt}}; skatiet [Griezt IFC modeli ar griezuma plakni](topic:section-plane)); un {{ui:Izvade}} (renderēšana, tiešraides skats, VR, eksporti, krāsošana un saglabātie skati). Kad {{ui:Zīmēšana}} ir ieslēgta, zem tās esošā Zīmēšanas josla izskatās tāpat: {{ui:Skats}} (līmenis un plāna veids), {{ui:Zīmēšana}}, {{ui:Rediģēt}} un {{ui:Bibliotēka}}. Skata kubs atrodas apakšējā labajā stūrī. Skatiet [Atvērt IFC modeli un apskatīt to 3D](topic:open-ifc-model). {{ui:Iestatījumi}}, {{ui:Vispārīgi}} izvēlas, vai pogās rādīt ikonas, nosaukumus vai abus, un rāda vai slēpj grupu nosaukumus. Ar peles labo pogu noklikšķiniet uz rīkjoslas, lai sakārtotu tās rīkus un grupas. Īsā logā rīkjosla noņem nosaukumus zem ikonām.
- **Projekta vai ģimenes fails**: faila kartīte ar priekšskatījuma attēlu, projekta informāciju un saistītajiem failiem. Skatiet [Lasīt projekta vai ģimenes failu](topic:read-rvt-file).
- **DWG vai DXF**: cilņu rinda ({{ui:Modelis}}, tad viena katrai lapai, tad {{ui:Aprīkojums}}, kad rasējumā ir marķēts aprīkojums, {{ui:3D}}, {{ui:Pielāgot}} un {{ui:Drukas skats}}), rasējums un tiešraides X un Y koordinātas stūrī. Skatiet [Skatīt DWG vai DXF rasējumu](topic:view-dwg) un [Skatīt DWG vai DXF rasējumu 3D](topic:dwg-in-3d).
- **Mape**: mapes pārskats ar lodziņu {{ui:Sāciet šeit}} un tabulām ar modeļiem, saitēm, IFC modeļiem un rasējumiem. Skatiet [Atvērt visu projekta mapi](topic:open-project-folder).

**Statusa rinda** skatuves apakšā parāda, ko BimCraft dara ("Modeļa lasīšana…", "Ģeometrijas veidošana: 1200 no 5400 elementiem"). Ja kaut kas neizdodas, sarkanā krāsā parādās, kas nogāja greizi. Ziņas par veiksmi pēc dažām sekundēm nodziest.

## Rekvizītu panelis

Labajā panelī rāda:

- IFC modelim: elementu, uz kura noklikšķinājāt, ar tā nosaukumu, tipu, marķējumu, GlobalId un katru īpašību kopu. Vērtības, ko varat mainīt, izskatās kā pogas. Skatiet [Rekvizītu paneļa lauki](topic:properties-panel).
- Rasējumam: kā pārvietoties, rasējuma saistītos rasējumus un attēlus un to, vai katrs tika atrasts, kā arī sarakstu ar to, kas vēl nav uzzīmēts: **Vēl nav uzzīmēts**.
- Faila kartītei vai mapei: īsu piezīmi par to, ko atvērt tālāk.

## Mazs ekrāns

Kad logs ir šaurāks par klēpjdatora ekrānu, BimCraft sakārto savus apgabalus kolonnā: skatuve augšā, paneļi zem tās. Ritiniet lapu, lai sasniegtu paneļus. Tālrunī tie veido vienu kolonnu, planšetdatorā – divas.

## Ekrāna režīmi

Poga {{ui:Pilnekrāns}} lietotnes joslā vai {{key:Ctrl+Shift+F}} visās platformās pārslēdz trīs režīmus:

1. Parastais.
2. Pilnekrāns, ar joslām, kas joprojām redzamas.
3. Pilnekrāns ar paslēptu lietotnes joslu. Pārvietojiet kursoru uz augšējo malu vai pieskarieties tur, lai to atgrieztu.

Nospiediet {{key:Esc}}, lai atgrieztos parastajā režīmā. Pārlūkprogrammas bez pilnekrāna atbalsta (piemēram, iPhone) pārslēdzas tikai starp parasto un paslēptu joslu režīmu.

## Saistīts

- [Taustiņi un pele](topic:keyboard)
- [Faili, ko BimCraft atver un saglabā](topic:files)

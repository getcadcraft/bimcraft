---
title: Elektriskais plāns
summary: Novietojiet plānā rozetes, slēdžus, gaismekļus, sensorus, savienojuma kārbas un sadalnes ar tiem pašiem simboliem kā CadCraft Electrical papildinājumā, saistiet slēdžus ar gaismekļiem, ko tie ieslēdz, un uzskaitiet ierīces un ķēdes specifikācijās.
keywords: elektriskais, elektriskais plāns, rozete, kontaktligzda, dubultā, slēdzis, trīsvirzienu, regulators, gaismeklis, griestu gaismeklis, iebūvēts gaismeklis, lejupgaismeklis, kustības sensors, savienojuma kārba, sadalne, sadales skapis, ķēde, slodze, vati, ampēri, slēdža vads, ierīču specifikācija, sadalnes specifikācija
from: f7de1947
---

## Ko jūs darīsiet

Zīmējiet ēkas elektrisko plānu modelī: rozetes, slēdžus un sadalnes uz sienām, gaismekļus un sensorus uz griestiem. Katra ierīce ir īsts elektriskais elements IFC failā ar savu marķējumu, ķēdi un slodzi, un slēdži atceras gaismekļus, ko tie ieslēdz.

## Ierīču novietošana

1. Līmenī atveriet {{ui:Build}} un izvēlieties {{ui:Electrical}}.
2. Izvēlieties ierīci: rozetes (strāva, dati, tālrunis, audio-video), slēdži un sensori (arī termostats un taimeris), gaismekļi, detektori un signalizācijas, savienojuma kārba, sadalne vai apakšsadalne.
3. Ierakstiet **Ķēde**, ja to zināt (jebkurš nosaukums: 1, 2, A-3). Atstājiet **Montāžas augstums** tukšu, lai izmantotu šīs ierīces parasto augstumu.
4. Noklikšķiniet uz plāna. Rozetes, slēdži un sadalnes tiek novietotas uz tuvākās sienas virsmas, vērstas telpas iekšpusē; gaismekļi, sensori un savienojuma kārbas tiek novietotas uz griestiem tur, kur noklikšķiniet.

Ierīces tiek marķētas, kad tās tiek novietotas: **R** rozetēm, **S** slēdžiem, **L** gaismekļiem, **M** kustības sensoriem, **J** savienojuma kārbām, **P** sadalnēm. Ierīces uz sienas pārvietojas kopā ar sienu, kad pārvietojat sienu.

Vai dodat priekšroku pārlūkot pēc attēla? Atveriet **Simbolu paleti** no {{ui:Build}}, lai atrastu ierīci pēc nosaukuma, atzīmējiet tās, ko lietojat, un novietojiet to ar vienu klikšķi: skatiet [Simbolu palete](topic:symbol-palette).

## Slēdžu saistīšana ar gaismekļiem

1. Izvēlieties slēdzi (vai kustības sensoru). Sadaļā {{ui:Properties}} noklikšķiniet uz **Saistīt gaismekļus**.
2. Noklikšķiniet uz katra gaismekļa, ko tas ieslēdz. Noklikšķiniet uz saistīta gaismekļa vēlreiz, lai to atsaistītu.
3. Nospiediet {{key:Enter}} vai noklikšķiniet uz **Gatavs**.

Plāns zīmē punktētu līkni no slēdža līdz katram tā gaismeklim. Gaismekļa **Rekvizīti** rāda, kuri slēdži to ieslēdz.

## Telpa, kurā atrodas ierīce

Katra ierīce zina telpu, kurā tā atrodas. Ierīce uz sienas ir telpā, pret kuru tā vērsta; griestu ierīce ir telpā, virs kuras tā atrodas. **Rekvizīti** rāda **Telpa**, un **Elektriskās ierīces** specifikācijai ir kolonna **Telpa** (numurs un nosaukums, piemēram, 101 Virtuve).

Tā tiek atjaunināta: pārdēvējot vai pārnumurējot telpu, pārvietojot ierīci vai sienu, telpa seko tajā pašā solī. Ierīce ēkas ārējā virsmā vai vietā, kas nav telpa, norāda, ka tā nav telpā.

Telpa tiek ierakstīta arī failā ierīces rekvizītu kopā `CadCraft_Location` (Room, RoomNumber, RoomName), tātad Meklēt, Krāsot pēc rekvizīta un marķējumu specifikācija to var izmantot, un to var izmantot arī cita programma. Plāna simboli un elementi, kas saistīti ar simbolu, saņem to pašu kopu; skatiet [Simbolu palete](topic:symbol-palette).

## Lai asistents tās novieto

Ar pieslēgtu asistentu (Iestatījumi › Asistenti, ar atļautām izmaiņām) ierīces var pieprasīt vārdiski: "novietojiet dubultu rozeti ik pēc 2 m gar dzīvojamās istabas sienām, 300 mm augstumā, ķēdē 3" vai "pievienojiet griestu gaismekli ar tā slēdzi pie durvīm". Asistents izmanto piecus rīkus: `devices_add`, `device_change`, `lights_set`, `devices_delete` un `devices_list`. Tie izveido tādas pašas ierīces, kādas izveido Elektriskais rīks, uz tām pašām sienām un ar tiem pašiem marķējumiem, ķēdēm, slodzēm un augstumiem, un katrs izsaukums ir viens atsaukšanas solis.

Ierīcei nekad nevar būt veids, ko Elektriskais rīks nepazīst: nezināms veids tiek noraidīts, un asistents saņem sarakstu. Rozetei vai slēdzim jāatrodas līdz 600 mm no sienas virsmas, kā ar klikšķi, citādi izsaukums tiek noraidīts un nekas netiek novietots. Noklusējuma augstumi ir milimetros: 300 rozetēm, 1100 slēdžiem; griestu ierīce karājas no griestiem.

## Ierīču maiņa un uzskaite

Izvēlieties ierīci, lai mainītu tās marķējumu, ķēdi, slodzi (vatos) un montāžas augstumu. Izvēlieties vairākas, lai visas uzreiz ievietotu vienā ķēdē. Nospiediet {{key:Delete}}, lai noņemtu vienu; dzēsts gaismeklis tiek noņemts no saviem slēdžiem.

Sadaļā {{ui:Schedules}} izvēlieties **Elektriskās ierīces** katrai ierīcei ar tās līmeni, ķēdi, slodzi, augstumu un gaismekļiem, ko ieslēdz katrs slēdzis, vai **Ķēdes** katras ķēdes ierīcēm, kopējai slodzei un strāvai. Abas ir arī zīmējumu komplekta specifikāciju lapā: skatiet [Fasādes, griezumi un lapas](topic:sheets).

:::note
Montāžas augstumi un slodzes ir plānošanas noklusējumi (rozete 16" augstumā un 200 W, slēdzis 48", griestu gaismeklis 60 W), nevis projekts: elektriķis vai inženieris izmēro ķēdes un pārbauda normas.
:::

:::tip
Simboli ir tie paši, ko CadCraft Electrical papildinājums zīmē uzstādīšanas plānos, tāpēc plāns no jebkuras lietotnes tiek lasīts vienādi.
:::

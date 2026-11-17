---
title: Darbs starp divām BIM programmām
summary: Nosūtiet modeli no vienas BIM programmas uz otru caur IFC ar BimCraft pa vidu, saglabājiet tā GlobalId, īpašumu kopas un klasifikācijas, iestatiet abas programmas vienām un tām pašām īpašībām un redzējiet, kas atgriezās.
keywords: ifc, apļveida ceļš, sadarbspēja, globalid, guid, īpašumu kopas, psets, klasifikācijas, koplietotie parametri, īpašību kartēšana, tulkotājs, bcf, koordinācija, apmaiņa
from: 9f224176
---

## Ko jūs darīsiet

Pārvietojiet modeli starp divām BIM programmām, piemēram, no Revit uz Archicad un atpakaļ, caur IFC, ar BimCraft pa vidu, lai to pārbaudītu, papildinātu un ziņotu, kas saglabājās. Nevienas programmas pašas faila formāts netiek nolasīts: viss tiek pārsūtīts kā IFC.

## Ko BimCraft saglabā

Kad mainat modeli BimCraft un noklikšķiniet {{ui:Saglabāt kā IFC}}, katra līnija, ko neesat mainījis, tiek ierakstīta atpakaļ tieši tāda, kāda tā bija. Tātad:

- **GlobalId** paliek tie paši, un otra programma var sasaistīt katru elementu ar to, ko tā nosūtīja.
- **Īpašumu kopas** un to vērtības paliek, izņemot vērtības, ko esat mainījis.
- **Klasifikācijas** paliek piesaistītas saviem elementiem.

## Iestatiet abas programmas vienām un tām pašām īpašībām

1. Atveriet modeli BimCraft (un projekta paketi, ja tāda ir: tās īpašumu grupas tiek pievienotas).
2. Kreisajā panelī atveriet {{ui:Starp divām BIM programmām}}.
3. Sadaļā **Īpašību kartēšana** lejupielādējiet to, kas nepieciešams katrai programmai:
   - {{ui:Koplietotie parametri}}: koplietoto parametru fails. Revit to ielādējiet ar Manage › Shared Parameters un pievienojiet parametrus kategorijām, kurām tie nepieciešami.
   - {{ui:IFC eksporta īpašumu kopas}}: lietotāja definētu īpašumu kopu fails. Revit IFC eksporta iestatījumos izvēlieties to lietotāja definētajās īpašumu kopās, lai eksportētais IFC satur tās pašas kopas un īpašību nosaukumus.
   - {{ui:Kartējuma tabula (CSV)}}: katra īpašība ar tās IFC kopu un nosaukumu, tās tipu un atbilstošajiem nosaukumiem katrā programmā. Archicad kartējuma faili nav publicēts formāts, tāpēc tās IFC tulkotāju un īpašību pārvaldnieku iestatiet pēc šīs tabulas ar roku.
   - {{ui:Kartējuma fails}}: viss kartējums kā viens fails, ko glabāt kopā ar projektu.

Standarta kopas (Pset_ un Qto_) nav iekļautas koplietoto parametru failā: abas programmas tās raksta no saviem datiem.

## Nosūtiet modeli un atgrieziet to

1. Eksportējiet IFC no pirmās programmas ar saglabātiem GlobalId (Revit: "Store the IFC GUID in an element parameter after export" ieslēgts).
2. Atveriet to BimCraft, pārbaudiet to ({{ui:Modeļa pārbaudes}}, {{ui:Sadursmju pārbaude}}), pievienojiet problēmas ({{ui:Problēmas}}, BCF), mainiet vērtības, ja nepieciešams, un {{ui:Saglabāt kā IFC}}.
3. Atveriet saglabāto IFC otrajā programmā, strādājiet ar to un eksportējiet IFC no tās ar saglabātiem GlobalId (Archicad tulkotājs: "Global Unique Identifiers: Keep existing").
4. Atpakaļ BimCraft atveriet modeli, kas tika nosūtīts, un pēc tam pievienojiet to, kas atgriezās ({{ui:Pievienot modeli}} sadaļā Modeļi).
5. {{ui:Starp divām BIM programmām}} izvēlieties **Nosūtītais** un **Atgrieztais** un noklikšķiniet {{ui:Izveidot pārskatu}}.

## Pārskata lasīšana

- **Elementi**: cik atgriezās ar to pašu GlobalId, cik trūkst un cik ir jauni. Elementi ar jaunu GlobalId parādās kā viens trūkstošs un viens jauns: otra programma to neuzglabāja.
- **IFC klase mainīta**: elementi, kas atgriezās kā cita veida elements.
- **Saglabātās īpašību vērtības**: to vērtību daļa, kas atgriezās nemainītas. Saraksts zemāk rāda īpašības ar visvairāk mainītām vai trūkstošām vērtībām.
- **Klasifikācijas**: saglabātas, mainītas (ta pati sistēma, cits kods) vai trūkst.

{{ui:Lejupielādēt pārskatu (CSV)}} sniedz katru īpašību ar tās skaitļiem. Lai redzētu, kuri elementi pārvietojās vai mainīja formu, izmantojiet {{ui:Salīdzināt versijas}} ar tiem pašiem diviem modeļiem.

:::note
BimCraft nedarbina nevienu no abām programmām. Tas, kuri iestatījumi nodod vērtību tālāk, ir atkarīgs no katras programmas IFC iestatījumiem: pārskats parāda, kas faktiski atgriezās, tāpēc izmēģiniet iestatījumu, eksportējiet vēlreiz un salīdziniet.
:::

## Problēmas nosūtītas kā BCF

Problēmas, ko izveidojat BimCraft, tiek eksportētas kā BCF ({{ui:Problēmas}}), ko abas programmas var lasīt ar savām BCF rīkiem, tāpēc jautājums par elementu nonāk pie cilvēka, kas strādā otrā programmā, ar tā skatu.

Skatiet arī [Atvērt projekta paketi](topic:open-project-bundle), [No projekta faila uz BimCraft caur IFC](topic:rvt-to-ifc) un [Salīdziniet divas modeļa versijas](topic:compare-versions).

---
title: Sūtīt modeli renderēšanas programmai
summary: Saglabājiet to, ko 3D skats rāda, kā glTF modeli (.glb) ar materiāliem, tekstūrām un lampām renderēšanas un vizualizācijas programmām, kas nolasa glTF.
keywords: glb, gltf, gl transmission format, eksportēt, renderēšana, renderēt, vizualizācija, reāllaiks, archviz, materiāli, tekstūras, lampas, gaismas, aktīvs, pielāgots aktīvs
from: e62d57dc
---

{{ui:Renderēšanai}} rīkjoslā saglabā to, ko 3D skats rāda, vienā **.glb** failā (glTF 2.0, atvērts formāts no Khronos Group). Renderēšanas programmas, kas nolasa glTF, to atver ar modeļa materiāliem un lampām; Twinmotion starp ģeometrijas failiem, ko tā importē, min glTF un GLB un saglabā to gaismas (Epic dokumentācija, „Importing geometry in Twinmotion”): izmantojiet {{ui:Renderēšanai}} un tur importējiet .glb. Nekas netiek augšupielādēts: fails tiek izveidots šajā datorā.

## Saglabāt to

1. Atveriet IFC modeli un iestatiet 3D skatu: paslēpiet stāvus, elementus vai saistītos modeļus, kurus nevēlaties, un [nokrāsojiet materiālus](topic:paint-materials), ko vēlaties redzēt.
2. Noklikšķiniet uz {{ui:Renderēšanai}} (vai ierakstiet `GLB`).
3. Fails tiek lejupielādēts kā „<model name>.glb”. Statusa joslā rādīts, cik trīsstūru, materiālu un lampu tas satur.

## Ko fails satur

- **Ģeometrija** katram elementam, ko 3D skats rāda, metros, ar Y uz augšu (glTF pašas asis). Viens objekts katram stāvam un materiālam, nosaukts "Level 1 — Brick, red", lai renderēšanas programmā varētu izvēlēties materiālu un aizstāt to ar savu.
- **Materiāli:** katra krāsa ar izskatu, ko izvēlējāties sadaļā [Renderēt](topic:render) (matēts, satīns, spīdīgs, metāls, stikls…), un katrs nokrāsots bibliotēkas materiāls ar savu krāsu, raupjumu un **tekstūru** (tās attēls ir failā, mērogots līdz reālajam izmēram: ķieģelis ir ķieģeļa izmērā). Stikls ir caurspīdīgs.
- **Lampas:** katrs gaismeklis, kas ieslēgts sadaļā Renderēt › Lampas, kā punkta vai prožektora gaisma ar spilgtumu (lūmeni pārvērsti kandelās), krāsu un staru leņķi.
- **Kur atrodas vieta:** vietas platuma un garuma grādi ir ierakstīti failā atsaucei. Renderēšanas programmām ir savs saule: ierakstiet tajā vietu.

## Ko tas neiekļauj

- Griezuma sekcija (ieiet veseli elementi) un elementi, kas rādīti caurspīdīgi (tie netiek iekļauti).
- Objekti pa elementam (viens objekts katram stāvam un materiālam), IFC īpašības, izciļņu kartes, saglabātie skati un ierakstītās staigāšanas.
- Malas un fons.

## Enscape un citi spraudņu renderētāji

Enscape darbojas citā projektēšanas programmā un nav faila, ko atvērt visam projektam. Ir divi veidi:

- Atveriet modeļa **IFC** (Fails › Saglabāt) programmā, kurā darbojas Enscape; lielākā daļa to nolasa. Krāsas tiek pārnestas; bibliotēkas materiāli nāk kā krāsas.
- Ievietojiet **nelielu daļu** (mēbeli, armatūru) kā pielāgotu aktīvu: vispirms izolējiet to, pēc tam noklikšķiniet uz {{ui:Enscape (.gltf)}}. Enscape pielāgoto aktīvu bibliotēka uzskaita .gltf, .obj un .fbx failus, nevis .glb, tāpēc šī poga saglabā to pašu ainu kā vienu pašpietiekamu **.gltf** failu (binārie dati un attēli ir faila iekšpusē; nav nekā cita, ko kopēt blakus). Enscape iesaka mazus aktīvus (zem aptuveni 20 000 trīsstūriem).

:::note
CadCraft Studio to pašu glTF failu (un USD failu) var saglabāt arī no {{ui:Renderēt}} › Dzinējs › **glTF fails** / **USD fails**, vai atvērt tieši citā programmā šajā datorā: skatiet [Ainas atvēršana citā programmā](topic:render-open-in). Spraudnis vai tiešā saite uz Enscape vai Twinmotion nav izveidota. FBX un Datasmith formātiem nav publicētas specifikācijas, tāpēc BimCraft tos neraksta; glTF ir atvērtais ceļš.
:::

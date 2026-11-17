---
title: Telpu apdare un apdares specifikācijas
summary: Norādiet, kas sedz katras telpas grīdu, sienas un griestus, pievienojiet zonas, piemēram, flīzētu aizsargsienu, un iegūstiet apdares specifikācijas pa telpām, sienām un zonām ar laukumiem, flīžu skaitu, ieskaitot griezumus, un pamata tilpumiem.
keywords: apdare, apdares, apdares specifikācija, telpu apdare, grīdas apdare, sienas apdare, griestu apdare, plinte, flīze, flīzes, griezta flīze, flīžu skaits, atkritumi, pamats, estrihs, pamatplāksne, apmetums, zona, aizsargsiena, sienas josla, mitrā zona, iekštelpa, daudzumi
from: 8c30498c
---

## Ko jūs darīsiet

Pastāstiet BimCraft vienreiz, ar ko katra telpa ir apdarināta. Apdares specifikācijas tad parāda laukumus, flīzes, ko pasūtīt, un pamata tilpumus, un mainās līdz ar modeli.

## Soļi

1. Ieslēdziet {{ui:Zīmēšana}}, atveriet **Specifikācijas** kreisajā panelī un noklikšķiniet **Telpu apdare**.
2. Zem **Apdares veidi** noklikšķiniet **Pievienot apdares veidu**. Dodiet tam nosaukumu, veidu (Flīzes, Loksne, Pārklājums vai Plāksne) un biezumu. Flīzei norādiet flīzes garumu un platumu, savienojumu un atkritumu rezervi procentos. Ja zem apdares kaut kas atrodas (estrihs, pamatplāksne, apmetuma kārta), nosauciet to zem **Pamats** un norādiet tā biezumu.
3. Zem **Telpas** izvēlieties katras telpas grīdas, sienas un griestu apdari. Ja telpai ir plinte, ierakstiet tās nosaukumu un augstumu.
4. Zem **Zonas** noklikšķiniet **Pievienot zonu** telpas daļai, kurai nepieciešama cita apdare:
   - **sienas** zona ir josla starp diviem augstumiem virs grīdas (flīzēta aizsargsiena no 0 līdz 1200, sienas josla). Tā atrodas uz katras telpas sienas, vai arī izvēlieties šīs telpas sienas modelī un noklikšķiniet pogu **Ieslēgt**, lai attiecinātu to tikai uz tām;
   - **grīdas** vai **griestu** zona ir laukums, ko jūs ierakstāt. Tas tiek atņemts no pašas telpas apdares.
5. Noklikšķiniet **Saglabāt**. Tas ir viens solis atsaukšanā. Garumi tiek ierakstīti projekta mērvienībās.

## Specifikācijas

Četri ieraksti pievienojas Specifikāciju sarakstam:

- **Apdares pa telpām**: katra telpa ar tās grīdas, sienas un griestu apdari, to laukumiem un plinti ar tās garumu.
- **Apdares pa sienām**: katrs sienas posms telpas pusē un tā josla, ko sedz apdare, ar tās garumu, bruto laukumu, atskaitījumiem, tīro laukumu un, flīzēm, veselām flīzēm, grieztām flīzēm un pasūtāmajām flīzēm.
- **Apdares pa zonām**: katra zona ar tās apdari, tīro laukumu, flīzēm un pamata tilpumu.
- **Apdares daudzumi**: viena rinda katrai apdarei: tīrais laukums, veselās un grieztās flīzes, pasūtāmās flīzes, pamats un tā tilpums, kā arī pašas apdares tilpums.

Grupējiet, summējiet, saglabājiet un eksportējiet tās kā jebkuru specifikāciju: skatiet [Izkārtojiet, saglabājiet un eksportējiet specifikāciju](topic:schedule-layouts). Noklikšķiniet uz skaitļa, lai atlasītu to, no kā tas ir radies: sienas atskaitījumi atlasa tās durvis un logus.

## Kā apdares tiek mērītas

- **Sienas**: katrs sienas posms telpas pusē — tā garums gar telpu, reizināts ar augstumu, ko sedz apdare, mīnus daļa no katrām durvīm un logiem šajā augstumā. Siena, kas zemāka par telpu, tiek apdarināta līdz savai augšai. Projekta mērīšanas metode nosaka, kuras atveres ir pārāk mazas, lai tās atskaitītu ([Specifikācijas](topic:plan-schedules-and-pdf)).
- **Grīdas un griesti**: telpa iekšpusē sienu virsmām, mīnus salas tajā.
- **Plintes**: telpas sienu garums, mīnus durvju platums.
- **Flīzes**: izklātas kā režģis no viena virsmas stūra, ar vienu savienojumu starp flīzēm. Flīze, kas pilnībā atrodas uz virsmas, ir veselā flīze; flīze, kas daļēji atrodas uz tās (pie malas, ap atveri), ir griezta flīze. Pasūtāmās flīzes ir veselās plus griezts, plus atkritumu rezerve, noapaļota uz augšu. Katra griezta flīze tiek skaitīta kā jauna flīze: griezumi netiek izmantoti atkārtoti.
- **Pamata tilpums**: tīrais laukums, reizināts ar pamata biezumu.
- Skaits, kas atzīmēts ar **≈**, ir aprēķināts no laukuma, nevis izklāts flīze pa flīzei: virsma, no kuras atņemta ierakstīta zona, vai ļoti liela virsma.

## Labi zināt

- Apdares tiek glabātas ēkas failā (īpašumu kopa `CadCraft_Finishes` projektā). Katrai telpai ar apdari tiek pievienota arī standarta IFC īpašumu kopa `Pset_SpaceCoveringRequirements`, lai citas programmas nolasītu nosaukumus.
- Flīžu izklājums sākas no stūra. Izklājums, centrēts telpā, raksts (zivjukauls, ķieģeļu mūrējums) un griezumu atkalizmantošana netiek aprēķināti.
- Izliekta siena un telpas robeža, kas nav siena (telpas atdalītājs), tiek uzskaitīta kā **Cita robeža** ar savu garumu un bez atverēm.
- Iepriekšējais ieraksts **Apdares** uzskaita sienu tipu apdares slāņus; **Slāņi: laukums un tilpums** uzskaita katru slāni katrā slāņotā tipā. Šeit norādītās telpu apdares tiek uzliktas telpai pāri šiem slāņiem.
- Asistents var iestatīt apdares jums ar `finishes_set`: skatiet [Ļaujiet AI asistentam strādāt ar jūsu modeli](topic:assistants).

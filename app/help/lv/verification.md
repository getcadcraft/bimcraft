---
title: Elementu atzīmēšana kā pārbaudītiem vai pārbaudītiem uz vietas
summary: Elements, kas nolasīts no PDF vai skenējuma, ir nepārbaudīts, kamēr to nepārbaudāt. Atzīmējiet elementus kā pārbaudītus vai kā pārbaudītus uz vietas (LOD 500) ar to, kas, kad un kā tos izmērīja, un nododiet kā uzbūvētu modeli, kurā norādīts, kurš ir kurš.
keywords: nepārbaudīts, pārbaudīts, pārbaudīts, pārbaudīts uz vietas, kā uzbūvēts, kā-uzbūvēts, lod 500, noslēgums, nodošana, izmērīts uz vietas, mērlente, lāzers, skenējums, uzmērījums, esoša ēka, pārbūve, atzīmēt kā pārbaudītu, verifikācija, 7. posms
from: df35d908
---

## Ko darāt

Sekojiet tam, ko modelī kāds tiešām ir apskatījis. Elementam ir viena no trim atzīmēm vai nav nevienas:

- **Nepārbaudīts**: programma to atpazina no PDF, skenēta rasējuma, pārzīmēta rasējuma vai punktu mākoņa skenējuma. Vēl neviens to nav pārbaudījis.
- **Pārbaudīts**: kāds to salīdzināja ar rasējumu, no kura tas nācis.
- **Pārbaudīts uz vietas (LOD 500)**: kāds to izmērīja uz vietas. Kas, kad un kā ir saglabāts kopā ar to.
- **Nav atzīmes**: zīmējis cilvēks. Modelis par to neko neapgalvo.

## Soļi

1. Izvēlieties vienu elementu vai vairākus (sienas, durvis, logus, telpas, jebkuru elementu).
2. Sadaļā {{ui:Rekvizīti}} atveriet {{ui:Verifikācija}}.
3. Ierakstiet, kurš to pārbaudīja vai izmērīja. Datums ir šodienas, ja vien to nemainat.
4. Noklikšķiniet uz {{ui:Atzīmēt kā pārbaudītu}}. Mērījumam uz vietas izvēlieties, kā tas izmērīts (mērlente, lāzera tāldistanču mērītājs, skenējums, uzmērījums), un noklikšķiniet uz {{ui:Atzīmēt kā pārbaudītu uz vietas (LOD 500)}}.
5. {{ui:Atzīmēt kā nepārbaudītu}} un {{ui:Noņemt atzīmi}} atgriež atpakaļ. Katrs klikšķis ir viens solis, ko var atsaukt visai izvēlei.

Lai ātri atzīmētu izvēli: {{ui:Rīki}} › {{ui:Atzīmēt kā pārbaudītu}} (rakstot: `MARKCHECKED`) atzīmē to kā pārbaudītu jums, šodien.

## Ko jūs redzēsiet

- Plānā nepārbaudītam elementam ir punktēts rāmis un "?"; pārbaudītam uz vietas ir ķeksītis. Lai tos paslēptu, noņemiet atzīmi no {{ui:Rādīt pārbaudes atzīmes plānā}} sadaļā {{ui:Pārbaude}}.
- {{ui:Specifikācijas}} › {{ui:Verifikācija}} uzskaita katru atzīmēto elementu ar tā līmeni, stāvokli, kas, kad, kā un no kurienes tas nācis.
- Pārbaude uzskaita nepārbaudītos elementus un pārbaudītu uz vietas elementu skaita kā LOD 500. Sk. [Modeļa pārbaude](topic:audit-the-model).

## No skenējuma

Salīdzinot skenējumu ar modeli, {{ui:Atzīmēt atbilstošos elementus kā pārbaudītus uz vietas}} atzīmē katru elementu, ko skenējums redzēja kā uzbūvētu noteiktajā pielaidē, ar metodi "scan" un pielaidi piezīmē. Sk. [Skenējuma salīdzināšana ar modeli](topic:compare-scan-with-model).

:::warning
Šis salīdzinājums sasaista katra elementa kasti ar skenējuma punktiem. Tā nav uzmērīšana. Izmantojiet to elementiem, ko esat arī paši apskatījis.
:::

## Uzbūvētais modelis un nodošanas pakotne

{{ui:Izveidot nodošanas pakotni}} cilnē {{ui:Resursi}} ieliek uzbūvēto modeli zip failā ar:

- paziņojumu projektā par to, cik elementu ir pārbaudīti uz vietas, pārbaudīti, nepārbaudīti un bez atzīmes;
- `as-built/verified-elements.csv`: katrs elements un telpa ar tā stāvokli, kas, kad un kā;
- `as-built/as-built-drawings.pdf`: rasējumu komplekts tādā, kāds tas ir tagad;
- rasējumu izmaiņu žurnālu, ja modelim ir izdoti komplekti.

Sk. [Resursi un uzturēšana](topic:assets-and-maintenance).

## Kā tas glabājas IFC

Katrs atzīmētais elements nes rekvizītu kopu `CadCraft_Verification`: State, By, On, Method, Source, Note un LevelOfDevelopment (`LOD 500`, kamēr pārbaudīts uz vietas). Tie ir vienkārši teksta rekvizīti, tāpēc citas programmas tos uzskaita, un Atrast, Krāsot pēc rekvizīta un marķētās specifikācijas var tos izmantot. Uzbūvētā apliecinājums ir rekvizītu kopa `CadCraft_AsBuilt` projektā. Elements bez šīs kopas uz vietas nav izmērīts.

## Tālāk

- [Sienas no plānu komplekta](topic:walls-from-plans)
- [Modeļa pārbaude](topic:audit-the-model)

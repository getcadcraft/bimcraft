---
title: Rekvizītu paneļa lauki
summary: Ko nozīmē katrs lauks paneļos Rekvizīti, Fails, Rasējums un Mape un kurus no tiem var mainīt.
keywords: rekvizīti, lauki, atribūti, globalid, guid, kopēt, kopēt vērtību, kopēt visu, csv, starpliktuve, sērijas numurs, marķējums, objekta tips, līnija, express id, rekvizītu kopa, pset, daudzumi, shēma, faila panelis
from: fe55b435
---

## IFC elementi

Augšā {{ui:Rekvizīti}} panelī redzams elementa veids bez priedēkļa "Ifc" (piemēram, "Door", "WallStandardCase", "FurnishingElement") un tā nosaukums vai "Bez nosaukuma".

| Lauks | Nozīme | Rediģējams |
|---|---|---|
| Nosaukums | Elementa nosaukums, bieži ģimenes un tipa nosaukums no eksportētāja | Jā |
| Tips | Elementa tipa nosaukums, ja tam ir tips | Nē |
| Objekta tips | Brīvi ievadāms tipa apraksts, ko daži eksportētāji aizpilda | Jā |
| Marķējums | Elementa marķējums vai zīme; daudzi eksportētāji šeit raksta elementa ID | Jā |
| Apraksts | Brīvs teksts | Jā |
| GlobalId | Elementa pastāvīgais 22 rakstzīmju IFC identifikators, tas pats katrā šī elementa eksportā | Nē |
| Līnija | Elementa rindas numurs (`#1234`) šajā IFC failā. Tas mainās starp eksportiem. | Nē |

Zemāk ir **rekvizītu kopas**, kārtotas pēc nosaukuma:

- Katra kopa atveras un aizveras, noklikšķinot uz tās nosaukuma. Pirmās trīs ir atvērtas.
- Kopa, kas atzīmēta ar "(type)", pieder elementa tipam: "Tipa rekvizīts: izmaiņa šeit attiecas uz katru šī tipa elementu."
- Daudzumu kopas (garumi, laukumi, tilpumi, skaiti, svari) ir tikai lasāmas.
- Saraksti un uzskaitītās vērtības tiek rādītas tikai lasāmas.
- Jā/Nē vērtības rādās kā **Jā** vai **Nē**.
- Skaitļi attēlošanai noapaļoti līdz četrām zīmēm aiz komata. Garumi (garuma rekvizīts vai daudzuma garums) rādās {{ui:Mērvienības}} rīkjoslā izvēlētajās vienībās, blakus ar mērvienības zīmi, un jūs varat ierakstīt jaunu vērtību šajā vienībā vai ar citu mērvienības zīmi (2.4 m, 8'-0"): BimCraft ieraksta faila paša skaitli atpakaļ. Citi skaitļi tiek rādīti tā, kā tos fails satur.
- Tukša vērtība rādās kā *tukša*. Rediģēta vērtība ir treknrakstā ar zilu joslu blakus.

## Vērtības kopēšana

Katrai vērtībai {{ui:Rekvizīti}} blakus ir neliela kopēšanas poga: noklikšķiniet uz tās, lai vērtība tiktu ievietota starpliktuvē tieši tādā veidā, kā tā rādīta, piemēram, GlobalId, sērijas numurs vai jebkura rekvizītu kopas vērtība. Kopēšana nekad nesāk rediģēšanu.

Augšā {{ui:Kopēt visu}} kopē visas elementa vērtības kā tekstu, kopu pēc kopas, un {{ui:Kopēt kā CSV}} kopē tās kā rindas ar grupu, rekvizītu un vērtību, ko ielīmēt izklājlapā; tukšās vērtības tiek saglabātas, lai katram laukam būtu rinda. Tas darbojas tāpat arī elementam citā atvērtā modelī; ja atvērti vairāki modeļi, CSV sākas ar kolonnu Model, kurā nosaukts tā fails.

## Fails panelis (IFC)

| Lauks | Nozīme |
|---|---|
| {{ui:Fails}}, {{ui:Izmērs}} | Atvērtais fails |
| Shēma | IFC versija, piemēram, IFC2X3 vai IFC4 |
| Projekts | Projekta nosaukums un garais nosaukums |
| Fāze | Projekta fāze, ja eksportētājs to ierakstījis |
| Eksportēts no | Eksportējošā programma no faila galvenes |
| Autors | Autors faila galvenē |
| Eksportēts | Datums un laiks faila galvenē |
| Elementi | Cik elementu ar formu tika uzzīmēti |
| Trīsstūri | Cik trīsstūru veido to formas; modeļa "smaguma" mērs |

## Fails panelis (projekta un ģimeņu faili)

| Lauks | Nozīme |
|---|---|
| Veids | Projekts, Projekta sagatave, Ģimene vai Ģimenes sagatave |
| Saglabāts ar | Izdevums, kurā fails pēdējo reizi saglabāts |
| Būve | Precīza šī izdevuma būve |
| Nolasīts | Cik daudz faila BimCraft nolasīja no tā izmēra |

## Rasējuma panelis (DWG un DXF)

| Lauks | Nozīme |
|---|---|
| Formāts | Izdevums, kādā rasējums saglabāts, ar tā formāta kodu, piemēram, AC1032 |
| Mērvienības | Rasējuma ievietošanas mērvienības, ja tās iestatītas |
| Entītijas | Cik objektu nolasīts |
| Slāņi | Cik slāņu |
| Lapas | Cik lapu (izkārtojumu) vai Nav |
| Saistītie rasējumi | Cik no tā saistītajiem rasējumiem atrasti un ielādēti |
| Iekārtas | Cik iezīmētu iekārtu atrodas lapās |

## Mapes panelis

| Lauks | Nozīme |
|---|---|
| Mape, Faili, Izmērs | Atvērtā mape, cik failu tajā ir un to kopējais izmērs |
| Modeļi | Projekta un ģimeņu faili, katrs ar savām dublējumkopijām, skaitītām vienreiz |
| CAD rasējumi, IFC modeļi | Cik katra |
| Problēmas | Cik modeļu kopiju ir nepilnīgas vai nelasāmas, vai Nav |

---
title: Faili, ko BimCraft atver un saglabā
summary: Katrs formāts, ko BimCraft atver, ko tas paņem, ko tas saglabā, kur tiek saglabāti saglabātie faili un kas mainās starp pārlūkprogrammām un bezsaistē.
keywords: formāti, atvērt, saglabāt, eksportēt, lejupielādēt, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, augšupielādēt, privātums, faila izmērs
from: a7275dbf
---

BimCraft nolasa failus jūsu datorā, pārlūkprogrammas cilnē. **Nekas netiek augšupielādēts** uz CadCraft vai kādu citu. Kad saglabājat, BimCraft pārlūkprogrammai nodod jaunu failu lejupielādei; tas nekad nepārraksta failu, ko atvērāt.

## Ko tas atver

| Formāts | Paplašinājumi | Ko iegūstat |
|---|---|---|
| IFC | `.ifc` | Modelis 3D, stāvi, elementu skaits un katra elementa īpašības. Var mainīt nosaukumus, marķējumus un atsevišķas īpašību vērtības. |
| Projekta un ģimeņu faili | `.rvt` `.rfa` `.rte` `.rft` | Faila kartīte: versija, būvējums, kopdarbs, projekta informācija, ģimeņu parametri, saistītie faili un priekšskatījuma attēls. Bez 3D. |
| DWG | `.dwg` | Rasējums 2D: modeļa telpa, katra lapa, slāņi, saistītie rasējumi, attēli un drukas skats. Arī modeļa telpa 3D. Pārbaudīti ir formāti no AutoCAD 2000 līdz 2018. |
| DXF | `.dxf` | Tas pats, kas DWG. |
| STEP | `.step` `.stp` | Detaļa, iekārtas gabals vai piegādātāja modelis (AP203, AP214, AP242) 3D: katrs cietais ķermenis kļūst par vienu elementu (ēkas elementa vietturi) nelielā IFC modelī vienā stāvā, nolasīts kā trijstūri patiesajā izmērā, mezgls ar katru detaļu tur, kur fails to novieto. No šejienes tas darbojas kā jebkurš IFC: īpašības, griezumi, mērīšana, saglabāšana kā IFC. Krāsas un mezglu koks netiek nolasīti. |
| Punktu mākoņi | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skenējums 3D skatā blakus modelim vai atsevišķi: skatiet [Parādīt punktu mākoni blakus modelim](topic:point-clouds). |
| Projekta pakotne | `.ccbundle.zip` | Modelis ar tā skatiem, izkārtojumiem un īpašību grupām: skatiet [Atvērt projekta pakotni](topic:open-project-bundle). |
| Mape | jebkurš | Pārskats par katru modeli, rasējumu un projekta pakotni tajā. Jebkuru IFC, modeli, rasējumu vai pakotni pārskatā var atvērt ar klikšķi. |

[Ko BimCraft nolasa no katra formāta](topic:file-formats) izklāstīts sīkāk.

BimCraft nosaka, kas ir fails, pēc tā pirmajiem baitiem, nevis tikai pēc nosaukuma, tāpēc projekta fails ar neparastu paplašinājumu tāpat atveras kā faila kartīte.

### Netiek atvērts

- `.ifczip` un `.ifcxml`: BimCraft paziņo: „.ifczip vēl netiek atbalstīts. Saglabājiet vai eksportējiet modeli kā parastu .ifc failu.” Atarhivējiet `.ifczip` (tajā ir parasts `.ifc`) vai eksportējiet vēlreiz kā parastu IFC.
- DGN rasējumi ir uzskaitīti mapes pārskatā, bet neatveras.
- PDF, attēli un biroja faili paši neatveras. Attēli tiek izmantoti kā attēli DWG iekšienē, un {{ui:Būvējums}} › {{ui:No rasējuma…}} pārvērš PDF vai skenējuma lappuses par sienām: skatiet [Sienas no plānu komplekta](topic:walls-from-plans).

## Ko tas saglabā

| Jūs noklikšķināt | Iegūstat | Kur |
|---|---|---|
| {{ui:Saglabāt kā IFC}} | Jauns IFC fails ar jūsu labojumiem, nosaukts „*sākotnējais nosaukums* (edited).ifc” | Jūsu pārlūkprogrammas lejupielāžu mape |
| {{ui:Lejupielādēt CSV}} aprīkojuma specifikācijā | CSV ar saraksta vienumiem, nosaukts „*rasējuma nosaukums* equipment.csv” | Jūsu pārlūkprogrammas lejupielāžu mape |

Citas lietas tiek saglabātas tur, kur tās tiek izveidotas, katra savā tematā: {{ui:USD}} ([Eksportēt modeli kā USD](topic:usd)), {{ui:Collada}} (.dae un Google Earth .kmz: [Eksportēt modeli kā Collada vai Google Earth formātā](topic:collada)), .glb {{ui:Renderēšanai}}, renderētie attēli, lapas un plāni kā PDF, specifikācijas un saraksti kā CSV, BCF problēmas, COBie izklājlapa, ģimeņu faili un reģistrētie skenējumi kā LAS vai E57. BimCraft nesaglabā DWG, DXF vai projekta failus, un tas nekad nemaina failus, ko atvērāt.

:::chromium
Chrome un Edge saglabā lejupielādes mapē, kas iestatīta to iestatījumos, parasti Lejupielādes. Lai jūs tiktu jautāts, kur saglabāt katru failu, pārlūkprogrammas lejupielādes iestatījumos ieslēdziet „Ask where to save each file before downloading” (Jautāt, kur saglabāt katru failu pirms lejupielādes).
:::

:::firefox
Firefox saglabā mapē Lejupielādes, ja vien savos iestatījumos nav iestatījis „Always ask you where to save files” (Vienmēr jautāt, kur saglabāt failus).
:::

:::safari
Safari saglabā mapē Lejupielādes, ja vien nav izvēlējies citu mapi zem **Safari > Iestatījumi > Vispārīgi > Faila lejupielādes vieta**.
:::

## Saglabāšana otrreiz

Katrā saglabāšanā tiek lejupielādēts viss modelis ar **visiem labojumiem kopš tā atvēršanas**, nevis tikai labojumi pēc pēdējās saglabāšanas. Saraksts {{ui:Izmaiņas}} pēc katras saglabāšanas sākas no jauna, tāpēc pēc saglabāšanas nevar atsaukt darbības. Lai sāktu no sākuma, atveriet oriģinālo failu vēlreiz.

## Lieli faili un atmiņa

- **IFC** failus nolasa pilnībā cilnes atmiņā, un 3D ģeometrija prasa vēl atmiņas. Modelis, kas ir dažus simtus megabaitu liels, var būt par daudz klēpjdatoram. Virs 1,5 miljoniem trijstūru malas tiek izslēgtas, lai taupītu atmiņu („Edges are off for very large models”: Malas ir izslēgtas ļoti lieliem modeļiem).
- **Projekta failus** nenolasa pilnībā. BimCraft nolasa tikai nelielās daļas, kas tam vajadzīgas, apmēram 40 KB līdz 100 KB neatkarīgi no faila lieluma, tāpēc 500 MB centrālais modelis tīkla diskā atveras uzreiz.
- **DWG un DXF** failus nolasa pilnībā. Ļoti liels rasējums parāda: „This drawing is very large; only part of it is shown.” (Šis rasējums ir ļoti liels; redzama ir tikai daļa.)
- **Mapes** līdz 20 000 failiem atveras. Tiek nolasīti tikai daži kilobaiti, kas vajadzīgi katrai modeļa kartītei.

Skatiet [Pārlūkprogrammas, ierīces un atmiņa](topic:platforms), lai uzzinātu vairāk.

## Tiešsaistē un bezsaistē

Failu atvēršanai interneta savienojums nav vajadzīgs. Viens lasītājs ielādējas no vietnes pirmoreiz, kad tas vajadzīgs: IFC dzinējs, pirmoreiz atverot IFC modeli („Starting the IFC engine…”: IFC dzinēja palaišana…). DWG un DXF lasītāji ir daļa no lietotnes.

:::offline
Jums nav savienojuma. Ja lietotnes joslas poga saka {{ui:Gatavs darbam bezsaistē}}, katrs formāts atveras kā parasti. Ja nē, IFC modeli nevar atvērt, ja tas jau nav atvērts šajā cilnē; vispirms atjaunojiet savienojumu. Skatiet [Tiešsaistē un bezsaistē](topic:online-offline).
:::

Lai izmantotu BimCraft bez savienojuma, būdams tiešsaistē, noklikšķiniet uz {{ui:Saglabāt bezsaistei}} lietotnes joslā un uzgaidiet, līdz parādās {{ui:Gatavs darbam bezsaistē}}. Saglabātā kopija ir aptuveni 33 MB liela; tajā ir IFC dzinējs, tāpēc IFC modeļi atveras arī bezsaistē. [Darbs bezsaistē](common:offline) vispārīgi izskaidro saglabātās kopijas.

## Mākoņa saglabāšana

Mākoņa saglabāšana vēl nav pieejama. Saglabājiet rediģētās kopijas savā datorā vai biroja failu serverī, kā jebkuru citu failu. Skatiet [Jūsu faili](common:your-files).

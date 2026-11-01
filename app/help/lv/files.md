---
title: Faili, ko BimCraft atver un saglabā
summary: Katrs formāts, ko BimCraft atver, ko tas saglabā, kur tiek saglabāti saglabātie faili un kas mainās starp pārlūkprogrammām un bezsaistē.
keywords: formāti, atvērt, saglabāt, eksportēt, lejupielādēt, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, augšupielādēt, privātums, faila izmērs
from: a1f0161b
---

BimCraft nolasa failus jūsu datorā, pārlūkprogrammas cilnē. **Nekas netiek augšupielādēts** programmā CadCraft vai jebkur citur. Kad saglabājat, BimCraft pārlūkprogrammai nodod jaunu failu lejupielādei; tas nekad nepārraksta failu, ko atvērāt.

## Ko tas atver

| Formāts | Paplašinājumi | Ko jūs iegūstat |
|---|---|---|
| IFC | `.ifc` | Modelis 3D, stāvi, elementu skaits un katra elementa īpašības. Nosaukumus, marķējumus un atsevišķas īpašību vērtības var mainīt. |
| Projekta un ģimenes faili | `.rvt` `.rfa` `.rte` `.rft` | Faila kartīte: versija, būve, kopdarbs, projekta informācija, ģimenes parametri, saistītie faili un priekšskatījuma attēls. Nav 3D. |
| DWG | `.dwg` | Rasējums 2D: modeļa telpa, katra lapa, slāņi, saistītie rasējumi, attēli un drukas skats. Arī modeļa telpa 3D. Pārbaudīti ir formāti no AutoCAD 2000 līdz 2018. |
| DXF | `.dxf` | Tas pats, kas DWG. |
| STEP | `.step` `.stp` | Detaļa, aprīkojuma gabals vai piegādātāja modelis (AP203, AP214, AP242) 3D: katrs cietais ķermenis kļūst par vienu elementu (ēkas elementa proxy) nelielā IFC modelī vienā stāvā, nolasīts kā trijstūri patiesajā izmērā; mezgls ar katru detaļu tur, kur fails to novieto. No šejienes tas darbojas kā jebkurš IFC: īpašības, griezumi, mērīšana, saglabāšana kā IFC. Krāsas un mezgla koks netiek nolasīti. |
| Punktu mākoņi | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skenējums 3D skatā blakus modelim vai atsevišķi: skatiet [Parādīt punktu mākoni līdzās modelim](topic:point-clouds). |
| Projekta paka | `.ccbundle.zip` | Modelis ar tā skatiem, izkārtojumiem un īpašību grupām: skatiet [Atvērt projekta paku](topic:open-project-bundle). |
| Mape | jebkurš | Pārskats par katru modeli, rasējumu un projekta paku tajā. Jebkuru IFC, modeli, rasējumu vai paku pārskatā atver ar vienu klikšķi. |

[Ko BimCraft nolasa no katra formāta](topic:file-formats) sīkāk izskaidro.

BimCraft nosaka, kas ir fails, pēc tā pirmajiem baitiem, nevis tikai pēc nosaukuma. Tāpēc projekta fails ar neparastu paplašinājumu tomēr atveras kā faila kartīte.

### Netiek atvērts

- `.ifczip` un `.ifcxml`: BimCraft parāda ziņojumu: ".ifczip vēl netiek atbalstīts. Saglabājiet vai eksportējiet modeli kā parastu .ifc failu." Izsaiņojiet `.ifczip` (tajā ir parasts `.ifc`) vai eksportējiet vēlreiz kā parasto IFC.
- DGN rasējumi ir uzskaitīti mapes pārskatā, bet neatveras.
- PDF, attēli un biroja faili paši neatveras. Attēli tiek izmantoti kā bildes DWG iekšienē, un {{ui:Būvējums}} › {{ui:No rasējuma…}} pārvērš PDF vai skenētas lapas par sienām: skatiet [Sienas no plānu komplekta](topic:walls-from-plans).

## Ko tas saglabā

| Jūs noklikšķināt | Jūs iegūstat | Kur |
|---|---|---|
| {{ui:Saglabāt kā IFC}} | Jaunu IFC failu ar jūsu izmaiņām, nosauktu "*oriģinālais nosaukums* (edited).ifc" | Jūsu pārlūkprogrammas lejupielāžu mape |
| {{ui:Lejupielādēt CSV}} aprīkojuma specifikācijā | CSV ar saraksta vienumiem, nosauktu "*rasējuma nosaukums* equipment.csv" | Jūsu pārlūkprogrammas lejupielāžu mape |

Citas lietas tiek saglabātas tur, kur tās izveidotas, katra savā tēmā: {{ui:USD}} ([Eksportēt modeli kā USD](topic:usd)), {{ui:Renderēšanai}} .glb fails, renderēti attēli, lapas un plāni kā PDF, specifikācijas un saraksti kā CSV, BCF problēmas, COBie izklājlapa, ģimenes faili un reģistrētie skenējumi kā LAS vai E57. BimCraft nesaglabā DWG, DXF vai projekta failus, un tas nekad nemaina failus, ko atvērāt.

:::chromium
Chrome un Edge saglabā lejupielādes mapē, kas iestatīta to iestatījumos, parasti Lejupielādes. Lai tiktu jautāts, kur saglabāt katru failu, pārlūkprogrammas lejupielādes iestatījumos ieslēdziet "Pirms lejupielādes jautāt, kur saglabāt katru failu".
:::

:::firefox
Firefox saglabā Lejupielāžu mapē, ja vien iestatījumos nav izvēlēts "Vienmēr jautāt, kur saglabāt failus".
:::

:::safari
Safari saglabā mapē Lejupielādes, ja vien zem **Safari > Iestatījumi > Vispārīgi > Faila lejupielādes vieta** nav izvēlēta cita mape.
:::

## Saglabāšana otrreiz

Katra saglabāšana lejupielādē visu modeli ar **katru izmaiņu kopš tā atvēršanas**, nevis tikai izmaiņas pēc pēdējās saglabāšanas. Saraksts {{ui:Izmaiņas}} pēc katras saglabāšanas atkal sākas tukšs, tāpēc pēc saglabāšanas nevar atsaukt iepriekšējās darbības. Lai sāktu no sākuma, vēlreiz atveriet oriģinālo failu.

## Lieli faili un atmiņa

- **IFC** failus pilnībā ielādē cilnes atmiņā, un 3D ģeometrija prasa vēl vairāk atmiņas. Modelis, kas ir dažus simtus megabaitu liels, var būt par daudz klēpjdatoram. Virs 1.5 miljoniem trijstūru malas tiek izslēgtas, lai taupītu atmiņu ("Malas ir izslēgtas ļoti lieliem modeļiem").
- **Projekta failus** nelasa pilnībā. BimCraft nolasa tikai nelielās daļas, kas tam vajadzīgas, apmēram 40 KB līdz 100 KB neatkarīgi no faila lieluma. Tāpēc 500 MB centrālais modelis tīkla diskā atveras uzreiz.
- **DWG un DXF** failus nolasa pilnībā. Ļoti liels rasējums rāda: "Šis rasējums ir ļoti liels; redzama ir tikai daļa no tā."
- **Mapes** līdz 20,000 failiem atveras. Tiek nolasīti tikai daži kilobaiti, kas vajadzīgi katrai modeļa kartītei.

Skatiet [Pārlūkprogrammas, ierīces un atmiņa](topic:platforms), lai uzzinātu vairāk.

## Tiešsaistē un bezsaistē

Failu atvēršanai nekad nav vajadzīgs internets. Viens lasītājs tiek ielādēts no vietnes, kad to pirmo reizi vajadzēs: IFC dzinējs, pirmo reizi atverot IFC modeli ("IFC dzinēja palaišana…"). DWG un DXF lasītāji ir daļa no lietotnes.

:::offline
Jūs esat bezsaistē. Ja lietotnes joslas poga rāda {{ui:Gatavs darbam bezsaistē}}, katrs formāts atveras kā parasti. Ja nē, IFC modeli nevar atvērt, ja vien tas jau nebija atvērts šajā cilnē: vispirms atjaunojiet savienojumu. Skatiet [Tiešsaiste un bezsaiste](topic:online-offline).
:::

Lai izmantotu BimCraft bez savienojuma, lietotnes joslā noklikšķiniet uz {{ui:Saglabāt bezsaistei}}, kamēr esat tiešsaistē, un pagaidiet, līdz parādās {{ui:Gatavs darbam bezsaistē}}. Saglabātā kopija ir aptuveni 33 MB. Tajā ir IFC dzinējs, tāpēc IFC modeļi atveras arī bezsaistē. [Darbs bezsaistē](common:offline) vispārīgi izskaidro saglabātās kopijas.

## Mākoņglabāšana

Mākoņglabāšana vēl nav pieejama. Saglabājiet rediģētās kopijas savā datorā vai biroja failu serverī, kā jebkuru citu failu. Skatiet [Jūsu faili](common:your-files).

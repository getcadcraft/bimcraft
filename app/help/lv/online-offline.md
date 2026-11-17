---
title: Tiešsaiste un bezsaiste
summary: Ko BimCraft ielādē no vietnes, kā Saglabāt bezsaistei padara IFC modeļus un DWG rasējumus atveramus bez savienojuma un kāpēc nekas, ko atverat, nekad netiek augšupielādēts.
keywords: bezsaiste, tiešsaiste, internets, savienojums, nav tīkla, lidmašīnas režīms, apmeklējums objektā, saglabāt bezsaistei, gatavs darbam bezsaistē, augšupielāde, privātums, wasm, webassembly, IFC dzinējs, dwg, mākonis
from: 39e5c7eb
---

BimCraft lasa jūsu failus pārlūkprogrammas cilnē. Atverot, pārbaudot, rediģējot un saglabājot, faili nekur netiek nosūtīti – ne tiešsaistē, ne bezsaistē. [Darbs bezsaistē](common:offline) izskaidro bezsaistes kopijas visās lietotnēs; šī lapa aptver to, kas ir īpašs BimCraft.

## Ko BimCraft ielādē no vietnes

| Daļa | Kad ielādējas bez bezsaistes kopijas | Izmērs |
|---|---|---|
| Pati lietotne, ar 3D skatītāju un IFC dzinēja kodu | Kad atverat BimCraft | Vairāki megabaiti |
| IFC dzinēja WebAssembly daļa | Pirmais IFC fails cilnē: "Palaižam IFC dzinēju…" | Aptuveni 1.6 MB |

DWG un DXF rasējumiem, projekta un ģimeņu failiem un mapēm nav vajadzīgs nekas papildus: to lasītāji ir daļa no lietotnes.

## Saglabājiet BimCraft lietošanai bezsaistē

1. Atveriet BimCraft, kamēr esat tiešsaistē.
2. Noklikšķiniet {{ui:Saglabāt bezsaistei}} lietotnes joslā augšā.
3. Skatiet, kā poga skaita: "Saglabā 40 no 212", piemēram. BimCraft kopija ir aptuveni 11 MB, jo tā ietver IFC dzinēju.
4. Pagaidiet, līdz parādās {{ui:Gatavs darbam bezsaistē}}.

Kad tur ir rakstīts {{ui:Gatavs darbam bezsaistē}}, IFC modeļi, DWG un DXF rasējumi, projekta faili, mapes un šī palīdzība atveras bez savienojuma. Jums nav jāatver IFC vai DWG, lai "iesildītu" lasītājus.

Lai atjauninātu vai noņemtu kopiju, noklikšķiniet {{ui:Gatavs darbam bezsaistē}} un izvēlieties {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}.

## Ko rāda poga

| Poga | Nozīmē |
|---|---|
| {{ui:Saglabāt bezsaistei}} | Šajā pārlūkprogrammā vēl nav bezsaistes kopijas. Noklikšķiniet, lai saglabātu |
| "Saglabā *n* no *m*" | Saglabā; turiet cilni atvērtu, līdz tas ir pabeigts |
| {{ui:Gatavs darbam bezsaistē}} | Saglabāts. Novietojiet rādītāju, lai redzētu, kad; noklikšķiniet, lai atvērtu izvēlni |
| {{ui:Neizdevās saglabāt}} | Daži faili netika lejupielādēti. Pārbaudiet savienojumu un noklikšķiniet, lai mēģinātu vēlreiz. Pēdējā labā kopija, ja tāda ir, tiek saglabāta |
| {{ui:Bezsaiste nav pieejama}} | Šis logs nevar saglabāt bezsaistes kopiju (privātais logs vai pārvaldīts dators). Skat. [Darbs bezsaistē](common:offline) |

:::offline
Jūs esat bezsaistē.

- Ja poga rāda {{ui:Gatavs darbam bezsaistē}}, katra veida fails atveras kā parasti.
- Ja nerāda, darbojas tikai tas, ko šī cilne jau ir ielādējusi: lasītājs, kas nekad nav ielādējies šajā cilnē, nevar sākties, un šāda veida faila atvēršana statusa rindā parāda pārlūkprogrammas kļūdu. Nepārlādējiet cilni, kamēr atkal neesat tiešsaistē.
:::

## Kas nekad neprasa savienojumu

Kad BimCraft ir atvērts cilnē, šie darbojas bezsaistē arī bez saglabātas kopijas:

- Projekta un ģimeņu failu lasīšana un mapju pārbaude.
- Elementu atlasīšana, īpašību lasīšana un IFC vērtību rediģēšana modelī, kas jau ir atvērts.
- {{ui:Saglabāt kā IFC}} un {{ui:Lejupielādēt CSV}}: abi ir lejupielādes, kas veiktas cilnē.

## Kas vēl nav pieejams

- **Mākoņa saglabāšana.** Faili tiek saglabāti tikai jūsu datorā.

Skat. [Kur nonāk jūsu faili](common:your-files).

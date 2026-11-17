---
title: IFC5 alpha (IFCX failu) atvēršana un eksportēšana
summary: Laboratorijas opcija IFC5 alpha failu formātam (.ifcx): atveriet failu ar tā slāņiem, skatiet, ko nolasīšana nevarēja pārbaudīt, un eksportējiet atvērtos modeļus. Formāts vēl mainās, tāpēc vispirms izlasiet.
keywords: ifc5, ifcx, alpha, buildingsmart, json, slāņi, shēma, laboratorija, daudzumi, qto, eksportēt, importēt
from: cffe1669
---

IFC5 alpha (faila paplašinājums {{ui:.ifcx}}) ir failu formāts, ko buildingSMART joprojām izstrādā. Tas nav galīgs: faili un mūsu to nolasīšana var mainīties. Tāpēc tā ir laboratorijas opcija un tāpēc vispirms jāizlasa.

## Ieslēgt

1. Izvēlieties {{ui:Iestatījumi}}, pēc tam sadaļu {{ui:IFC5 alpha (IFCX)}} cilnē BimCraft.
2. Atzīmējiet {{ui:IFC5 alpha (IFCX) – formāts vēl mainās; vispirms izlasiet}}.

Tā ir izslēgta pēc noklusējuma. Kamēr tā ir izslēgta, .ifcx fails tiek noraidīts ar teikumu, kas norāda uz šo lapu. {{ui:Atvērt IFC5 alpha (.ifcx)…}} un eksporta poga {{ui:IFC5 alfa}} parādās, kad tā ir ieslēgta.

## Atvērt

- Izvēlieties .ifcx failu ar {{ui:Atvērt failu vai mapi}} (tas aizstāj atvērto modeli pēc parastā jautājuma par izmaiņām), vai
- izvēlieties {{ui:Atvērt IFC5 alpha (.ifcx)…}} un atlasiet vairākus failus kopā: failu, tā slāņus un shēmas failus, ko tas importē. Ja modelis jau ir atvērts, fails tiek **pievienots blakus**; x modeļu sarakstā to noņem atpakaļ, un tas ir atsaukums.

IFCX fails uzskaita mezglus (ceļu, tā bērnus, to, ko tas manto, un atribūtus). Vairāki faili var aprakstīt vienu un to pašu mezglu: vēlāks fails (slānis) pārraksta iepriekšējā faila atribūtus, un nulles bērns noņem bērnu. BimCraft tos saliek un zīmē rezultātu kā mazu IFC4 modeli: projekts, teritorija, ēka, stāvi un elementi ar nosaukumiem, klasēm, rekvizītiem, daudzumiem, krāsām un tīkliem.

Nekas netiek ielādēts no tīkla. Shēmas faili, ko fails importē (piemēram, `ifc@v5a.ifcx`), tiek izmantoti tikai tad, ja tos izvēlējāties kopā ar failu; citādi pārskats to norāda, un atribūti tiek nolasīti bez tipa pārbaudes.

### Pārskats

Pēc atvēršanas pārskatā uzskaitīts, ko nolasīšana atrada: dati, kas neatbilst savai shēmai, shēmas faili, kas nav doti, atribūti, kam šeit nav IFC nozīmes. Atribūti bez kartējuma tiek **paturēti** modelī, nevis izmesti, un tie tiek ierakstīti atpakaļ eksportā.

## Kas kļūst par ko

| IFCX failā | BimCraft |
|---|---|
| Mezgls ar IFC klasi (projekts, teritorija, ēka, stāvs, siena …) | Atbilstošais IFC4 elements; klase, ko šī nolasīšana nepazīst, kļūst par būvelementa vietturi (building element proxy) |
| Nosaukums, ko mezglam dod tā vecāks | Elementa nosaukums |
| Atribūti ar daudzuma veidu (garums, laukums, tilpums, masa …) | IFC4 daudzumu kopa ar nosaukumu `Qto_IFCX` (IFC4 daudzumi paliek IFC4 `Qto_*` kopās) |
| Citi rekvizītu atribūti | Rekvizītu kopa ar nosaukumu `Pset_IFCX` |
| Tīkla un transformācijas atribūti | Elementa trijstūri un novietojums; neredzami tīkli netiek zīmēti |
| Krāsa, necaurredzamība, materiāls, klasifikācija | Elementa virsmas stils, materiāls un klasifikācija |

Vienības tiek uzskatītas par metriem, ar Z uz augšu: alfa paziņo, ka vienības vēlāk tiks dokumentētas.

## Eksports

Izvēlieties {{ui:IFC5 alfa}} rīkjoslā, izlasiet piezīmi un pēc tam {{ui:Eksportēt .ifcx}}. Failam ir mūsu pašu galvene (autors CadCraft, versija ifcx_alpha), un tajā pašā teikts, ka tas ir alfa formāts. Katrs modelis tiek ierakstīts savās faila koordinātēs, metros, ar nosaukumiem, klasēm, rekvizītu kopām, daudzumiem (kā atribūtiem ar to veidu), krāsām un trijstūriem. Slāņi un mantošana tiek ierakstīti saplacināti. Pārbaudiet failu programmā, kurai to sūtāt.

## Ierobežojumi

- Izliektā ģeometrija (līknes, virsmas) netiek nolasīta: tikai trijstūru tīkli.
- Durvis un logi, kas iegulti sienā, tiek novietoti stāvā; siena, no kuras tie nākuši, nav saistīta.
- IFC4 `Qto_*` kopu nosaukumi tiek saglabāti kā mūsu pašu atribūtu grupas (`cadcraft::qto::…`); standarta alfa shēmai ir tikai daži daudzumu nosaukumi.
- Formāts var mainīties bez mūsu ietekmes; šodien izveidots fails rīt var nenolasīties.

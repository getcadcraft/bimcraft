---
title: Simboli, tipi un aktīvi, projektu veidnes un ātrie komplekti
summary: Bibliotēkai ir trīs veidu vienumi (simboli, tipi, aktīvi). Pievienojiet tipu projektam, sāciet no kopīgas projekta veidnes, pievienojiet ātro komplektu un kopīgojiet savas veidnes caur bibliotēkas augšupielādes lapu.
keywords: bibliotēka, simboli, tipi, aktīvi, tips, sienas tips, grīdas tips, jumta tips, griestu tips, projekta veidne, veidne, ātrais komplekts, komplekts, kopīgot, augšupielādēt, versija, izmaiņu žurnāls, LOD, klasifikācija, licence, piezīmes no prakses
from: e13b0e67
---

## Ko jūs darīsiet

Atrodiet bibliotēkā to, kas jums vajadzīgs, pēc tā, kas tas ir; pievienojiet tipu projektam, ko zīmējat; sāciet jaunu projektu no kāda kopīgotas veidnes un kopīgojiet savas veidnes, tipus un komplektus.

## Trīs bibliotēkas vienumu veidi

- **Simboli** ir zīmēšanas konvencijas: tikai 2D, zīmēti anotācijas izmērā, grupēti pēc nozares.
- **Tipi** nosaka, no kā elements sastāv: tā slāņi ar reālo biezumu, tā attīstības līmenis (LOD) un tā klasifikācijas kods. Tips tiek pievienots projektam, to nezīmē.
- **Aktīvi** ir fiziski objekti, piemēram, durvis, logi, mēbeles, armatūra un aprīkojums, ar plāna skatu un 3D ķermeni reālā izmērā.

Cilnē {{ui:Bibliotēka}} izvēlieties {{ui:Bibliotēka}} un izmantojiet **Vienuma veids**, lai rādītu Visu, Simbolus, Tipus vai Aktīvus.

## Tipa pievienošana projektam

1. Zem **Vienuma veids** izvēlieties **Tipi** un atveriet vienu.
2. Pārbaudiet tā uzbūvi, LOD un klasifikāciju zem attēla, pēc tam izvēlieties {{ui:Pievienot šim projektam}}.
3. Tas tiek pievienots kā sienas, grīdas, jumta vai griestu tips, ar kuru varat zīmēt. Ja tips ar šādu nosaukumu jau ir, jaunais tiek pievienots kā kopija, un jūsu tips paliek nemainīts. Viena atsaukšana to noņem.

## Projektu veidnes un ātrie komplekti

Izvēlieties {{ui:Komplekti}}, lai redzētu, ko cilvēki ir kopīgojuši.

- **Projekta veidne** ir IFC fails ar līmeņiem, režģiem, tipiem un iestatījumiem. {{ui:Saglabāt manās veidnēs}} to ievieto sadaļā Jauna ēka zem Sākt no.
- **Ātrais komplekts** ir bibliotēkas vienumu saraksts. {{ui:Rādīt komplekta vienumus}} tos parāda kā kartītes, ko varat novietot.
- Katram komplektam ir versija un izmaiņu žurnāls, jaunākais pirmais. Versija, kas sākas ar 0, ir paredzēta diskusijai; 1.0.0 ir tikai tam, ko līnijas īpašnieks ir pieņēmis.

## Kopīgojiet savas

- **Projekta veidne:** {{ui:Saglabāt kā veidni}}, atzīmējiet {{ui:Izveidot arī failu kopīgošanai Bibliotēkā}}, pievienojiet tās saturu un versiju. Jūs saņemat `.json` failu.
- **Ātrais komplekts:** sadaļā {{ui:Komplekti}} izvēlieties {{ui:Izveidot ātro komplektu no šā projekta}}. Tiek uzskaitīti bibliotēkas vienumi, ko projekts izmanto.
- **Tips:** sadaļā {{ui:Tipu komplekti}} atzīmējiet vienu tipu un izvēlieties {{ui:Saglabāt kā bibliotēkas vienumu…}}.

Augšupielādējiet failu bibliotēkas augšupielādes lapā. Tas iet caur to pašu pārskatīšanu kā jebkurš vienums, un licenci izvēlaties tur: katram vienumam ir norādīta licence. No vienumiem tiek prasīts LOD, IFC klase un klasifikācijas kods (kods, ne tikai nosaukums).

## Piezīmes no prakses

Katras bibliotēkas vienuma lapā pierakstījušies dalībnieki var pievienot piezīmi: izmantots reālā projektā, izmēģināts paraugprojektā vai atrasta problēma. Pāris vārdos pastāstiet, kāda veida projekts tas ir, un neminiet klientu nosaukumus. Piezīme ir publiska un nav atsauksme: tā nemaina vienumu.

## Noderīga informācija

- No lietotnes nekas netiek sūtīts. Faili tiek veidoti jūsu datorā, un jūs paši tos augšupielādējat.
- Komplekts, kas veidots no veidnes, satur IFC tekstu tieši tādu, kāds saglabāts. Pirms augšupielādes pārbaudiet, vai tajā nav nekas privāts.
- CadCraft bibliotēkas cilnē rāda simbolus un aktīvus; tipi un veidnes ir paredzēti BimCraft projektiem.

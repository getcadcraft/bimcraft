---
title: Punkti izvietošanai un izpildījuma pārbaudēm
summary: Numurējiet vietas, ko brigāde izvieto no atvērta modeļa — kolonnu centri, sienu gali, enkurbultas, caurules, jebkurš izvēlēts elements —, ierakstiet tos totālajai stacijai un pēc tam nolasiet brigādes izpildītos punktus un redziet, kas ir novirzē.
keywords: izvietošanas punkti, izvietošana, izvietot, totālā stacija, uzmērīšana, punktu fails, csv, txt, pnezd, penzd, xyz, ziemeļi, austrumi, augstums, izpildīts, pārbaude, pieļaujamā novirze, novirze, enkurbultas, kolonnu centri, sienu gali, caurules, uzmērījumu koordinātas, kartes pārveidošana
from: acea9606
---

Cilne {{ui:Points}} labajā pusē izveido punktus, ko brigāde izvieto uz vietas no atvērta modeļa, un pēc tam pārbauda punktus, ko tie izmēra.

## Punktu izveide

1. Atveriet IFC modeli un cilni {{ui:Points}}.
2. Atzīmējiet, ko izvietot: **kolonnu centrus** (katras kolonnas centra līnijas pamatni), **sienu galus** (abus sienas ass galus pie pamatnes), **enkurbultas**, **caurules** (elementus, kuru nosaukums vai tips norāda caurumu) un **izvēlētos elementus** (katru pie tā novietojuma punkta — vispirms izvēlieties tos skatā).
3. Izvēlieties pirmo numuru un prefiksu, koordinātas, mērvienības, kolonnas un failu:
   - **Modelis**: faila pašas koordinātas. **Uzmērīšanas režģis**: modeļa georeferences kartes režģis (rādīts tikai tad, ja IFC ir kartes pārveidošana), metros vai vienībā, ko izvēlaties.
   - Kolonnas **PNEZD** (punkts, ziemeļi, austrumi, augstums, apraksts), **PENZD** vai **XYZ**; **CSV** (komati) vai **TXT** (tabulēšanas zīmes).
4. Nospiediet {{ui:Make points}}: saraksts tos rāda, un skats atzīmē tos zilā krāsā. {{ui:Download the points}} ieraksta failu.

Punkti ir fiksētā secībā — pēc veida, tad rindās pa plānu —, tāpēc tos veidojot no tā paša modeļa vēlreiz, iegūst tos pašus skaitļus. Fails ir tas, ko atver CivilCraft un ko raksta CadCraft EXPORTPOINTS: viens punkts katrā rindā, trīs decimāldaļas, apraksts pēdiņās, ja tajā ir komats.

## Izpildīto punktu pārbaude

Kad brigāde nosūta atpakaļ to, ko izmērīja, izvēlieties **pieļaujamo novirzi** milimetros un to, kā savienot punktus — pēc **punkta numura** (tie paturēja jūsu numurus) vai pēc **tuvākā mērījuma** — un nospiediet {{ui:Read as-built points…}}. Nolasiet failu tajās pašās vienībās un koordinātās, ko ierakstījāt.

Katrs projektētais punkts tad ir **iekšā** pieļaujamajā novirzē, **ārpus** tās vai **nav izmērīts**, un katrs mērījums, ko neviens nepieprasīja, ir **papildu**. Tabula dod starpības vienībā, ko izvēlaties rīkjoslā, pēdas rādītas kā decimālās collas (izpildītais mīnus projektētais: austrumi, ziemeļi, augstums un attālums plānā). Skats atzīmē katru punktu zaļā vai sarkanā krāsā ar līniju uz mērījumu, un pelēkā, ja tas nav izmērīts. {{ui:Report (CSV)}} ieraksta visu salīdzinājumu.

Nekas šeit nemaina modeli. Vēl nav izveidots: izvietošana no pārsegumu malām, režģa krustpunktiem vai atverēm, ko veido jūsu vietā, un punktu sūtīšana tieši instrumentam — izmantojiet failu.

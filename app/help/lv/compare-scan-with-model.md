---
title: Salīdzināt skenējumu ar modeli un 4D grafiku
summary: Novērtēt katru modeļa elementu pret atvērtu punktu mākoni (uzbūvēts, daļēji, trūkst, nav sasniegts), redzēt uzbūvēto procentu, krāsot modeli pēc tā un, ielādējot 4D grafiku, uzskaitīt, kas atpaliek vai ir priekšlaicīgs 4D dienā.
keywords: skenējums, punktu mākonis, progress, pabeigtības procents, uzbūvēts, trūkst, atpaliek no grafika, priekšlaicīgs, 4D, vietas progress, novirze, as-built, lāzera skenējums, drons, salīdzināt
from: 6fdc9003
---

Atveriet IFC, atveriet blakus punktu mākoni (skatiet [Punktu mākoņi](topic:point-clouds)) un novietojiet to uz modeļa. Sadaļa {{ui:Salīdzināt skenējumu ar modeli}} parādās labajā panelī, kamēr mākonis ir atvērts.

## Ko tas dara

Nospiediet {{ui:Salīdzināt}}. Katrs modeļa elements tiek novērtēts pēc savas virsmas, jo tā ir tā, ko redz skeneris. Sešas tā kastes virsmas sadalītas šūnās ar aptuveni 20 cm; šūna skaitās, ja skenējuma punkts atrodas jūsu {{ui:Pielaide}} robežās (sākumā 50 mm) no virsmas. Skaitās labākā lielā virsma, tāpēc siena, kas skenēta no vienas puses, netiek sodīta par otru pusi.

- **Uzbūvēts**: vismaz 40 % virsmas redzams.
- **Daļēji**: no 10 % līdz 40 %.
- **Trūkst**: mazāk par to, bet skenējums sasniedz elementu (punkti 1.5 m attālumā no tā).
- **Nav sasniegts**: skeneris tur nekad nav bijis, tāpēc par to nekas netiek teikts.

Uzbūvētiem un daļēji uzbūvētiem elementiem tas arī dod skenējuma punktu vidējo novirzi no modeļa virsmas un saka, vai elements ir savā vietā (tolerances robežās), tuvu (līdz trīskāršai tolerancei) vai nobīdīts (tālāk). Tas redz tikai novirzes līdz piecām tolerancēm; elements, kas uzbūvēts tālāk no savas vietas nekā tas, parādās kā trūkstošs.

Kopsavilkums dod uzbūvēto procentu starp elementiem, ko skenējums sasniedz, pēc skaita un pēc tilpuma. Daļēji uzbūvētie elementi tiek skaitīti atsevišķi un netiek pieskaitīti uzbūvētajiem.

## Pret 4D grafiku

Ar ielādētu 4D grafiku (skatiet [4D grafiks](topic:4d-schedule)) rezultāts izmanto arī dienu, ko iestatījāt 4D slīdnī: elementi, kam diena jau pienākusi un kurus skenējums neuzrāda kā uzbūvētus, ir **atpaliek no grafika**; elementi, kam diena vēl nav pienākusi, bet kas ir uzbūvēti, ir **priekšlaicīgi**. Atpalikušie elementi uzskaitīti {{ui:Problēmas}}, un tabulu var filtrēt tikai uz tiem. Bez grafika par atpalikušiem vai priekšlaicīgiem nekas netiek teikts.

## Tabula un modelis

Noklikšķiniet rindu, lai atlasītu elementu. {{ui:Krāsot modeli}} nokrāso elementus zaļus (uzbūvēts), dzeltenbrūnus (daļēji), sarkanus (trūkst) vai pelēkus (nav sasniegts); {{ui:Savas krāsas}} atjauno tās. {{ui:Saglabāt CSV}} ieraksta tabulu. Poga „Atzīmēt atbilstošos elementus kā pārbaudītus uz vietas“ atzīmē katru redzamo, uzbūvēto un tolerances robežās esošo elementu kā pārbaudītu uz vietas (LOD 500, metode skenējums) vienā solī, ko var atsaukt. Skatiet [Atzīmēt elementus kā pārbaudītus vai uz vietas pārbaudītus](topic:verification).

:::warning
Šis salīdzina katra elementa kasti ar skenējuma punktiem tolerances robežās. Tas **nav uzmērījums, apjomu aprēķins vai maksājuma pamats**. Elements, kas paslēpts aiz skenēta (siena aiz apšuvuma, plāksne zem grīdas apdares), dala ar to virsmu un var šķist uzbūvēts; izliekts vai slīps elements ir kaste lielāka par tā korpusu un var šķist daļējs vai trūkstošs. Pirms rīcības apskatiet sarakstu. Atļauju komentāri un progresa piezīmes šeit nav iekļauti: tie paliek kolonnās, kurās tos glabājat.
:::

Asistents var veikt to pašu salīdzinājumu ar rīku {{ui:Salīdzināt skenējumu ar modeli}}; tas modelī neko nemaina.

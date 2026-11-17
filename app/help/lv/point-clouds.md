---
title: Punktu mākonis blakus modelim
summary: Atveriet lāzerskenējumu (LAS, LAZ, E57, PLY, PCD, PTX, PTS vai XYZ) 3D skatā atsevišķi vai kopā ar IFC modeli, krāsojiet to, izgrieziet šauru šķēlumu, mēriet līdz tā punktiem un nododiet to zīmēšanas lietotnei, lai izsekotu izpildītās līnijas.
keywords: punktu mākonis, lāzerskenējums, skenējums, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, izpildījums, as-built, uzmērīšana, reģistrācija, šķēlums, plāna griezums, piesaiste, mērīt, izsekot, skenējums uz BIM
from: d0a3e740
---

## Ko jūs darīsiet

Apskatiet ēkas lāzerskenējumu blakus tās modelim: pārbaudiet, vai izbūvētais atbilst projektam, izmēriet attālumus starp skenētiem punktiem un izgrieziet šauru šķēlumu, lai nolasītu sienas, durvis un kolonnas.

## Soļi

1. Atveriet mākoni: {{ui:Atvērta}} `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` vai `.xyz` failu vai ievelciet to lapā (skatiet tēmu par punktu mākoņu formātiem, lai uzzinātu, ko katrs no tiem nodrošina un ko eksportēt no skenera pašas programmatūras). Ja ir atvērts modelis, mākonis pievienojas modelim 3D skatā; mākoņa atvēršana nekad neaizver modeli vai tā nesaglabātās izmaiņas. Bez modeļa mākonis atveras pats.
2. Zem rīkjoslas parādās mākoņa josla. Tajā norādīts, cik punktu tiek rādīti un cik to ir failā.
3. Izvēlieties {{ui:Krāsot pēc}}: faila paša krāsas (ja skeneris tās saglabāja), {{ui:Augstums}}, {{ui:Intensitāte}}, {{ui:Klase}} (LiDAR klases, piemēram, zeme, veģetācija un ēka) vai {{ui:Viena krāsa}}. {{ui:Izmērs}} padara punktus lielākus vai mazākus.
4. Zem {{ui:Griezums}} noklikšķiniet uz {{ui:Plāns}}, lai paturētu tikai šauru joslu 1,2 m virs zemākā punkta, skatot no augšas: sienas, durvju atveres un kolonnas izskatās kā stāva plāns. {{ui:Priekšpuse}} un {{ui:Sāns}} izgriež vertikālas joslas fasādēm un griezumiem. Joslu pārvietojiet ar {{ui:Pie}} un mainiet {{ui:Biezums}} (metros). {{ui:Izslēgts}} atkal parāda visu mākoni.
5. Rīkjoslā noklikšķiniet uz {{ui:Mērīt}}. Rādītājs piesaistās mākoņa punktiem (uzraksts saka "punktu mākonis"), tāpēc varat mērīt no sienas līdz sienai griezumā vai no modeļa elementa līdz skenējumam. Modeļa stūris vai mala, kas ir sasniedzama, joprojām ir prioritāra.
6. Ar {{ui:Mērīt}} › {{ui:Atrašanās vieta}} mākoņa punkts parāda tā platuma un garuma grādus no paša mākoņa koordinātu sistēmas, ja failā ir norādīta sistēma.
7. {{ui:Paslēpt}} uz brīdi paslēpj mākoni; {{ui:Noņemt}} to izņem. {{ui:Rādīt}} › {{ui:Punktu mākonis}} paslēpj vai parāda joslu.

## Kur mākonis atrodas

{{ui:Novietot}} joslā norāda, kā mākonis saskaņojas ar modeli:

- **Modeļa koordinātes**: mākoņa skaitļi ir paša modeļa (skenējums reģistrēts pēc projekta koordinātēm).
- **Karšu koordinātes**: modelim ir kartes pārveidojums (IfcMapConversion), un mākonis ir tajā pašā projicētajā sistēmā: mākonis tiek novietots caur to. Ja abās norādītas dažādas sistēmas, statusa rindā tas tiek norādīts.
- **Centrēts pret modeli**: kad neviens no abiem neievieto mākoni modeļa tuvumā, tā vidus tiek novietots uz modeļa vidus, bet zemākais punkts uz modeļa grīdas. Lai to mainītu, izvēlieties citu variantu.

Ja fails nenorāda mērvienības, BimCraft lasa metrus un josla piedāvā {{ui:Mērvienības}}.

## Izsekot izpildītās līnijas

Noklikšķiniet uz {{ui:Izsekot programmā CadCraft}}, lai nodotu mākoni zīmēšanas lietotnei jaunā cilnē. Tas tur atveras zem zīmējuma, kur plāna šķēlums un objektu piesaiste ļauj uzzīmēt sienas pār skenējumu. Skatiet CadCraft tēmu par punktu mākoņiem.

## Cik punktu

Skenējumā var būt simtiem miljonu punktu. BimCraft nolasa katru punktu vienu reizi un paturēt vienmērīgu daļu, ko zīmēt: {{ui:Rādīt}} joslā nosaka, cik tādu (1, 2, 5 vai 10 miljoni). Vairāk punktu prasa vairāk atmiņas un ātrāku grafikas karti. Skaitļi pa LiDAR klasēm attiecas uz visiem failā esošajiem punktiem.

:::note
Faili tiek nolasīti šajā datorā; nekas netiek augšupielādēts. Tiek nolasīti LAS 1.0–1.4 un LAZ (LAZ faili līdz 1 GB, kas tiek turēti atmiņā nolasīšanas laikā); E57 faili līdz 6 miljoniem punktu un 512 MB pašlaik (lielākus skenējumus eksportējiet kā LAS vai LAZ); PLY, PCD un PTX pilnībā; teksta mākoņi ir `x y z`, ar krāsu (`r g b`) un intensitātes kolonnām, ja tās ir.
:::

## Vairāki skenējumi

Skenējumus, kas uzņemti no dažādām pozīcijām, var reģistrēt vienā koordinātu sistēmā, precizēt ar ICP un eksportēt kā vienu LAS vai E57: skatiet [Vairāku skenējumu reģistrēšana vienā](topic:register-scans).

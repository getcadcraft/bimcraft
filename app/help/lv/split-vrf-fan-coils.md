---
title: Split, VRF un fankoila bloki
summary: Novietojiet iekšējos blokus sienas, kasetes un kanālu tipa, ārējos blokus split un VRF sistēmām, refnet savienojumus un 2 cauruļu vai 4 cauruļu fankoilus, katru ar tā aukstumaģenta, ūdens, kondensāta un gaisa vadu savienojumiem, un zīmējiet līniju komplektus starp tiem, izmērus nosakot pēc tabulas, ko varat mainīt.
keywords: split, mini split, minisplit, multi split, vrf, vrv, mainīga aukstumaģenta plūsma, siltumsūknis, iekšējais bloks, ārējais bloks, kondensācijas bloks, sienas montāža, augsta siena, kasete, kanālu tipa, paslēpts, fankoils, fcu, 2 cauruļu, 4 cauruļu, refnet, atzarojuma savienojums, y savienojums, līniju komplekts, lineset, aukstumaģents, šķidruma līnija, gāzes līnija, sūkšanas līnija, acr, varš, kondensāts, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Ko jūs darīsiet

Novietojiet split vai multi-split un VRF sistēmas blokus un to fankoilus modelī, pēc tam savienojiet tos ar līniju komplektiem: šķidruma un gāzes līniju no ACR vara, piestiprinātu pie bloku pieslēgvietām. Blokus darbina tāpat kā jebkuru citu iekārtu ar pieslēgvietām, skatiet [MEP aprīkojums ar pieslēgvietām](topic:mep-equipment): tā pati josla, Rekvizīti, pieslēgvietas un [savienojumi](topic:mep-connections).

:::note
Šis ir zīmēšanas un koordinācijas palīglīdzeklis. Bloki ir vispārīgas formas, kuru izmērus nosaka ievadītās vērtības, nevis kāda ražotāja izstrādājumi. To cauruļu izmēri ir no tabulas ar **tipiskām piemēra vērtībām** R410A un R32 iekārtām, nevis no kāda ražotāja: reālos izmērus nosaka bloka ražotāja montāžas rokasgrāmata, un garie posmi vai lielas augstuma starpības tos maina. Mainiet tabulu vai ievadiet izmērus, lai tie atbilstu blokiem, ko izmantojat.
:::

## Novietojiet bloku

1. Ieslēdziet {{ui:Zīmēšana}}, atveriet {{ui:Būvējums}} un izvēlieties {{ui:Aprīkojums}}.
2. Izvēlieties veidu un iestatiet tā vērtības:

| Veids | Jūs iestatāt | Tā pieslēgvietas |
|---|---|---|
| Split iekšējais bloks, sienas | jauda, šķidruma un gāzes līnija, garums, dziļums, augstums, kondensāta izmērs | aukstumaģenta šķidrums un gāze, kondensāta novadcaurule (labajā galā, pie sienas) |
| Split iekšējais bloks, kasete | jauda, šķidruma un gāzes līnija, panelis, korpuss, augstums, kondensāta izmērs | aukstumaģenta šķidrums un gāze, kondensāta novadcaurule (vienā pusē, augšā) |
| Split iekšējais bloks, kanālu tipa | jauda, šķidruma un gāzes līnija, garums, platums, augstums, padeves un atgaisas atveres, kondensāta izmērs | padeves gaisa vads ārā, atgaisas vads iekšā, aukstumaģenta šķidrums un gāze, kondensāta novadcaurule |
| Split ārējais bloks | jauda, šķidruma un gāzes līnija, platums, dziļums, augstums | aukstumaģenta šķidrums un gāze (labajā pusē) |
| VRF ārējais bloks | jauda, šķidruma un gāzes līnija, platums, dziļums, augstums | aukstumaģenta šķidrums un gāze (priekšpusē, zemu) |
| Refnet savienojums | šķidruma vai gāzes līnija, slodze katrā atzarā, caurule katrā galā | ieeja, atzars A, atzars B |
| Fankoila bloks | 2 vai 4 caurules, garums, platums, augstums, padeves un atgaisas atveres, spirāles caurule un sistēma, apsildes caurule, kondensāta izmērs | padeves gaisa vads ārā, atgaisas vads iekšā, spirāle ieejā un izejā, apsilde ieejā un izejā (4 cauruļu), kondensāta novadcaurule |

3. Iestatiet **Augstums**: bloka pamatnes augstumu virs līmeņa. Sienas bloka pamatne ir tā apakšējā mala (bieži 2100 mm); kasetes — tās virsma griestos; refnet — tās caurules centra līnijas augstums.
4. Noklikšķiniet, kur tas jāliek ({{key:R}} pagriež to par 90°).

**Jauda** ir bloka nominālā dzesēšanas jauda kW, blakus norādot Btu/h. Ja **Šķidruma līnija** un **Gāzes līnija** paliek iestatītas uz **No tabulas**, bloka savienojumi ņem tabulas izmērus šai jaudai; izvēlieties caurules izmēru, lai izmantotu sava bloka paša vērtību. Refnet ieeja tiek izmērīta abiem atzariem kopā, katrs atzars — pēc savas slodzes.

Aukstumaģenta pieslēgvietas darbojas abos virzienos (siltumsūknis var darboties jebkurā virzienā). Kondensāta novadcaurule ir caurules izmērs kā jebkura noteka.

## Zīmējiet līniju komplektu

1. Izvēlieties divus elementus ({{key:Shift}}+klikšķis uz otrā): ārējo bloku un iekšējo bloku (viens split), vai ārējo bloku un refnet, refnet un iekšējo bloku, vai divus refnet (VRF).
2. Atveriet {{ui:Būvējums}} un izvēlieties {{ui:Līniju komplekts}}.

BimCraft zīmē šķidruma un gāzes posmus starp to brīvajām pieslēgvietām, no katras pieslēgvietas līdz kopīgam augstumam, no ACR vara (mīkstināta spole līdz 1-5/8 in, velkta caurule virs tās) kā vienu soli {{ui:Atsaukt}}. Refnet pieņem tikai savu līniju: ieejā no ārējās puses un izejā caur atzaru uz iekšējiem blokiem. Katrs posms ņem sava pēcplūsmas gala (iekšējā bloka vai refnet ieejas) izmēru; ja otra gala pieslēgvieta ir cita izmēra, {{ui:Pārbaudīt savienojumus}} to parāda: tur jāliek reducētājs. Diviem iekšējiem blokiem vajadzīgs refnet starp tiem.

Posmus pēc tam pārvietojiet kā jebkuru caurules posmu; to gali paliek pieslēgvietās. Posmus starp līmeņiem zīmē ar {{ui:Caurule}}: caurule, kas sākas aukstumaģenta pieslēgvietā, ņem tās sistēmu, ACR varu un izmēru.

## Mainiet līniju komplekta tabulu

Atveriet {{ui:Būvējums}} un izvēlieties {{ui:Līniju komplekta izmēri}}. Katrā rindā norādīts: līdz šai jaudai (kW), šī šķidruma caurule un šī gāzes caurule.

| Līdz | Šķidrums | Gāze |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Tās ir sākotnējās, tipiskās vērtības. Mainiet rindu, pievienojiet vai noņemiet rindas un izvēlieties {{ui:Saglabāt}}: tabula tiek glabāta modelī, tāpēc to izmanto visi, kas strādā ar failu, un {{ui:Atsaukt}} to atgriež. {{ui:Izmantot tipiskās vērtības}} atjauno sākotnējo tabulu. Jau novietotie elementi saglabā savas pieslēgvietas, kamēr tās nemainat.

## IFC failā

Split un VRF sistēmu iekšējie un ārējie bloki ir IfcUnitaryEquipment ar tipu SPLITSYSTEM, un objekta tips norāda, kāds tas ir ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fankoila bloks ir IfcUnitaryEquipment ar tipu AIRHANDLER un objekta tipu "Fan coil unit": IFC4 nav fankoila tipa, un ventilators, spirāle un filtrs vienai telpai ir tas, ko apraksta AIRHANDLER. Refnet savienojums ir IfcPipeFitting ar tipu JUNCTION ("Refnet joint"). IFC2X3 failos tiek saglabāti IfcEnergyConversionDevice un IfcFlowFitting ar atbilstošiem tipiem.

Aukstumaģenta pieslēgvietas un posmi ir REFRIGERATION sistēmās (viena šķidruma līnijām, otra gāzes līnijām), kondensāts — DRAINAGE sistēmā. ACR posmi tiek nosaukti pēc ārējā diametra. Līniju komplekta tabula ir rekvizītu kopa CadCraft_HvacLineSets projektā.

Skatiet arī [MEP aprīkojums ar pieslēgvietām](topic:mep-equipment), [Caurulu un gaisa vadu pieslēgšana aprīkojumam](topic:mep-connections) un [Caurules un gaisa vadi](topic:pipes-and-ducts).

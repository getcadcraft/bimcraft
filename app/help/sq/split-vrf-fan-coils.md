---
title: Njësitë split, VRF dhe fan coil
summary: Vendos njësitë e brendshme me mur, kasetë dhe me kanal, njësitë e jashtme single-split dhe VRF, bashkimet refnet dhe fan coil me 2 ose 4 tuba, secila me lidhjet e ftohësit, ujit, kondensatit dhe kanaleve, dhe vizato grupet e linjave ndërmjet tyre, të përmasuara nga një tabelë që mund ta ndryshosh.
keywords: split, mini split, minisplit, multi split, vrf, vrv, rrjedhje ftohësi e ndryshueshme, pompë nxehtësie, njësi e brendshme, njësi e jashtme, njësi kondensuese, montuar në mur, mur i lartë, kasetë, me kanal, e fshehur, fan coil, fcu, 2 tuba, 4 tuba, refnet, bashkim dege, bashkim y, grup linjash, lineset, ftohës, linja e lëngut, linja e gazit, linja e thithjes, acr, bakër, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Çfarë do të bësh

Vendos njësitë e një sistemi split, multi-split ose VRF dhe të fan coil-ëve në model, pastaj lidhi ato me grupe linjash: një linjë lëngu dhe një linjë gazi prej bakri ACR, të fiksuara te portet e njësive. Njësitë punojnë si çdo element tjetër te [Pajisjet MEP me porte](topic:mep-equipment): e njëjta shirit, Vetitë, portet dhe [lidhjet](topic:mep-connections).

:::note
Ky është një ndihmës hartimi dhe koordinimi. Njësitë janë forma gjenerike të përmasuara sipas vlerave që shkruan, jo produkte të një prodhuesi. Përmasat e tubave të tyre vijnë nga një tabelë me **vlera tipike shembull** për pajisje R410A dhe R32, jo nga ndonjë prodhues: manuali i instalimit të prodhuesit të njësisë vendos përmasat reale, dhe linjat e gjata ose ndryshimet e mëdha të lartësisë i ndryshojnë ato. Ndrysho tabelën, ose shkruaj përmasat, për t'u përshtatur me njësitë që përdor.
:::

## Vendos një njësi

1. Ndiz {{ui:Vizato}}, hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Pajisjet}}.
2. Zgjidh llojin dhe cakto vlerat e tij:

| Lloji | Ti cakton | Portet e tij |
|---|---|---|
| Njësi e brendshme split, mur | kapaciteti, linja e lëngut dhe e gazit, gjatësia, thellësia, lartësia, përmasa e kondensatit | ftohës lëng dhe gaz, drenazhi i kondensatit (në skajin e djathtë, afër murit) |
| Njësi e brendshme split, kasetë | kapaciteti, linja e lëngut dhe e gazit, paneli, trupi, lartësia, përmasa e kondensatit | ftohës lëng dhe gaz, drenazhi i kondensatit (në një anë, afër majës) |
| Njësi e brendshme split, me kanal | kapaciteti, linja e lëngut dhe e gazit, gjatësia, gjerësia, lartësia, hapjet e furnizimit dhe të kthimit, përmasa e kondensatit | dalja e kanalit të furnizimit, hyrja e kanalit të kthimit, ftohës lëng dhe gaz, drenazhi i kondensatit |
| Njësi e jashtme split | kapaciteti, linja e lëngut dhe e gazit, gjerësia, thellësia, lartësia | ftohës lëng dhe gaz (në anën e djathtë) |
| Njësi e jashtme VRF | kapaciteti, linja e lëngut dhe e gazit, gjerësia, thellësia, lartësia | ftohës lëng dhe gaz (në përpara, ulët) |
| Bashkim refnet | linja e lëngut ose e gazit, ngarkesa në secilën degë, tubi në secilin skaj | hyrja, dega A, dega B |
| Njësi fan coil | 2 ose 4 tuba, gjatësia, gjerësia, lartësia, hapjet e furnizimit dhe të kthimit, tubi dhe sistemi i serpentinës, tubi i ngrohjes, përmasa e kondensatit | dalja e kanalit të furnizimit, hyrja e kanalit të kthimit, hyrja dhe dalja e serpentinës, hyrja dhe dalja e ngrohjes (4 tuba), drenazhi i kondensatit |

3. Cakto **Në**: lartësinë e bazës së njësisë mbi nivel. Baza e një njësie muri është pjesa e poshtme e saj (shpesh 2100 mm); e një kasete është fytyra e saj në tavan; e një refnet-i është lartësia e boshtit të tubit të tij.
4. Kliko aty ku shkon ({{key:R}} e rrotullon 90°).

**Kapaciteti** është kapaciteti nominal i ftohjes së njësisë në kW, me Btu/h pranë. Me **Linja e lëngut** dhe **Linja e gazit** të lëna në **Nga tabela**, lidhjet e njësisë marrin përmasat e tabelës për atë kapacitet; zgjidh një përmasë tubi për të përdorur atë të njësisë tënde. Hyrja e një refnet-i përmasohet për të dy degët së bashku, secila degë për ngarkesën e vet.

Portet e ftohësit punojnë në të dy drejtimet (një pompë nxehtësie punon në secilin drejtim). Drenazhi i kondensatit është një përmasë tubi si çdo drenazh tjetër.

## Vizato një grup linjash

1. Zgjidh dy elemente ({{key:Shift}}+klik te i dyti): një njësi e jashtme dhe një e brendshme (një split i vetëm), ose një njësi e jashtme dhe një refnet, një refnet dhe një njësi e brendshme, ose dy refnet (VRF).
2. Hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Grup linjash}}.

BimCraft vizaton linjat e lëngut dhe të gazit ndërmjet portave të lira të tyre, duke dalë nga çdo portë dhe ngritur deri në një lartësi të përbashkët, me bakër ACR (spirale e recotur deri në 1-5/8 in, tub i tërhequr mbi të), si një hap i vetëm i {{ui:Zhbëj}}. Një refnet merr vetëm linjën e vet: hyn në hyrjen nga ana e jashtme dhe del në një degë drejt njësive të brendshme. Secila linjë merr përmasën e skajit të saj në rrjedhë (njësia e brendshme, ose hyrja e refnet-it); kur porta e skajit tjetër ka përmasë tjetër, {{ui:Kontrollo lidhjet}} e liston: aty vendoset një reduktor. Dy njësi të brendshme kanë nevojë për një refnet ndërmjet tyre.

Zhvendos linjat më vonë si çdo vijë tubi; skajet e tyre mbeten në portet. Linjat ndërmjet niveleve vizatohen me {{ui:Tub}}: një tub që nis nga një port ftohësi merr sistemin, bakrin ACR dhe përmasën e vet.

## Ndrysho tabelën e grupit të linjave

Hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Përmasat e grupit të linjave}}. Çdo rresht thotë: deri në këtë kapacitet (kW), ky tub lëngu dhe ky tub gazi.

| Deri në | Lëngu | Gazi |
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

Këto janë vlerat fillestare, tipike. Ndrysho një rresht, shto ose hiq rreshta dhe zgjidh {{ui:Ruaj}}: tabela mbahet në model, kështu që të gjithë ata që punojnë në skedar e përdorin, dhe {{ui:Zhbëj}} e kthen mbrapsht. {{ui:Përdor vlerat tipike}} e vendos përsëri tabelën fillestare. Elementët e vendosur tashmë mbajnë portet e tyre derisa t'i ndryshosh.

## Në skedarin IFC

Njësitë e brendshme dhe të jashtme të sistemeve split dhe VRF janë IfcUnitaryEquipment të tipit SPLITSYSTEM, me tipin e objektit që tregon cila ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Një fan coil është IfcUnitaryEquipment i tipit AIRHANDLER me tipin e objektit "Fan coil unit": IFC4 nuk ka tip fan coil, dhe një ventilator, një serpentinë dhe një filtër për një dhomë janë ato që përshkruan AIRHANDLER. Një bashkim refnet është një IfcPipeFitting i tipit JUNCTION ("Refnet joint"). Skedarët IFC2X3 marrin IfcEnergyConversionDevice dhe IfcFlowFitting me tipet përkatëse.

Portet dhe linjat e ftohësit janë në sistemet REFRIGERATION (një për linjat e lëngut, një për linjat e gazit), kondensati në një sistem DRAINAGE. Linjat ACR emërohen sipas diametrit të jashtëm. Tabela e grupit të linjave është grupi i vetive CadCraft_HvacLineSets në projekt.

Shih edhe [Pajisjet MEP me porte](topic:mep-equipment), [Lidh tubat dhe kanalet me pajisjet](topic:mep-connections) dhe [Tubat dhe kanalet](topic:pipes-and-ducts).

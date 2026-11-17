---
title: Split-, VRF- og fancoil-enheder
summary: Placér vægmonterede, kassette- og kanalindeenheder, enkelt-split- og VRF-udeenheder, refnet-samlinger og 2-rørs- eller 4-rørs fancoils, hver med sine forbindelser til kølemiddel, vand, kondensat og kanal, og tegn ledningssættene mellem dem, dimensioneret ud fra en tabel, du kan ændre.
keywords: split, minisplit, multisplit, vrf, vrv, variabel kølemiddelstrøm, varmepumpe, indendørsenhed, udendørsenhed, kondenseringsenhed, vægmonteret, højvæg, kassette, kanal, skjult, fancoil, fcu, 2-rør, 4-rør, refnet, forgreningssamling, y-samling, ledningssæt, lineset, kølemiddel, væskeledning, gasledning, sugeledning, acr, kobber, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Hvad du skal gøre

Placér enhederne i et split-, multisplit- eller VRF-system og dets fancoils i modellen, og forbind dem med ledningssæt: en væske- og en gasledning i ACR-kobber, fastgjort til enhedernes porte. Enhederne fungerer som alle andre dele i [MEP-udstyr med porte](topic:mep-equipment): samme linje, **Egenskaber**, porte og [forbindelser](topic:mep-connections).

:::note
Dette er et hjælpemiddel til tegning og koordinering. Enhederne er generiske former, dimensioneret efter de værdier, du skriver, ikke producenters produkter. Deres rørdimensioner kommer fra en tabel med **typiske eksempelværdier** for R410A- og R32-udstyr, ikke fra en producent: producentens installationsvejledning afgør de reelle dimensioner, og lange rørstrækninger eller store højdeforskelle ændrer dem. Ændr tabellen, eller skriv dimensionerne, så de passer til de enheder, du bruger.
:::

## Placér en enhed

1. Slå {{ui:Tegn}} til, åbn {{ui:Build}} og vælg {{ui:Udstyr}}.
2. Vælg typen og angiv dens værdier:

| Type | Du angiver | Dens porte |
|---|---|---|
| Split-indendørsenhed, væg | kapacitet, væske- og gasledning, længde, dybde, højde, kondensatstørrelse | kølemiddel væske og gas, kondensatafløb (på den højre ende, tæt ved væggen) |
| Split-indendørsenhed, kassette | kapacitet, væske- og gasledning, panel, krop, højde, kondensatstørrelse | kølemiddel væske og gas, kondensatafløb (på én side, tæt ved toppen) |
| Split-indendørsenhed, kanal | kapacitet, væske- og gasledning, længde, bredde, højde, tilluft- og returluftåbninger, kondensatstørrelse | tilluftskanal ud, returluftskanal ind, kølemiddel væske og gas, kondensatafløb |
| Split-udendørsenhed | kapacitet, væske- og gasledning, bredde, dybde, højde | kølemiddel væske og gas (på højre side) |
| VRF-udendørsenhed | kapacitet, væske- og gasledning, bredde, dybde, højde | kølemiddel væske og gas (foran, lavt) |
| Refnet-samling | væske- eller gasledning, belastningen på hver gren, røret i hver ende | indgang, gren A, gren B |
| Fancoil-enhed | 2-rør eller 4-rør, længde, bredde, højde, tilluft- og returluftåbninger, spoleledning og system, varmeledning, kondensatstørrelse | tilluftskanal ud, returluftskanal ind, spole ind og ud, varme ind og ud (4-rør), kondensatafløb |

3. Angiv **Ved**: højden af enhedens bund over niveauet. En vægenheds bund er dens underside (ofte 2100 mm); en kassettes er dens flade i loftet; en refnets er højden af dens rørs midterlinje.
4. Klik, hvor den skal stå ({{key:R}} drejer den 90°).

**Kapacitet** er enhedens nominelle kølekapacitet i kW, med Btu/h ved siden af. Når **Væskeledning** og **Gasledning** står på **Fra tabellen**, får enhedens forbindelser tabellens dimensioner for den kapacitet; vælg en rørdimension for at bruge din egen enheds. En refnets indgang er dimensioneret til begge grene samlet, og hver gren til sin egen belastning.

Kølemiddelporte virker i begge retninger (en varmepumpe kører i begge retninger). Kondensatafløbet er en rørdimension ligesom ethvert afløb.

## Tegn et ledningssæt

1. Vælg to dele ({{key:Shift}}+klik på den anden): en udendørsenhed og en indendørsenhed (et enkelt split), eller en udendørsenhed og en refnet, en refnet og en indendørsenhed, eller to refnets (VRF).
2. Åbn {{ui:Build}} og vælg {{ui:Ledningssæt}}.

BimCraft tegner væske- og gasløbene mellem deres frie porte, ud af hver port og op til en fælles højde, i ACR-kobber (udglødet ring op til 1-5/8 in, trukket rør over det), som ét trin i {{ui:Fortryd}}. En refnet tager kun sin egen ledning: ind i sin indgang fra udendørssiden og ud af en gren mod indendørsenhederne. Hvert løb får dimensionen fra dets nedstrøms ende (indendørsenheden eller refnetens indgang). Hvis den anden ende har en port af en anden størrelse, viser {{ui:Kontrollér forbindelser}} det: der skal en reduktion ind. To indendørsenheder kræver en refnet imellem dem.

Flyt løbene bagefter som enhver rørstrækning; deres ender bliver på portene. Løb mellem etager tegnes med {{ui:Rør}}: et rør startet fra en kølemiddelport får sit system, ACR-kobber og sin dimension.

## Ændr tabellen for ledningssæt

Åbn {{ui:Build}} og vælg {{ui:Ledningssætstørrelser}}. Hver række siger: op til denne kapacitet (kW), dette væskerør og dette gasrør.

| Op til | Væske | Gas |
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

Dette er de typiske startværdier. Ændr en række, tilføj eller fjern rækker, og vælg {{ui:Gem}}: tabellen gemmes i modellen, så alle, der arbejder på filen, bruger den, og {{ui:Fortryd}} tager den tilbage. {{ui:Brug de typiske værdier}} sætter startabellen tilbage. Dele, der allerede er placeret, beholder deres porte, indtil du ændrer dem.

## I IFC-filen

Indendørs- og udendørsenheder i split- og VRF-systemer er IfcUnitaryEquipment af typen SPLITSYSTEM, og objekttypen siger hvilken ("Split-indendørsenhed, vægmonteret", "Split-indendørsenhed, loftskassette", "Split-indendørsenhed, kanal", "Split-udendørsenhed", "VRF-udendørsenhed"). En fancoil er IfcUnitaryEquipment af typen AIRHANDLER med objekttypen "Fancoil-enhed": IFC4 har ingen fancoil-type, og en ventilator, en spole og et filter til ét rum er det, AIRHANDLER beskriver. En refnet-samling er en IfcPipeFitting af typen JUNCTION ("Refnet-samling"). IFC2X3-filer får IfcEnergyConversionDevice og IfcFlowFitting med de tilsvarende typer.

Kølemiddelporte og -løb er i REFRIGERATION-systemer (ét for væskeledningerne, ét for gasledningerne), og kondensat er i et DRAINAGE-system. ACR-løb navngives efter udvendig diameter. Ledningssættabellen er egenskabssættet CadCraft_HvacLineSets på projektet.

Se også [MEP-udstyr med porte](topic:mep-equipment), [Forbind rør og kanaler til udstyr](topic:mep-connections) og [Rør og kanaler](topic:pipes-and-ducts).

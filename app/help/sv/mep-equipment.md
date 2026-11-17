---
title: MEP-utrustning med anslutningspunkter
summary: Placera generiska luftbehandlingsaggregat, fläktar, pumpar, pannor, varmvattenberedare, terminalenheter, don, galler och tankar med dimensioner som du anger, var och en med de rör- och kanalanslutningar som andra sträckor kopplar till.
keywords: mep, utrustning, luftbehandlingsaggregat, ahu, fläkt, kanalfläkt, pump, panna, varmvattenberedare, terminalenhet, vav, don, galler, register, tank, anslutningspunkt, anslutningar, anslutning, munstycke, halsdimension, vvs, mekanisk, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Vad du gör

Placera utrustningen i ändarna på dina rör och kanaler. Varje del är en generisk form som dimensioneras efter de värden du skriver in, med sina anslutningar som **anslutningspunkter**: var ett rör eller en kanal ansluter, vilket system, åt vilket håll flödet går och vilken dimension. Rör och kanaler som ritas från en anslutningspunkt tar dess dimension och system och sitter fast i den: se [Anslut rör och kanaler till utrustning](topic:mep-connections).

:::note
Det här är ett hjälpmedel för ritning och samordning, dimensionerat av en ingenjör. Utrustningen är inte en tillverkares produkt: inga kapaciteter, vikter eller tillverkarnas anslutningsdimensioner. Ta in en tillverkares modell från ditt MEP-program som IFC när du behöver det.
:::

## Placera en del

1. Slå på {{ui:Rita}}, öppna {{ui:Bygge}} och välj {{ui:Utrustning}}.
2. Välj typ i fältet och skriv in dess dimensioner. Varje typ begär sina egna:

| Typ | Du anger | Dess anslutningspunkter |
|---|---|---|
| Luftbehandlingsaggregat | längd, bredd, höjd; tilluft- och frånluftsöppningar; dimension och system för värmebatteriets rör; dimension för kondensat | tilluftskanal ut, frånluftskanal in, batteri in och ut, kondensatavlopp |
| Kanalfläkt | diameter, längd, system | kanal in och ut |
| Pump | rördimension, system | inlopp och utlopp |
| Panna | längd, bredd, höjd, rördimension, gasdimension, rökgasrörets diameter | värmeframledning ut och returledning in, gas in, rökgas ut |
| Varmvattenberedare | diameter, höjd, rördimension, gas eller el | kallvatten in, varmvatten ut (och gas in och rökgas ut när den eldas med gas) |
| Terminalenhet | längd, bredd, höjd, rund inlopp, utloppets bredd och höjd | tilluft in och ut |
| Don | front, hals, system | sin hals (luft in) |
| Galler | frontens bredd och höjd, halsens bredd och höjd, system | sin hals (luft ut till frånluft- eller avluftskanal) |
| Tank | diameter, höjd, rördimension, system | inlopp upptill, utlopp nära botten |
| Radiator | längd, höjd, djup, rördimension, system | framledning in upptill i ena änden, retur ut nedtill i den andra |
| Konvektor / panelvärmare | längd, höjd, djup, rördimension, system | framledning in i ena änden, retur ut i den andra |
| Tillverkares familj | familjen (se [Rörspecifikationer, ventiler, spjäll och tillverkares familjer](topic:pipe-specs)) | de anslutningspunkter som familjen fick |

3. Ange **Vid**, höjden för dess botten över nivån. Höjden för ett don eller ett galler är dess front: skriv in takhöjden.
4. Skriv in en **Tagg** om du vill ha en (`AHU-1`); nästa del av samma typ får nästa nummer.
5. Flytta pekaren över planen: fotavtrycket och dess anslutningspunkter följer med. Tryck på {{key:R}} för att vrida den 90°. Klicka där den ska placeras.

Rördimensioner är stålrördimensioner (ASME B36.10M). Ett rör som ritas från en pump i ett annat material får samma nominella dimension i sitt eget material.

## Ändra eller ta bort den

Markera den i planen eller 3D-vyn. Egenskaper visar alla dimensioner du skrev in, dess tagg, X, Y, höjd och vridning, samt varje anslutningspunkt: dess dimension, system, åt vilket håll flödet går och om något är anslutet. Varje ändring är ett steg i {{ui:Ångra}}; sträckor som är fästa vid dess anslutningspunkter följer med. {{key:Delete}} tar bort den; sträckor som var fästa vid den finns kvar, och anslutningskontrollen listar dem.

## I IFC-filen

Varje typ sparas som sin IFC-klass: IfcUnitaryEquipment (luftbehandlingsaggregat), IfcFan, IfcPump, IfcBoiler (panna; en varmvattenberedare är en IfcBoiler av typen water med objekttypen "Water heater"), IfcAirTerminalBox (terminalenhet), IfcAirTerminal (don, galler) och IfcTank, med en typ som delas av alla delar av samma slag och dimensioner. IFC2X3-filer får IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal och IfcFlowStorageDevice med motsvarande typer. Varje anslutningspunkt är en IfcDistributionPort placerad där anslutningen sitter, vänd utåt, med sin flödesriktning och sitt system; andra program läser vilket rör som ansluter till vilken anslutningspunkt. Delen ansluts till systemet för var och en av sina anslutningspunkter och bär de biblioteksobjektsuppsättningar som varje placerat biblioteksobjekt har.

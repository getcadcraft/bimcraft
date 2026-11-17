---
title: MEP-udstyr med porte
summary: Placér generiske luftbehandlingsenheder, ventilatorer, pumper, kedler, varmtvandsbeholdere, terminalenheder, diffusorer, riste og tanke med dimensioner, du angiver, hver med de rør- og kanalforbindelser, som andre føringer sammenkædes med.
keywords: mep, udstyr, luftbehandlingsenhed, ahu, ventilator, rørventilator, pumpe, kedel, varmtvandsbeholder, terminalenhed, vav, diffusor, rist, tank, port, porte, forbindelse, tud, halsdimension, hvac, vvs, mekanisk, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Hvad du gør

Placér udstyret ved enderne af dine rør og kanaler. Hvert stykke er en generisk form, dimensioneret ud fra de værdier, du skriver, med sine forbindelser som **porte**: hvor et rør eller en kanal sluttes til den, hvilket system, hvilken vej flowet går, og hvilken dimension. Rør og kanaler tegnet fra en port overtager dens dimension og system og sidder fast i den: se [Forbind rør og kanaler til udstyr](topic:mep-connections).

:::note
Dette er en hjælp til tegning og koordinering, dimensioneret af en ingeniør. Udstyret er ikke et fabrikatprodukt: ingen kapaciteter, vægte eller fabrikanters tilslutningsdimensioner. Hent en fabrikants model fra dit MEP-program som IFC, når du har brug for den.
:::

## Placér et stykke

1. Slå {{ui:Tegn}} til, åbn {{ui:Build}} og vælg {{ui:Udstyr}}.
2. I bjælken vælger du typen og skriver dens dimensioner. Hver type spørger efter sine egne:

| Type | Du skriver | Dens porte |
|---|---|---|
| Luftbehandlingsenhed | længde, bredde, højde; tilluft- og returåbninger; dimension og system for varmeflade-røret; dimension for kondensat | tilluftskanal ud, returkanal ind, varmeflade ind og ud, kondensatafløb |
| Rørventilator | diameter, længde, system | kanal ind og ud |
| Pumpe | rørdimension, system | indløb og udløb |
| Kedel | længde, bredde, højde, rørdimension, gasdimension, røgkanalens diameter | varmeforsyning ud og retur ind, gas ind, røgkanal ud |
| Varmtvandsbeholder | diameter, højde, rørdimension, gas eller el | koldt vand ind, varmt vand ud (og gas ind og en røgkanal, når den brænder gas) |
| Terminalenhed | længde, bredde, højde, rund indgang, udgangens bredde og højde | tilluft ind og ud |
| Diffusor | front, hals, system | dens hals (luft ind) |
| Rist | frontens bredde og højde, halsens bredde og højde, system | dens hals (luft ud til retur- eller udsugningskanalen) |
| Tank | diameter, højde, rørdimension, system | indløb foroven, udløb nær bunden |
| Radiator | længde, højde, dybde, rørdimension, system | fremløb ind foroven i den ene ende, retur ud forneden i den anden |
| Konvektor / panelvarmer | længde, højde, dybde, rørdimension, system | fremløb ind i den ene ende, retur ud i den anden |
| Fabrikantfamilie | familien (se [Rørspecifikationer, ventiler, spjæld og fabrikanters familier](topic:pipe-specs)) | de porte, familien har fået |

3. Angiv **Kote**, højden af dens fod over niveauet. En diffusors eller rists højde er dens front: skriv loftshøjden.
4. Skriv en **Tag**, hvis du vil have en (`AHU-1`); det næste stykke af samme type får det næste nummer.
5. Flyt markøren over planen: fodaftrykket og dets porte følger med. Tryk {{key:R}} for at dreje det 90°. Klik, hvor det skal stå.

Rørdimensioner er stålrørsdimensioner (ASME B36.10M). Et rør tegnet fra en pumpe i et andet materiale overtager den samme nominelle dimension i sit eget materiale.

## Ændr eller fjern den

Vælg den i planen eller 3D-visningen. Egenskaber viser hver dimension, du skrev, dens tag, X, Y, højde og drejning og hver port: dens dimension, system, hvilken vej flowet går, og om noget er tilsluttet. Hver ændring er ét trin i {{ui:Fortryd}}; føringer fastlåst til dens porte flytter med den. {{key:Delete}} fjerner den; føringer, der var fastlåst til den, bliver og listes i {{ui:Kontrollér forbindelser}}.

## I IFC-filen

Hver type gemmes som sin IFC-klasse: IfcUnitaryEquipment (luftbehandlingsenhed), IfcFan, IfcPump, IfcBoiler (kedel; en varmtvandsbeholder er en IfcBoiler af typen water med objekttypen "Water heater"), IfcAirTerminalBox (terminalenhed), IfcAirTerminal (diffusor, rist) og IfcTank, med en type, der deles af alle stykker af samme type og dimensioner. IFC2X3-filer får IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal og IfcFlowStorageDevice med de tilsvarende typer. Hver port er en IfcDistributionPort placeret, hvor forbindelsen er, vendende udad, med sin flowretning og sit system; andre programmer læser, hvilken føring der forbinder til hvilken port. Stykket sammenkobles med systemet for hver af dets porte og bærer de bibliotekselementsæt, hvert placeret bibliotekselement har.

---
title: MEP-utstyr med porter
summary: Plasser generiske luftbehandlingsaggregater, vifter, pumper, kjeler, varmtvannsberedere, terminalenheter, diffusorer, gitter og tanker, dimensjonert etter verdiene du skriver inn, hver med rør- og kanaltilkoblingene andre strekninger kobles til.
keywords: mep, utstyr, luftbehandlingsaggregat, ahu, vifte, rørvifte, pumpe, kjele, varmtvannsbereder, terminalenhet, vav, diffusor, gitter, luftgitter, tank, port, porter, tilkobling, hals, dimensjon, vvs, hvac, mekanisk, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Hva du skal gjøre

Plasser utstyret i endene av rørene og kanalene dine. Hvert stykke er en generisk form dimensjonert etter verdiene du skriver inn, med tilkoblingene som **porter**: der et rør eller en kanal går inn, hvilket system, hvilken vei strømmen går, og hvilken dimensjon. Rør og kanaler tegnet fra en port tar dens dimensjon og system og sitter fast i den: se [Koble rør og kanaler til utstyr](topic:mep-connections).

:::note
Dette er et tegne- og koordineringshjelpemiddel, dimensjonert av en ingeniør. Utstyret er ikke et produsentprodukt: ingen ytelse, vekt eller produsentens tilkoblingsdimensjoner. Ta med en produsentmodell fra MEP-programmet ditt som IFC når du trenger den.
:::

## Plasser et stykke

1. Slå på {{ui:Tegn}}, åpne {{ui:Bygg}} og velg {{ui:Utstyr}}.
2. Velg typen i linjen og skriv inn dimensjonene. Hver type spør etter sine egne:

| Type | Du skriver inn | Portene |
|---|---|---|
| Luftbehandlingsaggregat | lengde, bredde, høyde; tilluft- og returåpninger; batteriets rørdimensjon og system; kondensatdimensjon | tilluftskanal ut, returkanal inn, batteri inn og ut, kondensatavløp |
| Rørvifte | diameter, lengde, system | kanal inn og ut |
| Pumpe | rørdimensjon, system | innløp og utløp |
| Kjele | lengde, bredde, høyde, rørdimensjon, gassdimensjon, røykrørdiameter | varmeforsyning ut og retur inn, gass inn, røyk ut |
| Varmtvannsbereder | diameter, høyde, rørdimensjon, gass eller elektrisk | kaldtvann inn, varmtvann ut (og gass inn og røykrør når den brenner gass) |
| Terminalenhet | lengde, bredde, høyde, rundt innløp, utløpsbredde og -høyde | tilluft inn og ut |
| Diffusor | flate, hals, system | halsen (luft inn) |
| Gitter | flatebredde og -høyde, halsbredde og -høyde, system | halsen (luft ut til retur- eller avtrekkskanalen) |
| Tank | diameter, høyde, rørdimensjon, system | innløp øverst, utløp nær bunnen |
| Radiator | lengde, høyde, dybde, rørdimensjon, system | fremløp øverst i den ene enden, retur ut nederst i den andre |
| Konvektor / panelovn | lengde, høyde, dybde, rørdimensjon, system | fremløp i den ene enden, retur ut i den andre |
| Produsentens familie | familien (se [Rørspesifikasjoner, ventiler, spjeld og produsentfamilier](topic:pipe-specs)) | portene familien fikk |

3. Sett **Ved**, høyden på bunnen over nivået. Høyden til en diffusor eller et gitter er flaten: skriv inn takhøyden.
4. Skriv inn en **Merke** hvis du vil ha en (`AHU-1`); neste stykke av samme type får neste nummer.
5. Flytt pekeren over planen: fotavtrykket og portene følger den. Trykk {{key:R}} for å snu den 90°. Klikk der den skal stå.

Rørdimensjonene er stål-rørdimensjoner (ASME B36.10M). Et rør tegnet fra en pumpe i et annet materiale tar samme nominelle dimensjon i sitt eget materiale.

## Endre eller fjern det

Velg det i planen eller 3D-visningen. Egenskaper viser alle dimensjonene du skrev inn, merket, X, Y, høyde og vinkel, og hver port: dimensjon, system, hvilken vei strømmen går, og om noe er koblet til. Hver endring er ett steg i {{ui:Angre}}; strekninger festet til portene flytter seg med det. {{key:Delete}} fjerner det; strekninger som var festet til det, blir værende og listes av tilkoblingskontrollen.

## I IFC-filen

Hver type lagres som sin IFC-klasse: IfcUnitaryEquipment (luftbehandlingsaggregat), IfcFan, IfcPump, IfcBoiler (kjele; en varmtvannsbereder er en IfcBoiler av type vann med objekttypen "Water heater"), IfcAirTerminalBox (terminalenhet), IfcAirTerminal (diffusor, gitter) og IfcTank, med en type delt av alle stykker av samme type og dimensjon. IFC2X3-filer får IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal og IfcFlowStorageDevice med de samme typene. Hver port er en IfcDistributionPort plassert der tilkoblingen er, vendt utover, med sin strømningsretning og sitt system; andre programmer leser hvilken strekning som kobler til hvilken port. Stykket blir med i systemet til hver av sine porter, og bærer de bibliotekselementsettene hvert plasserte bibliotekselement har.

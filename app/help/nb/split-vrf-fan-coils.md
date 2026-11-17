---
title: Split-, VRF- og fan coil-enheter
summary: Plasser vegg-, kassett- og kanalinnedeler, enkeltsplit- og VRF-utedeler, refnet-ledd og 2-rørs eller 4-rørs fan coil-enheter, hver med tilkoblinger for kuldemedium, vann, kondens og kanal, og tegn ledningssettene mellom dem med dimensjoner fra en tabell som kan endres.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variable refrigerant flow, varmepumpe, innedel, utedel, kondensenhet, veggmontert, høy vegg, kassett, kanal, skjult, fan coil, fcu, 2-rørs, 4-rørs, refnet, grenledd, y-ledd, ledningssett, lineset, kuldemedium, væskeledning, gassledning, sugeledning, acr, kobber, kondens, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Hva du skal gjøre

Plasser enhetene i et split-, multisplit- eller VRF-system og fan coil-enhetene i modellen, og koble dem sammen med ledningssett: en væske- og en gassledning i ACR-kobber, festet til enhetenes porter. Enhetene fungerer som alle andre deler i [MEP-utstyr med porter](topic:mep-equipment): samme plasseringslinje, Egenskaper, porter og [tilkoblinger](topic:mep-connections).

:::note
Dette er et hjelpemiddel for tegning og koordinering. Enhetene er generiske former som dimensjoneres etter verdiene som skrives inn, ikke produkter fra en produsent. Rørdimensjonene kommer fra en tabell med **typiske eksempelverdier** for R410A- og R32-utstyr, ikke fra noen produsent: installasjonshåndboken fra enhetsprodusenten bestemmer de faktiske dimensjonene, og lange rør eller store høydeforskjeller endrer dem. Endre tabellen, eller skriv inn dimensjonene, slik at de samsvarer med enhetene som brukes.
:::

## Plasser en enhet

1. Slå på {{ui:Tegn}}, åpne {{ui:Bygg}} og velg {{ui:Utstyr}}.
2. Velg type og angi verdiene:

| Type | Angis | Porter |
|---|---|---|
| Split-innedel, vegg | kapasitet, væske- og gassledning, lengde, dybde, høyde, kondensdimensjon | kuldemedium væske og gass, kondensavløp (på høyre ende, nær veggen) |
| Split-innedel, kassett | kapasitet, væske- og gassledning, panel, kropp, høyde, kondensdimensjon | kuldemedium væske og gass, kondensavløp (på den ene siden, nær toppen) |
| Split-innedel, kanal | kapasitet, væske- og gassledning, lengde, bredde, høyde, tilluft- og returåpninger, kondensdimensjon | tilluftskanal ut, returluftskanal inn, kuldemedium væske og gass, kondensavløp |
| Split-utedel | kapasitet, væske- og gassledning, bredde, dybde, høyde | kuldemedium væske og gass (på høyre side) |
| VRF-utedel | kapasitet, væske- og gassledning, bredde, dybde, høyde | kuldemedium væske og gass (foran, lavt) |
| Refnet-ledd | væske- eller gassledning, belastningen på hver grein, røret i hver ende | inntak, grein A, grein B |
| Fan coil-enhet | 2-rørs eller 4-rørs, lengde, bredde, høyde, tilluft- og returåpninger, batterirør og system, varmerør, kondensdimensjon | tilluftskanal ut, returluftskanal inn, batteri inn og ut, varme inn og ut (4-rørs), kondensavløp |

3. Angi **Kote**: høyden på enhetens underkant over nivået. For en veggenhet er det underkanten (ofte 2100 mm), for en kassett er det flaten i taket, og for et refnet er det høyden til rørets senterlinje.
4. Klikk der enheten skal stå ({{key:R}} roterer den 90°).

**Kapasitet** er enhetens nominelle kjøleeffekt i kW, med Btu/h ved siden av. Med **Væskeledning** og **Gassledning** på **Fra tabellen** tar enhetens tilkoblinger dimensjonene i tabellen for denne kapasiteten; velg en rørdimensjon for å bruke enhetens egne. Innløpet til et refnet dimensjoneres for begge grenene samlet, og hver gren for sin egen belastning.

Tilkoblingene for kuldemedium virker i begge retninger (en varmepumpe går i begge retninger). Kondensavløpet er en rørdimensjon som alle andre avløp.

## Tegn et ledningssett

1. Velg to deler ({{key:Shift}}+klikk på den andre): en utedel og en innedel (enkeltsplit), eller en utedel og et refnet, et refnet og en innedel, eller to refnet (VRF).
2. Åpne {{ui:Bygg}} og velg {{ui:Ledningssett}}.

BimCraft tegner væske- og gassledningene mellom de frie portene deres, ut av hver port og opp til en felles høyde, i ACR-kobber (glødet rull opp til 1-5/8 in, trukket rør over), som ett steg i {{ui:Angre}}. Et refnet tar bare sin egen ledning: inn i innløpet fra utesiden og ut av en grein mot innedelene. Hver ledning tar dimensjonen til sin nedstrøms ende (innedelen, eller refnetets innløp). Der porten i den andre enden har en annen dimensjon, lister {{ui:Kontroller tilkoblinger}} det: der skal det brukes en reduksjon. To innedeler krever et refnet mellom seg.

Flytt ledningene etterpå som alle andre rørtrekk; endene blir værende på portene. Ledninger mellom nivåer tegnes med {{ui:Rør}}: et rør som starter på en port for kuldemedium, får systemet, ACR-kobberet og dimensjonen.

## Endre tabellen for ledningssett

Åpne {{ui:Bygg}} og velg {{ui:Ledningssettstørrelser}}. Hver rad sier: opp til denne kapasiteten (kW), denne væskeledningen og denne gassledningen.

| Opp til | Væske | Gass |
|---|---|---|
| 2,8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5,6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22,4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Dette er utgangsverdiene, de typiske verdiene. Endre en rad, legg til eller fjern rader, og velg {{ui:Lagre}}: tabellen lagres i modellen, slik at alle som jobber med filen bruker den, og {{ui:Angre}} tar den tilbake. {{ui:Bruk de typiske verdiene}} setter utgangstabellen tilbake. Deler som allerede er plassert, beholder portene sine til de endres.

## I IFC-filen

Innedeler og utedeler i split- og VRF-systemer er IfcUnitaryEquipment av typen SPLITSYSTEM, der objekttypen sier hvilken ("Split-innedel, veggmontert", "Split-innedel, takkassett", "Split-innedel, kanal", "Split-utedel", "VRF-utedel"). En fan coil-enhet er IfcUnitaryEquipment av typen AIRHANDLER med objekttypen "Fan coil-enhet": IFC4 har ingen fan coil-type, og en vifte, et batteri og et filter for ett rom er det AIRHANDLER beskriver. Et refnet-ledd er en IfcPipeFitting av typen JUNCTION ("Refnet-ledd"). IFC2X3-filer får IfcEnergyConversionDevice og IfcFlowFitting med de tilsvarende typene.

Porter og ledninger for kuldemedium ligger i REFRIGERATION-systemer (ett for væskeledningene, ett for gassledningene), og kondens i et DRAINAGE-system. ACR-ledninger navngis etter utvendig diameter. Tabellen for ledningssett er egenskapssettet CadCraft_HvacLineSets på prosjektet.

Se også [MEP-utstyr med porter](topic:mep-equipment), [Koble rør og kanaler til utstyr](topic:mep-connections) og [Rør og kanaler](topic:pipes-and-ducts).

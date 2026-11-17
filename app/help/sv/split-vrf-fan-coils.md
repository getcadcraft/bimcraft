---
title: Split-, VRF- och fläktkonvektorenheter
summary: Placera inomhusenheter för vägg, kassett och kanal, utomhusenheter för split och VRF, refnet-förgreningar och fläktkonvektorer med 2-rör eller 4-rör, var och en med sina anslutningar för köldmedium, vatten, kondensat och kanal, och rita ledningsseten mellan dem, dimensionerade från en tabell som du kan ändra.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variabelt köldmedieflöde, värmepump, inomhusenhet, utomhusenhet, kondensatorenhet, väggmonterad, högväggsmonterad, kassett, kanal, dold, fläktkonvektor, fcu, 2-rör, 4-rör, refnet, grenrör, y-rör, ledningsset, lineset, köldmedium, vätskeledning, gasledning, sugledning, acr, koppar, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Vad du gör

Placera enheterna i ett split-, multisplit- eller VRF-system och dess fläktkonvektorer i modellen, och koppla sedan ihop dem med ledningsset: en vätskeledning och en gasledning i ACR-koppar, fästa vid enheternas portar. Enheterna fungerar som alla andra delar i [MEP-utrustning med portar](topic:mep-equipment): samma verktygsfält, Egenskaper, portar och [anslutningar](topic:mep-connections).

:::note
Detta är ett hjälpmedel för ritning och samordning. Enheterna är generiska former med storlekar efter de värden du skriver in, inte en tillverkares produkter. Deras rördimensioner kommer från en tabell med **typiska exempelvärden** för utrustning med R410A och R32, inte från någon tillverkare: tillverkarens installationshandbok avgör de verkliga dimensionerna, och långa rördragningar eller stora höjdskillnader ändrar dem. Ändra tabellen, eller skriv in dimensionerna, så att de stämmer med de enheter du använder.
:::

## Placera en enhet

1. Aktivera {{ui:Rita}}, öppna {{ui:Bygge}} och välj {{ui:Utrustning}}.
2. Välj typ och ange dess värden:

| Typ | Du anger | Dess portar |
|---|---|---|
| Split-inomhusenhet, vägg | kapacitet, vätskeledning och gasledning, längd, djup, höjd, kondensatstorlek | köldmedium vätska och gas, kondensatavlopp (i höger ände, nära väggen) |
| Split-inomhusenhet, kassett | kapacitet, vätskeledning och gasledning, panel, kropp, höjd, kondensatstorlek | köldmedium vätska och gas, kondensatavlopp (på ena sidan, nära taket) |
| Split-inomhusenhet, kanal | kapacitet, vätskeledning och gasledning, längd, bredd, höjd, tilluft- och frånluftsöppningar, kondensatstorlek | tilluftskanal ut, frånluftskanal in, köldmedium vätska och gas, kondensatavlopp |
| Split-utomhusenhet | kapacitet, vätskeledning och gasledning, bredd, djup, höjd | köldmedium vätska och gas (på högersidan) |
| VRF-utomhusenhet | kapacitet, vätskeledning och gasledning, bredd, djup, höjd | köldmedium vätska och gas (på framsidan, lågt) |
| Refnet-förgrening | vätske- eller gasledning, belastningen på varje gren, röret i varje ände | inlopp, gren A, gren B |
| Fläktkonvektor | 2-rör eller 4-rör, längd, bredd, höjd, tilluft- och frånluftsöppningar, spolrör och system, värmerör, kondensatstorlek | tilluftskanal ut, frånluftskanal in, spole in och ut, värme in och ut (4-rör), kondensatavlopp |

3. Ange **Vid**: höjden för enhetens botten över nivån. En väggenhets botten är dess undersida (ofta 2100 mm); en kassetts är dess framsida i taket; en refnets är höjden för dess rörs mittlinje.
4. Klicka där den ska stå ({{key:R}} vrider den 90°).

**Kapacitet** är enhetens nominella kylkapacitet i kW, med Btu/h bredvid. Med **Vätskeledning** och **Gasledning** kvar på **Från tabellen** får enhetens anslutningar tabellens storlekar för den kapaciteten; välj en rördimension för att använda din enhets egna. Ett refnets inlopp dimensioneras för båda grenarna tillsammans, och varje gren för sin egen belastning.

Köldmedieportar fungerar åt båda hållen (en värmepump går i båda riktningar). Kondensatavloppet är en rördimension som vilket avlopp som helst.

## Rita ett ledningsset

1. Markera två delar (håll {{key:Shift}} och klicka på den andra): en utomhusenhet och en inomhusenhet (en enkel split), eller en utomhusenhet och en refnet, en refnet och en inomhusenhet, eller två refnets (VRF).
2. Öppna {{ui:Bygge}} och välj {{ui:Ledningsset}}.

BimCraft ritar vätske- och gasdragningarna mellan deras fria portar, ut från varje port och upp till en gemensam höjd, i ACR-koppar (glödgad spole upp till 1-5/8 in, dragen rör över det), som ett steg i {{ui:Ångra}}. En refnet tar bara sin egen ledning: in i sitt inlopp från utomhussidan och ut från en gren mot inomhusenheterna. Varje dragning får storleken på sin nedströmsända (inomhusenheten, eller refnets inlopp). Där den andra ändans port har en annan storlek visar {{ui:Kontrollera anslutningar}} det: där ska en reducering sitta. Två inomhusenheter kräver en refnet mellan sig.

Flytta dragningarna efteråt som vilken rördragning som helst; deras ändar sitter kvar på portarna. Dragningar mellan plan ritas med {{ui:Rör}}: ett rör som startas på en köldmedieport får dess system, ACR-koppar och dess storlek.

## Ändra tabellen för ledningsset

Öppna {{ui:Bygge}} och välj {{ui:Ledningssetstorlekar}}. Varje rad säger: upp till denna kapacitet (kW), detta vätskerör och detta gasrör.

| Upp till | Vätska | Gas |
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

Det här är utgångsvärden, typiska värden. Ändra en rad, lägg till eller ta bort rader och välj {{ui:Spara}}: tabellen sparas i modellen, så alla som arbetar med filen använder den, och {{ui:Ångra}} tar tillbaka den. {{ui:Använd de typiska värdena}} återställer utgångstabellen. Enheter som redan placerats behåller sina portar tills du ändrar dem.

## I IFC-filen

Inomhus- och utomhusenheter i split- och VRF-system är IfcUnitaryEquipment av typen SPLITSYSTEM, där objekttypen anger vilken (”Split-inomhusenhet, väggmonterad”, ”Split-inomhusenhet, takkassett”, ”Split-inomhusenhet, kanal”, ”Split-utomhusenhet”, ”VRF-utomhusenhet”). En fläktkonvektor är IfcUnitaryEquipment av typen AIRHANDLER med objekttypen ”Fläktkonvektor”: IFC4 har ingen typ för fläktkonvektor, och en fläkt, en spole och ett filter för ett rum är vad AIRHANDLER beskriver. En refnet-förgrening är en IfcPipeFitting av typen JUNCTION (”Refnet-förgrening”). IFC2X3-filer får IfcEnergyConversionDevice och IfcFlowFitting med motsvarande typer.

Köldmedieportar och -dragningar finns i REFRIGERATION-system (ett för vätskeledningarna, ett för gasledningarna), kondensat i ett DRAINAGE-system. ACR-dragningar namnges efter yttre diameter. Tabellen för ledningsset är egenskapsuppsättningen CadCraft_HvacLineSets på projektet.

Se även [MEP-utrustning med portar](topic:mep-equipment), [Anslut rör och kanaler till utrustning](topic:mep-connections) och [Rör och kanaler](topic:pipes-and-ducts).

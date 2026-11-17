---
title: Maak 'n hele projekvouer oop
summary: Wys BimCraft na 'n projekvouer om elke model, sy rugsteunkopieë en skakels tegelyk te sien, en laat die Begin hier-blokkie voorstel watter lêer om mee te werk.
keywords: vouer, gids, projekvouer, netwerkskyf, bediener, begin hier, watter lêer, rugsteun, skakels, xrefs, onlangse vouers, sleep vouer
from: 16fbdce2
---

## Wat jy gaan doen

Maak 'n hele projekvouer oop, soos die een wat jy vir 'n taak gekry het, en laat BimCraft dit uitsorteer: watter modelle daar is, watter kopieë rugsteun is, wat na wat skakel, watter lêers beskadig is, en watter lêer jy waarskynlik wil oopmaak.

Slegs die paar kilobyte wat elke modelkaart nodig het, word gelees, so 'n vouer op 'n netwerkskyf of 'n gesinkroniseerde wolkvouer is goed.

## Stappe

:::chromium
1. Klik {{ui:Maak 'n vouer oop}} links (of in die middel van die leë skerm).
2. Kies die projekvouer in die venster wat oopmaak en klik **Kies** (of **Laai op** of **Maak oop**, afhangend van jou stelsel).
3. Klik **Sien lêers** wanneer die blaaier vra "Laat die webwerf lêers sien?". Dit laat die oortjie net die vouer lees; niks word opgelaai nie.
4. Wag terwyl die statuslyn tel: "Lys die vouer: … lêers", dan "Gaan Revit-lêers na: … van …".
:::

:::firefox
1. Klik {{ui:Maak 'n vouer oop}} links (of in die middel van die leë skerm).
2. Kies die projekvouer in die venster wat oopmaak en bevestig. Firefox kan vra dat jy bevestig dat die bladsy die vouer se lêers mag lees; hulle bly steeds op jou rekenaar.
3. Wag terwyl die statuslyn sê "Lees die vouer: … lêers", dan "Gaan Revit-lêers na: … van …".
:::

:::safari
1. Klik {{ui:Maak 'n vouer oop}} links (of in die middel van die leë skerm).
2. Kies die projekvouer in die venster wat oopmaak en klik **Laai op**. Ten spyte van die woord, verlaat niks jou Mac nie: die lêers word net aan die oortjie oorhandig.
3. Wag terwyl die statuslyn sê "Lees die vouer: … lêers", dan "Gaan Revit-lêers na: … van …".
:::

Jy kan ook die vouer uit {{pick:mac=Finder|windows=Lêerverkenner|linux=jou lêerbestuurder}} op die bladsy **sleep**. 'n Gesleepte vouer maak sonder enige toestemmingsvraag oop in elke blaaier.

## Wat jy behoort te sien

Die vouerverslag vul die middel:

- Die vouernaam, tellings van modelle, KS-tekeninge, IFC-modelle en lêers, en die totale grootte.
- Rooi of amber notas as enige lêers onvolledig is of enige gekoppelde lêers ontbreek uit die vouer.
- Die {{ui:Begin hier}}-blokkie: die lêer wat BimCraft voorstel om oop te maak, met die redes.
- **Modelle**: een ry per model, met sy rugsteunkopieë saamgegroepeer daaronder.
- **Gekoppelde en verwysde lêers**, **IFC-modelle**, **CAD-tekeninge** en **Opsy gesit**, wanneer die vouer enige het.

Links vat die {{ui:Vouer}}-paneel dit op; **Probleme** sê "Geen" wanneer elke kopie gesond is.

## Gebruik die Begin hier-blokkie

Die blokkie noem een lêer en sê hoekom, byvoorbeeld:

- "Nuutste gestoorde werk in hierdie vouer (3 Maart 2025)."
- "*Consultant.rvt* is in ander modelle gekoppel, so dit is agtergrond, nie die lêer om te wysig nie."
- "*Tower.rvt* lyk na die voor-die-hand-liggende keuse, maar dit is beskadig; sy laaste goeie kopie is van …"
- "Dit is 'n sentrale model: in Revit, maak dit oop met "Create New Local" en werk in die plaaslike kopie."

1. Lees die redes.
2. Klik {{ui:Maak sy kaart oop}} om daardie lêer se kaart te lees, of {{ui:Wys dit in die lys}} om sy ry in **Modelle** te vind.
3. Kontroleer met wie ook al die projek laas gewerk het voordat jy daarop staatmaak. Die blokkie sê dit ook: dit is 'n beste raai uit name, datums en skakels.

## Maak lêers uit die verslag oop

1. Klik op 'n model se naam om sy kaart oop te maak. Die kaart kontroleer elke skakel teen die vouer.
2. Klik {{ui:Terug na}} en die vouernaam bo-aan die kaart (of {{ui:Terug na die vouer}} links) om terug te keer.
3. Klik enige IFC-lêer onder **IFC-modelle** om dit in 3D oop te maak.
4. Klik enige DWG of DXF onder **CAD-tekeninge** om dit in 2D oop te maak. Die gekoppelde tekeninge en prente word outomaties in die vouer gevind.

## Maak 'n vouer later weer oop

:::chromium
Vouers wat jy met {{ui:Maak 'n vouer oop}} of deur sleep oopgemaak het, word links onder {{ui:Onlangse vouers}} gelys. Klik {{ui:Heropen}} en die vouernaam om dit weer oop te maak sonder om dit te kies. Ná 'n herlaai van die blaaier vra Chrome of Edge een keer weer; kies "Laat toe by elke besoek" om te keer dat dit weer vra. Die lys word net in hierdie blaaier gehou, en nooit ergens gestuur nie. Klik × om 'n vouer te vergeet.
:::

:::firefox safari
Hierdie blaaier kan nie vouers tussen besoeke onthou nie. Kies die vouer weer met {{ui:Maak 'n vouer oop}}, of sleep dit in.
:::

## Algemene foute

- **'n Vouer kies wat te groot is.** Meer as 20,000 lêers: "Hierdie vouer het meer as 20,000 lêers. Kies 'n kleiner vouer, soos een projek." Kies die projekvouer, nie die hele skyf nie.
- **Die ouer van verskeie projekte kies.** Die {{ui:Begin hier}}-blokkie kies dan oor projekte heen. Kies een projek.
- **Revit se eie vouers lyk geïgnoreer.** `*_backup`-, `*_log`- en `Revit_temp`-vouers is huishouding en word onder **Opsy gesit** gelys, nie gelees nie.
- **Verwag dat 'n model vanaf sy kaart in 3D oopmaak.** 'n Projeklêer is net 'n kaart. Maak sy IFC-uitvoer oop.
- **Foonre en tablette.** Baie mobiele blaaiers kan glad nie vouers kies nie. Gebruik 'n rekenaar.

Sien [Kontroleer 'n vouer vir beskadigde kopieë, ontbrekende skakels en oorblyfsels](topic:check-folder-health) en [Vouerverslag: rolle, statusse en skakels](topic:folder-roles).

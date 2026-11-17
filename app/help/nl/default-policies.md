---
title: "Standaardbeleid: instellen waarmee een nieuw gebouw begint"
summary: Stel één keer in met welk wandtype, welke niveaus, welk eerste blad, welke LOD-tags, eenheden en gereedschap een nieuw gebouw begint, voor metrische en voor imperiale projecten, en deel het beleid binnen het kantoor als een klein bestand.
keywords: standaard, standaardwaarden, standaardbeleid, beleid, kantoorstandaard, kantoorstandaardwaarden, sjabloon, nieuw gebouw, eerste wandtype, metrische wand, metselwerk, LOD, ontwikkelingsniveau, eerste blad, papier, schaal, niveaus, verdiepingshoogte, niveaunamen, wandgereedschap, eenheden, delen, exporteren, importeren, json
from: 42379aa5
---

## Wat u gaat doen

Vertel BimCraft waarmee een nieuw gebouw moet beginnen, zodat niemand op kantoor steeds dezelfde dingen hoeft te wijzigen. Dit is een add-on: die staat uit tot u hem aanzet, en een beleid dat u niet instelt, laat de eigen standaard van BimCraft precies zoals hij is.

:::note
Dit zijn standaardwaarden voor **nieuwe** gebouwen en **nieuwe** dingen. Een project dat u al begonnen bent, wordt niet gewijzigd.
:::

## Stappen

1. Open Instellingen, ga naar {{ui:Add-ons}} en zet {{ui:Standaardbeleid}} aan.
2. Open in Instellingen het tabblad **BimCraft** en kies {{ui:Standaardbeleid}} in de lijst links.
3. Stel het beleid in dat u wilt. Elk begint op **de eigen waarde van BimCraft**, met wat die is tussen haakjes. Een beleid met een vak **Metrisch** en een vak **Imperiaal** krijgt één waarde per soort project; vul alleen in wat u nodig hebt.
4. Er is geen knop Opslaan: elke wijziging wordt meteen opgeslagen. Een waarde die niet bruikbaar is, wordt in woorden geweigerd en de oude blijft staan.
5. Klik op {{ui:Nieuw gebouw}}. Het dialoogvenster wordt ingevuld met uw beleid, en elke waarde die een beleid heeft ingesteld, staat ernaast met **uit uw Standaardbeleid**. U kunt er nog een van wijzigen voordat u op {{ui:Maken}} klikt.

## Het beleid

- **Eenheden van een nieuw gebouw**: de eenheden schakelen hierop over bij Maken.
- **Aantal niveaus**, **Niveaunamen** en **Niveauhoogte**. In een naam telt `{n}` 1, 2, 3; `{n0}` telt 0, 1, 2; `{nn}` en `{nn0}` doen hetzelfde met twee cijfers. Dus `Verdieping {nn0}` geeft Verdieping 00, Verdieping 01, Verdieping 02.
- **Eerste wandtype**: wat het Wand-gereedschap eerst tekent. Een metrisch kantoor kan beginnen met Buitenmetselwerk 300 mm, terwijl imperiale projecten Buiten 2×6 houden.
- **LOD-tag op de startwandtypen**: het ontwikkelingsniveau (LOD 100 tot 500) dat de negen startertypen tonen waar een type wordt vermeld. Zie [Wandopbouw maken](topic:wall-assemblies).
- **LOD van een nieuw gemaakt wandtype**: de tag waarmee een nieuw type begint in de typeneditor. U kunt hem daar wijzigen.
- **Eerste blad**: het papier, de schaal, het bladnummer en de naam (gebruik `{level}` voor de naam van het laagste niveau), of helemaal geen eerste blad.
- **Annotatiegroottes op papier** (Instellingen › Algemeen › Standaardbeleid): de hoogten van het kantoor, in millimeter zoals ze worden afgedrukt, voor notities, maatvoeringtekst, tags, ruimtenamen, letters van rasterbollen, weergavetitels en tekst van staten. Een nieuw gebouw neemt ze bij Maken over en bewaart ze in zijn bestand. Zie [Op ware grootte tekenen, annoteren op schaal](topic:annotation-sizes).
- **Gereedschap dat actief is na Maken**: Selecteren, zoals BimCraft het zelf doet, of Wand, zodat de eerste twee klikken op het plan al een wand tekenen.

## Indeling van staten: de kantoorstandaard

In **Instellingen › Algemeen › Standaardbeleid**, onder **Indeling van staten (de kantoorstandaard)**, stelt u in hoe elke staat wordt gegroepeerd, of die subtotalen en een totaal heeft, zijn titel en de schrijfwijze van zijn kolomkoppen. Elke staat die er niet zelf een opgeeft, neemt die over, wie hem ook maakt. Zie [Een staat indelen, opslaan en exporteren](topic:schedule-layouts).

## Deel ze binnen het kantoor

1. Open in Instellingen het tabblad **Algemeen** en kies {{ui:Standaardbeleid}}.
2. Typ de **Kantoornaam** als u wilt. Die wordt in het bestand geschreven.
3. Klik op {{ui:Opslaan in een bestand}}. U krijgt een klein bestand dat eindigt op `.ccdefaults.json`.
4. Zet op een andere computer de add-on aan, open dezelfde plek en klik op {{ui:Laden uit een bestand}}. Het beleid uit het bestand vervangt dat op die computer.

Het tabblad Algemeen heeft ook het **Eenheidssysteem van een nieuw project**, dat geldt voor elke app met de add-on, en {{ui:Elk beleid opnieuw instellen}}. {{ui:Opnieuw instellen op de standaardwaarden van BimCraft}} op het tabblad BimCraft wist alleen die van BimCraft.

## Goed om te weten

- Het bestand is gewone, open JSON: een lijst van beleidsnamen en waarden. Een beleid in het bestand dat deze versie niet kent, wordt weggelaten en in het bericht genoemd; de rest laadt wel.
- Beleid wordt in deze browser bewaard, voor elke CadCraft-app op deze computer. Het wordt niet in het gebouwbestand opgeslagen en niet tussen computers gesynchroniseerd: gebruik het bestand.
- De LOD-tag op een startertype komt uit het beleid op deze computer. Een type dat u maakt als kopie van een starter, draagt zijn tag mee in het gebouwbestand.
- BimCraft heeft geen precisie-instelling, dus er is hier geen precisiebeleid.
- Een gebouw dat is begonnen vanuit een sjabloon, neemt de niveaus en bladen van het sjabloon over. Het wandtype- en het eenhedenbeleid blijven gelden.
- Zet de add-on uit en alles is weer van BimCraft zelf. Uw beleid blijft bewaard voor wanneer u hem weer aanzet.

---
title: Wanden uit een overgetrokken tekening
summary: Maak van een DWG- of DXF-plattegrond wanden, deuren en ramen op een niveau, en houd de tekening onder de plattegrond als referentie.
keywords: dwg, dxf, overtrekken, overgetrokken, plattegrond importeren, converteren, cad naar bim, 2d naar 3d, wanden uit lijnen, lagen, blokken, deuren uit blokken, onderlegger, referentietekening, achtergrond, xref, tekenapp
from: 3bf213f1
---

## Wat u gaat doen

Gebruik een plattegrond die u (of iemand anders) in de tekenapp hebt getekend als het begin van het model: de wandlijnen worden wanden, en de deur- en raamblokken worden deuren en ramen.

## Stappen

1. Zet {{ui:Tekenen}} aan en kies het niveau dat de tekening in de niveaulijst van de plattegrond toont.
2. Kies {{ui:Build}} › {{ui:Vanuit een tekening…}}, daarna {{ui:Kies een tekening…}} en kies de DWG of DXF.
3. In het dialoogvenster:
   - **Tekeningeenheden** komen uit de tekening; kies andere als ze verkeerd zijn (een plattegrond die in feet is getekend en als inch wordt gelezen, is twaalf keer te klein).
   - **Lagen met de wanden**: vink de lagen aan waarop de wandlijnen staan. Lagen waarvan de naam "wand" zegt, worden voor u aangevinkt.
   - **De lijnen zijn**: **beide vlakken van elke wand** (de gebruikelijke manier waarop plattegronden worden getekend: elk paar evenwijdige lijnen tot 600 mm uit elkaar wordt één wand zo dik als de opening), **de hartlijnen van de wanden**, of **één vlak** met de wand links of rechts ervan. Met hartlijnen of één vlak bepaalt het wandtype de dikte.
   - **Wandtype** en **Wandhoogte**, zoals bij het gereedschap {{ui:Wand}}.
   - **Blokken**: kies een deur- of raamtype voor elk blok dat een deur of een raam is, of laat het weg. Blokken waarvan de naam "deur" of "raam" zegt, worden voor u gekozen. Elk wordt in de wand geplaatst waarop het zit, zo breed als het blok langs de wand; een deur opent naar de kant waar de draairichting is getekend.
   - **Waar het komt**: op de eigen coördinaten van de tekening, of met de linkeronderhoek op de oorsprong van de plattegrond.
   - **De tekening onder de plattegrond van dit niveau houden**: laat dit aangevinkt om de tekening als dunne lijnen onder wat u maakt te zien.
4. De regel onder de keuzes zegt hoeveel wanden, deuren en ramen er worden gemaakt. Klik op {{ui:Maken}}.

## Wat u ziet

- De wanden, deuren en ramen op het niveau, aan elkaar gekoppeld waar ze elkaar ontmoeten, met de ruimten die ze sluiten; het is allemaal één stap, dus {{key:Mod+Z}} neemt het terug.
- De tekening als dunne lijnen onder de plattegrond. {{ui:Build}} › {{ui:Vanuit een tekening…}} toont de tekeningen die op het niveau bewaard zijn, elk met {{ui:Verwijderen}}; een tekening verwijderen laat de wanden staan.
- In het IFC-bestand is de bewaarde tekening een annotatie op het niveau (haar lijnen), zodat andere BIM-programma's haar ook tonen.

:::note
Een PDF of een scan werkt ook: zie [Wanden uit een set plattegronden](topic:walls-from-plans). Bogen worden weggelaten (BimCraft tekent rechte wanden), en lijnen binnen blokken ook. Lijnen zonder partner bij "beide vlakken" worden in het dialoogvenster geteld en weggelaten: teken die wanden met het gereedschap {{ui:Wand}}, of maak ze netjes met {{ui:Wijzigen}} › {{ui:Bijsnijden / verlengen}} (zie [Wanden bijsnijden, verlengen en samenvoegen](topic:trim-extend-walls)).
:::

:::tip
Overgetrokken over een scan in de tekenapp? Open de scan hier ook en controleer de wanden ertegen: zie [Model uit een scan](topic:model-from-a-scan).
:::

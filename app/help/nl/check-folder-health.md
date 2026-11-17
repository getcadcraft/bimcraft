---
title: Een map controleren op beschadigde kopieën, ontbrekende koppelingen en restanten
summary: Gebruik het mappenrapport om afgekapte modelbestanden te vinden, de nieuwste volledige back-up te kiezen, te zien welke koppelingen ontbreken, en vergrendel- en tijdelijke bestanden op te sporen.
keywords: gezondheidscontrole, beschadigd, corrupt, onvolledig, afgekapt, back-up, ontbrekende koppelingen, xref ontbreekt, audit, restanten, vergrendelbestanden, dwl, bak, oplevering
from: 3025a539
---

## Wat u gaat doen

Controleer een projectmap voordat u haar oplevert of ermee begint te werken: is elk model compleet, welke back-up is de laatste goede, en staan alle gekoppelde bestanden erin?

## Stappen: beschadigde kopieën

1. Open de projectmap. Zie [Een volledige projectmap openen](topic:open-project-folder).
2. Lees de meldingen onder de mapnaam. "2 bestanden zijn onvolledig of onleesbaar. Zie de modellen hieronder." betekent dat er iets is om na te kijken.
3. Kijk in **Modellen** naar de kolom **Status**. **Compleet** is in orde. Een oranje "1 onvolledig" betekent dat één kopie beschadigd is maar een andere in orde is. Een rode **Onvolledig** betekent dat er geen goede kopie is gevonden.
4. Open **Alle … kopieën** onder een model met een probleem. Het toont het hoofdbestand en elke genummerde back-up, nieuwste eerst, met grootte, datum en status.
5. Lees de melding boven de lijst, bijvoorbeeld "Tower.rvt is onvolledig (183.2 MB, moet minstens 214.0 MB zijn). De kaart toont de nieuwste volledige kopie, Tower.0012.rvt (3 mrt 2025)."
6. Klik op de kopie die u wilt openen. Alleen volledige kopieën kunnen worden aangeklikt.

## Wat de gezondheidscontrole doet

Elke kopie van elk model krijgt een snelle controle van zijn kop, 512 bytes per keer, zodat zelfs een map met grote modellen in seconden is gecontroleerd. Een bestand waarvan de eigen index voorbij het einde wijst, is afgekapt terwijl het werd gekopieerd, geüpload of gesynchroniseerd. Een clouddrive-bestand dat nog "alleen online" is, ziet er hetzelfde uit.

De kaart voor elk model wordt gelezen uit het hoofdbestand wanneer dat in orde is, en anders uit de nieuwste goede back-up.

## Stappen: ontbrekende koppelingen

1. Zoek naar de melding "*n* gekoppelde bestanden staan niet in deze map." onder de mapnaam.
2. Scroll naar **Gekoppelde en gerefereerde bestanden**. Ontbrekende koppelingen staan eerst.
3. Lees de kolom **Waar** voor elke koppeling:
   - **In deze map**: gevonden op het pad dat het model heeft opgeslagen.
   - **Zelfde naam gevonden**: een bestand met dezelfde naam staat elders in de map. Controleer of het het juiste is.
   - **Bibliotheekbestand**: een sleutelwoordentabel of assemblagecodetabel. Die komen bij het programma op elke computer, dus worden ze niet in de map verwacht.
   - **Niet in deze map**: nergens in de map gevonden.
4. Lees **Gebruikt door** om te zien welke modellen elk bestand koppelen.

BimCraft zoekt elke koppeling eerst op zijn relatieve pad, dan op het einde van het opgeslagen pad (dus `\\server\jobs\Tower\Cad\X-Refs\site.dwg` wordt gevonden als `X-Refs/site.dwg` wanneer u de map `Cad` hebt gekozen), en dan op bestandsnaam ergens in de map.

## Stappen: restanten

1. Scroll naar **Opzij gezet** aan het einde van het rapport.
2. Lees de drie regels die kunnen verschijnen:
   - Hulpmappen (`*_backup`, `*_log`, `Revit_temp`): niet gelezen.
   - Vergrendel-, logboek- en back-upresten: bestanden zoals `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ze blijven achter van programma's die zijn vastgelopen of nog open stonden toen de map werd gekopieerd. Ze zijn meestal veilig te verwijderen zodra niemand de bestanden open heeft.
   - Overige bestanden: alles wat BimCraft niet leest.

## Veelgemaakte fouten

- **Het beschadigde hoofdbestand verwijderen voordat een goede back-up is opgeslagen.** Kopieer eerst de nieuwste volledige back-up en pak dan het beschadigde bestand aan.
- **"Zelfde naam gevonden" blind vertrouwen.** Twee verschillende tekeningen kunnen dezelfde naam hebben. Open beide als u twijfelt.
- **Denken dat een ontbrekend bibliotheekbestand een probleem is.** Sleutelwoorden- en assemblagecodetabellen horen bij het programma op elke computer.
- **Het aantal bestanden verschilt tussen browsers.** In Firefox en Safari geeft {{ui:Open a folder}} elk bestand door, ook die in hulpmappen, dus de telling (en de limiet van 20.000 bestanden) telt ze mee. Een map naar het venster slepen slaat ze over, zoals Chrome en Edge doen. Het rapport is verder hetzelfde.

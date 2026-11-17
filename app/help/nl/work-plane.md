---
title: Het werkvlak: instellen, tonen, recht erop kijken
summary: Het werkvlak is het vlak dat modellijnen, modeltekst en de Werkvlakviewer gebruiken. Stel het in op een verdieping, een vlak, een benoemd referentievlak of een lijn; toon het in de weergaven; open de viewer om op een rechtopstaand vlak te tekenen.
keywords: werkvlak, werkvlak instellen, werkvlak tonen, referentievlak, werkvlakviewer, benoemd vlak, vlak, verdieping, rechtopstaand vlak, verticaal vlak, tekenen op een wand, geveltekening, snap, uitlijning, ref-vlak
from: 8aceee1d
---

## Wat u gaat doen

Kies het vlak waarop u tekent, zie waar het zich bevindt, en teken op een vlak dat rechtop staat.

## Stappen

1. Zet **Tekenen** aan en open het menu **Bouwen** (in een lintindeling: het tabblad Architectuur, Werkvlak).
2. Kies **Werkvlak instellen**. Doe daarna een van deze dingen:
   - kies een verdieping in **Instellen op**;
   - kies een benoemd referentievlak in de lijst ernaast;
   - klik op een lijn in de plattegrond: een wand, een rasterlijn, een referentievlak, een modellijn of een gordijngevelsysteem. Het werkvlak wordt het rechtopstaande vlak door die lijn;
   - klik op een plat vlak in de 3D-weergave. Het werkvlak ligt op dat vlak.
3. Kies **Werkvlak tonen** om het te zien: een getint blad met een raster van een meter in de 3D-weergave, een gestreepte omtrek of lijn in de plattegrond, en een gestreepte omtrek in het gevel- en doorsnedepaneel. Kies het opnieuw om het te verbergen.
4. Kies **Werkvlakviewer** om recht op het vlak te kijken. De zwarte lijnen zijn het model, doorgesneden door het vlak. Gebruik de gereedschappen om een modellijn, modeltekst of een referentievlak op het vlak te tekenen. **In 3D bekijken** draait de 3D-weergave naar het vlak toe.

## Referentievlakken

Een referentievlak is een benoemd vlak dat u als lijn tekent.

1. Kies **Referentievlak**. Typ een naam in de rij als u er een wilt (anders wordt het voor u benoemd) en een hoogte.
2. Klik waar het begint en waar het eindigt. In de plattegrond maakt dit een rechtopstaand vlak. In de Werkvlakviewer maakt het een vlak dat loodrecht op het werkvlak staat.
3. Het verschijnt als een gestreepte groene lijn met zijn naam in de plattegrond, als een gestreepte omtrek in de 3D-weergave en in het gevel- en doorsnedepaneel.
4. Selecteer het om het te hernoemen, de lengte, hoogte en voet te wijzigen, of druk op **Gebruiken als werkvlak**.

Twee referentievlakken mogen niet dezelfde naam hebben, omdat u er op naam één kiest.

## Goed om te weten

- Een model zonder ingesteld werkvlak werkt op de laagste verdieping.
- Het werkvlak wordt in het bestand opgeslagen. Of het getoond wordt, wordt in deze browser onthouden, niet in het bestand.
- Als het werkvlak een referentievlak volgt en u dat vlak verplaatst, verplaatst het werkvlak mee.
- Op een rechtopstaand werkvlak openen de gereedschappen Modellijn en Modeltekst de viewer, omdat een plattegrond niet naar een hoogte kan wijzen.
- Tekengereedschappen snappen aan de uiteinden van referentievlakken die in de plattegrond zijn getekend, op dezelfde manier als aan de uiteinden van andere lijnen in de viewer.

## In het IFC-bestand

- Het werkvlak is een eigenschapsset (CadCraft_WorkPlane) op het project.
- Een referentievlak is een IfcAnnotation met het objecttype ReferencePlane en zijn naam. De vorm is de gesloten omtrek van het vlak, zodat een ander programma kan tonen waar het zich bevindt. De set CadCraft_ReferencePlane bevat de oorsprong, richting, normaal en omvang. IFC heeft geen klasse voor een referentievlak; een annotatie telt niet mee als bouwelement en begrenst geen ruimten.

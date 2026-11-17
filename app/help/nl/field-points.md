---
title: Punten voor uitzetten en as-built-controles
summary: Nummer de plekken die een ploeg uitzet vanuit het model (kolomhartlijnen, wandeinden, ankerbouten, doorvoeringen, elk element dat u kiest), schrijf ze weg voor een totaalstation, en lees daarna de as-built-punten van de ploeg terug en zie wat afwijkt.
keywords: uitzetpunten, uitzetten, totaalstation, meting, puntenbestand, csv, txt, pnezd, penzd, xyz, northing, easting, hoogte, as-built, controle, tolerantie, afwijking, ankerbouten, kolomhartlijnen, wandeinden, doorvoeringen, meetcoördinaten, kaartconversie
from: acea9606
---

Het tabblad {{ui:Punten}} rechts maakt de punten die een ploeg op de bouwplaats uitzet vanuit het open model, en controleert de punten die de ploeg daarna meet.

## De punten maken

1. Open een IFC-model en het tabblad {{ui:Punten}}.
2. Vink aan wat u wilt uitzetten: **kolomhartlijnen** (de voet van de middellijn van elke kolom), **wandeinden** (beide uiteinden van de as van elke wand, aan de basis), **ankerbouten**, **doorvoeringen** (elementen waarvan de naam of het type "sleeve" zegt) en de **geselecteerde elementen** (elk op zijn plaatsingspunt; selecteer ze eerst in de weergave).
3. Kies het eerste nummer en een voorvoegsel, de coördinaten, de eenheden, de kolommen en het bestand:
   - **Model**: de eigen coördinaten van het bestand. **Kaartrooster**: het rooster van de georeferentie van het model (alleen getoond als het IFC een kaartconversie heeft), in meter of de eenheid die u kiest.
   - Kolommen **PNEZD** (punt, Northing, Easting, hoogte, beschrijving), **PENZD** of **XYZ**; **CSV** (komma's) of **TXT** (tabs).
4. Druk op {{ui:Punten maken}}: de lijst toont ze en de weergave markeert ze in blauw. {{ui:De punten downloaden}} schrijft het bestand.

Punten komen in een vaste volgorde: per soort, daarna in rijen over het plan. Opnieuw maken uit hetzelfde model geeft dus dezelfde getallen. Het bestand is het bestand dat CivilCraft opent en dat EXPORTPOINTS van CadCraft schrijft: één punt per regel, drie decimalen, en een beschrijving tussen aanhalingstekens als die een komma bevat.

## De as-built-punten controleren

Wanneer de ploeg terugstuurt wat ze heeft gemeten, kies een **tolerantie** in millimeter en hoe de punten worden gekoppeld: op **puntnummer** (ze hebben uw nummers gehouden) of op de **dichtstbijzijnde meting**. Druk daarna op {{ui:As-built punten inlezen…}}. Lees het bestand in dezelfde eenheden en coördinaten als waarin u het schreef.

Elk ontwerppunt is dan **binnen** de tolerantie, **buiten** de tolerantie of **niet gemeten**, en elke meting die niemand vroeg is **extra**. De tabel geeft de verschillen in de eenheid die u kiest in de werkbalk, met ft getoond als decimale inches (as-built minus ontwerp: oost, noord, hoogte, en de afstand in het plan). De weergave markeert elk punt groen of rood, met een lijn naar de meting, en grijs als het niet gemeten is. {{ui:Rapport (CSV)}} schrijft de hele vergelijking weg.

Niets hier verandert het model. **Nog niet beschikbaar**: uitzetten vanaf vloerranden, rasterkruisingen of openingen die voor u worden gemaakt, en punten rechtstreeks naar een instrument sturen. Gebruik daarvoor het bestand.

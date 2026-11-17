---
title: Verplaatsen, kopiëren, uitlijnen en verdelen
summary: Verplaats muren, vloeren, kolommen en geplaatste items met een basispunt en een tweede punt of een getypte afstand, kopieer ze onderweg, en lijn ze uit of verdeel ze gelijkmatig, op de plattegrond of met een keuze in 3D.
keywords: verplaatsen, kopiëren, uitlijnen, verdelen, tussenruimte, offset, basispunt, verplaatsing, muren, kolommen, vloeren, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Wat u gaat doen

Verschuif een muur, een kolom, een vloer of een geplaatst bibliotheekitem naar een nieuwe plek, maak er kopieën van, of lijn er meerdere uit, zonder ze opnieuw te tekenen.

## Namen en toetsen

De opdrachten heten {{ui:Verplaatsen}}, {{ui:Uitlijnen}} en {{ui:Verdelen}}, en u kunt `MOVE`, `ALIGN` en `DISTRIBUTE` typen in de opdrachtregel, zoals in de tekenapp van CadCraft. Een verschil: in BimCraft is {{key:M}} {{ui:Meten}}, dus Verplaatsen heeft zijn eigen toets, {{key:Shift+M}}. De gereedschappen staan in het menu {{ui:Build}}.

## Verplaatsen

1. Kies wat u wilt verplaatsen, op de plattegrond of in de 3D-weergave. Muren, vloeren, kolommen en geplaatste bibliotheekitems kunnen in één keuze.
2. Druk op {{key:Shift+M}} of kies {{ui:Verplaatsen}}.
3. Klik een basispunt aan en daarna een tweede punt. Of typ na het basispunt een afstand en druk op {{key:Enter}}: het gaat de richting die de aanwijzer vanaf het basispunt aangeeft. U kunt ook `dx,dy` typen (of `@dx,dy`), of `lengte<hoek`.
4. Druk op {{key:C}} om {{ui:Kopiëren}} aan te zetten: elke verplaatsing maakt dan kopieën en blijft klaarstaan voor de volgende. Druk op {{key:Esc}} om te stoppen.

Beide punten kunnen ook in de 3D-weergave worden aangeklikt: met Verplaatsen aan raakt de aanwijzer de vloerhoogte van de verdieping, zodat een klik daar een punt van de plattegrond is. Houd {{key:Shift}} ingedrukt tijdens het klikken om in plaats daarvan een ander element te kiezen. Gebruik een {{ui:Plattegrond}}, {{ui:Boven}}, {{ui:Voor}} of {{ui:Zijaanzicht}} naar wens: de punten liggen altijd op die verdieping.

Een muur neemt zijn deuren en ramen mee. Een getekende vloer neemt zijn openingen mee. Kamers, vloeren en plafonds die de muren volgen, worden bijgewerkt. Muren die aan de verplaatste muur vastzaten, blijven staan waar ze staan.

Elke verplaatsing is één wijziging: één {{key:Mod+Z}} maakt haar ongedaan, en ze gaat naar iedereen in een Live TeamWork-sessie. Een geplaatst bibliotheekitem kan zo niet worden gekopieerd; gebruik {{ui:Bewerken}} › {{ui:Kopiëren}} en {{ui:Plakken}}.

## Uitlijnen

Kies twee of meer elementen, kies {{ui:Uitlijnen}}, dan een zijde (links, midden, rechts, boven, halverwege of onder) en waarop moet worden uitgelijnd: de hele keuze, het eerst gekozen element, het laatst gekozen element, of een punt dat u aanklikt. Druk in de balk op {{ui:Uitlijnen}}.

## Verdelen

Kies drie of meer elementen, kies {{ui:Verdelen}}, dan een richting (horizontaal of verticaal) en de tussenruimte: gelijke tussenruimtes ertussen of gelijke middelpunten. De twee aan de uiteinden blijven staan waar ze zijn.

Muren die Uitlijnen of Verdelen verplaatst, behouden hun verbindingen, zoals bij Verplaatsen: een muur die aan een verplaatste muur vastzit, schuift met zijn uiteinde langs zijn eigen lijn mee om vastgezet te blijven, scheidingswanden die erop aansluiten gaan mee, en twee aan elkaar vastzittende muren die beide worden verplaatst, houden hun hoek op de plek waar hun nieuwe lijnen elkaar kruisen. Kamers blijven gesloten. Het is één stap in **Wijzigingen**.

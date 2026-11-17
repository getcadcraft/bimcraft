---
title: Een puntenwolk naast het model tonen
summary: Open een laserscan (LAS, LAZ, E57, PLY, PCD, PTX, PTS of XYZ) in de 3D-weergave, op zichzelf of met een IFC-model, kleur hem, snij er een dunne snede doorheen, meet naar zijn punten en geef hem door aan de tekenapp om as-built-lijnen over te tekenen.
keywords: puntenwolk, laserscan, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, opmeting, registratie, snede, plattegrondsnede, snap, meten, traceren, scan naar bim
from: d0a3e740
---

## Wat u gaat doen

Bekijk een laserscan van een gebouw naast het model: controleer of wat is gebouwd overeenkomt met het ontwerp, meet tussen gescande punten, en snij een dunne snede om muren, deuren en kolommen af te lezen.

## Stappen

1. Open de wolk: {{ui:Open}} een `.las`-, `.laz`-, `.e57`-, `.ply`-, `.pcd`-, `.ptx`-, `.pts`- of `.xyz`-bestand, of sleep het naar de pagina (zie het onderwerp over puntenwolkformaten voor wat elk formaat oplevert en wat u uit de eigen software van een scanner exporteert). Met een model open voegt de wolk zich bij het model in de 3D-weergave; het openen van een wolk sluit nooit het model of de niet-opgeslagen wijzigingen ervan. Zonder model opent de wolk op zichzelf.
2. De wolkbalk verschijnt onder de werkbalk. Die zegt hoeveel punten er worden getoond en hoeveel het bestand er heeft.
3. Kies {{ui:Kleur op basis van}}: de eigen kleuren van het bestand (wanneer de scanner ze heeft opgeslagen), {{ui:Hoogte}}, {{ui:Intensiteit}}, {{ui:Klasse}} (LiDAR-klassen zoals grond, vegetatie en gebouw) of {{ui:Eén kleur}}. {{ui:Grootte}} maakt de punten groter of kleiner.
4. Klik op {{ui:Plattegrond}} onder {{ui:Snede}} om alleen een dunne band 1.2 m boven het laagste punt te houden, van bovenaf gezien: muren, deuropeningen en kolommen lezen als een plattegrond. {{ui:Voor}} en {{ui:Zijaanzicht}} snijden verticale banden voor gevels en doorsneden. Verplaats de band met {{ui:Bij}} en wijzig {{ui:Dikte}} (meter). {{ui:Uit}} toont de hele wolk weer.
5. Klik op {{ui:Meten}} in de werkbalk. De aanwijzer klikt vast aan de punten van de wolk (het label zegt "Puntenwolk"), zodat u van muur tot muur in de snede kunt meten, of van een modelelement naar de scan. Een modelhoek of -rand binnen bereik wint nog steeds.
6. Met {{ui:Meten}} › {{ui:Locatie}} geeft een wolkpunt zijn breedte- en lengtegraad uit het eigen coördinatenstelsel van de wolk, wanneer het bestand er een noemt.
7. {{ui:Verbergen}} verbergt de wolk even; {{ui:Verwijderen}} haalt hem eruit. {{ui:Tonen}} › {{ui:Puntenwolk}} verbergt of toont de balk.

## Waar de wolk heen gaat

{{ui:Plaatsen}} in de balk zegt hoe de wolk op het model aansluit:

- **Modelcoördinaten**: de getallen van de wolk zijn die van het model zelf (een scan geregistreerd in de coördinaten van het ontwerp).
- **Kaartcoördinaten**: het model heeft een kaartconversie (IfcMapConversion) en de wolk staat in hetzelfde geprojecteerde stelsel: de wolk wordt er via geplaatst. Noemen de twee verschillende stelsels, dan zegt de statusregel dat.
- **Gecentreerd op het model**: wanneer geen van beide de wolk dicht bij het model zet, komt het midden van de wolk op het midden van het model en het laagste punt op de vloer van het model. Kies een andere keuze om dit te overschrijven.

Wanneer het bestand zijn eenheden niet zegt, leest BimCraft meters en biedt het {{ui:Eenheden}} aan in de balk.

## De as-built-lijnen traceren

Klik op {{ui:Traceren in CadCraft}} om de wolk in een nieuw tabblad naar de tekenapp te sturen. Ze opent daar onder de tekening, waar een plattegrondsnede en objectsnap u de muren over de scan laten tekenen. Zie het CadCraft-onderwerp over puntenwolken.

## Hoeveel punten

Een scan kan honderden miljoenen punten bevatten. BimCraft leest elk punt één keer en houdt een gelijkmatig deel ervan om te tekenen: {{ui:Tonen}} in de balk stelt in hoeveel (1, 2, 5 of 10 miljoen). Meer punten vragen meer geheugen en een snellere grafische kaart. Aantallen per LiDAR-klasse gelden voor elk punt in het bestand.

:::note
Bestanden worden op deze computer gelezen; er wordt niets geüpload. LAS 1.0–1.4 en LAZ worden gelezen (LAZ-bestanden tot 1 GB, tijdens het lezen in het geheugen gehouden); E57-bestanden tot 6 miljoen punten en 512 MB voorlopig (grotere scans: exporteer LAS of LAZ); PLY, PCD en PTX volledig; tekstwolken zijn `x y z`, met kleur (`r g b`) en intensiteitskolommen wanneer die er zijn.
:::

## Meerdere scans

Scans die vanaf verschillende posities zijn genomen, kunnen in één kader worden geregistreerd, verfijnd met ICP en als één LAS of E57 worden geëxporteerd: zie [Meerdere scans registreren tot één](topic:register-scans).

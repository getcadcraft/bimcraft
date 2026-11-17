---
title: Meerdere scans registreren tot één
summary: Plaats scans die vanaf verschillende posities zijn genomen in één kader met gekozen puntparen of getypte doelen, verfijn ze met ICP, sla de registratie op als project en exporteer de geregistreerde wolk als LAS of E57.
keywords: registreren, registratie, scans, puntenwolk, icp, iterative closest point, doelen, puntparen, starre transformatie, uitlijnen, samenvoegen, e57, las, scan naar bim
from: e8e270db
---

## Wat u gaat doen

Verschillende scans van één plek (elk vanaf een eigen scannerpositie) beginnen in hun eigen coördinaten. Registreer ze: geef elke scan één plaatsing, zodat ze allemaal in één kader staan. Sla dat daarna op als project en schrijf de geregistreerde wolk als één LAS- of E57-bestand.

## De scans plaatsen

1. Open het dialoogvenster ({{ui:Scans registreren…}} op het startpaneel, of {{ui:Tonen}} › {{ui:Scans registreren…}} zodra een model open is). {{ui:Scans toevoegen…}} neemt LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- of XYZ-bestanden, of sleep ze naar het dialoogvenster. Scans die andere eenheden gebruiken, worden geweigerd met een melding: converteer er eerst één.
2. Kies {{ui:Te verplaatsen scan}} en {{ui:Plaatsen tegen}}. De afbeelding toont elke scan in het kader zoals hij nu is, elk in een eigen kleur: {{ui:Plattegrond}}, {{ui:Voor}} of {{ui:Zijaanzicht}}. Sleep om te verschuiven en gebruik het wiel om te zoomen.
3. **Met puntparen.** Klik op {{ui:Een paar kiezen}}, dan op een punt op de te verplaatsen scan, en daarna op dezelfde plek in een andere scan (een hoek, een doel, de voet van een kolom). Doe dit minstens drie keer, met punten die niet op één lijn liggen en ver uit elkaar staan. Klik op {{ui:Plaatsen met paren}}: de scan wordt geplaatst door een kleinste-kwadratenfit, en **Resterend** toont hoever elk paar nog mist. Een paar met een groot getal is een slechte keuze: verwijder het met het kruisje en plaats opnieuw.
4. **Met doelen.** Als de echte coördinaten van een punt bekend zijn (ingemeten doelen), klik op {{ui:Kiezen, dan doel invoeren}}, klik het punt op de scan en typ de X, Y en Z van het doel in de rij. Paren en getypte doelen mogen vrij worden gemengd.

## Verfijnen met ICP

Paren geven een ruwe plaatsing. {{ui:Verfijnen}} verplaatst de scan tot zijn oppervlakken op die van de andere scan liggen: eerst **punt naar punt**, daarna **punt naar vlak**. De tabel toont elke stap met de fout en hoeveel punten er matchten; de lijn erboven laat de fout dalen. {{ui:Stoppen}} beëindigt de run na de stap die bezig is en houdt wat er tot dan toe is bereikt. {{ui:Ongedaan maken}} neemt de hele run (of de laatste plaatsing) terug; {{ui:Opnieuw instellen}} zet de scan terug op zijn bestandscoördinaten.

Om het op een laptop vlot te houden, werkt ICP op een gereduceerd deel van de punten ({{ui:Gebruikte punten}}, 5,000 tot 60,000) en negeert het matches die verder weg liggen dan {{ui:Grootste overeenkomstafstand}} (standaard 5% van de grootte van de scan, die kleiner wordt naarmate het zich zet). Het heeft eerst een ruwe plaatsing nodig: scans die nauwelijks overlappen, melden dat ze niet gematcht kunnen worden. Oppervlakken die alleen vlak of alleen recht zijn, kunnen geen positie langs zichzelf vastleggen; voeg in dat geval paren toe.

## Opslaan en exporteren

- {{ui:Project opslaan}} schrijft een klein `.ccscans.json`-bestand: de naam en grootte van elke scan, een vingerafdruk van de eerste 64 KB, met zijn transformatie. Het bevat geen punten. {{ui:Project openen…}} zoekt de scanbestanden op via die verwijzingen (de bestanden moeten eerst zijn toegevoegd) en zet elke transformatie terug.
- {{ui:LAS exporteren}} en {{ui:E57 exporteren}} schrijven één bestand met elke scan op de geregistreerde plek. Punten worden nooit in de originelen herschreven; de transformatie wordt onderweg toegepast. Met {{ui:Alle punten uit de bestanden lezen}} aan wordt elk bestand opnieuw gelezen voor elk punt (tot 20 miljoen per scan). Uit: dan worden alleen de punten geschreven die in de viewer staan.
- {{ui:Geregistreerde wolk tonen}} (BimCraft) schrijft de LAS en opent hem in de 3D-weergave naast het model, zoals elke andere wolk.

:::note
Er wordt niets geüpload. Registratie werkt in de eigen eenheden van de bestanden en behoudt millimeters: een LAS wordt geschreven met een schaal die past (tot 0.1 mm), een E57 met doubles. Een coördinatenstelsel wordt alleen in de LAS overgenomen wanneer elke scan dezelfde EPSG-code noemt. De E57-schrijver is van ons eigen; hij wordt gecontroleerd door de bestanden terug te lezen met deze lezer en met libE57Format.
:::

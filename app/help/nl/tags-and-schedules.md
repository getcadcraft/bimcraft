---
title: Elementen taggen en staten maken op tag
summary: Definieer uw eigen tags (een naam, een type, de toegestane waarden, welke klassen), tag veel elementen tegelijk en maak staten waarvan de kolommen, filters en groepen de tags lezen. De tags worden in de IFC bewaard.
keywords: tags, tag, taggen, eigen eigenschappen, parameters, gedeelde parameters, eigenschapsset, pset, staat, filter, groeperen op, afwerking, brandwerendheid, bulkbewerking, csv
from: 9cc7c90d
---

## Wat u gaat doen

Een tag is een eigen eigenschap, zoals *Afwerking* of *Brandwerendheid*. U definieert hem één keer voor het project, zet hem in één keer op veel elementen, en elke staat in BimCraft kan hem lezen: de tagstaat hier, {{ui:Hoeveelheden}}, Zoeken, Kleur op eigenschap en [Documenten uit het model](topic:documents-from-the-model).

## Stappen

1. Open een IFC-model, of start een nieuw gebouw.
2. Open in het linkerpaneel, onder {{ui:Hoeveelheden}}, de {{ui:Tags}}.
3. Klik op {{ui:Tag toevoegen}}. Geef hem een naam, kies zijn type en geef, als u wilt, de toegestane waarden (met komma's) en de klassen waarvoor hij is (`IfcDoor`, `IfcWall` …). Klik op {{ui:De tag toevoegen}}.
4. Selecteer de elementen in het model (Zoeken helpt: kies in één keer elke deur).
5. Kies onder {{ui:De selectie taggen}} of typ per tag die u wilt instellen een waarde, laat de andere zoals ze zijn, en klik op {{ui:Toepassen op … geselecteerde elementen}}.
6. Vink onder {{ui:Tagstaat}} de kolommen aan, voeg filters toe, kies {{ui:Groeperen op}} en klik daarna op {{ui:CSV downloaden}}.

## Wat u zou moeten zien

- Een stap in de lijst met wijzigingen voor elke opgeslagen definitie en elke tagging; {{ui:Ongedaan maken}} maakt hem ongedaan.
- Elementen van een klasse waarvoor een tag niet bedoeld is, worden buiten die tag gelaten, en de statusregel zegt hoeveel.
- De tagstaat toont één rij per element, gegroepeerd op het veld dat u koos; klik op de eerste cel van een rij om dat element te kiezen.
- {{ui:Hoeveelheden}} toont de tags onder `CadCraft_Tags`, zodat u daar oppervlakten of aantallen per tag kunt optellen.

## Typen

De typen zijn dezelfde lijst als familieparameters: Lengte (millimeter), Hoek (graden), Getal, Geheel getal, Ja / Nee, Pen (1–16), Tekst, Materiaal en Vulling. Een waarde die niet past bij zijn type, of niet een van de toegestane waarden is, wordt geweigerd met een melding, en er verandert niets.

## Goed om te weten

- Alles is gewoon IFC, dus andere programma's lezen de waarden: de definities staan in een eigenschapsset `CadCraft_TagDefs` op het project, de waarden in een eigenschapsset `CadCraft_Tags` op elk element (één eigenschap per tag). Lengtes worden geschreven in de lengte-eenheid van het bestand.
- `IfcWall` in de klassen van een tag omvat ook wanden in standaard-case en samengestelde wanden.
- Een tag hernoemen hernoemt zijn waarden op elk element in dezelfde stap. Een tag verwijderen verwijdert alleen zijn definitie: waarden die al zijn ingesteld, blijven als gewone eigenschappen op de elementen staan. Wis ze eerst (kies {{ui:Wissen}}) om ze weg te halen.
- Tags in de CadCraft-tekenapp (blokattributen) zijn nog niet beschikbaar.

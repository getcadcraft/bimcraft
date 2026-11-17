---
title: IFC-eigenschappen wijzigen en een bewerkte kopie opslaan
summary: Wijzig de naam, tag, beschrijving of een eigenschapswaarde van een element, maak het ongedaan, en download een nieuw IFC-bestand terwijl het origineel blijft zoals het was.
keywords: bewerken, wijzigen, eigenschappen, parameters, tag, naam, hernoemen, markering, opslaan als, downloaden, ongedaan maken, kopie, ifc, schrijven
from: f8035d62
---

## Wat u gaat doen

Corrigeer gegevens in een IFC-model: hernoem een element, herstel zijn tag, wijzig een eigenschapswaarde. Sla daarna een nieuw IFC-bestand op met uw wijzigingen. Het bestand dat u opende, wordt nooit aangeraakt.

## Wat u kunt wijzigen

| Veld | Bewerkbaar |
|---|---|
| Naam, Objecttype, Tag, Beschrijving | Ja |
| Enkele eigenschapswaarden (tekst, getallen, Ja/Nee) | Ja |
| Typeeigenschappen (sets met "(type)") | Ja, en de wijziging geldt voor elk element van dat type |
| Type, GlobalId, Regel | Nee |
| Hoeveelheden (lengtes, oppervlakten, volumes, aantallen) | Nee |
| Lijsten, opsommingen en andere waarden met meerdere delen | Nee |
| Geometrie, positie, elementen toevoegen of verwijderen | Nee |

## Stappen

1. Open een IFC-model en klik op het element dat u wilt wijzigen.
2. Klik in het paneel {{ui:Eigenschappen}} op de waarde die u wilt wijzigen. Die wordt een tekstvak. Een lege waarde toont als *leeg*.
3. Typ de nieuwe waarde.
4. Druk op {{key:Enter}}, of klik ergens anders, om te bewaren. Druk op {{key:Esc}} om te annuleren.
5. Kijk naar de waarde: ze staat nu vet met een blauwe balk ernaast, wat een bewerkte waarde markeert.
6. Kijk naar het gedeelte {{ui:Wijzigingen}} aan de linkerkant: de wijziging staat erin als *element*: *veld*, oude waarde naar nieuwe waarde.
7. Herhaal voor andere waarden of andere elementen.
8. Klik op {{ui:Opslaan als IFC}} (het toont hoeveel wijzigingen er wachten, bijvoorbeeld "Opslaan als IFC (3)"), of druk op {{key:Mod+S}}.
9. Zoek "*oorspronkelijke naam* (bewerkt).ifc" in uw downloadmap.

## Wat u zou moeten zien

De statusregel zegt "*naam* (bewerkt).ifc opgeslagen met *n* wijzigingen (… bytes). Uw oorspronkelijke bestand is ongewijzigd." De lijst {{ui:Wijzigingen}} wordt leeg, klaar voor de volgende ronde.

## Soorten waarden

- **Tekst**: alles wat u typt, wordt precies zo bewaard. Als u Naam, Objecttype, Tag of Beschrijving leegmaakt, verdwijnt de waarde.
- **Getallen**: typ een kaal getal, zoals `2.4` of `1200`, in de eigen eenheden van het bestand. Geen eenheidssymbolen. Alles anders toont "Gebruik een getal."
- **Gehele getallen** (aantallen, gehele waarden): "Gebruik een geheel getal." als u een decimaal typt.
- **Ja/Nee**: de waarde wordt een menu met Ja en Nee.

Elke waarde behoudt zijn IFC-type, zodat een getal een getal blijft en andere programma's het correct lezen.

## Ongedaan maken

1. Klik op {{ui:Ongedaan maken}} in het gedeelte {{ui:Wijzigingen}}, of druk op {{key:Mod+Z}} terwijl u niet in een veld typt.
2. Herhaal om meer ongedaan te maken. Elke keer verwijdert ongedaan maken de nieuwste wijziging.

U kunt niet voorbij een opslag ongedaan maken: na opslaan begint de lijst opnieuw. Het opgeslagen bestand bevat alles.

## Waarom uw bewerking maar één element wijzigt

Exporteurs besparen ruimte door gegevens te delen. Eén eigenschapsset kan door twintig deuren gedeeld worden, en één waarde ("Brandwerendheid: 60 min") kan in negentig sets staan. Als BimCraft de gedeelde waarde eenvoudig zou wijzigen, zou elk element dat hem deelt, ook veranderen.

Daarom kopieert BimCraft voordat het schrijft:

- Als de eigenschapsset die u bewerkt met andere elementen gedeeld wordt, krijgt uw element een eigen kopie van de set, en alleen die kopie wordt gewijzigd.
- Als de waarde met andere sets gedeeld wordt, krijgt uw set een eigen kopie van de waarde.

De buren houden hun oude gegevens. Dit heet *copy-on-write*. Het voegt een paar kleine items toe aan het bestand, die elk normaal IFC-programma gewoon leest.

**Typeeigenschappen vormen bewust de uitzondering.** Een set met "(type)" hoort bij het type van het element, en in IFC leest elk element van dat type hem vanuit daar. Wijzigen ervan wijzigt het type, zodat elk element van het type de nieuwe waarde toont. Het gedeelte {{ui:Wijzigingen}} markeert zulke bewerkingen met "(type)". Zie [Een typeeigenschap wijzigen voor elk element van een type](topic:type-vs-instance).

## Waarschuwingen voordat u werk verliest

- Een ander bestand openen terwijl u niet-opgeslagen wijzigingen hebt, vraagt "U hebt *n* niet-opgeslagen wijzigingen in *bestand*. Wijzigingen verwerpen?" Klik op Annuleren om door te werken, en sla daarna op.
- Het tabblad sluiten of herladen met niet-opgeslagen wijzigingen laat de browser vragen of u wilt vertrekken.

## Veelgemaakte fouten

- **Eenheden typen.** `2400 mm` wordt geweigerd. Typ `2400`.
- **Een typeeigenschap wijzigen terwijl u één element bedoelde.** Let op de melding "(type)" voordat u typt. Als u wilt dat één element afwijkt, wijzig dan een instantie-eigenschap of zijn Tag of Naam.
- **Verwachten dat het origineelbestand verandert.** Opslaan downloadt altijd een nieuw bestand. Vervang het origineel zelf als dat is wat u wilt, en bewaar een kopie.
- **{{key:Mod+S}} indrukken zonder wijzigingen.** BimCraft slaat alleen op wanneer er iets op te slaan is; anders kan de eigen "Pagina opslaan" van de browser openen. Sluit die.
- **Twee keer opslaan en twee kleine bestanden verwachten.** Elke opslag bevat elke bewerking sinds u het model opende.
- **Verwachten dat bewerkingen teruggaan naar een projectbestand.** BimCraft schrijft alleen IFC. Breng het bewerkte IFC in uw ontwerpprogramma zoals u elk IFC importeert.

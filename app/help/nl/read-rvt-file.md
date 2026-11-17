---
title: Een project- of familiebestand lezen
summary: Open een .rvt-, .rfa-, .rte- of .rft-bestand en lees de uitgave, worksharing, projectinformatie, familieparameters, koppelingen en voorbeeldafbeelding, zonder het programma waarin het is gemaakt.
keywords: rvt, rfa, rte, rft, projectbestand, familie, uitgave, versie, welke versie, build, worksharing, centraal, projectinformatie, voorbeeld, miniatuur, koppelingen
from: df3600e1
---

## Wat u gaat doen

Ontdek wat er in een project- of familiebestand zit zonder het in Revit te openen: welke uitgave het heeft opgeslagen, of het worksharing gebruikt, de projectinformatie en waarnaar het verwijst. Handig wanneer een bestand van iemand anders komt en u moet weten in welke uitgave u het moet openen.

## Stappen

1. Klik op {{ui:Een bestand kiezen}}.
2. Kies een `.rvt`-, `.rfa`-, `.rte`- of `.rft`-bestand.
3. Wacht even. De statusregel zegt "Het bestand wordt gelezen…" en daarna "Geopend *bestandsnaam*".
4. Kijk naar de bovenkant van de kaart: de voorbeeldafbeelding die in het bestand is opgeslagen, de soort bestand en de uitgave waarin het is opgeslagen, en de projectnaam.
5. Scroll naar beneden om de delen van de kaart te lezen.

## Wat u zou moeten zien

De kaart in het midden, met deze delen wanneer het bestand ze bevat:

| Deel | Wat het u vertelt |
|---|---|
| Bestand | Bestandsnaam, grootte, soort (project, projectsjabloon, familie of familiesjabloon), de uitgave en build waarin het is opgeslagen, worksharing, het pad van het centrale model, waar en door wie het voor het laatst is opgeslagen, taal en document-GUID |
| Projectinformatie | De eigen velden van het project, zoals naam, nummer, opdrachtgever, adres en status. Velden die nog op hun standaardwaarden voor een nieuw project staan, worden weggelaten. |
| Familie, Familie: … | Voor een familie: de naam, categorie, uitgave, laatste update en de parameters, groep voor groep |
| Gekoppelde en verwezen bestanden | Elk gekoppeld model, CAD-koppeling, afbeelding en sleutellijst waarnaar het bestand verwijst, met het opgeslagen pad |

Links staat het paneel {{ui:Bestand}}, dat de belangrijkste feiten herhaalt en **Gelezen** toevoegt: hoeveel van het bestand BimCraft daadwerkelijk heeft gelezen, meestal ongeveer 40 KB van een bestand van vele megabytes. Rechts zegt het paneel {{ui:Eigenschappen}} dat elementeigenschappen het 3D-model nodig hebben.

## Waarom geen 3D

Het 3D-model en de elementen in een projectbestand zijn opgeslagen in een niet-gedocumenteerd formaat. BimCraft leest alleen de delen van het bestand die gedocumenteerd of duidelijk leesbaar zijn: de bestandsinformatie, projectinformatie, familiegegevens, de koppellijst en de voorbeeldafbeelding. Het raadt de rest niet. Om het model in 3D te zien en elementeigenschappen te lezen, exporteert u IFC uit het programma waarin het bestand is gemaakt. Zie [Een projectbestand via IFC in 3D krijgen](topic:rvt-to-ifc).

## Veelgemaakte fouten

- **3D verwachten.** Zie hierboven.
- **Koppelingen tonen alleen hun opgeslagen pad.** Een bestand dat alleen wordt geopend, kan niet controleren of de koppelingen bestaan. Open in plaats daarvan de map waarin het staat; dan markeert BimCraft elke koppeling als gevonden of niet: [Een hele projectmap openen](topic:open-project-folder).
- **"Dit bestand is onvolledig…"** Het bestand is afgebroken tijdens het kopiëren, uploaden of synchroniseren. Een bestand op een clouddrive dat nog "alleen online" is, doet dit ook. BimCraft opent het toch en toont alleen wat is hersteld: een oranjekleurige melding bovenaan de kaart, een sectie **Hersteld uit dit bestand** met de delen waarvan elke byte in het bestand staat, en **Niet in het bestand** voor de rest. Er wordt niets ingevuld voor het ontbrekende deel, dus de uitgave, voorbeeldafbeelding of projectinformatie kan ontbreken wanneer die na het afbreekpunt waren opgeslagen. Als zelfs de inhoudslijst van het bestand is afgebroken, kan niets worden geopend. Kopieer het origineel opnieuw en open het opnieuw voor het volledige bestand.
- **"Geen voorbeeldafbeelding in dit bestand".** Sommige bestanden worden zonder voorbeeld opgeslagen. Dat is normaal.
- **Per ongeluk een back-up openen.** Bestanden met een naam als `Tower.0004.rvt` zijn genummerde back-ups. Het openen van de map groepeert ze met hun model.

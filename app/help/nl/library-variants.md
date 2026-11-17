---
title: Een bibliotheekitem met varianten plaatsen en wisselen
summary: Sommige bibliotheekitems komen in meerdere maten of opties. Kies de variant voordat u het plaatst, zie welke variant een geplaatst item is, wissel die met één klik voor een andere variant, en behoud die wanneer het item wordt bijgewerkt.
keywords: variant, varianten, maten, opties, configuratie, bibliotheek, librarycraft, plaatsen, wisselen, configurator, familie, type, bijwerken, poorten
from: c05f0af3
---

## Wat u gaat doen

Plaats een bibliotheekitem in de maat of optie die u nodig hebt, en verander later van gedachten zonder het opnieuw te plaatsen. Een item met varianten is één item in de bibliotheek (één naam, één licentie, één versie) met een tabel van de varianten waarin het voorkomt: bijvoorbeeld een montageplaat in Klein, Middel en Groot, of dezelfde plaat zonder gaten.

## De variant kiezen en plaatsen

1. Open het tabblad {{ui:Bibliotheek}} en klik op de kaart van het item.
2. Onder de naam toont de keuze {{ui:Variant}} elke variant met zijn maat. De standaardvariant van het item wordt eerst gekozen.
3. Selecteer er één. De plattegrond, de maat en de rij 3D-lichaam volgen uw keuze.
4. Klik op {{ui:In plattegrond plaatsen}} (of {{ui:In model plaatsen}} in de 3D-weergave) en plaats het als elk item: zie [Apparatuur en meubels uit de bibliotheek plaatsen](topic:place-from-library).

Het geplaatste element krijgt de naam van het item en de variant, bijvoorbeeld *Mounting plate — Large*, zodat de {{ui:Apparatuur}}-lijst en de boom ze uit elkaar houden. Elke variant is een eigen IFC-type: wie dezelfde variant twee keer plaatst, deelt één type; een andere variant krijgt een eigen type.

## Zien welke variant een geplaatst item is

Selecteer het element. In {{ui:Eigenschappen}} heeft het vak **Bibliotheekitem** een regel **Variant**. De IFC bewaart die in `CadCraft_LibraryItem`: `Variant` (de id van de variant), `VariantName` en `VariantValues` (de optiewaarden, als tekst), zodat andere programma's die kunnen lezen.

## Naar een andere variant wisselen

1. Selecteer het geplaatste item en klik op {{ui:Item vervangen…}} in het vak **Bibliotheekitem**. Het tabblad {{ui:Bibliotheek}} opent.
2. Bovenaan toont **Andere varianten van** *het item* elke variant met zijn maat. De geplaatste is gemarkeerd en kan niet worden geselecteerd.
3. Klik op {{ui:Vervangen door …}} bij de gewenste variant.

Het element behoudt zijn plek, draai, verdieping, itemnummer, aantal en notities; zijn type, vorm en gegevens veranderen naar de andere variant. {{key:Mod+Z}} zet de eerste weer terug. U kunt nog steeds elk ander item uit de lijst hieronder kiezen, zoals voorheen: zie [Een geplaatst item vervangen en items uit de bibliotheek bijwerken](topic:swap-and-update-library-items).

## Kopiëren, plakken en updates

- Een kopie van een geplaatste variant is dezelfde variant: in dit model, en in een ander model dat in hetzelfde browsertabblad is geopend, via Kopiëren en Plakken.
- **Updates** behouden de variant: als de nieuwere versie van het item die nog heeft, wordt de plaatsing die variant van de nieuwe versie. Als de nieuwe versie die niet meer heeft, neemt de plaatsing in plaats daarvan de standaardvariant van het item.

## Goed om te weten

- Alleen sommige bibliotheekitems hebben varianten. De kaarten zeggen dat niet; u ziet de keuze {{ui:Variant}} wanneer u er één opent.
- Een item kan per variant **poorten** (aansluitpunten voor leidingen en kanalen) vermelden. Het tabblad Bibliotheek toont hoeveel een variant er heeft. Ze worden nog **niet** in de IFC geschreven wanneer u het item vanuit het tabblad Bibliotheek plaatst.
- Een variant zonder 3D-lichaam wordt geplaatst met een vervangende doos, net als elk 2D-symbool.
- Maten in de keuze zijn in millimeter, zoals de bibliotheek ze schrijft.

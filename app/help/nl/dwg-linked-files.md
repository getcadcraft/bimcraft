---
title: Gekoppelde tekeningen en afbeeldingen vinden
summary: Toon de gekoppelde tekeningen (xrefs) en titelblokafbeeldingen van een tekening, door de map te openen of de bestanden met de hand toe te voegen.
keywords: xref, externe verwijzing, gekoppelde tekening, koppelen, overlay, afbeelding, foto, logo, titelblok, ontbrekende xref, etransmit, verwijzingsbeheer
from: 5593d4b1
---

## Wat u gaat doen

Maak een tekening compleet: toon de tekeningen waarnaar hij verwijst (externe verwijzingen, of xrefs) en de afbeeldingen die hij gebruikt, zoals een logo in het titelblok.

## De makkelijke weg: open de map

1. Klik op {{ui:Een map openen}} en kies de map met de tekening en zijn koppelingen, bijvoorbeeld de hele map `Cad` van een project.
2. Scroll in het mapoverzicht naar **CAD-tekeningen**.
3. Klik op de tekening.
4. Kijk in het paneel {{ui:Eigenschappen}} rechts, onder **Gekoppelde tekeningen** en **Afbeeldingen**.

BimCraft zoekt elke gekoppelde tekening op zijn naam ("*naam*.dwg"), eerst in dezelfde map als de tekening, daarna overal in de map die u opende. Afbeeldingen worden op dezelfde manier gevonden, en ook op een gelijkende naam: een eTransmit- of Revit-export zet vaak de naam van het project ervoor, dus `logo.png` wordt gevonden als `Tower-logo-5425051.png`.

## De andere weg: bestanden met de hand toevoegen

1. Open de tekening op zichzelf.
2. Klik rechts, onder **Gekoppelde tekeningen**, op {{ui:Gekoppelde tekeningen toevoegen…}}. Onder **Afbeeldingen** is de knop {{ui:Afbeeldingen toevoegen…}}; beide openen dezelfde kiezer.
3. Kies de gekoppelde `.dwg`-bestanden en de afbeeldingsbestanden. U kunt er meerdere tegelijk kiezen.
4. Wacht terwijl BimCraft de tekening opnieuw opent met die bestanden.

## Wat u zou moeten zien

Elke gekoppelde tekening en afbeelding staat in de lijst met een label:

| Label | Betekent |
|---|---|
| **Getoond** | Gevonden en getekend. Het pad eronder geeft aan waar het vandaan komt, of "door u toegevoegd". |
| **Getoond, vergelijkbare naam** | Een afbeelding gevonden op een gelijkende naam. Controleer of het de juiste is. |
| **Niet gevonden** | Niet in de map of in de bestanden die u toevoegde. Een ontbrekende afbeelding toont als een leeg kader. |
| **TIFF kan niet in een browser worden getoond** | De afbeelding is een TIFF-bestand, dat browsers niet tekenen. Sla hem op als PNG met dezelfde naam en voeg die toe. |
| **Kon niet worden gelezen** | Het bestand is gevonden, maar kon niet als afbeelding worden geopend. |

Het paneel {{ui:Tekening}} links toont "*n* van *m* geladen" voor gekoppelde tekeningen. De lagen van gekoppelde tekeningen verschijnen in {{ui:Lagen}} als "*naam van koppeling*|*laag*".

## Veelgemaakte fouten

- **Alleen de tekening openen.** "Deze tekening toont alleen zijn eigen inhoud totdat zijn gekoppelde tekeningen zijn toegevoegd. Als u de hele projectmap opent, worden ze automatisch gevonden."
- **Een te kleine map openen.** Als de koppelingen in een zusterfolder staan, open dan de bovenliggende map.
- **Hernoemde koppelingen.** BimCraft koppelt gekoppelde tekeningen op naam. Een koppeling die op schijf is hernoemd, wordt niet gevonden; voeg hem met de hand toe.
- **Koppelingen van koppelingen.** BimCraft laadt de tekeningen waarnaar de geopende tekening verwijst. Tekeningen die daarin gekoppeld zijn, worden niet gezocht, dus die tonen meestal niet in deze versie.

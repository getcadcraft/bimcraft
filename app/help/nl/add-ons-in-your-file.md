---
title: Add-ons die uw bestand gebruikt
summary: BimCraft legt in een IFC-bestand vast welke add-ons erin hebben geschreven, en biedt aan de ontbrekende toe te voegen wanneer u het opent.
keywords: add-on, addon, dit bestand gebruikt, ontbrekende add-on, trusscraft, bibliotheek, registratie, cadcraft_addons
from: 9d9500d8
---

## Wat het doet

Wanneer een add-on in het model schrijft (een spant, een leidingtraject), legt BimCraft de add-on en haar versie vast op het IFC-project, in een eigenschapsset CadCraft_AddOns. De registratie wordt geschreven in dezelfde stap ongedaan maken als de eigen wijziging van de add-on, dus ongedaan maken van die wijziging neemt de registratie ook terug. Andere programma's negeren de eigenschapsset; wat de add-on heeft getekend, blijft in elk geval in het bestand.

## Stappen

1. Open een IFC-bestand waaraan een add-on heeft meegewerkt.
2. Als een add-on die het gebruikt niet is ingeschakeld, toont een melding boven het model welke dat zijn, met een knop om ze toe te voegen vanuit uw bibliotheekaccount.
3. Voeg ze toe, of sluit de melding. Het model wordt in beide gevallen geopend.

## Veelgemaakte fouten

- **Er verschijnt geen melding.** U bent in dit tabblad niet aangemeld bij uw account, of het bestand bevat geen registratie (het is gemaakt vóór registraties, of door een ander programma).
- **De wijzigingenlijst zegt "undefined".** Opgelost: labels tonen nu de naam van de add-on.

## Volgende

- [Apparatuur en meubilair plaatsen uit de bibliotheek](topic:place-from-library)

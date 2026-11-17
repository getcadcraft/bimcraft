---
title: Een kaart op de grond onder het model
summary: Leg een straatkaart of luchtfoto op de grond onder een georefereerd IFC-model, uit kaarttegels, kaartdiensten of een afbeelding met een wereldbestand.
keywords: kaart, kaartlagen, achtergrondkaart, luchtfoto, satelliet, locatie, grond, tegels, xyz, wms, wmts, kaartdienst, wereldbestand, georeferentie, ifcmapconversion, geprojecteerd CRS, epsg, context van de locatie
from: 84e2e9df
---

## Wat u gaat doen

Zie het model op zijn plek: de straatkaart of luchtfoto van de locatie op de grond eronder.

## Stappen

1. Open een IFC-model dat zijn plaats op de kaart meedraagt (een kaartconversie, IfcMapConversion, met een geprojecteerd coördinatenstelsel). Exporteurs schrijven die weg wanneer de coördinaten van het project (meetpunt, gedeelde coördinaten) zijn ingesteld.
2. Kies {{ui:Tonen}} › {{ui:Kaartlagen…}}. Het dialoogvenster zegt het stelsel van het model, bijvoorbeeld EPSG:28356. Een model zonder kaartconversie kan geen kaartlagen hebben: het dialoogvenster zegt dat.
3. Zet {{ui:Kaartlagen van internet}} aan. Tot die tijd wordt er aan geen enkele server iets gevraagd; als het aan staat, zien de servers die u toevoegt het gebied rond het model en uw internetadres, nooit uw model.
4. Kies bij {{ui:Een laag toevoegen}} tegels (een adres met `{z}`, `{x}` en `{y}`), een WMS-, WMTS- of ArcGIS-dienst ({{ui:Lagen ophalen}}, en kies daarna één), of een afbeelding met het bijbehorende wereldbestand.
5. Sluit het dialoogvenster. De kaart ligt op de grond net onder het laagste punt van het model, over de voetafdruk van het model en net zo ver eromheen.

:::note
De kaart staat alleen op het scherm; ze wordt niet in het IFC-bestand opgeslagen. De lijst met lagen wordt in deze browser bewaard. Gebruik alleen kaartdiensten waarvan de voorwaarden dat toestaan.
:::

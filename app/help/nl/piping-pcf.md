---
title: Leiding naar een spannings- of isometrieprogramma sturen, en terug inlezen (PCF)
summary: Schrijf de leidingtrajecten van het model als PCF-bestand (piping component file), of lees een PCF-bestand van een leidingspannings- of isometrieprogramma in en teken de leiding als trajecten.
keywords: pcf, piping component file, leidingspanning, pipe stress, isometrie, isometrieën, export, import, leidingwerk, installatie, stalen leiding, een project verplaatsen, andere software
from: 24f91355
---

## Wat u gaat doen

PCF is het platte tekstbestand dat leidingspannings- en isometrieprogramma's lezen en schrijven. Het somt de componenten van elke leidingstreng op, met hun eindpunten en boringen.

## Exporteren

1. Kies het hulpmiddel Leiding. De optiebalk toont **PCF exporteren**.
2. Klik erop. Elk leidingtraject in het model wordt geschreven: rechte leiding, bochten (een draai van 90 graden, anders een buiging), T-stukken met hun aftakpunt, verlopen en afsluiters.
3. Het bestand gebruikt millimeter. Boringen zijn nominale diameters in millimeter. Het middelpunt van een bocht is zijn hoekpunt, waar zijn twee benen samenkomen.

PCF wordt geschreven voor stalen stompgaslas-leiding. Een traject in een ander materiaal wordt ook geschreven, met componentsleutels van staal, en in het deelvenster Problemen vermeld.

## Importeren

1. Kies het hulpmiddel Leiding en klik op **PCF importeren…**, en kies daarna het bestand.
2. Rechte leiding tot en met bochten, buigingen, afsluiters en flenzen wordt één traject op het huidige niveau. Een maatwijziging begint een nieuw traject. De aftakking van een T-stuk wordt een eigen traject, dat begint bij het midden van het T-stuk.
3. Het model legt zijn eigen fittingen aan. Verlopen en T-stukken worden niet gekopieerd: ze verschijnen waar trajecten van verschillende maat, of een aftakking, samenkomen.

:::note
Hoogten in het bestand worden gelezen als hoogten boven het huidige niveau. Belastingen, steunen en de spanningsanalyse zelf zitten niet in een PCF-bestand en komen niet mee.
:::

## Controleren wat is meegekomen

- De totale leidinglengte per leidingstreng moet overeenkomen met de bron.
- Het deelvenster Problemen somt elk één keer op: een bocht waarvan het middelpunt niet even ver van beide uiteinden ligt, leiding zonder lengte, en een boring die geen standaardmaat is.

## Leiding die al in een IFC-bestand staat

Wanneer een IFC-bestand open is, schrijft **PCF exporteren** ook de eigen leidingsegmenten, fittingen en afsluiters daarvan, naast de trajecten die u hebt getekend. Een segment krijgt zijn uiteinden van zijn aansluitpunten, of van de uiteinden van zijn lichaam. Een fitting zonder aansluitpunten wordt weggelaten, en het deelvenster Problemen zegt dat. U kunt alleen vanuit het IFC-bestand exporteren wanneer het model geen getekende trajecten heeft.

Bij het importeren worden steunen, uitlopers (olets), flenzen, pakkingen en doppen in het bestand niet getekend. Het deelvenster Problemen somt op hoeveel van elk er zijn weggelaten, zodat niets stilletjes verdwijnt.

---
title: "Klimaattoekomsten: overstroming, hitte en natuurbrand in 2050 en 2080"
summary: Draai de overstroming, het energiejaar en een natuurbrandscreening opnieuw met toekomstig klimaat (scenario's SSP2-4.5 en SSP5-8.5, jaren 2050 en 2080) uit een klimaatdatapakket, naast elkaar gepresenteerd als heden en toekomst.
keywords: klimaat, klimaatverandering, toekomst, 2050, 2080, ssp, cmip6, scenario, zeespiegelstijging, overstroming, hitte, weerbestand, epw, morph, energyplus, natuurbrand, bosbrand, brandgevaarweer
from: 224ecd08
---

De klimaatcijfers komen uit een **datapakket**, niet uit de app. Zet de add-on {{ui:Climate futures}} aan in Instellingen › Add-ons, of laad een eigen pakketbestand in het blok {{ui:Klimaattoekomst}}.

:::warning
Het pakket dat bij de add-on komt, is een **voorbeeld**: drie plaatsen (Denver, Miami, Johannesburg), één klimaatmodel, vijf jaar in elke periode van 20 jaar. Het is er om de hulpmiddelen uit te proberen, **niet voor ontwerp**. Het paneel zegt dat vet zolang het in gebruik is. Een volledig pakket (veel modellen, alle jaren, meer plaatsen) wordt gebouwd met `tools/climate/build-pack.mjs` uit de NASA NEX-GDDP-CMIP6-data.
:::

## Een toekomst kiezen

Kies in het linkerpaneel bij {{ui:Hazard playback}} een **Scenario** (SSP2-4.5, de middenweg, of SSP5-8.5, hoge uitstoot) en een **Jaar** (2050 betekent 2041-2060, 2080 betekent 2071-2090; beide ten opzichte van 1995-2014). De **Plaats** is de plaats uit het pakket die het dichtst bij de locatie van het model ligt (breedte- en lengtegraad van IfcSite), of de plaats die u kiest. Ver van elke plaats worden de wereldwijde gemiddelde veranderingen van het pakket gebruikt, en het paneel zegt dat.

## Overstroming, heden naast toekomst

Met een scenario gekozen, stelt u het **Overstromingstype** in: kust (voegt de zeespiegelstijging toe), rivier of hevige regen (dieper door de verandering in de regen van de natste dag), of beide. Druk op Uitvoeren: de overstroming speelt af zoals eerder, en een tabel toont de huidige en de toekomstige overstroming naast elkaar (waterpeil, ruimten die nat worden, het diepste water). De aannames staan eronder:

- een kustpeil stijgt met de volledige zeespiegelstijging; storm en golven veranderen niet;
- rivierafvoer stijgt één-op-één met de regenval van de natste dag, en de diepte volgt de afvoer tot de macht 0.6 (vergelijking van Manning voor een brede geul);
- de twee delen worden eenvoudig opgeteld.

## Warmte: een toekomstig weerbestand

Kies de soort {{ui:Warmte: toekomstig weerbestand}}, kies een actueel `.epw`-weerbestand en druk op {{ui:Het toekomstige weerbestand maken}}. Het bestand wordt maand voor maand **gemorfd** met de gepubliceerde verschuivings- en rekmethode (Belcher, Hacker en Powell 2005): het maandgemiddelde warmt op met de verandering van het pakket, de hete middagen met de verandering van het dagmaximum en de koude nachten met de verandering van het dagminimum. De relatieve luchtvochtigheid verschuift met de verandering van het pakket, en het dauwpunt wordt opnieuw berekend. Luchtdruk en wind blijven gelijk. De tabel vergelijkt het gemiddelde en de hoogste temperaturen, de ontwerptemperaturen voor koeling (0.4 %) en verwarming (99.6 %), de uren boven 30 °C en 35 °C, en de graaddagen.

{{ui:Het toekomstige weerbestand opslaan}} slaat het op; {{ui:Gebruiken in de energiecontrole}} geeft het door aan de EnergyPlus-controle (tabblad Energie). Het toekomstige bestand is hetzelfde typische jaar, maar warmer: er komen geen nieuwe hittegolven bij.

## Energiejaar, heden naast toekomst

Kies in de EnergyPlus-controle van het tabblad Energie (een eigen add-on, met uw eigen engine) een actueel weerbestand, dan een scenario en een jaar in het blok {{ui:Klimaattoekomst}}, en druk op {{ui:Een jaar simuleren: heden en toekomst}}. Het jaar draait op het huidige bestand en op de gemorfde toekomst, en de verwarming en koeling van elke ruimte staan naast elkaar.

## Natuurbrandblootstelling (alleen screening)

Kies de soort {{ui:Natuurbrandblootstelling (alleen screening)}}: de dichtstbijzijnde vegetatie, de helling van daar omhoog naar het gebouw, en de afstand ertoe. Het resultaat is een klasse van zeer laag tot extreem, heden en toekomst.

:::warning
**Alleen screening.** Dit is onze eigen relatieve schaal om te zien of een locatie een volledige natuurbrandbeoordeling nodig heeft, geen normwaardering en geen bushfire attack level. Het vermenigvuldigt een gewicht voor de vegetatie, een hellingfactor (een brand verdubbelt ongeveer zijn snelheid voor elke 10 graden omhoog, geteld tot 20 graden), een afstandsfactor (10 m gedeeld door de afstand, maximaal 1) en de verandering in de brandgevaarindex van het pakket.
:::

## Waar de cijfers vandaan komen

- **Temperatuur, luchtvochtigheid, zonneschijn, regenval, brandgevaarweer:** NASA NEX-GDDP-CMIP6, dagelijks verfijnde CMIP6-modeluitvoer. De uitvoer van elk model valt onder CC BY 4.0. De verandering in het brandgevaarweer is de Canadian Fire Weather Index, dag voor dag berekend uit het weer van het model (met dagelijkse luchtvochtigheid in plaats van middagluchtvochtigheid).
- **Zeespiegelstijging:** het IPCC AR6-wereldgemiddelde (niet lokaal; land dat stijgt of zinkt zit er niet in), tenzij een pakket lokale cijfers bevat.
- Het pakket noemt zijn bron, licentie en datum; het paneel toont ze.

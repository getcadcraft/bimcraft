---
title: Elementen inkleuren op een eigenschap
summary: Kleur elk element naar de waarde van één eigenschap, zoals klasse, type, verdieping, materiaal, brandwerendheid of kosten. Lees de legenda, klik op een waarde om alleen die elementen te tonen, en sla de kleuren op als schema om op andere modellen te gebruiken.
keywords: kleur, kleuren, kleur op, legenda, slimme weergave, uiterlijk, eigenschap, type, materiaal, brandwerendheid, filter, isoleren, thema, waarden, schema, kleurenschema, kleuren opslaan, hergebruiken, team, json, kleurstaal
from: f081d343
---

## Wat u gaat doen

Zie in één oogopslag hoe een eigenschap over het model is verdeeld: welke wanden extern zijn, welke materialen waar worden gebruikt, welke elementen geen brandwerendheid hebben. Elk element krijgt de kleur van zijn waarde, en de legenda zegt wat elke kleur betekent en hoeveel elementen die hebben.

## Stappen

1. Open een IFC-model.
2. Klik rechts op het tabblad {{ui:Kleur}}.
3. Kies een eigenschap in de lijst. De eerste horen bij elk element ({{ui:Klasse}}, {{ui:Type}}, {{ui:Verdieping}}, {{ui:Materiaal}}, {{ui:Naam}}…); de rest komt uit de eigenschapssets en hoeveelhedensets van het model, onder de naam van de set. Het getal achter elke eigenschap is het aantal elementen dat die heeft.
4. Lees de legenda: een kleur, de waarde en het aantal elementen dat die heeft.
5. Klik op een waarde om alleen die elementen te tonen. Houd {{key:Mod}} ingedrukt en klik om meer waarden toe te voegen. Druk op {{key:Shift+H}} om weer alles te tonen.
6. Klik op {{ui:Uit}} om terug te gaan naar de eigen kleuren van het model.

## Wat u ziet

- Tot zeven waarden krijgen elk een eigen kleur, de meest voorkomende waarde eerst. Meer waarden delen één grijs, vermeld als **overige waarden**.
- Een getal met veel verschillende waarden wordt verdeeld in zes gelijke bereiken, van licht (laag) naar donker (hoog).
- Elementen zonder de eigenschap zijn lichtgrijs, vermeld als **Geen waarde**, zodat de gekleurde elementen opvallen.
- De kleuren wisselen mee met Papier en Model, en blijven behouden terwijl u het model bewerkt.
- De eigenschap van een type geldt voor elk element van dat type; heeft een element een eigen waarde voor dezelfde eigenschap, dan geldt die eigen waarde.

## Kleuren wijzigen en als schema bewaren

- Klik op het kleurstaal van een waarde in de legenda om er een andere kleur voor te kiezen. Het model wordt meteen opnieuw ingekleurd.
- {{ui:Schema opslaan}} downloadt de kleuren als een klein `.json`-bestand, genoemd naar de eigenschap, bijvoorbeeld `Class colors.json`.
- Klik in een ander model, of op de computer van een teamgenoot, op {{ui:Schema openen…}} en kies dat bestand. Elke waarde in het schema krijgt zijn kleur, zodat dezelfde brandwerendheid of hetzelfde systeem in elk model dezelfde kleur heeft.
- Een waarde die het schema niet heeft, wordt grijs ingekleurd en vermeld als "niet in het schema". Waarden in het schema die dit model niet heeft, blijven vermeld met 0, zodat u het hele schema ziet.
- Een schema bewaart zijn kleuren in beide thema's. Een eigenschap kiezen in de lijst begint weer met de automatische kleuren.

## Veelvoorkomende fouten

- **"Dit model heeft geen … waarden".** Het schema is opgeslagen voor een eigenschap die dit model niet heeft (bijvoorbeeld een andere naam van de eigenschapsset). Open een schema dat voor dit soort model is gemaakt, of kies een eigenschap in de lijst.

- **Een eigenschap ontbreekt in de lijst.** Geen enkel element met een vorm in het model heeft die. Eigenschappen van verdiepingen en ruimten zelf worden niet vermeld.
- **Alles heeft dezelfde kleur.** Elk element heeft dezelfde waarde, of geen. Kijk naar de aantallen in de legenda.

## Volgende

- [Verbergen, isoleren en doorzichtig maken van elementen](topic:hide-and-isolate)
- [Uw weg vinden met de modelboom](topic:model-tree)

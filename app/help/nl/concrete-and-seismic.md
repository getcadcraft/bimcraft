---
title: Betonnen staven controleren en seismische belastingen maken
summary: Stel de wapeningsstaven van betonnen balken en kolommen van het open model in, controleer ze volgens ACI 318-19, maak equivalente horizontale krachten volgens ASCE 7-22 op stijve vloeren en bekijk de verdiepingsdrift. Een hulpmiddel om door een ingenieur te laten controleren.
keywords: beton, gewapend beton, ACI 318, ACI 318-19, wapening, balk, kolom, dwarskracht, beugels, seismisch, aardbeving, equivalente horizontale kracht, ELF, ASCE 7-22, drift, verdiepingsdrift, vloeren, stijve schijf, verdiepingsgewicht, benutting, constructief, ingenieur, analyse
from: 2f342e72
---

De blokken {{ui:Betonnen staven}} en {{ui:Seismische belastingen}} in het tabblad {{ui:Analyse}} controleren gewapende betonbalken en -kolommen van het open IFC, en maken de zijdelingse krachten van een aardbeving op de vloeren van het raamwerk. Het zijn dezelfde blokken als die van DetailCraft, uitgevoerd na de analyse van het tabblad {{ui:Analyse}} en opgeslagen in het IFC met de andere analyse-instellingen.

:::warning
De resultaten zijn **bedoeld om door een ingenieur te laten controleren**: een hulpmiddel totdat iemand ze heeft nagekeken. De betoncontroles gebruiken krachten van de eerste orde (een kolom in een raamwerk dat u als niet-verplaatsbaar aanmerkt, wordt ontworpen op zijn vergrote moment), zonder vergroting door verplaatsing, zonder torsieontwerp, zonder seismische detaillering (ACI hoofdstuk 18) en zonder beugeldetaillering. De seismische belastingen laten de redundantiefactor, het verticale seismische effect, torsievergroting en P-delta-effecten weg. **Windbelastingen zijn nog niet beschikbaar**: de windhoofdstukken van de norm staan niet in de referentiepagina's van het project.
:::

## Wat BimCraft leest

De analyse leest de balken, kolommen en diagonalen van het model met hun profielen (zie [Het constructieve raamwerk analyseren](topic:frame-analysis)). Het blok {{ui:Betonnen staven}} toont elke doorsnede die ze gebruiken. Druk op {{ui:Als beton instellen…}} bij een doorsnede die beton is: BimCraft neemt een rechthoek uit het oppervlak en de stijfheid van het profiel (de breedte b en hoogte h die u daarna kunt wijzigen). Een doorsnede die niet dicht bij een rechthoek ligt (een gewalst staalprofiel) geeft dus een afmeting die u moet corrigeren, of blijft onaangeroerd.

Een doorsnede die als beton is ingesteld, en elk element waarvan het materiaal beton heet, wordt als beton geanalyseerd: E = 4700 √f′c, 2400 kg/m³, en standaard met **gescheurde doorsneden** (kolommen 0.70 Ig, balken 0.35 Ig; ACI 318-19 Tabel 6.6.3.1.1(a)). Kies {{ui:Bruto doorsneden}} om dat uit te zetten. Zonder deze instellingen wordt het model precies zoals voorheen geanalyseerd.

## Wapening, combinaties, controle

Geef per doorsnede de dekking, de boven-, onder- en zijstaven (of een kolomkooi) en de beugels op, en stel f′c, fy, fyt, K en verplaatsbaar of niet-verplaatsbaar in. Geef de belastinggevallen hun soort, druk op {{ui:Combinaties maken}} (ASCE 7 §5.3.1) en daarna op {{ui:Beton controleren}}: elke staaf krijgt een benutting, in kleur op het model. Staven die boven hun capaciteit zitten, en een verdiepingsdrift boven de grens, worden met hun artikel vermeld in {{ui:Problemen}}; klik op een ervan om het element te selecteren.

## Vloeren en seismische belastingen

In het blok {{ui:Seismische belastingen}} neemt {{ui:Vloeren zoeken}} de niveaus waar twee of meer balken samenkomen; elk wordt een stijve schijf. {{ui:Gewichten uit gevallen nemen}} leest het seismische gewicht van elke vloer uit de gevallen waaraan u een factor geeft. Vul SDS, SD1, S1, R, Ie, Cd, TL, het systeem en de risicocategorie in, en druk daarna op {{ui:Seismische gevallen maken}} (ASCE 7-22 12.8: periode, basisschuifkracht, verdeling over de vloeren, 5 % toevallige torsie). De verdiepingskrachten en de driftcontrole (12.12) verschijnen na een berekening. Dezelfde periode en verdiepingsstijfheid voeden de aardbeving in [Een overstroming, wind of aardbeving afspelen](topic:hazard-playback) wanneer u het analyseraamwerk als bron kiest.

Vloeren en wanden van beton worden in de analyse platen, en het blok {{ui:Vloerwapening}} berekent het staal dat ze per meter nodig hebben. De details van elke controle staan in het DetailCraft-onderwerp met dezelfde naam.

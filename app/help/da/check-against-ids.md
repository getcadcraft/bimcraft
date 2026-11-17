---
title: Kontrollér en model mod en bygherres IDS
summary: Indlæs den .ids-fil, du har fået, og se hvert element, der ikke lever op til den, under Problemer, før du leverer IFC'en.
keywords: ids, information delivery specification, buildingsmart, krav, levering, kontrol, validering, qa, eir, bep, egenskab, klassifikation, materiale, udbud
from: 7b960222
---

## Hvad du skal gøre

En IDS (Information Delivery Specification, en buildingSMART-standard) er listen over, hvad en IFC skal indeholde: hvilke klasser, hvilke egenskaber med hvilke værdier, klassifikationer, materialer og hvor ting hører til. Bygherrer og offentlige udbydere sender en med opgaven. BimCraft kontrollerer den åbne IFC-model mod den og lister hvert element, der ikke lever op til den.

## Trin

1. Åbn en IFC-model.
2. Åbn {{ui:Kontrollér mod en IDS}} i venstre panel, under {{ui:Modelkontrol}}, eller vælg {{ui:Kontrollér mod IDS…}} fra menuen i din menustil.
3. Klik på {{ui:Indlæs en .ids-fil…}} og vælg filen. Intet uploades.
4. Læs resultatet: hver specifikation med {{ui:Bestået}} eller {{ui:Ikke bestået}} og hvor mange elementer den gælder for.
5. Åbn Problemer ({{key:Ctrl+Shift+M}}) og klik på en fejl for at vælge elementet og zoome til det.

## Hvad du bør se

- Én advarsel pr. element og krav, det ikke opfylder, med specifikationens navn, hvad IDS'en kræver, og hvad elementet har.
- Et påkrævet krav, som intet i modellen matcher, er en advarsel for sig selv.
- Kontrolrapporten (under Problemer) starter med IDS'en: dens titel, version, forfatter og for hver specifikation antallet af gældende, bestået og ikke bestået.

## Godt at vide

- IFC'en gemmer kun en henvisning til IDS'en (navn, titel, version og en hash), ikke selve IDS'en: en bygherres IDS kan være fortrolig, og IFC'en går til andre. IDS'en bliver i denne browser ved siden af modellen, så når du åbner den gemte IFC her igen, kontrolleres den igen. Indlæsning eller glemning af IDS'en er ét trin, du kan fortryde.
- Åbnet på en anden computer eller i en anden browser viser Problemer en note om, at IDS'en ikke blev fundet: indlæs den igen for at kontrollere på ny.
- For at sende IDS'en med IFC'en slår du {{ui:Behold IDS'en inde i IFC'en}} til under Indstillinger, på fanen BimCraft, før du indlæser den.
- Hver redigering, fortryd og gentag kontrolleres igen et øjeblik senere.
- Værdier sammenlignes på IDS-måden: tekst præcist (store og små bogstaver tæller), tal i SI-enheder med en lille tolerance (længder i meter, så en model i millimeter konverteres først).
- En specifikation skrevet til en anden IFC-version (fx IFC2X3, når modellen er IFC4) kontrolleres stadig, og resultatet siger det.
- Hvis IDS-filen har fejl, som en IDS-revision ville markere, lister dialogen dem; de specifikationer, de sidder i, fejler.
- Du kan acceptere en fejl med en begrundelse, ligesom ethvert problem. Den forbliver accepteret, så længe elementets værdier er de samme.

- Mønstre i IDS'en læses som hele værdien. Et `^` i starten og et `$` til sidst tages også som »hele værdien«, sådan som de fleste IDS-filer mener dem.

## Næste

- [Kontrollér en model for almindelige problemer](topic:model-checks)
- [Ændr en væg eller dør](topic:change-a-wall-or-door)

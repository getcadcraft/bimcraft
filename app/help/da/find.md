---
title: Find elementer efter klasse, navn eller egenskab
summary: Find alle elementer, der matcher en eller flere regler — deres klasse, navn, type, etage, materiale eller en egenskabsværdi — vælg dem alle, og gem reglerne som et navngivet søgesæt.
keywords: find, søg, filtrér, forespørgsel, regel, søgesæt, valgsæt, gemt søgning, egenskab, værdi, klasse, materiale, vælg alle
from: 3d293bc2
---

## Hvad du skal gøre

Vælg alle elementer af én slags eller med én værdi i ét trin: alle døre, alle vægge på Etage 2, alle elementer, hvis brandklasse er EI60, alle vægge, der koster mere end et fastsat beløb.

## Trin

1. Åbn en IFC-model.
2. Åbn {{ui:Find}} i venstre panel.
3. I den første regel vælger du en egenskab (elementets egne først, såsom {{ui:Klasse}} og {{ui:Etage}}, derefter modellens egenskabssæt), hvordan der skal sammenlignes, og en værdi. Værdifeltet foreslår de værdier, modellen har.
4. For at indsnævre klikker du på {{ui:Tilføj en regel}}. Vælg {{ui:Alle regler}}, hvis alle skal gælde, eller {{ui:En af reglerne}}, hvis én af dem er nok.
5. Klik på {{ui:Find}}, eller tryk {{key:Enter}} i et værdifelt. Det, der matcher, bliver valgt.
6. For at gemme reglerne klikker du på {{ui:Gem som et sæt}}, skriver et navn og klikker igen. Senere klikker du på et sæts navn for at finde med det.

## Hvad du skal se

- Matchene er valgt i 3D-visningen og modeltræet, og {{ui:Egenskaber}} viser, hvor mange der er pr. klasse. Tryk {{key:I}} for kun at vise dem, {{key:H}} for at skjule dem.
- Ord matcher uanset store og små bogstaver. Tal sammenlignes som tal: »er større end 1000« betyder værdien, ikke teksten.
- {{ui:har en værdi}} og {{ui:har ingen værdi}} kræver ingen værdi; de finder det, der er udfyldt, eller det, der mangler.
- Gemte sæt bliver i denne browser for alle modeller, du åbner.

## Almindelige fejl

- **Intet findes.** En regel skal have en værdi, den kan matche: se forslagene i værdifeltet.
- **En egenskab mangler på listen.** Intet element med en form i denne model har den.

## Næste

- [Farvelæg elementer efter en egenskab](topic:color-by-property)
- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)

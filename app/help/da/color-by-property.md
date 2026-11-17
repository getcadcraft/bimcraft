---
title: Farvelæg elementer efter en egenskab
summary: Farvelæg hvert element efter værdien af én egenskab, fx klasse, type, etage, materiale, brandmodstand eller omkostning, læs signaturforklaringen, klik på en værdi for kun at vise de elementer, og gem farverne som et skema til brug på andre modeller.
keywords: farve, farvelæg, farve efter, signaturforklaring, smart-visning, udseende, egenskab, type, materiale, brandmodstand, filter, isolér, tema, værdier, skema, farveskema, gem farver, genbrug, team, json, farveprøve
from: f081d343
---

## Hvad du gør

Se med et blik, hvordan en egenskab er fordelt over modellen: hvilke vægge der er ydervægge, hvilke materialer der bruges hvor, hvilke elementer der ikke har en brandmodstand. Hvert element får farven for sin værdi, og signaturforklaringen siger, hvad hver farve betyder, og hvor mange elementer der har den.

## Trin

1. Åbn en IFC-model.
2. Klik på fanen {{ui:Farve}} til højre.
3. Vælg en egenskab på listen. De første hører til hvert element ({{ui:Klasse}}, {{ui:Type}}, {{ui:Etage}}, {{ui:Materiale}}, {{ui:Navn}}…); resten kommer fra modellens egenskabssæt og mængdesæt, under sættets navn. Tallet efter hver enkelt er, hvor mange elementer der har den.
4. Læs signaturforklaringen: en farve, værdien og hvor mange elementer der har den.
5. Klik på en værdi for kun at vise de elementer. Hold {{key:Mod}} nede og klik for at tilføje flere værdier. Tryk på {{key:Shift+H}} for at vise alt igen.
6. Klik på {{ui:Fra}} for at gå tilbage til modellens egne farver.

## Hvad du skal se

- Op til syv værdier får hver sin farve, den hyppigste værdi først. Flere værdier end det deler én grå farve og står opført som **andre værdier**.
- Et tal med mange forskellige værdier deles i seks lige store intervaller, fra lys (lav) til mørk (høj).
- Elementer uden egenskaben er lysegrå og står opført som **Ingen værdi**, så de farvede skiller sig ud.
- Farverne skifter med Papir og Model og bliver, mens du redigerer modellen.
- En types egenskab gælder for hvert element af den type; når et element har sin egen værdi for den samme egenskab, vinder dens egen værdi.

## Ændr farver, og gem dem som et skema

- Klik på en værdis farveprøve i signaturforklaringen for at vælge en anden farve til den. Modellen males straks om.
- {{ui:Gem skema}} downloader farverne som en lille `.json`-fil, navngivet efter egenskaben, fx `Class colors.json`.
- På en anden model eller på en kollegas computer klikkes {{ui:Åbn skema…}}, og filen vælges. Hver værdi i skemaet får sin farve, så samme brandmodstand eller samme system har samme farve i alle modeller.
- En værdi, som skemaet ikke har, males grå og står opført som »ikke i skemaet«; værdier i skemaet, som denne model ikke har, bliver stående med 0, så du kan se hele skemaet.
- Et skema gemmer sine farver i begge temaer. Når du vælger en egenskab på listen, starter den fra de automatiske farver igen.

## Typiske fejl

- **»Denne model har ingen … værdier.«** Skemaet er gemt for en egenskab, som denne model ikke har (fx et andet navn på egenskabssættet). Åbn et skema lavet til denne slags model, eller vælg en egenskab på listen.
- **En egenskab mangler på listen.** Intet element med en form i modellen har den. Egenskaber for selve etagerne og zonerne står ikke på listen.
- **Alt har samme farve.** Alle elementer har den samme værdi, eller ingen: se på tallene i signaturforklaringen.

## Næste

- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
- [Find rundt i modeltræet](topic:model-tree)

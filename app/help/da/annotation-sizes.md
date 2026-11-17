---
title: Tegn i fuld størrelse, annotér efter målestok
summary: Bygningen tegnes altid i fuld størrelse. Tekst, målsætninger, mærker, rumnavne, gitterbobler og symboler dimensioneres på papiret, i millimeter som trykt, og beholder deres størrelse, når en tegnings målestok ændres fra 1:100 til 1:50.
keywords: annoteringsmålestok, annotativ, tekststørrelse, teksthøjde, papirhøjde, målsætningstekststørrelse, mærkestørrelse, rumnavnsstørrelse, gitterboble, symbolstørrelse, tegningsmålestok, 1:50, 1:100, kontorstandard, skrift, tegn i 1:1, fuld størrelse, tekst på ark
from: 94118788
---

## Hvad du skal gøre

Angiv hvor høj skriften er på papiret i dine tegninger, én gang for bygningen. Du skalerer aldrig modellen, og du ændrer aldrig tekststørrelsen efter en målestok: BimCraft beregner størrelsen ud fra papirhøjden og tegningens målestok.

## Sådan virker det

- Modellen er i fuld størrelse. En væg på 10 m er 10 000 mm lang ved hver målestok.
- En annotering har en **papirhøjde**: højden af et stort bogstav på det trykte ark, i millimeter.
- Ved en målestok på 1:100 er en 2.5 mm tekst 250 mm høj i modellen; ved 1:50 er den 125 mm. På papiret er den 2.5 mm begge gange.
- Planens symboler (el, VVS) tegnes i papirmillimeter og følger samme regel.

## Trin

1. Åbn projektbrowseren. Under {{ui:Ark}} klik på {{ui:Annoteringsstørrelser…}}.
2. Skriv en højde i millimeter for de typer, du vil angive: {{ui:Noter og etiketter}}, {{ui:Målsætningstekst}}, {{ui:Mærker og etagenavne}}, {{ui:Rumnavne}}, {{ui:Bogstaver i gitterbobler}}, {{ui:Visningstitler på ark}} og {{ui:Listetekst}}. En tom boks beholder BimCraft's egen størrelse, vist med grå.
3. Klik på {{ui:Gem}}. Det er ét trin, som du kan fortryde.

Alle ark, tegningssættet, planen som PDF og facaderne og snittene bruger størrelserne fra da af. Afstanden mellem en målelinje og dens tekst, størrelsen på en gitterboble og højden på en listerække vokser med teksten.

## En plan med sin egen målestok

Giv en plan en målestok i dens visningsområde ({{ui:Målestok}}; se [Visninger og ark](topic:views-and-sheets)). Så:

- på skærmen tegnes rumnavne, mærker, målsætningstekst og gitterbobler i deres trykte størrelse i forhold til modellen, så det du ser, er det arket vil vise;
- planens symboler og deres mærker dimensioneres for den målestok. Skift målestok fra 1:100 til 1:50, og de er halvt så store i modellen og de samme på papiret.

En plan uden egen målestok beholder sin faste skærmtekst, og dens symboler dimensioneres for 1:50 (1/4" = 1'-0" i fod og tommer), som før.

## Dit kontors størrelser

Med add-on'en Default Policies slået til, angiv kontorets højder i Indstillinger › Global › Default Policies › {{ui:Annoteringsstørrelser på papir}}. En ny bygning får dem, når du klikker på Opret. I en bygning, du allerede er begyndt på, har dialogen {{ui:Brug mit kontors størrelser}}. Se [Default Policies](topic:default-policies).

## En reguleringspakkes størrelser

En reguleringspakke kan angive de teksthøjder, stedet kræver (add-on'en Building regulations, tegningskonventioner). Sæt flueben ved pakken under Indstillinger › Building regulations, og klik derefter i dialogen på {{ui:Brug en reguleringspakkes størrelser}}: felterne udfyldes, og du kontrollerer dem og gemmer. En størrelse en pakke angiver i punkter, er en skriftstørrelse og omregnes til en versalhøjde, så kontrollér den. Intet bliver angivet, før du gemmer.

## Hvad du bør se

- Den samme teksthøjde i millimeter på et ark i 1:100 og et ark i 1:50, mens planen selv er dobbelt så stor i 1:50.
- Størrelserne følger bygningen: de gemmes i dens IFC-fil.

## Godt at vide

- BimCraft's egne størrelser er dem, dets ark altid har brugt (ca. 1.5 mm versaler til målsætningstekst). De er ikke en tegnestandard: angiv dit kontors.
- En højde skal være fra 0.5 til 50 mm.
- Skriften i tegningshovedet og nøglenoter er ikke en del af dette: de beholder deres egne størrelser.

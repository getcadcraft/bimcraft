---
title: Tegn i full størrelse, annoter etter målestokk
summary: Bygningen tegnes alltid i full størrelse. Tekst, mål, merkelapper, romnavn, aksebobler og symboler dimensjoneres på papiret, i millimeter som de skrives ut, og beholder størrelsen når målestokken på en tegning endres fra 1:100 til 1:50.
keywords: annoteringsmålestokk, annotering, annoterende, tekststørrelse, teksthøyde, papirhøyde, måltekststørrelse, merkelappstørrelse, romnavnstørrelse, akseboble, symbolstørrelse, tegningsmålestokk, 1:50, 1:100, kontorstandard, skrift, tegn i 1:1, full størrelse, arktekst
from: 94118788
---

## Hva du skal gjøre

Angi hvor høye bokstavene i tegningene dine skal være på papiret, én gang for bygningen. Du skalerer aldri modellen, og du endrer aldri teksten for en målestokk: BimCraft regner ut størrelsen fra papirhøyden og tegningens målestokk.

## Slik fungerer det

- Modellen er i full størrelse. En vegg på 10 m er 10 000 mm lang i alle målestokker.
- En annotering har en **papirhøyde**: høyden på en stor bokstav på det utskrevne arket, i millimeter.
- Ved målestokk 1:100 er en 2,5 mm tekst 250 mm høy i modellen; ved 1:50 er den 125 mm. På papiret er den 2,5 mm begge gangene.
- Planssymboler (elektro, sanitær) tegnes i papirmillimeter og følger samme regel.

## Steg

1. Åpne prosjektvinduet. Under {{ui:Ark}} klikker du {{ui:Annoteringsstørrelser…}}.
2. Skriv en høyde i millimeter for typene du vil angi: {{ui:Merknader og etiketter}}, {{ui:Måltekst}}, {{ui:Merkelapper og etasjenavn}}, {{ui:Romnavn}}, {{ui:Bokstaver i akseboblene}}, {{ui:Visningstitler på ark}} og {{ui:Tabelltekst}}. En tom boks beholder BimCraft sin egen størrelse, vist i grått.
3. Klikk {{ui:Lagre}}. Det er ett steg du kan angre.

Alle ark, tegningssettet, plan-PDF-en, fasadene og snittene bruker disse størrelsene fra da av. Avstanden mellom målelinjen og teksten, størrelsen på akseboblene og høyden på tabellradene vokser med teksten.

## En plan med egen målestokk

Gi en plan en målestokk i visningsområdet ({{ui:Målestokk}}; se [Visninger og ark](topic:views-and-sheets)). Da:

- på skjermen tegnes romnavn, merkelapper, måltekst og aksebobler i utskriftsstørrelse mot modellen, slik at det du ser er det arket viser;
- planssymboler og merkelappene deres dimensjoneres for den målestokken. Endrer du målestokken fra 1:100 til 1:50, blir de halvparten så store i modellen og like store på papiret.

En plan uten egen målestokk beholder fast skjermtekst, og symbolene dimensjoneres for 1:50 (1/4" = 1'-0" i fot og tommer), som før.

## Kontorets størrelser

Med tillegget Default Policies på, angir du kontorets høyder i Innstillinger › Global › Default Policies › {{ui:Annoteringsstørrelser på papir}}. En ny bygning tar dem når du klikker Opprett. I en bygning du allerede har startet, har dialogen {{ui:Bruk kontorets størrelser}}. Se [Default Policies](topic:default-policies).

## En forskriftspakkes størrelser

En forskriftspakke kan gi teksthøydene stedet krever (tillegget Byggeforskrifter, tegningskonvensjoner). Kryss av pakken i Innstillinger › Byggeforskrifter, og klikk deretter {{ui:Bruk størrelsene i en forskriftspakke}} i dialogboksen: feltene fylles inn, og du kontrollerer dem og lagrer. En størrelse en pakke gir i punkter er en skriftstørrelse, og den gjøres om til en versalhøyde, så kontroller den. Ingenting settes før du lagrer.

## Hva du skal se

- Samme teksthøyde i millimeter på et ark i 1:100 og på et ark i 1:50, mens selve planen er dobbelt så stor i 1:50.
- Størrelsene følger bygningen: de lagres i IFC-filen.

## Greit å vite

- BimCraft sine egne størrelser er de arkene alltid har brukt (ca. 1,5 mm versaler for måltekst). De er ikke en tegnestandard: angi kontorets egne.
- En høyde må være fra 0,5 til 50 mm.
- Skrift i tegningshodet og forklaringer til nøkkelnotater er ikke med her: de beholder sine egne størrelser.

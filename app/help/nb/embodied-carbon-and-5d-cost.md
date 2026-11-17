---
title: Innebygd karbon og kostnader på tidsplanen
summary: Legg sammen modellens innebygde karbon fra en åpen, redigerbar faktortabell, og fordel priser over 4D-tidsplanen til en kostnads- og kontantstrømkurve. Begge starter fra verdier du skriver inn eller importerer.
keywords: innebygd karbon, karbon, co2, kgco2e, utslipp, faktortabell, epd, 5d, kostnad, kontantstrøm, s-kurve, tidsplankostnad, priser, mengdeuttakspriser
from: 83e82840
---

## Innebygd karbon

Åpne panelet **Karbon**. Mengden for hvert element (volum, areal eller lengde) ganges med en faktor fra tabellen, etter livssyklusmodul: produktfasen er påkrevd, transport og avfall er valgfrie. Summene vises etter materiale, klasse og etasje, og per kvadratmeter gulvareal.

**Faktortabellen er din.** Radene som følger med BimCraft, er generiske startverdier i riktig størrelsesorden. De er ikke hentet fra en database, er merket som ikke kontrollert, og må erstattes med kilden som brukes (en EPD, en nasjonal database eller firmaets egne tall). Rediger rader i panelet, eller importer og eksporter tabellen som CSV eller JSON. Rader som legges til, overstyrer startraden med samme id. Tabellen lagres i modellen.

Elementer uten treff, eller uten mengde, listes som Problemer i stedet for å telles som null.

## Kostnader på 4D-tidsplanen

Åpne panelet **Kostnad** ved siden av 4D-tidsplanen. Gi det priser (skriv dem inn, importer en CSV- eller JSON-fil, eller hent linjene fra TakeoffCraft), knytt hver pris til modellmaterialer med nøkkelord, så priser det alle oppgavens elementer. Kostnaden for en oppgave fordeles over dagene fra start til slutt (jevnt, eller tyngst fremst eller bakerst), og panelet tegner den akkumulerte kontantstrømkurven per dag, uke eller måned, med kostnad per fase og pakke, og hva som er planlagt mot hva som er bygget på en dato. Eksport til CSV. Ingenting prises før priser er lagt inn; ingen følger med.

## Valuta

En pristabell kan angi hvilken valuta prisene er i (tre bokstaver, for eksempel USD eller EUR). 5D-panelet har en boks for det, den lagres i filen sammen med prisene, og JSON-eksporter tar det med. En tabell laget før dette, eller der feltet er tomt, har ingen valuta: kostnadene vises i USD, skallets standard, og panelet og løpende summer sier det. Ingen valuta omregnes.

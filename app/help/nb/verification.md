---
title: Merk elementer som kontrollert eller kontrollert på stedet
summary: Et element lest fra en PDF eller en skanning er ikke verifisert før du kontrollerer det. Merk elementer som kontrollert, eller som kontrollert på stedet (LOD 500) med hvem som målte dem, når og hvordan, og lever en som-bygget-modell som viser hvilke som er hvilke.
keywords: ikke verifisert, verifisert, kontrollert, kontrollert på stedet, som bygget, as-built, lod 500, avslutning, overlevering, målt på stedet, målebånd, laser, skanning, oppmåling, eksisterende bygg, endring, merk som kontrollert, verifisering, fase 7
from: df35d908
---

## Det du skal gjøre

Hold styr på hva i modellen noen faktisk har sett på. Et element har ett av tre merker, eller ingen:

- **Ikke verifisert**: programmet gjenkjente det fra en PDF, en skannet tegning, en avtegnet tegning eller en punktskyskanning. Ingen har sjekket det ennå.
- **Kontrollert**: en person sammenlignet det med tegningen det kom fra.
- **Kontrollert på stedet (LOD 500)**: en person målte det på stedet. Hvem, når og hvordan lagres sammen med det.
- **Uten merke**: tegnet av en person. Modellen påstår ingenting om det.

## Steg

1. Velg ett element eller flere (vegger, dører, vinduer, rom, alle elementer).
2. I {{ui:Egenskaper}} åpner du {{ui:Verifisering}}.
3. Skriv hvem som kontrollerte eller målte det. Datoen er i dag, med mindre du endrer den.
4. Klikk {{ui:Merk som kontrollert}}. For en måling på stedet velger du hvordan det ble målt (målebånd, laseravstandsmåler, skanning, oppmåling) og klikker {{ui:Merk som kontrollert på stedet (LOD 500)}}.
5. {{ui:Merk som ikke verifisert}} og {{ui:Fjern merket}} går tilbake. Hvert klikk er ett steg du kan angre, for hele utvalget.

For å merke et utvalg raskt: {{ui:Verktøy}} › {{ui:Merk som kontrollert}} (skrevet: `MARKCHECKED`) merker det som kontrollert av deg, i dag.

## Hva du bør se

- I planen har et ikke verifisert element en stiplet boks og et «?»; et kontrollert på stedet har en hake. Fjern haken for {{ui:Vis verifiseringsmerker i planen}} i delen {{ui:Kontroll}} for å skjule dem.
- {{ui:Tabeller}} › {{ui:Verifisering}} lister hvert merket element med sin etasje, tilstand, hvem, når, hvordan og hvor det kom fra.
- Kontrollen lister ikke-verifiserte elementer, og teller et kontrollert på stedet-element som LOD 500. Se [Kontroller modellen](topic:audit-the-model).

## Fra en skanning

Når du sammenligner en skanning med modellen, {{ui:Merk de samsvarende elementene som kontrollert på stedet}} merker hvert element skanningen så som bygget innenfor toleransen, med metoden «skanning» og toleransen i merknaden. Se [Sammenlign en skanning med modellen](topic:compare-scan-with-model).

:::warning
Sammenligningen matcher hvert elements boks med skannepunkter. Det er ikke en oppmåling. Bruk den for elementer du også har sett på.
:::

## Modellen som bygget og overleveringspakken

{{ui:Bygg overleveringspakken}} på fanen {{ui:Ressurser}} legger modellen som bygget i zip-filen, med:

- en erklæring på prosjektet om hvor mange elementer som er kontrollert på stedet, kontrollert, ikke verifisert og uten merke;
- `as-built/verified-elements.csv`: hvert element og rom med tilstand, hvem, når og hvordan;
- `as-built/as-built-drawings.pdf`: tegningssettet slik det er nå;
- endringsloggen for tegninger, når modellen har utstedte sett.

Se [Ressurser og vedlikehold](topic:assets-and-maintenance).

## Hvordan det lagres i IFC

Hvert merket element har egenskapssettet `CadCraft_Verification`: State, By, On, Method, Source, Note og LevelOfDevelopment (`LOD 500` mens det er kontrollert på stedet). De er vanlige tekstegenskaper, så andre programmer viser dem, og Finn, Farge etter egenskap og merkede tabeller kan bruke dem. Den som-bygget-erklæringen er egenskapssettet `CadCraft_AsBuilt` på prosjektet. Et element uten settet er ikke målt på stedet.

## Neste

- [Vegger fra et sett med planer](topic:walls-from-plans)
- [Kontroller modellen](topic:audit-the-model)

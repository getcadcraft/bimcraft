---
title: Kontroller en modell mot en klients IDS
summary: Last inn .ids-filen du fikk, og se hvert element som ikke oppfyller den, under Problemer, før du leverer IFC-filen.
keywords: ids, informasjonsleveransespesifikasjon, information delivery specification, buildingsmart, krav, levering, kontroll, validering, kvalitetssikring, eir, bep, egenskap, klassifisering, materiale, anskaffelse
from: 7b960222
---

## Hva du gjør

En IDS (Information Delivery Specification, en buildingSMART-standard) er listen over hva en IFC-fil må inneholde: hvilke klasser, hvilke egenskaper med hvilke verdier, klassifiseringer, materialer og hvor ting skal plasseres. Klienter og offentlige anskaffelser sender en med oppdraget. BimCraft sjekker den åpne IFC-modellen mot den og lister hvert element som ikke holder mål.

## Trinn

1. Åpne en IFC-modell.
2. Åpne {{ui:Kontroller mot en IDS}} i venstre panel, under {{ui:Modellkontroller}}, eller velg {{ui:Kontroller mot IDS…}} fra menyen, avhengig av menystilen din.
3. Klikk {{ui:Last en .ids-fil…}} og velg filen. Ingenting lastes opp.
4. Les resultatet: hver spesifikasjon med {{ui:Bestått}} eller {{ui:Ikke bestått}}, og hvor mange elementer den gjelder for.
5. Åpne Problemer ({{key:Ctrl+Shift+M}}) og klikk en feil for å velge elementet og zoome til det.

## Hva du skal se

- En advarsel per element og krav det ikke oppfyller, med spesifikasjonens navn, hva IDS-en krever, og hva elementet har.
- Et påkrevd krav som ingenting i modellen samsvarer med, gir en egen advarsel.
- Kontrollrapporten (under Problemer) starter med IDS-en: tittel, versjon, forfatter og for hver spesifikasjon antall elementer den gjelder for, samt antall som består og som feiler.

## Godt å vite

- IFC-filen beholder bare en referanse til IDS-en (navn, tittel, versjon og en hash), ikke selve IDS-en: en klients IDS kan være konfidensiell, og IFC-filen går til andre. IDS-en blir liggende i denne nettleseren ved siden av modellen, så når du åpner den lagrede IFC-filen her igjen, blir den kontrollert på nytt. Å laste inn eller glemme IDS-en er ett steg du kan angre.
- Åpnet på en annen maskin eller i en annen nettleser viser Problemer et notat om at IDS-en ikke ble funnet. Last den inn igjen for å kontrollere på nytt.
- For å sende IDS-en sammen med IFC-filen, slå på {{ui:Behold IDS-en inni IFC-filen}} i Innstillinger, på BimCraft-fanen, før du laster den inn.
- Hver redigering, angre og gjør om kontrolleres på nytt et øyeblikk senere.
- Verdier sammenlignes slik IDS gjør det: tekst nøyaktig (store og små bokstaver teller), tall i SI-enheter med en liten toleranse (lengder i meter, så en modell i millimeter konverteres først).
- En spesifikasjon skrevet for en annen IFC-versjon (for eksempel IFC2X3 når modellen er IFC4) blir likevel kontrollert, og resultatet sier fra om det.
- Hvis IDS-filen har feil som en IDS-revisjon ville flagget, lister dialogen dem. Spesifikasjonene de ligger i, feiler.
- Du kan godta en feil med en begrunnelse, som for alle problemer. Den forblir godtatt så lenge elementets verdier er de samme.

- Mønstre i IDS-en leses som hele verdien. En `^` i starten og en `$` på slutten tas også som «hele verdien», slik de fleste IDS-filer mener dem.

## Neste

- [Kontroller en modell for vanlige problemer](topic:model-checks)
- [Endre en vegg eller dør](topic:change-a-wall-or-door)

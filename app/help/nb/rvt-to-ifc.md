---
title: Fra en prosjektfil til BimCraft via IFC
summary: Eksportinnstillingene for IFC som åpner best i BimCraft (versjon, egenskapssett, grunnmengder, rom, koblede modeller, koordinater), hvordan resultatet åpnes, og hva eksporten beholder.
keywords: eksport, ifc-eksport, rvt til ifc, konverter, 3D, geometri, ifc2x3, ifc4, koordinasjonsvisning, referansevisning, designoverføringsvisning, egenskapssett, grunnmengder, rom, koblede filer, delte koordinater, oppmålingspunkt, prosjektets basispunkt, innstillinger
from: 3efd5fc9
---

## Formål

Gjør en prosjektfil om til en IFC-fil du kan rotere rundt, inspisere, kontrollere og redigere i BimCraft. BimCraft leser ikke 3D-modellen inne i en `.rvt`-fil ennå, så eksporten skjer i programmet som laget filen (Revit); BimCraft åpner resultatet.

## Trinn

1. Åpne prosjektet i programmet som laget det. BimCraft-kortet navngir utgaven det ble lagret i.
2. Åpne en 3D-visning som viser det du vil eksportere.
3. Velg **Fil > Eksporter > IFC**.
4. I eksportdialogen velg et oppsett (eller **Endre oppsett…**) med innstillingene under.
5. Velg en mappe og et filnavn, og eksporter.
6. I BimCraft klikk {{ui:Velg en fil}} og velg den nye `.ifc`-filen. Koblede modeller som er eksportert som egne filer, åpnes i samme scene med {{ui:Legg til en modell}}.

## Innstillingene som åpner best her

| Innstilling i eksportøren | Velg | Hvorfor |
|---|---|---|
| IFC-versjon | **IFC4 Reference View** for å se på, kontrollere og ta ut mengder; **IFC2X3 Coordination View 2.0** når andre trenger IFC2X3 | Begge åpnes fullt ut. **IFC4 Design Transfer View** åpnes også, med mer nøyaktige former, men filen er større og tregere. |
| Filtype | **IFC** (vanlig) | BimCraft åpner ikke `.ifczip` eller `.ifcxml`. |
| Fase / synlige elementer | Fasen du mener, og **Eksporter bare elementer synlige i visningen** når du setter opp 3D-visningen for det | Utelater det du skjulte med vilje. |
| Egenskapssett | **Eksporter Revit-egenskapssett** og **Eksporter vanlige IFC-egenskapssett** | De blir egenskapssettene BimCraft viser i {{ui:Egenskaper}}, og som {{ui:Finn}}, {{ui:Farge}} og {{ui:Modellkontroller}} bruker. |
| Grunnmengder | **Eksporter grunnmengder** | {{ui:Mengdesummer}} og tabeller bruker dem (lengder, arealer, volumer) i stedet for å gjette. |
| Rom og arealer | **Eksporter rom i 3D-visninger** (eller alternativet for rom / romobjekter) | Rom kommer som romobjekter: klikk {{ui:Rom}} for å se dem. |
| Koblede filer | **Eksporter koblede filer som egne IFC-filer** | Hver kobling blir sin egen fil; åpne dem sammen med {{ui:Legg til en modell}}, så ligger de på linje. |
| Koordinatbase | **Delte koordinater** (eller oppmålingspunktet) | Filen bærer da sin plass i kartet (IfcMapConversion), så Mål › Plassering, kartlag på bakken og punktskyer plassert etter kartkoordinater fungerer. Prosjektets basispunkt holder modellen nær origo, men uten plassen i kartet. |
| Del vegger og søyler etter nivå | På, når du tar ut mengder per etasje | Hver etasjes del blir sitt eget element. |

## Resultat

Modellen i 3D, med etasjer hentet fra prosjektets nivåer og prosjektinformasjonen i panelet {{ui:Fil}}. **Eksportert fra** angir eksportøren.

## Hva eksporten beholder, og hva den ikke gjør

- **Beholdes**: geometri, etasjer, elementtyper, navn, typer, de fleste parametere (som egenskapssett), grunnmengder når det er bedt om, rom som romobjekter, og plassen i kartet med delte koordinater.
- **Beholdes ikke**: visninger, ark, merknader, familier som redigerbare familier, arbeidssett og designalternativer. En IFC-fil er et øyeblikksbilde av modellens elementer, ikke av prosjektet. For arkene: eksporter DWG og åpne den i 2D-visningen.

## Vanlige feil

- **Parametere mangler i BimCraft.** Slå på egenskapssettalternativene over, og eksporter på nytt.
- **Rom mangler.** Slå på romalternativet, og klikk deretter {{ui:Rom}}.
- **Lagring som `.ifczip`.** Velg vanlig IFC, eller pakk ut `.ifczip`-filen.
- **Ingen plass i kartet.** Eksporter med delte koordinater, og kontroller at prosjektets oppmålingspunkt er satt.
- **Forventer at endringer føres tilbake.** Endringer som lagres i BimCraft, går inn i en ny IFC-fil, ikke inn i prosjektfilen.

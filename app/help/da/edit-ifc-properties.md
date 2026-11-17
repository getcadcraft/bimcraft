---
title: Ændr IFC-egenskaber og gem en redigeret kopi
summary: Ændr et elements navn, mærke, beskrivelse eller en egenskabsværdi, fortryd, og hent en ny IFC-fil, mens originalen forbliver, som den var.
keywords: rediger, ændr, egenskaber, parametre, mærke, navn, omdøb, markering, gem som, hent, fortryd, kopi, ifc, skriv
from: f8035d62
---

## Hvad du skal gøre

Ret data i en IFC-model: omdøb et element, ret dets mærke, ændr en egenskabsværdi. Gem derefter en ny IFC-fil med dine ændringer. Den fil, du åbnede, berøres aldrig.

## Hvad du kan ændre

| Felt | Kan redigeres |
|---|---|
| Navn, Objekttype, Mærke, Beskrivelse | Ja |
| Enkeltegenskabsværdier (tekst, tal, Ja/Nej) | Ja |
| Typeegenskaber (sæt markeret "(type)") | Ja, og ændringen gælder for alle elementer af den type |
| Type, GlobalId, Linje | Nej |
| Mængder (længder, arealer, volumener, antal) | Nej |
| Lister, opremsninger og andre værdier med flere dele | Nej |
| Geometri, placering, tilføjelse eller sletning af elementer | Nej |

## Trin

1. Åbn en IFC-model og klik på det element, du vil ændre.
2. I panelet {{ui:Egenskaber}} klikker du på den værdi, du vil ændre. Den bliver til et tekstfelt. En tom værdi vises som *tom*.
3. Skriv den nye værdi.
4. Tryk på {{key:Enter}}, eller klik et andet sted, for at beholde den. Tryk på {{key:Esc}} for at annullere.
5. Kig på værdien. Den er nu fed med en blå bjælke ved siden af, som markerer en redigeret værdi.
6. Kig på afsnittet {{ui:Ændringer}} til venstre. Ændringen er opført som *element*: *felt*, gammel værdi til ny værdi.
7. Gentag for andre værdier eller andre elementer.
8. Klik på {{ui:Gem som IFC}} (knappen viser, hvor mange ændringer der venter, for eksempel "Gem som IFC (3)"), eller tryk på {{key:Mod+S}}.
9. Find "*oprindeligt navn* (edited).ifc" i din downloadmappe.

## Hvad du bør se

Statuslinjen siger »Gemt *navn* (edited).ifc med *n* ændringer (… bytes). Din originale fil er uændret.« Listen {{ui:Ændringer}} tømmes, klar til næste runde.

## Slags værdier

- **Tekst**: alt, du skriver, beholdes som det er. Hvis du rydder Navn, Objekttype, Mærke eller Beskrivelse, fjernes værdien.
- **Tal**: skriv et almindeligt tal, såsom `2.4` eller `1200`, i filens egne enheder. Ingen enhedssymboler. Alt andet viser »Brug et tal.«
- **Hele tal** (antal, heltal): »Brug et heltal.«, hvis du skriver et decimaltal.
- **Ja/Nej**: værdien bliver til en menu med Ja og Nej.

Hver værdi beholder sin IFC-type, så et tal forbliver et tal, og andre programmer læser det korrekt.

## Fortryd

1. Klik på {{ui:Fortryd}} i afsnittet {{ui:Ændringer}}, eller tryk på {{key:Mod+Z}}, mens du ikke skriver i et felt.
2. Gentag for at fortryde mere. Hver fortrydelse fjerner den nyeste ændring.

Du kan ikke fortryde forbi en gemning: efter gemning starter listen forfra. Den gemte fil beholder alt.

## Hvorfor din redigering kun ændrer ét element

Eksportører sparer plads ved at dele data. Et egenskabssæt kan deles af tyve døre, og én værdi (»Brandklasse: 60 min«) kan være opført i nioghalvfems sæt. Hvis BimCraft bare ændrede den delte værdi, ville hvert element, der deler den, også ændre sig.

Så BimCraft kopierer, før det skriver:

- Hvis det egenskabssæt, du redigerer, deles med andre elementer, får dit element sin egen kopi af sættet, og kun kopien ændres.
- Hvis værdien deles med andre sæt, får dit sæt sin egen kopi af værdien.

Naboerne beholder deres gamle data. Det kaldes *copy-on-write*. Det tilføjer nogle få små poster til filen, som alle IFC-programmer læser normalt.

**Typeegenskaber er undtagelsen med vilje.** Et sæt markeret "(type)" hører til elementets type, og i IFC læser hvert element af typen det derfra. Hvis du ændrer det, ændres typen, så alle elementer af typen viser den nye værdi. Listen {{ui:Ændringer}} markerer sådanne redigeringer med "(type)". Se [Ændr en typeegenskab for alle elementer af en type](topic:type-vs-instance).

## Advarsler, før du mister arbejde

- Hvis du åbner en anden fil, mens du har ikke-gemte ændringer, spørger den: »Du har *n* ikke-gemte ændringer i *fil*. Kassér dem?« Klik på Annuller for at fortsætte med at arbejde, og gem derefter.
- Hvis du lukker eller genindlæser fanen med ikke-gemte ændringer, spørger browseren, om du vil forlade siden.

## Almindelige fejl

- **At skrive enheder.** `2400 mm` afvises. Skriv `2400`.
- **At ændre en typeegenskab, når du mente ét element.** Kig efter "(type)"-noten, før du skriver. Hvis du vil have ét element til at være anderledes, så ændr en instansegenskab eller dets Mærke eller Navn i stedet.
- **At forvente, at den originale fil ændres.** Gemning henter altid en ny fil. Erstat selv originalen, hvis det er det, du vil, og behold en kopi.
- **At trykke på {{key:Mod+S}} uden ændringer.** BimCraft gemmer kun, når der er noget at gemme. Ellers kan browserens egen "Gem side" åbne. Luk den.
- **At gemme to gange og forvente to små filer.** Hver gemning rummer hver redigering, siden du åbnede modellen.
- **At forvente, at redigeringer går tilbage i en projektfil.** BimCraft skriver kun IFC. Hent den redigerede IFC ind i dit tegneprogram, ligesom du importerer enhver IFC.

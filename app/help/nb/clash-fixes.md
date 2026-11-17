---
title: Løs kollisjoner med løsninger fra hvert fag
summary: Fra kollisjonsresultatene lister Foreslå løsninger for hver kollisjon hva hvert fag kan gjøre med den — en kanal ført utenom under en bjelke, et rør flyttet til siden, en søyle flyttet, en åpning i en bjelke — hver prøvd på en kopi av modellen med sine avveininger, for at du skal godta eller avvise. Godtatte løsninger legges inn som ett trinn å angre.
keywords: kollisjon, kollisjonsløsning, løs kollisjoner, koordinering, foreslå løsninger, omlegging, omvei, forskyvning, kanal, rør, kabelbane, bjelke, søyle, åpning, hylse, avveining, fag, konstruksjon, mekanisk, vvs, elektro, arkitektur, assistent
from: f7bafdd9
---

## Hva du gjør

Gjør en liste over kollisjoner om til beslutninger. Hvert fag (konstruksjon, mekanisk, VVS, elektro, arkitektur) foreslår løsninger bare for sine egne elementer, hvert forslag kontrolleres på en kopi av modellen, og du velger.

## Trinn

1. Kjør kollisjonskontrollen først. Se [Kontroller for kollisjoner](topic:clash-check) og [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure).
2. Under resultatene klikker du {{ui:Foreslå løsninger}}. Panelet **Foreslåtte løsninger** åpnes ved siden av modellen.
3. For hver kollisjon ser du hvert fags forslag, det beste først. Hver linje sier hva den gjør, og avveiningene: om den løser kollisjonen, hvor mange nye kollisjoner den lager, hvilke regler den bryter, hvor mye strekning den legger til eller hvor langt den flytter, hvor mange fittings, og en kostnadsscore.
4. Klikk {{ui:Vis}} for å se elementene i 3D. Klikk {{ui:Godta}} på løsningen du vil ha (én per kollisjon), eller {{ui:Avvis}}.
5. Linjen nederst sier hva alle de godtatte løsningene gjør sammen: hvor mange kollisjoner som er løst, hvor mange som gjenstår, og om noe nytt kolliderer.
6. Klikk {{ui:Bruk godtatte løsninger (ett trinn å angre)}}. Kollisjonskontrollen kjører på nytt. {{ui:Angre}} tar dem alle tilbake samtidig.

## Hva hvert fag kan gjøre

- **Mekanisk** (kanaler, varme- og kjølerør): legge utenom over eller under på den delen som treffer, heve eller senke hele strekningen, flytte den til siden, gjøre en rektangulær kanal flatere med samme areal.
- **VVS** (vann, avløp, gass, brann): de samme grepene, bortsett fra at et selvfall-avløp aldri får en omvei; det kan bare flyttes som helhet, og beholder fallet sitt.
- **Elektro** (kabelbaner og rør): de samme grepene. En kabelbane må ha 150 mm fri plass over seg for å legge kabel.
- **Konstruksjon**: flytte en søyle (opptil 300 mm), eller en åpning i en bjelkes liv eller et dekke for strekningen som går gjennom. Hver konstruksjonsløsning sier at konstruksjonsingeniøren må godkjenne den.
- **Arkitektur**: en hylse i en vegg for strekningen som går gjennom, eller flytte en vegg som vet at den ikke bærer last.

## Hva du skal se

- Løsninger som bryter en regel, er merket: nærmere enn 25 mm avstand til noe annet, under 2,100 mm frihøyde, en åpning i liv større enn 40 % av bjelkens høyde eller for nær endene, eller en bjelke som ville endret spenn.
- Løsninger BimCraft kan gjøre, legges inn i modellen: strekninger du tegnet med verktøyene Rør og Kanal, og søyler du tegnet. De andre sier **Kun råd**: å godta dem legger i stedet til en sak i Saker-fanen.

## Godt å vite

- Løsningene kommer fra innebygde regler i appen; ingen KI brukes til dem.
- Hvis du kobler til en assistent (se [La en KI-assistent jobbe med modellen din](topic:assistants)), kan den lese kollisjonene og legge til egne forslag for ett fag i det åpne panelet. De kontrolleres på samme måte, merket med assistentens navn, og ingenting endres før du godtar og bruker dem.
- Kopien kontrolleres med bokser rundt hvert element og hver del av en strekning, så en skrå strekning kan vise en kollisjon som kollisjonskontrollen ikke ville vist. Kjør kollisjonskontrollen på nytt etter at du har brukt løsningene: den er det endelige svaret.
- Grensene (hvor langt en strekning kan flyttes, hvor høyt en omvei kan gå, avstanden) er standardverdiene som står skrevet i panelet.

## Neste

- [Saker og BCF-filer](topic:issues-bcf)
- [Tegn rør- og kanalstrekninger](topic:pipes-and-ducts)

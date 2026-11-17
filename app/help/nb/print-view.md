---
title: Kontroller en tegning i utskriftsvisning
summary: Bytt en DWG eller DXF til utskriftsvisning for å se den svart på hvitt, med linjetykkelsene og uten layerne som aldri skrives ut.
keywords: skriv ut, plott, forhåndsvisning, plottforhåndsvisning, linjevekt, linjetykkelse, monokrom, svart og hvitt, defpoints, ikke plott
from: 1a59c23e
---

## Hva du skal gjøre

Se hvordan et ark vil se ut på papir før du skriver det ut fra programmet som laget det: svart på hvitt, linjetykkelsene i riktig bredde, og uten layere som er satt til ikke å skrives ut.

## Trinn

1. Åpne en DWG- eller DXF-tegning.
2. Klikk en arkfane over tegningen.
3. Klikk {{ui:Utskriftsvisning}} på slutten av fanene, eller trykk {{key:P}}.
4. Zoom inn på en detalj for å sammenligne tykke og tynne linjer.
5. Klikk {{ui:Utskriftsvisning}} igjen, eller trykk {{key:P}}, for å gå tilbake til de vanlige fargene.

## Hva du bør se

- Hvitt papir på en grå skrivebordsflate, alle linjer og all tekst i svart, uansett tema.
- Linjetykkelser: på et ark tegnes hver tykkelse i sin reelle bredde på papiret, så en 0.5 mm linje er dobbelt så tykk som en 0.25 mm linje ved alle zoomnivåer. En linje tegnes aldri tynnere enn sin skjermtykkelse.
- Layere som er satt til ikke å skrives ut, og DEFPOINTS-layeret, er skjult.
- Knappen {{ui:Utskriftsvisning}} forblir trykket. Utskriftsvisningen er på når du bytter ark eller åpner en annen tegning, til du slår den av.

I {{ui:Modell}} bruker utskriftsvisningen bare skjermtykkelser (tynne linjer én piksel, tykkere linjer litt tykkere), fordi modellrommet ikke har papirstørrelse.

## Vanlige feil

- **Å forvente at den skrives ut.** Utskriftsvisning er en forhåndsvisning. Utskrift og PDF-eksport er ikke innebygd i BimCraft ennå; skriv ut fra programmet som laget tegningen.
- **Å forvente plottstiler.** Pennetabeller og plottstilfarger leses ikke. Alt er vanlig svart.
- **Å trykke P mens du skriver.** {{key:F}} og {{key:P}} gjør ingenting mens du skriver i et felt, eller mens utstyrstabellen vises.

---
title: Kontrollér en tegning i udskriftsvisning
summary: Skift en DWG eller DXF til udskriftsvisning for at se den sort på hvid med dens linjetykkelser og uden de lag, der aldrig udskrives.
keywords: udskriv, plot, forhåndsvisning, plot-forhåndsvisning, linjetykkelse, monokrom, sort og hvid, defpoints, ikke plot
from: 1a59c23e
---

## Hvad du gør

Se, hvordan et ark kommer til at se ud på papir, før du udskriver det fra det program, der lavede det: sort på hvid, linjetykkelser i deres rigtige bredde og uden lag, der er sat til ikke at udskrive.

## Trin

1. Åbn en DWG- eller DXF-tegning.
2. Klik på en arkfane over tegningen.
3. Klik på {{ui:Udskriftsvisning}} i enden af fanerne, eller tryk {{key:P}}.
4. Zoom ind på en detalje for at sammenligne tykke og tynde linjer.
5. Klik på {{ui:Udskriftsvisning}} igen, eller tryk {{key:P}}, for at gå tilbage til de normale farver.

## Hvad du bør se

- Hvidt papir på en grå skrivebordsbaggrund, hver linje og tekst i sort, uanset tema.
- Linjetykkelser: på et ark tegnes hver tykkelse i sin rigtige bredde på papiret, så en 0.5 mm-linje er dobbelt så tyk som en 0.25 mm-linje ved enhver zoom. En linje tegnes aldrig tyndere end sin skærmtykkelse.
- Lag, der er sat til ikke at udskrive, og laget DEFPOINTS, er skjult.
- Knappen {{ui:Udskriftsvisning}} forbliver trykket. Udskriftsvisning forbliver tændt, når du skifter ark eller åbner en anden tegning, indtil du slår den fra.

I {{ui:Model}} bruger udskriftsvisning kun skærmtykkelser (tynde linjer én pixel, tykkere lidt tykkere), fordi modelrummet ikke har en papirstørrelse.

## Almindelige fejl

- **At forvente, at den udskriver.** Udskriftsvisning er en forhåndsvisning. Udskrivning og PDF-eksport er endnu ikke indbygget i BimCraft; udskriv fra det program, der lavede tegningen.
- **At forvente plotstile.** Pen-tabeller og plotstilfarver læses ikke. Alt er almindeligt sort.
- **At trykke P, mens du skriver.** {{key:F}} og {{key:P}} gør ingenting, mens du skriver i et felt, eller mens udstyrslisten vises.

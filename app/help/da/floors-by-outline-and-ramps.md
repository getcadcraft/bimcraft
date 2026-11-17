---
title: Gulve i alle former, åbninger og ramper
summary: Tegn et gulv eller dæk ud fra dets omrids (en altan, en udkragning, et repos), skær åbninger i det, og tegn ramper med deres reposer.
keywords: gulv, dæk, omrids, altan, udkragning, repos, terrasse, gulvåbning, hul, skakt, hulrum, rampe, hældning, tilgængelig rampe, kørestolsrampe, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Hvad du skal gøre

Lav gulve, der ikke følger rummene, såsom en altan ud over væggene, og tegn ramper mellem niveauer.

## Tegn et gulv ud fra dets omrids

1. Slå {{ui:Tegn}} til, vælg niveauet, og vælg derefter {{ui:Build}} › {{ui:Gulv efter omrids}}.
2. I rækken under værktøjerne vælger du type (betondæk eller trægulv), brug (gulv eller repos), tykkelse og hvor højt dets overside ligger over niveauet (0 = i niveau med niveauets gulv; en negativ værdi sætter det lavere).
3. Klik på hjørnerne. Værktøjet hæfter på vægge, gitterlinjer og deres skæringspunkter; hold {{key:Shift}} nede for at holde en kant i ret vinkel. Længden af hver kant og arealet vises, mens du tegner. {{key:Backspace}} tager det sidste hjørne tilbage.
4. Klik på det første hjørne igen, dobbeltklik eller tryk {{key:Enter}} for at afslutte.

## Skær en åbning

Klik på gulvet (i 3D-visningen eller på dets omrids på planen), og klik derefter i {{ui:Egenskaber}} på {{ui:Tilføj en åbning}}. Klik på åbningens hjørner inde i gulvet, og afslut som ovenfor. Gulvets {{ui:Egenskaber}} viser dets åbninger, hver med {{ui:Slet}}, og dets areal uden dem.

## Tegn en rampe

1. Vælg {{ui:Build}} › {{ui:Rampe}}. Angiv dens bredde, og om den går **til niveauet over** eller **op en stigning** du skriver.
2. Vælg hvordan den sættes: **efter hældning** (1:12 til at starte med; rampen er så lang, som stigningen kræver) eller **efter længde** (dit andet klik sætter længden, og hældningen følger).
3. Klik på rampens fod (midten af dens nederste kant), og klik derefter på vejen op. Forhåndsvisningen viser dens længde, dens løb og dens hældning.

En stigning over 30 in (760 mm) deles i løb med et repos på 5 ft (1525 mm) imellem. Det er almindelige planlægningsværdier, ikke dine byggeregler: kontrollér reglerne, hvor du bygger. En rampe, der er stejlere end 1:12, markeres i dens {{ui:Egenskaber}}.

## Hvad du skal se

- Hvert gulv, hver åbning og hver rampe er ét trin: {{key:Mod+Z}} tager det tilbage.
- På planen: et tegnet gulvs omrids (en åbning tegnes krydset over), og en rampes omrids, løb, reposer og en pil op med dens hældning.
- Egenskaber for et tegnet gulv (type, brug, tykkelse, overside, areal, åbninger) og for en rampe (bredde, overside, stigning, hældning eller længde); {{key:Delete}} fjerner begge.
- En rampe til niveauet over følger det niveau, når dets højde ændres.
- I IFC-filen: et tegnet gulv er et dæk (IfcSlab, et gulv eller et repos) med sine åbninger skåret ud (IfcOpeningElement); en rampe er en IfcRamp bestående af skrå løb (IfcRampFlight) og reposdæk, med sin hældning og bredde.

:::note
Gulve tegnet på denne måde bliver, hvor du tegnede dem. Gulve lavet med {{ui:Gulv}} følger rummene, når væggene flyttes: se [Rum, gulve, lofter og tage](topic:floors-and-roofs).
:::

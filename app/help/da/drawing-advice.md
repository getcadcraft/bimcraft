---
title: Tegnevejledning: usædvanlige størrelser udføres med en advarsel
summary: BimCraft laver det, du beder om. En størrelse ud over det sædvanlige bliver til en advarsel under Problemer; den stopper aldrig, at du tegner eller gemmer.
keywords: vejledning, råd, advarsel, problemer, afvist, tegner ikke, for lille, for smal, minimum, grænse, trappebredde, trinhøjde, trin, trædeflade, søjle, rampe, dørstørrelse, gitterlinje, niveauhøjde, kvist, spiraltrappe, byggeplateau, skråning, kort væg, ingen forhindringer
from: 20090130
---

## Hvad du skal gøre

Tegn en størrelse, der ikke er den sædvanlige, og se, hvor BimCraft fortæller dig det.

## Trin

1. Tegn eller ændr elementet, som du vil have det: for eksempel en trappe, der er 400 mm bred.
2. BimCraft laver det, som du bad om.
3. Åbn {{ui:Problemer}} i den øverste bjælke. Under **Råd om tegning** står der en advarsel, der navngiver elementet, den størrelse, du angav, og det sædvanlige interval.
4. Klik på advarslen for at vælge elementet. Ret størrelsen, hvis det var en fejl, eller lad den stå. En advarsel kan accepteres, med eller uden en begrundelse.

## Hvad er råd

Disse blev tidligere afvist. De laves nu, hver med en advarsel:

- **Trapper**: smallere end 500 mm eller bredere end 5 m; trinhøjder uden for 100 til 300 mm; trædeflader uden for 150 til 600 mm.
- **Spiraltrapper**: en stolpe uden for 40 til 400 mm; trædeflader under 100 mm dybe på ganglinijen.
- **Søjler**: under 50 mm på tværs eller under 300 mm høje.
- **Ramper**: under 300 mm brede.
- **Døre og vinduer**: under 100 mm brede eller høje.
- **Gitterlinjer**: under 100 mm lange.
- **Vægge**: en væg, der efterlades under 50 mm lang, for eksempel af en beskæring.
- **Niveauer**: under 1 m eller over 100 m høje (ny bygning, delte niveauer, et niveaus højde).
- **Kviste**: uden for 600 mm til 12 m brede, en forvæg uden for 300 mm til 4 m, et udhæng over 1 m, vægge uden for 50 til 400 mm.
- **Byggeplateauer**: sideskråninger uden for 1:1 til 10:1.

## Hvad der stadig afvises

Kun det, der ikke kan bygges eller findes, hver med en besked, der siger hvorfor:

- En størrelse under 10 mm (en væg under 1 mm): der er intet at bygge.
- En kvist, der ikke er bredere end to gange sin vægtykkelse: dens to sidevægge ville mødes.
- Et byggeplateau med sideskråninger stejlere end 0.1:1 (det er en støttemur) eller fladere end 100:1 (planeringen ville fortsætte uden ende).
- Noget, der ikke passer dér, hvor du placerede det, en kontur, der krydser sig selv, eller et element, der ikke længere er i modellen.

## Godt at vide

- Rådet beregnes ud fra modellen, så det er der igen, når du senere åbner filen. Det forsvinder, når størrelsen rettes.
- Modelkontrol, regelsæt og IDS-kontroller lister også kun det, de finder. Intet i {{ui:Problemer}} stopper dig fra at tegne eller gemme.
- De sædvanlige intervaller er almindelig praksis, ikke en byggelov. Til en lov skal du tilføje tillægget Bygningsregler og vælge dit sted.

## Næste

- [Tjek en model for almindelige problemer](topic:model-checks)
- [Trapper og gelændere](topic:stairs-and-railings)

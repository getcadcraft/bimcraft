---
title: Vis og skjul etager, zoner og kanter
summary: Slå etager fra for at se ind i en bygning, vis rum og zoner, og slå kantlinjerne til og fra.
keywords: etager, niveauer, gulve, skjul, isolér, rum, zoner, ifcspace, kanter, synlighed, snit
from: b838dcc0
---

## Hvad du skal gøre

Kig ind i en IFC-model ved at slå de etager fra, der ligger over den, du er interesseret i. Vis derefter rum og zoner, og slå kantlinjerne fra for et renere udseende.

## Trin: kig på én etage

1. Åbn en IFC-model. Se [Åbn en IFC-model og kig rundt i 3D](topic:open-ifc-model).
2. Find listen {{ui:Etager}} til venstre. Den øverste etage står først, ligesom når man læser et snit fra taget og ned.
3. Fjern markeringen i taget og i alle etager over den etage, du vil se.
4. Klik på {{ui:Top}} for at kigge ned på den etage.
5. Sæt markeringen i etagerne igen for at få dem tilbage.

## Hvad du skal se

Hver etage, du fjerner markeringen for, forsvinder med det samme sammen med alt, der står på den. Listen viser kun etager, der har noget synligt. Elementer, der ikke er tildelt nogen etage, samles som **Ikke på en etage** nederst; grundelementer og noget inventar havner ofte dér.

## Trin: vis rum og zoner

1. Klik på {{ui:Zoner}} i værktøjslinjen over modellen. Knappen forbliver trykket.
2. Kig på modellen: rum og zoner vises som lyse, gennemsigtige volumener.
3. Klik på en zone for at læse dens egenskaber, såsom navn, nummer og areal, til højre.
4. Klik på {{ui:Zoner}} igen for at skjule dem.

Zoner skjules, når en model åbnes, fordi de ellers ville dække for vægge og gulve.

## Trin: kanter

1. Klik på {{ui:Kanter}} for at slå de tynde kantlinjer fra.
2. Klik igen for at slå dem til.

På meget store modeller (over 1.5 million trekanter) er knappen nedtonet med tippet "Kanter er slået fra for meget store modeller". Det sparer hukommelse.

## Typiske fejl

- **Du fjerner markeringen af en etage, men ser stadig dele af den.** Et element hører til den etage, eksportprogrammet tildelte det. En høj væg eller en trappe hører ofte kun til sin bundetage, så den bliver, når etagen ovenover skjules, eller forsvinder med etagen nedenunder.
- **Skjuler etager for at se ind.** Et snitboks er ofte hurtigere: se [Skær en IFC-model med et snitplan](topic:section-plane#a-section-box). Du kan også fjerne markeringen i rækker i {{ui:Modeltræ}} (se [Find vej med modeltræet](topic:model-tree)).
- **Klik på en zone gennem en væg.** Klik vælger den nærmeste synlige flade. Skjul etagen ovenover, eller skift til {{ui:Top}}, og klik derefter.
- **Etagenavnene ser mærkelige ud.** BimCraft viser etagenavnene, der er gemt i filen. Står der "Level 1" eller et tal, er det, eksportøren skrev.

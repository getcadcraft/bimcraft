---
title: Model fra en scanning
summary: En kort gennemgang fra en laserscanning til vægge: åbn punktskyen ved siden af en ny bygning, justér den efter et niveau, og spor bygningens vægge på planen.
keywords: scanning, laserscanning, punktsky, som bygget, eksisterende bygning, opmåling, spor, scanning til BIM, model fra scanning, udsnit, justér, retvinklet, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Hvad du gør

Tegn en eksisterende bygning ud fra dens laserscanning: vægge hvor scanningen viser dem, på den rigtige etage, retvinklet i forhold til hinanden.

## Trin

1. **En bygning at tegne i.** {{ui:Fil}} › {{ui:Ny bygning}}, med så mange etager, som bygningen har (du kan tilføje etager senere, se [Grunden, bygningen på den og dens etager](topic:site-building-and-levels)). {{ui:Tegn}} tændes.
2. **Scanningen.** {{ui:Vis}} › {{ui:Punktsky}} og vælg filen (LAS, LAZ, E57, PLY, PCD, PTX eller XYZ: se [Vis en punktsky ved siden af modellen](topic:point-clouds)). Punktskyen vises i 3D-visningen, og planen viser dens **udsnit**: de scannede punkter 1200 mm (4 feet) over etagen, som prikker. Det er den højde, hvor vægge, døre og vinduer tydeligst aflæses.
3. **Justér den efter niveauet.** Åbn modellinjens {{ui:Scanning}}-menu og klik på {{ui:Justér dens gulv til dette niveau}}: punktskyen flyttes op eller ned, indtil det gulv, den scannede, ligger på det viste niveau. Kontrollér, at udsnittet nu skærer gennem væggene.
4. **Retvinklet i forhold til bygningen.** {{ui:Scanning}} › {{ui:Drej den retvinklet til bygningen}} drejer punktskyen, så væggene i dens udsnit ligger langs planens akser, og vægge du tegner med {{key:Shift}} holdt nede flugter med scanningen. Den drejer om midten af de vægge, den fandt, så træer eller en nabos væg, der er fanget i udsnittet, ikke får scanningen til at dreje væk. Justér gulvet først: så skærer udsnittet gennem væggene.
5. **Spor væggene.** Vælg {{ui:Væg}} og klik langs prikkerne: værktøjet fanger de scannede punkter (fangemærket er en lille rombe) og de vægge, du har tegnet. En væg tegnes på sin midterlinje, så klik midt mellem de to rækker prikker, en væg efterlader; skriv dens tykkelse ved først at vælge vægtypen. Tilføj derefter døre og vinduer, hvor udsnittet viser hullerne.
6. **Næste etage.** Vælg etagen over i planens etageliste: udsnittet følger etagens snithøjde. Justér gulvet til den etage igen kun, hvis scanningens gulve ikke ligger, hvor dine etager er.

## Hvad du skal se

- Udsnittet ændrer sig, når du skifter etage, og et tykkere udsnit ({{ui:Scanning}} › {{ui:Udsnittets tykkelse}}) viser flere punkter, hvor en scanning er tynd.
- {{ui:Scanning}} › {{ui:Fortryd justeringen}} sætter punktskyen tilbage, hvor den var placeret, da den blev åbnet. Justering flytter kun punktskyen i visningen: den gemmes ikke i IFC-filen, og vægge, du har tegnet, bliver, hvor de er. Justeringen følger punktskyen, når du ændrer {{ui:Placér}} eller {{ui:Enheder}}, eller åbner en anden model.
- {{ui:Scanning}} › {{ui:Vis udsnittet på planen}} skjuler eller viser prikkerne.

:::tip
Store scanninger: planen tegner op til 60.000 punkter af udsnittet, og 3D-visningen et par millioner af hele punktskyen, begge valgt jævnt fordelt over scanningen, så en stor fil forbliver hurtig. Vil du spore i tegneappen i stedet, brug punktskybjælkens {{ui:Spor i CadCraft}}.
:::

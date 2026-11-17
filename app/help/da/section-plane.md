---
title: Skær en IFC-model med et snitplan
summary: Skær 3D-modellen oppefra, forfra eller fra siden, eller behold kun det, der er inde i en snitboks eller en volumen af flere bokse med skrå flader, for at se ind; flyt snittet ved at trække eller skrive, vend det, og vælg, hvad snittet viser.
keywords: snit, snitplan, snitboks, greb, træk, margen, markeringsboks, klipboks, skæring, klipning, udsnit, plansnit, etageplan, facade, indvendig, interiør, vend, forskydning, snitvolumen, trinvist snit, L-formet, hældning, skrå snit, skrånende plan, ekstra plan
from: 6315e71a
---

## Hvad du skal gøre

Skær igennem en IFC-model med ét plan for at se ind i den: oppefra for en plan, eller forfra eller fra siden for et snit gennem bygningen.

## Trin

1. Åbn en IFC-model. Se [Åbn en IFC-model og kig rundt i 3D](topic:open-ifc-model).
2. Klik på {{ui:Section}} i værktøjslinjen, eller tryk {{key:X}}. Modellen skæres halvvejs op, og en linje dukker op under værktøjslinjen.
3. Vælg, hvor der skal skæres fra: {{ui:Top}}, {{ui:Front}} eller {{ui:Side}}. Front og Side drejer også visningen, så den kigger på snittet.
4. Flyt snittet: træk skyderen {{ui:Offset}}, eller skriv en afstand i meter i feltet og tryk {{key:Enter}}. Du kan også skrive millimeter, for eksempel `1200 mm`.
5. Klik på {{ui:Flip}} for at beholde den anden side af snittet.
6. Klik på et element på snittet for at se dets egenskaber.
7. Klik på {{ui:Off}}, klik på {{ui:Section}} igen, eller tryk {{key:X}} for at fjerne snittet.

## En snitboks

Klik på {{ui:Box}} i samme linje for kun at beholde det, der er inde i en boks. Hver af {{ui:X}}, {{ui:Y}} og {{ui:Z}} har to skydere: hvor boksen starter, og hvor den slutter, i meter fra modellens kant. Værdierne vises ved siden af dem.

- {{ui:Box round the pick}} tilpasser boksen om de elementer, du valgte, og zoomer til dem. Den efterlader 300 mm på hver side; ændr det under {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Room round the pick}}.
- Med elementer valgt gør {{ui:Show}} › {{ui:Section box round the pick}} eller {{key:Shift+X}} det samme i ét trin, også når intet snit er slået til.
- **Greb** på boksen flytter den med markøren: træk et kvadrat midt på en flade for at flytte den flade, et midt på en kant for at flytte de to flader, der mødes der, eller et i et hjørne for at flytte de tre. Skyderne følger med. I {{ui:Top}} flytter et hjørne boksen i planen, i {{ui:Front}} eller {{ui:Side}} i facade.
- {{ui:Whole model}} åbner boksen for hele modellen igen.
- {{ui:Top}}, {{ui:Front}} eller {{ui:Side}} går tilbage til ét plan.

## En volumen af flere bokse, skrå flader og ekstra planer

En boks er ikke altid den form, du har brug for: et trinvist snit, en L-formet fløj eller et snit langs en væg, der ikke står vinkelret på nettet.

1. I {{ui:Box}} klikkes {{ui:Add a box}}. Snittet beholder nu det, der er inde i **en eller flere** af boksene, så to bokse danner en trinvis eller L-formet volumen. Listen ved siden af siger, hvilken boks skyderne ændrer ({{ui:Box 1}}, {{ui:Box 2}} …); {{ui:Remove this box}} tager den valgte væk. En volumen rummer op til 8 bokse.
2. Åbn {{ui:Tilt and planes}} for at forme den valgte boks:
   - Vælg en {{ui:Face}} og skriv, hvor meget den hælder hver vej, i grader (op til 80). Fladen drejer om sin midte; de andre flader bliver, hvor skyderne har dem. {{ui:Square}} sætter den tilbage.
   - {{ui:Add a plane}} skærer boksen med endnu et plan. {{ui:Faces}} er den vej, den bortskårne side vender, i grader fra X mod Y; {{ui:Slope}} er, hvor meget den drejer opad (0 for et lodret plan, 90 for et vandret); {{ui:Offset}} er, hvor langt planet er fra boksens midte, i meter. × fjerner det. En boks tager op til 6 ekstra planer.
3. Hvor volumen skærer gennem faste legemer, udfyldes snitfladerne som før, også hvor to bokse mødes i et trin.

:::tip
Hvis konturen forsvinder, og intet er tilbage, efterlader hældningerne eller planerne intet inde i boksen; linjen siger det. Hæld en flade tilbage, eller ændr et plans forskydning.
:::

## En bygning drejet på sin byggegrund

Mange modeller placerer bygningen i en vinkel i forhold til filens akser (geografisk nord, delte koordinater). Når væggene løber i en vinkel, starter et nyt snit vinkelret på bygningen: {{ui:Front}}, {{ui:Side}} og boksen løber langs dens egne vægge, og {{ui:Square to the building}} i snitlinjen er slået til. Klik på den for modellens akser, og igen for at gå tilbage (statuslinjen siger, hvor meget bygningen er drejet). Med **Indstillinger › BimCraft › En bygning drejet på sin byggegrund › Som placeret på byggegrunden** starter snit og visninger i stedet på modellens akser. Se [Indstillinger](topic:settings).

## Hvad du bør se

- **Top** beholder det, der er under snittet, så du kigger ned i rummene. Forskydningen måles op fra modellens bund.
- **Front** beholder det, der er bag snittet, set forfra; **Side** beholder det, der er bag det, set fra siden. Forskydningen måles fra modellens forside eller side.
- En tynd farvet kontur viser, hvor planet er.
- Hvor planet skærer gennem en væg, dæk eller et andet fast legeme, udfyldes snitfladen med en mørk farve, som et tegnet snit. {{ui:Fill}} i linjen slår dette til og fra.
- ViewCube'en i nederste højre hjørne drejer modellen, så du kan se snittet fra enhver side.
- Klik vælger det, du kan se: noget, der er skåret væk, kan ikke vælges.

## Almindelige fejl

- **Intet ændrede sig.** Snittet kan ligge over taget eller uden for modellen. Træk skyderen, eller skriv en mindre forskydning.
- **Forskydningen sprang tilbage.** En afstand ud over modellen flyttes til dens ende, og statuslinjen siger det.
- **Et problem viser kun en del af min volumen.** Et problem (BCF) beholder én boks med dens skrå flader og planer: den første boks i en volumen. Statuslinjen siger det, når du laver problemet.
- **Snittet er hult.** {{ui:Fill}} i linjen er fra: klik på den for at udfylde snitfladerne på vægge, dæk og andre faste legemer.
- **Et udfyldt snit ser plettet ud eller mangler et stykke.** Udfyldning kræver lukkede faste legemer; et element, hvis form i filen ikke er lukket (et enkelt ark, træløv), efterlades uudfyldt i stedet for at blive malet over. Et element bygget af dele i forskellige farver (en ramme og dens glas) udfyldes, når dets dele slutter sammen.
- **Hvor er snitlinjen?** Den sidder øverst i den 3D-visning, den skærer: på 3D-halvdelen i {{ui:Split}}, og under tegnelinjen i {{ui:Plan}} alene. I en lav visning ruller den.

## Næste

- [Vis og skjul etager, zoner og kanter](topic:storeys-and-spaces)
- [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d) — tegninger i 3D har samme snitplan

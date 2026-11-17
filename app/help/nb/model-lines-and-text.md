---
title: Modellinjer og modelltekst: tegnet i modellen, på arbeidsplanet
summary: En modellinje er en linje, polylinje eller bue som lever i modellen og vises i alle visninger som ser den. Modelltekst er 3D-skrift med ekte dybde. Begge tegnes på arbeidsplanet.
keywords: modellinje, modelltekst, 3D-tekst, skrift, skilt, skilting, linje i 3D, bue, polylinje, arbeidsplan, ekstrudert tekst, skrifttype, dybde, detaljlinje, tegnelinje, merknad, IfcAnnotation
from: fc9cccb5
---

## Hva du skal gjøre

Tegn linjer og skrift som er en del av modellen, ikke av én visning.

## Trinn

1. Sett arbeidsplanet først (se **Arbeidsplanet**). Et nivåplan tegnes på i planen; et loddrett plan tegnes i Arbeidsplan-visningen.
2. For en linje velg **Modellinje** i menyen **{{ui:Bygg}}** og velg **Linje**, **Polylinje** eller **Bue (tre punkter)**:
   - en linje er to klikk;
   - en polylinje er ett klikk for hvert punkt, deretter Enter eller dobbeltklikk. Et klikk på første punkt lukker den;
   - en bue er tre klikk: start, et punkt den går gjennom, og slutt.
3. For tekst velg **Modelltekst**. Skriv ordene, sett skrifthøyde og dybde, og klikk der teksten starter (venstre ende av grunnlinjen).
4. Velg en linje eller en tekst for å se den i **{{ui:Egenskaper}}**. Ordene, høyden og dybden i en tekst kan endres der. {{key:Delete}} fjerner den.

## Hvor de vises

- En modellinje vises i planen for sitt nivå, i 3D-visningen, i fasade- og snittpanelet og i Arbeidsplan-visningen når den ligger på arbeidsplanet. En tegnelinje (Annoter, Linje) hører til bare én visning.
- Modelltekst er solid geometri: den vises der modellen vises, i planen, i 3D, i fasader og snitt, og på ark.
- Modellinjer tegnes ikke på utskrevne ark ennå. Modelltekst tegnes.

## Skriften

Modelltekst bruker samme skrift som arkene og PDF-filene: Liberation Sans, under SIL Open Font License. En bokstav som skriften ikke har, tegnes som et spørsmålstegn, og du får beskjed om hvilken. Det finnes én skrift og én vekt. Bokstavene får avstand etter skriftens egne bredder, uten kerning.

## I IFC-filen

- En modellinje er en IfcAnnotation med objekttypen ModelLine. Formen er en 3D-kurve: en polylinje, eller en avkortet sirkel for en bue.
- Modelltekst er en IfcBuildingElementProxy med objekttypen ModelText. Formen er ett ekstrudert legeme for hver bokstavdel, med hullene i bokstaver som O og B. Mengdene er flateareal og volum (flateareal ganger dybde).

## Godt å vite

- Enhver størrelse lages etter ønske. Bare en linje uten lengde, en bue hvis tre punkter ligger på én linje, eller en tekst uten bokstaver avvises, fordi det er ingenting å lage.
- Hver linje, og hver tekst eller endring av den, er ett steg i Angre.

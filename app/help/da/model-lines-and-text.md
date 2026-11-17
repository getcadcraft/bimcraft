---
title: Modellinjer og modeltekst: tegnet i modellen, på arbejdsplanet
summary: En modellinje er en linje, polylinje eller bue, der ligger i modellen og vises i alle visninger, der ser den. Modeltekst er 3D-skrift med reel dybde. Begge tegnes på arbejdsplanet.
keywords: modellinje, modeltekst, 3D-tekst, skrift, skilt, skiltning, linje i 3D, bue, polylinje, arbejdsplan, ekstruderet tekst, skrifttype, dybde, detaljelinje, tegnelinje, notering, IfcAnnotation
from: fc9cccb5
---

## Hvad du gør

Tegn linjer og skrift, der er en del af modellen, ikke af én visning.

## Trin

1. Angiv arbejdsplanet først (se **Arbejdsplanet**). Et vandret plan tegnes på i planen; et lodret plan i Arbejdsplanvisningen.
2. Til en linje vælges **Modellinje** i menuen **Build**, og derefter **Linje**, **Polylinje** eller **Bue (tre punkter)**:
   - en linje er to klik;
   - en polylinje er et klik for hvert punkt, derefter Enter eller et dobbeltklik. Et klik på første punkt lukker den;
   - en bue er tre klik: start, et punkt den går igennem, og slutpunkt.
3. Til tekst vælges **Modeltekst**. Skriv ordene, angiv versalhøjden og dybden, og klik derefter, hvor teksten starter (venstre ende af dens grundlinje).
4. Vælg en linje eller en tekst for at se den under **Egenskaber**. En teksts ord, højde og dybde kan ændres der. Slet fjerner den.

## Hvor de vises

- En modellinje vises i planen for sin etage, i 3D-visningen, i facade- og snitpanelet og i Arbejdsplanvisningen, når den ligger på arbejdsplanet. En tegnelinje (Notér, Linje) hører til én visning alene.
- Modeltekst er massiv geometri: den vises, hvor modellen vises, i planen, i 3D, i facader og snit, og på ark.
- Modellinjer tegnes ikke på udskrevne ark endnu. Modeltekst gør.

## Skriften

Modeltekst bruger samme skrifttype som arkene og PDF-filerne: Liberation Sans, under SIL Open Font License. Et bogstav, som skriften ikke har, tegnes som et spørgsmålstegn, og du får at vide, hvilket. Der er én skrifttype og én vægt. Bogstaver placeres med skriftens egne bredder, uden kerning.

## I IFC-filen

- En modellinje er en IfcAnnotation med objekttypen ModelLine. Dens form er en 3D-kurve: en polylinje, eller en afgrænset cirkel for en bue.
- Modeltekst er en IfcBuildingElementProxy med objekttypen ModelText. Dens form er ét ekstruderet legeme for hvert bogstavstykke, med hullerne i bogstaver som O og B. Dens mængder er fladeareal og rumfang (fladeareal gange dybde).

## Godt at vide

- Enhver størrelse laves, som du angiver. Kun en linje uden længde, en bue, hvis tre punkter ligger på én linje, eller en tekst uden bogstaver afvises, fordi der ikke er noget at lave.
- Hver linje, og hver tekst eller ændring af den, er ét trin i Fortryd.

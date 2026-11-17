---
title: Modellinjer och modelltext: ritade i modellen, på arbetsplanet
summary: En modellinje är en linje, polylinje eller båge som finns i modellen och syns i varje vy som ser den. Modelltext är 3D-skrift med verkligt djup. Båda ritas på arbetsplanet.
keywords: modellinje, modelltext, 3D-text, skrift, skylt, skyltning, linje i 3D, båge, polylinje, arbetsplan, extruderad text, typsnitt, djup, detaljlinje, ritlinje, notering, IfcAnnotation
from: fc9cccb5
---

## Vad du ska göra

Rita linjer och skrift som är en del av modellen, inte av en enda vy.

## Steg

1. Ange arbetsplanet först (se **Arbetsplanet**). Ett nivåplan ritas på i planen; ett lodrätt plan i Arbetsplansvisaren.
2. För en linje väljer du **Modellinje** i menyn **Bygge** och väljer **Linje**, **Polylinje** eller **Båge (tre punkter)**:
   - en linje är två klick;
   - en polylinje är ett klick för varje punkt, sedan Enter eller dubbelklick. Ett klick på första punkten sluter den;
   - en båge är tre klick: dess början, en punkt den passerar genom, och dess slut.
3. För text väljer du **Modelltext**. Skriv orden, ange versalhöjd och djup, och klicka sedan där texten börjar (textens vänstra ände på baslinjen).
4. Markera en linje eller en text för att se den i **Egenskaper**. En texts ord, höjd och djup kan ändras där. Delete tar bort den.

## Var de syns

- En modellinje syns i planen för sin nivå, i 3D-vyn, i fasad- och sektionspanelen och i Arbetsplansvisaren när den ligger på arbetsplanet. En ritlinje (Annotera, Linje) hör till en enda vy.
- Modelltext är solid geometri: den syns där modellen syns, i planen, i 3D, i fasader och sektioner, och på blad.
- Modellinjer ritas ännu inte på utskrivna blad. Modelltext ritas.

## Typsnittet

Modelltext använder samma typsnitt som bladen och PDF-filerna: Liberation Sans, under SIL Open Font License. En bokstav som typsnittet saknar ritas som ett frågetecken, och du får veta vilken. Det finns ett typsnitt och en vikt. Bokstäverna placeras med avstånd efter typsnittets egna bredder, utan kerning.

## I IFC-filen

- En modellinje är en IfcAnnotation med objekttypen ModelLine. Dess form är en 3D-kurva: en polylinje, eller en trimmad cirkel för en båge.
- Modelltext är en IfcBuildingElementProxy med objekttypen ModelText. Dess form är en extruderad solid för varje bokstavsdel, med hålen i bokstäver som O och B. Dess kvantiteter är ytarean och volymen (ytarea gånger djup).

## Bra att veta

- Vilken storlek som helst görs som du begär. Endast en linje utan längd, en båge vars tre punkter ligger på en rak linje, eller en text utan bokstäver nekas, eftersom det inte finns något att göra.
- Varje linje, och varje text eller ändring av den, är ett steg i Ångra.

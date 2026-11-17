---
title: Fortryd på tværs af apps i CadCraft Studio
summary: Inde i Studio fortæller BimCraft Studio om hvert færdigt trin, så Studio kan fortryde dit sidste trin i det vindue, du arbejdede i sidst.
keywords: fortryd, studio, på tværs af apps, projektfortrydelse, historik, journal, vindue
from: c66dd0c1
---

## Hvad det gør

I CadCraft Studio melder hvert appvindue til Studio, når et trin er færdigt (en væg tegnet, et sæt vægge accepteret fra en scanning). Studio gemmer disse trin i den rækkefølge, du arbejdede i, og kan bede det vindue, der lavede det seneste trin, om at fortryde det med vinduets egen fortrydelse. Ctrl+Z inde i BimCraft forbliver BimCraft's egen og meldes også til Studio.

## Det skal du vide

- Studio beder kun et vindue om at fortryde, når dets fortrydelsesliste er præcis, som trinnet efterlod den. Efter Gem (som starter en ny ændringsliste) eller efter du skifter den model, du redigerer, svarer BimCraft, at listen er flyttet, og Studio springer dette vindue over. Intet tvinges.
- At fortryde virkningerne af én app i en anden er ikke lavet endnu.
- Uden for Studio ændrer intet sig.
- Studio-menupunktet, der beder om fortrydelsen, følger med en Studio-version. Indtil da bliver trinene rapporteret, men intet menupunkt bruger dem.

## Næste

- [Arbejd live sammen med andre](topic:work-live)

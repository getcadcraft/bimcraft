---
title: Elementritningar i trä eller lätta stålprofiler
summary: Stomma modellens väggar, golv och tak som element i trä eller lätta stålprofiler, se varje regel, syll, överliggare, bjälke och sparre i skala, och spara kaplistan som CSV och verkstadsritningarna som PDF.
keywords: element, stomme, elementritning, verkstadsritning, kaplista, lätta stålprofiler, C-regel, stålregel, LGS, trä, bjälke, sparre, överliggare, standardlängder, PDF
from: c09f916e
---

## Öppna elementen

Välj {{ui:Elementritningar}} i menyn {{ui:Bygge}} (eller skriv {{cmd:PANELS}}). Listan innehåller varje ritad vägg, varje golv och varje tak i modellen, var och en med en bock. Väggar kommer med sina dörrar och fönster som öppningar. Ett golv stommas som rektangeln runt sin kontur, med bjälkarna gående den korta vägen. Ett tak stommas som ett sadeltak över konturen av sina väggar, med takets lutning. Listan säger det, eftersom ett valmat eller komplext tak inte är ett sadeltak.

## Material, storlek och avstånd

Välj {{ui:Material}}: **Trä** eller **Lätta stålprofiler**. Stålstyckena är C-reglar namngivna efter djup och tjocklek (till exempel C92-1.2), med en skena för syllarna. {{ui:Dimension}} väljer en storlek för alla markerade element, eller lämna den på Standard för att använda standardvärdena för varje typ av element. {{ui:Avstånd}} är avståndet mellan reglar, bjälkar eller sparrar. Dessa är startvärden för dig att ställa in. De är ingen kodkontroll: om en regel med det avståndet bär den väggen, och en överliggare det spannet, avgörs av kodtabellerna (tillägget Byggregler har IRC:s) och din konstruktör.

## Vad du får

Det första markerade elementet ritas i skala i dialogen, med måtten. {{ui:Kaplista (CSV)}} sparar varje elements delar efter märke, storlek och längd, samt standardlängderna att köpa för dem. {{ui:Verkstadsritningar (PDF)}} sparar en A3-sida för varje element, med varje del märkt och dess kaplista. {{ui:Ritning (SVG)}} sparar det första elementet som en ritning. Allt som stomningskoden hittar som inte kan stommas (en öppning för nära ändan av en vägg, en överliggare som inte ryms under syllarna, en del längre än den längsta standardlängden) listas under Problem såväl som i dialogen.

## Vad den inte gör

Elementen är ritningar som görs av modellen när du ber om dem: inget skrivs in i modellen, så de stämmer alltid med den. För att lägga stommen i modellen som delar, använd {{ui:Stomme}} för trävägg, golv och tak.

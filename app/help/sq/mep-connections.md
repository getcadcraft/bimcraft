---
title: Lidh tubat dhe kanalet me pajisjet
summary: Nis ose mbyll një tub ose kanal te një port, që të marrë madhësinë dhe sistemin e portit dhe të mbetet i fiksuar aty, pastaj kontrollo lidhjet — porte të hapura, mospërputhje madhësish dhe sistemesh, vargje pa burim.
keywords: mep, lidh, lidhja, lidhjet, port, portet, port i hapur, mospërputhje madhësie, mospërputhje sistemi, burim, kontrollo lidhjet, i fiksuar, ndjek, lëviz pajisjen, ifcrelconnectsports, koordinim
from: 29144fb0
---

## Çfarë do të bësh

Lidh vargjet me pajisjet që modeli të jetë një sistem i vetëm i lidhur: dalja e një pompe me tubin që del prej saj, qafa e një difuzori me kanalin e tij dege. Pastaj lëre BimCraft të listojë çfarë nuk është lidhur.

## Vizato nga një port

1. Zgjidh {{ui:Tub}} ose {{ui:Kanal ajri}}.
2. Lëviz treguesin mbi një port të një pjese pajisjeje (rrethat e vegjël; një port i hapur vizatohet me ngjyrën e paralajmërimit). Treguesi ngjitet te ai dhe thotë **në një port**.
3. Kliko: vargu nis në lartësinë e portit dhe **merr madhësinë dhe sistemin e tij** (një tub merr gjithashtu materialin e zakonshëm të sistemit). Rreshti i gjendjes thotë çfarë mori.
4. Vazhdo vizatimin si zakonisht. Mbyllja e një vargu në një port tjetër fikson edhe atë skaj.

Skaji i një vargu në një port është **i fiksuar** te ai: lëviz ose rrotullo pajisjen (te Vetitë) dhe skaji i vargut shkon me të; ndrysho vargun dhe ai skaj mbetet në port. Kthesat e tjera të vargut qëndrojnë aty ku janë, kështu që pas një lëvizjeje të madhe segmenti i parë mund të largohet nga porti në kënd: lëviz edhe kthesën tjetër.

## Kontrollo lidhjet

Hap {{ui:Ndërtimi}} dhe kliko {{ui:Kontrollo lidhjet}}. Lista nën shirit shfaq:

| Rreshti | Çfarë do të thotë |
|---|---|
| Një port nuk është i lidhur | Një pjesë pajisjeje ka një lidhje ku nuk vizatohet asgjë |
| Nuk ka asgjë në skajin e tij | Një varg përfundon në ajër |
| Porte të lidhur me madhësi të ndryshme | Një varg i një madhësie takon një port ose varg tjetër pa reduktor (madhësia nominale e tubit, forma dhe anët e kanalit) |
| Porte të lidhur me sisteme të ndryshme | Për shembull një kanal kthimi në një difuzor furnizimi |
| Një tub i lidhur me një kanal | Takohen dy lidhje të llojeve të ndryshme |
| Asnjë pajisje në rrjetin e tij nuk e furnizon | Asnjë gjë ku është lidhur një varg, sado larg, nuk ka dalje. Kullimet, kanalizimet e shiut dhe ventilimet nuk pyeten për këtë: uji i tyre vjen nga armaturat |
| Fiksuar te një port pajisjeje që nuk është më në model | Pajisja u fshi; vizato skajin përsëri ose fshi vargun |

Gabimet vijnë së pari. Kliko një rresht për të zgjedhur atë që emërton. {{ui:Mbyll}} fsheh listën. Kontrolli e lexon modelin ashtu siç është vizatuar: kontrollon lidhjet dhe madhësitë, kurrë rrjedhat, presionet ose balancimin.

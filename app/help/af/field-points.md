---
title: Punte vir uitsetting, en soos-gebou-kontroles
summary: Nommer die plekke wat 'n span vanaf die model uitsit — kolomsentrums, muureindes, ankerbouten, mofstukke, enige element wat jy kies — skryf hulle vir 'n totaalstasie, lees dan die span se soos-gebou-punte terug en sien wat uit is.
keywords: uitsetpunte, uitsetting, uitsit, pen uit, uitsetwerk, totaalstasie, opmeting, puntlêer, csv, txt, pnezd, penzd, xyz, noordwaarts, oostwaarts, hoogte, soos gebou, soos-gebou, kontrole, toleransie, afwyking, ankerbouten, kolomsentrums, muureindes, mofstukke, opmetingskoördinate, kaartomskakeling
from: acea9606
---

Die {{ui:Points}}-oortjie aan die regterkant maak die punte wat 'n span op die terrein uitsit vanaf die oop model, en kontroleer die punte wat hulle daarna meet.

## Maak die punte

1. Maak 'n IFC-model oop en die {{ui:Points}}-oortjie.
2. Merk wat uitgesit moet word: **kolomsentrums** (die voet van elke kolom se middellyn), **muureindes** (albei punte van elke muur se as, by sy basis), **ankerbouten**, **mofstukke** (elemente wie se naam of soort mof sê), en die **gekose elemente** (elk by sy plasingspunt — kies hulle eers in die aansig).
3. Kies die eerste nommer en 'n voorvoegsel, die koördinate, die eenhede, die kolomme en die lêer:
   - **Model**: die lêer se eie koördinate. **Opmetingsrooster**: die kaartrooster van die model se georeferensie (slegs gewys as die IFC 'n kaartomskakeling het), in meter of die eenheid wat jy kies.
   - Kolomme **PNEZD** (punt, noordwaarts, oostwaarts, hoogte, beskrywing), **PENZD** of **XYZ**; **CSV** (komma's) of **TXT** (tabs).
4. Druk {{ui:Make points}}: die lys wys hulle en die aansig merk hulle blou. {{ui:Download the points}} skryf die lêer.

Punte kom in 'n vaste volgorde — volgens soort, dan in rye oor die plan — so as jy hulle weer uit dieselfde model maak, kry jy dieselfde getalle. Die lêer is die een wat CivilCraft oopmaak en wat CadCraft se EXPORTPOINTS skryf: een punt per lyn, drie desimale, 'n beskrywing tussen aanhalingstekens as dit 'n komma bevat.

## Kontroleer die soos-gebou-punte

Wanneer die span terugstuur wat hulle gemeet het, kies 'n **toleransie** in millimeter en hoe om die punte te paar — volgens **puntnommer** (hulle het jou nommers behou) of die **naaste meeting** — en druk {{ui:Read as-built points…}}. Lees die lêer in dieselfde eenhede en koördinate wat jy geskryf het.

Elke ontwerppunt is dan **binne** die toleransie, **buite** dit, **nie gemeet nie**, en enige meeting wat niemand gevra het nie, is **ekstra**. Die tabel gee die verskille in die eenheid wat jy in die werkbalk kies, voete gewys as desimale duim (soos gebou min ontwerp: oostwaarts, noordwaarts, hoogte, en die afstand in die plan); die aansig merk elke punt groen of rooi met 'n lyn na die meeting, en grys as dit nie gemeet is nie. {{ui:Report (CSV)}} skryf die hele vergelyking uit.

Niks hier verander die model nie. Nog nie gebou nie: uitsetting vanaf plafonrande, rooster-kruisings of openings wat vir jou gemaak word, en punte direk na 'n instrument stuur — gebruik die lêer.

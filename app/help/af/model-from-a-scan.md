---
title: Model uit 'n skandering
summary: 'n Kort stap-vir-stap van 'n laserskandering na mure: maak die puntwolk langs 'n nuwe gebou oop, belyn dit met 'n vlak, en traseer sy mure op die plan.
keywords: skandeer, laserskandering, puntwolk, soos-gebou, bestaande gebou, opmeting, traseer, skandeer na BIM, model uit skandering, snit, belyn, reguit, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Wat jy sal doen

Teken 'n bestaande gebou uit sy laserskandering: mure waar die skandering dit wys, op die regte vlak, reguit teenoor mekaar.

## Stappe

1. **'n Gebou om in te teken.** {{ui:File}} › {{ui:New building}}, met soveel vlakke as wat die gebou het (jy kan later vlakke byvoeg, sien [Die terrein, die gebou daarop, en sy vlakke](topic:site-building-and-levels)). {{ui:Draw}} skakel aan.
2. **Die skandering.** {{ui:Show}} › {{ui:Point cloud}} en kies die lêer (LAS, LAZ, E57, PLY, PCD, PTX of XYZ: sien [Wys 'n puntwolk langs die model](topic:point-clouds)). Die wolk verskyn in die 3D-aansig, en die plan wys sy **snit**: die geskandeerde punte 1200 mm (4 feet) bo die vlak, as kolletjies. Dit is die hoogte waar mure, deure en vensters die beste lees.
3. **Belyn dit met die vlak.** Maak die modelbalk se {{ui:Scan}}-kieslys oop en klik {{ui:Align its floor to this level}}: die wolk beweeg op of af totdat die vloer wat dit geskandeer het op die getoonde vlak sit. Kontroleer dat die snit nou deur die mure sny.
4. **Reguit teenoor die gebou.** {{ui:Scan}} › {{ui:Turn it square to the building}} draai die wolk sodat die mure in sy snit langs die plan se asse loop, sodat mure wat jy met {{key:Shift}} gehou teken, met die skandering inpas. Dit draai om die middel van die mure wat dit gevind het, sodat bome of 'n buurman se muur wat in die snit gevang is, nie die skandering weg laat swaai nie. Belyn eers die vloer: dan sny die snit deur die mure.
5. **Traseer die mure.** Kies {{ui:Wall}} en klik langs die kolletjies: die hulpmiddel vaslê aan geskandeerde punte (die vasmerk is 'n klein ruit) sowel as aan die mure wat jy geteken het. 'n Muur word op sy middellyn geteken; klik dus in die middel van die twee rye kolletjies wat 'n muur agterlaat; tik sy dikte deur eers die muurtipe te kies. Voeg dan die deure en vensters by waar die snit die gapings wys.
6. **Die volgende vlak.** Kies die vlak bo in die plan se vlaklys: die snit volg die vlak se snitshoogte. Belyn die vloer weer met daardie vlak slegs as die skandering se vloere nie waar jou vlakke is nie.

## Wat jy behoort te sien

- Die snit verander soos jy vlak verander, en 'n dikker snit ({{ui:Scan}} › {{ui:Slice thickness}}) wys meer punte waar 'n skandering dun is.
- {{ui:Scan}} › {{ui:Undo the alignment}} plaas die wolk terug waar dit was toe dit oopgemaak is. Belyning skuif die wolk net in die aansig: dit word nie in die IFC-lêer gestoor nie, en mure wat jy geteken het, bly staan. Die belyning gaan saam met die wolk wanneer jy {{ui:Place}} of {{ui:Units}} verander, of 'n ander model oopmaak.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} versteek of wys die kolletjies.

:::tip
Groot skanderings: die plan teken tot 60,000 punte van die snit en die 3D-aansig 'n paar miljoen van die hele wolk, albei eweredig uit die skandering gekies, sodat 'n groot lêer vinnig bly. Om eerder in die tekenprogram te traseer, gebruik die wolkbalk se {{ui:Trace in CadCraft}}.
:::

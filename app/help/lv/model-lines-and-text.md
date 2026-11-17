---
title: Modeļa līnijas un modeļa teksts: zīmēti modelī, darba plaknē
summary: Modeļa līnija ir līnija, polilīnija vai loks, kas pieder modelim un rādās katrā skatā, kas to redz. Modeļa teksts ir 3D burti ar reālu dziļumu. Abi tiek zīmēti darba plaknē.
keywords: modeļa līnija, modeļa teksts, 3D teksts, burti, zīme, zīmes, līnija 3D, loks, polilīnija, darba plakne, ekstrudēts teksts, fonts, dziļums, detaļas līnija, zīmēšanas līnija, anotācija, IfcAnnotation
from: fc9cccb5
---

## Ko jūs darīsit

Zīmēt līnijas un burtus, kas ir daļa no modeļa, nevis viena skata.

## Soļi

1. Vispirms iestatiet darba plakni (skat. **Darba plakne**). Līmeņa plakni zīmē plānā; vertikālo plakni – Darba plaknes skatītājā.
2. Līnijai izvēlieties **Modeļa līnija** izvēlnē {{ui:Būvējums}} un izvēlieties **Līnija**, **Polilīnija** vai **Loks (trīs punkti)**:
   - līnija ir divi klikšķi;
   - polilīnija ir klikšķis katram punktam, tad {{key:Enter}} vai dubultklikšķis. Klikšķis uz pirmā punkta to aizver;
   - loks ir trīs klikšķi: sākums, punkts, caur kuru tas iet, un beigas.
3. Tekstam izvēlieties **Modeļa teksts**. Ierakstiet vārdus, iestatiet lielo burtu augstumu un dziļumu, tad noklikšķiniet, kur teksts sākas (pamatlīnijas kreisajā galā).
4. Izvēlieties līniju vai tekstu, lai to redzētu {{ui:Rekvizīti}}. Tur var mainīt teksta vārdus, augstumu un dziļumu. {{key:Delete}} to noņem.

## Kur tie rādās

- Modeļa līnija rādās savas līmeņa plānā, 3D skatā, fasāžu un griezumu panelī un Darba plaknes skatītājā, ja tā atrodas uz darba plaknes. Zīmēšanas līnija (Anotēt, Līnija) pieder tikai vienam skatam.
- Modeļa teksts ir cieta ģeometrija: tas rādās visur, kur rādās modelis – plānā, 3D, fasādēs, griezumos un lapās.
- Modeļa līnijas uz drukātām lapām vēl netiek zīmētas. Modeļa teksts tiek.

## Fonts

Modeļa teksts izmanto to pašu fontu kā lapas un PDF: Liberation Sans, ar SIL Open Font License. Burts, kuru fonts nesatur, tiek zīmēts kā jautājuma zīme, un jums tiek paziņots, kurš. Ir viens fonts un viens svars. Burti ir izvietoti pēc paša fonta platumiem, bez kerninga.

## IFC failā

- Modeļa līnija ir IfcAnnotation ar objekta tipu ModelLine. Tās forma ir 3D līkne: polilīnija vai apgriezts aplis lokam.
- Modeļa teksts ir IfcBuildingElementProxy ar objekta tipu ModelText. Tā forma ir viens ekstrudēts cietais ķermenis katram burta gabalam, ar caurumiem tādiem burtiem kā O un B. Tās daudzumi ir virsmas laukums un tilpums (virsmas laukums reizināts ar dziļumu).

## Noderīgi zināt

- Jebkurš izmērs tiek veidots, kā pieprasīts. Atteikts tiek tikai līnija bez garuma, loks, kura trīs punkti atrodas vienā līnijā, vai teksts bez burtiem, jo nav ko veidot.
- Katra līnija un katrs teksts, kā arī katra izmaiņa tajā, ir viens solis {{ui:Atsaukt}}.

---
title: Šachty a otvory skrz podlahy
summary: Šachta je jeden obrys, který protíná každou podlahu, strop a střechu mezi dvěma úrovněmi. Svislý otvor protíná jednu z nich. Otvor ve stěně protíná stěnu.
keywords: šachta, šachta výtahu, výtahová šachta, schodišťový otvor, stoupačka, svislý otvor, otvor v podlaze, otvor ve stropu, otvor ve střeše, otvor pro světlík, díra v podlaze, otvor ve stěně, IfcOpeningElement, odpočet, čistá plocha
from: 8e9e1641
---

## Co uděláte

Vyřízněte výtahovou šachtu budovou jedním náčrtem, vyřízněte díru v jednom podlaží a přečtěte si, co bylo z ploch odečteno.

## Kde jsou nástroje

- Pásová rozvržení: {{ui:Architektura}} › **Otvor** › {{ui:Šachta}}, {{ui:Svislý otvor}} a {{ui:Otvor ve stěně}}.
- Klasické rozvržení: panel Kreslení › nabídka {{ui:Místnosti}} (Šachta, Svislý otvor) a › nabídka {{ui:Stěny}} (Otvor ve stěně).

## Šachta

1. Otevřete půdorys podlaží, na kterém šachta začíná. Zvolte {{ui:Šachta}}.
2. V řádku vyberte {{ui:Spodní úroveň}} a {{ui:Horní úroveň}} a odsazení, pokud začíná nebo končí nad nimi nebo pod nimi.
3. Klikejte na rohy obrysu. Klikněte znovu na první roh, dvakrát klikněte nebo stiskněte {{key:Enter}}, čímž dokončíte.
4. Každé podlaží, strop a střecha mezi oběma výškami se protne. Stavový řádek říká, kolik jich bylo.

Šachta je jedna věc. Vyberte její obrys na kterémkoli podlaží, kterým prochází: Vlastnosti obsahují její název, úrovně a odsazení, co protíná, a plochu, která byla odebrána. Změníte-li ji, každý otvor se přizpůsobí. Smažete-li ji, každý otvor zmizí. Každá úprava je jeden krok zpět.

Pokračuje v řezání: podlaží vytvořené později mezi jejími úrovněmi se prořízne bez vyžádání a podlaží, které smažete, se uvolní.

Podlaží, na kterém šachta stojí, se neprořízne (jeho horní hrana je základ). Chcete-li prořezat i jej, dejte základně záporné odsazení. Chcete-li projít střechou, dejte horní hraně kladné odsazení.

## Svislý otvor

1. Zvolte {{ui:Svislý otvor}}. V řádku vyberte, co se má prořezat: podlaží, strop nebo střechu.
2. Klikněte na rohy obrysu a dokončete stejně jako výše.
3. Podlaží, strop nebo střecha této úrovně pod obrysem se prořeže. Patří to jednomu prvku: smažete-li podlaží, otvor zmizí spolu s ním.

## Otvor ve stěně

{{ui:Otvor ve stěně}} je nástroj z [Tvarování stěny](topic:wall-shape): klikněte na stěnu na půdorysu, nebo na dva rohy na její ploše ve 3D.

## Množství

Podle pravidla měření pro podlahy je čistá plocha prvku jeho hrubá plocha zmenšená o to, co je z něj vyříznuto. Šachta nebo svislý otvor je odpočet na každé podlaze a stropu, které protíná; tabulky Podlahy a povrchové úpravy a množství IFC ukazují stejná čísla. U střechy je odpočet plocha střešní plochy: půdorysná plocha dělená kosinem sklonu.

Obrys, který přesahuje okraj, odečte jen tu část, která leží na prvku.

## Nic se neprořízne

Šachta, které nic nebrání, se vytvoří a řekne to: prořízne, co se tam postaví později. Svislý otvor potřebuje něco pod sebou; když tam nic není, stavový řádek to řekne a nic se nevytvoří.

## V IFC

Každý řez je IfcOpeningElement s IfcRelVoidsElement na prvek, který protíná, takže jakýkoli program pro IFC zobrazí díru. Střecha se řeže plocha po ploše. Samotná šachta je IfcGroup svých otvorů.

## Ještě není hotovo

- Zakřivené obrysy.
- Stěny šachty: nakreslete je nástrojem Stěna.
- Úprava obrysu tažením rohů (změňte ji ve Vlastnostech, nebo smažte a nakreslete znovu).
- Vlastnosti nakresleného podlaží ukazují jeho plochu jen po odečtení vlastních otvorů; rozpisy a množství IFC zahrnují také šachtu.

Viz také [Místnosti a dělicí prvky místností](topic:rooms-and-separators).

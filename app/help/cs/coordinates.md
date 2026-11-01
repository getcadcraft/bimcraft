---
title: Souřadnice v BimCraftu
summary: Kde pracujete: poloha ukazatele v půdorysu a 3D pohledu, podlaží, na kterém jste, počátek projektu a průzkumný bod pozemku.
keywords: souřadnice, kde jsem, poloha, ukazatel, odečet, x y z, podlaží, úroveň, počátek projektu, počátek, základní bod, průzkumný bod, pozemek, souřadnice mapy, východní souřadnice, severní souřadnice, georeference, jednotky, poloha
from: 84df5245
---

## Co uděláte

Na první pohled zjistíte, kde jste v modelu: ve kterém podlaží kreslíte, jak daleko je ukazatel od počátku projektu a kde je průzkumný bod pozemku.

## Kde se čísla zobrazují

- **Nad 3D pohledem** (vpravo dole, vedle kostky pohledu): najeďte ukazatelem na model. Okno ukazuje podlaží, na kterém bod leží, a jak vysoko je nad podlahou tohoto podlaží, poté jeho **X, Y a Z**. Nad prázdným prostorem ukazuje bod na podlaze nejnižšího podlaží.
- **V půdorysu** (vpravo dole, když je zapnuto {{ui:Kreslení}}): podlaží, které půdorys zobrazuje, a výška jeho podlahy, a dále **X a Y** ukazatele, dokud je nad půdorysem.
- Když soubor obsahuje převod do mapy (byl exportován se souřadnicemi mapy), obě okna přidají **východní a severní souřadnice** v mřížce mapy, v jednotkách zvolených v seznamu {{ui:Jednotky}} (vždy se jednotkou napsanou vedle nich; stopy a palce se zobrazují jako desetinné stopy). Výkres (DWG nebo DXF) si zachovává vlastní jednotky: jeho odečet ukazatele je pojmenovává a nikdy se nepřevádí.

Každé X, Y a Z se měří od **počátku projektu**, v jednotkách zvolených na panelu nástrojů (stopy a palce, palce, desetinné stopy, milimetry, centimetry nebo metry). Kladná osa Y směřuje na sever modelu, který není vždy pravý sever. Východní a severní souřadnice v mapě se řídí stejnou volbou (stopy a palce se zobrazují jako desetinné stopy). Pokud se jednotka souřadnicového systému mapy liší od vámi zvolené, je uvedena v závorce za čísly, například *(US survey feet)*, aby zeměměřič viděl, v jaké jednotce je samotný systém zapsán.

## Dvě značky

- **Počátek projektu** (červený kruh s křížkem): bod 0, 0, 0, od kterého se měří každá souřadnice v modelu.
- **Průzkumný bod** (modrý kruh s trojúhelníkem): referenční bod pozemku, pro který jsou uvedeny jeho zeměpisná šířka, délka a nadmořská výška nebo souřadnice mapy. V 3D pohledu na něj ukažte, abyste zjistili, kde leží.

Když pozemek leží na počátku projektu, jako u nové budovy nakreslené zde, zobrazí jedna značka obě. Klikněte na tlačítko s křížkem v kterémkoli okně a značky skryjete nebo zobrazíte; BimCraft vaši volbu pamatuje v tomto prohlížeči.

## Co byste měli vidět

- Čísla se mění s pohybem ukazatele a v okně půdorysu je název podlaží, které jste zvolili v seznamu podlaží.
- Značky zůstávají na místě, když otáčíte, posouváte a přibližujete.

:::tip
Pro zjištění zeměpisné šířky a délky bodu použijte {{ui:Measure}} › {{ui:Location}}: viz [Měření vzdáleností, ploch a poloh v 3D](topic:measure).
:::

:::touch
Na dotykové obrazovce okno 3D nic nezobrazí, dokud nepoužijete myš nebo pero: prst pohybuje pohledem.
:::

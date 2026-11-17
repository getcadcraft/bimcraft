---
title: Mřížky a sloupy
summary: Rozložte osy mřížky s číslovanými a písmennými bublinami, podle rozteče nebo po jedné, podél nich kreslete stěny a sloupy a zobrazte je na půdorysech, pohledech a řezech.
keywords: mřížka, mřížky, osa mřížky, sloupová mřížka, osa, osy, bublina, konstrukční mřížka, 1 2 3, A B C, sloup, sloupy, pilíř, sloupek, přichycení, IfcGrid, IfcColumn
from: bf99a8f7
---

## Co uděláte

Vytyčte budovu na mřížce a potom podél jejích os nakreslete stěny a umístěte sloupy.

## Umístění celé mřížky

1. Zapněte {{ui:Kreslení}}, potom vyberte {{ui:Sestavení}} › {{ui:Mřížka}}.
2. Klikněte na {{ui:Umístit mřížku…}}. Zadejte, kolik **číslovaných os** (1, 2, 3…) a **písmenných os** (A, B, C…) chcete a jak daleko od sebe mají být. Zadejte jednu rozteč, nebo několik oddělených čárkami pro nerovná pole (například `20', 24', 20'`). {{ui:Za poslední osy}} určuje, jak daleko každá osa přesahuje za krajní osy druhého druhu, a {{ui:Natočení (stupně)}} natočí celou mřížku.
3. Klikněte na {{ui:Umístit}} a potom klikněte na místo prvního průsečíku (1 / A). Náhled sleduje kurzor.

Číslované osy vedou v půdorysu směrem nahoru a jsou rozmístěny napříč; písmenné osy vedou napříč půdorysem a jsou rozmístěny směrem nahoru. Písmena přeskakují I a O, jako na výkresech, takže se nikdy nečtou jako 1 a 0.

## Kreslení os jednotlivě

S {{ui:Mřížka}} zapnutou klikněte, kde osa začíná, a kde končí. Dostane další označení z os, podél kterých vede (za 3 přijde 4; za B přijde C). Stiskněte {{key:Esc}} pro ukončení.

## Změna osy mřížky

S {{ui:Mřížka}} zapnutou klikněte na osu, abyste ji vybrali. Zadejte nové {{ui:Označení}} a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Smazat tuto osu}} (případně stiskněte {{key:Delete}}). {{ui:Bubliny}} umístí bubliny na oba konce, na začátek nebo konec každé osy, anebo nikam. Každá změna je jeden krok: {{key:Mod+Z}} ji vrátí zpět.

## Kreslení podél mřížky

Nástroj {{ui:Stěna}}, nástroj {{ui:Sloup}} a ostatní kreslicí nástroje se přichytí k osám mřížky a k místům, kde se kříží (značka přichycení je malý kroužek s křížkem).

**Sloupy:** vyberte {{ui:Sestavení}} › {{ui:Sloup}}, zvolte tvar (obdélníkový nebo kulatý), velikost a to, zda sloup sahá **do podlaží nad sebou**, nebo do pevné výšky, a potom klikněte. {{ui:Na každém průsečíku mřížky}} umístí sloup na každý průsečík, který ho ještě nemá. Klikněte na sloup a změňte jeho tvar, velikost nebo výšku v {{ui:Vlastnosti}}; {{key:Delete}} jej odstraní. Sloupy, které sahají do podlaží nad sebou, ho sledují, když se změní jeho výška.

## Co byste měli vidět

- Mřížku na půdorysu každého podlaží, s bublinou a jejím označením na koncích každé osy.
- Osy mřížky na sadě výkresů: na půdorysech a na pohledech a řezech, kde je osa vidět z čela, s bublinou nad budovou. Viz [Pohledy, řezy a listy](topic:sheets).
- V souboru IFC: jedna mřížka pro budovu (IfcGrid, její číslované osy v jednom seznamu a písmenné osy v druhém) a sloupy jako IfcColumn s velikostí, výškou a množstvími. Ostatní BIM programy obojí zobrazí.

:::note
Mřížka, která přišla v souboru z jiného programu, se zobrazí a nástroje se k ní přichytí, ale její osy zde nelze změnit.
:::

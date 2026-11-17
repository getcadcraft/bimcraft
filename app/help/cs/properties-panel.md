---
title: Pole panelu Vlastnosti
summary: Co znamená každé pole v panelu Vlastnosti a v panelech Soubor, Výkres a Složka a která z nich můžete změnit.
keywords: vlastnosti, pole, atributy, globalid, guid, kopírovat, kopírovat hodnotu, kopírovat vše, csv, schránka, sériové číslo, značka, typ objektu, řádek, express id, sada vlastností, pset, množství, schéma, panel souboru
from: fe55b435
---

## Prvek IFC

Nahoře panelu {{ui:Vlastnosti}} je druh prvku bez předpony „Ifc“ (například "Door", "WallStandardCase", "FurnishingElement") a jeho název, nebo „Bez názvu“.

| Pole | Význam | Upravitelné |
|---|---|---|
| Název | Název prvku, často název rodiny a typu z exportéru | Ano |
| Typ | Název typu prvku, pokud ho má | Ne |
| Typ objektu | Volný text s popisem typu, který některé exportéry vyplňují | Ano |
| Značka | Značka nebo označení prvku; mnoho exportérů sem píše ID prvku | Ano |
| Popis | Volný text | Ano |
| GlobalId | Trvalý 22znakový identifikátor IFC prvku, stejný při každém exportu téhož prvku | Ne |
| Řádek | Číslo řádku (`#1234`) prvku v tomto souboru IFC. Mění se mezi exporty | Ne |

Níže jsou **sady vlastností** seřazené podle názvu:

- Každá sada se otevře a zavře kliknutím na její název. První tři jsou otevřené.
- Sada označená "(type)" patří typu prvku: "Type property: a change here applies to every element of this type." (Vlastnost typu: změna zde se použije na každý prvek tohoto typu.)
- Sady množství (délky, plochy, objemy, počty, hmotnosti) jsou jen pro čtení.
- Seznamy a výčtové hodnoty se zobrazují, jen pro čtení.
- Hodnoty ano/ne se zobrazují jako **Ano** nebo **Ne**.
- Čísla se pro zobrazení zaokrouhlují na čtyři desetinná místa. Délky (vlastnost délky nebo délka množství) se zobrazují v {{ui:Jednotky}} zvolených na panelu nástrojů, s jednotkou vedle nich, a můžete zapsat novou v této jednotce, nebo s jinou značkou jednotky (2.4 m, 8'-0"): BimCraft zapíše zpět vlastní číslo souboru. Ostatní čísla se zobrazují tak, jak je soubor má.
- Prázdná hodnota se zobrazí jako *prázdná*. Upravená hodnota je tučně a vedle ní je modrý pruh.

## Kopírování hodnoty

Každá hodnota v {{ui:Vlastnosti}} má vedle sebe malé tlačítko kopírování: kliknutím ji dáte do schránky přesně tak, jak je zobrazena, například GlobalId, sériové číslo nebo jakoukoli hodnotu sady vlastností. Kopírování nikdy nespustí úpravu.

Nahoře {{ui:Kopírovat vše}} zkopíruje všechny hodnoty prvku jako text, sada po sadě, a {{ui:Kopírovat jako CSV}} je zkopíruje jako řádky skupiny, vlastnosti a hodnoty pro vložení do tabulky; prázdné hodnoty se zachovají, aby každé pole mělo řádek. Totéž platí pro prvek z jiného otevřeného modelu; když je otevřeno více modelů, CSV začíná sloupcem {{ui:Model}} s názvem souboru.

## Panel Soubor (IFC)

| Pole | Význam |
|---|---|
| Soubor, Velikost | Soubor, který jste otevřeli |
| Schéma | Verze IFC, například IFC2X3 nebo IFC4 |
| Projekt | Název projektu a jeho dlouhý název |
| Fáze | Fáze projektu, pokud ji exportér zapsal |
| Exportováno z | Exportující program z hlavičky souboru |
| Autor | Autor v hlavičce souboru |
| Exportováno | Datum a čas v hlavičce souboru |
| Prvky | Kolik prvků s tvarem bylo vykresleno |
| Trojúhelníky | Kolik trojúhelníků tvoří jejich tvary; míra toho, jak těžký model je |

## Panel Soubor (projektové a rodinné soubory)

| Pole | Význam |
|---|---|
| Druh | Projekt, Šablona projektu, Rodina nebo Šablona rodiny |
| Uloženo v | Vydání, které soubor naposledy uložilo |
| Sestavení | Přesné sestavení tohoto vydání |
| Přečteno | Kolik souboru BimCraft přečetl, z jeho velikosti |

## Panel Výkres (DWG a DXF)

| Pole | Význam |
|---|---|
| Formát | Vydání, v němž byl výkres uložen, s kódem formátu, například AC1032 |
| Jednotky | Jednotky vložení výkresu, pokud jsou nastaveny |
| Entity | Kolik objektů bylo přečteno |
| Vrstvy | Kolik vrstev |
| Listy | Kolik listů (rozvržení), nebo žádné |
| Propojené výkresy | Kolik jeho propojených výkresů se našlo a načetlo |
| Vybavení | Kolik označených položek vybavení je na listech |

## Panel Složka

| Pole | Význam |
|---|---|
| Složka, Soubory, Velikost | Složka, kterou jste otevřeli, kolik souborů obsahuje a jejich celková velikost |
| Modely | Soubory projektů a rodin, každý se svými zálohami započítanými jednou |
| Výkresy CAD, modely IFC | Kolik jich je každého druhu |
| Problémy | Kolik kopií modelů je neúplných nebo nečitelných, nebo žádné |

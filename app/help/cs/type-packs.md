---
title: Balíčky typů: sdílení typů stěn jako otevřených souborů
summary: Uložte typy stěn s jejich vrstvami, materiály, značkami a klasifikačními kódy a rodinami jako jeden otevřený soubor (prostý JSON nebo IFC) a přidejte je do jiného projektu. Lze číst i typy stěn z IFC souboru jiného programu.
keywords: balíček typů, typy, typ stěny, sdílení, export, import, knihovna, otevřený formát, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiály, vrstvy, šablona, firemní standard, rodiny
from: e4c91331
---

## Co uděláte

Přeneste typy stěn z jednoho projektu do druhého nebo je předejte někomu, kdo pracuje v jiném programu. Balíček typů obsahuje každý typ stěny s jeho vrstvami, tloušťkami, materiály, jádrem, dutinami, prioritou vrstev, úrovní rozpracovanosti, daty pro výkaz výměr a klasifikačními kódy a případné rodiny, které přidáte. Je to otevřený soubor: prostý text JSON, který může číst kdokoli, nebo soubor IFC. Nic v něm není vázáno na firmu, zemi ani účet.

## Uložení typů z projektu

1. Otevřete **Data** na liště modelu a vyberte {{ui:Balíčky typů}}.
2. Pod {{ui:Uložit typy z tohoto projektu}} zaškrtněte typy stěn, které chcete zahrnout. Vlastní typy projektu jsou zaškrtnuté; výchozí typ lze přidat a vloží se jako kopie. Chcete-li je zahrnout, zaškrtněte rodiny.
3. Napište {{ui:Název balíčku}}.
4. {{ui:Uložit jako balíček (.json)}} stáhne soubor `.cctypes.json`. {{ui:Uložit jako IFC (.ifc)}} stáhne soubor IFC obsahující jen typy: každý typ stěny jako IfcWallType s jeho sadou vrstev materiálu, materiály a klasifikací, pro libovolný program BIM.

## Přidání typů do projektu

1. V tomtéž dialogu vyberte {{ui:Otevřít balíček nebo soubor IFC…}} a vyberte soubor `.json` s balíčkem nebo `.ifc`.
2. Dialog vypíše, co soubor obsahuje: každý typ stěny s jeho tloušťkou, počtem vrstev a kódy, materiály a rodiny.
3. Vyberte, co se stane s {{ui:Typ, který už tento projekt má}}: **Ponechat projektový**, **Přidat balíčkový jako kopii** (dostane nový název končící na „(2)“), nebo **Nahradit (jen pokud žádná stěna jej nepoužívá)**.
4. Klikněte na {{ui:Přidat do projektu}}. Dialog vypíše, co bylo přidáno, zkopírováno, nahrazeno nebo ponecháno. Je to jeden krok zpět.

Nové typy jsou hned v seznamu typů nástroje Stěna.

## Typy podlah, střech a stropů

Seznam typů k uložení také obsahuje typy podlah, střech a stropů projektu a jejich výchozí typy (označené Podlaha, Střecha, Strop). Balíček může nést všechny čtyři druhy; každý typ uvádí svou třídu IFC (IfcWallType, IfcSlabType, IfcCoveringType). Typ podlahy, střechy nebo stropu, který prvky používají, se z balíčku nenahrazuje: změňte jej v editoru typů.

## Jeden typ jako položka knihovny

Zaškrtněte přesně jeden typ a vyberte **Uložit jako položku knihovny…**. Uloží se soubor `.cctype.json`: položka knihovny druhu Typy, která obsahuje ten jeden typ (jeho vrstvy, materiály, LOD a klasifikační kódy). Nahrajte jej do knihovny, chcete-li jej sdílet. **Otevřít balíček nebo soubor IFC** čte i takovou položku a přidá její typ do projektu jako balíček.

## Dobré vědět

- IFC soubor z jiného programu lze otevřít i zde. Každý jeho typ stěny, který má vrstvy materiálu, se načte: název, materiály a tloušťky vrstev a případná dutina jsou vlastní hodnoty souboru. Které vrstvy jsou jádro a co která vrstva dělá (povrch, konstrukce, izolace), se odhaduje, typ je označen **(odhadnuto)** a měli byste jej zkontrolovat v editoru typu stěny. Typ stěny bez vrstev se vynechá a pojmenuje se.
- Materiál, který projekt už má, zůstane beze změny. Nový materiál, jehož název je obsazen, dostane za název „(balíček)“.
- Typ, který stěny používají, se z balíčku nikdy nenahradí. Změňte jej v editoru typu stěny, který přesune jeho stěny správně.
- Kód nastavený na jedné stěně necestuje: patří té stěně. Kód nastavený na typu ano.
- Soubor s polem, které formát nemá, vrstvou, jejíž materiál chybí, nebo čímkoli, co není prostý text, se odmítne a zpráva řekne kde a proč.
- Zatím není hotovo: typy podlah, střech a stropů (v této verzi nemají typy: každý má vlastní tloušťku), typy dveří a oken jiné než rodiny, a šrafy nebo barvy ze souboru jiného programu.

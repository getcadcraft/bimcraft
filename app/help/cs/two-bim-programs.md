---
title: Práce mezi dvěma programy BIM
summary: Pošlete model z jednoho programu BIM do druhého přes IFC s BimCraftem uprostřed, zachovejte jeho GlobalId, sady vlastností a klasifikace, nastavte oba programy na stejné vlastnosti a zjistěte, co se vrátilo.
keywords: ifc, obousměrný převod, interoperabilita, globalid, guid, sady vlastností, psets, klasifikace, sdílené parametry, mapování vlastností, překladač, bcf, koordinace, výměna
from: 9f224176
---

## Co uděláte

Přesuňte model mezi dvěma programy BIM, například z Revitu do Archicadu a zpět, přes IFC, s BimCraftem uprostřed pro kontrolu, doplnění a přehled toho, co se zachovalo. Vlastní formát souboru žádného z programů se nečte: vše putuje jako IFC.

## Co BimCraft zachová

Když změníte model v BimCraftu a kliknete na {{ui:Uložit jako IFC}}, každý řádek, který jste nezměnili, se zapíše zpět přesně tak, jak byl. Tedy:

- **GlobalId** zůstanou stejné, takže druhý program může přiřadit každý prvek k tomu, který odeslal.
- **Sady vlastností** a jejich hodnoty zůstanou, kromě hodnot, které jste změnili.
- **Klasifikace** zůstanou připojeny ke svým prvkům.

## Nastavení obou programů na stejné vlastnosti

1. Otevřete model v BimCraftu (a projektový balíček, pokud ho máte: jeho skupiny vlastností se přidají).
2. V levém panelu otevřete {{ui:Mezi dvěma programy BIM}}.
3. Pod **Mapování vlastností** stáhněte, co každý program potřebuje:
   - {{ui:Sdílené parametry}}: soubor sdílených parametrů. V Revitu jej načtěte přes Spravovat › Sdílené parametry a přidejte parametry do kategorií, které je potřebují.
   - {{ui:Sady vlastností exportu IFC}}: soubor sad vlastností definovaných uživatelem. V nastavení exportu IFC v Revitu jej vyberte u uživatelem definovaných sad vlastností, aby exportované IFC neslo stejné názvy sad a vlastností.
   - {{ui:Tabulka mapování (CSV)}}: každá vlastnost s její sadou a názvem IFC, typem a odpovídajícími názvy v každém programu. Mapovací soubory Archicadu nejsou zveřejněným formátem, takže jeho překladač IFC a správce vlastností nastavte z této tabulky ručně.
   - {{ui:Soubor mapování}}: celé mapování jako jeden soubor, který uchováte s projektem.

Standardní sady (Pset_ a Qto_) jsou ze souboru sdílených parametrů vynechány: oba programy je zapisují z vlastních dat.

## Odeslání modelu a jeho návrat

1. Exportujte IFC z prvního programu se zachovanými GlobalId (Revit: zapněte „Uložit IFC GUID do parametru prvku po exportu“).
2. Otevřete jej v BimCraftu, zkontrolujte ({{ui:Kontroly modelu}}, {{ui:Kontrola kolizí}}), přidejte problémy ({{ui:Problémy}}, BCF), v případě potřeby změňte hodnoty a klikněte na {{ui:Uložit jako IFC}}.
3. Otevřete uložené IFC ve druhém programu, pracujte na něm a exportujte IFC odtud se zachovanými GlobalId (překladač Archicadu: „Global Unique Identifiers: Keep existing“).
4. Zpět v BimCraftu otevřete model, který odešel, a přidejte ten, který se vrátil ({{ui:Přidat model}} v části Modely).
5. V {{ui:Mezi dvěma programy BIM}} vyberte **Odesláno** a **Vráceno** a klikněte na {{ui:Vytvořit přehled}}.

## Čtení přehledu

- **Prvky**: kolik se vrátilo se stejným GlobalId, kolik chybí a kolik je nových. Prvky s novým GlobalId se ukážou jako jeden chybějící a jeden nový: druhý program jej neudržel.
- **Změněna třída IFC**: prvky, které se vrátily jako jiný druh prvku.
- **Zachované hodnoty vlastností**: podíl hodnot, které se vrátily beze změny. Seznam níže ukazuje vlastnosti s nejvíce změněnými nebo chybějícími hodnotami.
- **Klasifikace**: zachované, změněné (stejný systém, jiný kód) nebo chybějící.

{{ui:Stáhnout přehled (CSV)}} dá každou vlastnost s jejími počty. Chcete-li zjistit, které prvky se přesunuly nebo změnily tvar, použijte {{ui:Porovnat verze}} na stejné dva modely.

:::note
BimCraft neprovozuje žádný z těchto programů. Které nastavení přenese hodnotu, závisí na nastavení IFC každého programu: přehled ukazuje, co se skutečně vrátilo, takže zkuste nastavení, exportujte znovu a porovnejte.
:::

## Problémy se přenášejí jako BCF

Problémy, které v BimCraftu založíte, se exportují jako BCF ({{ui:Problémy}}), který oba programy čtou svými nástroji BCF, takže dotaz na prvek se i s pohledem dostane k člověku pracujícímu v druhém programu.

Viz také [Otevření projektového balíčku](topic:open-project-bundle), [Z projektového souboru do BimCraftu přes IFC](topic:rvt-to-ifc) a [Porovnání dvou verzí modelu](topic:compare-versions).

---
title: Vyberte prvek a přečtěte jeho vlastnosti
summary: Klikněte na libovolný prvek ve 3D modelu, zvýrazněte jej a přečtěte si jeho název, typ, značku, GlobalId, sady vlastností a množství.
keywords: vlastnosti, výběr, vybrat, prvek, klik, parametry, sady vlastností, pset, množství, globalid, guid, typ, prohlížet
from: 43b80aa8
---

## Co uděláte

Vyberte prvky v modelu IFC a přečtěte si vše, co o nich soubor uvádí: atributy, sady vlastností, vlastnosti typu a množství.

## Postup

1. Otevřete model IFC.
2. Klikněte na prvek, například na dveře. Klikejte bez tažení: tažení přes několik pixelů otáčí pohled místo výběru.
3. Prvek je zvýrazněn modře.
4. Podívejte se na panel {{ui:Vlastnosti}} vpravo. Nahoře je druh prvku (například "Door" nebo "WallStandardCase") a jeho název.
5. Přečtěte první blok: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** a **Line** (Název, Typ, Typ objektu, Značka, Popis, GlobalId a Řádek).
6. Přejděte dolů k sadám vlastností. První tři jsou otevřené; kliknutím na název jakékoli další sady ji otevřete.
7. Kliknutím na jiný prvek přepnete na něj.
8. Stiskněte {{key:Esc}}, nebo klikněte na prázdné pozadí, a výběr zrušte.

## Co byste měli vidět

- Zvýrazněný prvek a jeho údaje vpravo.
- Sady vlastností v abecedním pořadí. Sady, které pocházejí z **typu** prvku, mají za názvem " (typ)" a poznámku "Vlastnost typu: změna se použije na každý prvek tohoto typu."
- Sady množství (délky, plochy a objemy) uvedené mezi ostatními sadami. Množství jsou jen pro čtení.
- Hodnoty, které můžete měnit, vypadají jako tlačítka. [Změna vlastností IFC a uložení upravené kopie](topic:edit-ifc-properties) ukazuje, jak na to.

[Políčka panelu Vlastnosti](topic:properties-panel) vysvětluje každé políčko.

## Přístup ke skrytým prvkům

1. Chcete-li se dostat dovnitř budovy, odškrtněte podlaží nad ním v seznamu {{ui:Podlaží}}.
2. Chcete-li se dostat ke stěně za objemem místnosti, vypněte {{ui:Prostory}}.
3. Klikněte na prvek.

## Časté chyby

- **Mírné tažení při kliknutí.** BimCraft to bere jako otočení a nevybere. Držte myš v klidu.
- **Očekávání jednotek vedle čísel.** Hodnoty se zobrazují tak, jak jsou uloženy v souboru, zaokrouhlené na čtyři desetinná místa, bez značky jednotky. Délky v metrickém exportu bývají v milimetrech nebo metrech; zkontrolujte nastavení exportéru.
- **Hledání parametru podle známého názvu.** Exportéry přejmenovávají a přeskupují parametry do sad vlastností IFC, například `Pset_WallCommon`. Procházejte každou sadu; vlastní parametry často sídlí v sadě pojmenované podle exportujícího programu nebo vaší firmy.
- **Očekávání vyhledávacího pole.** Klikněte pro výběr prvku; {{key:Mod}}+klik nebo {{key:Shift}}+klik vybere další a {{key:Mod+A}} vybere každý zobrazený prvek. Seznam {{ui:Prvky}} vlevo jen počítá prvky podle druhu; na kliknutí nereaguje.
- **Výběr na kartě projektového souboru.** Karta souboru nemá prvky k výběru: "Vlastnosti prvku vyžadují 3D model. Otevřete export IFC tohoto souboru, abyste je viděli."

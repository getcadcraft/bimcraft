---
title: Úroveň rozvoje (LOD) a kontroly milníků
summary: Přiřaďte prvkům úroveň rozvoje, zjistěte, odkud pochází, zkontrolujte model vůči úrovni, kterou vyžaduje milník, a opravte chybějící štítky a nepojmenované místnosti. Každá kontrola jen radí; nic se neblokuje.
keywords: lod, úroveň rozvoje, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, milník, tabulka milníků, kontroly modelu, chybějící štítky, nepojmenované místnosti, obecné v rané fázi, třída IFC, klasifikace
from: 2091c79b
---

## Co uděláte

Určete, jak daleko je každý prvek rozpracován, a poté zkontrolujte celý model vůči tomu, co požaduje milník projektu.

## Postup

1. Vyberte prvek (nebo více prvků) a otevřete {{ui:Properties}}. Najděte {{ui:Level of development}}.
2. Vyberte úroveň ze seznamu. Každá úroveň je pojmenována podle toho, co znamená, a zahrnuje všechny úrovně pod sebou. Jeden krok zpět se týká celé volby.
3. Zjistěte, odkud úroveň pochází: z tohoto prvku, z jeho typu, nebo z označení ověřeného na místě.
4. Pro kontrolu modelu otevřete na levé straně {{ui:Model checks}} a poté Milníky LOD. Vyberte milník a tabulku (výchozí tabulku, nebo svůj soubor CSV či JSON načtený pomocí {{ui:Load}}).
5. Klikněte na Zkontrolovat model. Součty a řádek pro každý řádek tabulky ukazují, co dosáhlo své úrovně a co ne; nálezy se zobrazí také v seznamu problémů.
6. V části {{ui:Missing tags and unnamed rooms}} klikněte na Najít je, případně upravte návrhy a klikněte na {{ui:Apply}}.

## Co uvidíte

- Úroveň, kterou jste zvolili u prvku, s jeho třídou IFC a kódy klasifikace vedle ní.
- Součty a řádky pro milník. Tabulka nikdy nemění význam úrovně: měřítko je pevné, tabulka jen říká, kterou úroveň milník vyžaduje.
- „Zůstat obecný v rané fázi“: rada ponechat prvky obecné v rané fázi milníku. Je to jen rada.

## Dobré vědět

- Nic tu neblokuje. Model pod úrovní, kterou milník vyžaduje, je uveden v seznamu, ale není odmítnut.
- Tři části úrovně (geometrie, informace, dokumentace) lze nastavit každou zvlášť; značka ukazuje splněno, nedosaženo nebo neuvedeno.

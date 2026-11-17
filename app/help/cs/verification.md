---
title: Označte prvky jako zkontrolované nebo ověřené na stavbě
summary: Prvek načtený z PDF nebo skenu je neověřený, dokud jej nezkontrolujete. Označte prvky jako zkontrolované, nebo jako ověřené na stavbě (LOD 500) s uvedením, kdo je změřil, kdy a jak, a předejte model skutečného provedení, který rozlišuje, které je které.
keywords: neověřený, ověřený, zkontrolovaný, ověřený na stavbě, skutečné provedení, LOD 500, uzavření, předání, změřeno na místě, pásmo, laser, sken, zaměření, stávající budova, přestavba, označit jako zkontrolované, ověření, fáze 7
from: df35d908
---

## Co provedete

Sledujte, co v modelu někdo skutečně zkontroloval. Prvek má jednu ze tří značek, nebo žádnou:

- **Neověřený**: program jej rozpoznal z PDF, naskenovaného výkresu, překresleného výkresu nebo ze skenu mračna bodů. Zatím jej nikdo nezkontroloval.
- **Zkontrolovaný**: člověk jej porovnal s výkresem, ze kterého pochází.
- **Ověřený na stavbě (LOD 500)**: člověk jej změřil na stavbě. Kdo, kdy a jak, je u něj uloženo.
- **Bez značky**: nakreslil člověk. Model o něm netvrdí nic.

## Postup

1. Vyberte jeden prvek, nebo více (stěny, dveře, okna, místnosti, libovolný prvek).
2. V {{ui:Vlastnosti}} otevřete {{ui:Ověření}}.
3. Napište, kdo jej zkontroloval nebo změřil. Datum je dnešní, pokud jej nezměníte.
4. Klikněte na {{ui:Označit jako zkontrolované}}. U měření na stavbě vyberte, jak bylo změřeno (pásmo, laserový dálkoměr, sken, zaměření), a klikněte na {{ui:Označit jako ověřené na stavbě (LOD 500)}}.
5. {{ui:Označit jako neověřené}} a {{ui:Odebrat označení}} označení ruší. Každé kliknutí je jeden krok, který lze vrátit zpět, a to pro celý výběr.

Rychlé označení výběru: {{ui:Nástroje}} › {{ui:Označit jako zkontrolované}} (zadáním: `MARKCHECKED`) jej označí jako zkontrolovaný vámi, dnes.

## Co uvidíte

- V půdorysu má neověřený prvek přerušovaný rámeček a "?"; ověřený na stavbě má fajfku. Chcete-li je skrýt, odškrtněte {{ui:Zobrazit v půdorysu značky ověření}} v sekci {{ui:Audit}}.
- {{ui:Rozpisy}} › {{ui:Ověření}} vypíše každý označený prvek s jeho úrovní, stavem, kým, kdy, jak a odkud pochází.
- Audit vypíše neověřené prvky a ověřený na stavbě prvek počítá jako LOD 500. Viz [Audit modelu](topic:audit-the-model).

## Ze skenu

Když porovnáváte sken s modelem, {{ui:Označit odpovídající prvky jako ověřené na stavbě}} označí každý prvek, který sken zachytil jako postavený v rámci tolerance, s metodou "sken" a tolerancí v poznámce. Viz [Porovnat sken s modelem](topic:compare-scan-with-model).

:::warning
Porovnání páruje rámeček každého prvku s body skenu. Není to zaměření. Používejte je pro prvky, které jste také sami zkontrolovali.
:::

## Model skutečného provedení a předávací balíček

{{ui:Sestavit předávací balíček}} na kartě {{ui:Podklady}} vloží model skutečného provedení do souboru ZIP s:

- souhrnem v projektu, kolik prvků je ověřeno na stavbě, zkontrolováno, neověřeno a bez značky;
- `as-built/verified-elements.csv`: každý prvek a místnost s jejich stavem, kým, kdy a jak;
- `as-built/as-built-drawings.pdf`: sada výkresů tak, jak je nyní;
- changelogem výkresů, je-li model vydal sady.

Viz [Podklady a údržba](topic:assets-and-maintenance).

## Jak se uchovává v IFC

Každý označený prvek nese sadu vlastností `CadCraft_Verification`: State, By, On, Method, Source, Note a LevelOfDevelopment (`LOD 500` při ověření na stavbě). Jsou to prosté textové vlastnosti, takže je ostatní programy vypíšou a mohou je použít Najít, Barva podle vlastnosti i rozpisy podle značek. Souhrn skutečného provedení je sada vlastností `CadCraft_AsBuilt` na projektu. Prvek bez této sady nebyl změřen na stavbě.

## Dále

- [Stěny ze sady půdorysů](topic:walls-from-plans)
- [Audit modelu](topic:audit-the-model)

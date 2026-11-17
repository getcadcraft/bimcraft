---
title: Změna vlastností IFC a uložení upravené kopie
summary: Změňte název, značku, popis nebo hodnotu vlastnosti prvku, vraťte změnu zpět a stáhněte nový soubor IFC, zatímco originál zůstane beze změny.
keywords: upravit, změnit, vlastnosti, parametry, značka, název, přejmenovat, označení, uložit jako, stáhnout, zpět, kopie, ifc, zapsat
from: f8035d62
---

## Co uděláte

Opravte údaje v modelu IFC: přejmenujte prvek, opravte jeho značku, změňte hodnotu vlastnosti. Potom uložte nový soubor IFC se svými změnami. Soubor, který jste otevřeli, se nikdy nedotkne.

## Co můžete změnit

| Pole | Lze upravit |
|---|---|
| Název, Typ objektu, Značka, Popis | Ano |
| Jednotlivé hodnoty vlastností (text, čísla, Ano/Ne) | Ano |
| Vlastnosti typu (sady označené „(typ)“) | Ano, a změna platí pro každý prvek tohoto typu |
| Typ, GlobalId, Řádek | Ne |
| Množství (délky, plochy, objemy, počty) | Ne |
| Seznamy, výčty a jiné hodnoty s více částmi | Ne |
| Geometrie, poloha, přidávání nebo mazání prvků | Ne |

## Postup

1. Otevřete model IFC a klikněte na prvek, který chcete změnit.
2. V panelu {{ui:Vlastnosti}} klikněte na hodnotu, kterou chcete změnit. Změní se na textové pole. Prázdná hodnota se ukáže jako *prázdná*.
3. Napište novou hodnotu.
4. Stiskněte {{key:Enter}}, nebo klikněte jinam, čímž ji ponecháte. {{key:Esc}} zruší.
5. Podívejte se na hodnotu: je nyní tučně, s modrým pruhem vedle, který označuje upravenou hodnotu.
6. Podívejte se do sekce {{ui:Změny}} vlevo: změna je uvedena jako *prvek*: *pole*, stará hodnota na novou hodnotu.
7. Opakujte pro další hodnoty nebo další prvky.
8. Klikněte na {{ui:Uložit jako IFC}} (ukáže, kolik změn čeká, například „Uložit jako IFC (3)“), nebo stiskněte {{key:Mod+S}}.
9. Najděte „*původní název* (edited).ifc“ ve složce stažených souborů.

## Co byste měli vidět

Stavový řádek říká: „Uloženo *název* (edited).ifc s *n* změnami (… bajtů). Váš původní soubor je beze změny.“ Seznam {{ui:Změny}} se vyprázdní, připravený na další kolo.

## Druhy hodnot

- **Text**: cokoli napíšete, se zachová tak, jak je. Vymazání Názvu, Typu objektu, Značky nebo Popisu hodnotu odstraní.
- **Čísla**: napište prosté číslo, například `2.4` nebo `1200`, v jednotkách souboru. Bez symbolů jednotek. Cokoli jiného ukáže „Zadejte číslo.“
- **Celá čísla** (počty, celočíselné hodnoty): „Zadejte celé číslo.“, pokud napíšete desetinné číslo.
- **Ano/Ne**: hodnota se změní na nabídku s Ano a Ne.

Každá hodnota si zachová svůj typ IFC, takže číslo zůstane číslem a jiné programy jej čtou správně.

## Zpět

1. Klikněte na {{ui:Zpět}} v sekci {{ui:Změny}}, nebo stiskněte {{key:Mod+Z}}, když zrovna nepíšete do pole.
2. Opakujte pro další zpět. Každé zpět odstraní nejnovější změnu.

Nemůžete se vrátit přes uložení: po uložení seznam začíná znovu. Uložený soubor si uchová vše.

## Proč vaše úprava mění jen jeden prvek

Exportéry šetří místo sdílením dat. Jedna sada vlastností může být sdílena dvaceti dveřmi a jedna hodnota („Požární odolnost: 60 min“) může být uvedena v devadesáti sadách. Kdyby BimCraft jednoduše změnil sdílenou hodnotu, změnily by se i všechny prvky, které ji sdílejí.

Proto BimCraft před zápisem kopíruje:

- Pokud je sada vlastností, kterou upravujete, sdílená s dalšími prvky, váš prvek dostane vlastní kopii sady a změní se jen kopie.
- Pokud je hodnota sdílená s dalšími sadami, vaše sada dostane vlastní kopii hodnoty.

Sousedé si ponechají svá stará data. Tomu se říká *copy-on-write* (kopírování při zápisu). Přidá to několik malých záznamů do souboru, které každý program IFC čte normálně.

**Vlastnosti typu jsou záměrně výjimka.** Sada označená „(typ)“ patří typu prvku a v IFC z něj každý prvek daného typu čte. Změna ji změní u typu, takže každý prvek typu ukáže novou hodnotu. Seznam {{ui:Změny}} takové úpravy označí „(typ)“. Viz [Změna vlastnosti typu pro všechny prvky daného typu](topic:type-vs-instance).

## Upozornění před ztrátou práce

- Otevření jiného souboru s neuloženými změnami se zeptá: „Máte *n* neuložených změn v souboru *file*. Zahodit je?“ Klikněte na {{ui:Zrušit}}, pokračujte v práci a pak uložte.
- Zavření nebo znovunačtení karty s neuloženými změnami způsobí, že se prohlížeč zeptá, zda chcete odejít.

## Časté chyby

- **Psaní jednotek.** `2400 mm` je odmítnuto. Napište `2400`.
- **Změna vlastnosti typu, když jste chtěli jeden prvek.** Před psaním hledejte poznámku „(typ)“. Chcete-li, aby se jeden prvek lišil, změňte vlastnost instance nebo jeho Značku či Název.
- **Očekávání, že se změní původní soubor.** Uložení vždy stáhne nový soubor. Originál nahraďte sami, pokud to chcete, a ponechte si kopii.
- **Stisk {{key:Mod+S}} bez změn.** BimCraft ukládá jen tehdy, když je co ukládat; jinak se může otevřít vlastní „Uložit stránku“ prohlížeče. Zavřete ji.
- **Uložení dvakrát a očekávání dvou malých souborů.** Každé uložení obsahuje každou úpravu od otevření modelu.
- **Očekávání, že se úpravy vrátí do souboru projektu.** BimCraft zapisuje jen IFC. Upravené IFC přeneste do svého autorského programu stejně, jako importujete jakékoli IFC.

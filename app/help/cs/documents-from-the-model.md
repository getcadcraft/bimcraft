---
title: Dokumenty z modelu
summary: Napište specifikaci nebo popis jednou jako šablonu, s poli pro množství, vlastnosti a štítky, a vyplňte ji z otevřeného IFC jako PDF nebo dokument Word.
keywords: dokument, dokumenty, specifikace, popis, šablona, markdown, zpráva, word, docx, pdf, množství, výkaz, profese, výkaz dveří, povrchové úpravy, documentcad
from: 2b0c9156
---

## Co provedete

Šablona je text v Markdownu s poli ve dvojitých složených závorkách. BimCraft vyplní pole z otevřeného modelu (počty, množství podle typu, vlastnosti, vaše [štítky](topic:tags-and-schedules)) a výsledek uloží jako PDF, dokument Word (.docx) nebo Markdown.

## Postup

1. Otevřete model IFC.
2. V levém panelu, pod {{ui:Množství}}, otevřete {{ui:Dokumenty z modelu}}.
3. Vyberte šablonu: {{ui:Dveře a kování}} nebo {{ui:Stěny, obklady a povrchové úpravy}}, nebo {{ui:Načíst šablonu (.md)…}} pro vlastní.
4. Pokud šablona čte štítky, které model ještě nedefinuje, klikněte na {{ui:Přidat štítky této šablony}} a pak označte prvky pod {{ui:Štítky}}.
5. Text upravte, jak chcete, a klikněte na {{ui:Zobrazit dokument}}.
6. Klikněte na {{ui:PDF}} (nejprve vyberte A4 nebo Letter) nebo na {{ui:Word (.docx)}}.

## Co byste měli vidět

- Vyplněný dokument pod tlačítky, s tabulkami.
- Seznam varování, když pole nelze přečíst (štítek, který není definován, vlastnost, kterou model nemá, blok, který se nikdy neuzavře); takové pole se vytiskne jako `[?…]`.
- Stránky PDF s názvem dokumentu a "Strana 1 z 3" v patě každé stránky; dlouhé tabulky přecházejí na další stránku se záhlavím řádků.

## Pole

| Pole | Vrací |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | název projektu a jeho popis, název souboru, dnešní datum |
| `{{count IfcDoor}}` | kolik je dveří |
| `{{sum IfcWall NetSideArea}}` | součet s jeho jednotkou |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` a závorky) nad členy v hranatých závorkách: `[sum …]`, `[count …]` a uvnitř each `[qty Width]`. `round n` nastaví desetinná místa, `unit` přidá jednotku. Něco, co nelze přečíst, nebo dělení nulou, se vytiskne jako `[?…]` a vydá varování |
| `{{qty IfcWall NetSideArea by Type}}` | tabulka: jeden řádek na typ s jeho počtem a součtem, a řádek celkem |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabulka, jeden řádek na prvek |
| `{{tag Finish}}` | ve smyčce hodnota prvku; jinde každá použitá hodnota (Dub, Barva) |
| `{{tags}}` | definice štítků jako tabulka |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | text jednou pro každý prvek; část za `{{else}}`, když žádné nejsou |
| `{{#group IfcWall by Type}} … {{/group}}` | text jednou pro každý typ, s `{{value}}`, `{{count}}`, `{{sum Length}}` a prostým `{{#each}}` uvnitř |

Uvnitř `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (vlastní hodnota prvku, s jednotkou).

Tříd může být několik (`IfcDoor|IfcWindow`), nebo všechny prvky (`*`). Kteroukoli z nich zúžíte pomocí `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testy jsou `=`, `!=`, `~` (obsahuje), `>`, `<`, `>=`, `<=`, `has` a `hasnot`; několik spojte pomocí `and`; hodnotu s mezerami uveďte v "uvozovkách". `sort Name` seřadí smyčku.

## Výkazy a specifikace v dokumentu

`{{schedule doors}}` vytiskne výkaz modelu jako tabulku ve vašem kancelářském rozvržení: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, nebo název nastavení, které jste uložili ve **Výkazech**. `{{specification}}` vytiskne specifikaci projektu. Šablony **Výkresové výkazy** a **Specifikace** je používají. V náhledu klikněte na číslo z takového výkazu a vyberte prvky, ze kterých pochází. Viz [Rozvržení, uložení a export výkazu](topic:schedule-layouts) a [Napsání specifikace z modelu](topic:specification).

## Dobré vědět

- Pole pojmenuje vestavěný údaj (Name, Type, Storey, Class, Material, Mark), štítek (`tag:Fire rating`, nebo jeho název), vlastnost (`Pset_WallCommon.FireRating`), nebo jen název vlastnosti (`NetSideArea`, `Width`): holé jméno čte vlastní sadu každého prvku, nejprve sady množství, takže `Width` u dveří je šířka dveří, ne tloušťka stěny. Uvnitř `where` holé jméno čte sadu, kterou má většina vybraných prvků.
- Množství je to, co říkají sady množství souboru (BimCraft je zapisuje pro to, co kreslí); jednotky pocházejí z nastavení jednotek souboru.
- Slova polí (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) zůstávají v angličtině ve všech jazycích. Ukázkové šablony jsou v angličtině.
- Text z modelu se nikdy nestane formátováním: název s `*` nebo `|` se vytiskne tak, jak je.
- Šablonu, kterou jste změnili, uchovejte pomocí {{ui:Ponechat v tomto prohlížeči}} (má ji jen tento prohlížeč), nebo pomocí {{ui:Stáhnout šablonu}}.
- Text PDF používá standardní písma PDF: znak mimo západoevropský text se vytiskne jako "?" a stavový řádek řekne, kolik jich bylo.
- Šablony podle profese žijí v Knihovně (druh Šablona dokumentu). V Dokumentech z modelu zvolte **Z knihovny…**, vyberte jednu a přijdou její text a štítky, které čte; upravte ji, jak chcete. Zveřejnění vlastní šablony v Knihovně je stejné nahrání jako u jakékoli jiné položky. **Ještě není hotovo**: výpočty nad rámec počtů a součtů.

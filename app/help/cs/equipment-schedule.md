---
title: Sestavení rozpisu zařízení a export do CSV
summary: Převeďte značky položek ve výkrese stravovacího provozu na rozpis zařízení, filtrujte jej, přejděte na každou položku na jejím listu a stáhněte jej jako CSV.
keywords: zařízení, rozpis, stravovací provoz, kuchyně, značky položek, kcl, atributy, kusovník, bom, kusovník materiálu, csv, tabulka, export, extrakce dat
from: e3faa1c8
---

## Co provedete

Načtěte seznam zařízení z výkresu kuchyně nebo stravovacího provozu, zkontrolujte jej, najděte každou položku na plánu a stáhněte jej jako soubor tabulky.

Tento postup funguje u výkresů, jejichž značky zařízení nesou data jako atributy bloků, jak je to u knihoven kuchyňského návrhu, například KCL: každá značka obsahuje číslo položky (`KCL-ITEM`), množství, kategorii, výrobce, model, elektrická a instalatérská data a poznámky. Ostatní výkresy nemají záložku {{ui:Equipment}}.

## Postup

1. Otevřete výkres, ideálně z jeho složky projektu, aby se načetly i jeho propojené výkresy.
2. Klikněte na záložku {{ui:Equipment}} nad výkresem. Její popisek ukazuje, kolik položek je na listech, například „Zařízení (88)“.
3. Přečtěte rozpis: **Položka**, **Množství**, **Zařízení**, **Výrobce**, **Model**, **Elektro**, **Zdravotechnika** a **Kde**.
4. Vyberte, co vypsat, v nabídce nad tabulkou: **Každý list**, jeden list, **Není na žádném listu**, nebo **Vše označené ve výkresu**. Každá volba ukazuje svůj počet.
5. Do pole filtru („Filtr: kategorie, výrobce, model…“) napište, čím chcete seznam zúžit, například `refrigerator` nebo `208`.
6. Klikněte na název listu ve sloupci **Kde** u položky.
7. Podívejte se na výkres: BimCraft přepne na ten list, přiblíží na položku a kolem ní nakreslí kroužek. Stavový řádek říká: „Položka *n*, *kategorie* je označena na listu *list*.“
8. Klikněte na {{ui:Equipment}} a vraťte se k rozpisu.
9. Klikněte na {{ui:Download CSV}}.

## Výsledek

- Soubor s názvem „*název výkresu* equipment.csv“ (s názvem listu v závorce, když jste vypsali jeden list) ve složce stažených souborů. Lze jej otevřít v Excelu, Numbers, LibreOffice nebo Google Tabulkách.
- Stavový řádek: „Staženo *název souboru* (*n* položek).“

CSV má tyto sloupce: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (kolik značek). Stáhne přesně ty řádky, které tabulka ukazuje, po nabídce a filtru.

## Jak se rozpis sestavuje

- Čte se ze **samotných značek**, ne z rozpisu nakresleného na listu. Poznámka nad tabulkou říká, kolik značek bylo načteno.
- Jeden řádek je jedno číslo položky s jednou sadou dat. Jeho množství je **součet** jeho značek, jak to dělá vytištěný rozpis: police označená „5“ na jednom místě a „3“ na jiném je 8, zobrazeno jako „5 + 3“.
- **Kde** uvádí listy, na nichž je každá položka zobrazena, podle toho, co ukazují výřezy každého listu, tedy co se tiskne. „Model only“ znamená, že žádný list ji nezobrazuje.
- **Číslo použito dvakrát** označuje jedno číslo položky u dvou různých kusů zařízení. Řádek má oranžové označení.
- Značky, které žádný list nezobrazuje, jsou odděleny pod **Není na žádném listu**. Často zůstávají z dřívějších plánů nebo jiných zakázek a nikdy se nesmísí do **Každý list**.
- **Elektro** ukazuje ampéry, kW, HP, volty, fázi, připojení a zástrčku tak, jak jsou označeny. **Zdravotechnika** ukazuje velikosti připojení: CW studená voda, HW teplá voda, DD přímý odpad, ID nepřímý odpad a plyn. Ostatní pole značek se zatím nezobrazují.

## Časté chyby

- **Chybí záložka {{ui:Equipment}}.** Výkres nemá značky `KCL-ITEM`, nebo je jeho zařízení nakresleno bez dat. Není co načíst.
- **Počty se liší od vytištěného rozpisu.** Vytištěný rozpis může uvádět náhradní čísla nebo kratší názvy než značky. Pro to, co je umístěno, věřte značkám; rozdíly ověřte s projektantem.
- **Otevřený CSV ukazuje divné znaky.** Soubor je v UTF-8. Otevřete jej příkazem importu vašeho tabulkového programu a zvolte UTF-8, pokud se program zeptá.
- **Buňka začíná apostrofem.** Hodnoty začínající na `=`, `+`, `-` nebo `@` dostanou úvodní `'`, aby je tabulkové programy nespouštěly jako vzorce.
- **{{key:F}} a {{key:P}} nedělají nic.** Působí na výkres, ne na rozpis. Nejprve klikněte na záložku listu.

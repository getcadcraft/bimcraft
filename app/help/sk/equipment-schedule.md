---
title: Vytvorte tabuľku vybavenia a exportujte CSV
summary: Premeňte označenia položiek vo výkrese pohostinského zariadenia na tabuľku vybavenia, filtrujte ju, prejdite na každú položku na jej liste a stiahnite ju ako CSV.
keywords: vybavenie, tabuľka, pohostinstvo, kuchyňa, označenia položiek, kcl, atribúty, kusovník, bill of materials, csv, tabuľkový hárok, export, extrakcia dát
from: e3faa1c8
---

## Čo urobíte

Načítajte zoznam vybavenia z výkresu kuchyne alebo pohostinského zariadenia, skontrolujte ho, nájdite každú položku v pôdoryse a stiahnite ho ako tabuľkový súbor.

Funguje to na výkresoch, kde označenia vybavenia nesú svoje údaje ako atribúty blokov, ako to robia knižnice kuchynského návrhu, napríklad KCL: každé označenie obsahuje číslo položky (`KCL-ITEM`), množstvo, kategóriu, výrobcu, model, elektrické a vodoinštalačné údaje a poznámky. Ostatné výkresy nemajú záložku {{ui:Equipment}}.

## Postup

1. Otvorte výkres, ideálne z jeho priečinka projektu, aby sa načítali aj jeho prepojené výkresy.
2. Kliknite na záložku {{ui:Equipment}} nad výkresom. Jej názov ukazuje, koľko položiek je na listoch, napríklad "Vybavenie (88)".
3. Prečítajte tabuľku: **Položka**, **Množstvo**, **Vybavenie**, **Výrobca**, **Model**, **Elektro**, **Vodoinštalácia** a **Kde**.
4. Vyberte, čo chcete vypísať, v ponuke nad tabuľkou: **Každý list**, jeden list, **Nie je na žiadnom liste** alebo **Všetko označené vo výkrese**. Každá voľba zobrazuje svoj počet.
5. Do poľa filtra zadajte ("Filter: kategória, výrobca, model…") na zúženie zoznamu, napríklad `refrigerator` alebo `208`.
6. Kliknite na názov listu v stĺpci **Kde** pri položke.
7. Pozrite sa na výkres: BimCraft prepne na tento list, priblíži položku a okolo nej nakreslí krúžok. Stavový riadok hlási "Položka *n*, *category* je obkrúžená na *sheet*."
8. Kliknutím na {{ui:Equipment}} sa vrátite k tabuľke.
9. Kliknite na {{ui:Download CSV}}.

## Čo uvidíte

- Súbor s názvom "*drawing name* equipment.csv" (s názvom listu v zátvorkách, ak ste vypísali jeden list) v priečinku sťahovania. Otvorí sa v Exceli, Numbers, LibreOffice alebo Google Tabuľkách.
- Stavový riadok: "Súbor *file name* bol stiahnutý (*n* položiek)."

CSV má tieto stĺpce: Položka, Množstvo, Kategória, Výrobca, Model, Elektro, Vodoinštalácia, Poznámky, Poznámky k elektre, Poznámky k vodoinštalácii, Listy, Umiestnené (počet označení). Stiahne presne tie riadky, ktoré tabuľka zobrazuje, po výbere z ponuky a po filtri.

## Ako sa tabuľka vytvára

- Číta sa priamo z **označení**, nie z tabuľky vykreslenej na liste. Poznámka nad tabuľkou hovorí, koľko označení sa načítalo.
- Jeden riadok je jedno číslo položky s jednou sadou údajov. Jeho množstvo je **súčet** jeho označení, tak ako ho počíta vytlačená tabuľka: regál označený "5" na jednom mieste a "3" na inom je 8, zobrazený ako "5 + 3".
- **Kde** uvádza listy, na ktorých sa položka zobrazuje; určuje sa z toho, čo zobrazujú výrezy každého listu, teda to, čo sa tlačí. "Iba model" znamená, že žiadny list ju nezobrazuje.
- **Číslo použité dvakrát** označuje jedno číslo položky pri dvoch rôznych kusoch vybavenia. Riadok má jantárovú značku.
- Označenia, ktoré žiaden list nezobrazuje, sú oddelené pod **Nie je na žiadnom liste**. Často zostali z predchádzajúcich plánov alebo iných zákaziek a nikdy sa nezmiešajú s **Každý list**.
- **Elektro** zobrazuje ampéry, kW, HP, volty, fázu, pripojenie a zástrčku tak, ako sú označené. **Vodoinštalácia** zobrazuje veľkosti prípojok: CW studená voda, HW teplá voda, DD priamy odtok, ID nepriamy odtok a plyn. Ostatné polia označení sa zatiaľ nezobrazujú.

## Časté chyby

- **Žiadna záložka {{ui:Equipment}}.** Výkres nemá označenia `KCL-ITEM` alebo je jeho vybavenie nakreslené bez údajov. Nie je čo načítať.
- **Počty sa líšia od vytlačenej tabuľky.** Vytlačená tabuľka môže uvádzať náhradné čísla alebo kratšie názvy než označenia. Pri tom, čo je umiestnené, sa spoľahnite na označenia; rozdiely overte s projektantom.
- **Pri otvorení CSV sa zobrazujú zvláštne znaky.** Súbor je v UTF-8. Otvorte ho importným príkazom tabuľkového programu a ak sa program opýta, vyberte UTF-8.
- **Bunka začína apostrofom.** Hodnoty začínajúce na `=`, `+`, `-` alebo `@` dostanú na začiatku `'`, aby ich tabuľkové programy nespúšťali ako vzorce.
- **{{key:F}} a {{key:P}} nerobia nič.** Pracujú nad výkresom, nie nad tabuľkou. Najprv kliknite na záložku listu.

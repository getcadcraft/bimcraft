---
title: Rozvržení, uložení a export rozpisu
summary: Seskupte rozpis, přidejte mu mezisoučty a součty, přidejte sloupec čtený z vlastnosti, uložte jej jako nastavení v souboru a exportujte jako sešit tabulkového procesoru (.xlsx), jako text k vložení do online tabulky nebo jako CSV. Kancelářský standard doplní to, co rozpis neuvádí.
keywords: rozvržení rozpisu, seskupit podle, mezisoučet, součet, nadpisy, kancelářský standard, výchozí zásady, nastavení, rozpis dveří podle podlaží, požární odolnost, kování, xlsx, sešit, online tabulka, vložit, csv, export, tabulka, prvky, výběr z rozpisu, údaj
from: 95dfd801
---

## Co budete dělat

Z prostého rozpisu uděláte ten, který vaše kancelář vydává: seskupený podle podlaží, typu nebo místnosti, s mezisoučty a součtem, se sloupci, které potřebujete, pod vlastním názvem. Pak jej pošlete do tabulkového procesoru. Každý řádek i každý údaj stále ví, z jakých prvků pochází.

## Postup

1. Zapněte {{ui:Kreslení}} a v levém panelu otevřete **Rozpisy**. Vyberte rozpis, například **Dveře**.
2. Nad tabulkou zvolte **Seskupit podle** (sloupec rozpisu, například Podlaží nebo Typ, nebo **Bez seskupení**) a **Součty** (**Bez součtů**, **Jeden součet**, nebo **Mezisoučty a celkový součet**). **Podle nastavení** ponechá volbu na uloženém nastavení nebo na kancelářském standardu.
3. Chcete-li přidat sloupec čtený z prvků, zadejte pod tabulkou název vlastnosti nebo štítku (například `FireRating`, `Pset_DoorCommon.FireRating` nebo název štítku, například `Ironmongery`) a klikněte na **Přidat sloupec**. BimCraft čte nejprve vlastní sady vlastností prvku, pak sady jeho typu. Když prvek zatím hodnotu nemá, řekne to; sloupec se vyplní sám, jakmile je hodnota nastavena.
4. Zadejte název (například "Rozpis dveří podle podlaží") a klikněte na **Uložit jako nastavení**. Nastavení se uchová v souboru budovy a připojí se k seznamu Rozpisů pod svým názvem. Sleduje každou změnu modelu. **Odebrat toto nastavení** jej zase odstraní. Obojí je jeden krok v Zpět.

## Kliknutím na údaj vyberte, odkud pochází

Klikněte na libovolný řádek nebo jednotlivý údaj a vyberou se prvky, které za ním stojí, v půdorysu i ve 3D:

- řádek vybere prvky tohoto řádku;
- mezisoučet nebo součet vybere vše, co sčítá, nadpis skupiny vybere svou skupinu;
- údaj s vlastními prvky vybere je: **Odpočty** typu stěny vyberou její dveře a okna, plocha stěn místnosti její stěny.

Totéž funguje v dokumentu vytvořeném z modelu: v náhledu klikněte na údaj rozpisu.

## Export

- **Stáhnout Excel** uloží sešit .xlsx. Délky, plochy, objemy a počty jsou skutečná čísla v jednotce, kterou sloupec zobrazuje (stopy a palce zůstávají textem). Druhý list **Elements** uvádí pro každý řádek GlobalId prvků, ze kterých pochází.
- **Kopírovat pro Google Sheets** dá rozpis na schránku jako text oddělený tabulátory. V Google Sheetu klikněte na buňku A1 a vložte. **Otevřít nový Google Sheet** otevře `sheets.new`, Googleovu adresu pro prázdnou tabulku, ve vašem vlastním účtu Google. BimCraft se k Googlu nepřihlašuje a nic tam neodesílá: vložení je vaše.
- **Stáhnout CSV** uloží tabulku tak, jak je rozvržena na obrazovce.

## Kancelářský standard

Kancelář může jednou určit, jak se její rozpisy rozvrhují. Zapněte doplněk **Výchozí zásady** ([Výchozí zásady](topic:default-policies)) a nastavte v **Nastavení › Globální › Výchozí zásady › Rozvržení rozpisů (kancelářský standard)**:

| Zásada | Co dělá |
|---|---|
| Seskupovat rozpisy podle | Podlaží, Typ, Místnost nebo bez seskupení, pro každý rozpis, který takový sloupec má |
| Součty v rozpisech | Bez součtů, jeden součet na konci, nebo mezisoučet pod každou skupinou a celkový součet |
| Název rozpisu | Vzor, například `{project}: {schedule}` |
| Nadpisy sloupců | Jak je napsáno, VELKÝMI PÍSMENY nebo S Velkými Písmeny |

Standard platí pro každý rozpis, ať jej nastavil kdokoli: obyčejné rozpisy v panelu, uložené nastavení, rozpis, který nastavil asistent, exporty a rozpisy v dokumentu. Nastavení, které uvádí vlastní seskupení, součty nebo název, si je ponechá; standard doplní zbytek. Panel říká, které části nastavil kancelářský standard. Zásady se přenášejí v souboru Výchozích zásad spolu s ostatními.

## Dobré vědět

- Nastavení uvádí zdrojový rozpis a své sloupce; čísla neobsahuje. Čísla se pokaždé čtou z modelu.
- Seznamy, které nejsou řádky prvků (sestavy stěn a legenda materiálů), zde nemají rozvržení ani export.
- Asistent to vše může udělat za vás: viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).

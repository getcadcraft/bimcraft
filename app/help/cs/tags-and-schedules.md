---
title: Štítky prvků a rozpis podle štítků
summary: Definujte si vlastní štítky (název, typ, povolené hodnoty, třídy, kterých se týkají), označte mnoho prvků najednou a vytvořte rozpisy, jejichž sloupce, filtry a skupiny čtou štítky. Štítky jsou uloženy v IFC.
keywords: štítky, štítek, označování, vlastní vlastnosti, parametry, sdílené parametry, sada vlastností, pset, rozpis, filtr, seskupit podle, povrchová úprava, požární odolnost, hromadná úprava, csv
from: 9cc7c90d
---

## Co provedete

Štítek je vaše vlastní vlastnost, například *Povrchová úprava* nebo *Požární odolnost*. Definujete jej jednou pro projekt, nastavíte jej na mnoha prvcích najednou a každý rozpis v BimCraft jej může číst: zde rozpis štítků, {{ui:Množství}}, Hledání, Barva podle vlastnosti a [Dokumenty z modelu](topic:documents-from-the-model).

## Postup

1. Otevřete model IFC, nebo začněte novou budovu.
2. V levém panelu, pod {{ui:Množství}}, otevřete {{ui:Štítky}}.
3. Klikněte na {{ui:Přidat štítek}}. Dejte mu název, zvolte jeho typ a pokud chcete, vypište povolené hodnoty (oddělené čárkami) a třídy, pro které je (`IfcDoor`, `IfcWall` …). Klikněte na {{ui:Přidat štítek}}.
4. Vyberte prvky v modelu (Hledání pomůže: vyberte všechny dveře najednou).
5. Pod {{ui:Označit výběr}} zvolte nebo napište hodnotu pro každý štítek, který chcete nastavit, ostatní nechte, jak jsou, a klikněte na {{ui:Použít na … vybrané prvky}}.
6. Pod {{ui:Rozpis štítků}} zaškrtněte sloupce, přidejte filtry, zvolte {{ui:Seskupit podle}} a pak {{ui:Stáhnout CSV}}.

## Co uvidíte

- Krok v seznamu změn pro každou uloženou definici a každé označení; {{ui:Zpět}} jej vrátí.
- Prvky třídy, pro kterou štítek není, jsou z něj vynechány a stavový řádek říká, kolik jich je.
- Rozpis štítků vypisuje jeden řádek na prvek, seskupený podle pole, které jste zvolili; kliknutím na první buňku řádku vyberete ten prvek.
- {{ui:Množství}} vypisuje štítky pod `CadCraft_Tags`, takže tam můžete sečíst plochy nebo počty podle štítku.

## Typy

Typy jsou stejný seznam jako u parametrů rodiny: Délka (milimetry), Úhel (stupně), Číslo, Celé číslo, Ano / Ne, Pero (1–16), Text, Materiál a Výplň. Hodnota, která se nehodí ke svému typu nebo není jednou z povolených hodnot, je odmítnuta se zprávou a nic se nezmění.

## Dobré vědět

- Vše je prostý IFC, takže ostatní programy hodnoty načtou: definice jsou v sadě vlastností `CadCraft_TagDefs` v projektu, hodnoty v sadě vlastností `CadCraft_Tags` u každého prvku (jedna vlastnost na štítek). Délky se zapisují v jednotce délky souboru.
- `IfcWall` v třídách štítku zahrnuje i stěny typu standard-case a elemented.
- Přejmenování štítku přejmenuje jeho hodnoty na každém prvku ve stejném kroku. Odebrání štítku odebere jen jeho definici: hodnoty, které už jsou nastaveny, zůstanou na prvcích jako prosté vlastnosti. Nejprve je vymažte (zvolte {{ui:Vymazat}}), abyste je odstranili.
- Štítky v kreslicí aplikaci CadCraft (atributy bloků) ještě nejsou hotové.

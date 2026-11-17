---
title: Označovanie prvkov a tabuľky podľa štítkov
summary: Definujte vlastné štítky (názov, typ, povolené hodnoty, triedy, na ktoré sa vzťahujú), označte naraz veľa prvkov a vytvárajte tabuľky, ktorých stĺpce, filtre a skupiny čítajú štítky. Štítky sa uchovávajú v IFC.
keywords: štítky, štítok, označovanie, vlastné vlastnosti, parametre, zdieľané parametre, sada vlastností, pset, tabuľka, filter, zoskupiť podľa, povrchová úprava, požiarna odolnosť, hromadná úprava, csv
from: 9cc7c90d
---

## Čo urobíte

Štítok je vaša vlastná vlastnosť, napríklad *Povrchová úprava* alebo *Požiarna odolnosť*. Definujete ho raz pre projekt, nastavíte naraz na mnoho prvkov a každá tabuľka v BimCraft ho môže čítať: tu tabuľka štítkov, {{ui:Množstvá}}, Hľadať, Farbenie podľa vlastnosti a [Dokumenty z modelu](topic:documents-from-the-model).

## Postup

1. Otvorte model IFC alebo začnite novú budovu.
2. V ľavom paneli, pod {{ui:Množstvá}}, otvorte {{ui:Štítky}}.
3. Kliknite na {{ui:Pridať štítok}}. Dajte mu názov, vyberte jeho typ a ak chcete, vypíšte povolené hodnoty (oddelené čiarkami) a triedy, pre ktoré je (`IfcDoor`, `IfcWall` …). Kliknite na {{ui:Pridať štítok}}.
4. Vyberte prvky v modeli (Hľadať pomáha: vyberte všetky dvere naraz).
5. Pod {{ui:Označiť výber}} vyberte alebo napíšte hodnotu pre každý štítok, ktorý chcete nastaviť, ostatné nechajte tak, ako sú, a kliknite na {{ui:Použiť na … vybrané prvky}}.
6. Pod {{ui:Tabuľka štítkov}} zaškrtnite stĺpce, pridajte filtre, vyberte {{ui:Zoskupiť podľa}} a potom {{ui:Stiahnuť CSV}}.

## Čo by ste mali vidieť

- Krok v zozname zmien pre každú uloženú definíciu a každé označenie; {{ui:Späť}} ho vráti späť.
- Prvky triedy, pre ktorú štítok nie je, sú z neho vynechané a stavový riadok uvedie, koľko ich je.
- Tabuľka štítkov vypisuje jeden riadok na prvok, zoskupený podľa poľa, ktoré ste vybrali; kliknutím na prvú bunku riadku vyberte ten prvok.
- {{ui:Množstvá}} vypisuje štítky pod `CadCraft_Tags`, takže tam môžete sčítať plochy alebo počty podľa štítka.

## Typy

Typy sú rovnaký zoznam ako pri parametroch rodiny: Dĺžka (milimetre), Uhol (stupne), Číslo, Celé číslo, Áno / Nie, Pero (1–16), Text, Materiál a Výplň. Hodnota, ktorá nezodpovedá svojmu typu alebo nie je jednou z povolených hodnôt, sa odmietne so správou a nič sa nezmení.

## Dobré vedieť

- Všetko je bežné IFC, takže ďalšie programy čítajú hodnoty: definície sú v sade vlastností `CadCraft_TagDefs` na projekte, hodnoty v sade vlastností `CadCraft_Tags` na každom prvku (jedna vlastnosť na štítok). Dĺžky sa zapisujú v dĺžkovej jednotke súboru.
- `IfcWall` v triedach štítku zahŕňa aj steny štandardného tvaru a zložené steny.
- Premenovanie štítka premenuje jeho hodnoty na každom prvku v tom istom kroku. Odstránenie štítka odstráni len jeho definíciu: hodnoty, ktoré už boli nastavené, zostanú na prvkoch ako bežné vlastnosti. Ak ich chcete odstrániť, najskôr ich vymažte (zvoľte {{ui:Vymazať}}).
- Štítky v aplikácii na kreslenie CadCraft (atribúty blokov) ešte nie sú hotové.

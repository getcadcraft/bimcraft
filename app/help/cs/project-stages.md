---
title: Fáze projektu od zadání po pokyny na stavbě
summary: Začněte od zadání s cílovými plochami a sledujte při kreslení, zda jsou splněny nebo zda chybí. Porovnejte varianty konceptu se zadáním, propojte specifikace a detaily s typy, kontrolujte dílenské výkresy a zaznamenávejte pokyny na stavbě k prvkům.
keywords: zadání, rozpis ploch, cílová plocha, cílová, splněno, chybí, místnosti, varianty konceptu, varianty, hmota, rozpočet, specifikace, spec, detail, stavební detail, typ, dílenský výkres, revize, schválit, znovu odeslat, pokyn na stavbě, revize, příčina, stavba, fáze
from: 0a49b852
---

## Co uděláte

V jednom panelu projdete fáze projektu: zapíšete zadání klienta jako místnosti s cílovými plochami, porovnáte varianty konceptu se zadáním, uchováte specifikaci a stavební detaily u typů, ke kterým patří, budete kontrolovat dílenské výkresy, jak se vracejí od jednotlivých profesí, a zaznamenáte pokyny na stavbě k prvkům, které mění.

## Postup

1. V levém panelu otevřete **Fáze projektu**, poté **Zadání**.
2. Vložte místnosti, každou na samostatný řádek: `Living; 1; 30` znamená jednu místnost o 30 m². Počet lze vynechat. Zvolte **Přidat místnosti**. Vyplňte klienta, lokalitu, rozpočet, toleranci a harmonogram, poté **Uložit zadání**.
3. Kreslete stěny. Každá místnost, kterou stěny vytvoří a která má název místnosti ze zadání (číslo za ním, například „Bedroom 2“, se ignoruje), se započítá. **Rozpis ploch** ukazuje **Splněno**, **Chybí**, **Nad** nebo **Nenakresleno**, s rozdílem v m².
4. Chcete-li takto začít nový projekt, zvolte **Začít nový projekt ze zadání**. Otevře se nový model, případně z jedné z vašich uložených šablon, pokud nějakou vyberete, a zadání se do něj vloží jako první krok.
5. Otevřete **Varianty oproti zadání**. Každá hmotová varianta uložená v modelu se vykreslí ve stejném měřítku s hrubou plochou, tím, co zadání požaduje, a s počtem místností ze zadání, které se do ní vejdou. **Naskládat zadání sem** umístí místnosti do podlaží varianty, od nejnižšího, a uvede, co se nevejde. Náklady pocházejí pouze z cenové tabulky projektu; když odpovídající řádek chybí, zobrazí se „Bez sazby“.
6. Otevřete **Typy, specifikace a detaily**. U každého typu stěny, dveří, okna a podlahy je vidět, zda má text specifikace, propojené detaily a kde si specifikace, rozpisy a listy odporují. **Propojit detail** přidá soubor DetailCraft nebo CadCraft, adresu, nebo list tohoto modelu.
7. Otevřete **Dílenské výkresy**. Vyberte v modelu prvky, které dílenský výkres pokrývá, poté **Přijmout**. Použijte **Schválit**, **Schváleno s poznámkami** nebo **Revidovat** se jménem a poznámkou revidujícího. **Znovu odesláno** vytvoří další revizi téhož záznamu a zachová historii revizí. Stav se zapíše také u každého prvku.
8. Otevřete **Pokyny na stavbě**. Vyberte prvky, uveďte příčinu a vlastními slovy popište, co to udělá s náklady a časem, a zvolte **Zaznamenat**. Jakmile je problém zaznamenán, **Vysvětlit změny od tohoto problému** ukáže, které změněné prvky pokyn pokrývá a které se změnily, aniž by byly zaznamenány.

## Dobré vědět

- Každý krok lze vrátit jedním krokem Zpět. Nic se neodmítá: zadání, které není splněno, typ, který nesouhlasí se svým textem, nebo dílenský výkres po termínu je varování nebo poznámka v Problémech.
- Místnosti ze zadání jsou prostory bez stěn. Nesou cílovou plochu, nikoli nakreslenou, takže rozpisy místností a COBie je nepočítají jako nakreslené místnosti.
- Rozložení pouze naskládá místnosti do podlaží podle plochy. Nekreslí žádné stěny.
- Text specifikace se píše v Dokumentech z modelu. Zde se pouze porovnává s vlastními rozměry modelu; klauzule žádné normy se za vás nikdy nezapisuje.
- Dílenské výkresy a pokyny na stavbě jsou záznamy ve stejné historii jako panel Problémy a revize, takže oba panely je zobrazují.
- Stav dílenského výkresu je vlastností každého prvku (`CadCraft_ShopDrawing`) a pokyn na stavbě je `CadCraft_SiteInstruction`, takže je mohou použít Najít a Obarvit podle vlastnosti.
- Označení ověřená na stavbě (Fáze 7) jsou ve Vlastnostech v části Ověření.

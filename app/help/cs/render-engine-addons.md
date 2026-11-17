---
title: Přidání motoru vykreslování pomocí doplňku
summary: Co může doplněk přidat do seznamu Motor v dialogu Vykreslit, oprávnění potřebné ke spuštění programu a co Studio kontroluje a na co se ptá.
keywords: doplněk, addon, motor, motor vykreslování, vývojář, engine.run, oprávnění, program, skript, podepsaný, studio, api
from: 06295376
---

Doplněk (Nastavení › Doplňky) může přidat motor do seznamu Motor v {{ui:Vykreslit}}. Úplný text pro autory doplňků je v oddílu 16 specifikace doplňků; stručně:

- Doplněk zaregistruje motor s identifikátorem, který začíná jeho vlastním označením, s názvem, volitelným nastavením a **buď** programem ke spuštění, **nebo** funkcí v JavaScriptu, která nakreslí obraz.
- Motor, který spouští program, potřebuje oprávnění **`engine.run`**, které se zobrazí před instalací i v Nastavení. Běží pouze ve Studiu; v prohlížeči se zobrazí jako soubor k uložení.
- Doplněk uvede program (jen prostý název souboru, nikdy shell), skript, který je **uvnitř podepsaného doplňku**, a argumenty složené ze zástupných znaků a prostých slov. Studio program najde, nebo vás jednou požádá, abyste ho označili.
- Když doplněk poprvé spustí program, **Studio se vás zeptá ve svém vlastním dialogu**: který doplněk, který program a že skript může dělat cokoli, co dokáže program. Povolte to jen doplňku, kterému důvěřujete. Vaše odpověď se zapamatuje pro tento doplněk a program.
- Balíček (scéna jako USD a soubor nastavení, se souborem glTF, pokud si to doplněk vyžádá) a skript doplňku se uloží do nové dočasné složky, program se tam spustí a obraz se vrátí označený názvem motoru doplňku.

:::note
Doplňky mohou přidávat motory vykreslování jen od verze API doplňků 1.4. Ukázkový příklad pro příkazový vykreslovač s otevřeným zdrojovým kódem je v jeho vlastním repozitáři; v tomto vykreslovači zatím nebyl spuštěn.
:::

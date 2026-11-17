---
title: Napište specifikaci z modelu
summary: Jeden oddíl specifikace pro každý typ stěny, dveří, okna, podlahy a povrchu, který se v budově používá, s jeho údaji čtenými z modelu a vaším vlastním textem, vytvořený jako PDF nebo dokument Word.
keywords: specifikace, spec, výrobní výkresy, etapa 5, dokumentace, oddíl, typ stěny, typ dveří, typ okna, povrch, klasifikace, uniclass, omniclass, masterformat, dokument, pdf, word, docx, rozpisy
from: a6acc6d4
---

## Co uděláte

Získejte specifikaci, která sleduje model: oddíl pro každý typ, který je v budově skutečně, každý s jeho skladbou a množstvími čtenými z modelu, a text, který pro něj napíšete.

## Postup

1. Zapněte {{ui:Kreslení}}, otevřete **Rozpisy** v levém panelu a klikněte na **Specifikace**.
2. Dialog vypíše jeden oddíl pro každý typ stěny, typ dveří, typ okna, podlahu a povrch místnosti v používání. Pod každým nadpisem jsou jeho **údaje**, čtené z modelu: tloušťka, vrstvy jednu po druhé, úroveň rozpracovanosti, rozměry, kolik a kolik. Oddíl, jehož prvky nesou klasifikační kód, ukazuje kód ve svém nadpisu.
3. Napište text specifikace do pole pod oddílem. **Vybrat jeho prvky** ukáže, čeho se oddíl týká.
4. Klikněte na **Uložit**. Je to jeden krok v Zpět a text se uchová v souboru budovy.
5. Otevřete **Dokumenty z modelu**, zvolte šablonu **Specifikace** a klikněte na **Náhled**, pak ji uložte jako PDF, Word nebo Markdown. Viz [Dokumenty z modelu](topic:documents-from-the-model).

## Rozpisy výkresové dokumentace jako dokument

Šablona **Rozpisy výkresové dokumentace** vytiskne rozpisy dveří, oken a povrchů přímo z modelu v rozvržení vaší kanceláře. Ve vlastní šabloně napište `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, nebo název uloženého nastavení, například `{{schedule Door schedule by floor}}`. `{{specification}}` vytiskne specifikaci.

## Dobré vědět

- Údaje jsou modelu. Mění se, když se model změní; váš text ne.
- BimCraft nepíše žádný článek žádné normy ani text výrobce. Oddíl bez textu se vytiskne jako „Text specifikace zatím nebyl napsán.“
- Text napsaný pro typ, který už není v modelu, se uchová a vypíše pod „Text pro typy, které už nejsou v modelu“.
- Chcete-li obecný typ změnit na konkrétní skladbu, viz [Nástroje stěn](topic:wall-tools) (Vyměnit typ).

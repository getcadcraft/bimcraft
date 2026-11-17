---
title: Štítky místností a ploch
summary: Umístěte na místnost nebo plochu štítek s číslem, názvem a plochou. Štítek ji sleduje a jeho velikost se řídí výškou na papíře.
keywords: štítek, štítek místnosti, štítek plochy, označit místnost, označit plochu, označit vše, označit všechny neoznačené, popisek, výška textu, výška na papíře, anotace
from: 67059d8a
---

## Co budete dělat

Označte místnosti a plochy jednu po druhé nebo všechny najednou a přesuňte štítek tam, kde se dobře čte.

## Kde najdete nástroje

- Rozvržení s pásem karet: {{ui:Architektura}} › **Místnost a plocha** › {{ui:Označit místnost}} a {{ui:Označit plochu}}.
- Klasické rozvržení: panel Kreslení › nabídka {{ui:Místnosti}}.
- Vybraná místnost nebo plocha: Vlastnosti › {{ui:Přidat štítek}}.

## Postup

1. Zvolte {{ui:Označit místnost}} a klikněte do místnosti, kde má štítek být.
2. Nebo stiskněte {{ui:Označit všechny neoznačené}} v řádku: každá místnost na této úrovni, která nemá štítek, dostane jeden uprostřed. Je to jeden krok zpět.
3. Chcete-li štítek přesunout, vyberte jej nástrojem Vybrat a přetáhněte. Vlastnosti mají {{ui:Vrátit doprostřed}}.
4. {{ui:Označit plochu}} funguje pro plochy stejně.

## Co štítek dělá

- Ukazuje číslo, název a plochu ve vašich zobrazovaných jednotkách.
- Sleduje svou místnost: přejmenujete-li místnost nebo posunete stěnu, text i poloha štítku se změní ve stejném kroku.
- Velikost se určuje na papíře: {{ui:Výška textu na papíře}} je v milimetrech (na začátek 2.5). Při měřítku pohledu 1:50 má štítek 2.5 mm na papíře v modelu výšku 125 mm; při 1:100 je to 250 mm.
- Místnost se štítkem zobrazuje štítek místo prostého popisku.
- Zanikne-li její místnost nebo plocha, zanikne i štítek. Zpět obnoví oboje.

## V IFC

Štítek je IfcAnnotation (ObjectType ROOMTAG nebo AREATAG) s textem jako textovým literálem a GlobalId prvku, který označuje. Text v souboru udává plochu ve čtverečních metrech.

## Zatím nehotovo

- Vlastní tvary štítků a výnosky.
- Štítky na dveřích, oknech a stěnách jsou samostatný nástroj (viz styly štítků listů).

Viz také [Místnosti a oddělovače místností](topic:rooms-and-separators).

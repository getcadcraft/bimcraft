---
title: Najděte prvky podle třídy, názvu nebo vlastnosti
summary: Najděte všechny prvky, které odpovídají jednomu nebo více pravidlům — podle třídy, názvu, typu, podlaží, materiálu nebo hodnoty libovolné vlastnosti —, vyberte je všechny a pravidla si uložte jako pojmenovanou sadu hledání.
keywords: najít, hledat, filtrovat, dotaz, pravidlo, sada hledání, sada výběru, uložené hledání, vlastnost, hodnota, třída, materiál, vybrat vše
from: 3d293bc2
---

## Co uděláte

Vyberte všechny prvky jednoho druhu nebo s jednou hodnotou v jediném kroku: všechny dveře, všechny stěny v podlaží 2, všechny prvky s požární odolností EI60 nebo všechny stěny, jejichž cena přesahuje stanovenou částku.

## Postup

1. Otevřete model IFC.
2. Otevřete {{ui:Najít}} v levém panelu.
3. V prvním pravidle zvolte vlastnost (nejdřív vlastní vlastnosti prvku, jako {{ui:Třída}} a {{ui:Podlaží}}, pak sady vlastností modelu), způsob porovnání a hodnotu. Pole hodnoty nabízí hodnoty, které model obsahuje.
4. Chcete-li hledání zúžit, klikněte na {{ui:Přidat pravidlo}}. Zvolte {{ui:Všechna pravidla}}, pokud mají platit všechna, nebo {{ui:Libovolné pravidlo}}, pokud stačí jedno z nich.
5. Klikněte na {{ui:Najít}} nebo stiskněte {{key:Enter}} v poli hodnoty. Vybere se vše, co odpovídá.
6. Chcete-li pravidla zachovat, klikněte na {{ui:Uložit jako sadu}}, zadejte název a klikněte na něj znovu. Později klikněte na název sady a hledejte podle ní.

## Co uvidíte

- Shody jsou vybrány ve 3D pohledu a ve stromu modelu a v {{ui:Vlastnosti}} je uvedeno, kolik jich je podle třídy. Stiskněte {{key:I}}, aby se zobrazily jen ony, a {{key:H}}, aby se skryly.
- Slova se shodují bez ohledu na velikost písmen. Čísla se porovnávají jako čísla: „je větší než 1000“ znamená hodnotu, ne text.
- {{ui:má hodnotu}} a {{ui:nemá hodnotu}} nepotřebují žádnou hodnotu; najdou, co je vyplněno, nebo co chybí.
- Uložené sady zůstávají v tomto prohlížeči pro každý model, který otevřete.

## Časté chyby

- **Nic se nenajde.** Pravidlo potřebuje hodnotu, se kterou se může shodovat: podívejte se na návrhy v poli hodnoty.
- **Vlastnost chybí v seznamu.** Žádný prvek s tvarem v tomto modelu ji nemá.

## Dále

- [Obarvení prvků podle vlastnosti](topic:color-by-property)
- [Skrytí, izolace a průhled prvků](topic:hide-and-isolate)

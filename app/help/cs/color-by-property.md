---
title: Obarvení prvků podle vlastnosti
summary: Obarvěte každý prvek podle hodnoty jedné vlastnosti, například jeho třídy, typu, podlaží, materiálu, požární odolnosti nebo ceny, přečtěte si legendu, kliknutím na hodnotu zobrazte jen tyto prvky a uložte barvy jako schéma pro použití na jiných modelech.
keywords: barva, barvy, obarvit podle, legenda, chytrý pohled, vzhled, vlastnost, typ, materiál, požární odolnost, filtr, izolovat, motiv, hodnoty, schéma, schéma barev, uložit barvy, znovupoužití, tým, json, vzorek
from: f081d343
---

## Co uděláte

Na první pohled uvidíte, jak je vlastnost rozložena v modelu: které stěny jsou vnější, které materiály se kde používají, které prvky nemají požární odolnost. Každý prvek převezme barvu své hodnoty a legenda říká, co která barva znamená a kolik prvků ji má.

## Postup

1. Otevřete model IFC.
2. Vpravo klikněte na kartu {{ui:Barva}}.
3. Vyberte vlastnost v seznamu. První patří každému prvku ({{ui:Třída}}, {{ui:Typ}}, {{ui:Podlaží}}, {{ui:Materiál}}, {{ui:Název}}…); ostatní pocházejí ze sad vlastností a sad množství modelu, pod názvem sady. Číslo za každou je počet prvků, které ji mají.
4. Přečtěte si legendu: barvu, hodnotu a počet prvků, které ji mají.
5. Kliknutím na hodnotu zobrazíte jen tyto prvky. Podržte {{key:Mod}} a klikněte, chcete-li přidat další hodnoty. Stiskněte {{key:Shift+H}}, chcete-li zase zobrazit vše.
6. Kliknutím na {{ui:Vypnuto}} se vrátíte k vlastním barvám modelu.

## Co uvidíte

- Až sedm hodnot dostane vlastní barvu, nejčastější hodnota jako první. Další hodnoty sdílejí jednu šedou a jsou uvedeny jako **ostatní hodnoty**.
- Číslo s mnoha různými hodnotami se rozdělí do šesti stejně širokých pásem, od světlé (nízké) po tmavou (vysoké).
- Prvky bez vlastnosti jsou světle šedé a uvedené jako **Bez hodnoty**, aby vynikly obarvené prvky.
- Barvy se mění podle toho, zda je aktivní Papír nebo Model, a zůstávají i při úpravách modelu.
- Vlastnost typu platí pro každý prvek tohoto typu; pokud má prvek pro stejnou vlastnost vlastní hodnotu, má vlastní hodnota přednost.

## Změna barev a jejich uložení jako schéma

- Kliknutím na barevný vzorek hodnoty v legendě vyberte pro ni jinou barvu. Model se hned přebarví.
- {{ui:Uložit schéma}} stáhne barvy jako malý soubor `.json` pojmenovaný podle vlastnosti, například `Class colors.json`.
- Na jiném modelu nebo na počítači kolegy klikněte na {{ui:Otevřít schéma…}} a vyberte tento soubor. Každá hodnota ve schématu dostane svou barvu, takže stejná požární odolnost nebo stejný systém má stejnou barvu v každém modelu.
- Hodnota, kterou schéma nemá, se obarví šedě a uvede se jako „není ve schématu“; hodnoty ze schématu, které tento model nemá, zůstanou uvedeny s 0, abyste viděli celé schéma.
- Schéma si zachovává barvy v obou motivech. Výběr vlastnosti v seznamu začne znovu od automatických barev.

## Časté chyby

- **„Tento model nemá hodnoty …“.** Schéma bylo uloženo pro vlastnost, kterou tento model nemá (například jiný název sady vlastností). Otevřete schéma vytvořené pro tento typ modelu, nebo vyberte vlastnost v seznamu.

- **Vlastnost chybí v seznamu.** Žádný prvek s tvarem v modelu ji nemá. Vlastnosti samotných podlaží a prostorů se nezobrazují.
- **Vše má stejnou barvu.** Každý prvek má stejnou hodnotu, nebo žádnou: podívejte se na počty v legendě.

## Dále

- [Skrytí, izolace a průhled prvků](topic:hide-and-isolate)
- [Orientace ve stromu modelu](topic:model-tree)

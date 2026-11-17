---
title: Doplňky, které soubor používá
summary: BimCraft zaznamenává v souboru IFC, které doplňky do něj zapsaly, a při otevření nabídne přidání chybějících.
keywords: doplněk, addon, tento soubor používá, chybějící doplněk, trusscraft, knihovna, záznam, cadcraft_addons
from: 9d9500d8
---

## Co to dělá

Když doplněk zapíše do modelu (příhradu, trasu potrubí), BimCraft zaznamená doplněk a jeho verzi do projektu IFC, do sady vlastností CadCraft_AddOns. Záznam se zapíše ve stejném kroku jako vlastní změna doplňku, takže vrácení změny vrátí i záznam. Jiné programy sadu vlastností ignorují; to, co doplněk nakreslil, zůstane v souboru v každém případě.

## Postup

1. Otevřete soubor IFC, na jehož vytvoření se doplněk podílel.
2. Pokud doplněk, který soubor používá, není zapnutý, nad modelem se zobrazí upozornění, které je uvede, s tlačítkem pro jejich přidání z vašeho účtu v knihovně.
3. Přidejte je, nebo upozornění zavřete. Model se otevře v každém případě.

## Časté chyby

- **Upozornění se nezobrazí.** V této kartě nejste přihlášeni ke svému účtu, nebo soubor žádný záznam neobsahuje (byl vytvořen před zavedením záznamů, nebo jiným programem).
- **Seznam změn ukazuje "undefined".** Opraveno: popisky nyní zobrazují název doplňku.

## Další

- [Umístění vybavení a nábytku z knihovny](topic:place-from-library)

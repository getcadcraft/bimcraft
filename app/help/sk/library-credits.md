---
title: Zoznam autorov knižnice a prihlásenie do knižnice
summary: Pozrite si každú položku knižnice použitú v modeli s jej licenciou a uvedením autora, skopírujte autorov alebo ich stiahnite spolu s tabuľkou a prihláste sa do knižnice, aby ste videli položky svojho tímu.
keywords: autori, uvedenie autora, licencia, cc by, cc0, autorské právo, tímová knižnica, prihlásenie, pripojenie, kľúč, tabuľka vybavenia, csv
from: 81971658
---

## Čo urobíte

Uveďte autora tam, kde to licencia vyžaduje, a dostanete sa k položkám knižnice vášho tímu.

## Autori knižnice

1. Otvorte model.
2. Kliknite na {{ui:Autori}} na paneli nástrojov.
3. Prečítajte si zoznam: každú použitú položku, jej verziu, licenciu, uvedenie autora a čísla položiek, na ktoré je umiestnená.
4. Kliknite na {{ui:Kopírovať autorov}}, ak chcete skopírovať riadky s uvedením autora, alebo na {{ui:CSV so zoznamom}}, ak chcete tabuľku s každým umiestnením a jeho uvedením autora.

Licencia a uvedenie autora sa zobrazujú aj vo {{ui:Vlastnostiach}}, keď vyberiete umiestnenú položku, a ukladajú sa do IFC (`CadCraft_LibraryItem`), takže putujú so súborom.

## Tabuľka vybavenia modelu

Kliknite na {{ui:Vybavenie}} na paneli nástrojov. Tabuľka sa zostaví z umiestnených položiek knižnice: číslo položky, množstvo, názov, výrobca, model, elektrické a vodovodné údaje, zoskupené podľa podlažia. Stiahne sa ako rovnaké CSV, aké stiahne tabuľka výkresu.

## Prihlásenie do knižnice

1. Na karte {{ui:Knižnica}} vyberte **Knižnica**.
2. Kliknite na {{ui:Prihlásiť sa do knižnice}}. Otvorí sa malé okno na tejto stránke.
3. Ak sa to vyžaduje, prihláste sa, potom kliknite na **Pripojiť**. Okno odovzdá BimCraft kľúč knižnice a okno môžete zavrieť.

## Čo by ste mali vidieť

- "Prihlásenie do knižnice bolo úspešné" navrchu zoznamu Knižnica. Položky vášho tímu sa zobrazia vedľa verejných.
- Položky, ktoré umiestnite, sa zaznamenajú ako použité, aby vám knižnica mohla povedať, keď sa zmenia.

## Dobré vedieť

- Kľúč sa uchováva iba na tejto karte a skončí, keď ju zavriete. {{ui:Zabudnúť prihlásenie}} ho zruší skôr.
- Stránka zabezpečenia vášho účtu uvádza kľúč ako "BimCraft library (browser)"; odvolajte ho tam.
- Nič o vašom modeli sa neposiela: iba to, ktoré položky knižnice ste umiestnili.

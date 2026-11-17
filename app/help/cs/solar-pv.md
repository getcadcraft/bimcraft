---
title: Fotovoltaické sestavy, stínění a výnos
summary: Umístěte fotovoltaické sestavy na střechy nebo na zem, zastiňte je z modelu, odhadněte roční výrobu, navrhněte řetězce a vytvořte data jednopólového schématu. Všechny vstupy jsou zobrazeny a výchozí moduly a ztráty jsou obecné.
keywords: solár, fotovoltaika, pv, sestava, modul, střecha, stínění, výnos, kwh, kwp, návrh řetězců, střídač, jednopólové schéma, sklon, azimut, rozestup řad
from: adf4aaf3
---

## Co uděláte

Otevřete panel **Solární PV**. Vyberte plochu střechy (její sklon a orientace se čtou z modelu), nebo rozložte pozemní sestavu se sklonem a orientací; moduly se vejdou dovnitř s odstupy, spočítají se a dají výkon ve stejnosměrné části v kWp. Umístění sestavy ji zapíše do modelu jako solární zařízení, v jednom kroku zpět.

## Stínění, výnos a řetězce

- **Stínění** vysílá paprsek z každého modulu ke slunci pro typické dny každého měsíce proti vlastní geometrii modelu, takže se počítají sousední budovy, atiky a řady před ním. Snižuje se jen přímé sluneční světlo a částečně zastíněná sestava ztrácí výkon úměrně.
- **Výnos** dává kWh po měsících a rocích, kWh na kWp a poměr výkonu. Slunce pochází z vašich vlastních měsíčních součtů na vodorovnou plochu, pokud je zadáte. Bez nich panel použije horní mez při čisté obloze a řekne to. **Načíst klima z NASA POWER** tlačítkem na kartě Výnos: odešle jen zeměpisnou šířku a délku pozemku, jednou, a odpověď si ponechá na tomto počítači (ověřeno z prohlížeče 2026-10-30). PVGIS neumožňuje webové stránce číst jeho odpověď, proto karta dává odkaz, který v novém panelu otevře měsíční data PVGIS pro pozemek; vložte, co zobrazí, do pole a dvanáct měsíců se vyplní.
- **Řetězce** kontrolují moduly na řetězec proti napěťovému oknu střídače v nejchladnější a nejteplejší den a paralelní řetězce proti jeho proudu.
- **Jednopólové schéma** vytvoří data schématu (sestava, sběrný rozváděč, odpojovač, střídač, panel, síť) s velikostmi vodičů a pojistek z činitelů, které zadáte. Jde o data a SVG; doplněk Elektro v CadCraft je může umístit jako symboly.

Modul, střídač, ztráty a činitele vodičů, které jsou dodány s BimCraft, jsou obecné příklady, označené v každém výsledku. Zadejte údaje výrobce a normové hodnoty, podle kterých navrhujete, a nechte návrh zkontrolovat osobou, která za něj ručí.

---
title: Kontrola kolizí
summary: Najděte místa, kde prvky jedné sady zasahují do prvků jiné, například vzduchotechnika do nosníků nebo stěny do desek, v jednom modelu nebo napříč více modely, s tolerancí, a kolizi převeďte na problém.
keywords: kolize, detekce kolizí, kontrola kolizí, tvrdá kolize, interference, střet, koordinace, překryv, tolerance, tzb, konstrukce
from: 9cb12346
---

## Co uděláte

Najděte místa, kde na sebe narážejí dvě sady prvků, například všechno v modelu technických zařízení oproti konstrukci. Pak každé místo prohlédněte a ty, na nichž záleží, si ponechte jako problémy.

## Postup

1. Otevřete model IFC a pomocí {{ui:Přidat model…}} přidejte další, pokud kontrolujete napříč modely. Viz [Zobrazení více modelů IFC najednou](topic:several-models).
2. Otevřete {{ui:Kontrola kolizí}} v levém panelu.
3. V {{ui:Kontrolovat}} a {{ui:Proti}} zvolte dvě sady: prvky, které jste vybrali, třídu (přes všechny otevřené modely), uloženou sadu hledání (viz [Hledání prvků podle třídy, názvu nebo vlastnosti](topic:find)), nebo všechno.
4. Nastavte, kolik překryvu v metrech ignorovat. 0.01 ignoruje prvky, které se jen těsně stýkají.
5. Klikněte na {{ui:Spustit}}. Kontrola běží na pozadí; {{ui:Zrušit}} ji zastaví.
6. Kliknutím na výsledek ho zobrazíte: oba prvky se vyberou a ukážou, vše ostatní je průhledné a pohled se přiblíží k nim.
7. Klikněte na {{ui:Založit z toho problém}} pod výsledkem, abyste ho zapsali na kartě {{ui:Problémy}}. Viz [Problémy a soubory BCF](topic:issues-bcf).

## Co uvidíte

- Kolize vypsané s názvy obou prvků (a jejich soubory, pokud je otevřeno více modelů) a s hloubkou překryvu, nejhlubší nahoře.
- Plochy, které se jen dotýkají, například stěna stojící na desce nebo dveře v otvoru, nejsou kolize.

## Dobré vědět

- Jde o základní kontrolu tvrdých kolizí: prvky, jejichž povrchy se protínají. Prvek zcela uvnitř jiného (potrubí zabudované do stěny) zatím nenajde.
- Hloubka je, jak daleko se hranice obou prvků nejmenším způsobem překrývají. Je to vodítko, ne přesné měření.

## Dále

- [Měření vzdáleností, ploch a poloh ve 3D](topic:measure)
- [Skrytí, izolace a průhlednost prvků](topic:hide-and-isolate)

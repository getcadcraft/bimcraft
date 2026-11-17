---
title: Kontrola modelu na časté problémy
summary: Najděte prvky, kterým chybí potřebná vlastnost, GlobalId použitá dvakrát, prvky bez podlaží a kopie naskládané na sobě.
keywords: kontrola, kontrola modelu, validace, qa, kvalita, chybějící vlastnost, povinná, duplicita, globalid, guid, podlaží, naskládané, překryv
from: 4d835513
---

## Co provedete

Prohlédněte si model, než ho předáte dál: problémy, které kazí tabulky, výkazy množství a práci v jiném softwaru.

## Postup

1. Otevřete model IFC.
2. Otevřete {{ui:Kontroly modelu}} v levém panelu.
3. V sekci {{ui:Povinné vlastnosti}} už existuje jedno pravidlo (libovolná třída, Name). Změňte jeho třídu (nebo {{ui:Libovolná třída}}) a vlastnost, nebo klikněte na {{ui:Přidat vlastnost}} pro další pravidlo; tlačítko x jedno pravidlo odebere. Prvek pravidlo nesplní, pokud mu vlastnost chybí nebo je prázdná. Pravidla zůstanou v tomto prohlížeči uložena pro všechny modely.
4. Klikněte na {{ui:Spustit kontroly}}.
5. Klikněte na výsledek: vyberou se tyto prvky a zobrazení se k nim přiblíží.

## Co uvidíte

- **Chybí povinná vlastnost**: každé pravidlo s prvky, které pro ni nemají hodnotu.
- **GlobalId použité dvakrát**: prvky sdílející jedno GlobalId. Jiný software je bere jako jeden prvek.
- **Bez podlaží**: prvky s tvarem, který žádné podlaží neobsahuje.
- **Kopie na sobě**: prvky stejné třídy a typu se stejným tvarem na stejném místě, které se v množstvích počítají dvakrát.

Každý řádek výsledků je tlačítko: kliknutím vyberete tyto prvky a přiblížíte na ně. Zobrazeno je jen prvních 50 skupin každé kontroly. Tytéž nálezy se objeví i v panelu {{ui:Problémy}}.

## Dobré vědět

- Kontroly pracují s aktivním modelem, pokud je otevřeno více modelů. Viz [Zobrazení více modelů IFC najednou](topic:several-models).
- Po úpravě spusťte kontroly znovu.
- V panelu {{ui:Problémy}} se délky, plochy a objemy v popisu problému řídí jednotkami zvolenými v {{ui:Jednotky}} na panelu nástrojů (dveře "800 mm" se zobrazí jako 2'-7 1/2" ve stopách a palcích); změníte-li jednotku, panel popisy přepíše.

## Dále

- [Audit modelu: místnosti, značky, LOD, kolize a rozhraní](topic:audit-the-model)
- [Vyhledání prvků podle třídy, názvu nebo vlastnosti](topic:find)
- [Smazání, vyjmutí, kopírování a vložení prvků](topic:copy-paste)

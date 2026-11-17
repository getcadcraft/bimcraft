---
title: Doporučení ke kreslení: neobvyklé rozměry se vytvoří s varováním
summary: BimCraft vytvoří to, co požadujete. Rozměr mimo obvyklou míru se objeví jako varování v Problémech; nikdy nebrání kreslení ani ukládání.
keywords: doporučení, varování, problémy, odmítnuto, nelze nakreslit, příliš malé, příliš úzké, minimum, limit, šířka schodiště, výška stupně, šířka stupně, sloup, rampa, velikost dveří, osa, výška podlaží, vikýř, točité schodiště, sklon podsypu, krátká stěna, bez překážek
from: 20090130
---

## Co uděláte

Nakreslete nebo změňte rozměr, který není obvyklý, a zjistěte, kde vám BimCraft o tom řekne.

## Postup

1. Nakreslete nebo změňte prvek, jak chcete: například schodiště o šířce 400 mm.
2. BimCraft ho vytvoří, jak jste požadovali.
3. Otevřete {{ui:Problémy}} v horním pruhu. Pod **Doporučení ke kreslení** je varování, které uvádí prvek, zadaný rozměr a obvyklý rozsah.
4. Klikněte na varování, čímž prvek vyberete. Pokud to byl přehmat, změňte rozměr; nebo ho nechte být: varování lze přijmout, s důvodem nebo bez něj.

## Co je doporučení

Tohle se dřív odmítalo. Teď se to vytvoří, každé s varováním:

- **Schodiště**: užší než 500 mm nebo širší než 5 m; výšky stupňů mimo 100 až 300 mm; šířky stupňů mimo 150 až 600 mm.
- **Točitá schodiště**: sloupek mimo 40 až 400 mm; stupně mělčí než 100 mm na čáře chůze.
- **Sloupy**: menší než 50 mm v průměru nebo nižší než 300 mm.
- **Rampy**: užší než 300 mm.
- **Dveře a okna**: užší nebo nižší než 100 mm.
- **Osy**: kratší než 100 mm.
- **Stěny**: stěna kratší než 50 mm, například po oříznutí.
- **Podlaží**: nižší než 1 m nebo vyšší než 100 m (nová budova, rozdělená podlaží, výška podlaží).
- **Vikýře**: šířka mimo 600 mm až 12 m, přední stěna mimo 300 mm až 4 m, přesah přes 1 m, stěny mimo 50 až 400 mm.
- **Podsypy budov**: boční sklony mimo 1:1 až 10:1.

## Co je stále odmítnuto

Jen to, co nelze postavit nebo najít, každé se zprávou, která vysvětlí proč:

- Rozměr pod 10 mm (stěna pod 1 mm): není co postavit.
- Vikýř, který není širší než dvojnásobek tloušťky své stěny: jeho dvě boční stěny by se střetly.
- Podsyp budovy s bočním sklonem strmějším než 0.1:1 (to je opěrná zeď) nebo plošším než 100:1 (terén by pokračoval donekonečna).
- Něco, co se nevejde tam, kam jste to dali, obrys, který protíná sám sebe, nebo prvek, který už není v modelu.

## Dobré vědět

- Doporučení se počítá z modelu, takže se objeví znovu, až soubor později otevřete, a zmizí, když se rozměr opraví.
- Kontroly modelu, pravidla předpisů a kontroly IDS také jen vypisují, co našly. Nic v {{ui:Problémy}} vám nebrání v kreslení nebo ukládání.
- Obvyklé rozsahy jsou běžná praxe, ne stavební předpis. Pro předpis přidejte doplněk Stavební předpisy a vyberte své místo.

## Další

- [Kontrola modelu na běžné problémy](topic:model-checks)
- [Schodiště a zábradlí](topic:stairs-and-railings)

---
title: Sloučení úprav jednoho modelu od dvou lidí
summary: Nechte git, Fossil nebo Mercurial sloučit dvě upravené kopie téhož modelu IFC objekt po objektu, aby dva lidé mohli kreslit na jedné budově a spojit práci.
keywords: sloučení, git, fossil, mercurial, správa verzí, konflikt, třícestné, cadcraft merge, gitattributes, ifc, globalid, tým, dvě kopie, větve
from: 50733df8
---

Dva lidé si vezmou kopii téže budovy, jeden kreslí východní křídlo a druhý západní, a později se obě kopie musí stát jednou. Pokud se dotkli různých objektů, může to udělat program místo člověka.

## Jak to funguje

Každá stěna, dveře, podlaží, místnost a sada vlastností v souboru IFC má GlobalId, který se nemění. Sloučení hledá objekty podle tohoto identifikátoru, ne podle čísla, které jim soubor přidělí (`#123`), protože čísla se mění, když program ukládá. Části visící na objektu, které nemají vlastní identifikátor (umístění, tvary, jednotky), se porovnávají podle obsahu.

Obě kopie musí mít stejnou verzi IFC (2x3, 4 nebo 4.3). Sloučení ponechá váš soubor takový, jaký je, jeho pořadí i čísla, a přidá, co je nové, takže git diff sloučení ukazuje jen to, co sloučení změnilo.

## Nastavení

Git potřebuje jednou pro každé úložiště dva řádky:

```
# .gitattributes
*.ifc merge=cadcraft

# jednou na každém počítači
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gitu spusťte `cadcraft merge <base> <ours> <theirs>`. Fossil a Mercurial berou stejné tři soubory ve svém vlastním nastavení nástroje pro sloučení. Nic se nenahrává; vše běží na vašem počítači.

## Pravidla

- Atribut změněný jen na jedné straně se převezme. Stejná změna na obou stranách se převezme jednou.
- Atribut změněný dvěma způsoby (tatáž úroveň přejmenovaná dvěma způsoby) je **konflikt**: zůstane vaše strana a zpráva uvede obě. Otevřete výsledek a opravte ho ručně.
- Seznam věcí (stěny podlaží, vlastnosti sady) se sloučí jako množina: co kterákoli strana přidala, se zachová, a co kterákoli strana odebrala, se odstraní. Dva lidé, kteří každý přidají stěny do téhož podlaží, nejsou v konfliktu.
- Objekt přidaný na jedné straně se zachová i s tvarem a vlastnostmi. Odebrán na jedné straně a nedotčen na druhé: odebrán. Odebrán na jedné straně a změněn na druhé: odebrán a nahlášen.
- Časové razítko a autor souboru a historie vlastníka každého objektu zůstanou vaše.

Geometrie se slučuje celá: tvar stěny pochází z jedné strany, nikdy se nemíchá bod po bodu. Zabalené soubory IFC a IFCX se neslučují. Po sloučení otevřete výsledek v BimCraftu a před uložením se podívejte na panel Problémy.

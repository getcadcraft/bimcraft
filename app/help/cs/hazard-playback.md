---
title: Přehrát povodeň, vítr nebo zemětřesení na budově
summary: Voda stoupající místnostmi, tlak větru na každé podlaží nebo zemětřesení otřásající podlažími, přehrané na půdorysu nebo pohledu s posuvníkem času. Jednoduché modely s uvedenými předpoklady; nejde o kontrolu norem ani o statický návrh.
keywords: nebezpečí, povodeň, vítr, zemětřesení, seismický, drift, vodorovné posunutí, základní smyková síla, hladina vody, klima, scénář, hladina moře, přehrání, podlaží, perioda
from: ff0d34d1
---

Sekce {{ui:Přehrání nebezpečí}} levého panelu přehraje nebezpečí na otevřeném modelu IFC. Nic v modelu se nemění.

:::warning
Jde o **jednoduché modely, které ukazují, co nebezpečí udělá s tímto uspořádáním**, nikoli o studii povodní, kontrolu větrné normy ani statický návrh. Každý výsledek uvádí své předpoklady.
:::

## Povodeň

Nastavte nejvyšší hladinu vody nad nejnižším podlažím a minuty, za které stoupne, zůstane a klesne. Voda vnikne do místnosti otvorem, jehož práh už přejde, a místnosti spojené s mokrými místnostmi otvory pod hladinou stojí na stejné úrovni (kvazistaticky). Tabulka uvádí, kdy se každá místnost poprvé zamočí a jak je hluboká; půdorys to přehrává. Zadejte nejvíce vody, kterou místnost snese, a místnosti nad touto hodnotou se označí jako varování. **Klimatické scénáře:** nahrajte vlastní soubor scénáře (JSON nebo CSV s rokem, zvýšením hladiny moře a faktorem povodně) a zvolte rok. Nebo zapněte doplněk Klimatické scénáře, vyberte scénář a rok: povodeň proběhne dvakrát, současný stav vedle budoucího (viz „Klimatické scénáře: povodeň, horko a požár v roce 2050 a 2080“). Druhy Vystavení požáru a Teplo: soubor budoucího počasí jsou ve stejném seznamu.

## Vítr

Tlak se řídí vztahem ½ρV², přičemž rychlost roste s výškou; síla na podlaží je tento tlak násobený součinitelem poryvu, oběma tlakovými součiniteli, šířkou a výškou podlaží. Dostanete smykovou sílu, klopný moment a výkyv.

## Zemětřesení

Smykový model budovy: hmotnost na podlaží (půdorysná plocha × kilogramy na metr čtvereční, které nastavíte), stejná tuhost v každém podlaží přizpůsobená první periodě, kterou zadáte (když ji nevyplníte, použije se desetina sekundy na podlaží a program to uvede), tlumení a vytvořený pohyb země (impuls nebo filtrovaný šum) při špičkovém zrychlení, které zvolíte. Výsledkem je vodorovný posun (drift) každého podlaží, zrychlení podlaží a základní smyková síla; pohled přehrává výkyv, nakreslený větší, než je. Zadejte přípustný poměr driftu a podlaží nad ním jsou varování. Model je pružný: nic se neprohne ani nepraskne.

## Tuhost podlaží z rámu Analysis

Pro zemětřesení nebo výkyv od větru zvolte jako zdroj tuhosti **Rám z karty Analysis** místo zadání periody. Každé podlaží je postupně vychýleno do strany, rám (nosníky, sloupy, ztužidla, desky) se vyřeší a tuhost podlaží při celkovém zapojení konstrukce řídí běh. Tíha je vlastní tíha prvků plus zatížení podlahy na metr čtvereční, které nastavíte v půdorysném boxu každého podlaží. Zobrazí se skutečná první perioda. Model je pružný: nic se neprohne a torze se nemodeluje. U větru zůstávají síly v podlažích předpokládané, jak je uvedeno výše (mocninový profil, váš součinitel poryvu a pevné tlakové součinitele, nikoli větrná norma); jen výkyv pochází z rámu, a to vyřešením celé matice tuhosti rámu proti těmto silám. Model potřebuje IFC s rámem, který karta Analysis dokáže přečíst.

## Jednotky

Hloubky vody, výkyv a drift po podlažích, vzdálenosti a plochy se zobrazují v {{ui:Jednotky}}, které jste zvolili. Síly (kN), časy a zrychlení si zachovávají své jednotky a hodnota, kterou zadáte do políčka označeného v metrech, zůstane v metrech. Totéž platí pro výsledky evakuace, denního světla, vytápění a chlazení a vybavení interiéru: délky, plochy a objemy se řídí vaší volbou; tlak, průtok, teplota, energie a výkon se nikdy nepřevádějí.

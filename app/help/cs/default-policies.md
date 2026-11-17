---
title: "Výchozí zásady: nastavte, s čím začne nová budova"
summary: Jednou nastavte, s jakým typem stěny, podlažími, prvním listem, značkami LOD, jednotkami a nástrojem začne nová budova, pro metrické i imperiální projekty, a sdílejte zásady v kanceláři jako malý soubor.
keywords: výchozí, výchozí hodnoty, výchozí zásady, zásada, kancelářský standard, kancelářské výchozí hodnoty, šablona, nová budova, první typ stěny, metrická stěna, zdivo, LOD, úroveň rozpracovanosti, první list, papír, měřítko, podlaží, výška podlaží, názvy podlaží, nástroj stěna, jednotky, sdílení, export, import, json
from: 42379aa5
---

## Co provedete

Řekněte BimCraftu, s čím má nová budova začít, aby nikdo v kanceláři nemusel měnit stejné věci pokaždé. Jde o doplněk: je vypnutý, dokud ho nezapnete, a zásada, kterou nenastavíte, ponechá výchozí hodnotu BimCraftu přesně tak, jak je.

:::note
Jde o výchozí hodnoty pro **nové** budovy a **nové** věci. Projekt, který jste už začali, se nemění.
:::

## Postup

1. Otevřete Nastavení, přejděte na {{ui:Doplňky}} a zapněte {{ui:Výchozí zásady}}.
2. V Nastavení otevřete kartu **BimCraft** a v seznamu vlevo vyberte {{ui:Výchozí zásady}}.
3. Nastavte zásady, které chcete. Každá začíná na **hodnotě BimCraftu**, s tím, co to je, v závorce. Zásada s políčky **Metrické** a **Imperiální** přijme jednu hodnotu pro každý druh projektu; vyplňte jen ty, které potřebujete.
4. Tlačítko Uložit neexistuje: každá změna se uloží hned, jak ji uděláte. Hodnota, kterou nelze použít, je slovně odmítnuta a stará zůstane.
5. Klikněte na {{ui:Nová budova}}. Dialog se vyplní z vašich zásad a každá hodnota, kterou zásada nastavila, je vedle sebe označena **z vašich Výchozích zásad**. Kteroukoli z nich můžete před {{ui:Vytvořit}} ještě změnit.

## Zásady

- **Jednotky nové budovy**: při Vytvořit se jednotky přepnou na tuto hodnotu.
- **Počet podlaží**, **Názvy podlaží** a **Výška podlaží**. V názvu `{n}` počítá 1, 2, 3; `{n0}` počítá 0, 1, 2; `{nn}` a `{nn0}` dělají totéž se dvěma číslicemi. Takže `Podlaží {nn0}` dá Podlaží 00, Podlaží 01, Podlaží 02.
- **První typ stěny**: co nástroj Stěna nakreslí jako první. Metrická kancelář může začít na Vnější zdivo 300 mm, zatímco imperiální projekty zůstanou u Vnější 2×6.
- **Značka LOD na výchozích typech stěn**: úroveň rozpracovanosti (LOD 100 až 500), kterou devět výchozích typů ukazuje všude, kde je typ uveden. Viz [Sestavení stěnových skladeb](topic:wall-assemblies).
- **LOD nově vytvořeného typu stěny**: značka, se kterou nový typ začne v editoru typů. Můžete ji tam změnit.
- **První list**: jeho papír, měřítko, číslo listu a název (použijte `{level}` pro název nejnižšího podlaží), nebo žádný první list.
- **Velikosti poznámek na papíře** (Nastavení › Globální › Výchozí zásady): výšky kanceláře v milimetrech, jak se tisknou, pro poznámky, text kót, značky, názvy místností, písmena bublin os, názvy pohledů a text výkazů. Nová budova je převezme při Vytvořit a uchová je ve svém souboru. Viz [Kreslení v plné velikosti, poznámky podle měřítka](topic:annotation-sizes).
- **Nástroj aktivní po Vytvořit**: Vybrat, jako to dělá BimCraft sám, nebo Stěna, aby první dvě kliknutí na půdorysu už nakreslila stěnu.

## Rozvržení výkazů: kancelářský standard

V **Nastavení › Globální › Výchozí zásady**, pod **Rozvržení výkazu (kancelářský standard)**, nastavte, jak se seskupuje každý výkaz, zda má mezisoučty a celkový součet, jeho název a velikost písmen v záhlaví sloupců. Každý výkaz, který si nestanoví vlastní, je převezme, ať ho nastaví kdokoli. Viz [Rozvržení, uložení a export výkazu](topic:schedule-layouts).

## Sdílení v kanceláři

1. V Nastavení otevřete kartu **Globální** a vyberte {{ui:Výchozí zásady}}.
2. Napište **Název kanceláře**, pokud chcete. Zapíše se do souboru.
3. Klikněte na {{ui:Uložit do souboru}}. Dostanete malý soubor končící na `.ccdefaults.json`.
4. Na jiném počítači doplněk zapněte, otevřete totéž místo a klikněte na {{ui:Načíst ze souboru}}. Zásady ze souboru nahradí ty na tomto počítači.

Karta Globální má také **Soustavu jednotek nového projektu**, která platí pro každou aplikaci s doplňkem, a {{ui:Obnovit všechny zásady}}. {{ui:Obnovit výchozí hodnoty BimCraftu}} na kartě BimCraft vymaže jen zásady BimCraftu.

## Dobré vědět

- Soubor je prostý, čitelný JSON: seznam názvů zásad a hodnot. Zásada, kterou soubor uvádí a tato verze nezná, se vynechá a je jmenována ve zprávě; zbytek se načte.
- Zásady se uchovávají v tomto prohlížeči pro každou aplikaci CadCraft na tomto počítači. Neukládají se do souboru budovy a nesynchronizují se mezi počítači: použijte soubor.
- Značka LOD na výchozím typu pochází ze zásady na tomto počítači. Typ, který vytvoříte jako kopii výchozího, nese svou značku v souboru budovy.
- BimCraft nemá nastavení přesnosti, takže zde není zásada přesnosti.
- Budova začatá ze šablony přebírá vlastní podlaží a listy šablony. Zásada typu stěny a zásada jednotek stále platí.
- Vypnete-li doplněk, je vše zase vlastní BimCraftu. Vaše zásady se uchovají pro případ, že ho znovu zapnete.

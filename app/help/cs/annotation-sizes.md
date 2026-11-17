---
title: Kreslení v plné velikosti, poznámky podle měřítka
summary: Budova se vždy kreslí v plné velikosti. Text, kóty, značky, názvy místností, bubliny os a symboly mají velikost na papíře v milimetrech tak, jak jsou vytištěny, a tuto velikost si zachovají, když se měřítko výkresu změní z 1:100 na 1:50.
keywords: měřítko poznámek, anotativní, velikost textu, výška textu, výška na papíře, velikost textu kót, velikost značky, velikost názvu místnosti, bublina osy, velikost symbolu, měřítko výkresu, 1:50, 1:100, firemní standard, písmo, kreslení v 1:1, plná velikost, text na listu
from: 94118788
---

## Co provedete

Nastavte jednou pro celou budovu, jak vysoké bude písmo na vašich výkresech na papíře. Model nikdy nepřeměřujete a text nikdy neupravujete podle měřítka: BimCraft velikost dopočítá z výšky na papíře a měřítka výkresu.

## Jak to funguje

- Model je v plné velikosti. Stěna dlouhá 10 m má 10 000 mm v každém měřítku.
- Poznámka má **výšku na papíře**: výšku velkého písmene na vytištěném listu v milimetrech.
- Při měřítku 1:100 je text 2.5 mm vysoký v modelu 250 mm; při 1:50 je 125 mm. Na papíře má 2.5 mm v obou případech.
- Symboly v půdorysu (elektro, instalace) se kreslí v milimetrech na papíře a řídí se stejným pravidlem.

## Postup

1. Otevřete prohlížeč projektu. Pod {{ui:Listy}} klikněte na {{ui:Velikosti poznámek…}}.
2. Zadejte výšku v milimetrech pro typy, které chcete nastavit: {{ui:Poznámky a popisky}}, {{ui:Text kót}}, {{ui:Značky a názvy podlaží}}, {{ui:Názvy místností}}, {{ui:Písmena bublin os}}, {{ui:Názvy pohledů na listech}} a {{ui:Text tabulek}}. Prázdné pole ponechá vlastní velikost BimCraftu, zobrazenou šedě.
3. Klikněte na {{ui:Uložit}}. Je to jeden krok, který lze vrátit zpět.

Od té doby používají velikosti všechny listy, sada výkresů, PDF půdorysu i pohledy a řezy. Mezera mezi kótovací čarou a jejím textem, velikost bubliny osy i výška řádku tabulky rostou spolu s textem.

## Půdorys s vlastním měřítkem

Dejte půdorysu měřítko v jeho rozsahu pohledu ({{ui:Měřítko}}; viz [Pohledy a listy](topic:views-and-sheets)). Pak:

- na obrazovce se názvy místností, značky, text kót a bubliny os kreslí v tištěné velikosti vůči modelu, takže vidíte, co bude na listu;
- symboly v půdorysu a jejich značky jsou dimenzovány pro dané měřítko. Změníte-li měřítko z 1:100 na 1:50, jsou v modelu poloviční a na papíře stejné.

Půdorys bez vlastního měřítka si zachová pevný text na obrazovce a jeho symboly jsou dimenzovány pro 1:50 (1/4" = 1'-0" v palcích a stopách), jako dříve.

## Velikosti vaší kanceláře

S doplňkem Default Policies zapnutým nastavte výšky pro kancelář v Nastavení › Globální › Default Policies › {{ui:Velikosti poznámek na papíře}}. Nová budova je převezme, když kliknete na Vytvořit. U budovy, kterou jste již začali, má dialog {{ui:Použít velikosti mé kanceláře}}. Viz [Default Policies](topic:default-policies).

## Velikosti z předpisového balíčku

Předpisový balíček může nastavit výšky textu, které jeho místo vyžaduje (doplněk Building regulations, konvence výkresů). Zaškrtněte balíček v Nastavení › Building regulations; pak v dialogu klikněte na {{ui:Použít velikosti z předpisového balíčku}}: pole se vyplní, vy je zkontrolujete a uložíte. Velikost, kterou balíček udává v bodech, je velikost písma a převede se na výšku velkých písmen, proto ji zkontrolujte. Nic se nenastaví, dokud neuložíte.

## Co byste měli vidět

- Stejná výška textu v milimetrech na listu v 1:100 i na listu v 1:50, zatímco samotný půdorys je při 1:50 dvakrát větší.
- Velikosti putují s budovou: jsou uloženy v jejím souboru IFC.

## Dobré vědět

- Vlastní velikosti BimCraftu jsou ty, které jeho listy používaly odjakživa (asi 1.5 mm velká písmena pro text kót). Nejsou to kreslířský standard: nastavte si velikosti své kanceláře.
- Výška musí být od 0.5 do 50 mm.
- Písmo razítka a legendy klíčových poznámek do toho nespadají: zachovávají si vlastní velikosti.

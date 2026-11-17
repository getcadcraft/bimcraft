---
title: Pozemek, budova na něm a její podlaží
summary: Nakreslete obrys pozemku, umístěte a natočte budovu na pozemku, přidejte podlaží v zadaných výškách nebo rozdělte výšku budovy a kreslete na podlaží, které zvolíte.
keywords: pozemek, situace, stavební čára, odstup, služebnost, věcné břemeno, průchod, hranice pozemku, parcela, hranice, umístění budovy, otočit budovu, umístit budovu, podlaží, patra, přidat podlaží, rozdělit výšku, výška podlaží, IfcSite, IfcBuilding, IfcBuildingStorey, prostorová struktura
from: 48d10c1e
---

## Co uděláte

Nastavte části modelu IFC, které nesou všechno ostatní: pozemek, budovu na něm a podlaží budovy.

Model je uspořádán jako **pozemek**, který drží **budovu**, a ta drží svá **podlaží**; stěny, podlahy a vše ostatní patří k podlaží. {{ui:Soubor}} › {{ui:Nová budova}} nastaví všechny tři. Model z jiného programu, který má budovu, ale žádný pozemek, dostane pozemek při prvním nakreslení: budova je na něm umístěna tam, kde už byla.

## Nakreslete pozemek

1. Zapněte {{ui:Kreslení}}, pak zvolte {{ui:Sestavení}} › {{ui:Pozemek}}.
2. Klikněte na rohy pozemku (nástroj přichytává jako nástroj Stěna). Klikněte na první roh znovu, dvakrát klikněte nebo stiskněte {{key:Enter}}, čímž dokončíte. {{key:Backspace}} vezme roh zpět.
3. Řádek ukazuje plochu pozemku. Nakreslete jej znovu, chcete-li jej změnit.

Půdorys každého podlaží ukazuje obrys pozemku jako hranici pozemku.

## Umístěte budovu na pozemek

Při zapnutém {{ui:Pozemek}} zadejte **X** a **Y** budovy na pozemku a její **Natočení** ve stupních, nebo klikněte na {{ui:Umístit budovu kliknutím}} a klikněte, kam má přijít počátek budovy. Vše v budově (podlaží, stěny, mřížky, vše, co jste nakreslili) se posune s ní; pozemek a jeho obrys zůstávají. Půdorysy stále zobrazují každé podlaží kolmo k budově.

## Stavební čáry a služebnosti

Stavební čáry a služebnosti (věcná břemena, práva průchodu) se kreslí na pozemku jako omezení. **Varují, nikdy neblokují**: stěna přes ně se nakreslí, jak jste požadovali, a v Problémech se objeví varování s názvem stěny a čáry nebo služebnosti. Přesunete-li stěnu zpět, varování zmizí. Varování lze potvrdit s důvodem (například výjimku, kterou udělil úřad).

- **Stavební čára z odstupů.** {{ui:Sestavení}} › {{ui:Stavební čára}}, pak {{ui:Odstupy}}: zadejte, jak daleko čára stojí od každé hranice pozemku. Hranice jsou očíslovány na půdorysu, dokud je nástroj zapnutý. Čára se spočítá z těchto vzdáleností a bude následovat obrys pozemku, pokud jej nakreslíte znovu se stejným počtem hranic. Vzdálenosti jsou vaše, čerpané z vlastnického listu nebo územního plánu; BimCraft žádné nedoplňuje.
- **Nakreslená stavební čára.** Při zapnuté {{ui:Stavební čára}} klikejte na její body a dokončete dvojklikem nebo {{key:Enter}}. Dokončete na prvním bodě pro uzavřenou čáru: plocha uvnitř je ta, kde se smí stavět, a stěna s jakoukoli částí vně ní je varována. Otevřená čára varuje jen o stěně, která ji protíná.
- **Služebnost.** {{ui:Sestavení}} › {{ui:Služebnost}}: zvolte její druh, zadejte její název, registrovaný odkaz a šířku, pak klikněte na střední čáru a dokončete (pás), nebo ji uzavřete na prvním bodě (plocha). Stěna s jakoukoli částí na ní je varována, na každém podlaží.
- Plocha přesně na čáře se dotýká, neprotíná ji (tolerance je 1 mm).
- Aktuální varianta hmoty každé sady variant se kontroluje stejně jako stěny: hmota vně hranice, přes stavební čáru nebo na služebnosti dostane varování. Viz [Varianty hmot vedle sebe](topic:massing-options).
- Vyberte jednu nástrojem {{ui:Vybrat}} a změňte její název, odkaz, druh nebo šířku, přesuňte ji, nebo ji smažte.

Kreslí se na půdorysu každého podlaží, na listech a v PDF půdorysu: stavební čáry čárkovaně, služebnosti tečkovaně, každá s popiskem. V souboru IFC je každá anotace (IfcAnnotation, typ BuildingLine nebo Servitude) na pozemku, s čárou jako prostou křivkou, kterou mohou číst jiné programy. Kontrola používá skutečný obrys každé stěny na půdorysu, se spoji tak, jak jsou nakresleny; zakřivená stěna se kontroluje podle své tloušťky kolem střední čáry.

## Přidejte podlaží

V panelu {{ui:Podlaží}} přidá {{ui:Přidat podlaží nahoru}} jedno, {{ui:Přidat úroveň pod}} přidá jedno pod nejnižší (suterén, v záporné výšce). {{ui:Přidat podlaží…}} přidá několik najednou:

- **Ve výškách**: zadejte výšky nad nejnižším podlažím, oddělené čárkami (například `12', 24', 36'`). Výšky, kde už podlaží je, se přeskočí.
- **Rozdělit výšku budovy**: zadejte výšku budovy a počet podlaží. Podlaží, která máte, se přesunou na nové výšky od nejnižšího nahoru, chybějící se přidají a ta nad nimi zůstanou, kde jsou.

Stěny, které vedou do podlaží nad nimi, ho následují, stejně jako sloupy a rampy.

{{ui:Kopírovat toto podlaží…}} (v témže panelu) zkopíruje, co je nakresleno na podlaží, které právě vidíte, na jiné podlaží nebo na nové podlaží nahoře, takže půdorys lze v jednom kroku přenést nahoru budovou. Viz [Kreslení stěn](topic:draw-walls).

## Kreslení na podlaží

Každý nástroj {{ui:Kreslení}} pracuje na podlaží zvoleném v seznamu podlaží půdorysu (nebo vybraném v panelu {{ui:Podlaží}}): co nakreslíte, patří tomuto podlaží.

## Co byste měli vidět

- Každá z těchto změn je jeden krok: {{key:Mod+Z}} ji vrátí zpět.
- V souboru IFC: pozemek (IfcSite) s obrysem a plochou, budova (IfcBuilding) na něm umístěná a podlaží (IfcBuildingStorey) v budově.

Viz také [Souřadnice v BimCraft](topic:coordinates) pro počátek projektu a geodetický bod.

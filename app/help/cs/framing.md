---
title: Konstrukce stěn, podlah a střech
summary: Vytvořte sloupky, vodorovné prahy, překlady, trámy, krokve nebo vazníky z modelu a uchovejte je s ním; vytvoří se znovu, když se změní stěny, otvory, podlahy nebo střecha, a výkaz Řezivo je řezný seznam.
keywords: TJI, I-nosník, tabulka rozpětí trámů, načtení tabulky, konstrukce, rám, sloupek, sloupky, vodorovný práh, horní práh, překlad, krajní sloupek, podpěrný sloupek, lemovací trám, krátký sloupek, parapet, příčné vyztužení, roh, kalifornský roh, T-spoj, trám, obvodový trám, krokev, nárožní krokev, úžlabní krokev, krátká krokev, hřebenová pálka, stropní trám, kleštiny, vazník, řezivo, řezný seznam, board feet, 2x4, 2x6, rozteč, osová vzdálenost
from: 76d0ffb5
---

## Co uděláte

Vytvořte konstrukci budovy z toho, co jste nakreslili. BimCraft rozmístí sloupky, vodorovné prahy a překlady ve stěnách, trámy v podlahách a krokve (nebo vazníky) ve střeše, rozměří je podle označených výchozích tabulek, uchová je s modelem a vytvoří je znovu, kdykoli se změní to, co nesou. Výkaz **Řezivo** je řezný seznam.

## Vytvořte konstrukci

1. Na úrovni otevřete {{ui:Sestavení}} a zvolte {{ui:Konstrukce}}.
2. Zvolte **rozteč** (16" nebo 24" osově; 400 nebo 600 mm), **rohy** (tři sloupky, nebo kalifornský), **Krokve** nebo **Vazníky** pro střechy a zda stěny dostanou řadu **příčného vyztužení** v polovině výšky. Pro podlahy zvolte **Řezivo** nebo **TJI (předběžně)** a nastavte směr trámů na automatický, osu X nebo osu Y půdorysu.
3. Klikněte na **Konstruovat každou stěnu**, nebo klikněte na jednu stěnu, podlahu nebo střechu (na úrovni, na které střecha leží), abyste konstruovali jen tuto.

Vypněte **Zobrazit konstrukci**, chcete-li skrýt každý kus konstrukce, jako vrstvu; **Průhled** skryje stěny, podlahy a střechy, které jsou zkonstruovány, takže vidíte jen konstrukci.

## Co dostanete

- **Stěny**: spodní práh (vyříznutý u dveří), dvojitý horní práh, sloupky na rozvržení od začátku stěny, krajní a podpěrné sloupky a překlad u každých dveří a oken, krátké sloupky nad překlady a pod okny, hrubý parapet pod okny, rohy tam, kde se stěny stýkají (stěna, která prochází, přebírá rohové sloupky), dva podpůrné sloupky tam, kde se do stěny napojuje jiná stěna jako T, a příčné vyztužení mezi sloupky.
- **Podlahy**: trámy napříč přes kratší směr podlahy ve výchozím stavu, nebo podél zvolené osy půdorysu; obvodové trámy kolem okraje a zdvojené lemovací trámy a překlady kolem schodišťové šachty, s trámy procházejícími šachtou zkrácenými (krátké trámy). Režim TJI zvolí nejmenší uvedenou řadu a výšku, která dosáhne změřeného světlého rozpětí při zvolené rozteči.
- **Střechy**: běžné krokve kolmo ke každému okapu, krátké krokve tam, kde je přeřezávají valby a úžlabí, nárožní a úžlabní krokve, hřebenové pálky, stropní trámy na věncích a kleštiny — nebo jednoduché vazníky v rozteči, každý jeden kus.

## Změňte ji

Vyberte jakýkoli kus konstrukce ve 3D pohledu nebo ve stromu modelu. **Vlastnosti** ukážou jeho konstrukci: změňte rozteč, typ a směr trámů podlahy, rohy, vyztužení nebo konstrukci střechy. Posun stěn, dveří a oken nebo změna podlahy či střechy způsobí, že se konstrukce vytvoří znovu sama od sebe.

Chcete-li zachovat kus, který jste umístili záměrně, když se konstrukce vytváří znovu, vyberte jej a zvolte **Ponechat tento kus, až se konstrukce znovu vytvoří**. Ponechaný kus zůstane, kde je; když se konstrukce kolem něj změní, je označen, abyste jej mohli zkontrolovat.

## Podlahy TJI z tabulky, kterou načtete

BimCraft nenese tabulky rozpětí výrobce trámů (jsou výrobcovy a mění se s každým vydáním). Vyberte konstrukci podlahy, nastavte **Trámy podlahy** na **TJI (předběžně)** a zvolte **Načíst tabulku…** ve **Vlastnostech**: soubor ve formátu `cadcraft-tji-table`, JSON nebo CSV, který jste vytvořili z aktuálních tabulek rozpětí výrobce. Uvádí výrobce, výrobek a vydání a odkud čísla pocházejí, a pro každý zatěžovací stav (užitné zatížení, stálé zatížení, mez průhybu, délku uložení) uvádí největší světlé rozpětí každé řady a výšky při každé rozteči.

- BimCraft převezme **světlé rozpětí** podlahy, zvolí nejmělčí výšku a v ní řadu, jejíž uvedené rozpětí jej dosáhne pro zvolenou rozteč a zatěžovací stav, a podlahu s ní zkonstruuje. Je-li rozpětí nebo rozteč mimo tabulku, řekne to a nic nezmění.
- Zatížení, mez průhybu, délka uložení, tabulka a věta „Předběžné návrhové pokyny; konečný výběr vyžaduje tabulky výrobce a zatížení projektu“ se vytisknou na výkaz Řezivo, zapíší se do modelu s konstrukcí a uvedou se v panelu **Problémy** jako poznámka. Tabulka označená jako příklad to říká ve varování.
- Je-li zapnut doplněk **Stavební předpisy**, jeho pravidlo pro trámy podlahy čte i načtenou tabulku; bez tabulky se TJI trámy z této kontroly vynechají, jako dříve.
- Tabulka zůstává v tomto prohlížeči, dokud ji nesmažete nebo nenačtete jinou. Soubor: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: palce, stopy, psf; nebo `metric`: mm, metry, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) a `rows` (`series`, `depth`, `spans`: pro každé id stavu rozteč a největší světlé rozpětí, například `"16": "15-6"`). V CSV jsou tytéž údaje na řádcích `# klíč = hodnota`, pak `series,depth,case,spacing,span`.
- Bez načtené tabulky se rozvržení TJI odmítne a nic se nezmění: **Načtěte tabulku TJI: tabulky výrobce patří výrobci a nejsou zabudovány.** Model konstruovaný starší zabudovanou tabulkou TJI (před touto změnou) si ponechá každý trám, který má; Vlastnosti a Problémy uvádějí, že je potřeba tabulka, a podlahu lze zkonstruovat znovu, až načtete jednu. Trámy z masivního řeziva fungují jako dřív.

Jde o orientační návrh rozvržení. Konečný výběr trámů vyžaduje tabulky výrobce, zatížení projektu a inženýra.

## Řezný seznam

V panelu Výkazy zvolte **Řezivo**: každý kus konstrukce seskupený podle rozměru a podle délky na skladě, kterou byste koupili (celé délky po 2' od 8'; kroky po 600 mm v milimetrech), s počtem kusů a board feet. **CSV** jej stáhne.

:::warning
Rozměry překladů, trámů, krokví a stropních trámů pocházejí z označených výchozích tabulek pro typický jedno- nebo dvoupodlažní dům, nikoli z výpočtu. **Vlastnosti** uvedou, kdy rozpětí nebo otvor přesahuje svou tabulku. Projektant nebo inženýr zkontroluje rozpětí, zatížení a spoje.

Rozvržení TJI používá jen tabulku, kterou načtete; vytvořenou z aktuálních tabulek rozpětí výrobce, BimCraft žádnou nedodává. Návrh nekontroluje uložení, bodová zatížení, konzoly, otvory, překlady schodišťových šachet ani spoje a I-profil v modelu je schematický.
:::

## Co se ukládá

Každá zkonstruovaná stěna, podlaha nebo střecha je sestava prvků IFC („Framing“) z prvků IFC (sloupky, prahy, krokve, kleštiny, příčné vyztužení, vazníky) a nosníků (překlady, trámy, obvodové trámy, hřebenové pálky), každý s rozměrem, délkou a board feet.

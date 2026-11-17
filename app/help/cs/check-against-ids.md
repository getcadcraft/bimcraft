---
title: Kontrola modelu proti IDS zadavatele
summary: Načtěte soubor .ids, který jste dostali, a v Problémech uvidíte každý prvek, který mu nevyhovuje, dříve než IFC předáte.
keywords: ids, specifikace pro doručování informací, buildingsmart, požadavky, předání, kontrola, validace, qa, eir, bep, vlastnost, klasifikace, materiál, zadávání
from: 7b960222
---

## Co uděláte

IDS (Information Delivery Specification, specifikace pro doručování informací, standard buildingSMART) je seznam toho, co musí IFC obsahovat: které třídy, které vlastnosti s jakými hodnotami, klasifikace, materiály a kam které prvky patří. Zadavatelé a veřejné zakázky ho posílají spolu se zakázkou. BimCraft otevřený model IFC proti němu zkontroluje a vypíše každý prvek, který nedosahuje požadavků.

## Postup

1. Otevřete model IFC.
2. Otevřete {{ui:Kontrola podle IDS}} v levém panelu pod {{ui:Kontroly modelu}}, nebo zvolte {{ui:Zkontrolovat podle IDS…}} z nabídky podle nastavení rozhraní.
3. Klikněte na {{ui:Načíst soubor .ids…}} a vyberte soubor. Nic se nenahrává.
4. Přečtěte výsledek: u každé specifikace {{ui:Vyhovuje}} nebo {{ui:Nevyhovuje}} a kolik prvků se na ni vztahuje.
5. Otevřete Problémy ({{key:Ctrl+Shift+M}}) a klikněte na nevyhovující položku: prvek se vybere a přiblíží.

## Co uvidíte

- Jedno varování pro každý prvek a každý požadavek, který nesplňuje, s názvem specifikace, tím, co IDS požaduje, a tím, co prvek má.
- Požadovaná specifikace, na kterou v modelu nic neodpovídá, je samostatné varování.
- Protokol kontroly (v Problémech) začíná IDS: jeho názvem, verzí, autorem a počtem použitelných, vyhovujících a nevyhovujících prvků u každé specifikace.

## Dobré vědět

- IFC si uchovává jen odkaz na IDS (jeho název, titul, verzi a hash), ne samotné IDS: IDS klienta může být důvěrné a IFC jde dalším lidem. IDS zůstává v tomto prohlížeči vedle modelu, takže když znovu otevřete uložené IFC zde, kontroluje se znovu. Načtení nebo zapomenutí IDS je jeden krok, který lze vrátit zpět.
- Pokud je model otevřen na jiném počítači nebo v jiném prohlížeči, Problémy zobrazí poznámku, že IDS nebylo nalezeno: načtěte ho znovu, aby se kontrola provedla.
- Chcete-li poslat IDS spolu s IFC, zapněte v Nastavení na kartě BimCraft volbu {{ui:Ponechat IDS uvnitř IFC}} ještě před načtením.
- Každá úprava, každý krok zpět i znovu se kontroluje o chvíli později.
- Hodnoty se porovnávají podle pravidel IDS: text přesně (záleží na velikosti písmen), čísla v jednotkách SI s malou tolerancí (délky v metrech, takže model v milimetrech se nejprve převede).
- Specifikace psaná pro jinou verzi IFC (například IFC2X3, když je model IFC4) se přesto kontroluje; výsledek to uvede.
- Pokud soubor IDS obsahuje chyby, které by audit IDS označil, dialog je vypíše; specifikace, v nichž jsou, nevyhovují.
- Nevyhovující prvek můžete přijmout s uvedením důvodu jako jakýkoli problém. Zůstane přijatý, dokud se hodnoty prvku nezmění.

- Vzory v IDS se čtou jako celá hodnota. Znak `^` na začátku a `$` na konci se také berou jako „celá hodnota“, jak to většina souborů IDS myslí.

## Dále

- [Kontrola modelu na časté problémy](topic:model-checks)
- [Úprava stěny nebo dveří](topic:change-a-wall-or-door)

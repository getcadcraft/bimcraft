---
title: Rodiny a jejich velikosti
summary: Dveře, okna a nábytek přicházejí v rodinách. Každá velikost rodiny je jeden typ v souboru IFC, takže seznam typů zůstane v BimCraftu krátký, zatímco ostatní programy čtou obyčejné typy.
keywords: rodina, rodiny, typ, typy, velikost, velikosti, typ dveří, typ oken, nábytek, stůl, police, skříňka, nová velikost, duplikovat, umístit rodinu, soubor rodiny, ccfamily, knihovna IFC, knihovna projektu, skupina, viditelnost, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Co je rodina

Rodina je jeden druh věci v několika velikostech: jedny jednokřídlé dveře, které jsou široké 32, 36 a 42 in, nebo stůl, který je dlouhý a krátký. V BimCraftu vidíte rodinu jednou, s jejími velikostmi pod ní, místo dlouhého seznamu typů.

IFC rodiny nezná. V souboru je každá velikost obyčejný typ (typ dveří, typ oken, typ nábytku…) a rodina je skupina, která své velikosti vypisuje. Ostatní BIM programy čtou typy a skupinu tak, jak jsou; BimCraft z nich rodinu načte zpět.

## Kde je najdete

- Skupina **Rodiny** v průzkumníku projektu uvádí rodiny v tomto modelu, s počtem velikostí každé a počtem umístěných. Pod nimi jsou **Startovací rodiny**: dveře a okna z nástrojů Dveře a Okno a stůl, police a spodní skříňka.
- {{ui:Build}} › {{ui:Families…}} ukazuje stejný seznam v okně.
- Klikněte na rodinu, abyste ji otevřeli: uvidíte její velikosti, hodnoty každé velikosti a kolik prvků každou používá.

## Dveře a okna

Nástroje Dveře a Okno vypisují rodiny daného druhu a vedle nich **seznam velikostí**. Vyberte velikost, nebo napište **W** a **H**: šířka a výška, které žádná velikost ještě nemá, se při umístění dveří stanou novou velikostí rodiny. Dveře stejné velikosti sdílejí jeden typ.

V {{ui:Properties}} vybraných dveří nebo oken se ukazují jejich **Rodina** a **Velikost**. Vyberte jinou velikost ze seznamu, nebo zadejte novou šířku či výšku. {{ui:Open the family}} otevře rodinu, ke které patří.

Rám každých dveří nebo oken se řídí tloušťkou jeho vlastní stěny, jako před zavedením rodin. Typ velikosti také uchovává dveře nakreslené ve stěně 140 mm, pro programy, které typy čtou.

## Nová velikost z této rodiny

1. Otevřete rodinu.
2. V části **Nová velikost z této rodiny** napište její hodnoty (Width, Height a ostatní parametry rodiny) a případně název. Bez názvu se pojmenuje podle svých hodnot.
3. Klikněte na {{ui:Make the size}}.

Dvě velikosti nemohou mít stejné hodnoty. **Přejmenovat** změní název velikosti; **Odebrat** odstraní velikost, kterou nikdo nepoužívá; **Vybrat** vybere prvky dané velikosti.

## Umístění nábytku

1. {{ui:Build}} › {{ui:Place family}}, nebo {{ui:Place}} v okně rodiny.
2. V liště vyberte rodinu a její velikost.
3. Klikněte do půdorysu a umístěte kus na podlaží. Před kliknutím stiskněte {{key:R}} pro otočení o 90°. {{key:Esc}} ukončí.

Vlastnosti umístěného kusu ukazují jeho velikost, kde je a o kolik je otočen; {{key:Delete}} jej odstraní. Každý kus jedné velikosti sdílí tvar této velikosti, takže změna rodiny změní všechny.

## Velikosti z tabulky

{{ui:Sizes from a table…}} v okně rodiny čte soubor CSV (čárka, středník nebo tabulátor). První řádek pojmenovává sloupce: název nebo popisek parametru a volitelně `Name`. Délky jsou v milimetrech, pokud nenapíšete jednotku (`1.2 m`, `36 in`). Sloupce Ano / Ne přijímají yes, no, true, false, 1 nebo 0 a parametr bez sloupce si zachová výchozí hodnotu. Každý řádek se stane velikostí, a to v jednom kroku, který lze vrátit zpět; velikost, která už existuje, se přeskočí. Jeden řádek, který se nedá načíst nebo který rodina nedokáže nakreslit, odmítne celou tabulku a uvede své číslo řádku. Nejvýše 200 řádků a 1 MB. {{ui:Save the sizes as a table}} zapíše stejnou tabulku zpět.

## Nastavení na každém prvku

Parametr označený v editoru jako **Pro každý prvek** (Ano / Ne, který přidá příčku, popisek nebo materiál) není součástí velikosti: dvoje dveře jedné velikosti se mohou lišit. Vyberte prvek a **Vlastnosti** ukážou tyto parametry; změníte-li jeden, prvek se překreslí se svým vlastním tvarem (nábytek a zařízení dostanou vlastní tvar, dveře a okna se znovu vytvoří ve svých stěnách). Nastavíte-li je všechny zpět na výchozí, vrátí se na tvar své velikosti.

## Úroveň podrobnosti

{{ui:Build}} › {{ui:Families…}} › **Úroveň podrobnosti** nastaví pro každou rodinu v modelu, co se uloží do těles a co se kreslí v symbolech půdorysu: **Jemná** zachová vše, **Střední** a **Hrubá** vynechají části, které editor označí jako jemnější (menší soubory, rychlejší zobrazení). **Automaticky** uloží vše a nechá pohled listu vybrat podle jeho měřítka: 1:50 a větší jemná, 1:100 střední, 1:200 a menší hrubá. Jeden krok, který lze vrátit zpět.

## Duplikace rodiny

Nemusíte začínat od nuly. {{ui:Duplicate}} zkopíruje rodinu i s jejími parametry, tělesy a velikostmi pod novým názvem. Kopii upravte v editoru; původní zůstane beze změny.

## Soubory rodin

- {{ui:Save the family file}} uloží `.ccfamily.json`: parametry rodiny, tělesa a velikosti. Otevřete jej v jiném modelu pomocí {{ui:Open a family file…}} ve skupině Rodiny.
- {{ui:Save as IFC}} uloží rodinu jako malý soubor IFC: typy jejích velikostí a její skupinu, deklarované knihovnou projektu IFC. Ostatní programy jej otevřou jako sadu typů; BimCraft jej otevře jako rodinu zpět.

Soubor rodiny otevřený zde se čte jako data a před zápisem se kontroluje. Rodina, jejíž klíč už je v modelu, se načte jako samostatná rodina. Rodina, která obsahuje jiné (viz Vnořené rodiny v nápovědě k editoru), je přinese s sebou: soubor je vypíše a model si ponechá ty, které už má.

## Rodiny v Knihovně

Otevřete {{ui:Families…}} a vyberte {{ui:From the Library…}}, abyste viděli rodiny sdílené v Knihovně. {{ui:Add to this project}} ji načte jako soubor rodiny: BimCraft zkontroluje každé pole, než cokoli vytvoří, rodina se načte jako vlastní rodina a otevře se v editoru. Přidání je jeden krok, který lze vrátit zpět. Vlastní rodinu sdílíte pomocí {{ui:Save all as a library}} a odesláním souboru do Knihovny (správci Knihovny publikují soubor rodiny příkazem a každá rodina je samostatná položka se svými velikostmi). Pokud se k Knihovně nelze připojit, seznam to uvede a nic se nezmění.

## Typy z jiných programů

Typy vytvořené jinými programy se také zobrazují ve skupině Rodiny, seskupené podle odhadu: podle části názvů jejich prvků před prvním dvojtečkou, jinak podle názvů typů, které se liší jen čísly. Okno rodiny říká, který odhad použilo. Jsou vypsány a jejich prvky můžete vybírat, ale tady se neupravují: nemají postup rodiny.

:::note
Startovní dveře a okna jsou nakresleny přesně jako před zavedením rodin. Soubory vytvořené před rodinami se otevřou beze změny: jejich dveře a okna se zobrazují pod svou rodinou s velikostmi, které se používají, a při první změně se přesunou na vlastní velikost.
:::

Viz také [Úprava rodiny](topic:family-editor) a [Dveře a okna](topic:doors-and-windows).

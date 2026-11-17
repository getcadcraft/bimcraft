---
title: Symboly, typy a assety, šablony projektů a rychlé sady
summary: Knihovna má tři druhy položek (symboly, typy, assety). Přidejte typ do projektu, začněte od sdílené šablony projektu, přidejte rychlou sadu a sdílejte vlastní přes stránku pro nahrávání v knihovně.
keywords: knihovna, symboly, typy, assety, typ, typ stěny, typ podlahy, typ střechy, typ stropu, šablona projektu, šablona, rychlá sada, sada, sdílet, nahrát, verze, changelog, LOD, klasifikace, licence, poznámky z praxe
from: e13b0e67
---

## Co budete dělat

Najděte v knihovně, co potřebujete, podle toho, čím to je, přidejte typ do projektu, který kreslíte, začněte nový projekt ze šablony, kterou někdo sdílel, a sdílejte vlastní šablony, typy a sady.

## Tři druhy položek knihovny

- **Symboly** jsou konvence kreslení: jen 2D, nakreslené ve velikosti anotací, seskupené podle oboru.
- **Typy** říkají, z čeho prvek je: jeho vrstvy se skutečnou tloušťkou, jeho úroveň rozpracovanosti (LOD) a jeho klasifikační kód. Typ se přidává do projektu, nekreslí se.
- **Assety** jsou fyzické objekty, jako dveře, okna, nábytek, armatury a zařízení, s půdorysným pohledem a 3D tělesem ve skutečné velikosti.

Na záložce {{ui:Library}} zvolte {{ui:Library}} a v **Druh položky** zobrazte Vše, Symboly, Typy nebo Assety.

## Přidání typu do projektu

1. V **Druh položky** vyberte **Typy** a otevřete jeden.
2. Pod obrázkem zkontrolujte jeho skladbu, LOD a klasifikaci, pak zvolte {{ui:Add to this project}}.
3. Přidá se jako typ stěny, podlahy, střechy nebo stropu, kterým můžete kreslit. Pokud už tam typ se stejným názvem je, nový se přidá jako kopie a váš zůstane beze změny. Jeden krok zpět jej odstraní.

## Šablony projektů a rychlé sady

Zvolte {{ui:Kits}} a uvidíte, co lidé sdíleli.

- **Šablona projektu** je soubor IFC s úrovněmi, sítěmi, typy a nastaveními. {{ui:Save to my templates}} ji uloží do Nová budova pod **Začít z**.
- **Rychlá sada** je seznam položek knihovny. {{ui:Show the kit's items}} je zobrazí jako karty, které můžete umístit.
- Každá sada má verzi a changelog, od nejnovějšího. Verze začínající 0 slouží k diskusi; 1.0.0 je jen pro to, co vlastník řady přijal.

## Sdílení vlastních

- **Šablona projektu:** {{ui:Save as template}}, zaškrtněte {{ui:Also make a file to share in the Library}}, doplňte, co obsahuje, a verzi. Dostanete soubor `.json`.
- **Rychlá sada:** v {{ui:Kits}} zvolte {{ui:Make a Quick Kit from this project}}. Vypíše položky knihovny, které projekt používá.
- **Typ:** v {{ui:Type packs}} zaškrtněte jeden typ a zvolte {{ui:Save as a Library item…}}.

Nahrajte soubor na stránku pro nahrávání do knihovny. Projde stejnou kontrolou jako každá položka a licenci zvolíte tam: každá položka uvádí svou licenci. U položek se požaduje LOD, třída IFC a klasifikační kód (kód, ne jen název).

## Poznámky z praxe

Na stránce každé položky knihovny mohou přihlášení členové přidat poznámku: použito na skutečném projektu, vyzkoušeno na ukázkovém projektu, nebo nalezen problém. Napište několika slovy, jaký projekt to byl, a vynechte jména klientů. Poznámka je veřejná a není to hodnocení: nemění položku.

## Dobré vědět

- Z aplikace se nic neodesílá. Soubory se vytvoří na vašem počítači a nahrajete je sami.
- Sada vytvořená ze šablony nese text IFC přesně tak, jak byl uložen. Před nahráním zkontrolujte, zda neobsahuje nic soukromého.
- CadCraft ukazuje Symboly a Assety na své záložce Knihovna; Typy a šablony jsou pro projekty BimCraftu.

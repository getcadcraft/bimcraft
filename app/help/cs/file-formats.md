---
title: Co BimCraft čte z jednotlivých formátů
summary: Přesně to, co BimCraft čte ze souborů IFC, projektových a rodinových souborů, DWG a DXF, a co nechává být.
keywords: formáty, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, verze, kompatibilita, co se čte
from: 9b8dfb4f
---

## IFC

| Čte se | Podrobnosti |
|---|---|
| Geometrie | Každý prvek s tvarem, obarvený tak, jak to soubor říká. Místnosti a prostory se kreslí průhledně a zpočátku skryté |
| Podlaží | Podlaží budovy v pořadí výšek a prvky, které na každém stojí. Prvky na žádném podlaží jsou seskupeny jako „Bez podlaží“ |
| Počty prvků | Kolik prvků každého druhu (stěny, dveře, desky…), zobrazeno v {{ui:Elements}} |
| Údaje o projektu | Název projektu, dlouhý název a fáze; schéma; vystavující program, autor a datum exportu z hlavičky souboru |
| Údaje prvků | Název, typ, druh objektu, značka, popis, GlobalId; každá sada vlastností a sada množství na prvku i na jeho typu |

Upravitelné: název, druh objektu, značka, popis a hodnoty jednotlivých vlastností. Uloží se jako nový soubor IFC. Otevírají se schémata IFC2X3, IFC4 a IFC4X3, čtená vlastním enginem IFC od BimCraftu; cokoli, co zatím nedokáže nakreslit, je uvedeno pod **Zatím nenakresleno** v panelu {{ui:File}}. Model se při otevření posune do počátku, takže model umístěný daleko od něj se stejně ukáže uprostřed obrazovky. `.ifczip` a `.ifcxml` se neotevírají.

## Projektové a rodinové soubory

`.rvt` projekty, `.rte` šablony projektů, `.rfa` rodiny a `.rft` šablony rodin.

| Čte se | Podrobnosti |
|---|---|
| Informace o souboru | Vydání a sestavení, sdílení práce, cesta k centrálnímu modelu, cesta k naposledy uloženému souboru, uživatelské jméno, jazykové nastavení, GUID dokumentu |
| Informace o projektu | Vlastní pole projektu (název, číslo, klient, adresa, stav…), bez výchozích hodnot nového projektu |
| Informace o rodině | Název rodiny, kategorie, vydání, poslední aktualizace a její parametry podle skupin |
| Odkazy | Seznam propojených modelů, CAD odkazů, obrázků a tabulek klíčových poznámek, na které soubor odkazuje |
| Náhledový obrázek | Miniatura uložená v souboru |

Nečte se: 3D model, prvky, pohledy, listy a rozpisy. Jsou uloženy v nedokumentovaném formátu. BimCraft čte z každého souboru jen několik desítek kilobajtů, takže velikost souboru téměř nezáleží.

## Soubory .pln, .pla, .tpl a .bpn

Zatím se nečtou: BimCraft to oznámí, když jeden otevřete. Exportujte IFC pro model a DWG pro výkresy; viz [Otevření projektových souborů .pln a .pla](topic:pln-project-files).

## DWG a DXF

| Čte se | Podrobnosti |
|---|---|
| Prostory | Prostor modelu a každý list (rozvržení) v pořadí záložek |
| Výřezy | Výřezy každého listu s jejich měřítkem, natočením a zmrazenými vrstvami |
| Vrstvy | Název, barva, zapnuto/vypnuto, zmrazení, příznak vykreslení a tloušťka čáry |
| Objekty | Úsečky, mnohočáry, oblouky, kružnice, elipsy, splajny, šrafy a tělesa, text a víceřádkový text, bloky a atributy, kóty, výnosky a víceúrovňové výnosky, tabulky, body, obrázky |
| Propojené výkresy | Kreslí se tam, kde jsou vloženy, když se najdou jejich soubory |
| Obrázky | Kreslí se z obrazových souborů, když se najdou (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Značky zařízení | Značky položek stravovacího provozu (atributy `KCL-ITEM`) pro rozpis zařízení |

Cokoli jiného se počítá pod **Zatím nenakresleno**, nikdy se to nehádá. Ověřeny jsou formáty DWG od AutoCADu 2000 do 2018 (soubory R13 a R14 se také přijímají, ale žádné nebyly v testovací sadě; starší DWG se neotevřou); panel {{ui:Drawing}} ukazuje kód formátu (například AC1032). Soubory DXF všech verzí se otevírají, včetně R12. Obě čte vlastní čtečka BimCraftu, na této záložce. Nic se nezapisuje zpět do DWG ani DXF.

## Ve složce

| Druh | Přípony | V přehledu |
|---|---|---|
| Modely | `.rvt` `.rfa` `.rte` `.rft` | Seskupeny s očíslovanými zálohami, zkontrolován stav, přečtena karta, odkazy zkontrolovány |
| IFC | `.ifc` | Vypsáno; otevře se ve 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Vypsáno s modely, které je propojují; DWG a DXF se otevřou ve 2D, DGN ne |
| Zbytky | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Vypsány pod **Odloženo stranou** |
| Pomocné složky | `*_backup`, `*_log`, `Revit_temp`, skryté složky | Vypsány pod **Odloženo stranou**, nečtou se |

Viz [Přehled složky: role, stavy a odkazy](topic:folder-roles).

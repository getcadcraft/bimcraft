---
title: Čo BimCraft číta z jednotlivých formátov
summary: Presne to, čo BimCraft číta zo súborov IFC, projektov a rodín, DWG a DXF, a čo nechá bez zmeny.
keywords: formáty, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, verzie, kompatibilita, čo sa číta
from: 9b8dfb4f
---

## IFC

| Čo sa číta | Podrobnosti |
|---|---|
| Geometria | Každý prvok s tvarom, sfarbený podľa súboru. Miestnosti a priestory sa kreslia priesvitne a na začiatku skryté |
| Podlažia | Podlažia budovy v poradí výšok a prvky, ktoré sú na každom z nich. Prvky bez podlažia sa zoskupia ako "Nie je na podlaží" |
| Počty prvkov | Koľko prvkov každého druhu (steny, dvere, dosky…); zobrazuje ich {{ui:Elements}} |
| Údaje projektu | Názov projektu, dlhý názov a fáza; schéma; program, ktorý exportoval, autor a dátum exportu z hlavičky súboru |
| Údaje prvku | Názov, typ, objektový typ, označenie, popis, GlobalId; každá sada vlastností a sada množstiev na prvku a na jeho type |

Upraviteľné: názov, objektový typ, označenie, popis a jednotlivé hodnoty vlastností. Uloží sa ako nový súbor IFC. Schémy IFC2X3, IFC4 a IFC4X3 sa otvoria a číta ich vlastný engine pre IFC v BimCraft; čokoľvek, čo zatiaľ nedokáže nakresliť, sa uvedie pod **Zatiaľ nenakreslené** na paneli {{ui:File}}. Model sa pri otvorení posunie do počiatku, takže model umiestnený ďaleko od neho sa aj tak zobrazí v strede obrazovky. `.ifczip` a `.ifcxml` sa neotvoria.

## Súbory projektov a rodín

Projekty `.rvt`, šablóny projektov `.rte`, rodiny `.rfa` a šablóny rodín `.rft`.

| Čo sa číta | Podrobnosti |
|---|---|
| Informácie o súbore | Vydanie a zostava, zdieľanie prác, cesta k centrálnemu modelu, cesta naposledy uloženého súboru, meno používateľa, lokalizácia, GUID dokumentu |
| Informácie o projekte | Vlastné polia projektu (názov, číslo, klient, adresa, stav…), bez predvolených hodnôt nového projektu |
| Informácie o rodine | Názov rodiny, kategória, vydanie, posledná aktualizácia a jej parametre podľa skupín |
| Odkazy | Zoznam prepojených modelov, odkazov CAD, obrázkov a tabuliek kľúčových poznámok, na ktoré súbor odkazuje |
| Obrázok ukážky | Miniatúra uložená v súbore |

Nečíta sa: 3D model, prvky, pohľady, listy a tabuľky. Sú uložené v nedokumentovanom formáte. BimCraft číta z každého súboru len niekoľko desiatok kilobajtov, takže veľkosť súboru takmer nehrá rolu.

## Súbory projektov .pln, .pla, .tpl a .bpn

Zatiaľ sa nečítajú: BimCraft to oznámi, keď jeden otvoríte. Model exportujte do IFC a výkresy do DWG; pozri [Otvorenie projektových súborov .pln a .pla](topic:pln-project-files).

## DWG a DXF

| Čo sa číta | Podrobnosti |
|---|---|
| Priestory | Priestor modelu a každý list (rozloženie) v poradí kariet |
| Výrezy | Výrezy každého listu s ich mierkou, natočením a zmrazenými hladinami |
| Hladiny | Názov, farba, zapnutie/vypnutie, zmrazenie, príznak vykreslenia a hrúbka čiary |
| Objekty | Úsečky, lomené čiary, oblúky, kružnice, elipsy, spline, šráfovania a telesá, text a viacriadkový text, bloky a atribúty, kóty, vynášacie čiary a viacnásobné vynášacie čiary, tabuľky, body, obrázky |
| Prepojené výkresy | Nakreslené tam, kde sú vložené, ak sa nájdu ich súbory |
| Obrázky | Nakreslené zo súborov obrázkov, ak sa nájdu (PNG, JPEG, GIF, BMP, WebP; nie TIFF) |
| Označenia vybavenia | Označenia položiek pohostinského zariadenia (atribúty `KCL-ITEM`) pre tabuľku vybavenia |

Všetko ostatné sa počíta pod **Zatiaľ nenakreslené** a nikdy sa neodhaduje. Overené sú formáty DWG od AutoCAD 2000 do 2018 (súbory R13 a R14 sa tiež prijímajú, ale žiadne nebolo v testovacej sade; staršie DWG sa neotvoria); panel {{ui:Drawing}} zobrazuje kód formátu (napríklad AC1032). Súbory DXF každej verzie sa otvoria, vrátane R12. Obe čítajú vlastné čítačky BimCraft, na tejto karte. Nič sa nezapisuje späť do DWG ani DXF.

## V priečinku

| Druh | Prípony | V správe |
|---|---|---|
| Modely | `.rvt` `.rfa` `.rte` `.rft` | Zoskupené s očíslovanými zálohami, skontrolované stavom, načítaná karta, skontrolované odkazy |
| IFC | `.ifc` | Uvedené; otvára sa v 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Uvedené s modelmi, ktoré ich prepájajú; DWG a DXF sa otvoria v 2D, DGN nie |
| Zvyšky | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Uvedené pod **Odložené** |
| Pomocné priečinky | `*_backup`, `*_log`, `Revit_temp`, skryté priečinky | Uvedené pod **Odložené**, nečítajú sa |

Pozri [Správa o priečinku: úlohy, stavy a odkazy](topic:folder-roles).

---
title: Kaj BimCraft bere iz posameznega formata
summary: Natančno, kaj BimCraft bere iz datotek IFC, projektnih in družinskih datotek, DWG in DXF, ter kaj pusti pri miru.
keywords: formati, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, različice, združljivost, kaj se bere
from: 9b8dfb4f
---

## IFC

| Bere | Podrobnosti |
|---|---|
| Geometrija | Vsak element z obliko, obarvan tako, kot pove datoteka. Prostori so narisani prosojno in sprva skriti |
| Etaže | Etaže stavbe po vrstnem redu višin in elementi na vsaki. Elementi na nobeni etaži so združeni pod „Ni na etaži“ |
| Števila elementov | Koliko elementov je vsake vrste (zidovi, vrata, plošče …), prikazano v {{ui:Elementi}} |
| Podatki o projektu | Ime projekta, dolgo ime in faza; shema; program, ki je izvozil datoteko, avtor in datum izvoza iz glave datoteke |
| Podatki o elementih | Ime, tip, vrsta objekta, oznaka, opis, GlobalId; vsak nabor lastnosti in nabor količin na elementu in na njegovem tipu |

Urejljivo: ime, vrsta objekta, oznaka, opis in posamezne vrednosti lastnosti. Shrani se kot nova datoteka IFC. Sheme IFC2X3, IFC4 in IFC4X3 se odprejo, prebere jih lastni IFC motor programa BimCraft; česar še ne zna narisati, je našteto pod **Še ni narisano** v podoknu {{ui:Datoteka}}. Model se ob odprtju premakne v izhodišče, zato model, postavljen daleč od njega, še vedno prikaže na sredini zaslona. `.ifczip` in `.ifcxml` se ne odpreta.

## Projektne in družinske datoteke

`.rvt` projekti, `.rte` predloge projektov, `.rfa` družine in `.rft` predloge družin.

| Bere | Podrobnosti |
|---|---|
| Podatki o datoteki | Izdaja in gradnja, skupinsko delo, pot do središčnega modela, zadnja shranjena pot, uporabniško ime, jezik in regija, GUID dokumenta |
| Podatki o projektu | Lastna polja projekta (ime, številka, naročnik, naslov, stanje …), brez privzetih vrednosti novega projekta |
| Podatki o družini | Ime družine, kategorija, izdaja, zadnja posodobitev in njeni parametri po skupinah |
| Povezave | Seznam povezanih modelov, povezav CAD, slik in tabel ključnih opomb, na katere datoteka kaže |
| Slika predogleda | Sličica, shranjena v datoteki |

Ni prebrano: 3D model, elementi, pogledi, listi in razpredelnice. Shranjeni so v nedokumentiranem formatu. BimCraft prebere le nekaj deset kilobajtov iz vsake datoteke, zato velikost datoteke skoraj ne igra vloge.

## Projektne datoteke .pln, .pla, .tpl in .bpn

Še ni prebrano: BimCraft to pove, ko jo odprete. Za model izvozite IFC, za risbe DWG; glejte [Odpiranje projektnih datotek .pln in .pla](topic:pln-project-files).

## DWG in DXF

| Bere | Podrobnosti |
|---|---|
| Prostori | Prostor modela in vsak list (postavitev), po vrstnem redu zavihkov |
| Pogledna okna | Pogledna okna vsakega lista z njihovim merilom, zasukom in zamrznjenimi sloji |
| Sloji | Ime, barva, vklopljeno/izklopljeno, zamrznjeno, oznaka izrisa in debelina črte |
| Predmeti | Črte, polilinije, loki, krožnice, elipse, zlepki, šrafure in telesa, besedilo in večvrstično besedilo, bloki in atributi, kote, vodilke in večkratne vodilke, tabele, točke, slike |
| Povezane risbe | Narisane tam, kjer so vstavljene, ko se najdejo njihove datoteke |
| Slike | Narisane iz slikovnih datotek, ko so najdene (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Oznake opreme | Oznake elementov gostinske opreme (atributi `KCL-ITEM`) za razpredelnico opreme |

Vse drugo je našteto pod **Še ni narisano** in nikoli ugibano. Formati DWG od AutoCAD 2000 do 2018 so tisti, ki so preverjeni (datoteke R13 in R14 so sprejete, vendar jih ni bilo v testnem nizu; starejše datoteke DWG se ne odprejo). Podokno {{ui:Risba}} prikaže kodo formata (na primer AC1032). Datoteke DXF vseh različic se odprejo, tudi R12. Obe prebere lastni bralnik programa BimCraft na tem zavihku. Nič se ne shrani nazaj v DWG ali DXF.

## V mapi

| Vrsta | Končnice | V poročilu |
|---|---|---|
| Modeli | `.rvt` `.rfa` `.rte` `.rft` | Združeni z oštevilčenimi varnostnimi kopijami, preverjeno stanje, prebrana kartica datoteke, preverjene povezave |
| IFC | `.ifc` | Našteto; odpre se v 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Našteto skupaj z modeli, ki jih povezujejo; DWG in DXF se odpreta v 2D, DGN ne |
| Ostanki | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Našteto pod **Odloženo** |
| Pomožne mape | `*_backup`, `*_log`, `Revit_temp`, skrite mape | Našteto pod **Odloženo**, ni prebrano |

Glejte [Poročilo mape: vloge, stanja in povezave](topic:folder-roles).

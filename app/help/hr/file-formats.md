---
title: Što BimCraft čita iz svakog formata
summary: Točno što BimCraft čita iz IFC, projektnih i obiteljskih datoteka, DWG i DXF te što ostavlja netaknuto.
keywords: formati, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, verzije, kompatibilnost, što se čita
from: 9b8dfb4f
---

## IFC

| Čita | Pojedinosti |
|---|---|
| Geometrija | Svaki element s oblikom, obojen kako to kaže datoteka. Prostorije i prostori crtaju se prozirno i u početku skriveni |
| Etaže | Etaže zgrade po redoslijedu visine i koji elementi stoje na svakoj. Elementi bez etaže grupiraju se kao „Nije na etaži“ |
| Brojevi elemenata | Koliko ima elemenata svake vrste (zidova, vrata, ploča…), prikazano u {{ui:Elementi}} |
| Podaci projekta | Naziv projekta, dugi naziv i faza; shema; program koji izvozi, autor i datum izvoza iz zaglavlja datoteke |
| Podaci elementa | Naziv, vrsta, vrsta objekta, oznaka, opis, GlobalId; svaki skup svojstava i skup količina na elementu i na njegovom tipu |

Može se uređivati: naziv, vrsta objekta, oznaka, opis i pojedinačne vrijednosti svojstava. Sprema se kao nova IFC datoteka. Otvaraju se sheme IFC2X3, IFC4 i IFC4X3, a čita ih vlastiti IFC motor BimCrafta; sve što još ne može nacrtati navedeno je pod **Još nije nacrtano** u panelu {{ui:Datoteka}}. Model se pri otvaranju pomiče u ishodište, pa se model postavljen daleko od njega ipak prikazuje u sredini zaslona. `.ifczip` i `.ifcxml` se ne otvaraju.

## Projektne i obiteljske datoteke

`.rvt` projekti, `.rte` predlošci projekta, `.rfa` obitelji i `.rft` predlošci obitelji.

| Čita | Pojedinosti |
|---|---|
| Podaci o datoteci | Izdanje i verzija, zajednički rad, putanja središnjeg modela, putanja zadnjeg spremanja, korisničko ime, jezična postavka, GUID dokumenta |
| Podaci o projektu | Vlastita polja projekta (naziv, broj, naručitelj, adresa, status…), bez zadanih vrijednosti novog projekta |
| Podaci o obitelji | Naziv obitelji, kategorija, izdanje, zadnje ažuriranje i njezini parametri po grupama |
| Poveznice | Popis povezanih modela, CAD poveznica, slika i tablica ključnih bilješki na koje datoteka pokazuje |
| Pregledna slika | Sličica spremljena u datoteci |

Ne čita se: 3D model, elementi, prikazi, listovi i specifikacije. Pohranjeni su u nedokumentiranom formatu. BimCraft čita samo nekoliko desetaka kilobajta iz svake datoteke, pa veličina datoteke jedva važi.

## Projektne datoteke .pln, .pla, .tpl i .bpn

Još se ne čitaju: BimCraft to kaže kad ih otvorite. Izvezite IFC za model i DWG za crteže; vidi [Otvaranje projektnih datoteka .pln i .pla](topic:pln-project-files).

## DWG i DXF

| Čita | Pojedinosti |
|---|---|
| Prostori | Prostor modela i svaki list (layout), po redoslijedu kartica |
| Viewporti | Viewporti svakog lista, s njihovim mjerilom, zakretom i zamrznutim slojevima |
| Slojevi | Naziv, boja, uključen/isključen, zamrznut, oznaka ispisa i debljina linije |
| Objekti | Linije, polilinije, lukovi, kružnice, elipse, splajnovi, šrafure i ispune, tekst i višeretčani tekst, blokovi i atributi, kote, vodilice i višestruke vodilice, tablice, točke, slike |
| Povezani crteži | Crtaju se tamo gdje su umetnuti, kad se pronađu njihove datoteke |
| Slike | Crtaju se iz datoteka slika kad se pronađu (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Oznake opreme | Oznake stavki ugostiteljske opreme (atributi `KCL-ITEM`), za specifikaciju opreme |

Sve ostalo broji se pod **Još nije nacrtano** i nikad se ne pogađa. Provjereni su DWG formati od AutoCADa 2000 do 2018 (datoteke R13 i R14 se prihvaćaju, ali nijedna nije bila u skupu za ispitivanje; stariji DWG-ovi se ne otvaraju). Panel {{ui:Crtež}} prikazuje kod formata, poput AC1032. DXF datoteke svih verzija se otvaraju, uključujući R12. Čitaju ih vlastiti čitači BimCrafta, na ovoj kartici. Ništa se ne sprema natrag u DWG ili DXF.

## U mapi

| Vrsta | Nastavci | U izvješću |
|---|---|---|
| Modeli | `.rvt` `.rfa` `.rte` `.rft` | Grupirano s numeriranim sigurnosnim kopijama, provjereno, pročitan sažetak, provjerene poveznice |
| IFC | `.ifc` | Navedeno; otvara se u 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Navedeno s modelima koji ih povezuju; DWG i DXF se otvaraju u 2D, DGN ne |
| Ostaci | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Navedeno pod **Odloženo** |
| Mape za održavanje | `*_backup`, `*_log`, `Revit_temp`, skrivene mape | Navedeno pod **Odloženo**, ne čita se |

Vidi [Izvješće o mapi: uloge, statusi i poveznice](topic:folder-roles).

---
title: Šta BimCraft čita iz svakog formata
summary: Tačno šta BimCraft čita iz IFC, projektnih i datoteka porodica, DWG i DXF, i šta ostavlja netaknuto.
keywords: formati, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, verzije, kompatibilnost, šta se čita
from: 9b8dfb4f
---

## IFC

| Čita se | Pojedinosti |
|---|---|
| Geometrija | Svaki element sa oblikom, obojen kako datoteka kaže. Prostorije i prostori crtaju se prozirno i na početku su skriveni |
| Spratovi | Spratovi zgrade po redoslijedu visine, i koji elementi stoje na kojem. Elementi bez sprata grupišu se kao "Nije na spratu" |
| Brojevi elemenata | Koliko elemenata svake vrste (zidovi, vrata, ploče…), prikazano u {{ui:Elements}} |
| Podaci projekta | Naziv projekta, dugi naziv i faza; šema; program koji je izvezao, autor i datum izvoza iz zaglavlja datoteke |
| Podaci elementa | Naziv, tip, vrsta objekta, oznaka, opis, GlobalId; svaki skup svojstava i skup količina na elementu i na njegovom tipu |

Mijenjaju se: naziv, vrsta objekta, oznaka, opis i pojedinačne vrijednosti svojstava. Spašava se kao nova IFC datoteka. Šeme IFC2X3, IFC4 i IFC4X3 se otvaraju, a čita ih vlastiti IFC motor BimCraft-a; ono što još ne može nacrtati navedeno je pod **Još nije nacrtano** u panelu {{ui:File}}. Model se pri otvaranju pomjera u ishodište, pa se model postavljen daleko od njega i dalje prikazuje u sredini ekrana. `.ifczip` i `.ifcxml` se ne otvaraju.

## Projektne i datoteke porodica

`.rvt` projekti, `.rte` šabloni projekata, `.rfa` porodice i `.rft` šabloni porodica.

| Čita se | Pojedinosti |
|---|---|
| Podaci o datoteci | Izdanje i verzija, zajednički rad, putanja centralnog modela, putanja zadnjeg spašavanja, ime korisnika, jezik, GUID dokumenta |
| Podaci o projektu | Polja samog projekta (naziv, broj, klijent, adresa, status…), bez podrazumijevanih vrijednosti novog projekta |
| Podaci o porodici | Naziv porodice, kategorija, izdanje, zadnje ažuriranje, i njeni parametri po grupama |
| Veze | Spisak povezanih modela, CAD veza, slika i tabela ključnih napomena na koje datoteka ukazuje |
| Pregled slike | Sličica spremljena u datoteci |

Nije pročitano: 3D model, elementi, pogledi, listovi i specifikacije. Pohranjeni su u nedokumentovanom formatu. BimCraft čita samo nekoliko desetina kilobajta iz svake datoteke, pa veličina datoteke gotovo ne znači ništa.

## .pln, .pla, .tpl i .bpn projektne datoteke

Još nisu pročitane: BimCraft to kaže kada otvorite jednu. Izvezite IFC za model i DWG za crteže; pogledajte [Otvaranje .pln i .pla projektnih datoteka](topic:pln-project-files).

## DWG i DXF

| Čita se | Pojedinosti |
|---|---|
| Prostori | Prostor modela i svaki list (raspored), redom po kartici |
| Prikazni prozori | Prikazni prozori svakog lista, sa njihovom razmjerom, rotacijom i zamrznutim slojevima |
| Slojevi | Naziv, boja, uključen ili isključen, zamrznut, oznaka štampanja i debljina linije |
| Objekti | Linije, polilinije, lukovi, krugovi, elipse, splajnovi, šrafure i solidi, tekst i višeredni tekst, blokovi i atributi, kote, vodilice i višestruke vodilice, tabele, tačke, slike |
| Povezani crteži | Crtaju se tamo gdje su umetnuti, kada se njihove datoteke nađu |
| Slike | Crtaju se iz datoteka slika kada se nađu (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Oznake opreme | Oznake stavki ugostiteljske opreme (`KCL-ITEM` atributi), za specifikaciju opreme |

Sve ostalo se broji pod **Još nije nacrtano** i nikad se ne pogađa. Provjereni DWG formati su oni od AutoCAD 2000 do 2018 (datoteke R13 i R14 se također prihvataju, ali nijedna nije bila u skupu za testiranje; stariji DWG-ovi se ne otvaraju). Panel {{ui:Drawing}} prikazuje kod formata (kao AC1032). DXF datoteke svih verzija se otvaraju, uključujući R12. Oba čita vlastiti čitač BimCraft-a, na ovoj kartici. Ništa se ne spašava nazad u DWG ili DXF.

## U fascikli

| Vrsta | Ekstenzije | U izvještaju |
|---|---|---|
| Modeli | `.rvt` `.rfa` `.rte` `.rft` | Grupisani sa numerisanim rezervnim kopijama, provjereni po zdravlju, pročitana kartica, provjerene veze |
| IFC | `.ifc` | Navedeno; otvara se u 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Navedeno sa modelima koji ih povezuju; DWG i DXF se otvaraju u 2D, DGN ne |
| Ostaci | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Navedeno pod **Odloženo** |
| Fascikle za održavanje | `*_backup`, `*_log`, `Revit_temp`, skrivene fascikle | Navedeno pod **Odloženo**, ne čita se |

Pogledajte [Izvještaj o fascikli: uloge, statusi i veze](topic:folder-roles).

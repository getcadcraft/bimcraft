---
title: Šta BimCraft čita iz svakog formata
summary: Tačno šta BimCraft čita iz IFC, datoteka projekata i porodica, DWG i DXF, i šta ostavlja netaknuto.
keywords: formati, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, verzije, kompatibilnost, šta se čita
from: 9b8dfb4f
---

## IFC

| Čita se | Pojedinosti |
|---|---|
| Geometrija | Svaki element sa oblikom, obojen kako datoteka kaže. Prostorije i prostori crtaju se prozirno i u početku su sakriveni |
| Spratovi | Spratovi zgrade po redosledu visine i elementi koji stoje na svakom. Elementi bez sprata grupišu se kao „Bez sprata” |
| Brojevi elemenata | Koliko ima elemenata svake vrste (zidova, vrata, ploča…), prikazano u {{ui:Elementi}} |
| Podaci projekta | Naziv projekta, dugi naziv i faza; šema; program koji izvozi, autor i datum izvoza iz zaglavlja datoteke |
| Podaci elementa | Naziv, tip, vrsta objekta, oznaka, opis, GlobalId; svaki skup svojstava i skup količina na elementu i na njegovom tipu |

Izmenljivo: naziv, vrsta objekta, oznaka, opis i pojedinačne vrednosti svojstava. Čuva se kao nova IFC datoteka. Šeme IFC2X3, IFC4 i IFC4X3 se otvaraju, a čita ih sopstveni IFC mehanizam BimCraft-a. Sve što još ne može da se nacrta navedeno je pod **Još nije nacrtano** u panelu {{ui:Datoteka}}. Model se pri otvaranju pomera u koordinatni početak, pa se model postavljen daleko od njega i dalje prikazuje u sredini ekrana. `.ifczip` i `.ifcxml` se ne otvaraju.

## Datoteke projekata i porodica

`.rvt` projekti, `.rte` šabloni projekata, `.rfa` porodice i `.rft` šabloni porodica.

| Čita se | Pojedinosti |
|---|---|
| Podaci o datoteci | Izdanje i verzija, zajednički rad, putanja centralnog modela, putanja poslednjeg čuvanja, ime korisnika, jezik, GUID dokumenta |
| Podaci o projektu | Sopstvena polja projekta (naziv, broj, naručilac, adresa, status…), bez podrazumevanih vrednosti za novi projekat |
| Podaci o porodici | Naziv porodice, kategorija, izdanje, poslednje ažuriranje i njeni parametri po grupama |
| Veze | Lista povezanih modela, CAD veza, slika i tabela keynote na koje datoteka ukazuje |
| Slika pregleda | Sličica sačuvana u datoteci |

Ne čita se: 3D model, elementi, pogledi, listovi i specifikacije. Čuvaju se u nedokumentovanom formatu. BimCraft čita samo nekoliko desetina kilobajta iz svake datoteke, pa veličina datoteke gotovo ne važi.

## Datoteke .pln, .pla, .tpl i .bpn projekata

Još se ne čitaju: BimCraft to kaže kada ih otvorite. Izvezite IFC za model i DWG za crteže; pogledajte [Otvaranje datoteka projekata .pln i .pla](topic:pln-project-files).

## DWG i DXF

| Čita se | Pojedinosti |
|---|---|
| Prostori | Prostor modela i svaki list (raspored), po redosledu kartica |
| Prozori pogleda | Prozori pogleda svakog lista, sa svojom razmerom, uvrtanjem i zamrznutim slojevima |
| Slojevi | Naziv, boja, uključen ili isključen, zamrznut, oznaka štampanja i debljina linije |
| Objekti | Linije, polilinije, lukovi, krugovi, elipse, splajnovi, šrafure i tela, tekst i višeredni tekst, blokovi i atributi, kote, pokazne linije i višestruke pokazne linije, tabele, tačke, slike |
| Povezani crteži | Crtaju se tamo gde su umetnuti, kada se njihove datoteke nađu |
| Slike | Crtaju se iz datoteka slika kada se nađu (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Oznake opreme | Oznake stavki ugostiteljstva (atributi `KCL-ITEM`), za specifikaciju opreme |

Sve drugo se broji pod **Još nije nacrtano** i nikada se ne pogađa. Proverene su DWG verzije od AutoCAD 2000 do 2018 (datoteke R13 i R14 se prihvataju, ali nijedna nije bila u skupu za proveru; stariji DWG-ovi se ne otvaraju). Panel {{ui:Crtež}} prikazuje oznaku formata, kao što je AC1032. DXF datoteke svih verzija se otvaraju, uključujući R12. Obe čita sopstveni čitač BimCraft-a, na ovoj kartici. Ništa se ne čuva nazad u DWG ili DXF.

## U fascikli

| Vrsta | Ekstenzije | U izveštaju |
|---|---|---|
| Modeli | `.rvt` `.rfa` `.rte` `.rft` | Grupisani sa numerisanim rezervnim kopijama, proverom ispravnosti, pročitanim kartonom i proverenim vezama |
| IFC | `.ifc` | Navedeno; otvara se u 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Navedeno sa modelima koji ih povezuju; DWG i DXF se otvaraju u 2D, DGN ne |
| Ostaci | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Navedeno pod **Odloženo** |
| Fascikle za održavanje | `*_backup`, `*_log`, `Revit_temp`, skrivene fascikle | Navedeno pod **Odloženo**, ne čita se |

Pogledajte [Izveštaj o fascikli: uloge, statusi i veze](topic:folder-roles).

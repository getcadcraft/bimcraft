---
title: Ce citește BimCraft din fiecare format
summary: Exact ce citește BimCraft din fișierele IFC, de proiect și de familie, DWG și DXF și ce lasă neatins.
keywords: formate, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiuni, compatibilitate, ce se citește
from: 9b8dfb4f
---

## IFC

| Citit | Detalii |
|---|---|
| Geometrie | Fiecare element cu o formă, colorat așa cum spune fișierul. Încăperile și spațiile sunt desenate transparente și ascunse la început |
| Etaje | Etajele clădirii în ordinea cotelor și ce elemente stau pe fiecare. Elementele fără etaj sunt grupate sub „Fără etaj” |
| Numărul de elemente | Câte elemente de fiecare fel (pereți, uși, planșee…), afișate în {{ui:Elements}} |
| Date de proiect | Numele proiectului, numele lung și faza; schema; programul care a exportat, autorul și data exportului din antetul fișierului |
| Datele elementelor | Nume, tip, tip de obiect, etichetă, descriere, GlobalId; fiecare set de proprietăți și set de cantități de pe element și de pe tipul său |

Editabil: nume, tip de obiect, etichetă, descriere și valori unice de proprietăți. Salvat ca un fișier IFC nou. Schemele IFC2X3, IFC4 și IFC4X3 se deschid, fiind citite de motorul IFC propriu al BimCraft; orice nu poate fi desenat încă este enumerat sub **Nedesenat încă** în panoul {{ui:File}}. Modelul este mutat în origine la deschidere, astfel încât un model așezat departe de ea apare totuși în mijlocul ecranului. `.ifczip` și `.ifcxml` nu se deschid.

## Fișiere de proiect și de familie

`.rvt` proiecte, `.rte` șabloane de proiect, `.rfa` familii și `.rft` șabloane de familie.

| Citit | Detalii |
|---|---|
| Informații despre fișier | Versiunea și build-ul, lucrul în echipă, calea modelului central, calea ultimei salvări, numele utilizatorului, limba, GUID-ul documentului |
| Informații despre proiect | Câmpurile proprii ale proiectului (nume, număr, client, adresă, stare…), fără valorile implicite ale proiectelor noi |
| Informații despre familie | Numele familiei, categoria, versiunea, ultima actualizare și parametrii săi pe grupe |
| Legături | Lista modelelor, legăturilor CAD, imaginilor și tabelelor de note-cheie spre care indică fișierul |
| Imagine de previzualizare | Miniatura salvată în fișier |

Nu se citesc: modelul 3D, elementele, vederile, foile și tabelele centralizatoare. Sunt stocate într-un format nedocumentat. BimCraft citește doar câteva zeci de kilobyți din fiecare fișier, astfel încât dimensiunea fișierului contează aproape deloc.

## Fișiere de proiect .pln, .pla, .tpl și .bpn

Încă nu se citesc: BimCraft spune asta când deschideți unul. Exportați IFC pentru model și DWG pentru desene; vezi [Deschiderea fișierelor de proiect .pln și .pla](topic:pln-project-files).

## DWG și DXF

| Citit | Detalii |
|---|---|
| Spații | Spațiul modelului și fiecare foaie (aranjare în pagină), în ordinea filelor |
| Ferestre de vizualizare | Ferestrele fiecărei foi, cu scara, rotirea și straturile înghețate |
| Straturi | Nume, culoare, activ sau inactiv, înghețat, indicatorul de trasare și grosimea liniei |
| Obiecte | Linii, polilinii, arce, cercuri, elipse, splineuri, hașuri și solide, text și text pe mai multe rânduri, blocuri și atribute, cote, linii de indicație și linii de indicație multiple, tabele, puncte, imagini |
| Desene legate | Desenate acolo unde sunt inserate, când fișierele lor sunt găsite |
| Imagini | Desenate din fișierele de imagine când sunt găsite (PNG, JPEG, GIF, BMP, WebP; nu TIFF) |
| Etichete de echipamente | Etichete de elemente de alimentație publică (atribute `KCL-ITEM`), pentru tabelul de echipamente |

Orice altceva este numărat sub **Nedesenat încă**, fără a fi ghicit niciodată. Formatele DWG de la AutoCAD 2000 până la 2018 sunt cele verificate (fișierele R13 și R14 sunt acceptate și ele, dar niciunul nu era în setul de test; DWG-urile mai vechi nu se deschid). Panoul {{ui:Drawing}} arată codul formatului (precum AC1032). Fișierele DXF din orice versiune se deschid, inclusiv R12. Ambele sunt citite de cititoarele proprii ale BimCraft, în această filă. Nimic nu este salvat înapoi în DWG sau DXF.

## Într-un dosar

| Tip | Extensii | În raport |
|---|---|---|
| Modele | `.rvt` `.rfa` `.rte` `.rft` | Grupate cu copii de rezervă numerotate, verificate ca stare, cu cardul citit și legăturile verificate |
| IFC | `.ifc` | Enumerat; se deschide în 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Enumerate împreună cu modelele care le leagă; DWG și DXF se deschid în 2D, DGN nu |
| Reziduuri | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Enumerate sub **Puse deoparte** |
| Dosare de întreținere | `*_backup`, `*_log`, `Revit_temp`, dosare ascunse | Enumerate sub **Puse deoparte**, nu sunt citite |

Vezi [Raportul dosarului: roluri, stări și legături](topic:folder-roles).

---
title: Câmpurile panoului Proprietăți
summary: Ce înseamnă fiecare câmp din panoul Proprietăți și din panourile Fișier, Desen și Dosar și care dintre ele pot fi modificate.
keywords: proprietăți, câmpuri, atribute, globalid, guid, copiere, copiere valoare, copiere totală, csv, clipboard, număr de serie, etichetă, tip de obiect, linie, ID EXPRESS, set de proprietăți, pset, cantități, schemă, panou fișier
from: fe55b435
---

## Un element IFC

Partea de sus a panoului {{ui:Proprietăți}} arată tipul elementului fără prefixul „Ifc” (de exemplu „Door”, „WallStandardCase”, „FurnishingElement”) și numele său, sau „Fără nume”.

| Câmp | Înțeles | Editabil |
|---|---|---|
| Nume | Numele elementului, adesea numele familiei și al tipului scris de exportator | Da |
| Tip | Numele tipului elementului, când are unul | Nu |
| Tip de obiect | O descriere liberă a tipului, completată de unii exportatori | Da |
| Etichetă | Eticheta sau marca elementului; mulți exportatori scriu aici ID-ul elementului | Da |
| Descriere | Text liber | Da |
| GlobalId | Identificatorul IFC permanent de 22 de caractere al elementului, același în fiecare export al aceluiași element | Nu |
| Linie | Numărul de linie al elementului (`#1234`) în acest fișier IFC. Se schimbă între exporturi | Nu |

Mai jos vin **seturile de proprietăți**, sortate după nume:

- Fiecare set se deschide și se închide când faceți clic pe numele său. Primele trei sunt deschise.
- Un set marcat „(tip)” aparține tipului elementului: „Proprietate de tip: o modificare aici se aplică fiecărui element de acest tip.”
- Seturile de cantități (lungimi, arii, volume, numărări, greutăți) sunt doar pentru citire.
- Listele și valorile enumerate se afișează, doar pentru citire.
- Valorile Da/Nu apar ca **Da** sau **Nu**.
- Numerele sunt rotunjite la patru zecimale pentru afișare. Lungimile (o proprietate de lungime sau lungimea unei cantități) se afișează în {{ui:Unități}} alese în bara de instrumente, cu unitatea alături, iar puteți scrie una nouă în acea unitate sau cu o altă unitate de măsură (2.4 m, 8'-0"): BimCraft scrie înapoi numărul propriu al fișierului. Celelalte numere se afișează așa cum le are fișierul.
- O valoare goală apare ca *gol*. O valoare editată este îngroșată și are o bară albastră alături.

## Copierea unei valori

Fiecare valoare din {{ui:Proprietăți}} are un mic buton de copiere alături: faceți clic pe el ca să puneți valoarea în Clipboard exact cum se vede, de exemplu un GlobalId, un număr de serie sau orice valoare dintr-un set de proprietăți. Copierea nu începe niciodată o modificare.

Sus, {{ui:Copiere totală}} copiază fiecare valoare a elementului ca text, set cu set, iar {{ui:Copiere ca CSV}} copiază rânduri de grup, proprietate și valoare, ca să le lipiți într-o foaie de calcul; valorile goale sunt păstrate, ca fiecare câmp să aibă un rând. Funcționează la fel pentru un element dintr-un alt model deschis; când sunt deschise mai multe modele, CSV-ul începe cu o coloană Model care numește fișierul.

## Panoul Fișier (IFC)

| Câmp | Înțeles |
|---|---|
| Fișier, Dimensiune | Fișierul pe care l-ați deschis |
| Schemă | Versiunea IFC, cum ar fi IFC2X3 sau IFC4 |
| Proiect | Numele proiectului și numele său lung |
| Fază | Faza proiectului, dacă exportatorul a scris una |
| Exportat din | Programul de export, din antetul fișierului |
| Autor | Autorul din antetul fișierului |
| Exportat | Data și ora din antetul fișierului |
| Elemente | Câte elemente cu formă au fost desenate |
| Triunghiuri | Câte triunghiuri fac formele lor; o măsură a greutății modelului |

## Panoul Fișier (fișiere de proiect și de familie)

| Câmp | Înțeles |
|---|---|
| Tip | Proiect, Șablon de proiect, Familie sau Șablon de familie |
| Salvat în | Versiunea care a salvat ultima dată fișierul |
| Compilare | Compilarea exactă a acelei versiuni |
| Citit | Cât din fișier a citit BimCraft, din dimensiunea sa |

## Panoul Desen (DWG și DXF)

| Câmp | Înțeles |
|---|---|
| Format | Versiunea în care a fost salvat desenul, cu codul formatului, cum ar fi AC1032 |
| Unități | Unitățile de inserare ale desenului, când sunt setate |
| Entități | Câte obiecte au fost citite |
| Straturi | Câte straturi |
| Foi | Câte foi (aranjări în pagină), sau Niciuna |
| Desene legate | Câte dintre desenele sale legate au fost găsite și încărcate |
| Echipamente | Câte echipamente etichetate sunt pe foi |

## Panoul Dosar

| Câmp | Înțeles |
|---|---|
| Dosar, Fișiere, Dimensiune | Dosarul deschis, câte fișiere conține și dimensiunea lor totală |
| Modele | Fișiere de proiect și de familie, fiecare cu copiile sale de rezervă numărate o singură dată |
| Desene CAD, modele IFC | Câte din fiecare |
| Probleme | Câte copii ale modelului sunt incomplete sau nu pot fi citite, sau Niciuna |

---
title: Primii pași cu BimCraft
summary: Ce face astăzi BimCraft, cum deschideți primul model, cum îl priviți în 3D, cum modificați o valoare și cum salvați o copie.
keywords: start, prima rulare, deschidere, ifc, rvt, dwg, pornire rapidă, introducere, vizualizator, bim
from: fc2dea19
---

BimCraft este aplicația pentru modele de clădiri din familia CadCraft. În această versiune **deschide, citește și inspectează** fișiere de clădire și **editează datele din modelele IFC**. Încă nu desenează și nu modelează elemente noi. Gândiți-l ca pe un vizualizator și verificator de modele, care vă permite și să corectați nume, etichete și valori ale proprietăților dintr-un fișier IFC.

Ce deschide:

| Fișier | Ce obțineți |
|---|---|
| IFC (`.ifc`) | Modelul complet în 3D: orbitare, niveluri, proprietățile elementelor și editarea numelor și a valorilor proprietăților |
| Fișiere de proiect și de familie (`.rvt`, `.rfa`, `.rte`, `.rft`) | O fișă a fișierului: versiunea în care a fost salvat, informațiile proiectului, imaginea de previzualizare și fișierele legate. Fără 3D. |
| DWG și DXF | Desenul în 2D: spațiul model și fiecare foaie, straturi, desene legate, vizualizarea pentru imprimare și un tabel cu echipamentele pentru desene de unități de alimentație etichetate |
| Un dosar de proiect | Un raport cu fiecare model din dosar: copii de siguranță, legături, copii deteriorate și o sugestie cu fișierul de la care să începeți |

Totul se întâmplă în browserul dumneavoastră, pe calculatorul dumneavoastră. **Nimic nu este încărcat.** Vezi [Fișierele pe care BimCraft le deschide și le salvează](topic:files) pentru detalii.

## Deschideți BimCraft

1. Deschideți BimCraft într-un browser actual. Chrome, Edge, Firefox și Safari funcționează; [Browsere, dispozitive și memorie](topic:platforms) enumeră diferențele.
2. Așteptați ecranul gol care spune „Deschideți un model de clădire.”

:::note
BimCraft rulează în browser și, pe desktop, în interiorul CadCraft Studio, alături de celelalte aplicații. Salvarea în cloud nu este încă disponibilă: deschideți fișiere de pe calculator și salvați copii înapoi pe el.
:::

## Deschideți primul model

Cel mai rapid mod de a vedea ce face BimCraft este un fișier IFC.

1. Faceți clic pe {{ui:Alegere fișier}} din mijlocul ecranului.
2. Alegeți un fișier `.ifc` în {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} și confirmați.
3. Așteptați cât timp linia de stare din partea de jos a ecranului spune „Se pornește motorul IFC…”, apoi „Se construiește geometria”.

Ar trebui să vedeți modelul în 3D la mijloc, un panou {{ui:Fișier}} și o listă {{ui:Niveluri}} în stânga și un panou {{ui:Proprietăți}} gol în dreapta. Linia de stare se termină cu „Deschis” și numărul de elemente.

:::tip
Puteți trage și un fișier din {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} direct pe pagină. Ecranul afișează „Trageți pentru deschidere” cât timp trageți.
:::

:::offline
Motorul IFC se încarcă de pe site prima dată când deschideți un model IFC, dacă BimCraft nu a fost salvat pentru utilizare offline. Desenele DWG și DXF, fișierele de proiect și dosarele nu au nevoie de nimic în plus: cititoarele lor fac parte din aplicație. Dacă butonul din bara aplicației spune {{ui:Pregătit pentru offline}}, totul se deschide offline. Dacă nu, modelele IFC nu se deschid până nu vă reconectați, decât dacă a fost deja deschis unul în această filă. Vezi [Online și offline](topic:online-offline).
:::

:::online
Mergeți undeva fără conexiune? Faceți clic pe {{ui:Salvare pentru offline}} în bara aplicației și așteptați {{ui:Pregătit pentru offline}}. Copia salvată (aproximativ 11 MB) include motorul IFC. Vezi [Lucrul offline](common:offline).
:::

## Priviți în jur

:::mouse
1. Trageți cu butonul stâng al mouse-ului ca să orbitați în jurul modelului.
2. Derulați roata ca să măriți.
3. Trageți cu butonul drept al mouse-ului ca să panoramați. Pe un trackpad de Mac, țineți apăsat {{key:Shift}} și trageți.
4. Apăsați {{key:F}} sau faceți clic pe {{ui:Potrivire}} ca să vedeți din nou întregul model.
:::

:::touch
1. Trageți cu un deget ca să orbitați.
2. Ciupiți cu două degete ca să măriți și mișcați două degete împreună ca să panoramați.
3. Atingeți {{ui:Potrivire}} ca să vedeți din nou întregul model.
:::

## Faceți un lucru real: corectați o etichetă

1. Faceți clic pe un perete, pe o ușă sau pe orice element din model. Devine albastru, iar proprietățile sale apar în dreapta.
2. În panoul {{ui:Proprietăți}}, faceți clic pe valoarea de lângă **Etichetă**.
3. Scrieți noua etichetă și apăsați {{key:Enter}}.
4. Uitați-vă la secțiunea {{ui:Modificări}} care s-a deschis în stânga: modificarea dumneavoastră apare cu valoarea veche și cu cea nouă.

## Salvați o copie

1. Faceți clic pe {{ui:Salvare ca IFC}} în secțiunea {{ui:Modificări}} sau apăsați {{key:Mod+S}}.
2. Găsiți noul fișier în dosarul de descărcări. Are numele originalului cu „ (edited)” adăugat, de exemplu `Clinica (edited).ifc`.

Fișierul original nu se modifică niciodată. [Modificarea proprietăților IFC și salvarea unei copii editate](topic:edit-ifc-properties) explică editarea pe larg.

## Unde mergeți mai departe

- [Ecranul BimCraft](topic:workspace): fiecare panou după nume.
- [Venind de la alte programe BIM și de desen](topic:coming-from): ce pare diferit dacă sunteți obișnuit cu Revit.
- [Deschiderea unui întreg dosar de proiect](topic:open-project-folder): îndreptați BimCraft spre un dosar de proiect și lăsați-l să sorteze fișierele.
- [Vizualizarea unui desen DWG sau DXF](topic:view-dwg): foi, straturi și vizualizarea pentru imprimare.

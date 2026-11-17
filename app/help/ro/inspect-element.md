---
title: Alegerea unui element și citirea proprietăților sale
summary: Faceți clic pe orice element din modelul 3D pentru a-l evidenția și a-i citi numele, tipul, eticheta, GlobalId, seturile de proprietăți și cantitățile.
keywords: proprietăți, alegere, clic, element, parametri, seturi de proprietăți, pset, cantități, globalid, guid, tip, inspectare
from: 43b80aa8
---

## Ce veți face

Alegeți elemente într-un model IFC și citiți tot ce spune fișierul despre ele: atribute, seturi de proprietăți, proprietăți de tip și cantități.

## Pași

1. Deschideți un model IFC.
2. Faceți clic pe un element, de exemplu pe o ușă. Faceți clic fără a trage: o tragere de mai mult de câțiva pixeli orbitează în loc să aleagă.
3. Uitați-vă la element: este evidențiat cu albastru.
4. Uitați-vă la panoul {{ui:Proprietăți}} din dreapta. Sus sunt tipul elementului (cum ar fi „Door” sau „WallStandardCase”) și numele său.
5. Citiți primul bloc: **Nume**, **Tip**, **Tip de obiect**, **Etichetă**, **Descriere**, **GlobalId** și **Linie**.
6. Derulați în jos până la seturile de proprietăți. Primele trei sunt deschise; faceți clic pe numele oricărui alt set pentru a-l deschide.
7. Faceți clic pe alt element pentru a trece la el.
8. Apăsați {{key:Esc}} sau faceți clic pe fundalul gol pentru a șterge selecția.

## Ce ar trebui să vedeți

- Elementul evidențiat și datele sale în dreapta.
- Seturile de proprietăți în ordine alfabetică. Seturile care provin din **tipul** elementului au „ (tip)” după nume și nota „Proprietate de tip: o modificare aici se aplică fiecărui element de acest tip.”
- Seturile de cantități (cum ar fi lungimi, suprafețe și volume) listate împreună cu celelalte seturi. Cantitățile sunt doar pentru citire.
- Valorile pe care le puteți modifica arată ca niște butoane. [Modificarea proprietăților IFC și salvarea unei copii editate](topic:edit-ifc-properties) arată cum.

[Câmpurile panoului Proprietăți](topic:properties-panel) explică fiecare câmp.

## Accesarea elementelor ascunse

1. Pentru a ajunge la ceva din interiorul clădirii, debifați nivelurile de deasupra lui din lista {{ui:Niveluri}}.
2. Pentru a ajunge la un perete din spatele unui volum de încăpere, dezactivați {{ui:Spații}}.
3. Faceți clic pe element.

## Greșeli frecvente

- **Trageți puțin în timp ce faceți clic.** BimCraft tratează asta ca pe o orbitare și nu alege. Țineți mouse-ul nemișcat.
- **Așteptarea unităților lângă numere.** Valorile sunt afișate așa cum sunt stocate în fișier, rotunjite la patru zecimale, fără simbol de unitate. Lungimile dintr-un export metric sunt de obicei milimetri sau metri; verificați setările exportatorului.
- **Căutarea unui parametru după numele său cunoscut.** Exportatorii redenumesc și regrupează parametrii în seturi de proprietăți IFC, cum ar fi `Pset_WallCommon`. Parcurgeți fiecare set; parametrii personalizați stau adesea într-un set numit după programul care exportă sau după compania dumneavoastră.
- **Așteptarea unei casete de căutare.** Faceți clic pentru a alege un element; {{key:Mod}}+clic sau {{key:Shift}}+clic alege mai multe, iar {{key:Mod+A}} alege fiecare element afișat. Lista {{ui:Elemente}} din stânga numără elementele doar după tip; nu se poate face clic pe ea.
- **Alegerea pe o fișă de fișier de proiect.** O fișă de fișier nu are elemente de ales: „Proprietățile elementului au nevoie de modelul 3D. Deschideți un export IFC al acestui fișier ca să le vedeți.”

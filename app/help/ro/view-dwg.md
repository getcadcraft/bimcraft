---
title: Vizualizarea unui desen DWG sau DXF
summary: Deschideți un DWG sau DXF, deplasați-vă în spațiul model și în planșe, citiți coordonatele și vedeți ce nu este încă desenat.
keywords: blocuri dinamice, stări de vizibilitate, dwg, dxf, cad, desen, 2d, vizualizare, vizualizator, panoramare, zoom, spațiu model, spațiu hârtie, aranjare în pagină, coordonate, deschidere dwg
from: 4db3122a
---

## Ce veți face

Deschideți un desen CAD, îl vedeți în 3D sau 2D, vă deplasați prin el, comutați între spațiul model și planșele lui și citiți coordonatele. BimCraft afișează desene DWG și DXF; nu le editează și nu le salvează. Pentru a le modifica, faceți clic pe {{ui:Editare în CadCraft}} și desenul se deschide în aplicația de desenare CadCraft, într-o filă nouă.

## Pași

1. Faceți clic pe {{ui:Alegere fișier}} sau trageți desenul pe pagină.
2. Alegeți un fișier `.dwg` sau `.dxf`.
3. Așteptați cât bara de stare afișează „Se citește desenul…”. Desenele mari durează câteva secunde. Apoi afișează cât a durat citirea, „se randează…” cât se desenează prima imagine și cât a durat aceasta.
4. Desenul se deschide în 3D, cea mai rapidă modalitate de a afișa un desen mare (vezi [Vizualizarea unui desen DWG sau DXF în 3D](topic:dwg-in-3d)). Faceți clic pe {{ui:Model}} pentru vizualizarea plană 2D. Pentru a deschide mereu desenele în 2D, setați {{ui:Setări}} › {{ui:BimCraft}} › **Desenele se deschid în** la {{ui:Model (2D)}}. Un desen fără nimic în spațiul model, sau un browser care nu poate afișa 3D, se deschide în 2D.
5. Uitați-vă la filele de deasupra desenului: mai întâi {{ui:Model}}, apoi câte una pentru fiecare planșă, în ordinea desenului.
6. Faceți clic pe o filă de planșă ca să vedeți planșa: hârtia, cu modelul afișat prin ferestrele ei de vizualizare.
7. Faceți clic pe {{ui:Model}} ca să reveniți în spațiul model.
8. Treceți cursorul peste desen și citiți coordonatele X și Y din colț.

## Ce ar trebui să vedeți

- Desenul, potrivit în fereastră. Culorile urmează desenul; liniile albe (culoarea 7) se desenează în culoarea cernelii temei, iar culorile pale se închid pe tema luminoasă ca să rămână lizibile.
- Panoul {{ui:Desen}} din stânga: fișierul, dimensiunea, formatul (de exemplu „AutoCAD 2018 (AC1032)”), unitățile, numărul de entități și de straturi, numărul de planșe și desenele și echipamentele legate, atunci când există.
- Lista {{ui:Straturi}} din stânga.
- În dreapta: cum vă deplasați, desenele și imaginile legate și **Încă nedesenat**.

## Deplasarea în desen

:::mouse
| Pentru a | Faceți astfel |
|---|---|
| Panoramare | Trageți cu orice buton al mouse-ului |
| Zoom | Derulați roata; punctul de sub cursor rămâne pe loc |
| Potrivire | Dublu clic, apăsați {{key:F}} sau faceți clic pe {{ui:Potrivire}} |
:::

:::mac mouse
Pe un touchpad, derularea cu două degete **face zoom**, nu panoramare. Ciupirea face zoom de asemenea. Pentru panoramare, faceți clic și trageți.
:::

:::touch
Trageți cu un deget pentru panoramare. Zoomul prin ciupire pentru desene este încă nerealizat: atingeți {{ui:Potrivire}} ca să vedeți toată planșa și folosiți un mouse sau un touchpad ca să faceți zoom.
:::

## Blocuri dinamice

Un bloc dinamic este desenat așa cum îl arată desenul: fiecare bloc plasat în starea de vizibilitate în care a fost salvat desenul („Plan” sau „Front”, „Single bowl” sau „Double bowl”). În dreapta, **Blocuri dinamice** listează fiecare bloc plasat în spațiul model: câte sunt plasate, stările pe care le afișează și fiecare stare pe care o are blocul. În {{ui:3D}}, faceți clic pe un bloc plasat ca să vedeți **Bloc dinamic**, **Stare afișată** și **Alte stări** în {{ui:Proprietăți}}. BimCraft nu schimbă stările.

## Încă nedesenat

Unele tipuri de obiecte nu sunt desenate în această versiune. Sunt numărate sub **Încă nedesenat** în dreapta („Aceste părți ale desenului sunt omise deocamdată, nu sunt ghicite.”), ca să știți că lipsește ceva. Liniile, polilinile, arcele, cercurile, elipsele, splinele, hașurile și umplerile pline, textul și textul pe mai multe rânduri, blocurile cu atribute, cotele, liniile de indicație și liniile de indicație multiple, tabelele, imaginile și ferestrele de vizualizare sunt desenate. Fețele 3D, plasele poliedrice și plasele de poligoane sunt desenate ca muchiile lor văzute de sus; comutați la {{ui:3D}} ca să le vedeți ca suprafețe.

Un DXF binar nu se deschide: BimCraft o spune. Salvați-l din nou ca DXF ASCII sau ca DWG, din programul care l-a creat.

## Greșeli frecvente

- **Desenul pare gol.** Unele straturi pot fi oprite sau înghețate în desenul însuși; ele încep debifate în {{ui:Straturi}}. Faceți clic pe {{ui:Toate active}}. Dacă starea spune „*name* is an empty drawing: it holds no lines, text or blocks.”, atunci *name* este un desen gol: nu conține linii, text sau blocuri.
- **O planșă afișează un cadru gol.** Planșa se poate baza pe desene legate. Vezi [Găsirea desenelor și imaginilor legate](topic:dwg-linked-files).
- **Textul arată puțin diferit.** BimCraft desenează textul cu un font sans-serif îngust, nu cu fonturile desenului, deci textul poate fi puțin mai lat sau mai îngust decât în programul care l-a creat.
- **„*name* could not be read. It may be damaged, or saved in a format the reader does not handle yet.”** Paranteza de la final indică codul formatului fișierului. Salvați-l din programul care l-a creat ca DWG mai vechi sau ca DXF și încercați din nou.
- **Așteptați să măsurați, să desenați sau să editați.** BimCraft doar vizualizează desene. Faceți clic pe {{ui:Editare în CadCraft}} ca să deschideți același fișier în aplicația de desenare CadCraft, care îl editează și salvează o copie ca DWG sau DXF. Fișierul original nu se modifică, iar desenele legate rămân în BimCraft. Butonul apare doar acolo unde CadCraft vă este deschis.

## Următorul

- [Vizualizarea unui desen DWG sau DXF în 3D](topic:dwg-in-3d)
- [Lucrul cu straturi și planșe](topic:dwg-layers-sheets)
- [Verificarea unui desen în vizualizarea de tipărire](topic:print-view)

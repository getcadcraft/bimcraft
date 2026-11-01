---
title: Fișierele pe care BimCraft le deschide și le salvează
summary: Fiecare format pe care BimCraft îl deschide, ce păstrează, ce salvează, unde ajung fișierele salvate și ce se schimbă între browsere și când sunteți offline.
keywords: formate, deschidere, salvare, export, descărcare, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, încărcare, confidențialitate, dimensiune fișier
from: a1f0161b
---

BimCraft citește fișiere de pe calculatorul dumneavoastră, în fila browserului. **Nimic nu este încărcat** în CadCraft sau către altcineva. Când salvați, BimCraft oferă browserului un fișier nou pentru descărcare; nu suprascrie niciodată un fișier pe care l-ați deschis.

## Ce deschide

| Format | Extensii | Ce obțineți |
|---|---|---|
| IFC | `.ifc` | Modelul în 3D, nivelurile, numărul de elemente și proprietățile fiecărui element. Nume, etichete și valori individuale ale proprietăților pot fi modificate. |
| Fișiere de proiect și de familie | `.rvt` `.rfa` `.rte` `.rft` | O fișă a fișierului: versiunea, build-ul, lucrul în comun, informațiile proiectului, parametrii familiei, fișierele legate și imaginea de previzualizare. Fără 3D. |
| DWG | `.dwg` | Desenul în 2D: spațiul model, fiecare foaie, straturi, desene legate, imagini și vizualizarea pentru imprimare. Spațiul model și în 3D. Sunt verificate formatele de la AutoCAD 2000 până la 2018. |
| DXF | `.dxf` | La fel ca DWG. |
| STEP | `.step` `.stp` | O piesă, un echipament sau modelul unui furnizor (AP203, AP214, AP242) în 3D: fiecare solid devine un element (un element de clădire de tip proxy) al unui mic model IFC pe un singur nivel, citit ca triunghiuri la dimensiunea reală, iar un ansamblu cu fiecare piesă unde o așază fișierul. De aici funcționează ca orice IFC: proprietăți, secțiuni, măsurare, salvare ca IFC. Culorile și arborele ansamblului nu sunt citite. |
| Nori de puncte | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Scanarea în vizualizarea 3D, lângă un model sau singură: vezi [Afișarea unui nor de puncte lângă model](topic:point-clouds). |
| Pachet de proiect | `.ccbundle.zip` | Modelul cu vizualizările, aranjamentele în pagină și grupurile de proprietăți: vezi [Deschiderea unui pachet de proiect](topic:open-project-bundle). |
| Un dosar | oricare | Un raport cu fiecare model, desen și pachet de proiect din el. Orice IFC, model, desen sau pachet din raport se deschide cu un clic. |

[Ce citește BimCraft din fiecare format](topic:file-formats) detaliază.

BimCraft stabilește ce este un fișier după primii octeți, nu doar după nume, așa că un fișier de proiect cu o extensie neobișnuită se deschide tot ca fișă.

### Nu se deschid

- `.ifczip` și `.ifcxml`: BimCraft spune „.ifczip nu este încă acceptat. Salvați sau exportați modelul ca fișier .ifc simplu.” Dezarhivați `.ifczip` (conține un `.ifc` simplu) sau exportați din nou ca IFC simplu.
- Desenele DGN sunt listate într-un raport de dosar, dar nu se deschid.
- Fișierele PDF, imaginile și documentele de birou nu se deschid singure. Imaginile sunt folosite ca fotografii în interiorul unui DWG, iar {{ui:Build}} › {{ui:Dintr-un desen…}} transformă paginile unui PDF sau ale unei scanări în pereți: vezi [Pereți dintr-un set de planuri](topic:walls-from-plans).

## Ce salvează

| Faceți clic pe | Obțineți | Unde |
|---|---|---|
| {{ui:Salvare ca IFC}} | Un fișier IFC nou cu modificările dumneavoastră, numit „*numele original* (edited).ifc” | Dosarul de descărcări al browserului |
| {{ui:Descărcare CSV}} în tabelul de echipamente | Un CSV cu elementele din listă, numit „*numele desenului* equipment.csv” | Dosarul de descărcări al browserului |

Celelalte lucruri se salvează acolo unde sunt create, fiecare în subiectul lui: {{ui:USD}} ([Exportarea modelului ca USD](topic:usd)), fișierul .glb pentru {{ui:Pentru randare}}, imaginile randate, foile și planurile ca PDF, tabelele și listele ca CSV, problemele BCF, foaia de calcul COBie, fișierele de familie și scanările înregistrate ca LAS sau E57. BimCraft nu salvează fișiere DWG, DXF sau de proiect și nu modifică niciodată fișierele deschise.

:::chromium
Chrome și Edge salvează descărcările în dosarul setat în setările lor, de obicei Descărcări. Ca să fiți întrebat unde să salvați fiecare fișier, activați „Întreabă unde să salvezi fiecare fișier înainte de descărcare” în setările de descărcare ale browserului.
:::

:::firefox
Firefox salvează în dosarul Descărcări, cu excepția cazului în care ați setat în setări „Întreabă-mă întotdeauna unde să salvez fișierele”.
:::

:::safari
Safari salvează în Descărcări, cu excepția cazului în care alegeți alt dosar la **Safari > Setări > General > Locația fișierelor descărcate**.
:::

## Salvarea a doua oară

Fiecare salvare descarcă întregul model cu **fiecare modificare de la deschidere**, nu doar modificările făcute după ultima salvare. Lista {{ui:Modificări}} începe din nou goală după fiecare salvare, deci nu puteți anula dincolo de o salvare. Ca să începeți din nou de la original, deschideți din nou fișierul original.

## Fișiere mari și memorie

- Fișierele **IFC** sunt citite complet în memoria filei, iar geometria 3D ocupă și mai multă memorie. Un model de câteva sute de megaocteți poate fi prea mult pentru un laptop. Peste 1,5 milioane de triunghiuri, muchiile sunt dezactivate ca să economisească memorie („Muchiile sunt dezactivate pentru modele foarte mari”).
- **Fișierele de proiect** nu sunt citite integral. BimCraft citește doar părțile mici de care are nevoie, de la aproximativ 40 KB la 100 KB, oricât de mare este fișierul, așa că un model central de 500 MB de pe o unitate de rețea se deschide în câteva clipe.
- **Fișierele DWG și DXF** sunt citite complet. Un desen foarte mare afișează „Acest desen este foarte mare; se arată doar o parte din el.”
- **Dosarele** cu până la 20 000 de fișiere se deschid. Sunt citiți doar câțiva kilobytes pentru fiecare fișă de model.

Vezi [Browsere, dispozitive și memorie](topic:platforms) pentru mai multe.

## Online și offline

Deschiderea fișierelor nu are nevoie niciodată de internet. Un singur cititor se încarcă de pe site prima dată când este necesar: motorul IFC, prima dată când deschideți un model IFC („Se pornește motorul IFC…”). Cititoarele DWG și DXF fac parte din aplicație.

:::offline
Sunteți offline. Dacă butonul din bara aplicației spune {{ui:Pregătit pentru offline}}, fiecare format se deschide ca de obicei. Dacă nu, un model IFC nu se poate deschide decât dacă a fost deja deschis în această filă: reconectați-vă mai întâi. Vezi [Online și offline](topic:online-offline).
:::

Ca să folosiți BimCraft fără conexiune, faceți clic pe {{ui:Salvare pentru offline}} în bara aplicației cât timp sunteți online și așteptați {{ui:Pregătit pentru offline}}. Copia salvată are aproximativ 33 MB; include motorul IFC, deci și modelele IFC se deschid offline. [Lucrul offline](common:offline) explică în general copiile salvate.

## Salvarea în cloud

Salvarea în cloud nu este încă disponibilă. Salvați copiile modificate pe calculatorul dumneavoastră sau pe serverul de fișiere al biroului, ca pe orice alt fișier. Vezi [Fișierele dumneavoastră](common:your-files).

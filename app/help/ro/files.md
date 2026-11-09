---
title: Fișierele pe care BimCraft le deschide și le salvează
summary: Fiecare format pe care BimCraft îl deschide, ce păstrează, ce salvează, unde ajung fișierele salvate și ce se schimbă între browsere și când sunteți offline.
keywords: formate, deschidere, salvare, export, descărcare, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, încărcare, confidențialitate, dimensiunea fișierului
from: a7275dbf
---

BimCraft citește fișierele de pe calculator, în fila browserului. **Nimic nu este încărcat** către CadCraft sau către altcineva. La salvare, BimCraft oferă browserului un fișier nou pentru descărcare; nu suprascrie niciodată un fișier deschis.

## Ce deschide

| Format | Extensii | Ce obțineți |
|---|---|---|
| IFC | `.ifc` | Modelul în 3D, etajele, numărul de elemente și proprietățile fiecărui element. Numele, etichetele și valorile unice ale proprietăților pot fi modificate. |
| Fișiere de proiect și de familie | `.rvt` `.rfa` `.rte` `.rft` | O fișă a fișierului: versiune, build, lucru în echipă, informații despre proiect, parametrii familiei, fișiere legate și imaginea de previzualizare. Fără 3D. |
| DWG | `.dwg` | Desenul în 2D: spațiul model, fiecare foaie, straturi, desene legate, imagini și vizualizarea de tipărire. Și spațiul model în 3D. Sunt verificate formatele de la AutoCAD 2000 până la 2018. |
| DXF | `.dxf` | La fel ca DWG. |
| STEP | `.step` `.stp` | O piesă, un echipament sau modelul unui furnizor (AP203, AP214, AP242) în 3D: fiecare corp devine un element (un proxy de element de construcție) al unui model IFC mic, pe un etaj, citit ca triunghiuri la dimensiunea reală, iar un ansamblu cu fiecare piesă acolo unde o plasează fișierul. De aici funcționează ca orice IFC: proprietăți, secțiuni, măsurare, salvare ca IFC. Culorile și arborele ansamblului nu sunt citite. |
| Nori de puncte | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Scanarea în vizualizarea 3D, lângă un model sau singură: vezi [Afișarea unui nor de puncte lângă model](topic:point-clouds). |
| Pachet de proiect | `.ccbundle.zip` | Modelul cu vizualizările, aranjamentele în pagină (Layout) și grupurile de proprietăți: vezi [Deschiderea unui pachet de proiect](topic:open-project-bundle). |
| Un dosar | oricare | Un raport cu fiecare model, desen și pachet de proiect din dosar. Orice IFC, model, desen sau pachet din raport se deschide cu un clic. |

[Ce citește BimCraft din fiecare format](topic:file-formats) oferă detalii.

BimCraft stabilește ce este un fișier după primii octeți, pe lângă nume, așa că un fișier de proiect cu o extensie neobișnuită se deschide tot ca fișă.

### Nu se deschid

- `.ifczip` și `.ifcxml`: BimCraft afișează „.ifczip nu este încă acceptat. Salvați sau exportați modelul ca fișier .ifc simplu.” Dezarhivați `.ifczip` (conține un `.ifc` simplu) sau exportați din nou ca IFC simplu.
- Desenele DGN sunt listate într-un raport de dosar, dar nu se deschid.
- PDF-urile, imaginile și fișierele de birou nu se deschid singure. Imaginile se folosesc ca imagini într-un DWG, iar {{ui:Build}} › {{ui:Dintr-un desen…}} transformă paginile unui PDF sau ale unei scanări în pereți: vezi [Pereți dintr-un set de planuri](topic:walls-from-plans).

## Ce salvează

| Dați clic pe | Obțineți | Unde |
|---|---|---|
| {{ui:Salvare ca IFC}} | Un fișier IFC nou, cu modificările făcute, numit "*original name* (edited).ifc" | Dosarul de descărcări al browserului |
| {{ui:Descărcare CSV}} în tabelul centralizator de echipamente | Un CSV cu elementele din listă, numit "*drawing name* equipment.csv" | Dosarul de descărcări al browserului |

Alte lucruri se salvează acolo unde sunt create, fiecare în propriul subiect: {{ui:USD}} ([Exportul modelului ca USD](topic:usd)), {{ui:Collada}} (.dae și .kmz pentru Google Earth: [Exportul modelului ca Collada sau pentru Google Earth](topic:collada)), fișierul .glb pentru {{ui:Pentru randare}}, imaginile randate, foile și planurile ca PDF, tabelele și listele ca CSV, problemele BCF, foaia de calcul COBie, fișierele de familie și scanările înregistrate ca LAS sau E57. BimCraft nu salvează DWG, DXF sau fișiere de proiect și nu modifică niciodată fișierele deschise.

:::chromium
Chrome și Edge salvează descărcările în dosarul setat în setări, de obicei Descărcări. Pentru a fi întrebat unde să salvați fiecare fișier, activați „Întrebați unde să salvez fiecare fișier înainte de descărcare” în setările de descărcare ale browserului.
:::

:::firefox
Firefox salvează în dosarul Descărcări, dacă nu ați setat în setări „Întreabă-mă întotdeauna unde să salvez fișierele”.
:::

:::safari
Safari salvează în Descărcări, dacă nu alegeți alt dosar la **Safari > Setări > General > Locația fișierelor descărcate**.
:::

## Salvarea a doua oară

Fiecare salvare descarcă întregul model cu **toate modificările făcute de la deschidere**, nu doar cele de după ultima salvare. Lista {{ui:Modificări}} se golește după fiecare salvare, așa că nu puteți anula dincolo de o salvare. Pentru a începe din nou de la original, deschideți din nou fișierul original.

## Fișiere mari și memorie

- **IFC** se citesc integral în memoria filei, iar geometria 3D ocupă și ea memorie. Un model de câteva sute de MB poate fi prea mult pentru un laptop. Peste 1.5 milioane de triunghiuri, muchiile sunt oprite pentru a economisi memorie („Muchiile sunt dezactivate pentru modele foarte mari”).
- **Fișierele de proiect** nu se citesc integral. BimCraft citește doar părțile mici de care are nevoie, de la 40 KB la 100 KB, oricât de mare ar fi fișierul, așa că un model central de 500 MB de pe o unitate de rețea se deschide imediat.
- **DWG și DXF** se citesc integral. Un desen foarte mare afișează „Acest desen este foarte mare; se arată doar o parte din el.”
- **Dosarele** cu până la 20,000 de fișiere se deschid. Se citesc doar câțiva kilobytes necesari fiecărei fișe de model.

Vezi [Browsere, dispozitive și memorie](topic:platforms) pentru mai multe.

## Online și offline

Deschiderea fișierelor nu are nevoie niciodată de internet. Un singur cititor se încarcă de pe site prima dată când este nevoie: motorul IFC, la prima deschidere a unui model IFC („Pornire motor IFC…”). Cititorii DWG și DXF fac parte din aplicație.

:::offline
Sunteți offline. Dacă butonul din bara aplicației spune {{ui:Pregătit pentru offline}}, fiecare format se deschide ca de obicei. Dacă nu, un model IFC nu poate fi deschis decât dacă a mai fost deschis unul în această filă: conectați-vă mai întâi. Vezi [Online și offline](topic:online-offline).
:::

Pentru a folosi BimCraft fără conexiune, faceți clic pe {{ui:Salvare pentru offline}} din bara aplicației cât sunteți online și așteptați {{ui:Pregătit pentru offline}}. Copia salvată are aproximativ 33 MB; include motorul IFC, deci modelele IFC se deschid și offline. [Lucrul offline](common:offline) explică în general copiile salvate.

## Salvarea în cloud

Salvarea în cloud nu este încă disponibilă. Salvați copiile modificate pe propriul calculator sau pe serverul de fișiere al biroului, ca pe orice alt fișier. Vezi [Fișierele](common:your-files).

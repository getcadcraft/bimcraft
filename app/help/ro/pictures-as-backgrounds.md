---
title: Puneți o imagine sub plan
summary: Plasați o imagine PNG, JPEG sau WebP (un plan scanat, un crochiu, o fotografie a amplasamentului, o imagine aeriană) sub planul unui nivel sau pe un plan vertical, scalați-o după două puncte, mutați-o, rotiți-o, estompați-o și blocați-o, vedeți-o în 3D și în PDF-ul planului și păstrați-o alături de model, într-un pachet.
keywords: imagine, poză, fundal, PNG, JPEG, WebP, scanare, crochiu, fotografie, aerian, plan de situație, scară, opacitate, blocare, suport, calc
from: e3c78d1f
---

## Plasați o imagine

Activați {{ui:Desenare}}, mergeți la nivel și alegeți {{ui:Imagine}} din meniul {{ui:Build}}. Apoi {{ui:Inserare imagine…}} și alegeți un fișier PNG, JPEG sau WebP. Este citit în browser și nu este încărcat niciodată. Apare sub plan, potrivită cu vizualizarea, iar bara de instrumente spune că nu este încă scalată. Tot ce desenați se află deasupra ei.

## Setați scara

Alegeți {{ui:Scară}}, faceți clic pe două puncte de pe imagine a căror distanță reală o cunoașteți (cele două capete ale unui perete pe un plan scanat, o cotă tipărită pe un crochiu), apoi scrieți distanța și apăsați {{key:Enter}}. Imaginea crește sau scade în jurul primului punct pe care l-ați apăsat. {{key:Esc}} anulează.

## Lipiți o zonă copiată

În MarkupCraft, {{ui:Copiere zonă}} copiază o parte dintr-o planșă PDF ca imagine. Înapoi în BimCraft, cu planul unui nivel afișat, apăsați {{key:Ctrl+V}} (sau {{ui:Lipire}} din meniul {{ui:Editare}}): zona ajunge pe plan ca imagine, centrată unde se află indicatorul (sau în mijlocul vizualizării). Când planșa avea o scară de desen, intră la dimensiunea reală, astfel încât un perete de pe ea are lungimea pereților din model. Fără scară, intră la dimensiunea hârtiei, iar {{ui:Scară}} pornește, ca să puteți face clic pe două puncte și să scrieți distanța dintre ele. O zonă copiată ca suprapunere pornește cu opacitatea cu care a fost copiată. Este o singură etapă de anulare și este păstrată ca orice altă imagine.

{{ui:Lipire}} ia ultimul lucru copiat: o zonă copiată sau ceva copiat în BimCraft. {{key:Ctrl+V}} lipește și orice altă imagine PNG, JPEG sau WebP din clipboard, plasată ca {{ui:Inserare imagine…}} și încă nescalată. O zonă copiată este reținută timp de șase ore.

## Mutați, rotiți, estompați, blocați

{{ui:Mutare}} ia un punct de bază pe imagine și apoi locul unde trebuie să ajungă. {{ui:Rotire}} ia un unghi în grade, în jurul centrului imaginii. {{ui:Opacitate}} o estompează, ca liniile desenate să iasă în evidență. {{ui:Blocare}} împiedică mutarea ei în timp ce desenați; o imagine blocată permite totuși schimbarea opacității și ascunderea. Fiecare modificare este o etapă de anulare.

## Mai multe imagini, mai multe niveluri

O imagine aparține nivelului pe care a fost plasată și apare pe planul acelui nivel și pe planul tavanului. Faceți clic pe o imagine pentru a lucra la ea sau alegeți-o din listă. {{ui:Ascundere}} o oprește fără a o elimina; {{ui:Eliminare}} (sau {{key:Delete}}) o scoate din model.

## Imagini în vizualizarea 3D

Fiecare imagine stă și în vizualizarea 3D ca un plan plat: o imagine de plan stă culcată pe nivelul său, iar o imagine pe plan vertical stă în picioare peste linia sa de secțiune. Este desenată peste model, fără să-l ascundă, iar modelul ascunde partea imaginii aflată în spatele său. Imaginile care se suprapun se sortează după distanță. {{ui:Opacitate}}, {{ui:Ascundere}}, {{ui:Blocare}} și {{ui:Eliminare}} funcționează la fel, iar {{ui:Afișare în 3D}} oprește toate planurile doar în vizualizarea 3D. Un nivel conține cel mult 8 imagini, pentru a păstra vizualizările rapide.

## O imagine pe un plan vertical

Sub {{ui:Plasare pe}} alegeți {{ui:Un plan vertical (linie de secțiune)}}, apoi {{ui:Inserare imagine…}}. Faceți clic pe cele două capete ale unei linii de pe plan (capătul unei fețe de perete se fixează), sau alegeți o linie de secțiune numită a nivelului în {{ui:Peste o linie de secțiune}} și nu sunt necesare clicuri. Imaginea stă în picioare pe nivel peste acea linie, la fel de lată ca linia. Setați-i {{ui:Lățime}}, poziția {{ui:De-a lungul liniei}} și {{ui:Înălțime deasupra nivelului}} scriindu-le; {{ui:Rotire}} o rotește în propriul ei plan. O imagine verticală nu este desenată sub plan; planul își arată linia cât timp lucrați la ea. BimCraft nu are o fereastră interactivă de secțiune 2D: secțiunile și elevațiile sunt desenate pe planșe, iar imaginile nu sunt tipărite încă în aceste vizualizări de planșă.

## Tipărirea

{{ui:Vizualizare imprimare}} pe un plan scrie imaginile nivelului în PDF, sub desen, la scara, rotirea și opacitatea lor, decupate la planșă; o imagine ascunsă rămâne afară. Un JPEG intră așa cum este; celelalte imagini sunt reduse mai întâi la 200 dpi pe planșă.

## Păstrate alături de model

Octeții imaginii nu sunt scriși în textul IFC. Modelul se referă la fiecare prin nume (un IfcDocumentReference precum pictures/<id>.png), iar octeții călătoresc într-un pachet de proiect. Folosiți {{ui:Salvare ca pachet…}} (sau {{ui:Salvare ca IFC}} și alegeți-l): obțineți un singur fișier .ccbundle cu modelul și imaginile sale, IFC-ul rămâne mic, iar modificările rămân rapide. Deschideți .ccbundle și imaginile revin.

Un .ifc obișnuit nu poate ține o imagine fără a deveni mare. Când îl salvați, BimCraft spune câte imagini sunt păstrate în afara lui și oferă un pachet, sau un IFC obișnuit care încorporează imaginile până la 512 KB și lasă celelalte afară. Un .ifc obișnuit deschis fără pachetul său arată acele imagini ca lipsă, iar Probleme le listează; deschideți .ccbundle în care au fost salvate. Fișierele salvate de prima versiune, cu imaginea în IFC, se deschid în continuare, iar o salvare în pachet mută imaginile lor afară. O imagine este păstrată așa cum este până la 6 MB; una mai mare este redusă mai întâi, iar utilizatorul este anunțat. Alte programe deschid modelul și ignoră imaginile. O imagine pe care nu ați scalat-o încă este listată în Probleme ca notă.

## În planșele de secțiune și de elevație

O imagine pe un plan vertical (alegeți {{ui:Vertical}} în panoul imaginii și faceți clic pe cele două capete ale unei linii, sau plasați-o peste o linie de secțiune numită) este tipărită în vizualizările planșelor care o privesc drept. O secțiune arată o imagine care stă pe linia sa de tăiere sau care a fost plasată peste acea linie de secțiune după nume. O elevație arată fiecare imagine verticală al cărei plan este orientat spre ea. Imaginea este desenată sub liniile vizualizării, la scara vizualizării, decupată la vizualizare, și își păstrează opacitatea. Deschideți {{ui:Foi…}} pentru a o vedea; PDF-ul planșei o transportă ca imagine. Privită din spate, o imagine este oglindită, ca în 3D. Imaginile ascunse sunt lăsate afară.

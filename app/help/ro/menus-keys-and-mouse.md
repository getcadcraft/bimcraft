---
title: Meniuri, taste și mouse
summary: Alegeți un stil de meniu care se potrivește modului în care lucrați deja, atribuiți oricărei comenzi propria tastă, mutați comenzile între meniuri și stabiliți ce fac rotița și fiecare buton al mouse-ului.
keywords: stil de meniu, meniuri, bară de meniu, panglică, linie de comandă, taste de scurtătură, taste rapide, taste, personalizare, remapare, reatribuire, mouse, rotiță, inversare, direcția zoomului, butonul din mijloc, pan, orbitare, taste din două litere, export, import, comutare, familiar
from: a424e836
---

Comenzile BimCraft sunt aceleași indiferent de modul în care le accesați. Un **stil de meniu** decide doar unde se află pe ecran, cum se numesc acolo și ce taste le rulează, astfel încât să vă puteți păstra obișnuințele. Alegeți unul în {{ui:Setări}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Meniuri, taste și mouse}}; schimbarea este imediată, iar acest browser o reține.

## Cele cinci stiluri

| Stil | Ce obțineți |
|---|---|
| {{ui:CadCraft}} | Bara de instrumente și tastele proprii BimCraft ({{key:W}} perete, {{key:D}} ușă, {{key:N}} fereastră, {{key:X}} secțiune, {{key:F}} potrivire). Punctul de plecare. |
| {{ui:Proiectare de locuințe}} | O bară de meniu (Fișier, Editare, Build, Bibliotecă, 3D, CAD, Instrumente, Vizualizare) peste un rând de instrumente de construcție, așa cum sunt aranjate programele de proiectare a locuințelor. Aceleași taste simple, plus {{key:Mod+L}} pentru bibliotecă, {{key:F9}} pentru vederea 3D, {{key:F10}} pentru plan și {{key:F11}} pentru ambele. |
| {{ui:Panglică BIM}} | File de butoane mari (Arhitectură, Inserare, Adnotare, Modificare, Vizualizare, Ieșire) cu un meniu Fișier și butoane rapide în dreapta. Taste din două litere: {{key:W}} apoi {{key:A}} pentru un perete, {{key:D}} {{key:R}} ușă, {{key:W}} {{key:N}} fereastră, {{key:S}} {{key:C}} secțiune, {{key:Z}} {{key:F}} potrivire. Butonul din mijloc face pan; {{key:Shift}} și butonul din mijloc orbitează. |
| {{ui:Desen clasic}} | O panglică mică și o linie de comandă, pentru cei care tastează comenzile: WALL, DOOR, WINDOW, ROOF, U (anulare), ZOOM, SECTION, PLOT, INSERT, HELP. Începeți să tastați oriunde și literele ajung în linia de comandă; {{key:Enter}} rulează, {{key:Enter}} pe nimic repetă ultima comandă, {{key:Esc}} o șterge. |
| {{ui:Vizualizator}} | Pentru deschiderea și verificarea modelelor, nu pentru desenarea lor: meniurile {{ui:Fișier}}, {{ui:Vizualizare}}, {{ui:Afișare}}, {{ui:Verificare}} și {{ui:Editare}} peste un rând de instrumente de vizualizare (potrivire, vedere de sus, din față, din lateral, secțiune, măsurare, ascundere, izolare, transparent, afișare tot, plimbare virtuală). Instrumentele de construcție așteaptă într-un meniu {{ui:Model}} la final. Aceleași taste ca la stilul propriu BimCraft. |

Meniurile și panglicile apar odată ce un model este deschis sau începeți o clădire nouă; până atunci, panoul din stânga deschide fișiere și începe clădiri.

:::tip
O tastă care aparține layout-ului propriu BimCraft, dar nu stilului ales, nu face nimic, iar linia de stare arată unde a ajuns comanda („În Panglică BIM, Secțiune este SC”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și săgețile își păstrează întotdeauna sensul, iar un instrument aflat în funcțiune își păstrează propriile taste: {{key:R}} și {{key:Tab}} la plasare, {{key:W}} {{key:A}} {{key:S}} {{key:D}} la plimbare, {{key:H}} cu instrumentele de ușă și fereastră, cifrele când tastați o lungime.
:::

## Faceți-l propriu

1. Alegeți stilul cel mai apropiat de ce doriți, apoi faceți clic pe {{ui:Personalizare…}}.
2. La {{ui:Taste și meniuri}}, găsiți o comandă (caseta de căutare ajută). Faceți clic pe {{ui:Adăugare tastă}} și apăsați tasta sau două taste una după alta pentru o tastă din două litere. Faceți clic pe o tastă pentru a o elimina.
3. Cu o bară de meniu sau o panglică, {{ui:Unde se află}} mută comanda în alt meniu sau panou, sau în {{ui:Doar taste}}.
4. La {{ui:Mouse}}, setați rotița, butoanele care deplasează planul și ce face fiecare buton în vederile 3D.
5. Dați-i un nume și faceți clic pe {{ui:Salvare}}.

Salvarea unui stil integrat creează propria copie („Proiectarea mea de locuințe”); cel integrat nu se schimbă niciodată. O tastă atribuită la două comenzi, sau una care ar rula înainte ca o tastă din două litere să poată fi tastată, apare cu roșu și trebuie corectată înainte de salvare.

## Mouse

- **Rotița mouse-ului**: {{ui:Derularea în sus mărește}} (punctul de plecare) sau {{ui:Derularea în sus micșorează}}, și cât de repede. Un gest de ciupire pe trackpad mărește întotdeauna în direcția în care se mișcă degetele.
- **Deplasați planul și desenele cu**: oricare dintre butoanele stânga, din mijloc și dreapta. {{key:Space}} și tragerea deplasează de asemenea; tragerea cu stânga deplasează doar acolo unde un clic nu ar selecta sau desena.
- **Tragerea în vederile 3D**: {{ui:Propria fiecărei vederi}} păstrează butoanele BimCraft (stânga orbitează, dreapta deplasează). Sau setați fiecare buton să orbiteze, să deplaseze, să mărească sau nimic; {{key:Shift}} cu butonul schimbă orbitarea cu deplasarea. Un clic fără tragere selectează în continuare.

## Transferul stilului

{{ui:Export}} salvează stilul în uz ca un fișier mic `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar comenzile BimCraft: orice altceva din el (o comandă pe care această versiune nu o are, o tastă care nu funcționează aici) este omis și numărat în linia de stare. {{ui:Ștergeți acest stil}} elimină unul propriu.

:::note
Aceste setări rămân în acest browser. {{ui:Folosește acest stil în toate aplicațiile}} sub cardurile de stil face ca fiecare aplicație să se deschidă în stilul corespunzător (propria bară de instrumente, o bară de meniu, o panglică sau Desen clasic; {{ui:Vizualizator}} este doar al BimCraft și nu are corespondent în alte aplicații), cu modificările făcute în fiecare aplicație; o aplicație fără stil corespunzător își păstrează propriul. Alegerea altui stil într-o aplicație schimbă doar acea aplicație.
:::

Înrudite: [Tastatură și mouse](topic:keyboard) · [Setările BimCraft](topic:settings) · [Venire din alte programe BIM și de desen](topic:coming-from)

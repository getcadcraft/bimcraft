---
title: Setări BimCraft
summary: Alegeți dacă se afișează încăperile și spațiile, dacă se desenează muchiile și în ce vedere se deschide un model, și porniți plasarea cu agățarea de perete activată.
keywords: setări, preferințe, opțiuni, spații, încăperi, ifcspace, muchii, linii, performanță, model mare, vedere la deschidere, cameră, vedere de sus, agățare de perete, agățare
from: 4416e64f
---

Deschideți {{ui:Setări}} cu roata dințată din bara aplicației sau cu {{key:Mod+,}}. Prima filă, {{ui:BimCraft}}, conține setările care țin de această aplicație; {{ui:General}} conține setările pe care le partajează toate aplicațiile CadCraft (temă, bară de instrumente, panouri). Setările BimCraft există doar în aplicație: le modificați aici, iar acest browser le reține. {{ui:Resetare setări BimCraft}}, din partea de jos a casetei de dialog, le readuce, împreună cu cele partajate, la valorile implicite.

## Meniuri, taste și mouse

Stilul meniului (bara de instrumente proprie BimCraft, o bară de meniu de proiectare a locuinței, o panglică BIM sau o linie de comandă pentru desenare), tastele și meniurile proprii și ce fac rotița și butoanele mouse-ului. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).

## Când se deschide un model

- **Afișare încăperi și spații** (dezactivat la pornire): încăperile și spațiile sunt casete transparente care pot ascunde pereții din spatele lor, așa că la pornire sunt ascunse. Butonul {{ui:Spații}} de deasupra modelului le pornește și le oprește în continuare pentru modelul deschis.
- **Muchii**: {{ui:Muchii active}} (la pornire) desenează liniile de muchie care dau aspectul de desen tehnic. {{ui:Doar modele mici}} le desenează doar pentru modelele sub 300.000 de triunghiuri, ceea ce păstrează modelele mari mai rapide la rotire. {{ui:Muchii inactive}} pornește fiecare model fără ele. Butonul {{ui:Muchii}} le comută în continuare pentru modelul deschis. Peste 1,5 milioane de triunghiuri, muchiile sunt întotdeauna inactive.

## Desenele se deschid în

Cum se afișează întâi un desen DWG sau DXF: {{ui:3D (cel mai rapid)}} (la pornire) desenează repede chiar și un desen mare, sau {{ui:Model (2D)}} deschide vederea plană a spațiului model. Filele de deasupra desenului comută oricând între {{ui:Model}}, planșe și {{ui:3D}}. Un desen fără nimic în spațiul model sau un browser care nu poate afișa 3D se deschide întotdeauna în 2D.

## Vederea la deschidere

Camera cu care se deschide un model: {{ui:Potrivire}} (la pornire, tot modelul dintr-un colț), {{ui:Sus}}, {{ui:Față}} sau {{ui:Lateral}}. Butoanele de deasupra modelului schimbă vederea oricând.

**O clădire rotită în amplasament**: multe modele sosesc cu clădirea înclinată față de axele fișierului (la coordonate de măsurătoare sau partajate). {{ui:Aliniat la clădire}} (la pornire) arată o astfel de clădire aliniată: {{ui:Potrivire}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Lateral}}, fețele ViewCube-ului și fiecare secțiune nouă urmează pereții clădirii, iar busola ViewCube-ului arată în continuare nordul modelului. {{ui:Cum este plasată în amplasament}} păstrează axele fișierului. O clădire ai cărei pereți urmează axele arată la fel în ambele cazuri.

## Plasarea elementelor din bibliotecă

**Porniți cu agățarea de perete activată** (dezactivată la pornire): când începe plasarea sau lipirea unui element din bibliotecă, spatele lui se agață de peretele cel mai apropiat, cu fața spre încăpere. {{key:Tab}} sau {{ui:Agățare de perete}} din bara de plasare o dezactivează pentru moment. Un etaj fără pereți pornește fără ea.

## Casetă de secțiune

{{ui:Rezervă în jurul selecției}} este spațiul pe care {{ui:Casetă de secțiune în jurul selecției}} îl lasă pe fiecare parte a elementelor alese, în milimetri: 300 la pornire, până la 5000. Vezi [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane).

## Locație

{{ui:Latitudine și longitudine în}} alege sistemul în care {{ui:Măsurare}} › {{ui:Locație}} dă latitudinile și longitudinile: WGS 84 (EPSG:4326, la pornire, așa cum folosesc GPS-ul și hărțile web), {{ui:Datumul propriu al fișierului}} sau unul dintre ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 și CGCS2000. Sistemul de hărți și datumul proprii fișierului se afișează întotdeauna. Vezi [Măsurarea distanțelor, a ariilor fețelor și a locațiilor în 3D](topic:measure).

## Indicator de colț

Ce se află în colțul din dreapta jos al vederilor 3D (un model IFC și un desen trecut în 3D): {{ui:ViewCube}} (la pornire), {{ui:Pictogramă de axe}} (un mic X, Y și Z) sau {{ui:Niciuna}}. Schimbarea se face imediat. Vederea 2D a desenului nu afișează niciunul.

Pe ViewCube, faceți clic pe o față, o muchie sau un colț ca să priviți din acea parte, trageți cubul ca să orbitați, trageți inelul ca să-l rotiți și faceți clic pe pictograma casă ca să reveniți la vederea de start.

## Numele utilizatorului în probleme

Cu un cont conectat, problemele poartă numele contului, iar BimCraft nu cere nimic; această parte afișează {{ui:Din contul de utilizator (<name>)}}. {{ui:Folosire alt nume}} deschide o casetă pentru alt nume, care prevalează până la alegerea {{ui:Folosire numele contului meu}}. Fără cont conectat, formularul de probleme cere un nume ca înainte. Vezi [Probleme și fișiere BCF](topic:issues-bcf).

## Asistenți

**Lăsați asistenții AI și scripturile să folosească BimCraft** (dezactivat la pornire) permite unui asistent de pe acest calculator să ajungă la modelul deschis prin CadCraft Studio: **Citire** găsește elementele și le citește proprietățile, **Schimbarea vederii** le izolează, le ascunde și le afișează. **Activitate** listează apelurile lui. Vezi [Lăsați un asistent AI să lucreze cu modelul](topic:assistants).

:::note
Celelalte setări se aplică la deschiderea unui model sau la pornirea plasării. Un model deja deschis își păstrează aspectul până folosiți butoanele din bara de instrumente sau până îl deschideți din nou.
:::

## Vezi și

- [Copierea, lipirea și duplicarea elementelor din bibliotecă](topic:copy-paste)
- [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library)
- [Ecranul BimCraft](topic:workspace)
- [Lăsați un asistent AI să lucreze cu modelul](topic:assistants)

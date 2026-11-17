---
title: Vizualizări, intervale de vizualizare și propriile planșe
summary: Găsiți fiecare plan, elevație, secțiune, vizualizare 3D, tabel și planșă în navigatorul de proiect, stabiliți cum este secționat fiecare plan și ce arată, creați detalii, desenați linii și hașuri într-o vizualizare, păstrați setările în șabloane de vizualizare și aranjați planșe proprii.
keywords: detaliu, vizualizare de detaliu, plan mărit, desenare, linii de detaliu, linii de desenare, hașură, regiune de hașurare, regiune umplută, model de umplere, plan de tavan reflectat, rcp, plan de tavan, grilă de tavan, corpuri de iluminat, navigator de proiect, vizualizări, interval de vizualizare, decupare, regiune de decupare, vizualizare decupată, scară de vizualizare, substrat, afișare alt nivel, semitonuri, plan de secțiune, înălțime de secțiune, sus, jos, adâncime de vizualizare, vizibilitate, categorii, ascundere în vizualizare, șablon de vizualizare, șabloane, planșă, planșe, bloc de titlu, fereastră de vizualizare, scară, aranjare planșe, aranjare în pagină, pdf, setări plan, navigator
from: ee1d5afe
---

## Ce veți face

Lucrați în felul în care sunt organizate proiectele BIM: fiecare vizualizare într-o singură listă, fiecare plan secționat unde doriți, aceleași setări pentru mai multe planuri printr-un șablon și planșe pe care le aranjați singuri.

## Navigatorul de proiect

1. Activați {{ui:Desenare}}. Panoul din stânga are un {{ui:Navigator de proiect}} sub modele.
2. Listează:
   - **Planuri de etaj**: fiecare nivel. Faceți clic pe unul ca să vedeți planul. Butonul glisor de lângă el setează intervalul de vizualizare (mai jos). Un plan care urmează un șablon afișează numele șablonului.
   - **Planuri de tavan**: planul de tavan reflectat al fiecărui nivel (mai jos).
   - **Detalii**: fiecare detaliu, cu vizualizarea pe care este desenat, și {{ui:Detaliu nou}}. **Lipsă** listează detaliile a căror vizualizare nu mai există.
   - **Elevații** și **Secțiuni**: cele patru laturi și fiecare linie de secțiune. Faceți clic pe una ca să deschideți setul de desene în care este desenată.
   - **Vizualizări 3D**: vizualizările salvate cu {{ui:Vizualizări}}.
   - **Tabele centralizatoare**: faceți clic pe unul ca să-l afișați sub plan.
   - **Planșe**: planșele create, {{ui:Planșă nouă}}, și {{ui:Set de desene…}} pentru întregul set făcut din model.
   - **Șabloane de vizualizare**, cu {{ui:Șablon nou}}, și **Legături** (modelele legate).

## Stabilirea intervalului de vizualizare

1. Faceți clic pe butonul glisor de lângă un nivel din **Planuri de etaj**.
2. Setați înălțimile, deasupra acelui nivel:
   - **Secționare la**: unde planul taie pereții, ușile și ferestrele (1200 mm, circa 4 ft, dacă nu o schimbați).
   - **Sus**: lucrurile de deasupra secțiunii și sub partea de sus sunt desenate punctat (un dulap înalt, o grindă). Lăsați gol pentru înălțimea nivelului.
   - **Jos** și **Adâncime sub partea de jos**: lucrurile mai joase decât secțiunea sunt desenate cu linii subțiri până la partea de jos și atât de adânc sub ea.
3. Sub **Afișat în acest plan**, debifați ce lasă planul afară: mobilier, încăperi, stâlpi și așa mai departe.
4. Pentru a lăsa afară elemente individuale: selectați-le în plan sau în vizualizarea 3D, deschideți caseta și faceți clic pe {{ui:Ascundere selecția aici}}. {{ui:Afișare toate}} le aduce înapoi.
5. Faceți clic pe {{ui:Folosire aceste setări}}.

Planul este secționat din nou imediat, iar setul de desene și planșele urmează și ele.

## Decuparea unui plan, scara lui și afișarea altui nivel dedesubt

Toate trei sunt în aceeași casetă (butonul glisor de lângă un nivel):

- **Scară**: scara la care se tipărește planul ({{ui:Imprimare}} pe bara planului) și la care intră pe o planșă. **Potrivire** alege cea mai mare scară standard care încape.
- **Regiune de decupare**: faceți clic pe {{ui:Desenare pe plan…}}, apoi faceți clic pe un colț și pe colțul opus din plan ({{key:Esc}} oprește). Planul din afara regiunii este estompat pe ecran, iar în continuare puteți lucra acolo; tipărit, pe planșe și în setul de desene, planul arată doar ce este înăuntru. {{ui:Ștergere}} înlătură decuparea. {{ui:Potrivire}} potrivește decuparea.
- **Substrat**: alegeți alt nivel. Pereții, elementele secționate, ușile și ferestrele lui sunt desenate deschis sub acest plan, ca să aliniați lucrurile cu nivelul de sub sau de deasupra. Nu le puteți selecta aici, iar la tipărire apar gri deschis.

Un șablon de vizualizare reține scara împreună cu înălțimile și categoriile. Regiunea de decupare și substratul aparțin întotdeauna doar planului respectiv.

## Planul de tavan al unui nivel

Fiecare nivel are un plan de tavan reflectat lângă planul său de etaj: planul văzut de jos, pentru aranjarea tavanelor și a ceea ce atârnă de ele.

1. Faceți clic pe nivelul de sub **Planuri de tavan** din navigator, sau alegeți {{ui:Plan de tavan}} lângă nivel, pe bara planului.
2. Pereții sunt secționați la 2300 mm (circa 7'-6"). Se desenează ce se află deasupra acelei secțiuni și sub înălțimea nivelului: tavane cu grila lor și o etichetă de înălțime (`CLG 2438`), corpuri de iluminat, grinzi. Ușile, ferestrele și ce se află sub secțiune sunt lăsate afară.
3. Pentru a face un tavan, folosiți {{ui:Tavan}} ca pe planul de etaj, apoi selectați-l și alegeți **Model** în {{ui:Proprietăți}}. Vezi [Încăperi, planșee, tavane și acoperișuri](topic:floors-and-roofs).
4. Pentru a atârna un corp de iluminat de el, plasați elementul din bibliotecă cât timp planul de tavan este afișat: el ajunge în **La tavan**. Vezi [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library).
5. Butonul glisor de lângă un plan de tavan setează secțiunea și partea de sus, scara, categoriile, regiunea de decupare și substratul, ca pentru un plan de etaj. Planurile de tavan nu primesc un șablon de vizualizare.

Este desenat în același sens ca planul de etaj (un plan reflectat, nu o imagine în oglindă). Un tavan mai jos decât secțiunea nu este desenat: coborâți secțiunea pentru planul de tavan al acelui nivel. Planurile de tavan merg pe planșele proprii ca planurile; setul de desene nu le adaugă singur.

## Crearea unui detaliu

Un detaliu arată o parte dintr-un plan mai mare, la scara lui, ca o vizualizare proprie: o bucătărie, o scară, colțul unui perete.

1. Afișați planul, planul de tavan sau detaliul căruia îi aparține.
2. Alegeți {{ui:Adnotare}} › {{ui:Detaliu}} pe bara planului (sau {{ui:Detaliu nou}} din navigator), apoi faceți clic pe un colț al zonei și pe colțul opus. {{key:Esc}} oprește.
3. Detaliul este creat la 1:20 (1/2" = 1'-0" în picioare și țoli). Dreptunghiul lui și o etichetă rotundă sunt desenate pe plan.
4. Faceți clic pe etichetă cu {{ui:Selectare}}, sau pe detaliu în navigator, ca să-l deschideți: planul arată doar acea zonă, la scara detaliului. Bara spune {{ui:Detaliu:}} și numele lui; {{ui:Sus}} revine la vizualizarea pe care este desenat.
5. Butonul glisor de lângă el (în navigator sau pe bară) îl redenumește, îi schimbă scara, îi desenează din nou dreptunghiul sau îl șterge.

Un detaliu arată ce arată vizualizarea lui: aceeași secțiune, aceleași categorii, tavanele unui plan de tavan. Un detaliu al unui detaliu funcționează la fel. Puneți un detaliu pe o planșă ca pe un plan; eticheta lui indică atunci unde se află (`1 / A-501`: prima vizualizare de pe planșa A-501). {{ui:Imprimare}} într-un detaliu tipărește doar acea zonă, la scara lui.

Ștergerea unui detaliu șterge și detaliile desenate în interiorul lui, precum și liniile și hașurile desenate în ele (vi se cere confirmare înainte). Dacă nivelul pe care este desenat un detaliu este șters, detaliul rămâne sub **Lipsă** până îl ștergeți, iar planșele pe care se află îl raportează ca lipsă.

## Desenarea liniilor și hașurilor într-o vizualizare

Desenarea este lucru 2D care aparține unei singure vizualizări: notițe cu linii, o zonă hașurată de beton sau pământ, o regiune umplută. Nu apare niciodată în vizualizarea 3D și nici în alt plan.

1. Afișați planul de etaj, planul de tavan sau detaliul în care desenați.
2. Alegeți din {{ui:Adnotare}} de pe bara planului:
   - {{ui:Linie}}: faceți clic unde începe și unde se termină. Linia următoare începe unde s-a încheiat ultima; {{key:Enter}} începe din nou.
   - {{ui:Polilinie}}: faceți clic pe punctele ei; {{key:Enter}} sau dublu clic o încheie, iar un clic pe primul ei punct o închide.
   - {{ui:Dreptunghi}}: două colțuri opuse.
   - {{ui:Regiune hașurată}}: alegeți **Model** (Umplere plină, Diagonal, Încrucișat, Beton, Izolație, Pământ) și scara lui pe bară, apoi faceți clic pe colțuri; {{key:Enter}}, dublu clic sau un clic pe primul colț o închide. Cu {{ui:Umplere încăpere}} bifat, un clic într-o încăpere hașurează conturul ei.
3. Punctele se agață ca la pereți; {{key:Shift}} păstrează o linie perpendiculară, iar lungimea o puteți scrie ca la pereți. {{key:Backspace}} înlătură ultimul punct.

Alegeți o linie sau o hașură cu {{ui:Selectare}} pe plan. Proprietăți schimbă modelul și scara unei hașuri și are {{ui:Mutare…}} (faceți clic pe punctul de la care mutați, apoi pe locul unde ajunge). {{key:Delete}} o șterge. Fiecare linie, hașură și modificare este un pas.

Liniile și hașurile se tipăresc odată cu planul, merg pe planșe odată cu el și sunt în setul de desene. Debifați **Adnotări** dintr-un interval de vizualizare ca să le lăsați afară din acea vizualizare.

## Păstrarea setărilor într-un șablon de vizualizare

1. Faceți clic pe {{ui:Șablon nou}} în navigator, sau pe {{ui:Salvare ca șablon…}} în intervalul de vizualizare al unui plan (planul folosește apoi acel șablon).
2. Dați-i un nume, setați înălțimile și categoriile și faceți clic pe {{ui:Salvare șablon}}.
3. În intervalul de vizualizare al oricărui plan, alegeți șablonul. Planul preia înălțimile și categoriile; schimbați șablonul ca să schimbați fiecare plan care îl folosește. Elementele pe care le-ați ascuns unul câte unul rămân ascunse în planul lor.
4. Faceți clic pe un șablon din navigator ca să-l schimbați, redenumiți sau ștergeți. Ștergerea lui lasă planurile cu setările lui ca setări proprii.

## Aranjarea unei planșe proprii

1. Faceți clic pe {{ui:Planșă nouă}}. Scrieți numărul și titlul ei și alegeți hârtia.
2. Faceți clic pe {{ui:Adăugare}} lângă un plan, plan de tavan, detaliu, elevație, secțiune sau tabel. Acesta ajunge în mijlocul planșei.
3. Trageți-l unde trebuie. Cu el selectat, alegeți o **Scară**, sau lăsați scara planului (când planul are una), altfel scara care încape pe o treime din planșă. {{ui:Scoatere de pe planșă}} îl înlătură.
4. Faceți clic pe {{ui:Salvare planșă}}. Planșa apare sub **Planșe**; faceți clic pe ea ca s-o schimbați mai târziu.
5. {{ui:Descărcare ca PDF}} salvează planșa aceea ca o singură pagină.

## Ce ar trebui să vedeți

- Planuri secționate la înălțimile stabilite, cu ce este deasupra secțiunii punctat și ce ați lăsat afară.
- Un plan decupat, estompat în afara regiunii pe ecran și tăiat după ea pe hârtie, la scara dată.
- Un plan de tavan cu grilele tavanelor și etichetele de înălțime, iar corpurile de iluminat la tavan.
- Detalii cu dreptunghiul și eticheta lor pe plan, fiecare deschizându-se la propria scară.
- Linii și hașuri doar în vizualizarea în care le-ați desenat.
- Planșe proprii, redesenate din model de fiecare dată când le deschideți, astfel încât să corespundă mereu cu el. O vizualizare al cărei nivel sau a cărei linie de secțiune a fost ștearsă este raportată, nu desenată.
- Fiecare modificare de aici este un pas: {{key:Mod+Z}} o anulează.

:::note
Toate acestea sunt păstrate în fișierul IFC ca seturi de proprietăți pe care alte programe le lasă neatinse: intervalul de vizualizare și planul de tavan ale fiecărui nivel, pe nivel; șabloanele, detaliile și planșele proprii, pe proiect. Liniile și hașurile sunt adnotări IFC în nivelul lor, astfel că alte programe le văd ca curbe 2D și zone hașurate (propriul lor desen al fiecărui model), deși nu văd din ce vizualizare fac parte.
:::

:::tip
Alte programe BIM numesc secțiunea interval de vizualizare sau plan de secțiune, șabloanele șabloane de vizualizare sau setări de vizualizare, liniile de desenare linii de detaliu, iar regiunile de hașurare regiuni umplute. Ideile sunt aceleași; setările de vizualizare nu se transferă la ele.
:::

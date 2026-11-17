---
title: Familii și dimensiunile lor
summary: Ușile, ferestrele și mobilierul vin în familii. Fiecare dimensiune a unei familii este un tip în fișierul IFC, astfel încât lista de tipuri rămâne scurtă în BimCraft, în timp ce alte programe citesc tipuri simple.
keywords: familie, familii, tip, tipuri, dimensiune, dimensiuni, tip de ușă, tip de fereastră, mobilier, masă, raft, dulap, dimensiune nouă, duplicare, plasare familie, fișier de familie, ccfamily, bibliotecă IFC, bibliotecă de proiect, grup, vizibilitate, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Ce este o familie

O familie este un fel de obiect în mai multe dimensiuni: o ușă batantă simplă care vine în lățimi de 32, 36 și 42 de inch sau o masă care vine lungă și scurtă. În BimCraft vedeți familia o singură dată, cu dimensiunile sale sub ea, în loc de o listă lungă de tipuri.

IFC nu are familii. În fișier, fiecare dimensiune este un tip obișnuit (un tip de ușă, un tip de fereastră, un tip de mobilier…), iar familia este un grup care enumeră dimensiunile sale. Alte programe BIM citesc tipurile și grupul așa cum sunt; BimCraft citește familia înapoi din ele.

## Unde le găsiți

- Grupul **Familii** din browserul proiectului enumeră familiile din acest model, cu câte dimensiuni are fiecare și câte sunt plasate. Sub ele se află **Familiile de pornire**: ușile și ferestrele din uneltele Ușă și Fereastră, precum și o masă, un raft și un dulap de bază.
- {{ui:Build}} › {{ui:Families…}} arată aceeași listă într-o fereastră.
- Faceți clic pe o familie pentru a o deschide: dimensiunile sale, valorile fiecărei dimensiuni și câte elemente folosește fiecare.

## Uși și ferestre

Uneltele Ușă și Fereastră listează familiile de acel tip, apoi o **listă de dimensiuni** alături. Alegeți o dimensiune sau scrieți **W** și **H**: o lățime și o înălțime pe care nicio dimensiune nu le are încă devin o dimensiune nouă a familiei când plasați ușa. Ușile de aceeași dimensiune au un singur tip în comun.

În {{ui:Properties}}, o ușă sau o fereastră selectată arată **Familie** și **Dimensiune**. Alegeți altă dimensiune din listă sau scrieți o lățime ori o înălțime nouă. {{ui:Open the family}} deschide familia căreia îi aparține.

Cadrul fiecărei uși sau ferestre urmează grosimea propriului perete, ca până acum pentru familii. Tipul dimensiunii păstrează și ușa desenată într-un perete de 140 mm, pentru programele care citesc tipurile.

## Dimensiune nouă din această familie

1. Deschideți familia.
2. Sub **Dimensiune nouă din această familie**, scrieți valorile sale (Lățime, Înălțime și celelalte parametri ai familiei) și, dacă doriți, un nume. Fără nume, dimensiunea primește un nume din valorile sale.
3. Faceți clic pe {{ui:Make the size}}.

Două dimensiuni nu pot avea aceleași valori. **Redenumire** schimbă numele unei dimensiuni; **Eliminare** scoate o dimensiune pe care nimeni nu o folosește; **Selectare** alege elementele acelei dimensiuni.

## Plasarea mobilierului

1. {{ui:Build}} › {{ui:Place family}}, sau {{ui:Place}} în fereastra unei familii.
2. În bară, alegeți familia și dimensiunea sa.
3. Faceți clic pe plan pentru a plasa piesa pe nivel. Apăsați {{key:R}} pentru a o roti cu 90° înainte de a face clic. {{key:Esc}} oprește.

{{ui:Properties}} ale unei piese plasate arată dimensiunea sa, unde se află și cât este rotită; {{key:Delete}} o șterge. Fiecare piesă de aceeași dimensiune împarte forma acelei dimensiuni, deci schimbarea familiei le schimbă pe toate.

## Dimensiuni dintr-un tabel

{{ui:Sizes from a table…}} în fereastra unei familii citește un fișier CSV (virgulă, punct și virgulă sau tab). Primul rând numește coloanele: numele sau eticheta unui parametru și, opțional, `Name`. Lungimile sunt în milimetri, dacă nu scrieți o unitate (`1.2 m`, `36 in`); coloanele Da / Nu acceptă yes, no, true, false, 1 sau 0; un parametru fără coloană păstrează valoarea implicită. Fiecare rând devine o dimensiune, într-un singur pas pe care îl puteți anula; o dimensiune care există deja este sărită. Un rând care nu se citește sau pe care familia nu-l poate desena respinge întregul tabel și indică linia sa. Cel mult 200 de rânduri și 1 MB. {{ui:Save the sizes as a table}} scrie același tabel înapoi.

## Setare pe fiecare element

Un parametru marcat **Pe element** în editor (un Da / Nu care adaugă un panou fix superior, o etichetă sau un material) nu face parte dintr-o dimensiune: două uși de aceeași dimensiune pot diferi. Alegeți elementul, iar **Proprietăți** arată acești parametri; schimbați unul, iar elementul este desenat din nou cu forma sa proprie (mobilierul și corpurile fixe primesc o formă proprie, iar ușile și ferestrele sunt refăcute în pereții lor). Dacă le readuceți pe toate la valorile implicite, elementul revine la forma dimensiunii sale.

## Nivelul de detaliu

{{ui:Build}} › {{ui:Families…}} › **Nivel de detaliu** stabilește, pentru fiecare familie din model, ce se salvează în solide și se desenează în simbolurile de plan: **Fin** păstrează totul, **Mediu** și **Grosier** lasă afară piesele pe care editorul le marchează ca mai fine (fișiere mai mici, vederi mai rapide). **Automat** salvează totul și lasă vederea unei foi să aleagă după scara sa: 1:50 și mai mare fin, 1:100 mediu, 1:200 și mai mic grosier. Un singur pas, pe care îl puteți anula.

## Dublarea unei familii

Nu trebuie să porniți de la zero. {{ui:Duplicate}} copiază o familie cu parametrii, solidele și dimensiunile sale sub un nume nou. Modificați copia în editor; originalul rămâne cum era.

## Fișiere de familie

- {{ui:Save the family file}} salvează un `.ccfamily.json`: parametrii, solidele și dimensiunile familiei. Deschideți-l în alt model cu {{ui:Open a family file…}} din grupul Familii.
- {{ui:Save as IFC}} salvează familia ca un fișier IFC mic: tipurile dimensiunilor sale și grupul său, declarate printr-o bibliotecă de proiect IFC. Alte programe îl deschid ca un set de tipuri; BimCraft îl deschide din nou ca familie.

Un fișier de familie deschis aici este citit ca date și verificat înainte ca orice să fie scris. O familie a cărei cheie există deja în model intră ca o familie separată. O familie care conține altele (vezi {{ui:Families inside}} în ajutorul editorului) aduce și ele cu sine: fișierul le enumeră, iar modelul păstrează pe cele pe care le are deja.

## Familii din Bibliotecă

Deschideți {{ui:Families…}} și alegeți {{ui:From the Library…}} pentru a vedea familiile care au fost partajate în Bibliotecă. {{ui:Add to this project}} citește una ca pe un fișier de familie: BimCraft verifică fiecare câmp înainte de a crea ceva, familia intră ca o familie proprie și se deschide în editor. Adăugarea este un singur pas de anulare. Pentru a partaja propriile familii, folosiți {{ui:Save all as a library}} și trimiteți fișierul în Bibliotecă (personalul Bibliotecii publică un fișier de familie printr-o comandă, iar fiecare familie este un element separat cu dimensiunile sale). Dacă Biblioteca nu poate fi contactată, lista o spune și nimic nu se schimbă.

## Tipurile altor programe

Tipurile create de alte programe apar și ele în grupul Familii, grupate printr-o presupunere: după partea din numele elementelor dinaintea primului două puncte, altfel după tipuri al căror nume diferă doar prin numere. Fereastra familiei spune ce presupunere a fost folosită. Sunt enumerate și puteți selecta elementele lor, dar nu sunt editate aici: nu au o rețetă de familie.

:::note
Ușile și ferestrele de pornire sunt desenate exact ca înainte de familii. Fișierele făcute înainte de familii se deschid neschimbate: ușile și ferestrele lor apar sub familia lor, cu dimensiunile în uz, și trec pe o dimensiune proprie prima dată când le modificați.
:::

Vezi și [Editarea unei familii](topic:family-editor) și [Uși și ferestre](topic:doors-and-windows).

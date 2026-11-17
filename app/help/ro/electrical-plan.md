---
title: Planul electric
summary: Plasați prize, întrerupătoare, corpuri de iluminat, senzori, cutii de derivație și tablouri pe plan, cu aceleași simboluri ca suplimentul Electric al CadCraft, legați întrerupătoarele de corpurile de iluminat pe care le comandă și enumerați dispozitivele și circuitele în tabele centralizatoare.
keywords: electric, plan electric, priză, priză dublă, întrerupător, comutare dublă, variator, corp de iluminat, corp de iluminat de tavan, corp de iluminat încastrat, spot, senzor de mișcare, cutie de derivație, tablou, tablou de distribuție, circuit, sarcină, waturi, amperi, traseu de comandă, tabel centralizator al dispozitivelor, tabel centralizator al tablourilor
from: f7de1947
---

## Ce veți face

Desenați planul electric al casei în model: prize, întrerupătoare și tablouri pe pereți, corpuri de iluminat și senzori pe tavan. Fiecare dispozitiv este un element electric real din fișierul IFC, cu eticheta, circuitul și sarcina sa, iar întrerupătoarele rețin corpurile de iluminat pe care le comandă.

## Plasarea dispozitivelor

1. Pe un nivel, deschideți {{ui:Build}} și alegeți {{ui:Electrical}}.
2. Alegeți dispozitivul: prize (forță, date, telefon, audio-video), întrerupătoare și senzori (inclusiv un termostat și un temporizator), corpuri de iluminat, detectoare și alarme, o cutie de derivație, un tablou sau un subtablou.
3. Introduceți un **Circuit** dacă îl cunoașteți (orice nume: 1, 2, A-3). Lăsați **Înălțime de montare** necompletat pentru înălțimea obișnuită a acelui dispozitiv.
4. Faceți clic pe plan. Prizele, întrerupătoarele și tablourile se plasează pe fața celui mai apropiat perete, orientate spre încăpere; corpurile de iluminat, senzorii și cutiile de derivație se plasează pe tavan, unde faceți clic.

Dispozitivele primesc o etichetă la plasare: **R** pentru prize, **S** pentru întrerupătoare, **L** pentru corpuri de iluminat, **M** pentru senzorii de mișcare, **J** pentru cutiile de derivație, **P** pentru tablouri. Dispozitivele de pe perete se mută odată cu peretele când mutați peretele.

Preferați să căutați după imagine? Deschideți **Paleta de simboluri** din {{ui:Build}} pentru a găsi un dispozitiv după nume, a marca cu stea pe cele pe care le folosiți și a-l plasa dintr-un clic: vezi [Paleta de simboluri](topic:symbol-palette).

## Legarea întrerupătoarelor de corpurile de iluminat

1. Selectați un întrerupător (sau un senzor de mișcare) și faceți clic pe **Legare corpuri de iluminat** în **Proprietăți**.
2. Faceți clic pe fiecare corp de iluminat pe care îl comandă. Faceți din nou clic pe un corp de iluminat legat pentru a-l dezlega.
3. Apăsați {{key:Enter}} sau faceți clic pe **Gata**.

Planul trasează o curbă punctată de la întrerupător la fiecare corp de iluminat comandat. În **Proprietăți** ale unui corp de iluminat apar întrerupătoarele care îl comandă.

## Camera în care se află un dispozitiv

Fiecare dispozitiv știe camera în care se află. Un dispozitiv de pe perete se află în camera spre care este orientat; un dispozitiv de pe tavan se află în camera de sub el. **Proprietăți** afișează **Cameră**, iar tabelul centralizator **Dispozitive electrice** are o coloană **Cameră** (număr și nume, de exemplu 101 Bucătărie).

Se actualizează automat: redenumiți sau renumerotați camera, mutați dispozitivul sau mutați un perete, iar camera urmează în același pas. Un dispozitiv de pe fața exterioară a clădirii sau într-un spațiu care nu este o cameră arată că nu se află într-o cameră.

Camera este scrisă și în fișier, în setul de proprietăți `CadCraft_Location` al dispozitivului (Room, RoomNumber, RoomName), astfel încât Căutare, Colorare după proprietate și un tabel de etichete o pot folosi, la fel ca și alt program. Simbolurile de plan și elementele legate de un simbol primesc același set; vezi [Paleta de simboluri](topic:symbol-palette).

## Lăsați asistentul să le plaseze

Cu un asistent conectat (Setări › Asistenți, cu modificări permise), puteți cere dispozitive în cuvinte: „pune o priză dublă la fiecare 2 m pe pereții livingului, la 300 mm înălțime, pe circuitul 3”, sau „adaugă un corp de iluminat de tavan cu întrerupătorul lângă ușă”. Asistentul folosește cinci instrumente: `devices_add`, `device_change`, `lights_set`, `devices_delete` și `devices_list`. Ele creează aceleași dispozitive ca instrumentul Electric, pe aceiași pereți și cu aceleași etichete, circuite, sarcini și înălțimi, iar fiecare apel este un singur pas de anulare.

Un dispozitiv nu primește niciodată un tip pe care instrumentul Electric nu-l are: un tip necunoscut este refuzat, iar asistentul primește lista. O priză sau un întrerupător trebuie să fie la cel mult 600 mm de fața unui perete, ca un clic; altfel apelul este refuzat și nimic nu este plasat. Înălțimile implicite sunt în milimetri: 300 pentru prize, 1100 pentru întrerupătoare. Un dispozitiv de tavan este atârnat de tavan.

## Modificarea și enumerarea lor

Selectați un dispozitiv pentru a-i modifica eticheta, circuitul, sarcina (waturi) și înălțimea de montare. Selectați mai multe pentru a le pune pe același circuit deodată. Apăsați {{key:Delete}} pentru a șterge unul; un corp de iluminat șters este scos de pe întrerupătoarele sale.

În {{ui:Schedules}} alegeți **Dispozitive electrice** pentru fiecare dispozitiv, cu nivelul, circuitul, sarcina, înălțimea și corpurile de iluminat comandate de fiecare întrerupător, sau **Circuite** pentru dispozitivele fiecărui circuit, sarcina totală și curentul. Ambele sunt și pe foaia tabelului centralizat al setului de desene: vezi [Elevații, secțiuni și foi](topic:sheets).

:::note
Înălțimile de montare și sarcinile sunt valori implicite de planificare (o priză la 16" înălțime și 200 W, un întrerupător la 48", un corp de iluminat de tavan 60 W), nu un proiect: electricianul sau inginerul dimensionează circuitele și verifică normativele.
:::

:::tip
Simbolurile sunt cele pe care le desenează suplimentul Electric al CadCraft pe planurile de instalații, astfel încât un plan din oricare aplicație se citește la fel.
:::

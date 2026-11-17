---
title: Modificarea unui perete, uși sau fereastră
summary: Faceți clic pe un perete, o ușă sau o fereastră desenată și schimbați-i tipul, dimensiunea, înălțimea sau locul în Proprietăți, sau trageți-l în plan; fiecare modificare este un pas de anulare.
keywords: aducere la unghi drept, unghi drept, 90, înclinat, unghi, ortogonal, dimensiune cameră, față interioară, față exterioară, măsurare de la, distanță de deplasare, distanță introdusă, curb, arc, înălțime arc, rază, linie de referință, justificare, modificare, editare, proprietăți, tip perete, grosime, lungime, înălțime, decalare de bază, sus, nivel, inversare, exterior, dimensiune ușă, dimensiune fereastră, prag, distanță, deplasare, mâner, tragere, schimbare tip, mai multe
from: 63052d5d
---

## Ce veți face

Modificați ce ați desenat: alegeți un perete, o ușă sau o fereastră, apoi scrieți un număr nou în **Proprietăți** sau trageți-l în plan. Planul și vizualizarea 3D urmează, colțurile se îmbină din nou, iar ușile și ferestrele rămân în pereții lor.

## Modificați un perete

1. Cu {{ui:Desenare}} și {{ui:Selectare}} active, faceți clic pe perete în plan (sau în vizualizarea 3D).
2. **Proprietăți** afișează o casetă cu cifrele peretelui. Modificați una și apăsați {{key:Enter}}:
   - **Tip perete**: un alt tip dintre cele de start. Grosimea și straturile se schimbă odată cu el.
   - **Grosime**: orice grosime. Tipul își păstrează celelalte straturi, iar stratul său principal (montanții sau blocul) preia diferența, de exemplu „Exterior 2×6, 200 mm”.
   - **Măsurare de la**: **Axa centrală**, **Fața interioară** sau **Fața exterioară**. **Lungime** și **Dimensiune cameră** se citesc și se setează de la el. Fața exterioară este ce arată cotele planului.
   - **Lungime**: capătul peretelui se mută de-a lungul liniei sale. Peretele îmbinat la acel capăt se mută perpendicular pe el însuși și își păstrează unghiul.
   - **Dimensiune cameră** (când există un perete paralel peste cameră): scrieți dimensiunea dorită. Acest perete se mută perpendicular, iar pereții îmbinați se întind ca să urmeze.
   - **Mutare perpendiculară**: scrieți cât de departe să fie mutat peretele perpendicular pe el însuși: un număr simplu îl mută spre exterior, un număr cu minus spre interior.
   - **Unghi față de peretele îmbinat**: unghiul față de peretele îmbinat la început. Scrieți 90 pentru a-l seta drept. Un perete neîmbinat cu nimic arată **Direcție**, în grade față de est.
   - {{ui:Aducere la unghi drept}}: întoarce pereții conectați la acesta la unghiuri drepte, de-a lungul direcției în care se întinde cea mai mare parte a lungimii lor. Funcționează pe întreaga cameră sau aranjament conectat, oricare dintre pereți ați alege. Un perete aflat la mai mult de 10 grade față de un unghi drept rămâne așa cum este, astfel încât unul setat la 45 de grade este sigur. Un singur pas de {{ui:Anulare}} anulează totul.
   - **Înălțime perete**: **Până la nivelul de deasupra** urmează acel nivel; **Până la Nivelul 3** (și orice nivel mai sus) face un perete care trece prin nivelurile dintre ele; scriind o înălțime se setează cât de jos sau de sus este vârful față de acel nivel. **Înălțime fixă** păstrează numărul pe care îl scrieți. **Trece prin** listează nivelurile pe care le traversează un astfel de perete: este desenat mai deschis în planurile lor, camerele de acolo se închid de el, iar uși și ferestre pot fi plasate în el din aceste planuri. Este mutat și remodelat pe nivelul de la care începe.
   - **Decalare de bază**: cât de sus deasupra nivelului începe peretele. Vârful său rămâne unde era.
   - **Exterior**: {{ui:Inversare}} pune straturile exterioare pe cealaltă față.
   - **Linia de referință**: **Axa centrală**, **Fața exterioară**, **Fața interioară**, **Fața stângă** sau **Fața dreaptă**. Schimbarea ei nu mută nimic. Mai târziu, când peretele devine mai gros (prin tip sau **Grosime**) sau exteriorul său este inversat, linia de referință rămâne pe loc, iar peretele crește sau se întoarce în jurul ei. Un perete drept care o întâlnește într-un colț urmează, astfel încât colțul rămâne închis. Linia de referință a peretelui ales este desenată punctat în plan. Alegeți mai mulți pereți pentru a o seta pentru toți.
   - **Înălțime arc** (pereți curbi): cât de mult se curbează mijlocul față de o linie dreaptă. 0 îl face drept; o valoare negativă îl curbează pe cealaltă parte. Raza apare alături.
3. Fiecare modificare este un pas în **Modificări**; {{ui:Anulare}} o anulează.

## Trageți un perete în plan

Când un perete este ales, afișează trei mânere: un pătrat la fiecare capăt și un cerc la mijloc.

- Trageți un capăt pentru a face peretele mai lung, mai scurt sau pentru a-l întoarce. Se fixează ca instrumentul Perete și se prinde perpendicular pe peretele îmbinat la celălalt capăt când sunteți la 3 grade distanță; {{key:Shift}} îl ține pe axele planului.
- Pereții îmbinați la capătul pe care îl trageți își păstrează unghiul: capetele lor alunecă de-a lungul propriilor linii până la noua linie a peretelui, astfel încât nimic nu rămâne înclinat. Țineți {{key:Mod}} pentru o tragere liberă (capătul peretelui îmbinat vine odată cu cel tras, iar acel perete se întoarce) sau {{key:Alt}} pentru a rupe îmbinările la acest perete.
- Trageți mijlocul pentru a muta întregul perete perpendicular pe el însuși, indiferent în ce direcție trageți. Colțurile sale alunecă de-a lungul pereților îmbinați, astfel încât acei pereți își păstrează unghiul.
- Țineți {{key:Mod}} în timp ce trageți mijlocul pentru o mutare liberă, atunci când chiar doriți să rupeți unghiul. {{ui:Aducere la unghi drept}} îl readuce.
- Cât timp un mâner este ținut, scrieți o distanță și apăsați {{key:Enter}} (sau eliberați): peretele merge exact atât de departe, în modul în care trăgeați. {{key:Esc}} renunță la mutare.
- Un perete curb ales afișează mânere la capete și un mâner rotund în mijlocul arcului. Trageți mânerul rotund pentru a-l curba.
- Ușile și ferestrele rămân în perete. Un perete prea scurt pentru ce conține este refuzat, cu mesajul „Nu încape în acest perete.”

## Modificați o ușă sau o fereastră

1. Faceți clic pe ușă sau fereastră în plan.
2. În **Proprietăți**: **Tip** (altă ușă sau fereastră din același fel), **Lățime**, **Înălțime**, **Prag** (ferestre), **De la început** și **De la sfârșit** (distanța de la fiecare capăt al fețelor peretelui până la marginea sa), **Balamale** {{ui:Inversare}} (uși cu un singur canat și ferestre batante; ușile glisante, de buzunar, de hambar și pliante spun în schimb **Se deschide spre**; ferestrele fixe, suspendate și panoramice, precum și ușile duble, nu au nimic de acest fel), și **Direcția de deschidere** (uși) sau **Partea cadrului** (ferestre) {{ui:Inversare}}.
3. Sau trageți-o de-a lungul peretelui sau pe alt perete: vezi [Uși și ferestre](topic:doors-and-windows).

## Modificați mai multe odată

Alegeți mai mulți pereți (sau mai multe uși, sau mai multe ferestre) cu {{key:Shift}}+clic sau {{key:Mod}}+clic. **Proprietăți** oferă ce au în comun: **Schimbare tip…**, înălțimea, dimensiunea. O singură modificare le setează pe toate, iar un singur pas de {{ui:Anulare}} anulează totul.

## De reținut

- Cifrele apar în {{ui:Unități}} alese pe bara de instrumente.
- Pereții, ușile și ferestrele din alte programe își arată datele IFC în **Proprietăți**, ca înainte, fără această casetă.

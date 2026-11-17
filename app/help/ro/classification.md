---
title: Coduri de clasificare (Uniclass, OmniClass, UniFormat)
summary: Atribuiți fiecărui element și tip un cod de clasificare, alegeți ce sisteme folosește un proiect, căutați în tabelele Uniclass care vin cu aplicația, încărcați tabelele licențiate proprii ale biroului și afișați codurile în tabelele centralizatoare. Codurile sunt scrise în fișierul IFC pentru alt software.
keywords: clasificare, clasifică, cod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabel, cod element, cod tip, cod implicit, IfcClassification, IfcClassificationReference, cobie, coloană tabel, csv, licență
from: 222b94cd
---

## Ce veți face

Puneți un cod de clasificare pe pereți, planșee, acoperișuri, uși, ferestre și orice altceva din model, în până la trei sisteme alăturate: Uniclass, OmniClass și UniFormat. Alte discipline și alt software se bazează pe cod, nu pe nume, deci codurile sunt salvate în fișierul IFC ca referințe de clasificare pe care le citește orice program BIM.

## Atribuirea unui cod unui element

1. Selectați un element (sau mai multe) și deschideți **Proprietăți**. Deschideți secțiunea {{ui:Clasificare}}.
2. Scrieți codul în câmpul sistemului său și apăsați Enter. Cu o listă de coduri încărcată, scrieți o parte din cod sau câteva cuvinte („perete cortină”) și alegeți din potriviri: titlul codului se completează automat.
3. {{ui:Se aplică la}} spune unde merge codul: **Acest element** sau **Tipul său (fiecare element de acest tip)**. Un cod pus pe un tip de perete este citit de fiecare perete de acel tip, inclusiv de cele desenate mai târziu.
4. {{ui:Ștergere}} înlătură un cod.

Sub fiecare cod, secțiunea spune de unde vine: stabilit pe acest element, din tipul său sau din valoarea implicită a proiectului pentru clasa sa. Codul propriu al unui element îl bate întotdeauna pe cel al tipului său, iar al tipului îl bate pe cel implicit. Când sunt selectate mai multe elemente, o casetă care spune „variază” înseamnă că nu au același cod; scriind unul, îl dați tuturor. Fiecare modificare este un pas de anulare.

Un cod poate fi scris întotdeauna, indiferent dacă este încărcată o listă sau nu. Dacă nu seamănă cu un cod al sistemului respectiv sau nu se află în lista încărcată, un indiciu o spune, iar codul este păstrat așa cum l-ați scris.

## Alegerea sistemelor proiectului

Deschideți **Date** pe bara modelului și alegeți {{ui:Clasificare}} (sau {{ui:Clasificarea proiectului…}} din secțiunea Proprietăți).

- Bifați sistemele folosite de acest proiect. Proprietăți arată apoi doar pe acestea.
- **Uniclass**: tabelele Elements/ functions (EF), Systems (Ss) și Products (Pr) vin cu aplicația. Sunt © NBS, licențiate Creative Commons Attribution-NoDerivatives 4.0 și sunt transmise nemodificate. Dialogul arată ediția fiecărui tabel și ziua în care a fost citit. Nu sunt cele mai noi: editorul emite tabele noi în fiecare trimestru pe propriul site.
- **OmniClass** și **UniFormat**: nicio listă de coduri nu vine cu aplicația, deoarece editorul lor nu permite transmiterea tabelelor fără licență. Scrieți orice cod sau încărcați tabelul licențiat al biroului.
- {{ui:Încărcare tabel (CSV)…}} citește tabelul propriu al biroului dintr-un fișier CSV cu o coloană de cod și una de titlu (un rând de antet numit Code, Number sau Identifier și Title, Name sau Description este găsit singur; fără el sunt folosite primele două coloane). Tabelul rămâne în acest browser și nu este pus niciodată în fișierul proiectului. În fișier sunt salvate doar codurile pe care le atribuiți. Puteți încărca la fel un tabel Uniclass mai nou.
- {{ui:Dați elementelor un cod implicit după clasa lor}} dă fiecărui perete, planșeu, acoperiș, ușă, fereastră, scară, rampă, stâlp, grindă și piesă de mobilier un cod Uniclass de pornire din tabelul Elements/ functions, atunci când nu are un cod propriu. Elementele desenate ulterior îl primesc și ele.
- {{ui:Afișare coduri ca coloane în tabelele centralizatoare}} adaugă câte o coloană pentru fiecare sistem în tabelele Uși, Ferestre, Pereți pe tip și Camere și în CSV-urile lor. Un rând cu mai multe elemente arată „variază” când codurile lor diferă.

## De reținut

- Valorile implicite sunt alegerea de pornire a CadCraft, nu a editorului, și nu au fost verificate de un practician. Verificați-le cu standardul proiectului dvs.
- În fișier, un implicit este o clasificare reală, marcată cu numele relației „CadCraft default”, și dispare imediat ce elementul sau tipul său primește un cod propriu.
- Codurile pe care un fișier importat le are deja sunt citite și afișate, indiferent de scrierea pe care alt program a folosit-o pentru numele sistemului. Codurile oricărui alt sistem (propriu unui birou) sunt listate și lăsate neatinse.
- Codurile sunt citite din nou când fișierul este redeschis, aici sau în alt program. Ele sunt duse și în exportul IFC5 alpha (IFCX), când această opțiune de laborator este activată, cu excepția unui cod pus pe un acoperiș.
- Încă nerealizat: un arbore pentru a parcurge un tabel nivel cu nivel, coduri pe niveluri și pe camere ca implicite ale proiectului și verificarea unui cod față de ediția numită în fișier.

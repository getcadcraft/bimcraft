---
title: Alcătuiri de pereți și cote de referință
summary: Construiți-vă propriile tipuri de perete strat cu strat, cu un miez explicit, păstrați o bibliotecă de materiale a proiectului și cotați până la fețe și axe care rămân legate când peretele se schimbă.
keywords: lod, nivel de dezvoltare, lod 200, lod 300, generic, alcătuire de perete, tip de perete, straturi, miez, față a miezului, axă a miezului, cavitate, spațiu de aer, membrană, membrană de protecție, bibliotecă de materiale, materiale, grosime, cotă de referință, cotare, asociativ, linie de referință, placaj exterior, montant, gips-carton
from: 4ea8fbf5
---

## Ce veți face

Creați un tip de perete care se potrivește cu peretele pe care îl veți construi: placaj exterior, placaj de protecție, un miez din montanți de 5½ inch și gips-carton, sau cărămidă, un spațiu de aer și un perete cu structură din lemn. Marcați care straturi sunt miezul, astfel încât o cotă sau o linie de referință să poată ține miezul pe loc în timp ce finisajele din jur se schimbă. Apoi cotați pereții până la fețele și axele pe care le vizați.

## Creați un tip de perete

1. Porniți o clădire sau deschideți un model IFC și activați {{ui:Desenare}}, apoi alegeți instrumentul {{ui:Perete}}.
2. Alegeți un model de pornire în {{ui:Tip de perete}} și deschideți {{ui:Alcătuiri de pereți…}}. Un model de pornire se deschide ca o copie; dați noului tip un nume.
3. Straturile merg de la exterior, din partea de sus a listei, până la interior, în partea de jos. Alegeți materialul fiecărui strat, scrieți grosimea (în unitățile proiectului sau valori explicite, precum `12.7 mm` sau `1/2"`), alegeți funcția (finisaj, substrat, structură, izolație, membrană) și bifați straturile de **Miez**. Miezul trebuie să fie un grup continuu.
4. {{ui:Adăugare strat}} adaugă un strat, {{ui:Adăugare cavitate}} adaugă un spațiu de aer cu ventilația lui (nespecificată, neventilată, ventilată), iar {{ui:Adăugare membrană}} adaugă un strat fără grosime nominală, precum membrana de protecție. Butoanele cu săgeți mută un strat spre exterior sau spre interior.
5. Previzualizarea desenează straturile la scară, cu miezul subliniat, numerotat ca rândurile, și cotează fiecare strat, miezul și totalul. {{ui:Salvare tip}}.

Noul tip apare în lista instrumentului Perete și în **Proprietăți** unui perete selectat. Salvarea unui tip pe care îl editați schimbă fiecare perete care îl folosește; {{ui:Duplicare tip}} face un tip separat și îl dă doar pereților selectați. Fiecare salvare este un singur pas de anulare, împreună cu pereții pe care îi mută, ușile și ferestrele din ei și cotele care depind de ei.

O cavitate adaugă lățime. O membrană nu adaugă nimic: rămâne în tip, ca un tabel centralizator să o poată găsi mai târziu, și nu se numără în grosimea peretelui sau a miezului. O cavitate sau o membrană nu este niciodată considerată material plin. Într-un fișier salvat ca IFC2X3, o membrană este păstrată în înregistrarea tipului, dar lăsată afară din straturile sale de material fizic.

## Etichetați un tip cu nivelul său de dezvoltare (LOD)

Un tip poate spune cât de dezvoltat este. În editor, **Nivel de dezvoltare (LOD)** oferă scara fixă 100, 200, 300, 350, 400 și 500, sau **Nedefinit**. Un perete generic („Perete generic 230”) este LOD 100 sau 200; o alcătuire specifică, cu straturile ei reale („230 cărămidă ceramică, tencuită pe ambele fețe”), este LOD 300 sau mai mult. Eticheta o stabiliți dvs.: BimCraft nu o calculează, iar modelele de pornire nu au niciuna.

Eticheta apare lângă numele tipului în lista de tipuri a instrumentului Perete, în **Proprietăți** ale unui perete și în lista [Schimbare tip](topic:wall-tools), iar raportul de după o schimbare spune dacă nivelul a crescut sau a scăzut. Ca s-o vedeți în tabelul **Pereți după tip** și în CSV-ul lui, bifați **Afișare LOD al fiecărui tip de perete în tabelul de pereți** în Setări › BimCraft › Pereți: se adaugă o ultimă coloană, LOD. Eticheta este salvată în fișierul IFC împreună cu tipul (în setul de proprietăți `CadCraft_WallType` al tipului, ca proprietatea `LOD` și în înregistrarea tipului), deci rămâne acolo când redeschideți fișierul. Deocamdată eticheta este doar pe tipurile de perete, nu pe elemente individuale sau pe alte tipuri de element.

## Pereți generici pentru faza de schiță

Lista de tipuri a instrumentului Perete începe cu doi pereți **generici**: **Perete generic 200 mm (exterior)** și **Perete generic 100 mm (interior)**. Fiecare are un singur strat din materialul generic, etichetat LOD 200. Folosiți-i când știți unde merg pereții, dar încă nu știți din ce sunt făcuți.

Un perete al cărui tip este etichetat **LOD 100** sau **LOD 200** este desenat în fiecare plan ca **o singură bandă cu hașură**, la orice nivel de detaliu: fără straturi, fără linii de strat. Asta este adevărat pentru pereții generici și pentru orice tip propriu etichetat LOD 100 sau 200. Peretele în sine este complet: are grosimea, ușile și ferestrele, încăperile și cantitățile.

Pentru a-l dezvolta, schimbați-i tipul (Editare › Pereți › **Schimbare tip**, sau Tip în **Proprietăți**). Peretele nu este desenat din nou: același perete primește noul tip, iar raportul spune ce s-a mutat. Un tip etichetat LOD 300 sau mai mare este desenat cu straturile lui, ca înainte.

Pentru a desena fiecare perete după straturile lui, indiferent de etichetă: Setări › BimCraft › Pereți, debifați **Desenare pereți de tip LOD 100 sau LOD 200 ca o singură bandă cu hașură**.

Ușile și ferestrele generice de pornire sunt și ele tipuri generice (o dimensiune și un mod de deschidere, nu un produs). Cu **Afișare LOD al fiecărui tip de perete în tabelul de pereți** activat, tabelele **Uși** și **Ferestre** arată LOD 200 pentru ele.

## Dați unui tip datele pentru extragerea de cantități

În editorul tipului de perete, **Date pentru extragerea de cantități** ține ce are nevoie un estimator să știe despre perete, o singură dată pentru tip: **unitatea** din care este construit (o cărămidă sau un bloc: numele, lungimea, înălțimea și lățimea lui), **mortarul** (numele și grosimea rostului) și un **preț unitar** cu codul lui de monedă (trei litere, precum USD, EUR sau ZAR) și ce este pe: un metru pătrat sau picior pătrat de suprafață netă de perete, un metru sau picior de lungime de perete, sau fiecare perete. Toate sunt opționale.

Datele sunt salvate cu tipul în fișier. Fiecare perete al tipului raportează apoi datele: {{ui:Tabele centralizatoare}} › **Tipuri de perete: date pentru extragerea de cantități** listează unitatea, mortarul, prețul și prețul înmulțit cu cantitatea măsurată, iar extragerea trimisă către TakeoffCraft poartă aceste date pe articolul tipului de perete. Modificați-le pe tip și fiecare perete urmează.

Trei câmpuri în plus servesc la numărarea cărămizilor sau blocurilor și a mortarului:

- **Pierderi la unități, %** se adaugă la numărul de unități. Lăsați-l gol ca să folosiți cifra metodei de măsurare a proiectului, sau niciuna dacă metoda nu are. Introduceți 0 ca să nu aveți pierderi, orice ar spune metoda.
- **Mortar suplimentar, %** este pentru goluri sau perforații care iau mortar. Se adaugă la volumul de mortar. Lăsați-l gol dacă nu există.
- **Straturi construite din această unitate**: bifați fiecare strat care este o foaie de zidărie din această cărămidă sau bloc. Un perete cu cavitate are două. Dacă nu bifați niciunul, se numără straturile de miez.

Prețul poate fi și pe unitate de comandat, pe 1000 de unități de comandat sau pe m³ de mortar. Acolo unde unitatea are lungime și înălțime, **Tipuri de perete: date pentru extragerea de cantități** arată unitățile pe m² (sau ft²) dintr-o foaie, unitățile de comandat și volumul de mortar; formulele sunt în [Cărămizi, blocuri și mortar](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tip are o singură unitate: două foi din unități diferite (o foaie exterioară de cărămidă și una interioară de bloc) nu pot fi numărate încă pe același tip.

## Țineți miezul pe loc

În **Proprietăți**, setați **Linia de referință** a peretelui la o față a miezului sau la axa miezului. Când adăugați mai târziu sau îngroșați un finisaj, această linie rămâne unde este și peretele crește în jurul ei; pereții care o întâlnesc într-un colț urmează, astfel colțurile drepte rămân închise.

## Materiale ale proiectului

{{ui:Bibliotecă de materiale…}} listează materialele proiectului: nume, categorie, grosimea cu care începe un strat, culoarea de afișare, modelul de umplere al secțiunii și note. Biblioteca este salvată în IFC împreună cu proiectul. Alegerea unui material pentru un strat dă stratului grosimea implicită a materialului, pe care o puteți schimba apoi; editarea bibliotecii mai târziu nu redimensionează niciodată pereții deja desenați. Puteți crea un material și din lista de materiale a stratului, cu {{ui:+ Material nou…}}.

## Cote de referință

{{ui:Adnotare}} › {{ui:Cotă de referință}}: alegeți orizontală, verticală sau aliniată și o referință: fața finisajului exterior sau interior, fața miezului exterior sau interior, axa peretelui sau axa miezului. Alegeți primul perete, schimbați referința dacă doriți, alegeți al doilea, apoi faceți clic unde merge linia de cotă. Două referințe pe un perete măsoară grosimea totală sau a miezului. {{ui:Cote de referință…}} listează cotele vederii, inclusiv cele care au pierdut un perete, cu **Proprietăți**, **Relegare referințe** și **Ștergere**.

### Cotați întregul plan după reguli

{{ui:Adnotare}} › {{ui:Cotați planul…}} cotează exteriorul planului de etaj pe care îl vedeți: dimensiunea totală în fiecare sens, un rând de cote pe fiecare margine exterioară (capetele pereților, pereții care întâlnesc marginea și ușile și ferestrele din ea), rândurile fiind plasate în afara clădirii. Bifați ce doriți, citiți numărul, apoi {{ui:Adăugare cote}}. Sunt cote de referință obișnuite, deci urmează pereții când aceștia se mută, iar puteți alege, muta sau șterge oricare dintre ele; întregul set este un singur pas de anulare, iar rularea din nou nu creează niciuna în plus.

Cotează doar exteriorul: încăperile din clădire, pereții curbi și pereții care nu sunt perpendiculari pe plan sunt lăsați pentru uneltele manuale, iar liniile de axă nu sunt pereți, deci cotele dintre axe nu se fac aici. Asistentul conectat poate face același lucru cu `plan_dimension`.

Cota este atașată de pereți, nu de un punct de pe ecran: când un perete se mută sau i se schimbă tipul, valoarea urmează. Dacă un perete este șters, cota spune că este nerezolvată și nu arată niciun număr, până o relegați sau anulați. Caseta de lungime acceptă și coordonate de plan, precum `10',12'`, pentru o linie de cotă într-un loc exact.

Cotele sunt pentru pereții desenați de BimCraft, în vederile de plan. Încă nerealizat: cote în secțiuni și fațade, la uși, ferestre și alte componente, precum și straturile alcătuirilor desenate în plan și în secțiune; vezi [Ce nu este încă realizat](topic:not-built-yet).

## Vezi și

[Desenarea pereților](topic:draw-walls), [Modificarea unui perete, ușă sau fereastră](topic:change-a-wall-or-door), [Proprietăți](topic:properties-panel).

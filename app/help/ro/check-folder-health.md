---
title: Verificarea unui dosar pentru copii deteriorate, legături lipsă și resturi
summary: Folosiți raportul dosarului ca să găsiți fișiere de model tăiate, să alegeți cea mai nouă copie de rezervă completă, să vedeți ce legături lipsesc și să observați fișierele de blocare și cele temporare.
keywords: verificare sănătate, deteriorat, corupt, incomplet, trunchiat, copie de rezervă, legături lipsă, xref lipsă, audit, resturi, fișiere de blocare, dwl, bak, predare
from: 3025a539
---

## Ce veți face

Verificați un dosar de proiect înainte să-l predați sau să începeți lucrul la el: este fiecare model complet, care copie de rezervă este ultima bună și sunt prezente toate fișierele legate?

## Pași: copii deteriorate

1. Deschideți dosarul de proiect. Vedeți [Deschiderea unui dosar de proiect complet](topic:open-project-folder).
2. Citiți notele de sub numele dosarului. „2 fișiere sunt incomplete sau nelizibile. Vedeți modelele de mai jos.” înseamnă că există ceva de verificat.
3. În **Modele**, uitați-vă la coloana **Stare**. **Complet** este în regulă. Un „1 incomplet” chihlimbariu înseamnă că o copie este defectă, dar alta este sănătoasă. Un **Incomplet** roșu înseamnă că nu s-a găsit nicio copie sănătoasă.
4. Deschideți **Toate copiile ...** sub un model cu probleme. Lista cuprinde fișierul principal și fiecare copie de rezervă numerotată, cea mai nouă prima, cu dimensiune, dată și stare.
5. Citiți nota de deasupra listei, de exemplu „Tower.rvt este incomplet (183.2 MB, ar trebui să aibă cel puțin 214.0 MB). Cardul arată cea mai nouă copie completă, Tower.0012.rvt (Mar 3, 2025).”
6. Faceți clic pe copia pe care o doriți. Pot fi deschise doar copiile complete.

## Ce face verificarea de sănătate

Fiecare copie a fiecărui model primește o verificare rapidă a antetului, de 512 octeți fiecare, deci chiar și un dosar cu modele mari este verificat în câteva secunde. Un fișier al cărui index propriu indică dincolo de sfârșitul lui a fost tăiat în timpul copierii, încărcării sau sincronizării. Un fișier de pe un drive cloud care este încă „doar online” arată la fel.

Cardul fiecărui model este citit din fișierul principal atunci când acesta este sănătos și din cea mai nouă copie de rezervă sănătoasă atunci când nu este.

## Pași: legături lipsă

1. Căutați nota „*n* fișiere legate nu se află în acest dosar.” sub numele dosarului.
2. Derulați până la **Fișiere legate și referențiate**. Legăturile lipsă sunt listate primele.
3. Citiți coloana **Unde** pentru fiecare legătură:
   - **În acest dosar**: găsit la calea salvată de model.
   - **Găsit după nume**: un fișier cu același nume se află în altă parte din dosar. Verificați dacă este cel corect.
   - **Fișier de bibliotecă**: un tabel de coduri keynote sau de ansamblu. Acestea vin cu programul pe fiecare calculator, deci nu se așteaptă să fie în dosar.
   - **Nu se află în acest dosar**: nu a fost găsit nicăieri în dosar.
4. Citiți **Folosit de** ca să vedeți ce modele leagă fiecare fișier.

BimCraft caută fiecare legătură mai întâi după calea relativă, apoi după sfârșitul căii salvate (astfel încât `\\server\jobs\Tower\Cad\X-Refs\site.dwg` este găsit la `X-Refs/site.dwg` când ați ales dosarul `Cad`), apoi după numele fișierului oriunde în dosar.

## Pași: resturi

1. Derulați până la **Scoase deoparte**, la sfârșitul raportului.
2. Citiți cele trei rânduri care pot apărea:
   - Dosare de întreținere (`*_backup`, `*_log`, `Revit_temp`): nu sunt citite.
   - Resturi de blocare, jurnal și copii de rezervă: fișiere precum `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Acestea sunt lăsate de programe care s-au blocat sau erau deschise când dosarul a fost copiat. De obicei pot fi șterse în siguranță, când nimeni nu mai are fișierele deschise.
   - Alte fișiere: tot ce BimCraft nu citește.

## Greșeli frecvente

- **Ștergerea fișierului principal deteriorat înainte de a salva o copie de rezervă bună.** Copiați mai întâi cea mai nouă copie completă, apoi ocupați-vă de fișierul deteriorat.
- **Încrederea oarbă în „Găsit după nume”.** Două desene diferite pot avea același nume. Deschideți ambele dacă aveți îndoieli.
- **Considerarea unui fișier de bibliotecă lipsă drept problemă.** Tabelele de coduri keynote și de ansamblu stau alături de program pe fiecare calculator.
- **Numărul de fișiere diferă între browsere.** În Firefox și Safari, {{ui:Deschidere dosar}} predă fiecare fișier, inclusiv pe cele din dosarele de întreținere, deci numărul (și limita de 20,000 de fișiere) le include. Trăgerea dosarului în fereastră le sare, ca în Chrome și Edge. Restul raportului este același.

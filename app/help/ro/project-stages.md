---
title: Etapele proiectului, de la tema de proiectare până la dispozițiile de șantier
summary: Porniți de la o temă cu suprafețe țintă și vedeți pe măsură ce desenați dacă încăperile sunt atinse sau insuficiente, comparați variantele de concept cu aceasta, legați specificațiile și detaliile de tipuri, verificați desenele de execuție și înregistrați dispozițiile de șantier pe elemente.
keywords: brief, tabel de spații, suprafață țintă, încăperi, variante de concept, variante, volumetrie, buget, specificație, spec, detaliu, detaliu de execuție, tip, desen de execuție, verificare, aprobare, retrimitere, dispoziție de șantier, revizie, cauză, teren, etapă
from: 0a49b852
---

## Ce veți face

Parcurgeți etapele unui proiect dintr-un singur panou: scrieți tema beneficiarului ca încăperi cu suprafețe țintă, comparați variantele de concept cu aceasta, păstrați specificația și detaliile de execuție alături de tipurile cărora le aparțin, verificați desenele de execuție pe măsură ce revin de la echipele de specialitate și înregistrați dispozițiile de șantier pe elementele pe care le modifică.

## Pași

1. În panoul din stânga deschideți **Etapele proiectului**, apoi **Brief**.
2. Lipiți încăperile, câte una pe rând: `Living; 1; 30` înseamnă o încăpere de 30 m². Numărul poate fi omis. Alegeți **Adăugare încăperi**. Completați beneficiarul, amplasamentul, bugetul, toleranța și programul, apoi **Salvare brief**.
3. Desenați pereții. Fiecare încăpere formată de pereți care are numele unei încăperi din brief este numărată (un număr după nume, precum „Dormitor 2”, este ignorat). **Tabelul de spații** indică **Atins**, **Insuficient**, **Depășit** sau **Nedesenat**, cu diferența în m².
4. Pentru a începe un proiect nou în acest fel, alegeți **Începere proiect nou dintr-un brief**. Se deschide un model nou, dintr-un șablon salvat dacă alegeți unul, iar brieful este introdus ca prim pas.
5. Deschideți **Variante față de brief**. Fiecare variantă de volumetrie păstrată în model este desenată la aceeași scară, cu suprafața brută, cu ceea ce cere brieful și cu numărul de încăperi din brief care încap. **Așezare brief aici** pune încăperile în nivelurile variantei, de jos în sus, și indică ce nu încape. Costul provine doar din tabelul de prețuri al proiectului; fără un rând corespunzător afișează „Fără tarif”.
6. Deschideți **Tipuri, specificații și detalii**. Fiecare tip de perete, ușă, fereastră și planșeu arată dacă are text de specificație, detaliile legate de el și locul unde specificația, tabelele și planșele nu se potrivesc. **Legare detaliu** adaugă un fișier DetailCraft sau CadCraft, o adresă sau o planșă a acestui model.
7. Deschideți **Desene de execuție**. Selectați elementele pe care le acoperă un desen de execuție în model, apoi **Primire**. Folosiți **Aprobare**, **Aprobat cu observații** sau **Revizuire**, cu numele și nota verificatorului. **Retrimis** creează următoarea revizie a aceleiași înregistrări și păstrează istoricul verificărilor. Starea este scrisă și pe fiecare element.
8. Deschideți **Dispoziții de șantier**. Selectați elementele, indicați cauza și ce înseamnă pentru cost și timp, cu propriile cuvinte, apoi **Înregistrare**. După ce a fost înregistrată o emitere, **Explicare modificări de la această emitere** arată ce elemente modificate acoperă o dispoziție și care s-au modificat fără nimic înregistrat.

## De reținut

- Fiecare pas se anulează printr-o singură **Anulare**. Nimic nu este refuzat: un brief nesatisfăcut, un tip care nu se potrivește cu textul sau un desen de execuție întârziat este un avertisment sau o notă în **Probleme**.
- Încăperile din brief sunt spații fără pereți. Au o țintă, nu o suprafață desenată, deci tabelele de încăperi și COBie nu le numără drept încăperi desenate.
- O aranjare doar așază încăperile pe niveluri după suprafață. Nu desenează pereți.
- Textul specificației este scris în **Documente** din model. Aici este doar comparat cu dimensiunile modelului; nu se scrie niciun articol de standard.
- Desenele de execuție și dispozițiile de șantier sunt înregistrări în același istoric cu panoul **Probleme și revizii**, deci ambele panouri le afișează.
- Starea unui desen de execuție este o proprietate a fiecărui element (`CadCraft_ShopDrawing`), iar o dispoziție de șantier este `CadCraft_SiteInstruction`, deci **Căutare** și **Colorare după proprietate** le pot folosi.
- Marcajele verificate pe teren (Etapa 7) se află în **Proprietăți**, sub **Verificare**.

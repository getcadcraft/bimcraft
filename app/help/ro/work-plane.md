---
title: Planul de lucru: setați-l, afișați-l, priviți-l direct
summary: Planul de lucru este planul pe care folosesc liniile modelului, textul modelului și Vizualizatorul planului de lucru. Setați-l la un nivel, o față, un plan de referință numit sau o linie; afișați-l în vederi; deschideți vizualizatorul pentru a desena pe un plan vertical.
keywords: plan de lucru, setare plan de lucru, afișare plan de lucru, plan de referință, vizualizator plan de lucru, plan numit, față, nivel, plan vertical, desenare pe perete, vedere de elevație, agățare, aliniere, plan de referință
from: 8aceee1d
---

## Ce veți face

Alegeți planul pe care desenați, vedeți unde se află și desenați pe un plan care stă vertical.

## Pași

1. Activați **Desenare** și deschideți meniul **Construire** (într-un aspect cu panglică: fila Arhitectură, Plan de lucru).
2. Alegeți **Setare plan de lucru**. Apoi faceți una dintre acestea:
   - selectați un nivel din **Setare la**;
   - selectați un plan de referință numit din lista de lângă ea;
   - faceți clic pe o linie din plan: un perete, o linie de grilă, un plan de referință, o linie a modelului sau un sistem de cortină. Planul de lucru devine planul vertical care trece prin acea linie;
   - faceți clic pe o față plană în vizualizarea 3D. Planul de lucru se află pe acea față.
3. Alegeți **Afișare plan de lucru** pentru a-l vedea: o foaie colorată cu o grilă de un metru în vizualizarea 3D, un contur sau o linie punctată în plan și un contur punctat în panoul de elevație și secțiune. Alegeți-l din nou pentru a-l ascunde.
4. Alegeți **Vizualizatorul planului de lucru** pentru a privi drept spre plan. Liniile negre sunt modelul tăiat de plan. Folosiți instrumentele sale pentru a desena o linie a modelului, un text al modelului sau un plan de referință pe plan. **Priviți-l în 3D** rotește vizualizarea 3D spre plan.

## Planuri de referință

Un plan de referință este un plan numit pe care îl desenați ca o linie.

1. Alegeți **Plan de referință**. Scrieți un nume în rândul său, dacă doriți unul (altfel primește unul automat), și o înălțime.
2. Faceți clic unde începe și unde se termină. În plan, aceasta creează un plan vertical. În Vizualizatorul planului de lucru, creează un plan perpendicular pe planul de lucru.
3. Apare ca o linie verde punctată cu numele său în plan, ca un contur punctat în vizualizarea 3D și în panoul de elevație și secțiune.
4. Selectați-l pentru a-l redenumi, a-i schimba lungimea, înălțimea și baza sau apăsați **Utilizare ca plan de lucru**.

Două planuri de referință nu pot avea același nume, deoarece numele este modul în care alegeți unul dintre ele.

## Bine de știut

- Un model fără plan de lucru setat funcționează pe cel mai jos nivel al său.
- Planul de lucru este salvat în fișier. Afișarea sau ascunderea lui este reținută în acest browser, nu în fișier.
- Dacă planul de lucru urmează un plan de referință și mutați acel plan, planul de lucru se mută odată cu el.
- Pe un plan de lucru vertical, instrumentele Linie de model și Text de model deschid vizualizatorul, deoarece planul din vedere nu poate indica o înălțime.
- Instrumentele de desenare captează capetele planurilor de referință desenate în plan, în același mod în care captează capetele altor linii în vizualizator.

## În fișierul IFC

- Planul de lucru este un set de proprietăți (CadCraft_WorkPlane) al proiectului.
- Un plan de referință este un IfcAnnotation cu tipul de obiect ReferencePlane și numele său. Forma sa este conturul închis al planului, astfel încât alt program arată unde se află. Setul său CadCraft_ReferencePlane conține originea, direcția, normala și întinderea. IFC nu are o clasă pentru un plan de referință; o adnotare nu este numărată ca element de construcție și nu delimitează încăperile.

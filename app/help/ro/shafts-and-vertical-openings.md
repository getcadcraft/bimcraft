---
title: Goluri de instalații și deschideri verticale prin planșee
summary: Un gol de instalații este un singur contur care taie fiecare planșeu, tavan și acoperiș dintre două niveluri. O deschidere verticală taie unul dintre ele. Golul în perete taie un perete.
keywords: gol de instalații, gol de lift, gol de ascensor, gol pentru scară, contratreaptă, deschidere verticală, deschidere în planșeu, deschidere în tavan, deschidere în acoperiș, deschidere pentru luminator, gol în planșeu, gol în perete, IfcOpeningElement, scădere, arie netă
from: 8e9e1641
---

## Ce veți face

Tăiați un gol de lift prin clădire cu un singur contur, tăiați o gaură într-un singur planșeu și citiți ce s-a scos din arii.

## Unde sunt uneltele

- Aranjamente cu panglică: {{ui:Arhitectură}} › **Deschidere** › {{ui:Gol de instalații}}, {{ui:Deschidere verticală}} și {{ui:Gol în perete}}.
- Aranjament clasic: bara Desenare › meniul {{ui:Încăperi}} (Gol de instalații, Deschidere verticală) și › meniul {{ui:Pereți}} (Gol în perete).

## Un gol de instalații

1. Deschideți planul de etaj al nivelului de la care începe golul. Alegeți {{ui:Gol de instalații}}.
2. În rând alegeți {{ui:Nivel de bază}} și {{ui:Nivel superior}}, cu decalajele necesare dacă golul începe sau se termină deasupra ori dedesubtul lor.
3. Faceți clic pe colțurile conturului. Faceți din nou clic pe primul colț, faceți dublu clic sau apăsați {{key:Enter}} pentru a încheia.
4. Fiecare planșeu, tavan și acoperiș dintre cele două înălțimi este tăiat. Linia de stare spune câte.

Un gol de instalații este un singur obiect. Selectați conturul lui pe orice nivel prin care trece: în {{ui:Proprietăți}} sunt numele, nivelurile și decalajele, ce taie și aria scoasă. Modificați-l și fiecare deschidere urmează. Ștergeți-l și dispar toate deschiderile. Fiecare acțiune este un singur pas de anulare.

Continuă să taie: un planșeu făcut mai târziu între nivelurile lui este tăiat fără să fie cerut, iar un planșeu șters nu mai este tăiat.

Planșeul pe care stă golul nu este tăiat (partea lui de sus este baza). Dați bazei un decalaj negativ ca s-o tăiați și pe ea. Dați vârfului un decalaj pozitiv ca golul să treacă prin acoperiș.

## O deschidere verticală

1. Alegeți {{ui:Deschidere verticală}}. În rând alegeți ce se taie: planșeul, tavanul sau acoperișul.
2. Faceți clic pe colțurile conturului și încheiați ca mai sus.
3. Planșeul, tavanul sau acoperișul acestui nivel de sub contur este tăiat. Deschiderea aparține acelui singur element: ștergeți planșeul și deschiderea dispare odată cu el.

## Golul în perete

{{ui:Gol în perete}} este unealta din [Modelarea unui perete](topic:wall-shape): faceți clic pe un perete în plan sau pe două colțuri de pe fața lui în 3D.

## Cantități

Conform regulii de măsurare pentru planșee, aria netă a unui element este aria brută minus ce este scos din el. Un gol de instalații sau o deschidere verticală este o scădere pe fiecare planșeu și tavan pe care îl taie; tabelele Planșee și Finisaje și cantitățile IFC arată aceleași cifre. Pe acoperiș, scăderea este aria suprafeței acoperișului: aria în plan împărțită la cosinusul pantei.

Un contur care trece peste margine scade doar partea care se află pe element.

## Dacă nu se taie nimic

Un gol de instalații fără nimic în cale este făcut oricum și o spune: va tăia ce se construiește acolo mai târziu. O deschidere verticală are nevoie de ceva dedesubt; fără nimic, linia de stare o spune și nu se face nimic.

## În IFC

Fiecare tăietură este un IfcOpeningElement cu IfcRelVoidsElement către elementul pe care îl taie, așa că orice program IFC arată golul. Un acoperiș este tăiat față cu față. Golul de instalații în sine este un IfcGroup al deschiderilor sale.

## Încă nerealizat

- Conturi curbe.
- Pereții unui gol de instalații: desenați-i cu unealta Perete.
- Editarea conturului trăgând de colțuri (modificați-l în Proprietăți sau ștergeți și desenați din nou).
- Proprietățile unui planșeu desenat arată aria doar minus propriile lui deschideri; tabelele și cantitățile IFC includ și golul de instalații.

Vezi și [Încăperi și separatoare de încăperi](topic:rooms-and-separators).

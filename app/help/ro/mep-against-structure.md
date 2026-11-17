---
title: Verificarea țevilor și conductelor de aer față de structură
summary: Rulați seturile de conflicte gata făcute ale țevilor și conductelor de aer față de pereți, planșee, grinzi și stâlpi, găsiți traseele mai apropiate de structură decât izolația și un spațiu liber și listați golurile pe care le necesită traseele prin pereți și planșee, ca CSV și BCF.
keywords: mep, conflict, verificare conflicte, coordonare, structură, pereți, planșee, grinzi, stâlpi, distanță liberă, conflict moale, izolație, spațiu, gol, goluri, penetrare, manșon, miez, lucrări de construcție, bcf, csv
from: 2d597f01
---

## Ce veți face

Asigurați-vă că instalațiile încap în clădire: ce intră în structură, ce trece prea aproape de ea și unde pereții și planșeele au nevoie de găuri. Deschideți {{ui:Verificare conflicte}} în panoul din stânga; secțiunea **Țevi și conducte de aer față de structură** se află sub verificarea obișnuită.

## Conflicte dure

Cele două liste de seturi oferă acum și **Țevi și conducte de aer**, **Pereți**, **Planșee și acoperișuri**, **Grinzi**, **Stâlpi** și **Structură** (toate patru), cu câte elemente conține fiecare. Faceți clic pe {{ui:Țevi și conducte × structură}} pentru a alege primul și ultimul element și a rula verificarea; sau alegeți singur orice pereche și faceți clic pe {{ui:Rulare}}. Vezi [Verificarea conflictelor](topic:clash-check).

## Distanțe libere

Unele instalații au nevoie de spațiu în jurul lor: izolația lor și loc pentru lucru sau pentru un manșon.

1. Dați unui traseu de țeavă sau de conductă de aer grosimea **Izolației** în Proprietăți (nu se desenează nimic pentru ea).
2. Introduceți **Spațiul liber în jurul țevilor și conductelor de aer** (mm) în Verificarea conflictelor.
3. Faceți clic pe {{ui:Verificare distanțe}}: fiecare piesă mai apropiată de un perete, planșeu, grindă sau stâlp decât izolația plus spațiul liber este listată cu distanța pe care o are și distanța pe care o cere. Faceți clic pe o linie pentru a vedea cele două.

O piesă care trece printr-un perete sau planșeu este un gol, nu o distanță liberă, și este listată acolo în schimb.

## Goluri necesare

Faceți clic pe {{ui:Goluri necesare}}. Acolo unde axa centrală a unui traseu trece printr-un perete sau planșeu, BimCraft listează golul de care are nevoie: rotund pentru o țeavă sau o conductă rotundă, altfel dreptunghiular, de dimensiunea dimensiunii exterioare a traseului plus de două ori izolația plus de două ori spațiul liber, centrat unde traseul traversează. Faceți clic pe o linie pentru a vedea traseul și peretele sau planșeul.

- {{ui:Goluri ca CSV}}: o linie pentru fiecare gol, cu traseul, dimensiunea și izolația sa, dimensiunea golului, elementul prin care trece și GlobalId-ul său, nivelul, coordonatele X, Y și Z ale centrului și cât de departe trece traseul.
- {{ui:Goluri ca probleme BCF}}: o problemă pentru fiecare gol, cu o cameră îndreptată spre el și traseul și elementul selectate, pentru programul inginerului de structură.

:::note
Nu se taie nimic: golurile sunt o listă pentru cei care le dimensionează. Spațiul liber se introduce manual; niciun cod nu spune cât de mare trebuie să fie un gol. Grinzile și stâlpii sunt conflicte, nu goluri: dacă o țeavă poate trece prin unul dintre ele este decizia inginerului de structură.
:::

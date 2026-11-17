---
title: Trimiterea țevilor către un program de tensiune sau de izometrii și citirea lor înapoi (PCF)
summary: Scrieți traseele de țevi ale modelului ca fișier de componente de țevi PCF sau citiți un fișier PCF de la un program de tensiune pe țevi sau de izometrii și desenați țevile lui ca trasee.
keywords: pcf, fișier de componente de țevi, tensiune pe țevi, izometrie, izometrii, export, import, instalații de țevi, instalație, țeavă din oțel, mutarea unei lucrări, alt software
from: 24f91355
---

## Ce veți face

PCF este fișierul text simplu pe care îl citesc și îl scriu programele de tensiune pe țevi și de izometrii. Listează fiecare componentă a fiecărei conducte, cu punctele ei finale și diametrele nominale.

## Export

1. Alegeți instrumentul Țeavă. Bara de opțiuni arată **Export PCF**.
2. Faceți clic pe el. Fiecare traseu de țeavă din model este scris: țeava dreaptă, coturile (o întoarcere de 90 de grade, altfel o curbă), teurile cu punctul lor de ramificație, reducțiile și robinetele.
3. Fișierul folosește milimetri. Diametrele sunt diametre nominale în milimetri. Punctul central al unui cot este colțul lui, unde se întâlnesc cele două brațe.

PCF este scris pentru țeavă din oțel cu sudură cap la cap. Un traseu dintr-un alt material este scris și el, cu chei de componente de oțel, și este notat în panoul Probleme.

## Import

1. Alegeți instrumentul Țeavă și faceți clic pe **Import PCF…**, apoi alegeți fișierul.
2. Țeava dreaptă, prin coturi, curbe, robinete și flanșe, devine un singur traseu pe nivelul curent. O schimbare de dimensiune începe un traseu nou. Ramura unui teu devine propriul traseu, care începe din centrul teului.
3. Modelul își așază propriile racorduri. Reducțiile și teurile nu sunt copiate: apar acolo unde se întâlnesc trasee de dimensiuni diferite sau o ramură.

:::note
Înălțimile din fișier sunt citite ca înălțimi deasupra nivelului curent. Sarcinile, reținerile și analiza de tensiune în sine nu sunt într-un fișier PCF și nu se transferă.
:::

## Verificarea a ceea ce a venit

- Lungimea totală a țevii pentru fiecare conductă trebuie să se potrivească cu sursa.
- Panoul Probleme listează, o singură dată fiecare, un cot al cărui punct central nu este la aceeași distanță de ambele capete, țeava fără lungime și un diametru care nu este o dimensiune standard.

## Țevi care există deja într-un fișier IFC

Când un fișier IFC este deschis, **Export PCF** scrie și propriile segmente de țeavă, racorduri și robinete, alături de traseele pe care le-ați desenat. Un segment își primește capetele din porturile sale sau din capetele corpului său. Un racord fără porturi este lăsat afară, iar panoul Probleme spune asta. Puteți exporta doar din IFC când modelul nu are trasee desenate.

La import, suporturile, ramificațiile de tip olet, flanșele, garniturile și capacele din fișier nu sunt desenate. Panoul Probleme listează câte din fiecare au fost lăsate afară, astfel încât nimic să nu dispară fără știre.

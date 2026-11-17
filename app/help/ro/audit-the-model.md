---
title: Auditarea modelului: camere, etichete, LOD, conflicte și interfețe
summary: Rulați verificări gata făcute pentru camerele fără nume, etichetele lipsă, elementele sub nivelul de dezvoltare cerut de etapa proiectului, conflictele dintre discipline și interfețele LOD 350. Doar sfaturi: nimic nu este blocat.
keywords: audit, verificare, cameră fără nume, etichetă lipsă, marcaj, lod, nivel de dezvoltare, etapă de proiect, conflict, disciplină, coordonare, interfață, lod 350, gol, buiandrug, grindă, penetrare, manșon, conductă, canal, probleme, raport de verificare, consultativ
from: cc83a14d
---

## Ce veți face

Parcurgeți întregul model dintr-o dată, înainte să îl emiteți. Auditul rulează seturile de reguli gata făcute și pune ce găsește în lista {{ui:Probleme}}, ca sfat. Nimic nu este blocat: corectați o constatare sau o acceptați cu un motiv, ca orice altă problemă.

## Pași

1. Deschideți {{ui:Verificări ale modelului}} › {{ui:Audit}} în panoul din stânga, sau {{ui:Instrumente}} › {{ui:Auditarea modelului…}} (scris: `AUDIT`).
2. Alegeți {{ui:Etapa proiectului}}. Este aceeași etapă ca în detaliile desenului.
3. Bifați seturile de reguli de rulat.
4. Faceți clic pe {{ui:Rulare audit}}.
5. Citiți linia pentru fiecare set de reguli, apoi faceți clic pe {{ui:Deschideți lista Probleme}}. Un clic pe o constatare alege elementul ei.
6. {{ui:Raportul verificării}} descarcă raportul: fiecare constatare, cine a acceptat ce și de ce, și seturile de reguli care au rulat.

## Seturile de reguli

- **Camere fără nume**: o cameră fără nume sau încă numită cum a numit-o programul („Room 3”).
- **Etichete lipsă**: o ușă sau o fereastră fără marcă, o cameră fără număr, un dispozitiv electric fără etichetă.
- **Elemente sub LOD-ul etapei**: fiecare perete, planșeu, tavan, acoperiș, ușă și fereastră al cărui LOD este sub cel cerut de etapă. Un element citește eticheta LOD a tipului său; un element verificat pe teren este LOD 500. Elementele fără etichetă sunt numărate într-o singură notă, deoarece nu pot fi verificate.
- **Conflicte între discipline**: elemente din două discipline (arhitectură, structură, mecanică, instalații sanitare, electrice, după clasa IFC) care se intersectează. Un acoperiș care se sprijină pe pereții săi nu este numărat.
- **Interfețe LOD 350**: fiecare ușă și fereastră stă într-un gol al peretelui său, golul încape în perete, două goluri nu se suprapun, un gol mai lat decât limita are un buiandrug sau o grindă (un element deasupra lui sau o notă pe ușă sau pe fereastră), iar o conductă, un canal sau o tavă de cabluri care traversează un perete sau o placă are un gol acolo. Constatările sunt numărate pe perechi de discipline.
- **Elemente recunoscute pe care nimeni nu le-a verificat**: pereți, uși, ferestre și camere citite dintr-un PDF, dintr-o scanare sau dintr-un desen, care sunt încă neverificate. Vezi [Marcarea elementelor ca verificate sau verificate pe teren](topic:verification).

## LOD-ul cerut de fiecare etapă

Deschideți {{ui:LOD-ul cerut de fiecare etapă}} pentru a vedea sau a schimba tabelul.

:::note
Tabelul și lățimea buiandrugului sunt valorile de pornire ale CadCraft. Nu sunt luate dintr-un standard: un proiect stabilește LOD-ul pe etapă în planul de execuție BIM. Setați-le pe cele ale proiectului. Un birou poate stabili tabelul pentru toți din Setări › Default Policies › Audit; o modificare în secțiunea Audit este păstrată pe acest calculator.
:::

## De reținut

- Un buiandrug poate fi notat în loc de modelat: alegeți ușa sau fereastra și completați {{ui:Notă despre buiandrug sau grindă}} sub {{ui:Verificare}} în {{ui:Proprietăți}}.
- O conductă care trece printr-un gol real nu traversează nicio suprafață și nu este raportată. Una modelată direct prin perete este.
- Verificarea conflictelor se oprește după câteva secunde pe un model foarte mare și spune asta. Pentru o verificare completă a două seturi alese, folosiți [Găsirea conflictelor între elemente](topic:clash-check).
- Rulați din nou auditul după ce modificați modelul. Constatările acceptate rămân acceptate cât timp numerele lor nu se schimbă.
- Auditul citește modelul. Nu înlocuiește o revizuire de coordonare făcută de persoanele responsabile.

## Următorul

- [Verificarea unui model pentru probleme frecvente](topic:model-checks)
- [Găsirea conflictelor între elemente](topic:clash-check)
- [Marcarea elementelor ca verificate sau verificate pe teren](topic:verification)

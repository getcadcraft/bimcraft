---
title: Aranjarea, salvarea și exportul unui tabel centralizator
summary: Grupați un tabel centralizator, dați-i subtotaluri și totaluri, adăugați o coloană citită dintr-o proprietate, salvați-l ca configurație în fișier și exportați-l ca registru de calcul (.xlsx), ca text de lipit într-o foaie online sau ca CSV. Standardul biroului completează ce nu precizează un tabel centralizator.
keywords: aranjare tabel, grupare după, subtotal, total, antete, standard de birou, politici implicite, configurație, tabel uși pe etaj, rezistență la foc, feronerie, xlsx, registru de calcul, foaie online, lipire, csv, export, foaie de calcul, elemente, selectare din tabel, cifră
from: 95dfd801
---

## Ce veți face

Transformați un tabel centralizator simplu în cel pe care îl emite biroul: grupat pe nivel, tip sau încăpere, cu subtotaluri și un total, cu coloanele de care aveți nevoie, sub propriul nume. Apoi trimiteți-l într-o foaie de calcul. Fiecare rând și fiecare cifră știu încă elementele din care provin.

## Pași

1. Activați {{ui:Desenare}} și deschideți **Tabele centralizatoare** în panoul din stânga. Alegeți un tabel, de exemplu **Uși**.
2. Deasupra tabelului alegeți **Grupare după** (o coloană a tabelului, cum ar fi Nivel sau Tip, sau **Fără grupare**) și **Totaluri** (**Fără totaluri**, **Un total** sau **Subtotaluri și un total**). **Conform setării** lasă alegerea pe seama configurației salvate sau a standardului biroului.
3. Pentru a adăuga o coloană citită din elemente, scrieți sub tabel numele unei proprietăți sau al unei etichete (de exemplu `FireRating`, `Pset_DoorCommon.FireRating` sau numele unei etichete, precum `Ironmongery`) și faceți clic pe **Adăugare coloană**. BimCraft citește mai întâi seturile de proprietăți ale elementului, apoi pe cele ale tipului său. Când niciun element nu are încă o valoare, aplicația o spune; coloana se completează singură când se setează o valoare.
4. Scrieți un nume (de exemplu „Tabel uși pe etaj”) și faceți clic pe **Salvare ca configurație**. Configurația se păstrează în fișierul clădirii și se alătură listei Tabele centralizatoare sub numele ei. Urmează fiecare modificare a modelului. **Eliminare această configurație** o scoate din nou. Ambele sunt un singur pas în Anulare.

## Faceți clic pe o cifră ca să selectați de unde provine

Faceți clic pe orice rând sau pe orice cifră ca să selectați elementele din spatele ei în plan și în 3D:

- un rând selectează elementele acelui rând;
- un subtotal sau un total selectează tot ce adună, iar un titlu de grup selectează grupul său;
- o cifră cu elemente proprii selectează acele elemente: **Scăderile** unui tip de perete selectează ușile și ferestrele lui, iar suprafața peretelui unei încăperi selectează pereții ei.

Același lucru funcționează într-un document făcut din model: în previzualizare, faceți clic pe o cifră a unui tabel.

## Export

- **Descărcare Excel** salvează un registru .xlsx. Lungimile, suprafețele, volumele și numărătorile sunt numere reale, în unitatea pe care o arată coloana (picioarele și inciile rămân text). O a doua foaie, **Elemente**, listează pentru fiecare rând GlobalId-urile elementelor din spatele lui.
- **Copiere pentru Google Sheets** pune tabelul pe clipboard ca text separat prin tabulatoare. Într-un Google Sheet, faceți clic pe celula A1 și lipiți. **Deschidere Google Sheet nou** deschide `sheets.new`, adresa proprie a Google pentru o foaie goală, în propriul cont Google. BimCraft nu se conectează la Google și nu trimite nimic acolo: lipirea rămâne în sarcina utilizatorului.
- **Descărcare CSV** salvează tabelul așa cum este aranjat pe ecran.

## Standardul biroului

Un birou poate spune o dată cum sunt aranjate tabelele sale. Activați suplimentul **Default Policies** ([Default Policies](topic:default-policies)) și setați, în **Setări › Global › Default Policies › Aranjare tabel (standardul biroului)**:

| Politică | Ce face |
|---|---|
| Grupare tabele după | Nivel, Tip, Încăpere sau fără grupare, pentru fiecare tabel care are o asemenea coloană |
| Totaluri în tabele | Fără totaluri, un total la sfârșit sau un subtotal sub fiecare grup și un total |
| Titlul tabelului | Un șablon, de exemplu `{project}: {schedule}` |
| Antetele coloanelor | Așa cum sunt scrise, CU MAJUSCULE sau Cu majuscule inițiale |

Standardul se aplică fiecărui tabel, oricine l-ar configura: tabelele simple din panou, o configurație salvată, un tabel pe care îl configurează un asistent, exporturile și tabelele dintr-un document. O configurație care precizează propria grupare, totaluri sau titlu le păstrează; standardul completează restul. Panoul arată ce părți a stabilit standardul biroului. Politicile circulă în fișierul Default Policies, împreună cu celelalte.

## De știut

- O configurație numește tabelul sursă și coloanele sale; nu conține cifre. Cifrele sunt citite din model de fiecare dată.
- Listele care nu sunt rânduri de elemente (ansamblurile de pereți și legenda materialelor) nu au aranjare și export aici.
- Un asistent poate face toate acestea: vedeți [Lăsați un asistent AI să lucreze cu modelul](topic:assistants).

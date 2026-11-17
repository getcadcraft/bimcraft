---
title: Verificați reverberația unei încăperi și ascultați-o
summary: Timpul de reverberație pe benzi de octavă pentru fiecare încăpere (Sabine și Eyring), calculat din dimensiuni și finisaje, cu o țintă proprie și cu redarea unei voci, a unei bătăi din palme sau a muzicii printr-un răspuns la impuls calculat al încăperii.
keywords: acustică, reverberație, timp de reverberație, rt60, sabine, eyring, absorbție, ecou, sunet, ascultare, răspuns la impuls, vorbire, sală de clasă, birou, covor, placă de tavan, zgomot
from: 16996cbb
---

Secțiunea {{ui:Acustica încăperilor}} din panoul din stânga calculează cât timp rămâne sunetul în fiecare încăpere. Citește din modelul IFC deschis suprafața pardoselii, înălțimea, pereții, ușile și ferestrele fiecărei încăperi. Nimic din model nu este modificat.

## Alegerea finisajelor

Acolo unde modelul indică ce acoperă o suprafață, încăperea o citește: stratul interior al fiecărui tip de perete (gips-carton, tencuială, cărămidă, beton și blocuri sunt recunoscute), tipul pardoselii (lemn sau beton) și dacă tavanul este placat cu plăci. Eticheta de lângă fiecare alegere arată dacă valoarea provine din model, este una implicită sau este alegerea dumneavoastră. Alegeți alt finisaj pentru a o înlocui. Tot ce modelul nu precizează rămâne la valoarea implicită. Coeficienții sunt **valori tipice publicate**; înlocuiți-i cu datele de încercare ale unui produs atunci când le aveți. Introduceți o **țintă** (cea mai lungă reverberație la frecvențele medii pe care o doriți), iar orice încăpere care o depășește primește un avertisment, cu absorbția care ar aduce-o sub țintă.

## Citirea tabelului

Reverberația este dată pentru 125 Hz până la 4 kHz. Sabine se potrivește încăperilor vii, iar Eyring celor moarte; linia marcată *Folosit* ia valoarea Eyring acolo unde absorbția medie este peste 0.2. Este inclusă absorbția aerului (ea scurtează benzile înalte din încăperile mari). Este un model statistic: presupune că sunetul se răspândește uniform, deci încăperile lungi sau joase și cele foarte mici sunt doar un ghid aproximativ, iar mobilierul, persoanele și ușile deschise nu sunt luate în calcul.

## Ascultare

{{ui:Redați în această cameră}} redă o voce (generată aici), o bătaie din palme, note ciupite sau **propriul fișier audio** (rămâne pe calculator) printr-un răspuns la impuls calculat pentru încăpere: sunetul direct, primele reflexii ale unei cutii de aceeași dimensiune și o coadă care se stinge la timpul de reverberație propriu al încăperii, pe fiecare bandă. {{ui:Redați fără efect}} redă același sunet, la același nivel, fără încăpere. Puteți salva răspunsul la impuls sau sunetul din încăpere ca fișiere WAV. Sună ca o încăpere de dimensiunea și finisajul respectiv, nu ca o anumită încăpere reală.

## Persoane și mobilier

Introduceți numărul de **persoane din această cameră** pentru a le adăuga absorbția. Mobilierul din model (canapele, paturi, scaune, mese, dulapuri, recunoscut după nume) adaugă propria absorbție. Cifrele sunt valori orientative de planificare, rotunjite; înlocuiți-le cu măsurători pentru o încăpere importantă.

## Sursă și ascultător

Sub {{ui:Sursă și ascultător}}, apăsați {{ui:Plasați sursa}} sau {{ui:Plasați ascultătorul}} și faceți clic pe planul încăperii. Sunetul redat se aude apoi de acolo: sunetul direct ajunge după distanță, iar partea reverberantă are nivelul corespunzător acelei distanțe. Eliminați ambele pentru a reveni la caseta de distanță.

## Absorbție neuniformă și moduri ale încăperii

Sub {{ui:Absorbție neuniformă (cameră în cutie)}}, introduceți încăperea ca pe o cutie și alegeți finisajele pardoselii, tavanului și pereților. Tabelul adaugă Fitzroy și Arau-Puchades la Sabine și Eyring: acestea tratează separat cele trei perechi de suprafețe opuse, astfel încât o cameră cu covor și tavan dur nu este citită prea scurtă. Când perechile diferă mult, o notă arată cărei valori să i se acorde încredere. Sub tabel, **Moduri ale încăperii** listează cele mai joase unde staționare ale cutiei și frecvența sub care încăperea are moduri separate, în loc de un câmp sonor uniform. Acestea sunt predicții pentru o cameră în cutie, un instrument de proiectare și nu o măsurătoare.

## Unități

Suprafețele, înălțimile, volumele și distanțele încăperilor sunt afișate în {{ui:Unități}} alese (picioare pătrate și cubice, inci, milimetri, centimetri sau metri). Calculul în sine rămâne în SI; se schimbă doar afișarea. Timpii (secunde), frecvențele și nivelurile nu se modifică.

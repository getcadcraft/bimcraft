---
title: Finisajele încăperilor și tabelele de finisaje
summary: Spuneți ce acoperă pardoseala, pereții și tavanul fiecărei încăperi, adăugați zone precum un panou de protecție placat cu gresie și obțineți tabele de finisaje pe încăpere, perete și zonă, cu suprafețe, număr de plăci, inclusiv tăieturile, și volumele substratului.
keywords: finisaj, finisaje, tabel de finisaje, finisaje încăpere, finisaj pardoseală, finisaj perete, finisaj tavan, plintă, plăci, gresie, plăci tăiate, număr de plăci, pierderi, substrat, șapă, placă suport, tencuială, zonă, panou de protecție, soclu, zonă umedă, interior, cantități
from: 8c30498c
---

## Ce veți face

Spuneți o dată programului BimCraft cu ce este finisată fiecare încăpere. Tabelele de finisaje dau apoi suprafețele, plăcile de comandat și volumele substratului, iar acestea se schimbă odată cu modelul.

## Pași

1. Activați {{ui:Desenare}}, deschideți **Tabele centralizatoare** în panoul din stânga și faceți clic pe **Finisaje pe încăperi**.
2. Sub **Tipuri de finisaje**, faceți clic pe **Adăugare tip de finisaj**. Dați-i un nume, un tip (Placă, Foaie, Strat sau Panou) și o grosime. Pentru o placă, dați lungimea și lățimea plăcii, rostul și un procent de pierderi. Dacă sub finisaj există ceva (o șapă, o placă suport, un strat de tencuială), numiți-l sub **Substrat** și dați-i grosimea.
3. Sub **Încăperi**, alegeți finisajul pardoselii, al peretelui și al tavanului fiecărei încăperi. Scrieți numele unei plinte și înălțimea ei, dacă încăperea are una.
4. Sub **Zone**, faceți clic pe **Adăugare zonă** pentru o parte dintr-o încăpere care primește alt finisaj:
   - o zonă de **perete** este o fâșie între două înălțimi deasupra pardoselii (un panou de protecție placat din 0 până la 1200, un soclu). Ea se află pe fiecare perete al încăperii, sau alegeți în model pereții acelei încăperi și faceți clic pe butonul **Activ** pentru a o limita la aceștia;
   - o zonă de **pardoseală** sau de **tavan** este o suprafață pe care o scrieți. Ea se scade din finisajul propriu al încăperii.
5. Faceți clic pe **Salvare**. Este un singur pas în Anulare. Lungimile se scriu în unitățile proiectului.

## Tabelele

Patru intrări se adaugă listei **Tabele centralizatoare**:

- **Finisaje pe încăpere**: fiecare încăpere cu finisajul pardoselii, al peretelui și al tavanului, cu suprafețele lor și plinta cu lungimea ei.
- **Finisaje pe perete**: fiecare porțiune de perete de pe partea unei încăperi și fâșia pe care o acoperă un finisaj, cu lungimea ei, suprafața brută, scăderile, suprafața netă și, pentru plăci, plăcile întregi, plăcile tăiate și plăcile de comandat.
- **Finisaje pe zonă**: fiecare zonă cu finisajul ei, suprafața netă, plăcile și volumul substratului.
- **Cantități de finisaje**: un rând pentru fiecare finisaj: suprafața netă, plăcile întregi și tăiate, plăcile de comandat, substratul și volumul lui, precum și volumul propriu al finisajului.

Grupați, totalizați, salvați și exportați-le ca pe orice tabel: vedeți [Aranjarea, salvarea și exportul unui tabel centralizator](topic:schedule-layouts). Faceți clic pe o cifră ca să selectați de unde provine: scăderile unui perete selectează ușile și ferestrele lui.

## Cum se măsoară finisajele

- **Pereții**: fiecare porțiune de perete de pe partea încăperii, lungimea ei de-a lungul încăperii înmulțită cu înălțimea acoperită de finisaj, minus partea fiecărei uși și ferestre aflate în această înălțime. Un perete mai jos decât încăperea este finisat până la propria lui înălțime. Metoda de măsurare a proiectului decide care goluri sunt prea mici pentru a fi scăzute ([Tabele centralizatoare](topic:plan-schedules-and-pdf)).
- **Pardoselile și tavanele**: încăperea în interiorul fețelor pereților, minus insulele din ea.
- **Plintele**: lungimea peretelui încăperii, minus lățimea ușilor.
- **Plăcile**: așezate într-o rețea pornind de la un colț al suprafeței, cu un rost între plăci. O placă complet pe suprafață este placă întreagă; o placă parțial pe ea (la margine, în jurul unei deschideri) este placă tăiată. Plăcile de comandat sunt cele întregi plus cele tăiate, plus procentul de pierderi, rotunjite în sus. Fiecare placă tăiată este numărată ca placă nouă: resturile nu se refolosesc.
- **Volumul substratului**: suprafața netă înmulțită cu grosimea substratului.
- O numărătoare marcată **≈** este calculată din suprafață, în loc să fie așezată placă cu placă: o suprafață din care s-a scos o zonă scrisă sau una foarte mare.

## De știut

- Finisajele sunt păstrate în fișierul clădirii (setul de proprietăți `CadCraft_Finishes` al proiectului). Fiecare încăpere care are un finisaj primește și setul standard IFC de proprietăți `Pset_SpaceCoveringRequirements`, ca să le citească numele și alte programe.
- Așezarea plăcilor pornește de la un colț. Nu se calculează o așezare centrată în încăpere, un model (în spic, în zidărie) sau refolosirea resturilor.
- Un perete curb și o limită de încăpere care nu este perete (un separator de încăpere) sunt trecute ca **Altă limită**, cu lungimea lor și fără goluri.
- Intrarea **Finisaje** de dinainte listează straturile de finisaj ale tipurilor de perete; **Straturi: suprafață și volum** listează fiecare strat al fiecărui tip stratificat. Finisajele de încăpere de aici se aplică peste acestea.
- Un asistent poate stabili finisajele cu `finishes_set`: vedeți [Lăsați un asistent AI să lucreze cu modelul](topic:assistants).

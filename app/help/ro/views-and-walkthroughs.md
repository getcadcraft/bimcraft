---
title: Salvarea vizualizărilor și a plimbărilor
summary: Păstrați vizualizările camerei modelului după nume, reveniți la ele, redați-le una după alta și înregistrați o plimbare prin clădire pentru a o reda.
keywords: vizualizări, vizualizări salvate, cameră, camere, punct de vedere, scenă, scene, tur, prezentare, plimbare, plimbare prin, zbor, înregistrare, redare, traseu, animație
from: 3af19a36
---

{{ui:Vizualizări}} de pe bara de instrumente păstrează camerele vizualizării 3D în fișierul modelului, astfel că se poate reveni direct la ele, inclusiv de către cei cărora li se trimite fișierul.

## Salvarea unei vizualizări

1. Pregătiți vizualizarea 3D: orbitați, măriți, ascundeți ce nu doriți.
2. Faceți clic pe {{ui:Vizualizări}}, scrieți un nume (sau păstrați cel propus) și faceți clic pe {{ui:Salvare vizualizare}} sau apăsați {{key:Enter}}.

Salvarea cu un nume deja existent în listă actualizează acea vizualizare. Faceți clic pe numele unei vizualizări ca să reveniți la ea; camera se mută acolo lin.

Săgețile schimbă ordinea, creionul redenumește, coșul șterge. Fiecare modificare este un pas, deci {{key:Ctrl+Z}} o anulează.

## Redarea vizualizărilor

{{ui:Redare vizualizări}} trece de la o vizualizare la următoarea, în ordinea listei, oprindu-se un moment la fiecare. {{key:Esc}} sau {{ui:Oprire}} o încheie.

## Înregistrarea unei plimbări

1. Activați [Plimbare virtuală](topic:walk) și începeți să mergeți în interiorul clădirii.
2. În {{ui:Vizualizări}}, faceți clic pe {{ui:Înregistrare plimbare}}.
3. Mergeți cu {{key:W}} {{key:A}} {{key:S}} {{key:D}} și priviți în jur cu mouse-ul.
4. Faceți clic pe {{ui:Oprire înregistrare}}. Plimbarea este salvată ca „Walk 1”, cu lungimea ei.

Faceți clic pe o plimbare ca s-o redați așa cum ați mers. {{key:Esc}} o oprește.

## Randarea unei plimbări ca video

Faceți clic pe pictograma film de lângă o plimbare. Dialogul de video desenează fiecare cadru al plimbării cu ultimele setări de randare alese, la dimensiunea, rata de cadre și calitatea pe care le alegeți aici. Salvați-l ca video WebM sau MP4, sau ca arhivă ZIP cu o imagine pe cadru. Cadrele durează cât durează imaginile, așa că începeți cu {{ui:Rapid}}.

## Narațiunea unei plimbări

Faceți clic pe pictograma balon de vorbire de lângă o plimbare. Scrieți o linie pentru fiecare lucru spus și începeți o linie cu momentul la care începe (`12`, `0:12` sau `1:02.5`); o linie fără moment urmează linia de deasupra, după timpul necesar să fie rostită. Alegeți limba, în limba clientului dacă acesta este cel care va urmări. {{ui:Previzualizare}} redă cuvintele cu vocea acestui calculator și le arată ca subtitrări; același lucru se întâmplă ori de câte ori se redă plimbarea. {{ui:Salvare împreună cu ghidul}} păstrează narațiunea în IFC, împreună cu plimbarea.

Asistentul propriu conectat poate scrie narațiunea: cereți-i să analizeze plimbarea și vizualizările salvate, iar el așază liniile în limba indicată, ca un singur pas de anulare.

Videoclipul randat nu are sunet propriu, deoarece un browser nu își poate înregistra propria voce. Salvați subtitrările (`.srt` sau `.vtt`) și adăugați-le la video în playerul sau editorul video. Vocile pe care le puteți alege depind de calculator: o limbă fără voce instalată primește totuși subtitrările.

## În fișier

Vizualizările și plimbările sunt păstrate în IFC ca setul de proprietăți `CadCraft_Views` de pe proiect: IFC simplu, pe care alte programe îl ignoră. Sunt în coordonatele primului model, astfel că se potrivesc în continuare după ce modelul este reîncărcat sau după ce se adaugă alt model.

:::tip
Pentru a randa o imagine dintr-o vizualizare salvată, mergeți la vizualizare, apoi faceți clic pe [Randare](topic:render).
:::

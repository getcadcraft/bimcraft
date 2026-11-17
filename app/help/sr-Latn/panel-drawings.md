---
title: Crteži panela u drvetu ili lakom čeličnom profilu
summary: Uokvirite zidove, podove i krovove modela kao panele u drvetu ili lakom čeličnom profilu, pogledajte svaku stojku, dasku, nadvratnik, gredicu i rogljač u razmeri, i sačuvajte listu za sečenje kao CSV, a radioničke crteže kao PDF.
keywords: panel, uokvirivanje, radionički crtež, lista za sečenje, lagani čelik, čelična stojka, LGS, drvo, gredica, rogljač, nadvratnik, zaliha, PDF
from: c09f916e
---

## Otvaranje panela

Izaberite {{ui:Crteži panela}} u meniju {{ui:Verzija}} (ili upišite {{cmd:PANELS}}). Spisak sadrži svaki nacrtani zid, svaki pod i svaki krov modela, svaki sa poljem za potvrdu. Zidovi dolaze sa svojim vratima i prozorima kao otvorima. Pod je uokviren kao pravougaonik oko svog obrisa, sa gredicama koje idu kraćom stranom. Krov je uokviren kao zabat preko obrisa svojih zidova, sa nagibom krova; spisak to navodi, jer valjkast ili složen krov nije zabat.

## Materijal, veličina i razmak

Izaberite {{ui:Materijal}}: **Drvo** ili **Lagani čelik**. Čelični delovi su C-profili nazvani po visini i debljini (na primer C92-1.2), sa šinom za rame. {{ui:Dimenzija elementa}} bira jednu veličinu za svaki označeni panel, ili ostavite na Podrazumevano da biste uzeli podrazumevane vrednosti za svaku vrstu panela. {{ui:Razmak}} je rastojanje između stojki, gredica ili rogljača. Ovo su polazne vrednosti koje vi podešavate. Nisu provera propisa: da li stojka na tom razmaku nosi taj zid, i nadvratnik za taj raspon, stvar je tabela propisa (dodatak Građevinski propisi ima IRC tabele) i vašeg inženjera.

## Šta dobijate

Prvi označeni panel je nacrtan u razmeri u dijalogu, sa merama. {{ui:Lista za sečenje (CSV)}} čuva svaki deo panela po oznaci, dimenziji i dužini, i dužine zaliha koje treba kupiti za njih. {{ui:Radionički crteži (PDF)}} čuva jednu A3 stranicu za svaki panel, sa svakim delom označenim i njegovom listom za sečenje. {{ui:Crtež (SVG)}} čuva prvi panel kao crtež. Sve što kod za uokvirivanje pronađe da ne može da se uokviri (otvor preblizu kraju zida, nadvratnik koji ne staje ispod rama, deo duži od najduže zalihe) navodi se i u Problemima i u dijalogu.

## Šta ne radi

Paneli su crteži napravljeni iz modela kad god zatražite: ništa se ne upisuje u model, pa uvek odgovaraju njemu. Da biste uokvirenje upisali u model kao elemente, koristite {{ui:Konstrukcija}} za zidove, podove i krovove od drveta.

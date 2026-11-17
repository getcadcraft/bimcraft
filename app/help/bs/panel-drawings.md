---
title: Crteži panela od drveta ili lakog čeličnog profila
summary: Uokvirite zidove, podove i krovove modela kao panele od drveta ili lakog čeličnog profila, vidite svaku pragu, rebro, nadvratnik, gredu i rogu u razmjeri, i sačuvajte listu rezanja kao CSV a radioničke crteže kao PDF.
keywords: panel, uokvirivanje, radionički crtež, lista rezanja, lagani čelik, čelični stub, LGS, drvo, greda, roga, nadvratnik, zaliha, PDF
from: c09f916e
---

## Otvaranje panela

Odaberite {{ui:Crteži panela}} u meniju {{ui:Verzija}} (ili ukucajte {{cmd:PANELS}}). Lista sadrži svaki nacrtani zid, svaki pod i svaki krov modela, svaki sa oznakom. Zidovi dolaze sa svojim vratima i prozorima kao otvorima. Pod se uokviruje kao pravougaonik oko svog obrisa, sa gredama koje idu kraćom stranom. Krov se uokviruje kao zabat preko obrisa svojih zidova, sa nagibom krova; lista to kaže, jer valovit ili složen krov nije zabat.

## Materijal, veličina i razmak

Odaberite {{ui:Materijal}}: **Drvo** ili **Lagani čelični profil**. Čelični dijelovi su C-stubovi nazvani po visini i debljini (na primjer C92-1.2), sa šinom za pragove. {{ui:Dimenzija elementa}} bira jednu veličinu za svaki označeni panel, ili ostavite na Podrazumijevano da uzmete podrazumijevane vrijednosti za svaku vrstu panela. {{ui:Razmak}} je rastojanje između stubova, greda ili rogova. To su početne vrijednosti koje podešavate vi. Nisu provjera prema propisu: da li stub na tom razmaku nosi taj zid, i nadvratnik taj raspon, pripada tabelama propisa (dodatak Propisi o gradnji ima IRC) i vašem inženjeru.

## Šta dobijate

Prvi označeni panel se crta u razmjeri u dijalogu, sa kotama. {{ui:Lista rezanja (CSV)}} snima sve dijelove svakog panela po oznaci, veličini i dužini, i dužine zalihe koje treba kupiti za njih. {{ui:Radionički crteži (PDF)}} snima po jednu A3 stranu za svaki panel, sa svakim dijelom označenim i njegovom listom rezanja. {{ui:Crtež (SVG)}} snima prvi panel kao crtež. Sve što okvirni kod ne može uokviriti (otvor preblizu kraju zida, nadvratnik koji ne staje ispod pragova, dio duži od najduže zalihe) navodi se u Problemima kao i u dijalogu.

## Šta ne radi

Paneli su crteži napravljeni iz modela kad god to zatražite: ništa se ne upisuje u model, pa se uvijek slažu s njim. Da biste uokvirenje upisali u model kao elemente, koristite {{ui:Konstrukcija}} za zidove, podove i krovove od drveta.

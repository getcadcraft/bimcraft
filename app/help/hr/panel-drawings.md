---
title: Crteži panela u drvu ili lakom čeliku
summary: Uokvirite zidove, podove i krovove modela kao panele u drvu ili lakom čeliku, pogledajte svaki C-profil, rubnu gredu, nadvoj, stropnu gredu i rog u mjerilu, a popis za rezanje spremite kao CSV, radioničke crteže kao PDF.
keywords: panel, uokvirivanje, radionički crtež, popis za rezanje, lagani čelik, čelični C-profil, LGS, drvo, stropna greda, rog, nadvoj, zaliha, PDF
from: c09f916e
---

## Otvorite panele

Odaberite {{ui:Crteži panela}} u izborniku {{ui:Izgradnja}} (ili upišite {{cmd:PANELS}}). Popis sadrži svaki nacrtani zid, svaki pod i svaki krov modela, svaki s kvačicom. Zidovi dolaze sa svojim vratima i prozorima kao otvorima. Pod je uokviren kao pravokutnik oko svojeg obrisa, sa stropnim gredama koje idu kraćim smjerom. Krov je uokviren kao dvostrešni krov nad obrisom svojih zidova, s nagibom krova; popis to navodi, jer četverostrešni ili složeni krov nije dvostrešni.

## Materijal, veličina i razmak

Odaberite {{ui:Materijal}}: **Drvo** ili **Lagani čelik**. Čelični dijelovi su C-profili nazvani po dubini i debljini (na primjer C92-1.2), s vodilicom za rubne grede. {{ui:Dimenzija elementa}} bira jednu veličinu za svaki označeni panel, ili ostavite na Zadano da uzme zadane vrijednosti svake vrste panela. {{ui:Razmak}} je udaljenost između stupova, stropnih greda ili rogova. To su početne vrijednosti koje sami postavljate. Nisu provjera prema propisima: hoće li stup na tom razmaku nositi taj zid, a nadvoj taj raspon, stvar je tablica iz propisa (dodatak Building regulations ima IRC-ove) i vašeg inženjera.

## Što dobivate

Prvi označeni panel nacrta se u mjerilu u dijaloškom okviru, s kotama. {{ui:Popis za rezanje (CSV)}} sprema sve komade svakog panela po oznaci, veličini i duljini te duljine zaliha koje treba kupiti za njih. {{ui:Radionički crteži (PDF)}} sprema jednu A3 stranicu za svaki panel, sa svakim komadom označenim i njegovim popisom za rezanje. {{ui:Crtež (SVG)}} sprema prvi panel kao crtež. Sve što kod za uokvirivanje ne može uokviriti (otvor preblizu kraju zida, nadvoj koji ne stane ispod rubnih greda, komad duži od najduže zalihe) navodi se među problemima, kao i u dijaloškom okviru.

## Što ne radi

Paneli su crteži napravljeni iz modela kad god to zatražite: ništa se ne upisuje u model, pa se uvijek podudaraju s njim. Da biste uokvirenje upisali u model kao elemente, upotrijebite {{ui:Okvirna konstrukcija}} za drvene zidove, podove i krovove.

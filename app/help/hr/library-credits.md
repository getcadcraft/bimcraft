---
title: Popis zasluga knjižnice i prijava u knjižnicu
summary: Pogledajte svaku stavku knjižnice korištenu u modelu s njezinom licencom i navođenjem autora, kopirajte zasluge ili ih preuzmite sa specifikacijom te se prijavite da vidite stavke svog tima.
keywords: zasluge, navođenje autora, licenca, CC BY, CC0, autorska prava, knjižnica tima, prijava, povezivanje, token, specifikacija opreme, csv
from: 81971658
---

## Što ćete napraviti

Navedite zasluge tamo gdje licenca to traži i dođite do stavki knjižnice svog tima.

## Zasluge knjižnice

1. Otvorite model.
2. Kliknite {{ui:Zasluge}} na alatnoj traci.
3. Pročitajte popis: svaku korištenu stavku, njezinu verziju, licencu, navođenje autora i brojeve stavki na koje je postavljena.
4. Kliknite {{ui:Kopiraj zasluge}} da kopirate retke navođenja autora, ili {{ui:CSV sa specifikacijom}} za tablicu svakog postavljanja s njegovim navođenjem.

Licenca i navođenje autora prikazuju se i u {{ui:Svojstva}} kada odaberete postavljenu stavku, a spremljeni su u IFC (`CadCraft_LibraryItem`), pa putuju s datotekom.

## Specifikacija opreme modela

Kliknite {{ui:Oprema}} na alatnoj traci. Specifikacija se gradi od postavljenih stavki knjižnice: broj stavke, količina, naziv, proizvođač, model, električni i vodovodni podaci, grupirano po etaži. Preuzima se kao isti CSV koji ima i specifikacija crteža.

## Prijava u knjižnicu

1. U kartici {{ui:Knjižnica}} odaberite **Knjižnica**.
2. Kliknite {{ui:Prijava u knjižnicu}}. Otvara se mali prozor na ovoj stranici.
3. Prijavite se ako to traži, zatim kliknite **Poveži**. Prozor programu BimCraft predaje ključ za knjižnicu i možete ga zatvoriti.

## Što biste trebali vidjeti

- „Prijavljeni ste u knjižnicu“ na vrhu popisa knjižnice. Stavke vašeg tima pojavljuju se uz javne.
- Stavke koje postavite bilježe se kao korištene, pa knjižnica može reći kada se promijene.

## Dobro je znati

- Ključ se čuva samo na ovoj kartici i prestaje kada je zatvorite. {{ui:Zaboravi prijavu}} ga odbacuje ranije.
- Stranica sigurnosti vašeg računa navodi ključ kao „BimCraft library (browser)“; opozovite ga tamo.
- Ništa o vašem modelu se ne šalje: samo koje ste stavke knjižnice postavili.

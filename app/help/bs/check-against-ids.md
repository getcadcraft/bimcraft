---
title: Provjeri model prema IDS-u klijenta
summary: Učitaj .ids datoteku koju si dobio i u Problemima pogledaj svaki element koji ne ispunjava zahtjeve, prije nego predaš IFC.
keywords: ids, information delivery specification, buildingsmart, zahtjevi, isporuka, provjera, validacija, qa, eir, bep, svojstvo, klasifikacija, materijal, nabavka
from: 7b960222
---

## Šta ćete uraditi

IDS (Information Delivery Specification, buildingSMART standard) je spisak onoga što IFC mora sadržavati: koje klase, koja svojstva s kojim vrijednostima, klasifikacije, materijali, gdje šta pripada. Klijenti i javne nabavke šalju ga uz posao. BimCraft provjerava otvoreni IFC model prema njemu i navodi svaki element koji ne ispunjava zahtjeve.

## Koraci

1. Otvori IFC model.
2. Otvori {{ui:Check against an IDS}} u lijevom panelu, pod {{ui:Model checks}}, ili odaberi {{ui:Check against IDS…}} iz izbornika u stilu koji koristiš.
3. Klikni {{ui:Load an .ids file…}} i odaberi datoteku. Ništa se ne otprema.
4. Pročitaj rezultat: svaku specifikaciju s {{ui:Pass}} ili {{ui:Fail}} i koliko elemenata se na nju odnosi.
5. Otvori Problemi ({{key:Ctrl+Shift+M}}) i klikni neuspjeh da odabereš element i zumiraš na njega.

## Šta biste trebali vidjeti

- Jedno upozorenje za svaki element i zahtjev koji ne ispunjava, sa nazivom specifikacije, onim što IDS traži i onim što element ima.
- Zahtjevana specifikacija kojoj nijedan dio modela ne odgovara je zasebno upozorenje.
- Izvještaj o provjeri (u Problemima) počinje s IDS-om: njegovim naslovom, verzijom, autorom i brojem primjenjivih, zadovoljenih i nezadovoljenih slučajeva za svaku specifikaciju.

## Dobro je znati

- IFC čuva samo referencu na IDS (naziv, naslov, verziju i hash), a ne sam IDS: IDS klijenta može biti povjerljiv, a IFC ide drugim ljudima. IDS ostaje u ovom pregledniku uz model, pa se pri ponovnom otvaranju sačuvanog IFC-a ovdje ponovo provjerava. Učitavanje ili zaboravljanje IDS-a je jedan korak koji se može poništiti.
- Ako se otvori na drugom računaru ili u drugom pregledniku, Problemi prikazuju napomenu da IDS nije pronađen: učitaj ga ponovo da bi se provjera ponovila.
- Da pošalješ IDS zajedno s IFC-om, uključi {{ui:Keep the IDS inside the IFC}} u Postavkama, na kartici BimCraft, prije nego ga učitaš.
- Svaka izmjena, poništavanje i ponavljanje ponovo se provjerava nakon kratkog trenutka.
- Vrijednosti se upoređuju na način IDS-a: tekst tačno (velika i mala slova se računaju), brojevi u SI jedinicama s malom tolerancijom (dužine u metrima, pa se model u milimetrima prvo pretvara).
- Specifikacija napisana za drugu verziju IFC-a (npr. IFC2X3 kad je model IFC4) se i dalje provjerava; rezultat to navodi.
- Ako IDS datoteka ima greške koje bi IDS revizija označila, dijalog ih navodi; specifikacije u kojima se nalaze ne prolaze.
- Neuspjeh možeš prihvatiti uz razlog, kao i svaki problem. Ostaje prihvaćen dok vrijednosti elementa ostaju iste.

- Obrasci u IDS-u čitaju se kao cijela vrijednost. `^` na početku i `$` na kraju također se uzimaju kao "cijela vrijednost", kako većina IDS datoteka i podrazumijeva.

## Dalje

- [Provjeri model zbog čestih problema](topic:model-checks)
- [Promijeni zid ili vrata](topic:change-a-wall-or-door)

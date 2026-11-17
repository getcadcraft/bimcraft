---
title: Provjera modela prema IDS-u klijenta
summary: Učitajte .ids datoteku koju ste dobili i u Problemima pogledajte svaki element koji ne zadovoljava, prije nego predate IFC.
keywords: ids, information delivery specification, buildingsmart, zahtjevi, predaja, provjera, validacija, qa, eir, bep, svojstvo, klasifikacija, materijal, nabava
from: 7b960222
---

## Što ćete napraviti

IDS (Information Delivery Specification, buildingSMART standard) je popis onoga što IFC mora sadržavati: koje klase, koja svojstva s kojim vrijednostima, klasifikacije, materijali i gdje što pripada. Klijenti i javna nabava uz projekt šalju takav popis. BimCraft provjerava otvoreni IFC model prema njemu i navodi svaki element koji ne ispunjava zahtjeve.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Provjera prema IDS-u}} u lijevoj ploči, pod {{ui:Provjere modela}}, ili odaberite {{ui:Provjeri prema IDS-u…}} iz izbornika prema vašem stilu izbornika.
3. Kliknite {{ui:Učitaj .ids datoteku…}} i odaberite datoteku. Ništa se ne prenosi.
4. Pročitajte rezultat: svaka specifikacija s {{ui:Zadovoljava}} ili {{ui:Ne zadovoljava}} i koliko elemenata se na nju odnosi.
5. Otvorite Problemi ({{key:Ctrl+Shift+M}}) i kliknite stavku koja ne zadovoljava da odaberete element i zumirate na njega.

## Što biste trebali vidjeti

- Jedno upozorenje za svaki element i zahtjev koji ne ispunjava, s nazivom specifikacije, onim što IDS traži i onim što element ima.
- Obvezna specifikacija kojoj nijedan dio modela ne odgovara jedno je upozorenje za sebe.
- Izvješće o provjeri (u Problemima) počinje s IDS-om: njegov naslov, verzija, autor te za svaku specifikaciju broj primjenjivih, zadovoljenih i nezadovoljenih slučajeva.

## Dobro je znati

- IFC čuva samo referencu na IDS (naziv, naslov, verziju i hash), a ne sam IDS: IDS klijenta može biti povjerljiv, a IFC ide i drugim ljudima. IDS ostaje u ovom pregledniku uz model, pa se pri ponovnom otvaranju spremljenog IFC-a ovdje ponovno provjerava. Učitavanje ili zaboravljanje IDS-a jedan je korak koji možete poništiti.
- Otvoreno na drugom računalu ili u drugom pregledniku, Problemi prikazuju napomenu da IDS nije pronađen: učitajte ga ponovno da biste provjerili model.
- Da biste IDS poslali zajedno s IFC-om, uključite {{ui:Čuvaj IDS unutar IFC-a}} u Postavkama, na kartici BimCraft, prije učitavanja.
- Svaka izmjena, poništavanje i ponavljanje ponovno se provjeravaju nakon kratkog vremena.
- Vrijednosti se uspoređuju na način IDS-a: tekst točno (velika i mala slova se razlikuju), brojevi u SI jedinicama uz malo odstupanje (duljine u metrima, pa se model u milimetrima prvo pretvara).
- Specifikacija napisana za drugu verziju IFC-a (npr. IFC2X3 kad je model IFC4) i dalje se provjerava; rezultat to navodi.
- Ako IDS datoteka ima greške koje bi IDS revizija označila, dijaloški okvir ih navodi; specifikacije u kojima se one nalaze ne zadovoljavaju.
- Neispunjenje možete prihvatiti uz razlog, kao i svaki problem. Ostaje prihvaćeno dok vrijednosti elementa ostaju iste.

- Uzorci u IDS-u čitaju se kao cijela vrijednost. `^` na početku i `$` na kraju također se uzimaju kao „cijela vrijednost“, kako većina IDS datoteka i misli.

## Dalje

- [Provjera modela za česte probleme](topic:model-checks)
- [Promjena zida ili vrata](topic:change-a-wall-or-door)

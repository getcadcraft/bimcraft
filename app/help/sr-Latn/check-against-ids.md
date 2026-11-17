---
title: Proveri model prema IDS-u klijenta
summary: Učitaj .ids datoteku koju si dobio i u Problemima pogledaj svaki element koji ne ispunjava zahteve, pre nego što isporučiš IFC.
keywords: ids, information delivery specification, buildingsmart, zahtevi, isporuka, provera, validacija, qa, eir, bep, svojstvo, klasifikacija, materijal, nabavka
from: 7b960222
---

## Šta ćeš uraditi

IDS (Information Delivery Specification, standard buildingSMART) je spisak onoga što IFC mora da sadrži: koje klase, koja svojstva sa kojim vrednostima, klasifikacije, materijali i gde šta pripada. Naručioci i javne nabavke ga šalju uz posao. BimCraft proverava otvoreni IFC model prema njemu i navodi svaki element koji ne ispunjava zahteve.

## Koraci

1. Otvori IFC model.
2. Otvori {{ui:Proveri prema IDS-u}} u levom panelu, pod {{ui:Provere modela}}, ili izaberi {{ui:Proveri prema IDS…}} iz menija, u skladu sa stilom menija koji koristiš.
3. Klikni {{ui:Učitaj .ids datoteku…}} i izaberi datoteku. Ništa se ne otprema.
4. Pročitaj rezultat: svaku specifikaciju sa {{ui:Prolazi}} ili {{ui:Ne prolazi}} i koliko elemenata se na nju odnosi.
5. Otvori Probleme ({{key:Ctrl+Shift+M}}) i klikni neki neuspeh da izabereš element i zumiraš na njega.

## Šta bi trebalo da vidiš

- Jedno upozorenje po elementu i zahtevu koji ne ispunjava, sa imenom specifikacije, onim što IDS traži i onim što element ima.
- Obavezna specifikacija kojoj nijedan deo modela ne odgovara je jedno upozorenje za sebe.
- Izveštaj provere (u Problemima) počinje IDS-om: njegovim naslovom, verzijom, autorom i brojem primenljivih, prošlih i neprošlih elemenata za svaku specifikaciju.

## Dobro je znati

- IFC čuva samo referencu na IDS (njegovo ime, naslov, verziju i heš), a ne sam IDS: IDS klijenta može biti poverljiv, a IFC ide drugim ljudima. IDS ostaje u ovom pregledaču uz model, pa se kad ponovo otvoriš sačuvani IFC ovde, provera ponovo izvodi. Učitavanje ili zaboravljanje IDS-a je jedan korak koji možeš da opozoveš.
- Ako se otvori na drugom računaru ili u drugom pregledaču, Problemi prikazuju napomenu da IDS nije pronađen: učitaj ga ponovo da bi se provera ponovila.
- Da bi poslao IDS uz IFC, uključi {{ui:Čuvaj IDS unutar IFC-a}} u Podešavanjima, na kartici BimCraft, pre nego što ga učitaš.
- Svaka izmena, opoziv i ponavljanje ponovo se proveravaju malo kasnije.
- Vrednosti se porede na način IDS-a: tekst tačno (velika i mala slova se razlikuju), brojevi u SI jedinicama uz malu toleranciju (dužine u metrima, pa se model u milimetrima prvo preračunava).
- Specifikacija napisana za drugu verziju IFC-a (na primer IFC2X3 kad je model IFC4) i dalje se proverava; rezultat to kaže.
- Ako IDS datoteka ima greške koje bi revizija IDS-a označila, dijalog ih navodi; specifikacije u kojima su te greške ne prolaze.
- Neprolazak možeš da prihvatiš uz razlog, kao i svaki problem. Ostaje prihvaćen dok vrednosti elementa ostaju iste.

- Obrasci u IDS-u čitaju se kao cela vrednost. `^` na početku i `$` na kraju takođe se uzimaju kao „cela vrednost“, kao što većina IDS datoteka to i misli.

## Dalje

- [Proveri model zbog čestih problema](topic:model-checks)
- [Promeni zid ili vrata](topic:change-a-wall-or-door)

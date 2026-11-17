---
title: "Zadane politike: odredite s čim počinje nova zgrada"
summary: Jednom odredite koji tip zida, razine, prvi list, LOD oznake, jedinice i alat počinje nova zgrada, za metričke i za imperijalne projekte, te dijelite politike u uredu kao malu datoteku.
keywords: zadano, zadane vrijednosti, zadane politike, politika, standard ureda, zadane vrijednosti ureda, predložak, nova zgrada, prvi tip zida, metrički zid, zidanje, LOD, razina razvoja, prvi list, papir, mjerilo, razine, visina etaže, nazivi razina, alat za zid, jedinice, dijeljenje, izvoz, uvoz, json
from: 42379aa5
---

## Što ćete napraviti

Recite BimCraft-u s čim nova zgrada treba početi, da nitko u uredu ne mora mijenjati iste stvari svaki put. Ovo je dodatak: isključen je dok ga ne uključite, a politika koju ne postavite ostavlja BimCraft-ov vlastiti zadani način točno kakav jest.

:::note
Ovo su zadane vrijednosti za **nove** zgrade i **nove** stvari. Projekt koji ste već započeli se ne mijenja.
:::

## Koraci

1. Otvorite Postavke, idite na {{ui:Dodaci}} i uključite {{ui:Zadane politike}}.
2. U Postavkama otvorite karticu **BimCraft** i odaberite {{ui:Zadane politike}} na popisu lijevo.
3. Postavite politike koje želite. Svaka počinje na **BimCraft-ovoj vlastitoj** vrijednosti, s onim što je ona u zagradi. Politika s okvirima **Metrički** i **Imperijalni** uzima jednu vrijednost za svaku vrstu projekta; ispunite samo one koje trebate.
4. Ne postoji gumb Spremi: svaka promjena sprema se čim je napravite. Vrijednost koja se ne može upotrijebiti odbija se riječima i stara ostaje.
5. Kliknite {{ui:Nova zgrada}}. Dijaloški okvir ispunjen je prema vašim politikama, a uz svaku vrijednost koju je politika postavila piše **iz vaših zadanih politika**. I dalje možete promijeniti bilo koju prije {{ui:Izradi}}.

## Politike

- **Jedinice nove zgrade**: jedinice se pri izradi prebacuju na ovu.
- **Broj razina**, **Nazivi razina** i **Visina razine**. U nazivu `{n}` broji 1, 2, 3; `{n0}` broji 0, 1, 2; `{nn}` i `{nn0}` isto tako s dvije znamenke. Dakle `Etaža {nn0}` daje Etaža 00, Etaža 01, Etaža 02.
- **Prvi tip zida**: što alat Zid prvo nacrta. Metrički ured može početi s Vanjski zid od opeke 300 mm, dok imperijalni projekti zadržavaju Vanjski 2×6.
- **Oznaka LOD na početnim tipovima zidova**: razina razvoja (LOD 100 do 500) koju devet početnih tipova prikazuje gdje god se tip navede. Vidi [Izrada sklopova zidova](topic:wall-assemblies).
- **LOD novootvorenog tipa zida**: oznaka s kojom novi tip počinje u uređivaču tipova. Možete je promijeniti tamo.
- **Prvi list**: njegov papir, mjerilo, broj lista i naziv (upotrijebite `{level}` za naziv najniže razine), ili uopće nema prvog lista.
- **Veličine anotacija na papiru** (Postavke › Općenito › Zadane politike): visine ureda, u milimetrima kako se ispisuju, za bilješke, tekst kota, oznake, nazive prostorija, slova mjehurića mreže, naslove pogleda i tekst specifikacija. Nova zgrada ih preuzima pri izradi i čuva ih u svojoj datoteci. Vidi [Crtajte u punoj veličini, anotirajte prema mjerilu](topic:annotation-sizes).
- **Alat aktivan nakon izrade**: Odaberi, kao što BimCraft radi sam, ili Zid, pa prva dva klika na tlocrtu već crtaju zid.

## Raspored specifikacija: standard ureda

U **Postavke › Općenito › Zadane politike**, pod **Raspored specifikacija (standard ureda)**, odredite kako je svaka specifikacija grupirana, ima li međuzbrojeve i ukupno, njezin naslov i pisanje velikih i malih slova u naslovima stupaca. Svaka specifikacija koja ne navodi svoje preuzima ih, tko god je postavio. Vidi [Složite, spremite i izvezite specifikaciju](topic:schedule-layouts).

## Dijelite ih u uredu

1. U Postavkama otvorite karticu **Općenito** i odaberite {{ui:Zadane politike}}.
2. Upišite **Naziv ureda** ako želite. Upisuje se u datoteku.
3. Kliknite {{ui:Spremi u datoteku}}. Dobivate malu datoteku koja završava s `.ccdefaults.json`.
4. Na drugom računalu uključite dodatak, otvorite isto mjesto i kliknite {{ui:Učitaj iz datoteke}}. Politike iz datoteke zamjenjuju one na tom računalu.

Kartica Općenito također ima **Sustav jedinica novog projekta**, koji vrijedi za svaku aplikaciju koja ima dodatak, i {{ui:Vrati sve politike}}. {{ui:Vrati BimCraft-ove zadane vrijednosti}} na kartici BimCraft briše samo one BimCraft-ove.

## Dobro je znati

- Datoteka je običan, otvoren JSON: popis naziva politika i vrijednosti. Politika koju datoteka navodi, a ova verzija ne poznaje, ispušta se i navodi u poruci; ostale se učitavaju.
- Politike se čuvaju u ovom pregledniku, za svaku CadCraft aplikaciju na ovom računalu. Ne spremaju se u datoteku zgrade i ne sinkroniziraju se među računalima: koristite datoteku.
- Oznaka LOD početnog tipa dolazi iz politike na ovom računalu. Tip koji napravite kao kopiju početnog nosi svoju oznaku u datoteci zgrade.
- BimCraft nema postavku preciznosti, pa ovdje nema politike preciznosti.
- Zgrada započeta iz predloška donosi vlastite razine i listove predloška. Politika tipa zida i politika jedinica i dalje vrijede.
- Isključite dodatak i sve je opet BimCraft-ovo vlastito. Vaše politike se čuvaju za kad ga ponovno uključite.

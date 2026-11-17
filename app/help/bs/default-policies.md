---
title: "Zadane politike: postavi s čim počinje nova zgrada"
summary: Jednom kaži koji tip zida, nivoi, prvi list, LOD oznake, jedinice i alat nova zgrada počinje, za metričke i za imperijalne projekte, i dijeli politike u kancelariji kao mali fajl.
keywords: zadano, zadane, zadane politike, politika, kancelarijski standard, kancelarijske zadane vrijednosti, šablon, nova zgrada, prvi tip zida, metrički zid, zidarija, LOD, nivo razvoja, prvi list, papir, razmjera, nivoi, visina sprata, nazivi nivoa, alat za zid, jedinice, dijeljenje, izvoz, uvoz, json
from: 42379aa5
---

## Šta ćete uraditi

Recite BimCraft-u s čim nova zgrada treba da počne, da niko u kancelariji ne mijenja iste stvari svaki put. Ovo je dodatak: isključen je dok ga ne uključite, a politika koju ne postavite ostaje BimCraftova vlastita zadana vrijednost kakva je.

:::note
Ovo su zadane vrijednosti za **nove** zgrade i **nove** stvari. Projekat koji ste već započeli se ne mijenja.
:::

## Koraci

1. Otvori Postavke, idi na {{ui:Dodaci}} i uključi {{ui:Zadane politike}}.
2. U Postavkama otvori karticu **BimCraft** i odaberi {{ui:Zadane politike}} na listi lijevo.
3. Postavi politike koje želiš. Svaka počinje na **BimCraftovoj vlastitoj**, s onim što to jeste u zagradama. Politika s poljem **Metrički** i **Imperijalni** uzima jednu vrijednost za svaku vrstu projekta; popuni samo one koje trebaš.
4. Nema dugmeta Spasi: svaka promjena se sprema čim je napraviš. Vrijednost koja se ne može koristiti odbija se riječima, a stara ostaje.
5. Klikni {{ui:Nova zgrada}}. Dijalog se popunjava iz tvojih politika, i uz svaku vrijednost koju politika postavlja piše **iz tvojih Zadanih politika**. I dalje možeš promijeniti bilo koju prije {{ui:Kreiraj}}.

## Politike

- **Jedinice nove zgrade**: jedinice se prebacuju na ovo pri kreiranju.
- **Broj nivoa**, **Nazivi nivoa** i **Visina nivoa**. U nazivu, `{n}` broji 1, 2, 3; `{n0}` broji 0, 1, 2; `{nn}` i `{nn0}` rade isto s dvije cifre. Dakle `Sprat {nn0}` daje Sprat 00, Sprat 01, Sprat 02.
- **Prvi tip zida**: ono što alat Zid prvo crta. Metrička kancelarija može početi s Vanjska zidarija 300 mm, dok imperijalni projekti zadržavaju Vanjski 2×6.
- **LOD oznaka na početnim tipovima zidova**: nivo razvoja (LOD 100 do 500) koji devet početnih tipova pokazuje gdje god je tip naveden. Pogledajte [Izgradnja sklopova zidova](topic:wall-assemblies).
- **LOD novog tipa zida**: oznaka s kojom novi tip počinje u uređivaču tipa. Možete je promijeniti tamo.
- **Prvi list**: njegov papir, razmjera, broj lista i naziv (koristite `{level}` za naziv najnižeg nivoa), ili nema prvog lista uopšte.
- **Veličine anotacija na papiru** (Postavke › Global › Zadane politike): visine kancelarije, u milimetrima kako se štampaju, za napomene, tekst kota, oznake, nazive prostorija, slova mrežnih balona, naslove pogleda i tekst specifikacije. Nova zgrada ih preuzima pri kreiranju i čuva ih u svom fajlu. Pogledajte [Crtanje u punoj veličini, anotiranje po razmjeri](topic:annotation-sizes).
- **Alat koji je aktivan nakon kreiranja**: {{ui:Odaberi}}, kao što BimCraft sam radi, ili Zid, pa prva dva klika na planu već crtaju zid.

## Raspored specifikacija: kancelarijski standard

U **Postavke › Global › Zadane politike**, pod **Raspored specifikacije (kancelarijski standard)**, postavi kako je svaka specifikacija grupisana, da li ima međuzbirove i ukupno, njen naslov i velika i mala slova u zaglavljima kolona. Svaka specifikacija koja ne navodi svoje preuzima ih, ko god je postavio. Pogledajte [Rasporedi, čuvanje i izvoz specifikacije](topic:schedule-layouts).

## Podijeli ih u kancelariji

1. U Postavkama otvori karticu **Global** i odaberi {{ui:Zadane politike}}.
2. Upiši **Naziv kancelarije** ako želiš. Upisuje se u fajl.
3. Klikni {{ui:Spasi u datoteku}}. Dobijaš mali fajl koji se završava na `.ccdefaults.json`.
4. Na drugom računaru uključi dodatak, otvori isto mjesto i klikni {{ui:Učitaj iz datoteke}}. Politike iz fajla zamjenjuju one na tom računaru.

Karticu Global ima i **Sistem jedinica novog projekta**, koji važi za svaku aplikaciju koja ima dodatak, i {{ui:Vrati sve politike na zadano}}. {{ui:Vrati BimCraftove zadane vrijednosti}} na kartici BimCraft briše samo BimCraftove.

## Dobro je znati

- Fajl je običan, otvoren JSON: spisak naziva politika i vrijednosti. Politika koju fajl navodi, a koju ova verzija ne poznaje, izostavlja se i imenuje se u poruci; ostale se učitavaju.
- Politike se čuvaju u ovom pregledaču, za svaku CadCraft aplikaciju na ovom računaru. Ne čuvaju se u fajlu zgrade i ne sinhronizuju se između računara: koristite fajl.
- LOD oznaka početnog tipa dolazi iz politike na ovom računaru. Tip koji napraviš kao kopiju početnog nosi svoju oznaku u fajlu zgrade.
- BimCraft nema postavku preciznosti, pa ovdje nema politike preciznosti.
- Zgrada započeta iz šablona donosi nivoe i listove šablona. Politika tipa zida i politika jedinica i dalje važe.
- Isključi dodatak i sve je opet BimCraftovo vlastito. Tvoje politike se čuvaju za kad ga ponovo uključiš.

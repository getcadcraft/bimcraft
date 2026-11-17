---
title: "Podrazumevane politike: odredite čime počinje nova zgrada"
summary: Jednom kažite koji tip zida, spratove, prvi list, LOD oznake, jedinice i alat počinje nova zgrada, za metričke i za imperijalne projekte, i delite politike u kancelariji kao malu datoteku.
keywords: podrazumevano, podrazumevane politike, politika, standard kancelarije, podrazumevano u kancelariji, šablon, nova zgrada, prvi tip zida, metrički, zidanje, LOD, nivo razrade, prvi list, papir, razmera, nivoi, visina sprata, nazivi nivoa, alat za zid, jedinice, deljenje, izvoz, uvoz, json
from: 42379aa5
---

## Šta ćete uraditi

Recite BimCraft-u čime nova zgrada treba da počne, da niko u kancelariji ne menja iste stvari svaki put. Ovo je dodatak: isključen je dok ga ne uključite, a politika koju ne postavite ostavlja BimCraft-ovu sopstvenu podrazumevanu vrednost onakvu kakva jeste.

:::note
Ovo su podrazumevane vrednosti za **nove** zgrade i **nove** stvari. Projekat koji ste već počeli se ne menja.
:::

## Koraci

1. Otvorite Podešavanja, idite na {{ui:Dodaci}} i uključite {{ui:Podrazumevane politike}}.
2. U Podešavanjima otvorite karticu **BimCraft** i izaberite **Podrazumevane politike** na listi levo.
3. Postavite politike koje želite. Svaka počinje na **BimCraft-ovoj sopstvenoj** vrednosti, sa onim što ona jeste u zagradama. Politika sa poljima **Metrički** i **Imperijalni** uzima jednu vrednost za svaku vrstu projekta; popunite samo one koje su vam potrebne.
4. Dugme za čuvanje ne postoji: svaka promena se čuva čim je napravite. Vrednost koja se ne može koristiti biva odbijena uz objašnjenje rečima, a stara ostaje.
5. Kliknite {{ui:Nova zgrada}}. Dijalog se popunjava iz vaših politika, a uz svaku vrednost koju je politika postavila piše **iz vaših Podrazumevanih politika**. I dalje možete promeniti bilo koju pre {{ui:Napravi}}.

## Politike

- **Jedinice nove zgrade**: jedinice se prebacuju na ovo pri Napravi.
- **Broj nivoa**, **Nazivi nivoa** i **Visina nivoa**. U nazivu, `{n}` broji 1, 2, 3; `{n0}` broji 0, 1, 2; `{nn}` i `{nn0}` rade isto sa dve cifre. Tako `Sprat {nn0}` daje Sprat 00, Sprat 01, Sprat 02.
- **Prvi tip zida**: ono što alat Zid prvo crta. Metrička kancelarija može početi sa Spoljnim zidanjem 300 mm, dok imperijalni projekti zadržavaju Spoljni 2×6.
- **LOD oznaka na početnim tipovima zidova**: nivo razrade (LOD 100 do 500) koji devet početnih tipova pokazuje gde god se tip navodi. Pogledajte [Izgradnja sklopova zidova](topic:wall-assemblies).
- **LOD novog tipa zida**: oznaka sa kojom novi tip počinje u uređivaču tipa. Možete je promeniti tamo.
- **Prvi list**: njegov papir, razmera, broj lista i ime (koristite `{level}` za ime najnižeg nivoa), ili uopšte bez prvog lista.
- **Veličine oznaka na papiru** (Podešavanja › Opšte › Podrazumevane politike): visine kancelarije, u milimetrima kako se štampaju, za napomene, tekst kota, oznake, nazive prostorija, slova mrežnih balona, naslove pogleda i tekst specifikacija. Nova zgrada ih preuzima pri Napravi i čuva ih u svojoj datoteci. Pogledajte [Crtanje u punoj veličini, označavanje po razmeri](topic:annotation-sizes).
- **Alat koji je aktivan posle Napravi**: Izaberi, kao što BimCraft radi sam od sebe, ili Zid, pa prva dva klika na planu već crtaju zid.

## Raspored specifikacije: standard kancelarije

U **Podešavanja › Opšte › Podrazumevane politike**, pod **Raspored specifikacije (standard kancelarije)**, postavite kako je svaka specifikacija grupisana, da li ima međuzbirove i ukupan zbir, njen naslov i veličinu slova zaglavlja kolona. Svaka specifikacija koja ne navodi svoje preuzima ih, ko god je napravio. Pogledajte [Rasporedite, sačuvajte i izvezite specifikaciju](topic:schedule-layouts).

## Podelite ih u kancelariji

1. U Podešavanjima otvorite karticu **Opšte** i izaberite {{ui:Podrazumevane politike}}.
2. Upišite **Naziv kancelarije** ako želite. Upisuje se u datoteku.
3. Kliknite {{ui:Sačuvaj u datoteku}}. Dobijate malu datoteku koja se završava na `.ccdefaults.json`.
4. Na drugom računaru uključite dodatak, otvorite isto mesto i kliknite {{ui:Učitaj iz datoteke}}. Politike iz datoteke zamenjuju one na tom računaru.

Kartica **Opšte** takođe ima **Sistem jedinica novog projekta**, koji važi za svaku aplikaciju koja ima dodatak, i {{ui:Vrati svaku politiku}}. {{ui:Vrati na BimCraft-ove podrazumevane vrednosti}} na kartici BimCraft briše samo one BimCraft-ove.

## Dobro je znati

- Datoteka je običan, otvoren JSON: spisak imena politika i vrednosti. Politika koju datoteka navodi, a koju ova verzija ne poznaje, biva izostavljena i imenovana u poruci; ostale se učitavaju.
- Politike se čuvaju u ovom pregledaču, za svaku CadCraft aplikaciju na ovom računaru. Ne čuvaju se u datoteci zgrade i ne sinhronizuju se između računara: koristite datoteku.
- LOD oznaka na početnom tipu dolazi iz politike na ovom računaru. Tip koji napravite kao kopiju početnog nosi svoju oznaku u datoteci zgrade.
- BimCraft nema podešavanje tačnosti, pa ovde nema politike tačnosti.
- Zgrada započeta iz šablona donosi sopstvene nivoe i listove šablona. Politika tipa zida i politika jedinica i dalje važe.
- Isključite dodatak i sve je opet BimCraft-ovo sopstveno. Vaše politike se čuvaju za kada ga ponovo uključite.

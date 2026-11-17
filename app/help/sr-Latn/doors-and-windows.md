---
title: Vrata i prozori
summary: Postavite vrata i prozore u nacrtane zidove: pokažite na zid, vidite smer otvaranja i udaljenosti do uglova, kliknite; otvor u zidu se sam iseče.
keywords: vrata, prozor, otvor, otvaranje, šarka, smer, obrtanje, klizna vrata, džepna vrata, garažna vrata, dvokrilna vrata, krilni prozor, jednostruko vešanje, dvostruko vešanje, klizač, fiksni prozor, parapet, nadvoj, sklopiva vrata, ormarska vrata, francuska vrata, vrata od štale, bočna svetla, ulazna vrata, markiza, panoramski prozor, nadsvetlo
from: 4d8ac009
---

## Šta ćete uraditi

Postavite vrata i prozore u zidove koje ste nacrtali ([Crtanje zidova](topic:draw-walls)). Pokažite na zid i vrata ili prozor pokazuje gde bi išli, na koju stranu se otvaraju i koliko su udaljeni od svakog ugla. Kliknite, i otvor se sam iseče iz zida u planu i u 3D.

## Postavite vrata

1. Sa uključenim {{ui:Crtanje}}, kliknite {{ui:Vrata}} (ili pritisnite {{key:D}}).
2. Izaberite tip: **Jednokrilna vrata**, **Dvokrilna vrata**, **Klizna vrata**, **Džepna vrata**, **Garažna vrata**, **Sklopiva ormarska vrata**, **Francuska vrata**, **Vrata od štale (na zidu)** ili **Ulazna vrata sa bočnim svetlima**. Njegova uobičajena veličina popunjava **W** i **H**; izaberite drugu sa liste veličina pored, ili upišite druge, na primer `2'-8"` ili `800`. Lista nudi i familije vrata ovog modela (pogledajte [Familije i njihove veličine](topic:families)).
3. Pokažite na zid. Simbol vrata prati pokazivač duž zida, a udaljenost od svakog kraja te strane zida pokazuje se u planu.
4. Vrata se otvaraju na stranu zida na kojoj je pokazivač. Pritisnite {{key:H}} (ili kliknite {{ui:Obrni}}) da šarke stave na drugi kraj.
5. Kliknite. Vrata su postavljena i alat ostaje uključen za sledeća. Pokažite na sredinu zida i vrata se sama centriraju.

Da ih postavite na tačnu udaljenost, pokažite na zid blizu ugla od kojeg merite, upišite udaljenost (na primer `2'` ili `600`) i pritisnite {{key:Enter}}. Udaljenost ide od bližeg kraja strane zida do ivice vrata.

## Postavite prozor

1. Kliknite {{ui:Prozor}} (ili pritisnite {{key:N}}).
2. Izaberite tip: **Fiksni prozor**, **Jednostruko vešani prozor**, **Dvostruko vešani prozor**, **Krilni prozor**, **Klizni prozor**, **Markiza**, **Panoramski prozor** ili **Nadsvetlo**, i njegove **W**, **H** i **Parapet** (visina donje ivice prozora iznad poda).
3. Pokažite na zid i kliknite, ili upišite udaljenost i pritisnite {{key:Enter}} kao kod vrata. Prozor sedi na spoljnoj strani zida.

## Pomerite, obrnite, izbrišite

- Sa uključenim {{ui:Izaberi}}, prevucite vrata ili prozor duž njegovog zida. Prevucite ga na drugi zid da ga premestite tamo.
- {{key:Delete}} briše izabrana vrata i prozore; zid se zatvara.
- Pomeranje ili brisanje zida pomera ili briše ono što je u njemu. Kada se početak zida pomeri duž sopstvene linije, njegova vrata i prozori zadržavaju mesto.
- {{ui:Opozovi}} i {{ui:Ponovi}} vraćaju i ponavljaju svako postavljanje, pomeranje ili brisanje.

## Šta se odbija

- **Ne staje u taj zid.** Vrata ili prozor su širi od zida ili bi virili s njegovog kraja. Probajte kraću širinu ili duži zid.
- **Viši je od zida.** Parapet plus visina je iznad vrha zida.

## Šta se čuva

Svaka vrata ili prozor su IFC vrata ili prozor sa svojom veličinom, načinom otvaranja (na primer jednostruko otvaranje levo), svojim tipom veličine (jedan tip za svaku veličinu svoje familije), `Pset_DoorCommon` ili `Pset_WindowCommon` i osnovnim količinama, a popunjavaju IFC otvor u svom zidu. Neto bočna površina zida i zapremina zida ne računaju otvor. Drugi BIM programi ih otvaraju kao vrata u zidu.

## Dobro je znati

- Plan prikazuje vrata otvorena pod 90° sa njihovim smerom otvaranja, klizna vrata kao dva krila, džepna vrata kako klize u zid, garažna vrata kao isprekidanu liniju iznad, a prozore sa njihovim okvirom i linijama stakla.
- Širina je ukupna širina okvira; krilo vrata je širina umanjena za dve bočne strane okvira.
- Kopiranje nacrtanih vrata i prozora još nije napravljeno: postavite još jedna.

## Podrumski prozor za izlaz u slučaju opasnosti i jama

Izaberite **Podrumski izlaz u slučaju opasnosti sa jamom** na listi tipova prozora. Počinje kao krilni prozor 36 × 48 inch sa parapetom 36 inch iznad nivoa. Jama je na spoljnoj strani zida, sa najmanje 48 inch slobodne širine, 36 inch isturanja i dnom 6 inch ispod parapeta. Pojavljuje se kao isprekidane linije u planu i kao tri strane otvorene odozgo u 3D. Jama je deo IFC tela prozora, pa čuvanje, pomeranje, promena veličine ili brisanje prozora nose i nju. Promena veličine zadržava najmanje 6 inch uz svaku bočnu stranu okvira.

Ovo su podrazumevane vrednosti za modelovanje, a ne potvrda usklađenosti sa propisom o izlazu. Stvarni slobodni otvor proizvođača, lokalne zahteve, teren, odvođenje vode i potrebnu lestvu sami proverite. Dubina i visina jame su unapred zadate dimenzije; ne prate teren.

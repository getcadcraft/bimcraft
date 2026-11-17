---
title: Vrata i prozori
summary: Postavite vrata i prozore u nacrtane zidove: pokažite na zid, vidite smjer otvaranja i udaljenosti od kutova, kliknite; otvor u zidu sam se izreže.
keywords: vrata, prozor, prozori, otvor, otvaranje, šarka, smjer, okreni, klizna vrata, vrata u zid, garažna vrata, dvokrilna vrata, krilni prozor, jednostruko viseći prozor, dvostruko viseći prozor, klizač, fiksni prozor, parapet, nadvoj, sklopiva vrata, vrata ormara, francuska vrata, šupna vrata, bočna stakla, ulazna vrata, ventilacijski prozor, panoramski prozor, nadsvjetlo
from: 4d8ac009
---

## Što ćete napraviti

Postavite vrata i prozore u zidove koje ste nacrtali ([Crtanje zidova](topic:draw-walls)). Pokažite na zid i vrata ili prozor pokazuju gdje bi išli, u koju stranu se otvaraju i koliko su udaljeni od svakog kuta. Kliknite, i otvor se sam izreže iz zida na tlocrtu i u 3D-u.

## Postavite vrata

1. Uz uključeno {{ui:Crtanje}}, kliknite {{ui:Vrata}} (ili pritisnite {{key:D}}).
2. Odaberite vrstu: **Jednokrilna vrata**, **Dvokrilna vrata**, **Klizna vrata**, **Vrata klizna u zid**, **Garažna vrata**, **Sklopiva vrata ormara**, **Francuska vrata**, **Šupna vrata na zidu** ili **Ulazna vrata s bočnim staklima**. Uobičajena veličina popunjava **W** i **H**; odaberite drugu s popisa veličina pokraj, ili upišite druge, na primjer `2'-8"` ili `800`. Popis nudi i obitelji vrata ovog modela (vidi [Obitelji i njihove veličine](topic:families)).
3. Pokažite na zid. Simbol vrata prati pokazivač duž zida, a udaljenost od svakog kraja te plohe zida pokazuje se na tlocrtu.
4. Vrata se otvaraju na stranu zida na kojoj je pokazivač. Pritisnite {{key:H}} (ili kliknite {{ui:Obrni}}) da šarke stavite na drugi kraj.
5. Kliknite. Vrata su postavljena i alat ostaje uključen za sljedeća. Pokažite na sredinu zida i vrata se sama centriraju.

Da postavite na točnu udaljenost, pokažite na zid blizu kuta od kojeg mjerite, upišite udaljenost (na primjer `2'` ili `600`) i pritisnite {{key:Enter}}. Udaljenost ide od bliže krajnje točke plohe zida do ruba vrata.

## Postavite prozor

1. Kliknite {{ui:Prozor}} (ili pritisnite {{key:N}}).
2. Odaberite vrstu: **Fiksni prozor**, **Jednostruko vertikalno klizni prozor**, **Dvostruko vertikalno klizni prozor**, **Krilni prozor**, **Klizni prozor**, **Ventilacijski prozor**, **Panoramski prozor** ili **Nadsvjetlo**, te njegove **W**, **H** i **Parapet** (visinu donjeg ruba prozora iznad poda).
3. Pokažite na zid i kliknite, ili upišite udaljenost i pritisnite {{key:Enter}} kao kod vrata. Prozor sjedi na vanjskoj strani zida.

## Pomaknite, okrenite, izbrišite

- Uz uključeno {{ui:Odaberi}}, povucite vrata ili prozor duž zida. Povucite ga na drugi zid da ga tamo premjestite.
- {{key:Delete}} briše odabrana vrata i prozore; zid se zatvara.
- Pomicanje ili brisanje zida pomiče ili briše ono što je u njemu. Kad se početak zida pomakne duž vlastite linije, njegova vrata i prozori zadržavaju svoje mjesto.
- {{ui:Poništi}} i {{ui:Ponovi}} vraćaju i ponovno vraćaju svako postavljanje, pomicanje ili brisanje.

## Što se odbija

- **Ne stane u taj zid.** Vrata ili prozor su širi od zida ili bi virili s njegova kraja. Pokušajte kraću širinu ili duži zid.
- **Viši je od zida.** Parapet plus visina je iznad vrha zida.

## Što se sprema

Svaka vrata ili prozor je IFC vrata ili prozor sa svojom veličinom, načinom rada (na primjer jednokrilna lijeva), svojim tipom veličine (jedan tip za svaku veličinu svoje obitelji), `Pset_DoorCommon` ili `Pset_WindowCommon` i osnovnim količinama, i popunjava IFC otvor u svom zidu. Neto površina strane zida i volumen zida ne uključuju otvor. Drugi BIM programi ga otvaraju kao vrata u zidu.

## Dobro je znati

- Tlocrt prikazuje vrata otvorena pod 90° s njihovim smjerom otvaranja, klizna vrata kao dva krila, vrata klizna u zid kako klize u zid, garažna vrata kao crtkanu liniju iznad glave, a prozore s njihovim okvirom i linijama stakla.
- Širina je ukupna širina okvira; krilo vrata je širina umanjena za dva štoka.
- Kopiranje nacrtanih vrata i prozora još nije izrađeno: postavite drugi.

## Podrumski prozor za izlaz s oknom

Odaberite **Podrumski prozor za izlaz s oknom** na popisu vrsta prozora. Počinje kao krilni prozor 36 × 48 in s parapetom 36 in iznad razine. Okno je na vanjskoj strani zida, s najmanje 48 in slobodne širine, 36 in istaka i dnom 6 in ispod parapeta. Pojavljuje se kao crtkane linije u tlocrtu i kao tri strane otvorene odozgo u 3D-u. Okno je dio IFC tijela prozora, pa spremanje, pomicanje, mijenjanje veličine ili brisanje prozora nosi i njega. Promjena veličine čuva najmanje 6 in uz svaki štok.

Ovo su zadane vrijednosti modeliranja, a ne potvrda usklađenosti izlaza. Sami provjerite stvarni slobodni otvor proizvođača, lokalne zahtjeve, teren, odvodnju i sve potrebne ljestve. Dubina i visina okna su unaprijed postavljene mjere; ne prate teren.

---
title: Vrata i prozori
summary: Postavi vrata i prozore u nacrtane zidove: pokaži na zid, vidi smjer otvaranja i udaljenosti do ćoškova, klikni; otvor u zidu se sam isječe.
keywords: vrata, prozor, prozori, otvor, smjer otvaranja, šarka, strana, okreni, klizna vrata, džepna vrata, garažna vrata, dvokrilna vrata, krilni prozor, jednostruko vješani prozor, dvostruko vješani prozor, klizač, fiksni prozor, parapet, nadvratnik, sklopiva vrata, ormarska vrata, francuska vrata, šupna vrata, bočna svjetla, ulazna vrata, kapak, izložbeni prozor, nadsvjetlo
from: 4d8ac009
---

## Šta ćete uraditi

Postavite vrata i prozore u zidove koje ste nacrtali ([Crtanje zidova](topic:draw-walls)). Pokažite na zid i vrata ili prozor pokazuje gdje bi išli, u kom smjeru se otvaraju i koliko su daleko od svakog ćoška. Kliknite, i otvor se sam isječe iz zida na planu i u 3D.

## Postavi vrata

1. Uz uključeno {{ui:Crtanje}}, klikni {{ui:Vrata}} (ili pritisni {{key:D}}).
2. Izaberi tip: **Jednokrilna vrata**, **Dvokrilna vrata**, **Klizna vrata**, **Džepna vrata**, **Garažna vrata**, **Sklopiva ormarska vrata**, **Francuska vrata**, **Šupna vrata (na zid)** ili **Ulazna vrata s bočnim svjetlima**. Njegova uobičajena veličina popunjava **W** i **H**; izaberi drugu s liste veličina pored, ili upiši druge, na primjer `2'-8"` ili `800`. Lista nudi i familije vrata ovog modela (pogledajte [Familije i njihove veličine](topic:families)).
3. Pokaži na zid. Simbol vrata prati pokazivač duž zida, a udaljenost od svakog kraja te strane zida prikazuje se na planu.
4. Vrata se okreću na stranu zida na kojoj je pokazivač. Pritisni {{key:H}} (ili klikni {{ui:Okreni}}) da šarke stave na drugi kraj.
5. Klikni. Vrata su postavljena i alat ostaje uključen za sljedeća. Pokaži na sredinu zida i vrata se sama centriraju.

Da postavite na tačnu udaljenost, pokažite na zid blizu ćoška od kojeg mjerite, upišite udaljenost (na primjer `2'` ili `600`) i pritisnite {{key:Enter}}. Udaljenost se mjeri od bližeg kraja strane zida do ivice vrata.

## Postavi prozor

1. Klikni {{ui:Prozor}} (ili pritisni {{key:N}}).
2. Izaberi tip: **Fiksni prozor**, **Jednostruko vješani prozor**, **Dvostruko vješani prozor**, **Krilni prozor**, **Klizni prozor**, **Kapak**, **Izložbeni prozor** ili **Nadsvjetlo**, i njegove **W**, **H** i **Parapet** (visinu donje ivice prozora iznad poda).
3. Pokaži na zid i klikni, ili upiši udaljenost i pritisni {{key:Enter}} kao kod vrata. Prozor sjedi na vanjskoj strani zida.

## Pomjeri, okreni, obriši

- Uz uključeno {{ui:Odaberi}}, prevuci vrata ili prozor duž njihovog zida. Prevuci ih na drugi zid da ih premjestiš tamo.
- {{key:Delete}} briše odabrana vrata i prozore; zid se zatvara.
- Pomjeranje ili brisanje zida pomjera ili briše ono što je u njemu. Kad početak zida pomjeri duž svoje linije, njegova vrata i prozori zadržavaju svoje mjesto.
- {{ui:Poništi}} i {{ui:Ponovi}} vraćaju svako postavljanje, pomjeranje ili brisanje unazad i unaprijed.

## Šta se odbija

- **Ne stane u taj zid.** Vrata ili prozor su širi od zida, ili bi virili s njegovog kraja. Probajte kraću širinu ili duži zid.
- **Viši je od zida.** Parapet plus visina je iznad vrha zida.

## Šta se čuva

Svaka vrata ili prozor je IFC vrata ili prozor sa svojom veličinom, načinom rada (na primjer jednokrilna lijeva), svojim tipom veličine (jedan tip za svaku veličinu svoje familije), `Pset_DoorCommon` ili `Pset_WindowCommon` i osnovnim količinama, a popunjava IFC otvor u svom zidu. Neto površina bočne strane zida i zapremina ne uključuju otvor. Drugi BIM programi ga otvaraju kao vrata u zidu.

## Dobro je znati

- Plan prikazuje vrata otvorena pod 90° sa njihovim smjerom otvaranja, klizna vrata kao dva krila, džepna vrata koja klize u zid, garažna vrata kao isprekidanu liniju iznad, a prozore s njihovim okvirom i linijama stakla.
- Širina je ukupna širina okvira; krilo vrata je širina umanjena za dvije bočne strane okvira.
- Kopiranje nacrtanih vrata i prozora još nije izgrađeno: postavite drugo.

## Podrumski prozor za izlaz u nuždi i jama

Izaberi **Podrumski izlaz s jamom** na listi tipova prozora. Počinje kao krilni prozor 36 × 48 inch s parapetom 36 inch iznad nivoa. Jama je na vanjskoj strani zida, sa najmanje 48 inch slobodne širine, 36 inch istaka i dnom 6 inch ispod parapeta. Prikazuje se kao isprekidane linije na planu i kao tri strane bez poklopca u 3D. Jama je dio IFC tijela prozora, pa čuvanje, pomjeranje, promjena veličine ili brisanje prozora nosi i nju. Promjena veličine zadržava najmanje 6 inch pored svake bočne strane okvira.

Ovo su zadane vrijednosti modeliranja, a ne potvrda usklađenosti izlaza u nuždi. Stvarni slobodni otvor proizvođača, lokalne zahtjeve, teren, odvodnju i svaku potrebnu ljestvu provjerite zasebno. Dubina i visina jame su unaprijed podešene dimenzije; ne prate teren.

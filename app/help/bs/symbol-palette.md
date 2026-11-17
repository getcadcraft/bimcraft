---
title: Paleta simbola
summary: Pronađi električne i vodovodne simbole po nazivu ili slici, označi zvjezdicom one koje koristiš i postavi ih na plan jednim klikom.
keywords: paleta simbola, dugme simbola na traci, zid prati, simboli, električni simboli, vodovodni simboli, vodovodni plan, WC školjka, WC, umivaonik, sudoper, kada, tuš, podni odvod, revizioni otvor, slavina za crijevo, zidni hidrant, bojler, ventil, zasunski ventil, hladna voda, topla voda, otpadna voda, ventilacija, stil linije, favoriti, pretraga
from: 67f20bc0
---

## Šta ćeš uraditi

Otvori jednu paletu koja navodi električne simbole i simbole vodovodnog plana sa njihovim slikama i nazivima, pronađi onaj koji želiš i postavi ga na plan. Ništa ovdje ne treba internet: simboli dolaze sa aplikacijom.

## Otvori je i postavi simbol

1. Otvori model i otvori {{ui:Verzija}} › {{ui:Paleta simbola}} (upisana komanda: SYMBOLS). Isto dugme je u meniju Alati na traci za crtanje i kao **Simboli** u grupi Biblioteka na glavnoj traci.
2. Odaberi set: **Električni** ili **Vodovodni**, ili **Svi setovi**. Upiši u polje za pretragu da suziš listu. Možeš pretraživati po nazivu ili skraćenici (WC, CW, HB).
3. Klikni simbol. Plan je spreman da ga postavi.
   - **Električni** simbol pokreće alat Električno sa izabranim uređajem, pa sve što važi za [Električni plan](topic:electrical-plan) vrijedi i ovdje: klikni plan, jedan korak poništavanja.
   - **Vodovodni** simbol pokreće alat za simbole plana. Klikni plan. Armatura koja stoji na zidu (WC, umivaonik, kada, sudoper, slavina za crijevo) hvata se za najbližu površinu zida, leđima okrenuta zidu; odvodi, ventili, bojler i stilovi linija idu tamo gdje klikneš.
4. Pritisni {{key:R}} da okreneš simbol za 90 stepeni ({{key:Shift}}+{{key:R}} okreće u suprotnom smjeru), ili upiši ugao u **Rotacija** na traci opcija. Pritisni {{key:Esc}} da zaustaviš.

Armatura ili slavina za crijevo koja se uhvatila za površinu zida pamti taj zid: kada se zid pomjeri, simbol se pomjera s njim (ista površina, ista udaljenost duž zida), u istom koraku poništavanja. Ako obrišeš zid, simbol ostaje gdje je bio, a Problemi navode da je "izgubio svoj zid"; pomjeri ga ili obriši. Simboli postavljeni podalje od zidova ni za šta nisu vezani.

Svaki simbol koji postaviš je jedan korak poništavanja. Postavljeni simbol je napomena na planu u IFC datoteci, sa svojom oznakom (WC1, WC2, ...). Odaberi ga da promijeniš njegovu oznaku ili okretanje u **Svojstvima**, ili pritisni {{key:Delete}}.

## Šta sadrži vodovodni set

Armature (WC šolja, pisoar, umivaonik, kada, tuš, kuhinjski sudoper, pojedinačni sudoper), podni odvod, podni i zidni revizioni otvori, slavina za crijevo, zidni hidrant, bojler, ventili (zasunski, globus, kuglasti, nepovratni, leptirasti, redukcijski za pritisak) i stilovi linija sa svojim skraćenicama: hladna voda (CW), topla voda (HW), povrat tople vode (HWR), otpadna voda (W), ventilacija (V), kišni odvod (SD) i plin (G). Crteži se skaliraju sa planom, pa zadržavaju svoju veličinu na odštampanom listu. Stil linije je kratka oznaka koja pokazuje stil na planu; stvarne dionice cijevi crtaj alatima za cijevi.

:::note
Ovo su uobičajene konvencije vodovodnog plana, koje smo mi nacrtali; nisu certifikovane prema ISO 4067-1 ili ASME Y32.4. Upoređene su sa javnim legendama crteža i priručnicima za obuku (spisak je u napomeni o izvorima seta, koja kaže gdje se poklapamo, a gdje se razlikujemo), nisu prepisane ni iz jednog proizvoda, i slobodne su za korištenje (Apache-2.0). Setovi crteža se razlikuju, pa provjeri legendu svog projekta. To su simboli plana, a ne vodovodni projekat: ne dimenzionišu cijevi niti provjeravaju propise.
:::

## Favoriti i tastatura

- Klikni zvjezdicu na simbolu (ili pritisni {{key:F}} na njemu) da ga zadržiš kao favorit. Favoriti su navedeni prvi i ostaju u ovom pregledaču. **Samo favoriti** prikazuje samo njih.
- {{key:Down}} iz polja za pretragu prelazi na simbole; strelice, {{key:Home}} i {{key:End}} se kreću među njima; {{key:Enter}} bira fokusirani; {{key:Esc}} zatvara paletu.
- Na telefonu je paleta list pri dnu ekrana; sklanja se kada izabereš simbol da vidiš plan. Ponovo je otvori iz menija Verzija ili dugmetom **Paleta** na traci opcija.

:::tip
Ako datoteka koristi set simbola koji ova verzija nema, plan prikazuje okvir umjesto simbola, a Problemi ga navode.
:::

## Poveži postavljeni element sa simbolom

Svjetiljka iz biblioteke je 3D element, ali električni raspored je prikazuje kao svoj simbol. Postavi je **jednom** i poveži je:

1. Odaberi Verzija › **Veza simbola** (ili ukucaj SYMBOLLINK). Otvara se odjeljak Veza simbola u lijevom panelu.
2. Odaberi postavljene elemente na planu ili u 3D. Odjeljak kaže koliko je odabrano i sa čim su povezani.
3. Odaberi **Simbol** (iz bilo kog seta simbola: Električni, Vodovodni) i izaberi **Poveži**.

Element je i dalje jedan element, a svaka specifikacija ga broji jednom:

- **3D** uvijek prikazuje njegovo tijelo.
- **Plan** prikazuje svoj oblik na planu, kao ranije.
- Plan čiji je **Ovaj prikaz prikazuje povezane elemente kao** postavljen na **Njihov simbol (raspored instalacija)** prikazuje simbol na njihovom mjestu. Klik na simbol bira element. Izbor se čuva za taj prikaz (plan nivoa, plan plafona ili izvod) u datoteci.

**Okreni simbol za 90°** okreće simbol u odnosu na njegov element. **Ukloni vezu** uklanja vezu; element ostaje. Specifikacija **Povezani simboli** navodi svaki povezani element jednom, sa njegovim nivoom i prostorijom u kojoj stoji.

Nije urađeno: izbor prikaza na listu je izbor plana nivoa koji on prikazuje; uređaji postavljeni alatom Električno su simboli u svakom planu, kao i ranije.

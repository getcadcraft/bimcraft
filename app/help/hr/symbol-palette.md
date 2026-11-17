---
title: Paleta simbola
summary: Pronađite električne i vodovodne simbole po nazivu ili slici, označite zvjezdicom one koje koristite i postavite ih u tlocrt jednim klikom.
keywords: paleta simbola, gumb trake simbola, zid slijedi, simboli, električni simboli, vodovodni simboli, vodovodni tlocrt, WC školjka, WC, umivaonik, sudopera, kada, tuš, podni slivnik, revizijski otvor, slavina za crijevo, bojler, ventil, zasunski ventil, hladna voda, topla voda, otpad, odzračnik, stil linije, favoriti, pretraga
from: 67f20bc0
---

## Što ćete napraviti

Otvorite jednu ploču koja navodi električne simbole i vodovodne tlocrtne simbole s njihovim slikama i nazivima, pronađite onaj koji želite i postavite ga u tlocrt. Ništa ovdje ne treba internet: simboli dolaze s aplikacijom.

## Otvaranje i postavljanje simbola

1. Otvorite model i otvorite {{ui:Izgradnja}} › {{ui:Paleta simbola}} (naredba upisana: SYMBOLS). Isti gumb nalazi se u izborniku Alati trake za crtanje i kao **Simboli** u grupi Knjižnica alatne trake.
2. Odaberite skup: **Električni** ili **Vodovodni**, ili **Svi skupovi**. Upišite u polje za pretragu da sužite popis. Pretražujete po nazivu ili kratici (WC, CW, HB).
3. Kliknite simbol. Tlocrt je spreman da ga postavite.
   - **Električni** simbol pokreće alat Električno s odabranim uređajem, pa vrijedi sve iz [Električnog tlocrta](topic:electrical-plan): kliknite tlocrt, jedan korak poništavanja.
   - **Vodovodni** simbol pokreće alat za simbole tlocrta. Kliknite tlocrt. Armatura koja stoji na zidu (WC školjka, umivaonik, kada, sudopera, slavina za crijevo) hvata se na najbližu stranu zida, leđima okrenuta zidu; slivnici, ventili, bojler i stilovi linija idu tamo gdje kliknete.
4. Pritisnite {{key:R}} da zakrenete simbol za 90 stupnjeva ({{key:Shift}}+{{key:R}} zakreće u suprotnom smjeru), ili upišite kut u **Rotacija** na traci opcija. Pritisnite {{key:Esc}} za zaustavljanje.

Armatura ili slavina za crijevo koja se uhvatila za stranu zida pamti taj zid: kad se zid pomakne, simbol se pomiče s njim (ista strana, ista udaljenost duž zida) u istom koraku poništavanja. Ako izbrišete zid, simbol ostaje gdje je bio, a {{ui:Problemi}} navodi „lost its wall“; pomaknite ga ili ga izbrišite. Simboli postavljeni izvan zidova nisu ni za što vezani.

Svaki simbol koji postavite jedan je korak poništavanja. Postavljeni simbol je napomena u tlocrtu u IFC datoteci s oznakom (WC1, WC2, ...). Odaberite ga da promijenite oznaku ili zakret u {{ui:Svojstva}}, ili pritisnite {{key:Delete}}.

## Što ima vodovodni skup

Armaturu (WC školjka, pisoar, umivaonik, kada, tuš, kuhinjska sudopera, pojedinačna sudopera), podni slivnik, podne i zidne revizijske otvore, slavinu za crijevo, zidni hidrant, bojler, ventile (zasunski, kuglasti, kuglični, nepovratni, leptirasti, redukcijski) i stilove linija s njihovim kraticama: hladna voda (CW), topla voda (HW), povratna topla voda (HWR), otpad (W), odzračnik (V), oborinska odvodnja (SD) i plin (G). Crteži se skaliraju s tlocrtom, pa zadržavaju veličinu na ispisanom listu. Stil linije je kratki odsječak koji pokazuje stil u tlocrtu; stvarne trase cijevi crtajte alatima za cijevi.

:::note
Ovo su uobičajene konvencije vodovodnih tlocrta, koje smo nacrtali sami; nisu certificirane prema ISO 4067-1 ili ASME Y32.4. Usporedili smo ih s javnim legendama crteža i priručnicima za obuku (popis je u bilješci o izvorima skupa, koja kaže gdje se podudaramo, a gdje se razlikujemo), nisu kopirane ni iz jednog proizvoda i slobodne su za korištenje (Apache-2.0). Skupovi crteža se razlikuju, pa provjerite legendu vlastitog projekta. To su simboli za tlocrt, a ne vodovodni projekt: ne dimenzioniraju cijevi niti provjeravaju propise.
:::

## Favoriti i tipkovnica

- Kliknite zvjezdicu na simbolu (ili pritisnite {{key:F}} na njemu) da ga zadržite kao favorit. Favoriti su navedeni prvi i ostaju u ovom pregledniku. **Samo favoriti** prikazuje samo njih.
- {{key:Down}} iz polja za pretragu prelazi na simbole; tipke sa strelicama, {{key:Home}} i {{key:End}} kreću se među njima; {{key:Enter}} bira usredotočeni; {{key:Esc}} zatvara paletu.
- Na telefonu je paleta list pri dnu zaslona; sklanja se kad odaberete simbol da vidite tlocrt. Otvorite je ponovno iz izbornika Izgradnja ili gumba **Paleta** na traci opcija.

:::tip
Ako datoteka koristi skup simbola koji ova verzija nema, tlocrt na mjestu simbola prikazuje okvir, a {{ui:Problemi}} ga navodi.
:::

## Povezivanje postavljenog elementa sa simbolom

Svjetiljka iz knjižnice je 3D element, ali električni raspored je prikazuje kao svoj simbol. Postavite je **jednom** i povežite:

1. Odaberite Izgradnja › **Veza simbola** (ili upišite SYMBOLLINK). Otvara se odjeljak Veza simbola u lijevom oknu.
2. Odaberite postavljene elemente u tlocrtu ili u 3D. Odjeljak navodi koliko je odabrano i s čime su povezani.
3. Odaberite **Simbol** (iz bilo kojeg skupa simbola: Električni, Vodovodni) i odaberite **Poveži**.

Element je i dalje jedan element, a svaka specifikacija ga broji jednom:

- **3D** uvijek prikazuje njegovo tijelo.
- **Tlocrt** prikazuje svoj tlocrtni oblik, kao i prije.
- Tlocrt čiji je **Ovaj prikaz prikazuje povezane elemente kao** postavljen na **Njihov simbol (raspored instalacija)** prikazuje simbol na njegovu mjestu. Klik na simbol odabire element. Izbor se čuva za taj prikaz (tlocrt etaže, njezin tlocrt stropa ili oblačić) u datoteci.

**Zakreni simbol za 90°** zakreće simbol u odnosu na njegov element. **Ukloni vezu** uklanja vezu; element ostaje. Specifikacija **Povezani simboli** navodi svaki povezani element jednom, s njegovom etažom i prostorijom u kojoj stoji.

Još nije izrađeno: izbor prikaza na listu je izbor tlocrta etaže koji prikazuje; uređaji postavljeni alatom Električno su simboli u svakom tlocrtu, kao i prije.

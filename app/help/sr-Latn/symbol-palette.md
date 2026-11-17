---
title: Paleta simbola
summary: Pronađite električne i vodovodne simbole po nazivu ili slici, označite zvezdicom one koje koristite i postavite ih na plan jednim klikom.
keywords: paleta simbola, dugme simbola na traci, prati zid, simboli, električni simboli, vodovodni simboli, vodovodni plan, WC šolja, toalet, lavabo, sudoper, kada, tuš, podni slivnik, revizioni otvor, slavina, bojler, ventil, klinasti ventil, hladna voda, topla voda, otpad, ventilacija, stil linije, favoriti, pretraga
from: 67f20bc0
---

## Šta ćete uraditi

Otvorite jednu tablu koja navodi električne simbole i simbole vodovodnog plana sa njihovim slikama i nazivima, pronađite onaj koji želite i postavite ga na plan. Ništa ovde ne traži internet: simboli dolaze uz aplikaciju.

## Otvorite je i postavite simbol

1. Otvorite model i otvorite {{ui:Verzija}} › {{ui:Paleta simbola}} (ukucana komanda: SYMBOLS). Isto dugme je u meniju Alati na traci {{ui:Crtanje}} i kao **Simboli** u grupi Biblioteka na traci sa alatkama.
2. Izaberite skup: **Električni** ili **Vodovodni**, ili **Svi skupovi**. Ukucajte u polje za pretragu da suzite listu. Možete tražiti po nazivu ili po skraćenici (WC, CW, HB).
3. Kliknite simbol. Plan je spreman da ga postavi.
   - **Električni** simbol pokreće alat Električno sa izabranim uređajem, pa važi sve iz [Električnog plana](topic:electrical-plan): kliknite plan, jedan korak opoziva.
   - **Vodovodni** simbol pokreće alat za simbol na planu. Kliknite plan. Sanitarni uređaj koji stoji na zidu (WC šolja, lavabo, kada, sudoper, spoljašnja slavina) privlači se na najbliže lice zida, leđima ka zidu; odvodi, ventili, bojler i stilovi linija idu tamo gde kliknete.
4. Pritisnite {{key:R}} da okrenete simbol za 90 stepeni ({{key:Shift}}+{{key:R}} okreće u suprotnu stranu), ili ukucajte ugao u polje **Rotacija** na traci opcija. Pritisnite {{key:Esc}} da zaustavite.

Sanitarni uređaj ili spoljašnja slavina koja se privukla na lice zida pamti taj zid: kad se zid pomeri, simbol se pomera s njim (ista strana, ista udaljenost duž zida) u istom koraku opoziva. Ako obrišete zid, simbol ostaje gde je bio, a **Problemi** navodi „izgubio je svoj zid“; pomerite ga ili obrišite. Simboli postavljeni dalje od zidova nisu ni za šta vezani.

Svaki simbol koji postavite je jedan korak opoziva. Postavljeni simbol je napomena na planu u IFC datoteci sa svojom oznakom (WC1, WC2, ...). Izaberite ga da promenite njegovu oznaku ili okretanje u **Svojstvima**, ili pritisnite {{key:Delete}}.

## Šta ima vodovodni skup

Uređaji (WC šolja, pisoar, lavabo, kada, tuš, kuhinjski sudoper, jednostruki sudoper), podni slivnik, podni i zidni revizioni otvori, spoljašnja slavina, zidni hidrant, bojler, ventili (klinasti, sa sedištem, kuglasti, nepovratni, leptirasti, redukcioni) i stilovi linija sa skraćenicama: hladna voda (CW), topla voda (HW), povratna topla voda (HWR), otpad (W), ventilacija (V), kišna kanalizacija (SD) i gas (G). Crteži se skaliraju sa planom, pa zadržavaju svoju veličinu na odštampanom listu. Stil linije je kratak nastavak koji pokazuje stil na planu; stvarne cevovode nacrtajte alatima za cevi.

:::note
Ovo su uobičajene konvencije vodovodnog plana, koje smo nacrtali mi; nisu sertifikovane prema ISO 4067-1 ili ASME Y32.4. Upoređene su sa javnim legendama crteža i priručnicima za obuku (spisak je u napomeni o izvorima skupa, koja navodi gde se podudaramo i gde se razlikujemo), nisu kopirane ni sa jednog proizvoda i slobodne su za upotrebu (Apache-2.0). Skupovi crteža se razlikuju, pa proverite legendu svog projekta. To su simboli plana, a ne vodovodni projekat: ne dimenzionišu cevi niti proveravaju propise.
:::

## Favoriti i tastatura

- Kliknite zvezdicu na simbolu (ili pritisnite {{key:F}} na njemu) da ga zadržite kao favorit. Favoriti se navode prvi i ostaju u ovom pregledaču. **Samo favoriti** prikazuje samo njih.
- {{key:Down}} iz polja za pretragu prelazi na simbole; strelice, {{key:Home}} i {{key:End}} se kreću među njima; {{key:Enter}} bira fokusirani; {{key:Esc}} zatvara paletu.
- Na telefonu je paleta list pri dnu ekrana; sklanja se kad izaberete simbol da vidite plan. Ponovo je otvorite iz menija {{ui:Verzija}} ili dugmetom **Paleta** na traci opcija.

:::tip
Ako datoteka koristi skup simbola koji ova verzija nema, plan prikazuje kutiju na mestu simbola, a **Problemi** to navodi.
:::

## Povežite postavljeni element sa simbolom

Svetiljka iz Biblioteke je 3D element, ali električni raspored je prikazuje kao njen simbol. Postavite je **jednom** i povežite je:

1. Izaberite {{ui:Verzija}} › **Veza simbola** (ili ukucajte SYMBOLLINK). U levom panelu se otvara odeljak Veza simbola.
2. Izaberite postavljene elemente u planu ili u 3D. Odeljak kaže koliko je izabrano i sa čim su povezani.
3. Izaberite **Simbol** (iz bilo kog skupa simbola: Električni, Vodovodni) i izaberite **Poveži**.

Element je i dalje jedan element, a svaka specifikacija ga broji jednom:

- **3D** uvek prikazuje njegovo telo.
- **Plan** prikazuje svoj plan oblik, kao i ranije.
- Plan čiji je **Ovaj prikaz prikazuje povezane elemente kao** postavljen na **Njihov simbol (raspored instalacija)** prikazuje simbol na njihovom mestu. Klik na simbol bira element. Izbor se čuva za taj prikaz (plan sprata, plan plafona ili oznaka poziva) u datoteci.

**Okreni simbol za 90°** okreće simbol u odnosu na njegov element. **Ukloni vezu** skida vezu; element ostaje. Specifikacija **Povezani simboli** navodi svaki povezani element jednom, sa njegovim spratom i prostorijom u kojoj stoji.

Nije urađeno: izbor prikaza na listu je izbor plana sprata koji taj list prikazuje; uređaji postavljeni alatom Električno su simboli u svakom planu, kao ranije.

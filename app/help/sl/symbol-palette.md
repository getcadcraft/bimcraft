---
title: Paleta simbolov
summary: Poiščite električne in vodovodne simbole po imenu ali sliki, označite tiste, ki jih uporabljate, in jih z enim klikom postavite na tloris.
keywords: paleta simbolov, gumb simbolov v orodni vrstici, stena sledi, simboli, električni simboli, vodovodni simboli, vodovodni tloris, stranišče, WC, umivalnik, pomivalno korito, kad, prha, talni odtok, čistilna odprtina, zunanja pipa, grelnik vode, ventil, zaporni ventil, hladna voda, topla voda, odpadna voda, prezračevanje, slog črte, priljubljene, iskanje
from: 67f20bc0
---

## Kaj boste naredili

Odprite eno podokno, ki našteje električne simbole in simbole vodovodnega tlorisa s slikami in imeni, poiščite želenega in ga postavite na tloris. Tu ni treba imeti interneta: simboli so vgrajeni v program.

## Odprite in postavite simbol

1. Odprite model in odprite {{ui:Build}} › {{ui:Symbol palette}} (ukaz z vnosom: SYMBOLS). Enak gumb je v meniju Orodja vrstice Risanje in kot **Simboli** v skupini Knjižnica orodne vrstice.
2. Izberite nabor: **Električni** ali **Vodovodni** ali **Vsi nabori**. V iskalno polje vpišite, da zožite seznam. Iščete lahko po imenu ali po kratici (WC, CW, HB).
3. Kliknite simbol. Tloris je pripravljen za postavitev.
   - **Električni** simbol zažene orodje Električno z izbrano napravo, zato velja vse iz [Električni tloris](topic:electrical-plan): kliknite tloris, en korak razveljavitve.
   - **Vodovodni** simbol zažene orodje za simbole tlorisa. Kliknite tloris. Armatura, ki stoji ob steni (stranišče, umivalnik, kad, pomivalno korito, zunanja pipa), se prilepi na najbližjo ploskev stene s hrbtom ob steni; odtoki, ventili, grelnik vode in slogi črt gredo tja, kamor kliknete.
4. Pritisnite {{key:R}}, da simbol zavrtite za 90 stopinj ({{key:Shift}}+{{key:R}} ga zavrti v nasprotno smer), ali vnesite kot v polje **Zasuk** na vrstici z možnostmi. Pritisnite {{key:Esc}}, da ustavite.

Armatura ali zunanja pipa, ki se je prilepila na ploskev stene, si zapomni to steno: ko se stena premakne, se simbol premakne z njo (ista ploskev, enaka razdalja vzdolž stene) v istem koraku razveljavitve. Če izbrišete steno, simbol ostane, kjer je bil, Težave pa navedejo „izgubil svojo steno“; premaknite ga ali izbrišite. Simboli, postavljeni stran od sten, niso ničesar vezani.

Vsak postavljeni simbol je en korak razveljavitve. Postavljeni simbol je označba tlorisa v datoteki IFC z oznako (WC1, WC2, ...). Izberite ga, da spremenite njegovo oznako ali zasuk v **Lastnostih**, ali pritisnite {{key:Delete}}.

## Kaj ima vodovodni nabor

Armature (stranišče, pisoar, umivalnik, kad, prha, kuhinjski pomivalnik, enojni pomivalnik), talni odtok, talne in stenske čistilne odprtine, zunanja pipa, stenski hidrant, grelnik vode, ventili (zaporni, regulacijski, kroglični, povratni, zaklopni, reducirni tlak) in slogi črt s kratico: hladna voda (CW), topla voda (HW), povratna topla voda (HWR), odpadna voda (W), prezračevanje (V), odtok meteorne vode (SD) in plin (G). Risbe se skalirajo s tlorisom, zato na natisnjenem listu ohranijo svojo velikost. Slog črte je kratek odsek, ki pokaže slog na tlorisu; prave cevne proge narišite z orodji za cevi.

:::note
To so običajne konvencije za vodovodne tlorise, ki smo jih narisali sami; niso certificirane po ISO 4067-1 ali ASME Y32.4. Primerjane so bile z javnimi legendami risb in priročniki za usposabljanje (seznam je v opombi o virih nabora, ki pove, kje se ujemamo in kje se razlikujemo), niso kopirane iz nobenega izdelka in so brezplačne za uporabo (Apache-2.0). Nabori risb se razlikujejo, zato preverite legendo svojega projekta. So simboli tlorisa, ne vodovodna zasnova: ne določajo velikosti cevi in ne preverjajo predpisov.
:::

## Priljubljene in tipkovnica

- Kliknite zvezdico pri simbolu (ali pritisnite {{key:F}} nanj), da ga ohranite med priljubljenimi. Priljubljeni so našteti prvi in ostanejo v tem brskalniku. **Samo priljubljeni** prikaže samo njih.
- {{key:Down}} iz iskalnega polja se premakne na simbole; puščične tipke, {{key:Home}} in {{key:End}} se premikajo med njimi; {{key:Enter}} izbere fokusiranega; {{key:Esc}} zapre paleto.
- Na telefonu je paleta list pri dnu zaslona; ko izberete simbol, se umakne, da vidite tloris. Ponovno jo odprite iz menija Zgradba ali gumba **Paleta** na vrstici z možnostmi.

:::tip
Če datoteka uporablja nabor simbolov, ki ga ta različica nima, tloris na mestu simbola prikaže polje, Težave pa ga navedejo.
:::

## Povežite postavljeni element s simbolom

Svetilka iz knjižnice je 3D element, električni načrt pa jo prikaže kot svoj simbol. Postavite jo **enkrat** in jo povežite:

1. Izberite Zgradba › **Povezava simbola** (ali vnesite SYMBOLLINK). V levem podoknu se odpre razdelek Povezava simbola.
2. Izberite postavljene elemente v tlorisu ali v 3D. Razdelek pove, koliko jih je izbranih in s čim so povezani.
3. Izberite **Simbol** (iz katerega koli nabora simbolov: Električni, Vodovodni) in izberite **Poveži**.

Element ostane en element in vsak seznam ga šteje enkrat:

- **3D** vedno prikazuje njegovo telo.
- **Tloris** prikazuje svojo tlorisno obliko, kot prej.
- Tloris, katerega **Ta pogled prikazuje povezane elemente kot** je nastavljen na **Njihov simbol (načrt instalacij)**, prikaže simbol na njihovem mestu. Klik na simbol izbere element. Izbira je za ta pogled (tloris etaže, njen stropni tloris ali izrez) shranjena v datoteki.

**Zavrtite simbol za 90°** zasuče simbol glede na njegov element. **Odstrani povezavo** povezavo odstrani; element ostane. Seznam **Povezani simboli** našteje vsak povezan element enkrat, z njegovo etažo in prostorom, v katerem stoji.

Še ni izdelano: izbira pogleda na listu je izbira tlorisa etaže, ki ga prikazuje; naprave, postavljene z orodjem Električno, so simboli v vsakem tlorisu, kot prej.

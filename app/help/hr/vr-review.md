---
title: Pregled modela u VR naočalama
summary: Hodajte kroz IFC model u punoj veličini u VR naočalama: skačite, okrećite se, mjerite, presijecite ga, postavljajte BCF teme sa slikom, pogledajte ga kao model na stolu i upoznajte ostale iz sesije uživo.
keywords: vr, virtualna stvarnost, naočale, webxr, xr, uronjeno, quest, oculus, vive, index, pico, hodanje kroz, obilazak, teleportacija, pregled dizajna, koordinacija, pregled, mjerenje, presjek, rez, tema, teme, bcf, model na stolu, skaliran model, prisutnost, avatari, uživo, zajedno
from: 8994b36d
---

{{ui:VR}} na alatnoj traci stavlja vas unutar modela s VR naočalama, u punoj veličini. Stojite tamo gdje je kamera 3D pogleda, na podu ispod nje, okrenuti u istom smjeru. Naočale prikazuju ono što prikazuje 3D pogled: sakrivene etaže, elementi i modeli ostaju skriveni, a obojeni materijali dolaze s njima. Ništa se ne učitava: preglednik ga crta na ovom računalu (ili u pregledniku samih naočala).

## Što trebate

- Naočale koje preglednik može upravljati (WebXR): vlastiti preglednik samostalnih naočala, ili Chrome ili Edge na PC-u s priključenim naočalama.
- Otvoren IFC model, na sigurnoj stranici (https), kao što je na ovoj stranici.

Kad nema naočala, {{ui:VR}} je zasivljen i kaže zašto.

## Početak

1. Postavite 3D pogled gdje želite početi: u sobi ili vani gledajući zgradu.
2. Kliknite {{ui:VR}} na alatnoj traci.
3. Stavite naočale.

Izbornik je na poleđini vaše lijeve ruke. Usmjerite ga desnim kontrolerom i povucite okidač da odaberete gumb. (S jednom rukom izbornik lebdi ispred mjesta gdje ste počeli.)

## Kretanje

- **Skok:** u {{ui:Pomakni}} usmjerite na pod i povucite okidač; sletite na njega. Ili gurnite palicu naprijed za ciljanje i pustite za skok. Možete sletjeti samo na podove, ploče i tlo (površine okrenute prema gore), nikad na zid.
- **Okret:** gurnite palicu lijevo ili desno: okrenete se za 30° svaki put.
- **Hodanje:** u svom području za kretanje jednostavno hodajte.

## Mjerenje

Odaberite {{ui:Mjeri}}, zatim povucite okidač na dvije točke. Udaljenost se prikazuje između njih, u metrima. Točka blizu kuta se hvata za kut.

## Presijecanje

Odaberite {{ui:Presjek}} i povucite okidač na površinu:

- na zidu (ili bilo čemu što nije pod): sve između vas i te površine odrezano je, pa vidite unutra. Ovo najbolje radi izvana ili preko sobe;
- na podu, odozgo: tlocrtni rez 1.2 m iznad tog poda, pa zidovi pokazuju svoj donji dio.

{{ui:Očisti}} uklanja rez i mjerenja. Ako [ravnina presjeka](topic:section-plane) presijeca model kad počnete, naočale počinju s njom.

## Postavljanje teme

Odaberite {{ui:Tema}} i povucite okidač gdje je problem. Numerirana igla ga označava, a tema ide na karticu {{ui:Teme}} kao BCF tema, sa slikom onoga što ste vidjeli i kamerom s mjesta na kojem ste stajali, u koordinatama samog modela. Spremite ih sa ostalim [temama](topic:issues-bcf) kao BCF datoteku; drugi alati za koordinaciju otvore ih na istom pogledu.

Dodajte komentar temi nakon što izađete iz VR-a, na kartici Teme: pisanje u naočalama još nije izrađeno.

## Pogledajte kao model na stolu

{{ui:Stolni model}} smanjuje model da stane na stol ispred vas; hodajte oko njega ili ga okrećite palicom. {{ui:Puna veličina}} vas vraća tamo gdje ste bili.

## S drugima, uživo

U [sesiji uživo](topic:work-live), svatko u VR-u vidi druge kao glavu i dvije ruke u njihovoj boji, s imenom, i točkicu gdje netko pokazuje. Izmjene koje netko napravi stignu do vaših naočala u tren. Ljudi za stolom još nisu prikazani u naočalama.

## Izlaz

Odaberite {{ui:Napusti VR}} (ili skinite naočale i završite tamo). 3D pogled na zaslonu se pomakne tamo gdje je bila vaša glava.

:::note
Testirano s emulatorom naočala, još ne na svim naočalama. Veliki model može uzrokovati štucanje naočala: prvo sakrijte etaže ili modele koje ne trebate ([sakrij i izoliraj](topic:hide-and-isolate)).
:::

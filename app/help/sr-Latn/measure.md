---
title: Merenje rastojanja, površina lica i položaja u 3D
summary: Merite između dve tačke IFC modela uz hvatanje za uglove i ivice, pročitajte razliku duž X, Y i Z i izmerite površinu ravnog lica.
keywords: merenje, mera, rastojanje, dužina, kota, površina, površina lica, hvatanje, ugao, ivica, traka, lenjir, slobodan prostor, položaj, geografska širina, geografska dužina, lat long, koordinate, georeferenca, konverzija karte, EPSG, geodetsko snimanje, istočne koordinate, severne koordinate, WGS 84, datum
from: 5f430bba
---

## Šta ćete uraditi

Proverite slobodan prostor, dužinu zida ili veličinu lica direktno iz modela, bez otvaranja programa za projektovanje.

## Koraci

1. Otvorite IFC model.
2. Kliknite {{ui:Izmeri}} na traci sa alatkama ili pritisnite {{key:M}}. Traka se otvara na dnu prikaza.
3. **Rastojanje:** uz izabrano {{ui:Rastojanje}}, kliknite prvu tačku, pa drugu. Blizu ugla pokazivač se hvata za njega, a blizu ivice za ivicu. Mala oznaka uz pokazivač kaže koja. Svaki par klikova daje jedno merenje.
4. **Površina lica:** izaberite {{ui:Površina lica}} i kliknite lice. Celo ravno lice se osvetli i pokazuje se njegova površina.
5. **Prave linije:** držite {{key:Shift}} dok birate drugu tačku ili izaberite {{ui:Prav}} na traci da ostane tako. Linija tada ide duž one ose kojoj je pokazivač najbliži (u pogledu odozgo, duž X ili Y osnove; u ostalim pogledima duž X, Y ili Z), a oznaka pokazivača kaže „prava duž ose". {{key:M}} i dalje počinje i prekida merenje.
6. Kliknite {{ui:Obriši}} da uklonite merenja, ili {{ui:Gotovo}} (ili {{key:Esc}}) da prestanete sa merenjem.

## Šta treba da vidite

- Linija između dve tačke sa njenom dužinom na sebi, a u traci dužina sa koliko ide duž X, Y i Z (u osama modela, Z gore), sve u {{ui:Jedinice}} izabranim na traci sa alatkama.
- Površina lica u kvadratnim metrima, na licu i u traci.
- Oznake ostaju uz svoja merenja dok rotirate, pomerate i zumirate.
- Dok merite, klikovi ne biraju elemente. Ravan preseka ili kutija i dalje seče model, a možete meriti ono što prikazuju, uključujući preseke.

## Gde je tačka na Zemlji

Kliknite {{ui:Lokacija}} u traci merenja, pa kliknite tačku na modelu (hvata se za uglove i ivice kao i pri merenju rastojanja). Traka pokazuje:

- **geografsku širinu i dužinu**, u decimalnim stepenima i u stepenima, minutima i sekundama, u WGS 84 za početak;
- **koordinate karte** (istočne i severne koordinate, zapisane u {{ui:Jedinice}} izabranim na traci sa alatkama) u sopstvenom kartografskom sistemu modela, na primer `EPSG:28356`;
- **visinu** i vertikalni datum koji datoteka navodi, i **sopstveni datum** datoteke (na primer GDA94).

{{ui:Kopiraj}} stavlja sve na međuspremnik u jednom redu. Sistem u kome su geografska širina i dužina promenite pod {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Lokacija}}: WGS 84 (kao GPS i karte na vebu), sopstveni datum datoteke ili neki drugi uobičajeni, kao ETRS89 ili NAD83.

Ovo zahteva georeferenciran model, onaj izvezen sa koordinatama karte (konverzija karte u projektovani sistem sa EPSG kodom). Model koji ima samo geografsku širinu i dužinu lokacije dobija približan položaj, izračunat iz tačke lokacije i njenog pravog severa, a traka to kaže. Kada je više modela otvoreno, svaka tačka koristi georeferencu svog modela.

:::note
Prelazak između datuma (na primer GDA94 u WGS 84) radi se bez datoteka mreže, pa je tačan na nekoliko metara; statusna linija kaže koliko. Koordinate karte same su tačne.
:::

## Česte greške

- **„…nema georeferencu“.** Datoteka nema konverziju karte ni geografsku širinu i dužinu lokacije. Izvezite je ponovo sa postavljenim koordinatnim sistemom (zajedničke koordinate / geodetska tačka u alatu za projektovanje).
- **Koordinate karte, ali nema geografske širine i dužine.** Datoteka imenuje svoj kartografski sistem bez EPSG koda, ili sa kodom koji nije na spisku. Statusna linija kaže koji.

- **Tačka pada na lice, a ne na ugao.** Hvatanje gleda element ispod pokazivača. Približite se uglu ili zumirajte.
- **Površina je manja nego što očekujete.** Otvori su izostavljeni, a lice koje se savija je više lica: kliknite svako.
- **{{key:Esc}} je prekinuo merenje.** Prvi {{key:Esc}} odbacuje napola završeno rastojanje; drugi prekida merenje.

## Dalje

- [Presecite IFC model ravni preseka](topic:section-plane)
- [Sakrijte, izolujte i vidite kroz elemente](topic:hide-and-isolate)

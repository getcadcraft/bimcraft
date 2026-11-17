---
title: Mjerite udaljenosti, površine lica i lokacije u 3D
summary: Mjerite između dvije tačke IFC modela uz hvatanje za uglove i ivice, pročitajte razliku duž X, Y i Z te izmjerite površinu ravnog lica.
keywords: mjere, mjerenje, udaljenost, dužina, kota, površina, površina lica, hvatanje, ugao, ivica, traka, lenjir, slobodan prostor, lokacija, geografska širina, geografska dužina, lat long, koordinate, georeferenciranje, pretvorba karte, EPSG, premjer, istočne koordinate, sjeverne koordinate, WGS 84, datum
from: 5f430bba
---

## Šta ćete uraditi

Provjerite slobodan prostor, dužinu zida ili veličinu lica direktno iz modela, bez otvaranja autorskog programa.

## Koraci

1. Otvorite IFC model.
2. Kliknite {{ui:Mjeri}} na alatnoj traci ili pritisnite {{key:M}}. Traka se otvara na dnu pogleda.
3. **Udaljenost:** uz izabrano {{ui:Udaljenost}}, kliknite prvu tačku, pa drugu. Blizu ugla pokazivač se hvata za njega, a blizu ivice za ivicu; mala oznaka uz pokazivač kaže koja. Svaka dva klika čine jedno mjerenje.
4. **Površina lica:** izaberite {{ui:Površina lica}} i kliknite lice. Cijelo ravno lice se osvijetli i prikaže se njegova površina.
5. **Ravne linije:** držite {{key:Shift}} dok birate drugu tačku, ili pritisnite {{ui:Ravno}} na traci da ostane uključeno. Linija tada ide duž one ose kojoj je pokazivač najbliži (u pogledu odozgo, duž X ili Y tlocrta; u drugim pogledima duž X, Y ili Z), a oznaka uz pokazivač kaže „ravno duž ose“. {{key:M}} i dalje pokreće i zaustavlja Mjeri.
6. Kliknite {{ui:Obriši}} da uklonite mjerenja, ili {{ui:Gotovo}} (ili {{key:Esc}}) da prestanete mjeriti.

## Šta biste trebali vidjeti

- Linija između dvije tačke s dužinom ispisanom na njoj, a na traci dužina i koliko se ide duž X, Y i Z (u osama modela, Z gore), sve u {{ui:Jedinice}} izabranim na alatnoj traci.
- Površina lica u kvadratnim metrima, na licu i na traci.
- Oznake ostaju uz svoja mjerenja dok rotirate, pomjerate i zumirate.
- Dok mjerite, klikovi ne biraju elemente. Ravan presjeka ili kutija i dalje presijecaju model, a možete mjeriti ono što prikazuju, uključujući presječena lica.

## Gdje je tačka na zemlji

Kliknite {{ui:Lokacija}} na traci mjerenja, pa kliknite tačku na modelu (hvata se za uglove i ivice kao i kod udaljenosti). Traka prikazuje:

- **geografsku širinu i dužinu**, u decimalnim stepenima i u stepenima, minutama i sekundama, u WGS 84 za početak;
- **koordinate karte** (istočne i sjeverne koordinate, zapisane u {{ui:Jedinice}} izabranim na alatnoj traci) u sopstvenom kartografskom sistemu modela, na primjer `EPSG:28356`;
- **visinu** i vertikalni datum koji datoteka navodi, te **vlastiti datum** datoteke (na primjer GDA94).

{{ui:Kopiraj}} stavlja sve u međumemoriju u jednom redu. Sistem u kojem su geografska širina i dužina promijenite pod {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Lokacija}}: WGS 84 (kao GPS i web karte), vlastiti datum datoteke ili drugi uobičajeni, kao ETRS89 ili NAD83.

Ovo zahtijeva georeferencirani model: onaj izvezen s koordinatama karte (pretvorba karte u projektovani sistem s EPSG kodom). Model koji ima samo geografsku širinu i dužinu lokacije dobija približnu poziciju, izračunatu iz tačke lokacije i njenog pravog sjevera, a traka to kaže. Kad je otvoreno više modela, svaka tačka koristi georeferencu svog modela.

:::note
Prelazak između datuma (na primjer GDA94 u WGS 84) radi se bez datoteka mreže, pa je dobar na nekoliko metara; statusna linija kaže koliko je dobar. Same koordinate karte su tačne.
:::

## Česte greške

- **„…nema georeferencu“.** Datoteka nema pretvorbu karte ni geografsku širinu i dužinu lokacije. Izvezite je ponovo s postavljenim koordinatnim sistemom (zajedničke koordinate / tačka premjera u autorskom alatu).
- **Koordinate karte, ali nema geografske širine i dužine.** Datoteka imenuje svoj kartografski sistem bez EPSG koda, ili s kodom koji nije na listi; statusna linija kaže koji.
- **Tačka padne na lice, a ne na ugao.** Hvatanje gleda element ispod pokazivača. Približite se uglu ili zumirajte.
- **Površina je manja nego što se očekuje.** Otvori se ne računaju, a lice koje se savija je više lica: kliknite svako.
- **{{key:Esc}} je prekinuo mjerenje.** Prvi {{key:Esc}} odbacuje napola završenu udaljenost; drugi zaustavlja mjerenje.

## Dalje

- [Presijecite IFC model ravninom presjeka](topic:section-plane)
- [Sakrijte, izolujte i gledajte kroz elemente](topic:hide-and-isolate)

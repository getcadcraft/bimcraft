---
title: Mjerenje udaljenosti, površina ploha i lokacija u 3D
summary: Mjerite između dviju točaka IFC modela uz hvatanje za kutove i rubove, pročitajte razliku duž X, Y i Z te izmjerite površinu ravne plohe.
keywords: mjerenje, mjera, udaljenost, duljina, kota, površina, površina plohe, hvatanje, kut, rub, vrpca, ravnalo, razmak, lokacija, geografska širina, geografska dužina, koordinate, georeferenciranje, pretvorba karte, EPSG, premjer, istočni, sjeverni, WGS 84, datum
from: 5f430bba
---

## Što ćete raditi

Provjerite razmak, duljinu zida ili veličinu plohe izravno iz modela, bez otvaranja programa za izradu.

## Koraci

1. Otvorite IFC model.
2. Kliknite {{ui:Mjeri}} u alatnoj traci ili pritisnite {{key:M}}. Pri dnu prikaza otvara se traka.
3. **Udaljenost:** uz odabrano {{ui:Udaljenost}}, kliknite prvu točku, zatim drugu. Blizu kuta pokazivač se hvata za nju, blizu ruba na rub; mala oznaka uz pokazivač kaže koje. Svaki par klikova čini jedno mjerenje.
4. **Površina plohe:** odaberite {{ui:Površina plohe}} i kliknite plohu. Cijela ravna ploha se osvijetli i prikazuje se njezina površina.
5. **Ravne linije:** držite {{key:Shift}} dok birate drugu točku ili pritisnite {{ui:Ravan}} u traci da ostane tako. Linija tada ide duž jedne osi kojoj je pokazivač najbliži (u pogledu odozgo, duž X ili Y tlocrta; u ostalim pogledima duž X, Y ili Z), a oznaka pokazivača kaže „ravno duž osi“. {{key:M}} i dalje pokreće i zaustavlja Mjeri.
6. Kliknite {{ui:Očisti}} da uklonite mjerenja, ili {{ui:Gotovo}} (ili {{key:Esc}}) da prestanete mjeriti.

## Što biste trebali vidjeti

- Linija između dviju točaka s duljinom na njoj, a u traci duljina s time koliko ide duž X, Y i Z (u osima modela, Z gore), sve u {{ui:Jedinicama}} odabranim na alatnoj traci.
- Površina plohe u kvadratnim metrima, na plohi i u traci.
- Oznake ostaju uz svoja mjerenja dok kružite, pomičete i zumirate.
- Dok mjerite, klikovi ne odabiru elemente. Presječna ravnina ili kutija i dalje presijecaju model, a možete mjeriti ono što prikazuju, uključujući presječene plohe.

## Gdje je točka na Zemlji

Kliknite {{ui:Lokacija}} u traci mjerenja, zatim kliknite točku na modelu (hvata se za kutove i rubove kao i udaljenosti). Traka prikazuje:

- **geografsku širinu i dužinu**, u decimalnim stupnjevima i u stupnjevima, minutama i sekundama, u WGS 84 za početak;
- **koordinate karte** (istočni i sjeverni, zapisane u {{ui:Jedinicama}} odabranim na alatnoj traci) u vlastitom kartografskom sustavu modela, na primjer `EPSG:28356`;
- **visinu** i vertikalni datum koji navodi datoteka, te **vlastiti datum** datoteke (na primjer GDA94).

{{ui:Kopiraj}} stavlja sve to na međuspremnik u jednom retku. Sustav u kojem su geografska širina i dužina promijenite u {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Lokacija}}: WGS 84 (kao GPS i web karte), vlastiti datum datoteke ili neki drugi uobičajeni, poput ETRS89 ili NAD83.

Ovo zahtijeva georeferencirani model: onaj izvezen s koordinatama karte (pretvorba karte u projicirani sustav s EPSG oznakom). Model koji ima samo zemljopisnu širinu i dužinu lokacije dobiva približan položaj, izračunat iz točke lokacije i njezina pravog sjevera, a traka to kaže. Kad je otvoreno više modela, svaka točka koristi georeferenciranje svog modela.

:::note
Prijelaz između datuma (na primjer GDA94 u WGS 84) obavlja se bez datoteka mreže, pa je dobar na nekoliko metara; statusna traka kaže koliko je dobar. Same koordinate karte su točne.
:::

## Česte pogreške

- **„…nema georeferenciranje“.** Datoteka nema pretvorbu karte ni zemljopisnu širinu i dužinu lokacije. Izvezite je ponovo s postavljenim koordinatnim sustavom (zajedničke koordinate / točka premjera u alatu za izradu).
- **Koordinate karte, ali bez geografske širine i dužine.** Datoteka navodi svoj kartografski sustav bez EPSG oznake ili s oznakom koja nije na popisu; statusna traka kaže koja.

- **Točka pada na plohu, a ne na kut.** Hvatanje gleda element ispod pokazivača. Približite se kutu ili zumirajte.
- **Površina je manja nego što očekujete.** Otvori se ne uračunavaju, a ploha koja se savija je nekoliko ploha: kliknite svaku.
- **{{key:Esc}} je zaustavio mjerenje.** Prvi {{key:Esc}} odbacuje napola gotovu udaljenost; drugi zaustavlja mjerenje.

## Dalje

- [Presijecite IFC model presječnom ravninom](topic:section-plane)
- [Sakrijte, izolirajte i prikažite elemente kroz njih](topic:hide-and-isolate)

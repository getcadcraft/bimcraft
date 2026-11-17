---
title: Tasteri i miš
summary: Svaka radnja tasterom, mišem, touchpad-om i dodirom u BimCraft-u, grupisana prema onome što gledate.
keywords: tasteri, miš, prečice, skraćenice, touchpad, dodir, okretanje, pomeranje pogleda, zumiranje, sakrij, izdvoji, providno, opozovi, ponovi, kopiraj, nalepi, dupliraj, sačuvaj, uklopi, pregled za štampu, Esc, podešavanja, crtanje, zid, vrata, prozor, osnova
from: 5c6eedce
---

BimCraft ima malo prečica. Većinu posla radite mišem i panelima. Prečice napisane sa {{key:Mod}} koriste Command na Mac-u, a Ctrl na ostalim. Pogledajte [Tasteri, miševi i touchpad-ovi](common:keys) za to kako su tasteri napisani u ovoj pomoći.

## Svuda

| Taster | Šta radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Menja režime ekrana: normalan, ceo ekran, ceo ekran sa sakrivenim trakama. Ctrl na svim platformama, uključujući Mac |
| {{key:Esc}} | Izlazi iz celog ekrana |
| {{key:Mod+,}} | Otvara {{ui:Podešavanja}}. Pogledajte [Podešavanja BimCraft-a](topic:settings) |
| {{key:Tab}} | Prelazi između dugmadi, polja za štikliranje i vrednosti. Do svake kontrole može se doći sa tastature |

## 3D prikaz (IFC modeli)

| Taster ili radnja | Šta radi |
|---|---|
| {{key:F}} | Uklapa ceo model, pogled iz tri četvrtine (isto kao {{ui:Uklopi}}) |
| {{key:Esc}} | Briše izbor, ili prekida postavljanje ili lepljenje |
| Klik | Bira element ispod pokazivača; klik na praznu pozadinu briše izbor |
| {{key:Mod}}+klik ili {{key:Shift}}+klik | Dodaje element u izbor ili ga izbacuje |
| {{key:H}} | Sakriva izabrane elemente. Pogledajte [Sakrivanje, izdvajanje i providnost elemenata](topic:hide-and-isolate) |
| {{key:I}} | Prikazuje samo izabrane elemente (izdvaja) |
| {{key:T}} | Prikazuje izabrane elemente, a sve ostalo čini providnim |
| {{key:Shift+H}} | Ponovo prikazuje svaki element |
| {{ui:Šetnja}} | Zatim {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice šetaju, {{key:Shift}} trči, prevlačenje gleda oko sebe, {{key:Esc}} zaustavlja. Pogledajte [Šetnja kroz model](topic:walk) |
| {{key:M}} | Meri rastojanja i površine lica. Pogledajte [Merenje rastojanja, površina lica i položaja u 3D](topic:measure) |
| Prevlačenje levim tasterom | Okreće pogled |
| Prevlačenje desnim tasterom | Pomera pogled |
| {{key:Shift}} ili {{key:Mod}} i prevlačenje levim tasterom | Pomera pogled (zgodno na touchpad-u) |
| Okretanje točkića ili prevlačenje srednjim tasterom | Zumira |
| Dvoprstno skrolovanje ili štipanje na touchpad-u | Zumira |
| Jedan prst (dodir) | Okreće pogled; dodir bira |
| Dva prsta (dodir) | Štipanje za zum, zajedničko pomeranje za pomeranje pogleda |

| {{key:X}} | Ravan preseka uključena i isključena. Pogledajte [Presecanje IFC modela ravninom preseka](topic:section-plane) |
|---|---|
| {{key:Shift+X}} | Kutija preseka oko izabranih elemenata, sa prostorijom podešenom u Podešavanjima |

Za {{ui:Gore}}, {{ui:Napred}} i {{ui:Sa strane}} nema tastera; koristite dugmad.

## Uređivanje

Iste komande su na alatnoj traci: {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Nalepi}} i meni {{ui:Više}}, koji prikazuje svaki taster. Rade u 3D prikazu IFC modela, a ne dok kucate u polju. Pogledajte [Kopiranje, lepljenje i dupliranje stavki biblioteke](topic:copy-paste).

| Taster | Šta radi |
|---|---|
| {{key:Mod+Z}} | Opoziva poslednju promenu |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponavlja ono što je Opozovi uzelo nazad |
| {{key:Mod+C}} | Kopira izabrane elemente (njihova imena i svojstva idu i u privremenu memoriju kao tekst) |
| {{key:Mod+X}} | Seče izabrane elemente: kopira ih, pa ih briše |
| {{key:Mod+V}} | Lepi ono što ste kopirali: prati pokazivač, kliknite gde treba da ide |
| {{key:Mod+Shift+V}} | Lepi na mestu: odakle je isečeno, ili pored originala posle kopiranja |
| {{key:Mod+D}} | Dupliranje: kopira izabrane elemente i počinje njihovo lepljenje |
| {{key:Delete}} | Briše izabrane elemente, sa njihovim delovima i otvorima. Pogledajte [Brisanje, sečenje, kopiranje i lepljenje građevinskih elemenata](topic:edit-elements) |
| {{key:Mod+A}} | Bira svaki prikazani element |
| {{key:Esc}} | Ne bira ništa |

Kada je tekst izabran na stranici, {{key:Mod+C}} kopira taj tekst kao obično.

## Prikaz osnove (Crtanje)

Ovo radi dok je {{ui:Crtanje}} uključeno i ne kucate u polju. Pogledajte [Crtanje zidova](topic:draw-walls) i [Vrata i prozori](topic:doors-and-windows).

| Taster ili radnja | Šta radi |
|---|---|
| {{key:V}} | {{ui:Izaberi}} |
| {{key:W}} | {{ui:Zid}} |
| {{key:D}} | {{ui:Vrata}} |
| {{key:N}} | {{ui:Prozor}} |
| {{key:H}} | Sa {{ui:Vrata}} ili {{ui:Prozor}}: šarke na drugom kraju |
| {{key:Shift}} dok crtate zid | Drži ga pod 0°, 90°, 180° ili 270° |
| Cifre i oznake za stope i inče (`'` i `"`) | Počinje kucanje dužine u polje {{ui:Dužina}}; {{key:Enter}} je koristi |
| {{key:Enter}}, {{key:Esc}}, desni klik ili dvoklik | Završava zid koji crtate; {{key:Esc}} još jednom vraća na {{ui:Izaberi}} |
| {{key:Delete}} | Briše izabrane zidove, vrata i prozore; preostali zidovi se ponovo spajaju |
| {{key:F}} sa pokazivačem nad osnovom | Uklapa osnovu |
| Okretanje točkića | Zumira oko pokazivača |
| Prevlačenje srednjim ili desnim tasterom, ili {{key:Space}} i prevlačenje | Pomera pogled; sa uključenim {{ui:Izaberi}}, običan prevlak takođe pomera pogled |
| Prevlačenje vrata ili prozora sa {{ui:Izaberi}} | Pomera ih duž zida ili na drugi zid |
| Dva prsta (dodir) | Štipanje za zum, zajedničko pomeranje za pomeranje pogleda |

## Postavljanje i lepljenje stavki biblioteke

| Taster | Šta radi |
|---|---|
| {{key:R}} | Okreće stavku za 90° |
| {{key:Tab}} | Uključuje i isključuje hvatanje za zid: zadnja strana stavke ide uz najbliži zid |
| {{key:Enter}} u **X, Y (mm)** | Postavlja na ukucani položaj |
| {{key:Esc}} | Prekida postavljanje ili lepljenje |

## Uređivanje IFC vrednosti

| Taster | Šta radi |
|---|---|
| {{key:Enter}} | Zadržava vrednost koju ste ukucali |
| {{key:Esc}} | Otkazuje i vraća staru vrednost |
| Klik na drugo mesto | Zadržava vrednost koju ste ukucali |
| {{key:Mod+Z}} | Opoziva poslednju promenu. Samo dok imate nesačuvane promene i ne kucate u polju |
| {{key:Mod+Y}} | Ponavlja ono što je Opozovi uzelo nazad |
| {{key:Mod+S}} | Čuva kao IFC. Samo dok imate nesačuvane promene; inače se otvara sopstvena komanda čuvanja pregledača |

Za uređivanje samo sa tastature: pritisnite {{key:Tab}} dok vrednost ne bude istaknuta, pa pritisnite {{key:Enter}} da počnete kucanje.

## 2D crteži (DWG i DXF)

| Taster ili radnja | Šta radi |
|---|---|
| {{key:F}} | Uklapa crtež ili list |
| {{key:P}} | Uključuje i isključuje pregled za štampu |
| Dvoklik | Uklapa |
| Prevlačenje bilo kojim tasterom | Pomera pogled |
| Okretanje točkića | Zumira kod pokazivača |
| Dvoprstno skrolovanje ili štipanje na touchpad-u | Zumira kod pokazivača. Dvoprstno skrolovanje ne pomera pogled |
| Jedan prst (dodir) | Pomera pogled. Zum štipanjem za crteže još nije napravljen |

## Crteži u 3D

| Taster ili radnja | Šta radi |
|---|---|
| {{key:3}} | Uključuje i isključuje 3D (takođe na 2D prikazu) |
| {{key:F}} | Obuhvat: ceo crtež |
| Prevlačenje srednjim ili levim tasterom | Okreće pogled |
| Prevlačenje desnim tasterom, ili {{key:Shift}} i prevlačenje | Pomera pogled |
| Okretanje točkića | Zumira ka onome što je ispod pokazivača |
| Dvoprsto prevlačenje na touchpad-u | Okreće pogled; sa {{key:Shift}}, pomera pogled |
| Štipanje na touchpad-u | Zumira |
| Jedan prst (dodir) | Okreće pogled |
| Dva prsta (dodir) | Štipanje za zum, zajedničko pomeranje za pomeranje pogleda |

{{key:F}}, {{key:P}} i {{key:3}} ne rade dok kucate u polju, dok je prikazana tabela opreme, ili kada držite {{key:Mod}} ili {{key:Alt}}.

## Datoteke

| Radnja | Šta radi |
|---|---|
| Prevlačenje datoteke na stranicu | Otvara je |
| Prevlačenje fascikle na stranicu | Otvara je kao fasciklu projekta, bez upita za dozvolu |

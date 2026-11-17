---
title: Tasteri i miš
summary: Svaka radnja tasterom, mišem, touchpadom i dodirom u BimCraft-u, grupisana po tome šta gledate.
keywords: tastatura, prečice, tasteri, miš, touchpad, dodir, orbita, pomjeranje, zumiranje, sakrij, izoluj, providnost, poništi, ponovi, kopiraj, zalijepi, dupliraj, spasi, uklopi, pogled za štampu, escape, postavke, crtaj, zid, vrata, prozor, osnova
from: 5c6eedce
---

BimCraft ima malo prečica. Većina rada se radi mišem i panelima. Prečice napisane sa {{key:Mod}} koriste Command na Macu, a Ctrl na ostalim. Vidi [Tasteri, miševi i touchpadovi](common:keys) za to kako se tasteri pišu u ovoj pomoći.

## Svuda

| Taster | Šta radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Prebacuje režime ekrana: normalan, cijeli ekran, cijeli ekran sa skrivenim trakama. Ctrl na svakoj platformi, uključujući Mac |
| {{key:Esc}} | Izlazi iz cijelog ekrana |
| {{key:Mod+,}} | Otvara {{ui:Postavke}}. Vidi [BimCraft postavke](topic:settings) |
| {{key:Tab}} | Kreće se između dugmadi, polja za potvrdu i vrijednosti. Svaka kontrola je dostupna sa tastature |

## 3D pogled (IFC modeli)

| Taster ili radnja | Šta radi |
|---|---|
| {{key:F}} | Uklapa cijeli model, pogled u tri četvrtine (isto kao {{ui:Uklopi}}) |
| {{key:Esc}} | Briše izbor, ili prestaje postavljanje ili lijepljenje |
| Klik | Bira element ispod pokazivača; klik na prazno pozadinu briše izbor |
| {{key:Mod}}+klik ili {{key:Shift}}+klik | Dodaje element izboru ili ga izbacuje |
| {{key:H}} | Sakriva izabrane elemente. Vidi [Sakrivanje, izolovanje i gledanje kroz elemente](topic:hide-and-isolate) |
| {{key:I}} | Prikazuje samo izabrane elemente (izolacija) |
| {{key:T}} | Prikazuje izabrane elemente, sve ostalo providno |
| {{key:Shift+H}} | Ponovo prikazuje svaki element |
| {{ui:Šetnja}} | Zatim {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice hodaju, {{key:Shift}} trči, prevlačenje gleda okolo, {{key:Esc}} zaustavlja. Vidi [Šetnja kroz model](topic:walk) |
| {{key:M}} | Mjeri udaljenosti i površine lica. Vidi [Mjerenje udaljenosti, površina lica i položaja u 3D](topic:measure) |
| Prevlačenje lijevim dugmetom | Orbita |
| Prevlačenje desnim dugmetom | Pomjeranje |
| {{key:Shift}} ili {{key:Mod}} i prevlačenje lijevim dugmetom | Pomjeranje (zgodno na touchpadu) |
| Pomicanje točkića ili prevlačenje srednjim dugmetom | Zumiranje |
| Dvoprstni pomak ili štipanje na touchpadu | Zumiranje |
| Jedan prst (dodir) | Orbita; dodir bira |
| Dva prsta (dodir) | Štipanje za zumiranje, zajedničko pomjeranje za pomjeranje pogleda |

| {{key:X}} | Ravnina presjeka uključena i isključena. Vidi [Presijecanje IFC modela ravninom presjeka](topic:section-plane) |
| {{key:Shift+X}} | Kutija presjeka oko izabranih elemenata, sa prostorijom postavljenom u Postavkama |

Za {{ui:Gore}}, {{ui:Sprijeda}} i {{ui:Strana}} nema tastera; koristite dugmad.

## Uređivanje

Iste komande su na traci sa alatima: {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i meni {{ui:Više}}, koji prikazuje svaki taster. Rade u 3D pogledu IFC modela, a ne dok kucate u polju. Vidi [Kopiranje, lijepljenje i dupliranje stavki biblioteke](topic:copy-paste).

| Taster | Šta radi |
|---|---|
| {{key:Mod+Z}} | Poništava posljednju promjenu |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovo radi ono što je Poništi vratilo |
| {{key:Mod+C}} | Kopira izabrane elemente (njihova imena i svojstva također idu u međuspremnik kao tekst) |
| {{key:Mod+X}} | Izrezuje izabrane elemente: kopira ih, zatim briše |
| {{key:Mod+V}} | Zalijepi ono što ste kopirali: prati pokazivač, kliknite gdje ide |
| {{key:Mod+Shift+V}} | Lijepi na mjestu: gdje je izrezano, ili pored originala nakon kopiranja |
| {{key:Mod+D}} | Dupliranje: kopira izabrane elemente i počinje lijepljenje |
| {{key:Delete}} | Briše izabrane elemente, sa njihovim dijelovima i otvorima. Vidi [Brisanje, izrezivanje, kopiranje i lijepljenje građevinskih elemenata](topic:edit-elements) |
| {{key:Mod+A}} | Bira svaki prikazani element |
| {{key:Esc}} | Ne bira ništa |

Kada je tekst izabran na stranici, {{key:Mod+C}} kopira taj tekst kao i obično.

## Pogled osnove (Crtanje)

Ovo radi dok je {{ui:Crtanje}} uključeno i dok ne kucate u polje. Vidi [Crtanje zidova](topic:draw-walls) i [Vrata i prozori](topic:doors-and-windows).

| Taster ili radnja | Šta radi |
|---|---|
| {{key:V}} | {{ui:Odaberi}} |
| {{key:W}} | {{ui:Zid}} |
| {{key:D}} | {{ui:Vrata}} |
| {{key:N}} | {{ui:Prozor}} |
| {{key:H}} | Sa {{ui:Vrata}} ili {{ui:Prozor}}: šarke na drugom kraju |
| {{key:Shift}} dok crtate zid | Zadržava ga na 0°, 90°, 180° ili 270° |
| Cifre i oznake za stope i inče (`'` i `"`) | Počinje kucanje dužine u polje {{ui:Dužina}}; {{key:Enter}} je koristi |
| {{key:Enter}}, {{key:Esc}}, desni klik ili dupli klik | Završava zid koji crtate; {{key:Esc}} ponovo vraća na {{ui:Odaberi}} |
| {{key:Delete}} | Briše izabrane zidove, vrata i prozore; preostali zidovi se ponovo spajaju |
| {{key:F}} sa pokazivačem nad osnovom | Uklapa osnovu |
| Pomicanje točkića | Zumira oko pokazivača |
| Prevlačenje srednjim ili desnim dugmetom, ili {{key:Space}} i prevlačenje | Pomjeranje; sa uključenim {{ui:Odaberi}}, običan prevlak također pomjera |
| Prevlačenje vrata ili prozora sa {{ui:Odaberi}} | Pomjera ga duž zida ili na drugi zid |
| Dva prsta (dodir) | Štipanje za zumiranje, zajedničko pomjeranje za pomjeranje |

## Postavljanje i lijepljenje stavki iz biblioteke

| Taster | Šta radi |
|---|---|
| {{key:R}} | Okreće stavku za 90° |
| {{key:Tab}} | Uključuje i isključuje hvatanje za zid: leđa stavke idu uz najbliži zid |
| {{key:Enter}} u **X, Y (mm)** | Postavlja na upisanu poziciju |
| {{key:Esc}} | Prestaje postavljanje ili lijepljenje |

## Uređivanje IFC vrijednosti

| Taster | Šta radi |
|---|---|
| {{key:Enter}} | Zadržava vrijednost koju ste upisali |
| {{key:Esc}} | Otkazuje i vraća staru vrijednost |
| Klik drugdje | Zadržava vrijednost koju ste upisali |
| {{key:Mod+Z}} | Poništava posljednju promjenu. Samo dok imate nesačuvane promjene i ne kucate u polje |
| {{key:Mod+Y}} | Ponovo radi ono što je Poništi vratilo |
| {{key:Mod+S}} | Spasi kao IFC. Samo dok imate nesačuvane promjene; inače se otvara naredba za čuvanje samog pregledača |

Da uređujete samo tastaturom: pritisnite {{key:Tab}} dok vrijednost ne bude označena, zatim pritisnite {{key:Enter}} da počnete kucati.

## 2D crteži (DWG i DXF)

| Taster ili radnja | Šta radi |
|---|---|
| {{key:F}} | Uklapa crtež ili list |
| {{key:P}} | Uključuje i isključuje pogled za štampu |
| Dupli klik | Uklapa |
| Prevlačenje bilo kojim dugmetom | Pomjeranje |
| Pomicanje točkića | Zumira kod pokazivača |
| Dvoprsti pomak ili štipanje na touchpadu | Zumira kod pokazivača. Dvoprsti pomak ne pomjera |
| Jedan prst (dodir) | Pomjera. Zumiranje štipanjem za crteže još nije izrađeno |

## Crteži u 3D

| Taster ili radnja | Šta radi |
|---|---|
| {{key:3}} | 3D uključeno i isključeno (također na 2D pogledu) |
| {{key:F}} | Obuhvat: cijeli crtež |
| Prevlačenje srednjim ili lijevim dugmetom | Orbita |
| Prevlačenje desnim dugmetom, ili {{key:Shift}} i prevlačenje | Pomjeranje |
| Pomicanje točkića | Zumira prema onome što je ispod pokazivača |
| Dvoprsti prevlak na touchpadu | Orbita; sa {{key:Shift}}, pomjeranje |
| Štipanje na touchpadu | Zumiranje |
| Jedan prst (dodir) | Orbita |
| Dva prsta (dodir) | Štipanje za zumiranje, zajedničko pomjeranje za pomjeranje |

{{key:F}}, {{key:P}} i {{key:3}} ne rade dok kucate u polju, dok je raspored opreme prikazan, ili kada držite {{key:Mod}} ili {{key:Alt}}.

## Datoteke

| Radnja | Šta radi |
|---|---|
| Prevucite datoteku na stranicu | Otvara je |
| Prevucite folder na stranicu | Otvara ga kao folder projekta, bez upita za dozvolu |

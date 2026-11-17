---
title: Tipke i miš
summary: Svaka tipka, miš, dodirna podloga i dodirna radnja u programu BimCraft, grupirane prema onome što gledate.
keywords: tipkovnica, prečaci, tipkovni prečaci, tipke, miš, dodirna podloga, dodir, kruženje, pomicanje prikaza, zumiranje, sakrij, izoliraj, prozirno, poništi, ponovi, kopiraj, zalijepi, dupliciraj, spremi, prilagodi, ispis prikaza, Esc, postavke, crtanje, zid, vrata, prozor, tlocrt
from: 5c6eedce
---

BimCraft ima malo prečaca. Većinu posla obavljate mišem i pločama. Prečaci napisani s {{key:Mod}} koriste Command na Macu, a Ctrl drugdje. Pogledajte [Tipke, miševi i dodirne podloge](common:keys) za način na koji su tipke napisane u ovoj pomoći.

## Svugdje

| Tipka | Što radi |
|---|---|
| {{key:Ctrl+Shift+F}} | Prebacuje načine prikaza zaslona: normalan, cijeli zaslon, cijeli zaslon sa skrivenim trakama. Ctrl na svim platformama, uključujući Mac |
| {{key:Esc}} | Izlazi iz cijelog zaslona |
| {{key:Mod+,}} | Otvara {{ui:Postavke}}. Vidi [Postavke programa BimCraft](topic:settings) |
| {{key:Tab}} | Premješta se između gumba, potvrdnih okvira i vrijednosti. Svaki upravljački element dostupan je tipkovnicom |

## 3D prikaz (IFC modeli)

| Tipka ili radnja | Što radi |
|---|---|
| {{key:F}} | Prilagođava cijeli model, pogled u tri četvrtine (isto kao {{ui:Prilagodi}}) |
| {{key:Esc}} | Poništava odabir ili prestaje s postavljanjem ili lijepljenjem |
| Klik | Odabire element ispod pokazivača; kliknite praznu pozadinu za poništavanje |
| {{key:Mod}}+klik ili {{key:Shift}}+klik | Dodaje element odabiru ili ga izuzima |
| {{key:H}} | Sakriva odabrane elemente. Vidi [Sakrivanje, izoliranje i prozirnost elemenata](topic:hide-and-isolate) |
| {{key:I}} | Prikazuje samo odabrane elemente (izolira) |
| {{key:T}} | Prikazuje odabrane elemente, a sve ostalo čini prozirnim |
| {{key:Shift+H}} | Ponovno prikazuje sve elemente |
| {{ui:Šetnja}} | Zatim tipke {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice za kretanje, {{key:Shift}} za trčanje, povlačenje gleda oko, {{key:Esc}} zaustavlja. Vidi [Šetnja kroz model](topic:walk) |
| {{key:M}} | Mjeri udaljenosti i površine ploha. Vidi [Mjerenje udaljenosti, površina ploha i položaja u 3D](topic:measure) |
| Povlačenje lijevom tipkom | Kruži oko modela |
| Povlačenje desnom tipkom | Pomiče prikaz |
| {{key:Shift}} ili {{key:Mod}} i povlačenje lijevom tipkom | Pomiče prikaz (praktično na dodirnoj podlozi) |
| Pomicanje kotačića ili povlačenje srednjom tipkom | Zumira |
| Pomicanje dvama prstima ili stiskanje na dodirnoj podlozi | Zumira |
| Jedan prst (dodir) | Kruži; dodir odabire |
| Dva prsta (dodir) | Stisak za zumiranje, pomicanje zajedno za pomicanje prikaza |

| {{key:X}} | Ravnina presjeka uključena i isključena. Vidi [Presijecanje IFC modela ravninom presjeka](topic:section-plane) |
| {{key:Shift+X}} | Kutija presjeka oko odabranih elemenata, s razmakom iz postavki |

Za {{ui:Gore}}, {{ui:Naprijed}} i {{ui:Bočno}} nema tipki; koristite gumbe.

## Uređivanje

Iste naredbe nalaze se na alatnoj traci: {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i izbornik {{ui:Više}}, koji prikazuje svaku tipku. Rade u 3D prikazu IFC modela, a ne dok upisujete u polje. Vidi [Kopiranje, lijepljenje i dupliciranje stavki knjižnice](topic:copy-paste).

| Tipka | Što radi |
|---|---|
| {{key:Mod+Z}} | Poništava zadnju promjenu |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponavlja ono što je poništeno |
| {{key:Mod+C}} | Kopira odabrane elemente (njihovi nazivi i svojstva također idu u međuspremnik kao tekst) |
| {{key:Mod+X}} | Izrezuje odabrane elemente: kopira ih, zatim briše |
| {{key:Mod+V}} | Lijepi ono što ste kopirali: prati pokazivač, kliknite gdje će ići |
| {{key:Mod+Shift+V}} | Lijepi na isto mjesto: gdje je izrezano, ili uz izvornike nakon kopiranja |
| {{key:Mod+D}} | Dupliciranje: kopira odabrane elemente i započinje njihovo lijepljenje |
| {{key:Delete}} | Briše odabrane elemente, s njihovim dijelovima i otvorima. Vidi [Brisanje, izrezivanje, kopiranje i lijepljenje građevnih elemenata](topic:edit-elements) |
| {{key:Mod+A}} | Odabire svaki prikazani element |
| {{key:Esc}} | Poništava odabir |

Kada je tekst na stranici odabran, {{key:Mod+C}} kopira taj tekst kao i obično.

## Prikaz tlocrta (Crtanje)

Ovo radi dok je {{ui:Crtanje}} uključeno i dok ne upisujete u polje. Vidi [Crtanje zidova](topic:draw-walls) i [Vrata i prozori](topic:doors-and-windows).

| Tipka ili radnja | Što radi |
|---|---|
| {{key:V}} | {{ui:Odaberi}} |
| {{key:W}} | {{ui:Zid}} |
| {{key:D}} | {{ui:Vrata}} |
| {{key:N}} | {{ui:Prozor}} |
| {{key:H}} | Uz {{ui:Vrata}} ili {{ui:Prozor}}: šarke na drugom kraju |
| {{key:Shift}} dok crtate zid | Držite ga na 0°, 90°, 180° ili 270° |
| Brojke i oznake stopa i palaca (`'` i `"`) | Počinje upisivanje duljine u polje {{ui:Duljina}}; {{key:Enter}} ju koristi |
| {{key:Enter}}, {{key:Esc}}, desni klik ili dvostruki klik | Završava zid koji crtate; ponovni {{key:Esc}} vraća na {{ui:Odaberi}} |
| {{key:Delete}} | Briše odabrane zidove, vrata i prozore; preostali zidovi se ponovno spajaju |
| {{key:F}} s pokazivačem iznad tlocrta | Prilagođava tlocrt |
| Pomicanje kotačića | Zumira oko pokazivača |
| Povlačenje srednjom ili desnom tipkom, ili {{key:Space}} i povlačenje | Pomiče prikaz; uz uključeno {{ui:Odaberi}} obično povlačenje također pomiče prikaz |
| Povlačenje vrata ili prozora uz {{ui:Odaberi}} | Pomiče ga uz njegov zid ili na drugi zid |
| Dva prsta (dodir) | Stisak za zumiranje, pomicanje zajedno za pomicanje prikaza |

## Postavljanje i lijepljenje stavki knjižnice

| Tipka | Što radi |
|---|---|
| {{key:R}} | Okreće stavku za 90° |
| {{key:Tab}} | Hvatanje za zid uključeno i isključeno: leđa stavke idu uz najbliži zid |
| {{key:Enter}} u **X, Y (mm)** | Postavlja na upisani položaj |
| {{key:Esc}} | Prestaje s postavljanjem ili lijepljenjem |

## Uređivanje IFC vrijednosti

| Tipka | Što radi |
|---|---|
| {{key:Enter}} | Zadržava upisanu vrijednost |
| {{key:Esc}} | Odustaje i vraća staru vrijednost |
| Klik drugdje | Zadržava upisanu vrijednost |
| {{key:Mod+Z}} | Poništava zadnju promjenu. Samo dok imate nespremljene promjene i ne upisujete u polje |
| {{key:Mod+Y}} | Ponavlja ono što je poništeno |
| {{key:Mod+S}} | Sprema kao IFC. Samo dok imate nespremljene promjene; inače se otvara vlastita naredba preglednika za spremanje |

Za uređivanje samo tipkovnicom: pritišćite {{key:Tab}} dok vrijednost nije označena, zatim pritisnite {{key:Enter}} za početak upisivanja.

## 2D crteži (DWG i DXF)

| Tipka ili radnja | Što radi |
|---|---|
| {{key:F}} | Prilagođava crtež ili list |
| {{key:P}} | Ispis prikaza uključeno i isključeno |
| Dvostruki klik | Prilagođava |
| Povlačenje bilo kojom tipkom | Pomiče prikaz |
| Pomicanje kotačića | Zumira kod pokazivača |
| Pomicanje dvama prstima ili stiskanje na dodirnoj podlozi | Zumira kod pokazivača. Pomicanje dvama prstima ne pomiče prikaz |
| Jedan prst (dodir) | Pomiče prikaz. Zumiranje stiskanjem za crteže još nije izrađeno |

## Crteži u 3D

| Tipka ili radnja | Što radi |
|---|---|
| {{key:3}} | 3D uključeno i isključeno (također u 2D prikazu) |
| {{key:F}} | Opseg: cijeli crtež |
| Povlačenje srednjom ili lijevom tipkom | Kruži |
| Povlačenje desnom tipkom ili {{key:Shift}} i povlačenje | Pomiče prikaz |
| Pomicanje kotačića | Zumira prema onome što je pod pokazivačem |
| Prijelaz dvama prstima na dodirnoj podlozi | Kruži; uz {{key:Shift}}, pomiče prikaz |
| Stiskanje na dodirnoj podlozi | Zumira |
| Jedan prst (dodir) | Kruži |
| Dva prsta (dodir) | Stisak za zumiranje, pomicanje zajedno za pomicanje prikaza |

{{key:F}}, {{key:P}} i {{key:3}} ne rade dok upisujete u polje, dok je prikazana specifikacija opreme ili kada držite {{key:Mod}} ili {{key:Alt}}.

## Datoteke

| Radnja | Što radi |
|---|---|
| Povucite datoteku na stranicu | Otvara je |
| Povucite mapu na stranicu | Otvara je kao mapu projekta, bez upita za dopuštenje |

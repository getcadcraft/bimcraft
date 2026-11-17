---
title: Pogledajte DWG ili DXF crtež u 3D
summary: Prebacite prostor modela crteža na 3D da vidite kote, debljinu, 3D površi, mreže i blokove; okrenite ga, kliknite objekat da vidite njegova svojstva i pogledajte šta još nije nacrtano.
keywords: 3d, dwg, dxf, crtež, prostor modela, orbita, presek, sečenje, ravan sečenja, izbor, izaberi, svojstva, atributi, ručka, kota, debljina, izvlačenje, 3dface, polyface, mreža, 3D polilinija, blokovi, prikazi, perspektiva, paralelno, obuhvat, acis, tela
from: a0c6cd17
---

## Šta ćete uraditi

Pogledajte prostor modela crteža u 3D. Linije i polilinije stoje na svojim stvarnim visinama, objekti sa debljinom stoje kao zidovi, a 3D površi, mreže i 3D blokovi prikazuju se kao površi oko kojih možete da se okrećete. Listovi ostaju 2D.

## Koraci

1. Otvorite DWG ili DXF. Vidi [Pregled DWG ili DXF crteža](topic:view-dwg). Otvara se u 3D, osim ako u {{ui:Podešavanja}} › {{ui:BimCraft}} › **Crteži se otvaraju u** ne piše {{ui:Model (2D)}}.
2. Iz 2D kliknite {{ui:3D}} na traci iznad crteža, ili pritisnite {{key:3}}.
3. Sačekajte trenutak prvi put: statusna linija kaže „Pravim crtež u 3D…”, pa koliko linija i površi prikazuje.
4. Okrećite, pomerajte i zumirajte (vidi tabelu ispod).
5. Kliknite prikaz u drugoj traci: {{ui:Izo}}, {{ui:Gore}}, {{ui:Dole}}, {{ui:Napred}}, {{ui:Nazad}}, {{ui:Levo}} ili {{ui:Desno}}.
6. Kliknite {{ui:Perspektiva}} da prebacujete između perspektivnog i paralelnog prikaza.
7. Kliknite {{ui:Obuhvat}} ili pritisnite {{key:F}} da ponovo vidite ceo crtež.
8. Kliknite {{ui:3D}} ponovo, pritisnite {{key:3}}, ili kliknite {{ui:Model}} ili karticu lista da se vratite u 2D.

## Šta treba da vidite

- Prostor modela u 3D, Z naviše, u bojama samog crteža. Površi su malo svetlije od svojih ivica.
- Slojevi koje isključite u {{ui:Slojevi}} nestaju i iz 3D prikaza.
- Desno: broj linija i površi, veličina crteža u X, Y i Z, **Samo u 2D prikazu** i **Još nije nacrtano**.

## Presecite ravan preseka

Kliknite {{ui:Presek}} na 3D traci, ili pritisnite {{key:X}}. Traka ispod radi kao kod IFC modela (vidi [Presecanje IFC modela ravninom preseka](topic:section-plane)): sečete od {{ui:Gore}}, {{ui:Napred}} ili {{ui:Sa strane}}, prevucite ili ukucajte pomeraj (ovde u jedinicama samog crteža), a {{ui:Obrni}} zadržava drugu stranu. Ono što ravan odseče ne može se izabrati. Povratak u 2D uklanja presek.

## Pogledajte svojstva objekta

Kliknite objekat u 3D prikazu. On dobija boju izbora, a {{ui:Svojstva}} prikazuje šta fajl kaže o njemu: tip, sloj, boju, tip linije i ručku, zatim njegove sopstvene podatke, kao početak, kraj i dužinu linije, centar i poluprečnik kruga, uglove 3D površi, ili za referencu bloka blok, tačku umetanja, razmeru, rotaciju i vrednosti atributa.

- Referenca bloka bira se kao celina, zajedno sa blokovima ugnježdenim u njoj.
- Klik nekoliko piksela od linije bira tu liniju.
- Držite {{key:Mod}} i kliknite da izaberete još objekata ili da jedan uklonite. {{ui:Svojstva}} tada ih broji po tipu.
- {{key:Esc}} ili klik na prazan prostor poništava izbor.
- Objekti na slojevima koje ste isključili ne mogu se izabrati.

## Kretanje

:::mouse
| Za | Uradite ovo |
|---|---|
| Okretanje | Prevucite srednjim dugmetom, ili levim |
| Pomeranje | Prevucite desnim dugmetom, ili držite {{key:Shift}} i prevucite |
| Zumiranje | Okrenite točkić; zumira prema onome što je ispod pokazivača |
| Pogled na sve | {{ui:Obuhvat}} ili {{key:F}} |
| Gledanje sa strane | Kliknite stranu, ivicu ili ugao kocke pogleda u donjem desnom uglu |
:::

Kocka pogleda može se zameniti ikonom osa, ili sakriti, u {{ui:Podešavanja}}. Vidi [Podešavanja BimCraft-a](topic:settings).

:::mac mouse
Na tačpedu prevucite sa dva prsta za okretanje, držite {{key:Shift}} i prevucite za pomeranje, a štipanjem zumirajte.
:::

:::touch
Prevucite jednim prstom za okretanje. Stisnite dvama prstima za zumiranje, a pomerite ih zajedno za pomeranje.
:::

## Šta se crta u 3D

| U crtežu | U 3D |
|---|---|
| Linije, 3D polilinije | Na svojim stvarnim visinama |
| Polilinije, krugovi, lukovi, elipse | U svojoj ravni, na svojoj koti, nagnuti kada ih crtež nagne |
| Debljina na linijama, polilinijama, krugovima i lukovima | Zidovi te visine; krugovi su zatvoreni gore i dole |
| 3D površi, polyface mreže, poligonske mreže | Osenčene površi sa svojim vidljivim ivicama |
| Blokovi | Postavljeni, okrenuti i razmereni u 3D, ugnježdeni blokovi takođe |
| Šrafure | Njihove konture |
| Obični 2D linijski crtež | Ravan, tamo gde je nacrtan |

## Samo u 2D prikazu

Tekst, višeredni tekst i vidljivi atributi blokova crtaju se u 3D, u svojoj ravni, na svojoj visini, a klik na njih ih bira. Široke polilinije pokazuju svoju širinu kao ravnu traku. Višestruke pokazne linije, slike i šabloni šrafure broje se pod **Samo u 2D prikazu**: pogledajte ih na kartici {{ui:Model}} ili na listovima.

## Još nije nacrtano

Tela i površi sačuvane kao ACIS tela (3D tela, tela, oblasti i površi) i mreže sa podelom navedeni su pod **Još nije nacrtano**, sa brojem. Preskaču se, ne pogađa se.

## Česte greške

- **Sve izgleda ravno.** Crtež je 2D: njegove linije nemaju visinu. Kliknite {{ui:Napred}} da proverite; ravan crtež se prikazuje kao linija.
- **Čvrsti model ništa ne prikazuje.** Tela napravljena alatom za modelovanje čvrstih tela su ACIS tela, navedena pod **Još nije nacrtano**. Izvezite model kao IFC ili kao 3D površi iz programa u kojem je napravljen.
- **Crtež je mala gomila u sredini.** Nešto daleko u prostoru modela, na primer stara kopija osnove, povećava obuhvat. Uvećajte točkićem tamo gde želite da gledate.

## Dalje

- [Rad sa slojevima i listovima](topic:dwg-layers-sheets)
- [Presecanje IFC modela ravninom preseka](topic:section-plane)

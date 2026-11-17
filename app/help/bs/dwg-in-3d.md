---
title: Pogledajte DWG ili DXF crtež u 3D
summary: Prebacite prostor modela crteža u 3D da vidite kote, debljinu, 3D površine, mreže i blokove, okrećite se oko njega, kliknite objekat da vidite njegova svojstva i saznajte šta još nije iscrtano.
keywords: 3d, dwg, dxf, crtež, prostor modela, orbita, presjek, rez, ravan rezanja, odabir, izbor, svojstva, atributi, oznaka, kota, debljina, ekstruzija, 3dface, poliface, mreža, 3d polilinija, blokovi, pogledi, perspektiva, paralelno, obuhvat, acis, tijela
from: a0c6cd17
---

## Šta ćete raditi

Pogledajte prostor modela crteža u 3D. Linije i polilinije stoje na svojim stvarnim visinama, objekti s debljinom stoje kao zidovi, a 3D površine, mreže i 3D blokovi prikazuju se kao površine oko kojih se možete okretati. Listovi ostaju 2D.

## Koraci

1. Otvorite DWG ili DXF. Vidi [Pregled DWG ili DXF crteža](topic:view-dwg). Otvara se u 3D, osim ako {{ui:Postavke}} › {{ui:BimCraft}} › **Crteži se otvaraju u** ne kaže {{ui:Model (2D)}}.
2. Iz 2D kliknite {{ui:3D}} na traci iznad crteža, ili pritisnite {{key:3}}.
3. Sačekajte trenutak prvi put: statusna linija kaže „Izrađujem crtež u 3D…”, zatim koliko linija i površina prikazuje.
4. Okrećite, pomjerajte i zumirajte (vidi tabelu ispod).
5. Kliknite pogled u drugoj traci: {{ui:Izo}}, {{ui:Gore}}, {{ui:Dolje}}, {{ui:Sprijeda}}, {{ui:Straga}}, {{ui:Lijevo}} ili {{ui:Desno}}.
6. Kliknite {{ui:Perspektiva}} da se prebacujete između perspektivnog i paralelnog pogleda.
7. Kliknite {{ui:Obuhvat}} ili pritisnite {{key:F}} da ponovo vidite cijeli crtež.
8. Kliknite {{ui:3D}} ponovo, pritisnite {{key:3}}, ili kliknite {{ui:Model}} ili karticu lista da se vratite u 2D.

## Šta treba da vidite

- Prostor modela u 3D, Z osa gore, u bojama samog crteža. Površine su za nijansu svjetlije od svojih ivica.
- Slojevi koje isključite u {{ui:Slojevi}} nestaju i iz 3D prikaza.
- Desno: broj linija i površina, veličina crteža u X, Y i Z, **Samo u 2D prikazu** i **Još nije iscrtano**.

## Presiječite ravninom presjeka

Kliknite {{ui:Presjek}} na 3D traci ili pritisnite {{key:X}}. Traka ispod nje radi kao kod IFC modela (vidi [Presijecanje IFC modela ravninom presjeka](topic:section-plane)): presijecite s {{ui:Gore}}, {{ui:Sprijeda}} ili {{ui:Strana}}, prevucite ili upišite pomak (ovdje u jedinicama samog crteža), i {{ui:Okreni}} da zadržite drugu stranu. Ono što ravnina odsiječe ne može se odabrati. Povratak u 2D uklanja presjek.

## Pogledajte svojstva objekta

Kliknite objekat u 3D prikazu. On dobija boju odabira, a {{ui:Svojstva}} prikazuju šta datoteka kaže o njemu: tip, sloj, boju, vrstu linije i oznaku, zatim njegove vlastite podatke, kao što su početak, kraj i dužina linije, centar i poluprečnik kruga, uglovi 3D površine, ili blok, tačka umetanja, razmjera, rotacija i vrijednosti atributa reference bloka.

- Referenca bloka se odabire kao cjelina, a blokovi ugniježđeni u njoj također.
- Klik nekoliko piksela od linije odabire tu liniju.
- Držite {{key:Mod}} i kliknite da odaberete još objekata ili da jedan izuzmete. {{ui:Svojstva}} tada ih broje po tipu.
- {{key:Esc}}, ili klik na prazan prostor, poništava odabir.
- Objekti na slojevima koje ste isključili ne mogu se odabrati.

## Kretanje

:::mouse
| Za | Uradite ovo |
|---|---|
| Okretanje | Prevucite srednjim dugmetom, ili lijevim |
| Pomjeranje | Prevucite desnim dugmetom, ili držite {{key:Shift}} i prevucite |
| Zumiranje | Pomjerajte točkić; zumira prema onome što je pod pokazivačem |
| Vidi sve | {{ui:Obuhvat}} ili {{key:F}} |
| Gledaj sa strane | Kliknite stranu, ivicu ili ugao kocke pogleda u donjem desnom uglu |
:::

Kocka pogleda može se zamijeniti ikonom osa ili sakriti u {{ui:Postavke}}. Vidi [Postavke programa BimCraft](topic:settings).

:::mac mouse
Na touchpadu prevucite sa dva prsta da okrećete, držite {{key:Shift}} i prevucite da pomjerate, a stisnite dva prsta da zumirate.
:::

:::touch
Prevucite jednim prstom da okrećete. Stisnite dva prsta za zumiranje, a pomjerite ih zajedno da pomjerate pogled.
:::

## Šta se crta u 3D

| U crtežu | U 3D |
|---|---|
| Linije, 3D polilinije | Na svojim stvarnim visinama |
| Polilinije, krugovi, lukovi, elipse | U svojoj ravni, na svojoj koti, nagnuti kada ih crtež nagne |
| Debljina na linijama, polilinijama, krugovima i lukovima | Zidovi te visine; krugovi su zatvoreni gore i dolje |
| 3D površine, poliface mreže, poligonske mreže | Osjenčene površine s vidljivim ivicama |
| Blokovi | Postavljeni, okrenuti i razmjereni u 3D, uključujući ugniježđene blokove |
| Šrafure | Njihovi obrisi |
| Obični 2D crtež linija | Ravno, tamo gdje je nacrtan |

## Samo u 2D prikazu

Tekst, višeredni tekst i vidljivi atributi blokova crtaju se u 3D, u svojoj ravni na svojoj visini, a klik na njih ih odabire. Široke polilinije pokazuju svoju širinu kao ravnu traku. Višestruke vodilice, slike i uzorci šrafure broje se pod **Samo u 2D prikazu**: pogledajte ih na kartici {{ui:Model}} ili na listovima.

## Još nije iscrtano

Čvrsta tijela i površine pohranjene kao ACIS tijela (3D čvrsta tijela, tijela, regije i površine) i podijeljene mreže navedene su pod **Još nije iscrtano** s brojem koliko ih ima. Preskaču se, ne pogađaju se.

## Česte greške

- **Sve izgleda ravno.** Crtež je 2D: njegove linije nemaju visinu. Kliknite {{ui:Sprijeda}} da provjerite. Ravan crtež se pokazuje kao linija.
- **Čvrsti model ne prikazuje ništa.** Čvrsta tijela napravljena čvrstim modelerom su ACIS tijela, navedena pod **Još nije iscrtano**. Izvezite model kao IFC ili kao 3D površine iz programa u kojem je nastao.
- **Crtež je mala gomila u sredini.** Nešto daleko u prostoru modela, poput stare kopije plana, čini obuhvat velikim. Zumirajte točkićem tamo gdje želite da gledate.

## Dalje

- [Radite sa slojevima i listovima](topic:dwg-layers-sheets)
- [Presijecanje IFC modela ravninom presjeka](topic:section-plane)

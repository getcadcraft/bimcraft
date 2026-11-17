---
title: Pregled DWG ili DXF crteža u 3D-u
summary: Prebacite prostor modela crteža u 3D da vidite visine, debljine, 3D plohe, mreže i blokove, okrećite ga oko sebe, kliknite objekt da vidite njegova svojstva te pogledajte što još nije izrađeno.
keywords: 3d, dwg, dxf, crtež, prostor modela, orbita, presjek, rez, odsijecanje, odabir, odaberi, svojstva, atributi, oznaka (handle), visina, debljina, izvlačenje, 3dface, polyface, mreža, 3d polilinija, blokovi, pogledi, perspektiva, paralelno, opseg, acis, puna tijela
from: a0c6cd17
---

## Što ćete raditi

Pogledajte prostor modela crteža u 3D-u. Linije i polilinije stoje na svojim stvarnim visinama, objekti s debljinom stoje kao zidovi, a 3D plohe, mreže i 3D blokovi prikazuju se kao površine oko kojih možete kružiti. Listovi ostaju 2D.

## Koraci

1. Otvorite DWG ili DXF. Vidi [Pregled DWG ili DXF crteža](topic:view-dwg). Otvara se u 3D-u, osim ako {{ui:Postavke}} › {{ui:BimCraft}} › **Crteži se otvaraju u** ne kaže {{ui:Model (2D)}}.
2. Iz 2D-a kliknite {{ui:3D}} u traci iznad crteža ili pritisnite {{key:3}}.
3. Prvi put pričekajte trenutak: statusna traka piše „Izrada crteža u 3D-u…“, zatim koliko linija i ploha prikazuje.
4. Okrećite, pomičite i zumirajte (vidi tablicu u nastavku).
5. Kliknite pogled u drugoj traci: {{ui:Izo}}, {{ui:Gore}}, {{ui:Dolje}}, {{ui:Naprijed}}, {{ui:Natrag}}, {{ui:Lijevo}} ili {{ui:Desno}}.
6. Kliknite {{ui:Perspektiva}} za prebacivanje između perspektivnog i paralelnog pogleda.
7. Kliknite {{ui:Opseg}} ili pritisnite {{key:F}} da ponovno vidite cijeli crtež.
8. Kliknite {{ui:3D}} ponovno, pritisnite {{key:3}}, ili kliknite {{ui:Model}} ili karticu lista da se vratite u 2D.

## Što biste trebali vidjeti

- Prostor modela u 3D-u, Z prema gore, u vlastitim bojama crteža. Plohe su za nijansu svjetlije od svojih bridova.
- Slojevi koje isključite u {{ui:Slojevi}} nestaju i iz prikaza 3D.
- Desno: broj linija i ploha, veličina crteža u X, Y i Z, **Samo u 2D prikazu** i **Još nije izrađeno**.

## Rezanje ravninom presjeka

Kliknite {{ui:Presjek}} na traci 3D ili pritisnite {{key:X}}. Traka ispod nje radi kao i za IFC modele (vidi [Presijecanje IFC modela ravninom presjeka](topic:section-plane)): režite iz {{ui:Gore}}, {{ui:Naprijed}} ili {{ui:Bočno}}, povucite ili upišite pomak (ovdje u jedinicama samog crteža), a {{ui:Obrni}} služi da zadržite drugu stranu. Što ravnina odreže, ne može se odabrati. Povratak u 2D uklanja rez.

## Pregled svojstava objekta

Kliknite objekt u prikazu 3D. Poprima boju odabira, a {{ui:Svojstva}} pokazuje što datoteka kaže o njemu: njegov tip, sloj, boju, tip linije i oznaku (handle), zatim njegove vlastite podatke, poput početka, kraja i duljine linije, središta i polumjera kružnice, kutova 3D plohe, ili bloka, točke umetanja, mjerila, rotacije i vrijednosti atributa referencije bloka.

- Referenca bloka odabire se kao cjelina, a blokovi ugniježđeni u njoj također.
- Klik nekoliko piksela od linije odabire liniju.
- Držite {{key:Mod}} i kliknite da odaberete još objekata ili da uklonite jedan; {{ui:Svojstva}} ih tada broji po tipu.
- {{key:Esc}}, ili klik na prazan prostor, poništava odabir.
- Objekti na slojevima koje ste isključili ne mogu se odabrati.

## Kretanje

:::mouse
| Za | Učinite ovo |
|---|---|
| Orbita | Povucite srednjom tipkom ili lijevom tipkom |
| Pomicanje | Povucite desnom tipkom ili držite {{key:Shift}} i povucite |
| Zumiranje | Pomaknite kotačić; zumira prema onome što je pod pokazivačem |
| Pogled na sve | {{ui:Opseg}} ili {{key:F}} |
| Pogled sa strane | Kliknite plohu, brid ili kut ViewCube-a u donjem desnom kutu |
:::

ViewCube se može zamijeniti ikonom osi ili sakriti u {{ui:Postavke}}. Vidi [Postavke BimCraft-a](topic:settings).

:::mac mouse
Na touchpadu prevucite dvama prstima za orbitu, držite {{key:Shift}} i prevucite za pomicanje, a stisnite prstima za zumiranje.
:::

:::touch
Povucite jednim prstom za orbitu. Stisnite dvama prstima za zumiranje, a pomaknite ih zajedno za pomicanje.
:::

## Što se crta u 3D-u

| U crtežu | U 3D-u |
|---|---|
| Linije, 3D polilinije | Na svojim stvarnim visinama |
| Polilinije, kružnice, lukovi, elipse | U vlastitoj ravnini, na svojoj koti, nagnute kad ih crtež nagne |
| Debljina na linijama, polilinijama, kružnicama i lukovima | Zidovi te visine; kružnice su zatvorene na vrhu i dnu |
| 3D plohe, polyface mreže, poligonske mreže | Zasjenjene plohe s vidljivim bridovima |
| Blokovi | Postavljeni, okrenuti i skalirani u 3D-u, također i ugniježđeni blokovi |
| Šrafure | Njihovi obrisi |
| Obične 2D linije | Ravne, gdje su nacrtane |

## Samo u 2D prikazu

Tekst, višeretčani tekst i vidljivi atributi blokova crtaju se u 3D-u, u vlastitoj ravnini na vlastitoj visini, a klik na njih ih odabire. Široke polilinije prikazuju svoju širinu kao ravnu traku. Višestruke vodilice, slike i uzorci šrafure broje se pod **Samo u 2D prikazu**: pogledajte ih na kartici {{ui:Model}} ili na listovima.

## Još nije izrađeno

Puna tijela i površine pohranjene kao ACIS tijela (3D puna tijela, tijela, regije i površine) te mreže s podjelom navedeni su pod **Još nije izrađeno** s brojem koliko ih ima. Preskaču se, a ne nagađaju.

## Česte pogreške

- **Sve izgleda ravno.** Crtež je 2D: njegove linije nemaju visinu. Kliknite {{ui:Naprijed}} da provjerite; ravan crtež prikazuje se kao linija.
- **Model s punim tijelima ništa ne prikazuje.** Puna tijela izrađena alatom za modeliranje krutih tijela su ACIS tijela, navedena pod **Još nije izrađeno**. Izvezite model kao IFC ili kao 3D plohe iz programa u kojem je nastao.
- **Crtež je sitan grumen u sredini.** Nešto daleko u prostoru modela, poput stare kopije tlocrta, čini opseg velikim. Zumirajte kotačićem tamo gdje želite gledati.

## Dalje

- [Rad sa slojevima i listovima](topic:dwg-layers-sheets)
- [Presijecanje IFC modela ravninom presjeka](topic:section-plane)

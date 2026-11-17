---
title: Prikaz oblaka točaka uz model
summary: Otvorite lasersko skeniranje (LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ) u 3D pogledu samo ili uz IFC model, obojite ga, izrežite tanki isječak kroz njega, izmjerite do njegovih točaka i predajte ga aplikaciji za crtanje da obrubi linije izvedenog stanja.
keywords: oblak točaka, laserski sken, skeniranje, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, izvedeno stanje, snimanje, registracija, isječak, rez tlocrta, hvatanje, mjerenje, ucrtavanje, skeniranje u bim
from: d0a3e740
---

## Što ćete raditi

Pogledati lasersko skeniranje zgrade pored njezina modela: provjeriti da se izvedeno podudara s projektom, izmjeriti između skeniranih točaka i izrezati tanak isječak za čitanje zidova, vrata i stupova.

## Koraci

1. Otvorite oblak: {{ui:Otvoreno}} datoteku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ili `.xyz`, ili je povucite na stranicu (vidi temu o formatima oblaka točaka za to što svaki donosi i što izvesti iz vlastitog softvera skenera). Kad je model otvoren, oblak se pridružuje modelu u 3D pogledu; otvaranje oblaka nikad ne zatvara model ili njegove nespremljene promjene. Bez modela oblak se otvara sam.
2. Ispod alatne trake pojavljuje se traka oblaka. Ona kaže koliko točaka se prikazuje i koliko ih datoteka ima.
3. Odaberite {{ui:Boja prema}}: vlastite boje datoteke (kad ih je skener spremio), {{ui:Visina}}, {{ui:Intenzitet}}, {{ui:Klasa}} (LiDAR klase kao tlo, vegetacija i zgrada) ili {{ui:Jedna boja}}. {{ui:Veličina}} čini točke većima ili manjima.
4. Kliknite {{ui:Tlocrt}} pod {{ui:Isječak}} da zadržite samo tanki pojas 1.2 m iznad najniže točke, gledano odozgo: zidovi, otvori vrata i stupovi čitaju se kao tlocrt. {{ui:Naprijed}} i {{ui:Bočno}} režu uspravne pojaseve za pročelja i presjeke. Pomaknite pojas s {{ui:Na}} i promijenite {{ui:Debljina}} (u metrima). {{ui:Isključeno}} ponovo prikazuje cijeli oblak.
5. Kliknite {{ui:Mjeri}} na alatnoj traci. Pokazivač se hvata za točke oblaka (oznaka kaže „oblak točaka“), pa možete mjeriti od zida do zida u isječku ili od elementa modela do skeniranja. Rub ili kut modela na dosegu ima prednost.
6. S {{ui:Mjeri}} › {{ui:Lokacija}}, točka oblaka daje svoju geografsku širinu i dužinu iz vlastitog koordinatnog sustava oblaka, kad datoteka navodi jedan.
7. {{ui:Sakrij}} privremeno skriva oblak; {{ui:Ukloni}} ga uklanja. {{ui:Prikaži}} › {{ui:Oblak točaka}} sakriva ili prikazuje traku.

## Gdje ide oblak

{{ui:Postavi}} na traci kaže kako se oblak poravnava s modelom:

- **Koordinate modela**: brojevi oblaka su vlastiti brojevi modela (skeniranje registrirano na koordinate projekta).
- **Koordinate karte**: model ima kartografsku pretvorbu (IfcMapConversion), a oblak je u istom projiciranom sustavu: oblak se postavlja kroz nju. Ako dva imenuju različite sustave, statusni redak to kaže.
- **Centrirano na model**: kad ni jedno ne stavlja oblak blizu modela, njegova sredina ide na sredinu modela, a najniža točka na pod modela. Odaberite drugu opciju da to nadjačate.

Kad datoteka ne kaže svoje jedinice, BimCraft čita metre i nudi {{ui:Jedinice}} na traci.

## Ucrtajte izvedene linije

Kliknite {{ui:Ucrtaj u CadCraftu}} da predate oblak aplikaciji za crtanje u novoj kartici. Tamo se otvara ispod crteža, gdje isječak tlocrta i hvatanje objekata omogućuju crtanje zidova preko skeniranja. Vidi temu CadCrafta o oblacima točaka.

## Koliko točaka

Skeniranje može imati stotine milijuna točaka. BimCraft čita svaku točku jednom i zadržava ravnomjeran dio za crtanje: {{ui:Prikaži}} na traci postavlja koliko ih (1, 2, 5 ili 10 milijuna). Više točaka treba više memorije i bržu grafičku karticu. Brojevi po LiDAR klasi odnose se na svaku točku u datoteci.

:::note
Datoteke se čitaju na ovom računalu; ništa se ne učitava. Čitaju se LAS 1.0–1.4 i LAZ (LAZ datoteke do 1 GB, držane u memoriji dok se čitaju); E57 datoteke do 6 milijuna točaka i 512 MB za sada (veća skeniranja: izvezite LAS ili LAZ); PLY, PCD i PTX u cijelosti; tekstualni oblaci su `x y z`, s bojama (`r g b`) i stupcima intenziteta kad su prisutni.
:::

## Više skeniranja

Skeniranja snimljena s različitih položaja mogu se registrirati u jedan okvir, dotjerati s ICP-om i izvesti kao jedan LAS ili E57: vidi [Registracija više skeniranja u jedno](topic:register-scans).

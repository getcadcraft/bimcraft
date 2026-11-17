---
title: Prikaz oblaka tačaka pored modela
summary: Otvorite laserski sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ) u 3D prikazu samostalno ili uz IFC model, obojite ga, izrežite tanak presjek kroz njega, mjerite do njegovih tačaka i prenesite ga u program za crtanje da ga ocrtate kao izvedene linije.
keywords: oblak tačaka, laserski sken, skeniranje, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, izvedeno stanje, kao izvedeno, geodetsko snimanje, registracija, presjek, presjek plana, hvatanje, mjerenje, ocrtavanje, skeniranje u BIM
from: d0a3e740
---

## Šta ćete uraditi

Pogledati laserski sken zgrade pored njenog modela: provjeriti da li se izgrađeno poklapa s projektom, mjeriti između skeniranih tačaka i izrezati tanak presjek da iz njega čitate zidove, vrata i stubove.

## Koraci

1. Otvorite oblak: {{ui:Otvoren}} datoteku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ili `.xyz`, ili je prevucite na stranicu (vidi temu o formatima oblaka tačaka za to šta svaki donosi i šta izvesti iz vlastitog softvera skenera). Kad je model otvoren, oblak se pridružuje modelu u 3D prikazu; otvaranje oblaka nikad ne zatvara model ni njegove nesačuvane promjene. Bez modela se oblak otvara sam.
2. Traka oblaka se pojavljuje ispod alatne trake. Ona kaže koliko tačaka se prikazuje i koliko ih ima u datoteci.
3. Izaberite {{ui:Boja po}}: boje same datoteke (kad ih je skener sačuvao), {{ui:Visina}}, {{ui:Intenzitet}}, {{ui:Klasa}} (LiDAR klase kao tlo, vegetacija i zgrada) ili {{ui:Jedna boja}}. {{ui:Veličina}} čini tačke većim ili manjim.
4. Kliknite {{ui:Plan}} pod {{ui:Presjek}} da zadržite samo tanak pojas 1,2 m iznad najniže tačke, gledano odozgo: zidovi, otvori vrata i stubovi se čitaju kao tlocrt. {{ui:Sprijeda}} i {{ui:Strana}} izrezuju uspravne pojaseve za izglede i presjeke. Pomjerite pojas pomoću {{ui:Na}} i promijenite {{ui:Debljina}} (u metrima). {{ui:Isključeno}} ponovo prikazuje cijeli oblak.
5. Kliknite {{ui:Mjeri}} na traci s alatima. Pokazivač se hvata za tačke oblaka (natpis kaže "Oblak tačaka"), pa možete mjeriti od zida do zida u presjeku ili od elementa modela do skeniranja. Ugao ili ivica modela unutar dosega i dalje ima prednost.
6. Uz {{ui:Mjeri}} › {{ui:Lokacija}}, tačka oblaka daje svoju geografsku širinu i dužinu iz koordinatnog sistema samog oblaka, kad ga datoteka navodi.
7. {{ui:Sakrij}} privremeno skriva oblak; {{ui:Ukloni}} ga izbacuje. {{ui:Prikaži}} › {{ui:Oblak tačaka}} sakriva ili prikazuje traku.

## Gdje oblak ide

{{ui:Postavi}} u traci kaže kako se oblak poklapa s modelom:

- **Koordinate modela**: brojevi oblaka su brojevi samog modela (skeniranje registrovano u koordinatama projekta).
- **Koordinate karte**: model ima kartografsku konverziju (IfcMapConversion), a oblak je u istom projektovanom sistemu: oblak se postavlja kroz nju. Ako dva imenuju različite sisteme, statusna linija to kaže.
- **Centrirano na model**: kad ni jedno ne postavi oblak blizu modela, njegova sredina ide na sredinu modela, a najniža tačka na pod modela. Izaberite drugi izbor da to promijenite.

Kad datoteka ne kaže svoje jedinice, BimCraft čita metre i nudi {{ui:Jedinice}} u traci.

## Ocrtavanje izvedenih linija

Kliknite {{ui:Ocrtaj u CadCraft}} da predate oblak programu za crtanje u novoj kartici. Tamo se otvara ispod crteža, gdje presjek plana i hvatanje objekata omogućavaju da nacrtate zidove preko skeniranja. Vidi temu o oblacima tačaka u dokumentaciji CadCraft.

## Koliko tačaka

Skeniranje može imati stotine miliona tačaka. BimCraft pročita svaku tačku jednom i zadržava ravnomjeran dio za crtanje: {{ui:Prikaži}} u traci određuje koliko (1, 2, 5 ili 10 miliona). Više tačaka traži više memorije i bržu grafičku karticu. Brojevi po LiDAR klasi odnose se na sve tačke u datoteci.

:::note
Datoteke se čitaju na ovom računaru; ništa se ne šalje. Čitaju se LAS 1.0–1.4 i LAZ (LAZ do 1 GB, drži se u memoriji dok se čita); E57 do 6 miliona tačaka i 512 MB za sada (veća skeniranja: izvezite LAS ili LAZ); PLY, PCD i PTX u cijelosti; tekstualni oblaci su `x y z`, uz kolone boje (`r g b`) i intenziteta kad postoje.
:::

## Više skeniranja

Skeniranja snimljena s različitih pozicija mogu se registrovati u jedan okvir, dorađena pomoću ICP-a i izvezena kao jedan LAS ili E57: vidi [Registrovanje više skeniranja u jedno](topic:register-scans).

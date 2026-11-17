---
title: Prikaz oblaka tačaka pored modela
summary: Otvorite laserski sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ) u 3D prikazu sam ili uz IFC model, obojite ga, izrežite tanak presek kroz njega, merite do njegovih tačaka i prenesite ga u aplikaciju za crtanje da ocrtate linije izvedenog stanja.
keywords: oblak tačaka, laserski sken, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, izvedeno stanje, geodetsko snimanje, registracija, presek, izrez plana, hvatanje, merenje, ocrtavanje, sken u BIM
from: d0a3e740
---

## Šta ćete uraditi

Pogledajte laserski sken zgrade pored njenog modela: proverite da li je izgrađeno ono što je projektovano, izmerite između skeniranih tačaka i izrežite tanak presek da iz njega očitate zidove, vrata i stubove.

## Koraci

1. Otvorite oblak: kliknite {{ui:Otvoren}} za datoteku `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ili `.xyz`, ili je prevucite na stranicu (pogledajte temu o formatima oblaka tačaka za to što svaki donosi i šta izvesti iz softvera skenera). Kad je model otvoren, oblak se pridružuje modelu u 3D prikazu; otvaranje oblaka nikad ne zatvara model ili njegove nesačuvane izmene. Bez modela, oblak se otvara sam.
2. Traka oblaka se pojavljuje ispod alatke. Ona kaže koliko tačaka se prikazuje i koliko ih ima datoteka.
3. Izaberite {{ui:Boja prema}}: boje same datoteke (kad ih je skener sačuvao), {{ui:Visina}}, {{ui:Intenzitet}}, {{ui:Klasa}} (LiDAR klase kao što su teren, vegetacija i zgrada) ili {{ui:Jedna boja}}. {{ui:Veličina}} čini tačke većim ili manjim.
4. Kliknite {{ui:Plan}} pod {{ui:Presek}} da zadržite samo tanak pojas 1.2 m iznad najniže tačke, gledano odozgo: zidovi, otvori vrata i stubovi se čitaju kao plan sprata. {{ui:Napred}} i {{ui:Sa strane}} seku uspravne pojaseve za izglede i preseke. Pomerajte pojas pomoću {{ui:Na}} i menjajte {{ui:Debljina}} (u metrima). {{ui:Isključeno}} ponovo prikazuje ceo oblak.
5. Kliknite {{ui:Izmeri}} na alatci. Pokazivač se hvata za tačke oblaka (oznaka kaže „oblak tačaka“), pa možete da merite od zida do zida u preseku ili od elementa modela do skena. Ivica ili ugao modela u dometu i dalje ima prednost.
6. Uz {{ui:Izmeri}} › {{ui:Lokacija}}, tačka oblaka daje svoju geografsku širinu i dužinu iz koordinatnog sistema oblaka, kad datoteka navodi jedan.
7. {{ui:Sakrij}} na trenutak sakriva oblak; {{ui:Ukloni}} ga izbacuje. {{ui:Prikaži}} › {{ui:Oblak tačaka}} sakriva ili prikazuje traku.

## Gde ide oblak

{{ui:Postavi}} u traci kaže kako se oblak poklapa sa modelom:

- **Koordinate modela**: brojevi oblaka su sami brojevi modela (sken usklađen sa koordinatama projekta).
- **Kartografske koordinate**: model ima kartografsku konverziju (IfcMapConversion), a oblak je u istom projektovanom sistemu: oblak se postavlja kroz nju. Ako dva imenuju različite sisteme, statusna linija to kaže.
- **Centrirano na model**: kad ni jedno ni drugo ne postavlja oblak blizu modela, njegova sredina ide na sredinu modela, a najniža tačka na pod modela. Izaberite drugi izbor da to zamenite.

Kad datoteka ne kaže svoje jedinice, BimCraft čita metre i nudi {{ui:Jedinice}} u traci.

## Ocrtavanje izvedenih linija

Kliknite {{ui:Ocrtaj u CadCraft}} da predate oblak aplikaciji za crtanje u novom tabu. Otvara se tamo pod crtežom, gde presek plana i hvatanje objekata omogućavaju da nacrtate zidove preko skena. Pogledajte temu o oblacima tačaka u CadCraft-u.

## Koliko tačaka

Skener može da sadrži stotine miliona tačaka. BimCraft čita svaku tačku jednom i zadržava ravnomeran deo tačaka za crtanje: {{ui:Prikaži}} u traci određuje koliko (1, 2, 5 ili 10 miliona). Više tačaka zahteva više memorije i brži grafički čip. Brojevi po LiDAR klasi odnose se na svaku tačku u datoteci.

:::note
Datoteke se čitaju na ovom računaru; ništa se ne otprema. Čitaju se LAS 1.0–1.4 i LAZ (LAZ datoteke do 1 GB, drže se u memoriji dok se čitaju); E57 datoteke do 6 miliona tačaka i 512 MB za sada (veći skenovi: izvezite LAS ili LAZ); PLY, PCD i PTX u celini; tekstualni oblaci su `x y z`, sa kolonama boje (`r g b`) i intenziteta kad postoje.
:::

## Više skenova

Skenovi snimljeni sa različitih pozicija mogu se registrovati u jedan okvir, doterati pomoću ICP-a i izvesti kao jedan LAS ili E57: pogledajte [Registrovanje više skenova u jedan](topic:register-scans).

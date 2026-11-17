---
title: Jedinice pri uvozu: datoteka navodi svoje jedinice ili se prvo pitate
summary: Kad datoteka koju uvozite navodi svoje jedinice, BimCraft ih koristi i to kaže. Kad ih ne navodi, BimCraft pita prije nego što išta postavi i pamti vaš odgovor za tu datoteku.
keywords: jedinice, uvoz, otvori, OBJ, STL, DWG, DXF, IFC, oblak točaka, stavka knjižnice, milimetri, metri, inči, stope, mjerilo, kriva veličina, preveliko, premalo, 1000 puta, pitaj, zapamćeno
from: f044e9bc
---

## Što ćete napraviti

Uvezite datoteku i budite sigurni da se uveze u ispravnoj veličini.

## Koraci

1. Otvorite ili dodajte datoteku kao i obično: {{ui:Otvoreno}}, {{ui:Datoteke}} iz knjižnice, {{ui:Oblaci točaka}} ili Build › Iz crteža.
2. Ako datoteka navodi svoje jedinice, ništa se ne pita. Statusni redak kaže koje jedinice datoteka navodi.
3. Ako ih ne navodi, dijaloški okvir pita **Jedinice za** datoteku. Odaberite što je jedna jedinica u datoteci i kliknite {{ui:Upotrijebi ove jedinice}}. Ništa se ne postavlja dok ne odgovorite.
4. {{ui:Odustani}} (ili {{key:Esc}}) ne uvozi ništa.

## Koje datoteke navode svoje jedinice

- **IFC**: navodi svoju jedinicu duljine, a „Otvoreno” kaže koja je. IFC koji ne navodi nijednu pita se prije otvaranja; vaš odgovor se upisuje u model, pa datoteka to navodi nakon što spremite.
- **DWG i DXF**: jedinice umetanja crteža. Crtež bez njih pita se (datoteke iz knjižnice, Build › Iz crteža, teren iz izohipsi).
- **Popisi točaka** za teren: ne navode jedinice. Pita se.
- **Oblaci točaka**: LAS i LAZ s koordinatnim sustavom, E57, PTX i PLY navode svoje. Ostali se pitaju.
- **OBJ i STL**: nikad ne navode jedinice. Pita se.
- **glTF i GLB**: metri, prema pravilu samog formata.
- **Slike**: nemaju vlastitu veličinu. Slika se prilagodi prikazu, a veličinu postavljate s Skaliraj pomoću dviju točaka. Veličina koju zadate pamti se za tu datoteku: kad se ponovno postavi, uveze se u toj veličini, a statusni redak to kaže.
- **Dodatak Oblaci točaka**: pita kad napravite oblak čija datoteka ne navodi jedinicu i označava brojeve oblaka jedinicom koju nosi.

## Dobro je znati

- Odgovor se pamti za tu datoteku (njezino ime, veličinu i datum) na ovom računalu, u svim CadCraft aplikacijama. Sljedeći put kad uđe ista datoteka ne pita se, a statusni redak kaže da su korištene zapamćene jedinice.
- Da vas se ponovno pita: paleta naredbi ({{key:Mod+K}}) › **Ponovno pitaj za jedinice uvezenih datoteka**.
- Popis jedinica koji uvoz već ima (Jedinice u knjižnici, Jedinice na traci oblaka, Jedinice crteža u Build › Iz crteža) i dalje mijenja jedinice nakon uvoza. Popis Jedinice u alatu za teren sada je samo ono s čime pitanje počinje.

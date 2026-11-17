---
title: Jedinice pri uvozu: datoteka navodi svoje jedinice ili se prvo pitate
summary: Kada datoteka koju uvodite navodi svoje jedinice, BimCraft ih koristi i to kaže. Kada ih ne navodi, BimCraft pita prije nego što išta postavi i pamti vaš odgovor za tu datoteku.
keywords: jedinice, uvoz, otvori, OBJ, STL, DWG, DXF, IFC, oblak tačaka, stavka biblioteke, milimetri, metri, inči, stope, razmjera, pogrešna veličina, preveliko, premalo, 1000 puta, pitaj, zapamćeno
from: f044e9bc
---

## Šta ćete raditi

Uvedite datoteku i budite sigurni da dolazi u pravoj veličini.

## Koraci

1. Otvorite ili dodajte datoteku kao obično: {{ui:Open}}, {{ui:Files}} iz Biblioteke, {{ui:Point clouds}}, ili Izgradnja › Iz crteža.
2. Ako datoteka navodi svoje jedinice, ništa se ne pita. Statusna linija kaže koje jedinice datoteka navodi.
3. Ako ne navodi, dijalog pita **Jedinice datoteke**. Odaberite šta je jedna jedinica u datoteci i kliknite {{ui:Use these units}}. Ništa se ne postavlja prije nego odgovorite.
4. {{ui:Cancel}} (ili {{key:Esc}}) ne uvozi ništa.

## Koje datoteke navode svoje jedinice

- **IFC**: navodi jedinicu dužine, a "Otvoreno" kaže koja je. IFC koji ne navodi nijednu se pita prije nego se otvori; vaš odgovor se upisuje u model, pa datoteka navodi jedinice jednom kada spasite.
- **DWG i DXF**: jedinice umetanja crteža. Crtež bez njih se pita (datoteke iz Biblioteke, Izgradnja › Iz crteža, teren iz izohipsi).
- **Liste tačaka** za teren: ne navode jedinice. Pita se.
- **Oblaci tačaka**: LAS i LAZ sa koordinatnim sistemom, E57, PTX i PLY navode svoje. Ostali se pitaju.
- **OBJ i STL**: nikada ne navode jedinice. Pita se.
- **glTF i GLB**: metri, po pravilu samog formata.
- **Slike**: nemaju sopstvenu veličinu. Slika se uklapa u pogled, a veličinu postavljate s Razmjera pomoću dvije tačke. Veličina koju date pamti se za tu datoteku: kada se ponovo postavi, uvozi se u toj veličini, a statusna linija to kaže.
- **Dodatak Oblaci tačaka**: pita kada napravite oblak čija datoteka ne navodi jedinicu, i označava brojeve oblaka u jedinici koju nosi.

## Dobro je znati

- Odgovor se pamti za tu datoteku (njen naziv, veličina i datum) na ovom računaru, u svim CadCraft aplikacijama. Sljedeći put kada ista datoteka dođe, ne pita se, a statusna linija kaže da su korišćene zapamćene jedinice.
- Da vas se ponovo pita: paleta komandi ({{key:Mod+K}}) › **Ponovo pitaj za jedinice uvezenih datoteka**.
- Lista jedinica koju uvoz već ima (Jedinice Biblioteke, jedinice trake oblaka, Jedinice crteža u Iz crteža) i dalje mijenja jedinice naknadno. Lista jedinica alata za teren sada je samo ono s čim pitanje počinje.

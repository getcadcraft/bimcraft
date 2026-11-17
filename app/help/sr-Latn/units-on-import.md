---
title: Jedinice pri uvozu: datoteka navodi svoje jedinice ili vas prvo pitaju
summary: Kada datoteka koju uvozite navodi svoje jedinice, BimCraft ih koristi i to kaže. Kada ih ne navodi, BimCraft pita pre nego što išta postavi i pamti vaš odgovor za tu datoteku.
keywords: jedinice, uvoz, otvori, OBJ, STL, DWG, DXF, IFC, oblak tačaka, stavka biblioteke, milimetri, metri, inči, stope, razmera, pogrešna veličina, preveliko, premalo, 1000 puta, pitaj, zapamćeno
from: f044e9bc
---

## Šta ćete uraditi

Uvezite datoteku i uverite se da se uvozi u pravoj veličini.

## Koraci

1. Otvorite ili dodajte datoteku kao obično: {{ui:Otvoren}}, {{ui:Datoteke}} iz biblioteke, {{ui:Oblaci tačaka}} ili Izgradnja › Iz crteža.
2. Ako datoteka navodi svoje jedinice, ništa se ne pita. Statusna linija kaže koje jedinice datoteka navodi.
3. Ako ne navodi, dijalog pita za **Jedinice datoteke**. Izaberite šta je jedna jedinica u datoteci i kliknite {{ui:Koristi ove jedinice}}. Ništa se ne postavlja pre vašeg odgovora.
4. {{ui:Otkaži}} (ili {{key:Esc}}) ne uvozi ništa.

## Koje datoteke navode svoje jedinice

- **IFC**: navodi jedinicu dužine, a „Otvoreno“ kaže koju. IFC koji ne navodi nijednu pita se pre otvaranja; vaš odgovor se upisuje u model, pa datoteka navodi jedinice jednom kada sačuvate.
- **DWG i DXF**: jedinice umetanja crteža. Crtež bez njih pita se (datoteke iz biblioteke, Izgradnja › Iz crteža, teren iz izohipsi).
- **Spiskovi tačaka** za teren: ne navode jedinice. Pitate se.
- **Oblaci tačaka**: LAS i LAZ sa koordinatnim sistemom, E57, PTX i PLY navode svoje. Ostali se pitaju.
- **OBJ i STL**: nikada ne navode jedinice. Pitate se.
- **glTF i GLB**: metri, po pravilu samog formata.
- **Slike**: nemaju sopstvenu veličinu. Slika se uklapa u pogled, a veličinu podešavate sa razmerom po dvema tačkama. Veličina koju date pamti se za tu datoteku: kada se ponovo postavi, uvozi se u toj veličini i statusna linija to kaže.
- **Dodatak Oblaci tačaka**: pita kada pravite oblak čija datoteka ne navodi jedinicu, i označava brojeve oblaka jedinicom koju nosi.

## Dobro je znati

- Odgovor se pamti za tu datoteku (njen naziv, veličinu i datum) na ovom računaru, u svim CadCraft aplikacijama. Sledeći put kada ista datoteka bude uvezena, ne pitate se, a statusna linija kaže da su korišćene zapamćene jedinice.
- Da vas ponovo pitaju: paleta komandi ({{key:Mod+K}}) › **Pitaj ponovo za jedinice uvezenih datoteka**.
- Lista jedinica koju uvoz već ima (Jedinice u biblioteci, Jedinice na traci oblaka, Jedinice crteža u Iz crteža) i dalje menja jedinice naknadno. Lista Jedinice u alatki za teren sada je samo ono sa čime pitanje počinje.

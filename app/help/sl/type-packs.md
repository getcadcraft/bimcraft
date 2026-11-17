---
title: Paketi tipov: deljenje tipov sten kot odprtih datotek
summary: Shranite tipe sten z njihovimi sloji, materiali, oznakami in klasifikacijskimi kodami ter družinami kot eno odprto datoteko (navaden JSON ali IFC) in jih dodajte v drug projekt. Tipi sten iz datoteke IFC drugega programa se lahko preberejo.
keywords: paket tipov, tipi, tip stene, deljenje, izvoz, uvoz, knjižnica, odprt format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiali, sloji, predloga, pisarniški standard, družine
from: e4c91331
---

## Kaj boste naredili

Prenesite tipe sten iz enega projekta v drugega ali jih predajte nekomu, ki dela v drugem programu. Paket tipov vsebuje vsak tip stene s svojimi sloji, debelinami, materiali, jedrom, prazninami, prednostjo sloja, stopnjo razvoja, podatki za predizmere in klasifikacijskimi kodami ter družinami, ki jih dodate. Je odprta datoteka: navaden tekst JSON, ki ga lahko prebere vsak, ali datoteka IFC. Nič v njej ni vezano na podjetje, državo ali račun.

## Shranjevanje tipov iz projekta

1. Na vrstici modela odprite **Podatki** in izberite {{ui:Paketi tipov}}.
2. Pod {{ui:Shrani tipe iz tega projekta}} označite tipe sten, ki jih želite vključiti. Projektni tipi so označeni sami; začetni tip lahko dodate, vključi se kot kopija. Označite družine, če jih želite vključiti.
3. Vnesite {{ui:Ime paketa}}.
4. {{ui:Shrani kot paket (.json)}} prenese datoteko `.cctypes.json`. {{ui:Shrani kot IFC (.ifc)}} prenese datoteko IFC, ki vsebuje samo tipe: vsak tip stene kot IfcWallType z naborom slojev materiala, materiali in klasifikacijo, za kateri koli program BIM.

## Dodajanje tipov v projekt

1. V istem pogovornem oknu izberite {{ui:Odprite paket ali datoteko IFC…}} in izberite datoteko paketa `.json` ali datoteko `.ifc`.
2. Pogovorno okno navede, kaj datoteka vsebuje: vsak tip stene z debelino, številom slojev in kodami, materiale in družine.
3. Izberite, kaj se zgodi z {{ui:Tip, ki ga ta projekt že ima}}: **Ohrani tip projekta**, **Dodaj tip paketa kot kopijo** (dobi novo ime, ki se konča z "(2)"), ali **Zamenjaj (samo če ga noben zid ne uporablja)**.
4. {{ui:Dodaj v projekt}}. Pogovorno okno navede, kaj je bilo dodano, kopirano, zamenjano ali ohranjeno. Je en korak razveljavitve.

Novi tipi so takoj na seznamu tipov v orodju Stena.

## Tipi tal, strehe in stropa

Seznam tipov za shranjevanje vsebuje tudi tipe tal, strehe in stropa projekta ter njihove začetne tipe (označene kot Tla, Streha, Strop). Paket lahko nosi vse štiri vrste; vsak tip navaja svoj razred IFC (IfcWallType, IfcSlabType, IfcCoveringType). Tipa tal, strehe ali stropa, ki ga elementi uporabljajo, se iz paketa ne zamenja: spremenite ga v urejevalniku tipov.

## En tip kot element knjižnice

Označite natanko en tip in izberite **Shrani kot element knjižnice …**. Shrani se datoteka `.cctype.json`: element knjižnice vrste Tipi, ki vsebuje ta en tip (njegove sloje, materiale, stopnjo razvoja (LOD) in klasifikacijske kode). Naložite jo v Knjižnico, da jo delite. **Odprite paket ali datoteko IFC** prebere tudi takšen element in njegov tip doda v projekt kot paket.

## Dobro je vedeti

- Datoteka IFC iz drugega programa se lahko odpre tudi tukaj. Vsak njen tip stene, ki ima sloje materiala, se prebere: ime, materiali in debeline slojev ter morebitna praznina so datotekine lastne. Kateri sloji so jedro in kaj vsak sloj počne (zaključek, konstrukcija, izolacija), se ugiba; tip je označen **(ugibano)**, preveriti ga morate v urejevalniku tipa stene. Tip stene brez slojev se izpusti in se imenuje.
- Material, ki ga projekt že ima, ostane takšen, kot je. Nov material, čigar ime je zasedeno, dobi "(paket)" za svojim imenom.
- Tip, ki ga uporabljajo stene, se nikoli ne zamenja iz paketa. Spremenite ga v urejevalniku tipov sten, ki pravilno premakne njegove stene.
- Koda, nastavljena na eni steni, ne potuje: pripada tisti steni. Koda, nastavljena na tipu, potuje.
- Datoteka s poljem, ki ga format nima, s slojem, katerega material manjka, ali s čimerkoli, kar ni navaden tekst, se zavrne, sporočilo pa pove, kje in zakaj.
- Ni še izdelano: tipi tal, strehe in stropa (v tej različici nimajo tipov: vsak ima svojo debelino), tipi vrat in oken razen družin ter šrafure ali barve iz datoteke drugega programa.

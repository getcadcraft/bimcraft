---
title: Enote pri uvozu: datoteka navede svoje enote ali pa vas najprej vprašamo
summary: Ko datoteka, ki jo uvažate, navede svoje enote, BimCraft jih uporabi in to pove. Ko jih ne, BimCraft vpraša, preden kaj postavi, in si vaš odgovor zapomni za to datoteko.
keywords: enote, uvoz, odpri, OBJ, STL, DWG, DXF, IFC, oblak točk, element knjižnice, milimetri, metri, in, ft, merilo, napačna velikost, preveliko, premajhno, 1000-krat, vprašaj, zapomnjeno
from: f044e9bc
---

## Kaj boste naredili

Uvozite datoteko in se prepričajte, da pride v pravi velikosti.

## Koraki

1. Odprite ali dodajte datoteko kot običajno: {{ui:Odprto}}, {{ui:Datoteke}} v knjižnici, {{ui:Oblaki točk}} ali Gradi › Iz risbe.
2. Če datoteka navede enote, ni vprašanja. Vrstica stanja pove, katere enote datoteka navede.
3. Če ne, se prikaže pogovorno okno z vprašanjem **Enote za** datoteko. Izberite, kaj pomeni ena enota v datoteki, in kliknite {{ui:Uporabi te enote}}. Nič ni postavljeno, dokler ne odgovorite.
4. {{ui:Prekliči}} (ali {{key:Esc}}) ne uvozi ničesar.

## Katere datoteke navedejo enote

- **IFC**: navede enoto dolžine, „Odprto“ pove katero. IFC, ki nobene ne navede, se vpraša, preden se odpre; vaš odgovor se zapiše v model, zato datoteka navede enoto, ko jo shranite.
- **DWG in DXF**: enote vstavljanja risbe. Risba brez njih je vprašana (datoteke knjižnice, Gradi › Iz risbe, teren iz plastnic).
- **Seznami točk** za teren: ne navedejo enot. Vprašani ste.
- **Oblaki točk**: LAS in LAZ s koordinatnim sistemom, E57, PTX in PLY navedejo svoje. Drugi so vprašani.
- **OBJ in STL**: enot nikoli ne navedeta. Vprašani ste.
- **glTF in GLB**: metri, po pravilu formata.
- **Slike**: nimajo lastne velikosti. Slika se prilagodi pogledu, velikost pa nastavite z možnostjo Spremeni merilo z dvema točkama. Velikost, ki jo navedete, se zapomni za to datoteko: ko jo znova postavite, je v tej velikosti, vrstica stanja pa to pove.
- **Dodatek Oblaki točk**: vpraša, ko gradite oblak, katerega datoteka ne navede enote, in števila oblaka označi z enoto, ki jo nosi.

## Dobro je vedeti

- Odgovor se za to datoteko (njeno ime, velikost in datum) zapomni na tem računalniku, v vseh aplikacijah CadCraft. Naslednjič, ko pride ista datoteka, vas ne vprašamo, vrstica stanja pa pove, da so bile uporabljene zapomnjene enote.
- Če želite biti vprašani znova: paleta ukazov ({{key:Mod+K}}) › **Znova vprašaj za enote uvoženih datotek**.
- Seznam enot, ki ga uvoz že ima (Enote v knjižnici, Enote v vrstici oblakov, Enote risbe v Gradi › Iz risbe), enote še vedno spremeni kasneje. Seznam enot orodja za teren je zdaj le to, s čim se začne vprašanje.

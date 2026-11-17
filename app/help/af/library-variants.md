---
title: Plaas en ruil 'n biblioteekitem wat variante het
summary: Sommige biblioteekitems kom in verskeie groottes of opsies. Kies die variant voordat jy dit plaas, sien watter een 'n geplaasde item is, ruil dit met een klik vir 'n ander variant, en hou dit wanneer die item opgedateer word.
keywords: variant, variante, groottes, opsies, konfigurasie, biblioteek, librarycraft, plaas, ruil, konfigureerder, familie, tipe, opdateer, poorte
from: c05f0af3
---

## Wat jy gaan doen

Plaas 'n biblioteekitem in die grootte of opsie wat jy nodig het, en verander later van plan sonder om dit weer te plaas. 'n Item met variante is een item in die biblioteek (een naam, een lisensie, een weergawe) met 'n tabel van die variante wat dit kom: byvoorbeeld 'n montasieplaat in Klein, Medium en Groot, of dieselfde plaat sonder gate.

## Kies die variant en plaas dit

1. Maak die {{ui:Biblioteek}}-oortjie oop en klik die item se kaartjie.
2. Onder die naam lys die {{ui:Variant}}-keuse elke variant met sy grootte. Die item se standaard word eerste gekies.
3. Kies een. Die plan, die grootte en die 3D-liggaamry volg jou keuse.
4. Klik {{ui:Plaas in plan}} (of {{ui:Plaas in model}} in die 3D-aansig) en plaas dit soos enige item: sien [Plaas toerusting en meubels uit die biblioteek](topic:place-from-library).

Die geplaaste element word na die item en die variant genoem, byvoorbeeld *Montasieplaat — Groot*, sodat die {{ui:Toerusting}}-kedule en die boom hulle onderskei. Elke variant is sy eie IFC-tipe: as jy dieselfde variant twee keer plaas, deel dit een tipe; 'n ander variant kry sy eie.

## Sien watter variant 'n geplaasde item is

Kies die element. In {{ui:Eienskappe}} het die **Biblioteekitem**-blokkie 'n **Variant**-lyn. Die IFC hou dit in `CadCraft_LibraryItem`: `Variant` (die variant se id), `VariantName` en `VariantValues` (die opsiewaardes, as teks), sodat ander programme dit kan lees.

## Ruil na 'n ander variant

1. Kies die geplaaste item en klik {{ui:Ruil item…}} in die **Biblioteekitem**-blokkie. Die {{ui:Biblioteek}}-oortjie open.
2. Bo, **Ander variante van** *die item* lys elke variant met sy grootte. Die een wat geplaas is, is gemerk en kan nie gekies word nie.
3. Klik {{ui:Ruil na …}} op die variant wat jy wil hê.

Die element hou sy plek, draai, verdieping, itemnommer, hoeveelheid en notas; sy tipe, vorm en data verander na die ander variant. {{key:Mod+Z}} bring die eerste een terug. Jy kan steeds enige ander item uit die lys hieronder kies, soos voorheen: sien [Ruil 'n geplaasde item, en werk items vanaf die biblioteek by](topic:swap-and-update-library-items).

## Kopieer, plak en opdaterings

- 'n Afskrif van 'n geplaasde variant is dieselfde variant: in hierdie model, en in 'n ander model wat in dieselfde blaaieroortjie oop is, deur Kopieer en Plak.
- **Opdaterings** hou die variant: as die nuwer weergawe van die item dit nog het, word die plasing daardie variant van die nuwe weergawe. As die nuwe weergawe dit nie meer het nie, neem die plasing die item se standaardvariant.

## Goed om te weet

- Net sommige biblioteekitems het variante. Die kaartjies sê dit nie; jy sien die {{ui:Variant}}-keuse wanneer jy een oopmaak.
- 'n Item kan **poorte** lys (verbindingspunte vir pype en kanale) per variant. Die Biblioteek-oortjie wys hoeveel 'n variant het. Hulle word **nog nie** in die IFC geskryf wanneer jy die item vanaf die Biblioteek-oortjie plaas nie.
- 'n Variant sonder 'n 3D-liggaam word met 'n plekhouerboks geplaas, soos enige 2D-simbool.
- Groottes in die keuse is in millimeter, soos die biblioteek dit skryf.

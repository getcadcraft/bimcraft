---
title: Placér og byt et biblioteksemne, der har varianter
summary: Nogle biblioteksemner findes i flere størrelser eller valgmuligheder. Vælg varianten, før du placerer den, se hvilken variant et placeret emne er, byt den til en anden variant med ét klik, og behold den, når emnet opdateres.
keywords: variant, varianter, størrelser, valgmuligheder, konfiguration, bibliotek, librarycraft, placér, byt, konfigurator, familie, type, opdatering, tilslutningspunkter
from: c05f0af3
---

## Hvad du gør

Placér et biblioteksemne i den størrelse eller valgmulighed, du har brug for, og skift mening senere uden at placere det igen. Et emne med varianter er ét emne i biblioteket (ét navn, én licens, én version) med en tabel over de varianter, det findes i: fx en monteringsplade i Small, Medium og Large, eller den samme plade uden huller.

## Vælg varianten og placér den

1. Åbn fanen {{ui:Library}} og klik på emnets kort.
2. Under navnet viser valget {{ui:Variant}} hver variant med sin størrelse. Emnets standard er valgt først.
3. Vælg en. Planen, størrelsen og 3D-kroppen følger dit valg.
4. Klik på {{ui:Place in plan}} (eller {{ui:Place in model}} i 3D-visningen), og placér det som alle andre emner: se [Placér udstyr og møbler fra biblioteket](topic:place-from-library).

Det placerede element får navn efter emnet og varianten, fx *Mounting plate — Large*, så {{ui:Equipment}}-listen og træet kan skelne dem. Hver variant er sin egen IFC-type: placeres den samme variant to gange, deles én type, mens en anden variant får sin egen.

## Se hvilken variant et placeret emne er

Vælg elementet. I {{ui:Properties}} har feltet **Biblioteksemne** en linje **Variant**. IFC-filen gemmer den i `CadCraft_LibraryItem`: `Variant` (variantens id), `VariantName` og `VariantValues` (valgmulighedernes værdier, som tekst), så andre programmer kan læse den.

## Byt til en anden variant

1. Vælg det placerede emne, og klik på {{ui:Swap item…}} i feltet **Biblioteksemne**. Fanen {{ui:Library}} åbner.
2. Øverst lister **Andre varianter af** *emnet* hver variant med sin størrelse. Den placerede er markeret og kan ikke vælges.
3. Klik på {{ui:Byt til …}} ved den variant, du vil have.

Elementet beholder sin plads, drejning, etage, emnenummer, antal og noter; dets type, form og data ændres til den anden variant. {{key:Mod+Z}} bringer den første tilbage. Du kan stadig vælge et andet emne fra listen nedenfor i stedet, som før: se [Byt et placeret emne og opdatér emner fra biblioteket](topic:swap-and-update-library-items).

## Kopiering, indsætning og opdateringer

- En kopi af en placeret variant er den samme variant: i denne model og i en anden model, der er åbnet i samme browserfane, via {{ui:Copy}} og {{ui:Paste}}.
- **Opdateringer** beholder varianten: hvis den nyere version af emnet stadig har den, bliver placeringen den variant i den nye version. Har den nye version den ikke længere, får placeringen i stedet emnets standardvariant.

## Godt at vide

- Kun nogle biblioteksemner har varianter. Kortene siger det ikke; du ser valget {{ui:Variant}}, når du åbner et.
- Et emne kan angive **tilslutningspunkter** (forbindelsespunkter til rør og kanaler) pr. variant. Fanen Bibliotek viser, hvor mange en variant har. De skrives endnu **ikke** ind i IFC-filen, når du placerer emnet fra fanen Bibliotek.
- En variant uden 3D-krop placeres med en stand-in-boks, som alle 2D-symboler er.
- Størrelserne i valget er i millimeter, som biblioteket skriver dem.

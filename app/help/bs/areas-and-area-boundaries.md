---
title: Površine i granice površina
summary: Mjerite bruto površinu zgrade ili iznajmljivu površinu unutar graničnih linija koje nacrtate ili uzmete iz zidova, i navedite površine u specifikaciji.
keywords: površina, granica površine, shema površine, bruto površina zgrade, bruto površina poda, GFA, iznajmljivo, plan površina, specifikacija površina, odabir zidova, nije zatvoreno
from: c79f96d2
---

## Šta ćete raditi

Nacrtajte granice sheme površina, postavite površine unutar njih i pročitajte ukupne zbirove.

## Gdje su alati

- Rasporedi sa trakom: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Površina}} i {{ui:Granica površine}}.
- Klasični raspored: traka za crtanje › meni {{ui:Prostorije}}.

## Koraci

1. Izaberite {{ui:Granica površine}}. U redu izaberite {{ui:Shema}}: Bruto zgrada ili Iznajmljivo. Svaka shema ima svoje granice.
2. Izaberite kako da napravite linije u {{ui:Napravi po}}:
   - **Crtaj**: kliknite tačku po tačku.
   - **Odaberi zidove: centralna linija**: kliknite zid, i njegova centralna linija je granica.
   - **Odaberi zidove: kliknuta strana**: kliknite zid na strani koju želite; ta strana je granica. Za bruto površinu zgrade kliknite vanjsku stranu vanjskih zidova.
3. Izaberite {{ui:Površina}}. Izaberite istu shemu, po želji upišite naziv, broj ili tip, i kliknite unutar granica.
4. Površina se odmah mjeri. Odaberite je da promijenite njen naziv, broj ili tip u Svojstvima.

## Šta prati šta

- Granica napravljena odabirom zida prati taj zid: pomjerite zid i površina se ponovo mjeri u istom koraku.
- Granica koju ste nacrtali ostaje tamo gdje ste je nacrtali.
- Strane zidova koji se spajaju u uglu spajaju se i tamo, pa četiri odabrana zida zatvaraju površinu bez praznina.
- Granice površina se prikazuju u planu dok je alat za prostoriju ili površinu u ruci, pa ne zatrpavaju plan ostatak vremena.

## Ako granice ne zatvaraju

Površina se i dalje postavlja. Piše **Nije zatvoreno** i ne mjeri ništa dok se granice ne zatvore oko nje. Ovo je savjet: ništa se ne odbija.

## Specifikacija

Lijevi panel › {{ui:Specifikacije}} › **Površine**: shema, broj, naziv, tip, nivo, površina i obim, sa ukupnim zbirom. Klik na red odabire površinu. {{ui:Preuzmi CSV}} daje istu tabelu.

## U IFC-u

Površina je IfcSpace bez tijela: PredefinedType GFA za shemu bruto zgrade, USERDEFINED sa ObjectType Rentable za iznajmljivo. Nosi GrossFloorArea i GrossPerimeter, a nema neto površinu, pa se ne miješa sa prostorijom. Granica je IfcVirtualElement.

## Još nije urađeno

- Sheme po vlastitom izboru (samo Bruto zgrada i Iznajmljivo).
- Obojeni prikaz po tipu površine.
- Pravila koja granicu postavljaju umjesto vas, npr. „do linije stakla”.

Vidi također [Prostorije i razdjelnici prostorija](topic:rooms-and-separators), [Oznake prostorija i površina](topic:room-and-area-tags).

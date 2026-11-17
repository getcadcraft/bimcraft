---
title: Površine i granice površina
summary: Merite bruto površinu zgrade ili iznajmljivu površinu unutar graničnih linija koje nacrtate ili preuzmete sa zidova i izlistajte površine u specifikaciji.
keywords: površina, površine, granica površine, šema površina, bruto površina zgrade, bruto površina poda, BPP, iznajmljiva, plan površina, specifikacija površina, izaberi zidove, nije zatvoreno
from: c79f96d2
---

## Šta ćete uraditi

Nacrtajte granice šeme površina, postavite površine unutar njih i pročitajte zbirove.

## Gde su alatke

- Rasporedi sa trakom: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Površina}} i {{ui:Granica površine}}.
- Klasičan raspored: traka Crtanje › meni {{ui:Prostorije}}.

## Koraci

1. Izaberite {{ui:Granica površine}}. U redu izaberite {{ui:Šema}}: Bruto zgrade ili Iznajmljivo. Svaka šema ima sopstvene granice.
2. Izaberite kako da napravite linije u {{ui:Napravi pomoću}}:
   - **Crtanje**: klikajte tačku po tačku.
   - **Izaberi zidove: osa**: kliknite zid, a njegova osa postaje granica.
   - **Izaberi zidove: kliknuta strana**: kliknite zid sa strane koju želite; ta strana je granica. Za bruto površinu zgrade kliknite spoljnu stranu spoljnih zidova.
3. Izaberite {{ui:Površina}}. Izaberite istu šemu, po želji upišite naziv, broj ili tip i kliknite unutar granica.
4. Površina se odmah meri. Izaberite je da promenite njen naziv, broj ili tip u Svojstvima.

## Šta prati šta

- Granica napravljena biranjem zida prati taj zid: pomerite zid i površina se ponovo meri u istom koraku.
- Granica koju ste nacrtali ostaje tamo gde ste je nacrtali.
- Strane zidova koji se sastaju u uglu se tamo i spajaju, pa četiri izabrana zida zatvaraju površinu bez praznina.
- Granice površina se prikazuju na planu dok je u ruci alatka za prostorije ili površine, pa ne zatrpavaju plan ostatak vremena.

## Ako granice ne zatvaraju površinu

Površina je i dalje postavljena. Piše **Nije zatvoreno** i ne meri ništa dok se granice ne zatvore oko nje. Ovo je savet: ništa se ne odbija.

## Specifikacija

Levi panel › {{ui:Specifikacije}} › **Površine**: šema, broj, naziv, tip, nivo, površina i obim, sa zbirom. Klik na red bira površinu. {{ui:Preuzmi CSV}} daje istu tabelu.

## U IFC-u

Površina je IfcSpace bez tela: PredefinedType GFA za šemu bruto zgrade, USERDEFINED sa ObjectType Rentable za iznajmljivo. Nosi GrossFloorArea i GrossPerimeter, a ne neto površinu, pa se ne meša sa prostorijom. Granica je IfcVirtualElement.

## Još nije napravljeno

- Sopstvene šeme (samo Bruto zgrade i Iznajmljivo).
- Popune boja po tipu površine.
- Pravila koja sama postavljaju granicu, na primer „do linije stakla“.

Vidi i [Prostorije i razdvajači prostorija](topic:rooms-and-separators), [Oznake prostorija i površina](topic:room-and-area-tags).

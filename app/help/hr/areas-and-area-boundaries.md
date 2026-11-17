---
title: Površine i granice površina
summary: Izmjerite bruto površinu zgrade ili iznajmljivu površinu unutar graničnih linija koje nacrtate ili preuzmete sa zidova, i navedite površine u specifikaciji.
keywords: površina, površine, granica površine, shema površina, bruto površina zgrade, bruto površina poda, GFA, iznajmljivo, plan površina, popis površina, odabir zidova, nije zatvoreno
from: c79f96d2
---

## Što ćete učiniti

Nacrtajte granice sheme površina, postavite površine unutar njih i pročitajte ukupne vrijednosti.

## Gdje su alati

- Izgledi s vrpcom: {{ui:Architecture}} › **Prostorija i površina** › {{ui:Area}} i {{ui:Area Boundary}}.
- Klasični izgled: traka za crtanje › izbornik {{ui:Rooms}}.

## Koraci

1. Odaberite {{ui:Area Boundary}}. U retku odaberite {{ui:Scheme}}: **Bruto zgrada** ili **Iznajmljivo**. Svaka shema ima svoje granice.
2. Odaberite kako se linije izrađuju u {{ui:Make by}}:
   - **Crtanje**: klikajte točku po točku.
   - **Odaberi zidove: središnja linija**: kliknite zid, a njegova središnja linija je granica.
   - **Odaberi zidove: kliknuta ploha**: kliknite zid na strani koju želite; ta ploha je granica. Za bruto površinu zgrade kliknite vanjsku stranu vanjskih zidova.
3. Odaberite {{ui:Area}}. Odaberite istu shemu, po želji upišite naziv, broj ili vrstu, i kliknite unutar granica.
4. Površina se odmah izmjeri. Odaberite je da promijenite naziv, broj ili vrstu u Svojstvima.

## Što slijedi što

- Granica napravljena odabirom zida prati taj zid: pomaknete li zid, površina se ponovno izmjeri u istom koraku.
- Granica koju ste nacrtali ostaje tamo gdje ste je nacrtali.
- Plohe zidova koji se spajaju u kutu spajaju se i tamo, pa četiri odabrana zida zatvaraju površinu bez praznina.
- Granice površina prikazuju se u tlocrtu dok imate u ruci alat za prostoriju ili površinu, pa inače ne zatrpavaju tlocrt.

## Ako se granice ne zatvaraju

Površina je i dalje postavljena. Piše **Nije zatvoreno** i ništa ne mjeri dok se granice ne zatvore oko nje. Ovo je savjet: ništa se ne odbija.

## Specifikacija

Lijeva ploča › {{ui:Schedules}} › **Površine**: shema, broj, naziv, vrsta, razina, površina i opseg, s ukupnim zbrojem. Klik na redak odabire površinu. {{ui:Download CSV}} daje istu tablicu.

## U IFC-u

Površina je IfcSpace bez tijela: PredefinedType GFA za shemu bruto zgrade, USERDEFINED s ObjectType Rentable za iznajmljivu. Nosi GrossFloorArea i GrossPerimeter, a ne neto površinu, pa se ne miješa s prostorijom. Granica je IfcVirtualElement.

## Još nije izrađeno

- Vlastite sheme (samo Bruto zgrada i Iznajmljivo).
- Ispune boja po vrsti površine.
- Pravila koja postavljaju granicu umjesto vas, poput „do linije stakla“.

Vidi također [Prostorije i razdjelnici prostorija](topic:rooms-and-separators), [Oznake prostorija i površina](topic:room-and-area-tags).

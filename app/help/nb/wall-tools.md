---
title: Veggformer, deling, forskyvning, strekk og lås
summary: Tegn vegger som rektangel, mangekant, bue, på valgte linjer eller rundt en kontur. Del dem, ta ut en del, forskyv, boksstrekk, rett dem opp og lås dem til hverandre, til et mål eller til en rutenettlinje. Hver endring holder veggene sammenkoblet og er ett trinn du kan angre.
keywords: bytt type, endre type, hva som flyttet, lod, detaljeringsnivå, sammenkoblingsstil, gjæring, stumpt, rett av, veggsammenkoblinger, neste, går gjennom, forhindre sammenkobling, tillat sammenkobling, lagprioritet, kjerne, prioritet, kryss, rektangel, rotert rektangel, mangekant, innskrevet, omskrevet, bue, senter, tangentbue, velg linjer, tabulator, spor, kontur, del, mellomrom, frie ender, slett segment, sett sammen igjen, forskyvning, kopi, boksstrekk, markering, strekk, innrett, lås, hengelås, låser, lås mål, rediger mål, rutenett, lås til rutenett, plasseringsforskyvning, fritt stående, vokse fra, mål fra, senterlinje, innvendig flate, utvendig flate, Alt
from: 5b7d2f75
---

## Det du skal gjøre

Lag og endre vegger med veggverktøyets oppskrifter. Hver ender slik som å tegne en vegg etter hjørnene: hjørnene sammenkobles av seg selv, sammenkoblingene lagres i filen, og hele endringen er ett trinn i **Endringer** som {{ui:Angre}} tar tilbake. Veggene beholder sin identitet. En vegg du deler, forskyver eller strekker, er fortsatt den samme veggen, med sine dører, vinduer og mål.

## Tegn et rektangel, mangekant eller bue

Med {{ui:Tegn}} på, åpne {{ui:Former}} i Tegn-gruppen (eller velg en form i **Form**-listen på veggraden). Veggraden viser veggtypen, tegningsreferansen, utsiden og toppen, slik som for verktøyet {{ui:Vegg}}. Klikk deretter, eller skriv inn punktene (x,y · @dx,dy · @lengde<vinkel · en lengde langs pekeren):

- **Rektangel**: to motsatte hjørner. Fire vegger, fire hjørnesammenkoblinger, ett trinn.
- **Rotert rektangel**: der første side starter og slutter (det setter dens vinkel og lengde), og så et tredje klikk for den andre siden.
- **Mangekant**: sentrum, og så et hjørne (**Innskrevet**) eller midten av en side (**Omskrevet**). Sett **Sider** (3 til 64) først.
- **Bue, sentrum**: sentrum, start (det setter radiusen), slutt. **Retning**: den korteste veien, mot klokken eller med klokken. Et sveip over tre fjerdedeler av en sirkel tegnes som to vegger.
- **Tangentbue**: klikk enden av en vegg, og så der buen slutter. Buen forlater veggens ende i veggens egen retning.

En lukket form får sin utside utover. Tegnet på **Utvendig flate** eller **Innvendig flate** er det flaten du klikker, som forblir på plass.

## Vegger på linjer du allerede har

- **Velg linjer**: klikk en linje, så legges en vegg på den. Trykk {{key:Tab}} (eller hold {{key:Shift}} mens du klikker) for å ta hele kjeden av linjer sammenkoblet ende mot ende. Linjene er denne visningens tegnelinjer, sporreferansen og rutenettlinjene.
- **Spor kontur**: klikk innenfor et område lukket av disse linjene, eller av vegger. Veggene går rundt det minste området rundt klikket.

## Sett før du tegner: forskyvning og sammenkobling

Veggraden har to felt til, brukt av verktøyet {{ui:Vegg}} og formene:

- **Forskyvning**: veggene tegnes så langt fra linjen du klikker. + er til dens venstre, − til dens høyre, sett slik du tegner.
- **Sammenkobling**: fjern haken for å tegne frittstående vegger. Endene deres får **Forhindre sammenkobling** og forblir frie uansett hvor de går (se [Endre en vegg](topic:change-a-wall-or-door)).

## Del, ta ut en del, sett sammen igjen

Åpne {{ui:Vegger}} i Rediger-gruppen.

- **Del**: klikk en vegg der den skal kuttes, eller skriv inn avstanden fra starten. Nær en vegg som krysser den, fanger kuttet opp der de møtes. De to delene har samme type og er sammenkoblet ende mot ende. **Mellomrom** lar et mellomrom av den lengden stå sentrert på kuttet. **Frie ender** gir kuttenden Forhindre sammenkobling i stedet (Innstillinger › BimCraft › Vegger › **Når en vegg deles** angir hvilket som er avkrysset fra begynnelsen). En dør eller et vindu følger delen den står i. Et kutt gjennom en av dem avvises.
- **Slett segment**: klikk der delen starter og der den slutter. En dør i delen følger med.
- **Sett sammen igjen**: klikk de to delene av én vegg (på linje, samme type). De blir én vegg igjen, den første du klikket, med dørene fra begge.

## Sammenkoblingsstil, Forhindre sammenkobling, lagprioritet

Åpne {{ui:Vegger}} i Rediger-gruppen.

- **Sammenkoblingsstil**: klikk et hjørne der to rette vegger ender. Hvert klikk går til neste stil: **Gjæring** (begge ender kuttes på linjen fra det indre til det ytre hjørnet, det alle hjørner starter med), **Stumpt** (én vegg går gjennom til den ytre flaten på den andre, som stopper mot dens side) og **Rett av** (som stumpt, og veggen som går gjennom ender rett; i en rett vinkel ser det ut som stumpt). **Neste**, eller {{key:Tab}}, gjør den andre veggen til den som går gjennom. **Stil**-listen i linjen viser hjørnet du klikket sist. De samme to valgene finnes i **Egenskaper** for én vegg: **Sammenkoblingsstil ved start / ved slutt** og **Går gjennom**. Hver endring er ett trinn i **Endringer**. Planen, 3D-kroppen, rommene og mengdene følger.
- Ved et T går veggen som har siden som møtes, alltid gjennom. Der to vegger krysser, avgjør et klikk (eller **Kontinuerlig der de krysser** i Egenskaper) hvilken av de to som er kontinuerlig. Det avgjør hvilke lag av veggen som tegnes gjennom krysset.
- Stilen hører til sammenkoblingen. Den beholdes når veggene flyttes, og forsvinner bare når sammenkoblingen gjør det: veggen slettes, deles ved den enden, eller enden får Forhindre sammenkobling. Et hjørne med en buet vegg, eller der tre eller flere vegger møtes, beholder gjæringen. Et hjørne skarpere enn omtrent 30 grader, eller flatere enn omtrent 150 grader, faller også tilbake til gjæring.
- **Forhindre sammenkobling**: klikk nær en veggende. Den enden frigjøres: den sammenkobles ikke med noe, uansett hvor veggen går, til du klikker den igjen. Frie ender markeres med et kryss mens verktøyet er på. Den samme bryteren er **Sammenkobling ved start / ved slutt** i Egenskaper.
- **Lagprioritet**: der vegger med lag møtes, kutter det sterkere laget det svakere. Kjerner sammenkobles dermed med kjerner, og en overflate stopper mot det sterkere laget. Hvert lag har en prioritet fra 0 til 999. Som standard kommer den fra lagets funksjon: konstruksjon 800, underlag 600, isolasjon 400, membran 300, overflate 200, en spalte 100. {{ui:Layer-prioritet}} åpner veggoppbygningen, der kolonnen **Prioritet** setter et lags eget tall. Lag med lik prioritet stopper mot hverandre, og en linje tegnes bare mellom ulike materialer. Du ser det på planer med **Middels** eller **Fin** detalj, i hjørner, T-forbindelser og kryss mellom to rette vegger. Innstillinger › BimCraft › Vegger › **Rens veggens lag der vegger møtes** slår det av. Det endrer bare det som tegnes inne i veggene: veggenes konturer og mengder beholdes slik sammenkoblingsstilen gir dem.

## Bytt type på mange vegger

Å gå fra skisseplaner til arbeidstegninger er mest en endring av type: en generisk vegg blir den spesifikke oppbygningen. Du tegner ingenting på nytt.

1. Velg veggene (én, eller mange med {{key:Ctrl}} eller {{key:Shift}}).
2. I Egenskaper trykker du **Bytt type…** under Veggtype (eller åpner {{ui:Vegger}} i Rediger-gruppen og velger {{ui:Bytt type}}, som åpner den samme listen). Listen åpnes inne i Egenskaper, i de valgte veggenes egen blokk. Den er ikke en dialog og dekker ingenting: planen, 3D-visningen og valget virker fortsatt mens den er åpen, og den følger veggene du velger.
3. Listen viser hver veggtype med tykkelsen og LOD-merket, for eksempel «Vegg 230 generisk, LOD 200» og «230 leirmurstein, pusset på begge sider, LOD 300». Typene de valgte veggene har nå, er merket. Skriv i **Finn** for å snevre inn: et navn, en tykkelse, eller `lod 300`.
4. Klikk en type. Hver valgt vegg endres til den i ett trinn, så ett {{ui:Angre}} tar hele byttet tilbake. Den lille x-en lukker listen.

Hver vegg beholder sin plasseringslinje. En vegg på sin senterlinje vokser til begge sider. En vegg der plasseringslinjen er en flate, beholder den flaten og vokser den andre veien, og vegger sammenkoblet til den følger i hjørnene. Låste vegger til en byttet vegg følger den også. Dører og vinduer blir stående i sine vegger og kuttes på nytt for den nye tykkelsen.

Etter byttet viser listen **Hva som flyttet**: hvor mange vegger som er endret, og til hva, tykkelsen og LOD før og etter, veggene som flyttet seg sidelengs for å beholde sin plasseringslinje, de sammenkoblede veggene som fulgte, dørene og vinduene som ble festet på nytt til veggene, og hvert rom der arealet endret seg, med arealet før og etter. Statuslinjen sier det samme på én linje. Rapporten forteller bare; den stopper aldri et bytte. Å velge en type i **Egenskaper › Veggtype** gjør det samme byttet og gir samme rapport.

To ting stopper et bytte, og da endres ingenting: en dør eller et vindu som ikke lenger ville passe i sin vegg (en vegg blir kortere der et hjørne følger; gjør døren smalere eller flytt den bort fra hjørnet først), og en lås byttet ville bryte (en vegg låst til en rutenettlinje på sin senterlinje mens plasseringslinjen er en flate; lås den opp, eller sett plasseringslinjen tilbake på senterlinjen).

En assistent koblet til BimCraft kan gjøre det samme byttet (verktøyene `wall_types_list` og `walls_swap_type`) og får den samme rapporten tilbake.

LOD-merket på en type settes i veggoppbygningseditoren: se [Veggoppbygninger](topic:wall-assemblies).

## Forskyvning og boksstrekk

- **Forskyvning**: klikk en vegg, og så siden den skal flyttes til, eller skriv inn avstanden. Veggen flyttes vinkelrett på seg selv, og veggene sammenkoblet til den strekkes. Kryss av **Kopier** for en parallell kopi i stedet (den er ikke sammenkoblet med originalen).
- **Boksstrekk**: klikk to hjørner på en boks, deretter et punkt å flytte fra og et punkt å flytte til. Hver veggende inne i boksen flyttes. En vegg helt inne i boksen flyttes, og veggene som støter inn i den, følger også. Vegger som krysser boksen, strekkes.

## Rediger et mål og lås det

Velg et referansemål (Merknad › {{ui:Referansemål}}) og skriv inn verdien i **Egenskaper**: veggen til dens andre referanse flyttes vinkelrett på seg selv, den første referansen holder, og de sammenkoblede veggene følger. Kryss av **Lås denne måltilsettingen** for å beholde verdien: når en av veggene flyttes senere, følger den andre. En låst verdi kan ikke skrives over før du fjerner haken.

## Innrett og lås

{{ui:Innrett og lås}}: klikk en veggflate (eller senterlinjen, nær midten av veggen) eller en rutenettlinje, og deretter flaten på veggen som skal bringes til den linjen. Veggen flyttes vinkelrett på den. Kryss av **Lås** først for å holde dem på linje: en hengelås vises på planen, og når den ene veggen flyttes, følger den andre. **Egenskaper** for en vegg lister dens **Låser**, hver med **Lås opp**.

## Lås vegger til rutenettlinjer

Velg en vegg som går langs en rutenettlinje, eller hvis ende sitter på en, og velg rutenettlinjen i **Egenskaper** › **Lås til rutenett**. Velg deretter rutenettlinjen med verktøyet {{ui:Rutenett}} og skriv inn en avstand i {{ui:Flytt med}}: linjen flyttes vinkelrett på seg selv, og veggene låst til den følger, sammen med sine sammenkoblede vegger, i ett trinn. En vegg låst til en rutenettlinje kan ikke flyttes bort fra den på egen hånd (flytt linjen, eller lås veggen opp). En rutenettlinje som er dreid slik at en låst vegg ikke kan forbli vinkelrett på den, avvises. Å gi linjen nytt navn beholder låsen; å slette den fjerner låsen.

## Lengde: hvilken side som holder, og hva den måler

- **Vokse fra** (Egenskaper for én vegg): **Start holder** (enden flyttes), **Slutt holder** (starten flyttes) eller **Sentrum holder** (begge ender flyttes med halvparten). Mens du skriver inn lengden, markerer planen punktet som holder. Veggen som er sammenkoblet ved enden som flyttes, flyttes vinkelrett på seg selv og beholder sin vinkel.
- **Mål fra** (ved siden av {{ui:Mål}} på planen, i Egenskaper, og i Innstillinger › BimCraft › Vegger): senterlinjen, innvendig flate eller utvendig flate. Lengdefeltet og veggmålene på planen leser den samme, så de stemmer overens. Den starter på senterlinjen.
- For å flytte en vegg fri av sine sammenkoblinger (de brytes, og veggen beholder sin identitet), hold {{key:Alt}} mens du drar midtgrepet.

## Godt å vite

- Disse oppskriftene er veggverktøyets spesifikasjon (sidene 4 til 9). Sammenkoblingsstil og lagprioritet er bygget for rette vegger. Lagprioritet vises bare på planen (ikke i snitt, fasader eller 3D, der en vegg er ett legeme), ikke i noder med tre eller flere vegger, og membraner bæres ikke videre.
- En sammenkoblings stil lagres i dens post i IFC-filen (navnet på `IfcRelConnectsPathElements`, for eksempel `CadCraft join L butt 1`), slik at andre programmer fortsatt leser sammenkoblingen, og en eldre fil åpnes med gjæringer.
- Låsene og sammenkoblingene lagres i IFC-filen (låsene som `CadCraft_WallHolds` på prosjektet, sammenkoblingene som `IfcRelConnectsPathElements`), så de er der når du åpner filen igjen.
- Buede vegger kan deles, sammenkobles igjen og få en del tatt ut. De forskyves eller låses ikke.
- Se også [Tegn vegger](topic:draw-walls), [Endre en vegg, dør eller vindu](topic:change-a-wall-or-door) og [Veggform](topic:wall-shape).

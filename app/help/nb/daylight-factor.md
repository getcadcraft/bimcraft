---
title: Anslå dagslyset i hvert rom
summary: Gjennomsnittlig dagslysfaktor for hvert rom, fra vinduene, de innvendige flatene og himmelen hvert vindu ser, med himmelvinkelen målt i modellen. Et tidlig designanslag, ikke en simulering eller en kontroll mot regelverk.
keywords: dagslys, dagslysfaktor, gjennomsnittlig dagslysfaktor, adf, vertikal himmelkomponent, vsc, solinnstråling, sol, g-verdi, rutenett, delt fluks, himmelkomponent, internt reflektert komponent, naturlig lys, vindu, glass, himmelvinkel, hindring, overskygging, balkong, overheng, refleksjonsevne, transmittans, tidlig design, analyse, rom, områder
from: 5f300a78
---

Fanen {{ui:Dagslys}} i høyre panel beregner hvert rom sin **gjennomsnittlige dagslysfaktor**: hvor mye av lyset fra en overskyet himmel utenfor som i gjennomsnitt når rommet, i prosent. Den leser den åpne IFC-modellens rom (områder) og vinduer. Ingenting endres i modellen, og ingenting lastes opp.

:::warning
Alt i denne fanen er **et designhjelpemiddel, ikke en beregning for samsvar**: tidlige designanslag etter publiserte metoder, **ikke en simulering** og **ikke en kontroll mot byggeforskrift eller standard**. BS EN 17037, LEED, BREEAM og energiforskrifter krever en dagslyssimulering med stedets klima; bruk et dagslyssimuleringsprogram til dem.
:::

## Slik gjør du det

1. Åpne en IFC-modell som har rom (områder) og vinduer. Modeller tegnet her har et rom inne i hvert lukkede sett med vegger.
2. Åpne fanen {{ui:Dagslys}} og klikk på {{ui:Beregn}}.
3. Hvert rom viser sin dagslysfaktor og et bånd: under 2 %, 2–5 %, 5 % eller mer. Klikk på et rom for å se flatene og hvert vindus areal og himmelvinkel; rommet og vinduene velges i modellen.

Endrer du en inndata, følger tallene med med en gang. Etter at du har endret modellen, klikker du på {{ui:Beregn på nytt}}. {{ui:CSV}} lagrer hvert rom med tallene og inndataene som ble brukt.

## Formelen

Gjennomsnittlig dagslysfaktor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), summert over rommets vinduer (Littlefairs formel, brukt i BRE 209, BS 8206-2 og CIBSE LG10):

- **T**, glassets lystransmittans (0,7 til å starte med: bruk produsentens tall).
- **Ag**, det glasserte arealet: hvert vindus areal (total bredde × høyde, ellers størrelsen i modellen) × **glassandelen** (0,75 til å starte med: resten er karm).
- **θ**, himmelvinkelen vinduet ser, i grader (under).
- **M**, vedlikeholdsfaktoren for smuss på glasset (1 til å starte med).
- **A**, alle innvendige flater i rommet: gulv, vegger, tak og vinduer, hentet fra rommets egen form.
- **R**, deres gjennomsnittlige refleksjonsevne, vektet etter areal: gulv 0,2, vegger 0,5, tak 0,7 til å starte med; glass regnes som 0,1.

## Slik måles himmelvinkelen

For hvert vindu kutter BimCraft modellen med et loddrett plan vinkelrett på vinduet, fra glassets utside, og ser fra horisonten rett opp. Alt snittet treffer foran vinduet (en bygning rett overfor, en balkong eller et overheng over, takskjegget) skjuler en del av de 90°. θ er det som er igjen. Selve vinduet og veggen det sitter i, utelates. Dette gjøres på fem steder over vinduets bredde, og gjennomsnittet tas, slik at en tynn stolpe foran midten tar sin andel, ikke hele himmelen.

En bygning 8,5 m over vinduets midte og 9,9 m unna skjuler 40,65° (vinkelen med tangens 8,5 ÷ 9,9), og gir θ = 49,35°.

## Vertikal himmelkomponent for hvert vindu

{{ui:Beregn}} måler også for hvert vindu hvor mye av hele himmelen det ser: det samme loddrette snittet, vridd til hver retning over vinduets front (hver 2°, fra den ene siden til den andre), slik at en bygning på siden, en finne eller en dyp vindusinnfelling tar sin andel. Ut fra det beregner BimCraft den **vertikale himmelkomponenten (VSC)**: hvor mye av lyset fra den overskyede himmelen som når glasset, som en andel av det en åpen, flat takflate ville fått. Et vindu uten noe foran seg får **39,6 %**, det mest et loddrett vindu kan få. En lang bygning som reiser seg 25° over vinduet, gir omtrent **27 %**, tallet britisk veiledning (BRE 209) bruker som tommelfingerregel. Hvert vindu i et rom sine detaljer viser sin VSC og sin **hindringsvinkel** (hvor høyt ting reiser seg rett foran det).

Den overskyede himmelen er den standardiserte CIE-himmelen, som er tre ganger så lys rett opp som ved horisonten, og snittet er eksakt: ingenting er stikkprøvetatt.

## Solen gjennom vinduene en dato

Åpne {{ui:Sol gjennom vinduene på en dato}} og velg en dato. BimCraft følger solen gjennom den dagen i kvarterer og legger sammen, for hvert vindu, varmen solen gir gjennom glasset:

- **direkte sol**, når den står foran vinduet og ingenting i modellen skjuler den (det samme eksakte snittet, vridd mot solen: en balkong som skygger for høysommersolen midt på dagen, slipper inn den lave vintersolen);
- **himmelens lys** på glasset, minus det vinduet ikke kan se;
- lyset **fra bakken** (dens refleksjonsevne: 0,2 til å starte med);
- alt dette gjennom glassets **g-verdi** (andelen av solens energi det slipper gjennom: 0,6 til å starte med; bruk produsentens tall) og glassandelen.

Hvert rom viser dagens totale verdi i kWh og toppen i watt med klokkeslettet; et rom sine detaljer tegner dagen som et diagram. Himmelen er klar etter Hottels modell (Duffie & Beckman, *Solar Engineering of Thermal Processes*), med sommer- eller vintertall for stedet og sesongen og stedets høyde over havet. Solens posisjon er beregnet etter NOAA. Stedets breddegrad og lengdegrad hentes fra IFC-filens sted, og nord fra modellens virkelige nord; har modellen ikke noe sted, skriver du inn en breddegrad og lengdegrad. Klokkeslett er standardtid (ingen sommertid) i tidssonen du skriver inn, ellers den lengdegraden tilsier.

Ikke med: skyer (det er en klar dag), at glasset slipper inn mindre ved lave vinkler, rammer som skygger for glasset, persienner, og det veggene og taket tar opp. Kjøleanslaget i samme fane bruker toppverdien.

## Dagslysfaktoren på et rutenett

Åpne {{ui:Dagslysfaktor på et rutenett}} og {{ui:Beregn rutenettet}}. BimCraft legger et rutenett over hvert rom sitt gulv i arbeidsplanhøyden (0,85 m til å starte med), en halv meter inn fra veggene, og beregner dagslysfaktoren i hvert punkt etter **BRE-metoden for delt fluks**:

- **himmelkomponenten**: den overskyede himmelen sett fra punktet gjennom hver vindusåpning, minus karmene;
- **den eksternt reflekterte komponenten**: det punktet ser av bygninger utenfor gjennom vinduet, som lyser med en tidel av himmelen bak dem (endre lysstyrken på hindringene hvis de er mye lysere eller mørkere);
- **den internt reflekterte komponenten**: lyset som spretter rundt i rommet, fra rommets flater og refleksjonsevner, vinduenes areal og hvor mye som er utenfor dem (BRE-formelen, med glassets transmittans i stedet for det klare glasset den forutsatte).

Hvert rom viser gjennomsnittet, laveste punkt og hvor stor andel som får 2 % eller mer. Et rom sine detaljer tegner planen med hvert punkt fargelagt etter dagslysfaktoren og vinduene i rødt. For at det skal gå raskt på alle datamaskiner, får et rom høyst **400 punkter**: i et stort rom vokser avstanden for å passe. Skriv inn en avstand for å velge selv.

## Hva det utelater

- Takvinduer (glass som ligger flatt eller skrått) listes, men telles ikke: formlene her gjelder vinduer i vegger.
- Vinduer uten rom bak seg (en hall uten område, for eksempel) listes for seg.
- Vindusinnfelling (åpningen regnes på utsiden av glasset), blending, solskinnstimer og klimabasert dagslys. For BS EN 17037, LEED eller BREEAM bruker du et dagslyssimuleringsprogram.
- Båndene kommer fra eldre britisk veiledning (BS 8206-2), vist som en veiledning, aldri som bestått eller ikke bestått.

---
title: Lister, mål og en PDF af planen
summary: Dør-, vindues-, væg- og rumlister, der ændrer sig, mens du tegner, mål på planen, og planen for en etage gemt som PDF i en standardskala.
keywords: liste, dørliste, vinduesliste, vægliste, rumliste, mængder, mængdeudtræk, areal, csv, regneark, mål, måling, udskriv, pdf, plot, skala, 1/4", 1:50, ark
from: d97cd16e
---

## Hvad du skal gøre

Se, hvad bygningen, du tegnede, summer sig til, mens du tegner den: hvor mange døre og vinduer af hver størrelse, hvor meget væg af hver type, hvor stort hvert rum er. Sæt mål på planen, og gem den som PDF for at udskrive eller sende den.

## Lister

Med {{ui:Tegn}} tændt viser **Lister** i venstre panel én tabel ad gangen:

- **Døre** og **Vinduer**: hver efter sin mærkning (D1, D2 … og W1 … , givet når du placerer dem), sin type, bredde, højde (og vinduesbænk), etage og væggen, den sidder i.
- **Vægge efter type**: for hver væggtype, hvor mange vægge, deres tykkelse, deres samlede længde og deres sideareal som **Bruttoareal**, **Fradrag** og **Nettoareal**, med en total.
- **Rum**: nummer, navn, etage, areal og omkreds, med det samlede areal.
- **Gulve**: hvert gulv med sin etage, type og tykkelse, og dets bruttoareal, fradrag og nettoareal.
- **Overflader**: hvert overfladelag på væggetyperne (efter materiale og side af væggen) og lofterne, med antallet af flader og brutto, fradrag og netto.
- **Væggetyper: mængdedata**: hvad der er indtastet én gang på hver væggetype (enhed, mørtel, sats), med antallet af vægge, deres længde og nettoareal, og satsen gange den målte mængde. Se [Vægkonstruktioner](topic:wall-assemblies).
- **Overflader efter rum**, **Overflader efter væg**, **Overflader efter zone** og **Overflademængder**: hvad der dækker hvert rum, med arealer, flisetal inklusive skæring og underlagsvolumener. Se [Rumoverflader og overfladelister](topic:room-finishes).
- Dine egne **opsætninger**: en liste, du grupperede, summerede og gemte under et navn. Se [Opsæt, gem og eksportér en liste](topic:schedule-layouts).

Tabellerne ændrer sig med hver redigering. Klik på en række, eller på et enkelt tal, for at vælge de elementer, det kom fra. **Download CSV** gemmer tabellen, så den kan åbnes i et regneark; **Download Excel** og **Kopiér til Google Sheets** står under den. **Rumoverflader** og **Specifikation** ([Skriv specifikationen ud fra modellen](topic:specification)) åbnes fra samme sted.

## Areal og volumen for hvert lag

Vælg **Lag: areal og volumen** i listen Lister. Den har én række for hvert lag i hver væg-, gulv-, tag- og lofttype i brug: elementet, typen og dens LOD, laget (talt fra væggens ydre side, eller fra toppen af et gulv, tag eller loft), dets materiale og funktion, dets tykkelse, hvor mange elementer, **nettoarealet** og **volumenet**.

- Arealet er nettoarealet af elementerne af den type, målt nøjagtigt som i Vægge efter type, Gulve og Overflader, efter projektets målemetode. Et tag måles på hældningen; ingen målemetode har en regel for tage.
- Volumenet er det areal gange lagets egen tykkelse.
- Et gulv, tag eller loft uden type er én række: ét lag af sin egen tykkelse.
- Et luftlag er listet med sit areal og udeladt fra det samlede volumen. En membran har et areal og intet volumen.

Klik på en række for at vælge dens elementer. **Download CSV** gemmer tabellen.

## Sådan måles arealer

Hvert areal er tre tal, der lægges sammen: brutto minus fradrag er netto. Reglen står skrevet over hver af disse tabeller, og det er én regel: listerne, mængderne gemt i IFC-filen og mængdeudtrækket, der sendes til TakeoffCraft, bruger alle den.

- **En væg**: brutto er én side af væggen, dens længde langs centerlinjen gange dens højde (den reelle flade for en væg med formet top eller bund). Hver dør, vindue og anden åbning fradrages, bredde gange højde, hver åbning én gang.
- **Et gulv eller et loft**: brutto er arealet inden for dets kontur. Hver åbning og udskæring inde i det fradrages én gang.
- **En vægoverflade**: hvert overfladelag på væggetypen dækker én side af væggen, målt som væggen, med de samme åbninger fradraget. En overflade er et lag af væggen: den står under Overflader og lægges ikke til vægarealet, så en væg med en dør aldrig tælles to gange.

Det er **CadCraft-standarden**: hver åbning fradrages, uanset dens størrelse; væglængder er langs centerlinjen; ansatser måles ikke. Det er det, alle projekter bruger, indtil du vælger en anden metode.

## Vælg en målemetode

Over listen viser **Målemetode** de metoder, der følger med BimCraft, og **Indlæs en metodefil** tager dit kontors egen. Valget gemmes i IFC-filen som ét fortrydelsestrin, og tre ting følger det med det samme: listerne, de nettomængder, der gemmes i filen, og mængdeudtrækket, der sendes til TakeoffCraft. Reglen over hver tabel starter så med metoden, dens kilde, datoen kilden blev læst og ordene **Ikke kontrolleret af en mængdemand**.

En metode er en lille fil med fakta, ikke programkode. For hver mængde siger den:

- **den mindste fradragne åbning**: for eksempel forbliver en åbning på 0.5 m² eller mindre i vægarealet;
- **hvordan vægsamlinger måles**: langs centerlinjen; eller med en væg, der ender mod en anden, målt til den væg's flade; eller med hver vægende, der møder en anden væg, målt til den nære flade;
- **om ansatser måles** for en overflade (overfladens returer ind i åbningerne), som et areal eller, når de er lave, som en længde. Ansatsens dybde regnes som halvdelen af vægens tykkelse;
- **hvad den siger om murværk**: hvordan det måles, og eventuelle spild- eller mørteltillæg den angiver.

Metoderne, der følger med BimCraft:

| Metode | Vægge: mindste fradragne åbning | Vægoverflader | Lofter | Murværk |
|---|---|---|---|---|
| CadCraft-standard | hver åbning | hver åbning | hver udskæring | ingen tillæg |
| RICS NRM 2 (Storbritannien), 2. udgave 2021 | 0.5 m² eller mindre forbliver | 1 m² eller mindre forbliver | 1 m² eller mindre forbliver | efter areal; ingen procenter angivet |
| AAQS Standard Method for Africa 2015 | 0.5 m² eller mindre forbliver | 0.5 m² eller mindre forbliver | 0.5 m² eller mindre forbliver | efter areal; målt netto, 0 % spild |
| IS 1200 (Indien), 1976, murværk | 0.1 m² eller mindre forbliver | standard (se nedenfor) | standard | efter volumen |
| BIA Technical Note 10 (USA), 2009 | hver åbning | standard | standard | 5 % spild på enheder, 15 % på mørtel |

Læs disse begrænsninger, før du stoler på en metode:

- **Ingen mængdemand har kontrolleret nogen af dem.** Hver blev lavet ved at læse den nævnte kilde og notere dens tal med den paragraf, de kommer fra. Hvis du er mængdemand og kan kontrollere en, vil appens udviklere gerne høre fra dig.
- Hvor en regel ikke kunne læses fra kilden, siger metoden **ikke bekræftet** for den, og CadCraft-standarden bruges. Ingen metode, der følger med BimCraft, har en bekræftet regel for vægsamlinger, ansatser eller gulve, så de måles på standardmåden under alle.
- IS 1200 fradrager åbninger i puds i tre bånd. En metodefil kan endnu ikke rumme bånd, så vægoverflader bruger standarden under den metode, og reglen siger det.
- Den sydafrikanske standard System of Measuring Building Work er **ikke** blandt dem: dens tekst kunne ikke læses. AAQS-metoden for Afrika siger, at den er bygget på 1991-udgaven af det system, men det er et andet dokument.
- BIA Technical Note 10 er en branchenote til overslag, ikke en standardmålemetode.
- En åbning, der er præcis den mindste størrelse, følger metodens egne ord ("ikke over", "mindre end"). Størrelser inden for 2 dele pr. 10 000 af den tæller som præcis den.
- Under en metode følger filens nettosideareal af en væg og nettoarealet af et gulv eller loft metoden, og mængdesættet nævner den. Brutto-arealerne og volumenerne i filen forbliver som tegnet.

**Noter om denne metode**, under vælgeren, siger, hvad hver kilde lader stå åben. **Åbn kilden** går til dokumentet.

### Dit kontors egen metode

En metodefil er JSON i formatet `cadcraft-measurement-method`. Hver værdi i den nævner den paragraf, den kommer fra; en værdi uden paragraf afvises. Filen kontrolleres, når du indlæser den; et forkert felt navnes, og intet bruges fra en fil, der ikke består. Når den er valgt, gemmes filen i projektet, så projektet åbner ens på en anden computer. Dens id er et almindeligt navn efter eget valg (det må ikke være id'et for en metode, der følger med appen).

## Mursten, blokke og mørtel

**Væggetyper: mængdedata** tæller enhederne og mørtlen for hver væggetype, hvis enhed har en længde og en højde (se [Giv en type sine mængdedata](topic:wall-assemblies#give-a-type-its-takeoff-data)). Det er formlerne, præcis som beregnet:

- **Enheder pr. areal af ét blad** = 1 / ((enhedens længde + fuge) × (enhedens højde + fuge)). En 215 × 65 mm mursten med en 10 mm fuge: 1 / (225 × 75 mm) = 59.26 pr. m².
- **Enhedsbredder på tværs af et blad** = (bladets tykkelse + fuge) / (enhedens bredde + fuge), rundet til et helt tal, mindst 1. Et 102.5 mm blad af 102.5 mm mursten er 1; en 215 mm væg af de samme mursten er 2.
- **Enheder** = enheder pr. areal × enhedsbredder på tværs × nettoarealet af vægfladen, lagt sammen over typens murblade.
- **Enheder at bestille** = enheder × (1 + spild % / 100), rundet op til en hel enhed. Spildet er det, der er indtastet på typen; uden indtastning metodens, hvis den angiver et; ellers 0 %.
- **Mørtel** = nettoareal × bladets tykkelse, minus enhedernes volumen (enheder × længde × højde × bredde), så plus den ekstra procent, der er indtastet på typen for huller eller perforeringer, så plus metodens tillæg, hvis den angiver et. Den kræver enhedsbredden.

Der antages: hvert murblad af en type er bygget af typens ene enhed; et blad tykkere end én enhedsbredde tælles som så mange enhedsbredder, hver som et blad lagt på langs, så skårne enheder, afslutninger og specialformer ikke tælles særskilt; hvor intet lag er markeret som bygget af enheden, tages kernelagene som bladene, og noten over tabellen siger det. **Mængde** er satsen gange det, satsen gælder pr., hvilket nu også kan være en enhed at bestille, 1000 enheder at bestille eller en m³ mørtel.

Mærkninger er elementernes IFC-mærkning: ændr en i **Egenskaber** (Mærkning), og listen følger med. For hver IFC-model, tegnet eller ej, lægger [Læg mængder sammen, list elementer og lav rumlister](topic:quantity-totals) enhver egenskab sammen.

## Mål

Planen viser hver tegnet væggs længde langs dens ydre flade (en indervæg: langs den ene flade) og, for en væg med døre eller vinduer, en kæde fra hjørnerne til hver åbning. {{ui:Mål}} i modellinjen skjuler dem og viser dem igen.

## Gem planen som PDF

1. Vis den etage, du vil have, og indstil enhederne i panelet **Etager**.
2. Klik på {{ui:Udskriv}} i modellinjen.
3. BimCraft gemmer "<fil> — <etage>.pdf": planen i sort-hvid i den største standardskala, der passer på siden (1/4" = 1'-0", 1/8" = 1'-0" … på Letter i fod og tommer; 1:50, 1:100 … på A4 i millimeter), med væggene udfyldt, døre, vinduer, rumnavne og arealer, mål og et tegningshoved med etagen, filen, snithøjden, datoen og skalaen.

PDF'en tegnes som linjer og tekst, så den er skarp ved enhver zoom, og dens tekst kan søges i.

## Godt at vide

- Listerne viser det, tegneværktøjerne har lavet. Døre og vinduer fra et andet program vises i stedet i Mængdesummer.
- For at prissætte jobbet, giv mængderne til TakeoffCraft: se [Mængder til TakeoffCraft](topic:takeoff). CSV-downloaden er til et regneark.

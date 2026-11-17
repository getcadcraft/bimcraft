---
title: Analyser den bærende rammen
summary: Krefter, reaksjoner og nedbøyninger i modellens bjelker, søyler og avstivninger under lasttilfeller og kombinasjoner du angir, lagret i IFC. Et analysehjelpemiddel, ikke en normkontroll.
keywords: analyse, enheter, fot og tommer, visningsenhet, konstruksjonsanalyse, dimensjoneringskontroller, utnyttelse, valset, sveiset, AISC 360, EN 1993-1-1, rammeanalyse, analytisk modell, stivhetsmetoden, laster, lasttilfelle, kombinasjon, egenlast, nyttelast, egenvekt, reaksjoner, bøyemoment, skjærkraft, normalkraft, nedbøyning, deformert form, opplager, leddet, innspent, frigjøring, rapport, pdf, csv, craftscript, frame3d, bjelker, søyler, staver
from: b93b58c4
---

Fanen {{ui:Analyse}} til høyre finner kreftene i den åpne modellens bjelker, søyler og avstivninger, reaksjonene ved søylefotene og hvor mye stavene bøyer seg, for lastene du gir den.

:::warning
Det er et **analysehjelpemiddel, ikke en normkontroll**. Analysen bruker ingen prosjekteringsnorm: den dimensjonerer ikke staver og kontrollerer ikke kapasiteter, og den velger ikke lastfaktorer. En ingeniør kontrollerer den analytiske modellen, lastene og opplagene, og bestemmer hva tallene betyr. Blokken {{ui:Dimensjoneringskontroller}} under den kontrollerer valsede stål-I-profiler mot AISC 360 eller EN 1993-1-1, et hjelpemiddel inntil en ingeniør har gjennomgått den: se [Dimensjoneringskontroller](topic:frame-analysis#design-checks).
:::

## Kjør den

1. Åpne en IFC-modell og fanen {{ui:Analyse}}.
2. Velg én eller flere bjelker, søyler eller avstivninger i visningen, velg et {{ui:Tilfelle}}, en {{ui:Last}} og en {{ui:Retning}}, skriv verdien og trykk {{ui:Legg til last}}: kN/m for en last fordelt langs en stav, kN for en punktlast.
3. Trykk {{ui:Kjør analyse}}.

Tabellen lister hver stavs største aksialkraft, skjærkrefter, bøyemomenter, torsjon og nedbøyning; klikk navnet på en stav for å velge den i visningen. Under står reaksjonene. {{ui:På modellen}} tegner den deformerte formen, eller én størrelse som et diagram ved siden av hver stav. Resultatene blir utdaterte når modellen endres: kjør analysen på nytt.

Hver last og innstilling er én endring i listen {{ui:Endringer}}: {{ui:Angre}} tar den tilbake, og {{ui:Lagre som IFC}} beholder dem i filen (prosjektets egenskapssett `CadCraft_Analysis`), slik at lastene fortsatt er der neste gang modellen åpnes her.

## Slik lages den analytiske modellen

- Hver IfcBeam, IfcColumn og IfcMember hvis form er én rett ekstrudering, blir en stav på tverrsnittets tyngdepunktlinje. Tverrsnittsegenskapene kommer fra profilen: I-, U-, L- og T-former, rektangler og rør, sirkler og runde rør, eller enhver lukket omriss (da er torsjonskonstanten et anslag, og det står i rapporten). Alt annet utelates og telles.
- I en modell stopper bjelker ved en søyles flate og sitter under gulvet. Hver stavende føres langs sin egen linje til aksen på staven den rammer inn i, når aksen er nær (innen omtrent størrelsen på tverrsnittene), og den staven deles der. Rapporten sier hvor mange ender som ble flyttet.
- **Søylefoten** som ingenting går under, er et opplager: innspent (ved starten) eller leddet (holdt på plass og mot vridning, fri til å dreie).
- **Bjelkeender** er stive eller leddet etter regelen {{ui:Bjelkeender uten forbindelse}}; **avstivninger** (IfcMember) er leddet i begge ender. Velg én stav for å gi dens ender, eller en søylefot, en egen regel.
- Materialer etter navn: betong (E = 30 GPa), tre (E = 11 GPa), ellers stål (E = 200 GPa).

Hvis rammen kan bevege seg uten å bøye noe – en mekanisme – stopper kjøringen og sier hvor og i hvilken retning.

## Tilfeller, kombinasjoner, fortegn og rapport

Analysen starter med **Egenlast** (egenvekt), **Nyttelast** og **Egenlast + nyttelast**; legg til tilfeller og kombinasjoner med de faktorene prosjekteringsnormen din krever. N > 0 er strekk; My > 0 setter stavens lokale −z-side i strekk (en bjelke som bøyer seg ned under tyngdekraften har My > 0). {{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} holder forutsetningene, tverrsnittene, tilfellene, reaksjonene med sine summer, staveskreftene, forskyvningene og en omhylling. {{ui:Eksporter som CraftScript}} skriver rammen til PartCraft sin Script-arbeidsflate, der biblioteksfunksjonen `frame3d` løser den i lesbar kode.

Metoden er den direkte stivhetsmetoden, lineær og av første orden med mindre du krysser av for *Andre orden (P-Delta)*, og er kontrollert mot lærebokeksempler.

**Andre orden (P-Delta).** Kryss av for *Andre orden (P-Delta)* ved siden av Kjør: hver kombinasjon løses på nytt med stavenes aksialkrefter som virker på den deformerte rammen (hver stav delt i 4 deler, slik at bøyningen mellom endene også teller), til aksialkreftene stabiliserer seg. Resultatlinjen gir antall omganger og hvor mye sideforskyvningen økte; momentene, nedbøyningene, dimensjoneringskontrollene og rapporten bruker så disse resultatene. Over rammens elastiske kritiske last stopper kjøringen og sier det. Metoden er elastisk med små rotasjoner, bare bøyning, uten stivhetsreduksjon eller fiktive laster (ikke AISC direkte analysemetode alene); dekker, vegger og stive gulv forblir av første orden.

**Gulvtrykk på dekker.** For betongdekker (analysen leser et dekke som plater når materialet er betong) har Laster-blokken {{ui:Trykk på alle dekker}}: skriv inn kN/m², velg tilfellet over og trykk {{ui:Legg til på dekker}}. Trykket fordeles på hvert dekke analysen fant, nedover, og listes med en Fjern-lenke. Det er ett trykk for alle dekkene, ikke ett per dekke, og det er ikke en normlast: skriv inn verdien ingeniøren din gir deg.

**Egenfrekvenser (elementmetoden).** Blokken {{ui:Elementmetoden: egenfrekvenser}} under resultatene finner de laveste svingeformene for den samme modellen med elementmetodeberegneren: bjelker med sine endefrigjøringer, dekker og vegger som flate firenodeskall, stive gulv og opplager. Velg hvor mange svingeformer (3, 6, 10 eller 20) og dekkelementet (firenodeskallet for tykke eller tynne dekker, eller det tynne dekket), og trykk {{ui:Finn frekvensene}}. Tabellen gir hver svingeforms frekvens i Hz, periode i sekunder og den effektive modalmassen langs X, Y og Z som en andel av massen som kan bevege seg. {{ui:Vis på modellen}} tegner en svingeform på samme måte som den deformerte formen. Massen er materialets tetthet ganger volumet: laster gir ikke masse, og et materiale uten tetthet har ingen. Rapporten (PDF, CSV) har tabellen. Beregningen er elastisk og gjelder bare små bevegelser, og ingen jordskjelv- eller vindlast lages her etter en norm. Ikke en normkontroll; ingeniøren din går gjennom resultatene.

**Responsspekter, tidshistorie og pushover.** Tre blokker til ligger under frekvensene og bruker den samme elementmetodemodellen. Massen for alle er materialets tetthet pluss de nedadrettede lastene i tilfellene du krysser av, hver ganget med en faktor du skriver inn (for eksempel Egenlast med 1 og Nyttelast med den andelen du regner som masse).

{{ui:Responsspekter}} leser hver svingeform av et spekter du gir (en tabell med periode og akselerasjon, eller ASCE 7-formen fra SDS, SD1 og TL; knappen {{ui:Bruk verdiene fra blokken Seismisk}} kopierer dem fra blokken Seismisk). Den kombinerer svingeformene med CQC, SRSS, tiprosentregelen eller en absolutt sum, og setter så retningene X, Y og Z sammen (100 % + 30 % eller SRSS). Den gir grunnskjær, etasjedrift, endekrefter i staver og en svingeformtabell som advarer når de brukte svingeformene bærer mindre enn 90 % av massen. Du kan skalere resultatene med en faktor eller opp til en grunnskjær du skriver inn; blokken beregner aldri den grunnskjæren selv. Resultatene har ingen fortegn.

{{ui:Tidshistorie}} kjører en bakkeakselerasjon ved modal superposisjon (eksakt for innspillingens rette linjer mellom punktene) eller ved direkte integrasjon (Newmarks gjennomsnittlige akselerasjon med Rayleigh-demping). Inndata er en oppdiktet sinus eller puls (alltid merket syntetisk), en innspilling du limer inn, eller en tekstfil du åpner (tid og akselerasjon, én akselerasjon per linje med et steg, eller en PEER-lignende fil med en DT=-topptekst; i g eller m/s²). Den gir takforskyvningen og grunnskjæren mot tid, driften for hvert nivå og omhyllingen av endekreftene i stavene. Modeller med en svært lang innspilling beholder den bare for økten.

{{ui:Pushover}} skyver taket sideveis i små steg (mønster som første svingeform, eller jevnt), med plastiske hengsler i endene av staver som har I-form. Et hengsel gir etter ved det plastiske momentet, som synker etter hvert som aksialkraften øker (beregnet fra den tegnede formen; avrundinger ignoreres). Herding er valgfritt, P-delta er valgfritt, og en tyngdekombinasjon kan brukes først. Den gir kapasitetskurven (grunnskjær mot takforskyvning), det første hengslet, og tilstanden og den plastiske rotasjonen til hvert hengsel. {{ui:Kjør den ikke-lineære tidshistorikken}} kjører de samme hengslene under innspillingen fra blokken Tidshistorie på små modeller. Hengsler dannes bare i stavender (sett en node der ett skal dannes inne i et spenn); en stav som er frigjort i begge ender får ingen; flyt og knekking av avstivninger er ikke modellert; dekker og vegger forblir elastiske; ingen akseptkriterier er gitt. Ikke en normkontroll; ingeniøren din går gjennom resultatene. Innstillingene lagres med modellen, og rapporten har tabellene.

Ikke bygget ennå: knekking, en korreksjon for manglende masse i responsspekteret, skalering av innspillinger, akseptkriterier for hengsler (dynamisk respons finnes, over), areallaster utover det ene trykket på alle dekker, offsett for staver, avstivninger som bare tar strekk, vegger og dekker i rammen, og dimensjoneringskontroller av sveisede profiler og av andre tverrsnitt enn valsede I-profiler. Se [Ikke bygget ennå](topic:not-built-yet).

## Enheter

Lengder følger enheten du velger i verktøylinjen ({{ui:Enheter}}), slik som resten av BimCraft: lastposisjonene du skriver inn og ser ({{ui:Fra}}, {{ui:Til}}, {{ui:Ved}}), punktene for nodelaster og reaksjoner, etasjehøydene i {{ui:Seismisk}}, og nedbøynings- og driftkolonnene (fot og tommer viser disse små lengdene i desimale tommer). Endre enheten når som helst; fanen tegnes på nytt. Krefter står i kN og kN·m, og rapporten (PDF, CSV) og CraftScript-filen står i millimeter med enheten skrevet ut. Tverrsnittsstørrelser, armeringsdiametre og dekkinger i blokken {{ui:Betong}} står i millimeter, som de er navngitt.

## Dimensjoneringskontroller

Blokken {{ui:Dimensjoneringskontroller}} (den samme som DetailCraft sin) tar en {{ui:Prosjekteringsnorm}}, ASCE 7 + AISC 360 eller EN 1990 + EN 1993-1-1, og en {{ui:Stålkvalitet}}. Gi hvert lasttilfelle sin type (egenlast, nyttelast, vind …), og {{ui:Lag kombinasjoner}} skriver normens lastkombinasjoner av tilfellene dine; analysen kjører dem så som alle andre kombinasjoner.

{{ui:Kontroller staver}} kontrollerer deretter hver **valsede stål-I-profil** med DetailCraft sine kontroller (strekk, trykk med knekking, bøyning med sideveis vridningsknekking, skjær, bøyning med aksialkraft, nedbøyning; klausulene står i rapporten), og viser hvor mye av kapasiteten den bruker, farget på modellen. Den er et **hjelpemiddel inntil en ingeniør har gjennomgått den**.

**Hvilke staver som kontrolleres.** En IFC-profil sier ikke om et stål-I-profil er valset eller sveiset, så BimCraft kaller det valset bare når profilnavnet (ellers elementets typenavn) er en størrelse fra AISC W- eller S-tabellene, eller EN 10365-tabellene IPE, HEA eller HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`), **og** høyden, bredden, steget og flensen i filen samsvarer med den størrelsen innenfor 1 %. Alle andre I-profiler (en plategitter, en størrelse under et annet navn, en redigert størrelse) tas som sveiset og kommer tilbake **ikke kontrollert**, det samme gjelder rør, vinkler, U-profiler og andre tverrsnitt, slanke deler og torsjon. Kontroller disse stavene med en ingeniør.

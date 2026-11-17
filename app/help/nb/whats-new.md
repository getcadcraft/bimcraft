---
title: Nytt i 0.9
summary: Veggformer, deling, forskyvning, strekk og lås til rutenett, nivåer under bakken, rutenettmål og Mål på planen, duplisert visning med arbeidsstiler og pennetabeller, Rapporter som, Collada- og Google Earth-eksport, Scan til BIM, vind- og seismisk analyse, tillegg for harpiksprint.
keywords: nytt, 0.9, utgivelsesnotater, veggformer, rektangel, mangekant, bue, velg linjer, spor kontur, forskyvning, sammenkobling, boksstrekk, innrett og lås, del vegg, mellomrom, sett sammen igjen, lås til rutenett, vokse fra, mål fra, legg til et nivå under, kjeller, nivåkommando, rutenettmål, mål på planen, arbeidsstil, dupliser visning, egen kopi, koblet visning, pennetabell, skriv ut som vist, rapporter som, skriv inn en målestokk, importer svg, plasser i plan, plasser i modell, collada, dae, kmz, google earth, scan til bim, vindlast, seismisk, endelige elementer, dokumentpanel, harpiksprint, nytt, hva er nytt, utgivelsesnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, evakuering, personer, køer, akustikk, etterklangstid, impulsrespons, flom, vind, jordskjelv, fare, livssyklus, levetid, ids, merker, tabeller, flytt, innrett, fordel, bilde, bakgrunn, skanning til vegger, område fra civilcraft, paneltegninger, rammeverk, sol, pv, del, vrf, vifteenhet, rørdimensjonering, kabelbro, belysning, betong, seismisk, sammenlign skanning, epsg, projeksjon, dokumenter, mal, karbon, kostnad, energyplus, renderingsmotor, åpne i, usd, glb, unreal, angre, add-ons, pcf, symboler, anlegg, spor, penner, bånd, prosjektleser, layout
from: 5624fe88
---

Dette er det som endret seg i BimCraft 0.9, sammenlignet med 0.8.1. De to store temaene er et ekte veggverktøy og visninger som oppfører seg slik folk fra de store BIM-programmene forventer. Rundt dem kommer Collada-eksport, assistenter som kan plassere elektriske enheter, Scan til BIM, og vind-, seismisk og endelige elementer-arbeid i fanen {{ui:Analyse}}.

## Nytt

### Vegger

- **Tegn hele former.** I {{ui:Tegn}} åpner du {{ui:Former}} (eller velger en form i Form-listen på veggraden) for et rektangel, et rotert rektangel, en mangekant med 3 til 64 sider, en bue etter sentrum, en tangentbue, vegger på valgte linjer, eller vegger rundt et lukket område du klikker inni. Et rektangel er fire vegger med fire sammenkoblede hjørner og ett angretrinn. Se [Veggformer, deling, forskyvning, strekk og lås](topic:wall-tools).
- **Still inn før du tegner, endre etterpå.** Veggraden har {{ui:Forskyvning}} og {{ui:Sammenkobling}} (fjern haken for å tegne frittstående vegger). Etterpå bruker du {{ui:Forskyvning}}, {{ui:Boksstrekk}} og {{ui:Innrett og lås}} på tegnede vegger. En flyttet eller strukket vegg beholder sine dører, vinduer og mål. Hver oppskrift er ett angretrinn.
- **Del vegger.** {{ui:Del}}, {{ui:Mellomrom}}, {{ui:Frie ender}}, {{ui:Slett segment}} og {{ui:Sett sammen igjen}} kutter en vegg ved et klikk, eller der en annen vegg krysser den. Et kutt gjennom en dør avvises. Se [Veggformer, deling, forskyvning, strekk og lås](topic:wall-tools).
- **Lås vegger til rutenettlinjer.** Velg en vegg langs en rutenettlinje, og kryss av {{ui:Lås til rutenett}} i {{ui:Egenskaper}}. Med rutenettverktøyet på, skriv inn en avstand i {{ui:Flytt med}} for en valgt linje, og de låste veggene følger i ett angretrinn.
- **Form én vegg.** I {{ui:Egenskaper}} for én vegg kan du feste toppen eller underkanten til et tak, et gulv eller et himling, redigere dens fasadekontur, len den, eller kutte en veggåpning uten dør eller vindu. Se [Form på en vegg](topic:wall-shape).
- **Lengde sier hvilken ende som holder.** {{ui:Vokse fra}} angir om start, slutt eller midten forblir der når du endrer lengden.
- **Lengde og planmål stemmer.** {{ui:Mål fra}} (senterlinje, innvendig flate eller utvendig flate) styrer både lengdefeltet og veggmålene på planen. Den starter på senterlinjen, så veggmålene på planen leser nå senterlinjen der de før leste utvendig flate. Endre den i veggraden, i {{ui:Egenskaper}} eller i {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Vegger}}.

### Nivåer, rutenett og måling

- **Legg til et nivå under.** {{ui:Legg til et nivå under}} i {{ui:Nivåer}}-panelet legger til et nivå under det laveste, like høyt som det, på en negativ høyde (Nivå -1, Nivå -2). Ingenting annet flyttes. {{ui:Legg til nivåer…}} godtar nå negative høyder. Å skrive LEVEL, LEVELS, STOREY eller STOREYS på kommandolinjen åpner {{ui:Legg til nivåer…}}, og det finnes en {{ui:Nivåer}}-knapp i menyene og båndfanene. Se [Områder, bygninger og nivåer](topic:site-building-and-levels).
- **Rutenettmål på planen.** Med rutenettverktøyet på, kryss av {{ui:Mål}} for å tegne avstanden mellom nabolinjer og den totale størrelsen utenfor boblene på hvert nivås plan. Se [Dimensjoner et rutenett](topic:grid-dimensions).
- **Mål på planen.** {{ui:Mål}} i {{ui:Tegn}}-gruppen gir en avstand med X- og Y-forskjellene mellom to klikk. Ingenting lagres i modellen. Se [Mål på planen](topic:measure-on-the-plan).
- **Endre flere kolonner samtidig.** Velg kolonner sammen med en vegg, så lister valget hver type med {{ui:Behold bare disse}}. Ett klikk beholder kolonnene og viser feltene de har felles.
- **Én visningsenhet overalt.** Koordinater, målinger, snitt, arkskalaer, rammefanens laster og resultater, og Problemer-teksten følger enheten du velger. Eksporter forblir SI.

### Visninger, ark og utskrift

- **Arbeidsstil.** {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Arbeidsstil}} velger mellom at hver visning har sine egne merknader og pennetabeller, eller at de deler dem. Se [Arbeidsstil, duplisert visning, penner på papir og Rapporter som og maler](topic:working-style).
- **Dupliser en visning.** Planer, takplaner, detaljhenvisninger, fasader og snitt kan dupliseres som {{ui:Egen kopi}} eller {{ui:Koblet}}. {{ui:Gjør til egen kopi}} gjør en koblet en uavhengig. Se [Arbeidsstil, duplisert visning, penner på papir og Rapporter som og maler](topic:working-style).
- **Skriv ut som vist, eller gjennom en pennetabell.** Pennoverstyringer lagres i IFC-filen sammen med visningen, og ark og PDF-er tegner dem slik skjermen gjør. Samme emne dekker pennetabeller.
- **Rapporter som.** {{ui:Rapporter som}} i {{ui:Egenskaper}} skriver en plate tegnet som en vei, en vegg som et panel, eller et tak som en rampe til IFC-filen som klassen du velger, og teller den slik i tabeller, mengder, Finn, Farge etter og Problemer.
- **Rediger i fasader og snitt.** Tegn og flytt vegger, åpninger, nivåer, mål og merknader rett i en fasade eller et snitt, med dine egne arkstørrelser og tegningshoder. Se [Rediger i fasader og snitt](topic:edit-in-elevations).
- **Ark.** Hvert ark kan være liggende eller stående. En boks {{ui:Skriv inn en målestokk}} står ved siden av skalalisten på hver plassert visning (1:64, 2:1, 1/4" = 1'). Du kan dra en plassert tegning, eller flytte den med piltastene. {{ui:Formater…}} › {{ui:Importer SVG…}} gjør din egen arkdesign til et tegningshode med felt som skrives inn per ark.
- **Bibliotekskreditter på et ark.** Et tegningssett med bibliotekselementer får en bibliotekskreditt-tabell du kan plassere på et hvilket som helst ark. Se [Bibliotekskreditter](topic:library-credits).

### Bibliotek: plassering

- **Plassering følger visningen.** I planvisningen viser Biblioteket {{ui:Plasser i plan}}. I 3D viser det {{ui:Plasser i modell}}. I delt visning viser det en delt knapp med {{ui:Plasser i plan}} som hovedhandling. Begge måter skriver det samme IFC-elementet. Du kan også dra et bibliotekskort til planen eller 3D-visningen. Med en penn eller finger trykker du og holder, og drar så. Se [Plasser fra biblioteket](topic:place-from-library).

### Filer og assistenter

- **Collada og Google Earth.** {{ui:Collada}} på verktøylinjen (Fil-menyen i menystilene) skriver en .dae, eller en .kmz plassert der modellen står på kartet. Se [Eksporter modellen som Collada eller for Google Earth](topic:collada).
- **Assistenter kan plassere elektriske enheter.** Din tilkoblede assistent har nye verktøy for å legge til, liste, endre og slette enheter og for å sette lys. Assistenter er av til du slår dem på i {{ui:Innstillinger}}. Se [La en AI-assistent jobbe med modellen din](topic:assistants).
- **Scan til BIM (tillegg).** Av som standard og krever punktskytillegget. Det foreslår etasjer, vegger, dører og vinduer fra en skanning, med det målte avviket for hver. Å godta er ett angretrinn.

### Analyse

- **Vind- og seismiske stedsdata.** I fanen {{ui:Analyse}}: vindlaster etter ASCE 7-10 eller 7-16 for en stiv innelukket bygning, med en kraft på hvert gulv som lastetilfeller, og seismiske stedsdata med et USGS-oppslag og designspekteret.
- **Strukturell oppfølging og endelige elementer.** Betongkontroller etter ACI 318-19, ekvivalente horisontale krefter etter ASCE 7-22, etasjedrift, dekker og vegger som plater, og lastkombinasjoner fra ASCE 7 og EN 1990. Vår egen endelige-elementer-motor gjør skall, tetraedre og modalanalyse. Se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic) og [Rammeanalyse](topic:frame-analysis).

### Andre tillegg og dokumenter

- **Innendørs belysning (tillegg).** Plasserer lysarmaturer og skriver lux som tall inn i hvert nivås plan, med et anslag for blending og en utskrivbar rapport.
- **Dokumentpanel.** {{ui:Fil}} › {{ui:Dokumenter…}} har uttak og innlevering med en låsefil, revisjonsbokstaver, utgivelsestilstander og historikk.
- **Regioner og stål.** Sør-afrikanske pakker for tegninger og byggeforskrifter i reguleringstillegget, og 976 britiske ståldimensjoner i den delte profiltabellen.
- **Gratis harpiksprinttillegg.** Skjærer, støtter og flåte, eksponeringstest, og filformatene GOO, SL1, Chitubox og Anycubic, alle av som standard.

## I alle apper

- Når du holder musepekeren over en knapp eller kontroll, vises et Bootstrap-verktøytips.
- Startrådet på et tomt tegneområde har en lukkeknapp. BimCraft husker at det ble lukket.
- En fanelinje som ikke får plass, ruller nå i stedet for å bli kuttet av.
- Med et dokument åpent leser nettleserfanen «<dokument> - BimCraft | CadCraft».
- I {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layout}} er layoutene en rullgardin med tolinjes valg.
- Språklisten i {{ui:Innstillinger}} har flere språk enn i 0.8. Språk andre enn engelsk er maskinutkast.

## Rettet

- **Flytt fungerer på trapper,** og på ramper, rekkverk, takplan, frittstående enheter, bilder og stier.
- **Å dra en vegg skjever ikke lenger rommet.** Midtgrepet flytter veggen vinkelrett på seg selv, og hjørnene glir langs de sammenkoblede veggene. Hold {{key:Mod}} for den gamle frie flyttingen. {{ui:Rett opp}} gir tilbake 90 grader.
- **En tykkelses- eller typeendring i et sammenkoblet knutepunkt** holder nå hjørnet lukket ved en L, en T, en knute med tre vegger, og ved siden av en buet vegg.
- **Å flytte eller kopiere en gruppe rom** holder sammenkoblede vegger utenfor gruppen sammenkoblet.
- **Redo beholder en veggmåls identitet.**
- **Å velge en vegg med Tegn av** gir ikke lenger en feil i Egenskaper.
- **Render faller tilbake til WebGL** når grafikkortet ikke kan starte, i stedet for å stoppe.
- **EnergyPlus-sjekken kan slås på** igjen.
- **Dokumenter åpnes som en sentrert dialog.** {{key:Esc}}, X-en eller et klikk på den dempede siden lukker den.
- **Knappene {{ui:Plan}}, {{ui:Delt}} og {{ui:3D}} vises** så snart en modell er åpen, ikke bare etter at Tegn har vært slått på én gang.

## Ærlige begrensninger

- Ingenting ble skrevet ut på ekte maskinvare. Støttene for harpiks er nye og ikke bevist.
- Vind-, seismiske, betong- og endelige elementer-resultater er kontrollhjelpemidler for en ingeniør, sjekket mot lukkede formler, ikke mot en ekte bygning.
- Skanning til BIM ble testet på en syntetisk bygning, ikke en ekte skanning, og finner bare rettlinjede rom.
- Collada er ikke åpnet i Blender eller Google Earth her.
- Belysningsanslaget er sjekket mot vår egen stråleføring, ikke mot andre lysprogrammer.
- Sør-afrikanske tall er ikke verifisert.
- Sammenkoblingsstiler for vegger (stumpt, gjæring, rett av) og lagprioritet er ikke bygget; hjørner gjøres med gjæring.
- Språk andre enn engelsk er maskinutkast.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet). Tidligere endringer står i 0.8- og 0.8.1-notatene lenger ned på denne siden.

## Tidligere: 0.8 og 0.8.1

Dette er det som endret seg i BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. BimCraft kan nå svare på spørsmål om en bygning og teste den, med mennesker, lyd, vann, vind og jordskjelv, og tegne den med flere verktøy. 0.8.1 er en feilrettingsutgivelse.

### Nytt

**Test bygningen**

- **Personer i bygningen.** Seksjonen {{ui:Personer i bygningen}} i venstre panel fører en evakuering eller en vanlig dags ankomster gjennom rommene, dørene og trappene dine. Du ser køene der bygningen smalner, den lengste gangen til en utgang fra hvert rom, og hvor lang tid den siste personen bruker. Kryss av {{ui:Stengt}} på en dør for å se hva som endres, og kryss av {{ui:Vis personene i 3D-visningen}} for å se gangerne. Funnene går til Problemer. Det er en grov folkemodell for designbeslutninger, ikke et brannsikkerhetssertifikat. Se [Før personer gjennom bygningen](topic:people-in-the-building).
- **Romakustikk, og hør den.** Seksjonen {{ui:Romakustikk}} gir hvert roms etterklangstid per oktavbånd (Sabine og Eyring) ut fra størrelsen og overflatene du velger. Med et mål du selv setter, sier den hvor mye absorpsjon som ville oppfylle det. {{ui:Spill den i dette rommet}} spiller en stemme, et klapp, plukkede toner eller din egen lydfil gjennom en impulsrespons beregnet for rommet. Absorpsjonstallene er typiske publiserte verdier som du kan erstatte. Se [Romakustikk](topic:room-acoustics).
- **Flom-, vind- og jordskjelvavspilling.** {{ui:Farefremvisning}} spiller vann som stiger gjennom rommene, vindtrykk på hver etasje og et jordskjelv som rister etasjene, på en plan eller en fasade med en tidsskyver. Enkle modeller med deres forutsetninger på panelet. Ikke en normkontroll. Se [Spill av en flom, vind eller et jordskjelv](topic:hazard-playback).
- **Hva som slites ned på femti år.** {{ui:Livssyklusvisning}} lister vinduene, dørene, overflatene og taket med en levetid hver, årene de skiftes, og, når du skriver inn en kostnad per enhet, kostnaden etter år og nåverdien. {{ui:Lagre planen (CSV)}} skriver den ut. Levetidene er planleggingstall. Se [Se hva som slites ned over femti år](topic:life-cycle-view).
- **Betong- og seismiske kontroller.** Blokkene {{ui:Betongelementer}} og {{ui:Seismiske laster}} i fanen {{ui:Analyse}} kontrollerer betongbjelker og -søyler etter ACI 318-19, og lager ekvivalente horisontale krefter etter ASCE 7-22 på stive gulv, med etasjedrift. For en ingeniør å kontrollere. Se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic).

**Kontroller og rapporter**

- **Kontroller mot en IDS.** Last inn `.ids`-filen en kunde ga deg, og se hvert element som ikke oppfyller den, i Problemer, før du leverer IFC-filen. Åpne {{ui:Kontroller mot en IDS}} under {{ui:Modellkontroller}}. Se [Kontroller en modell mot en kundes IDS](topic:check-against-ids).
- **Merker og tabeller.** Definer dine egne merker, sett dem på mange elementer samtidig, og lag tabeller hvis kolonner, filtre og grupper leser dem. Merkene lagres i IFC-filen. Se [Merker og tabeller](topic:tags-and-schedules).
- **Dokumenter fra modellen.** {{ui:Dokumenter fra modellen}} fyller en spesifikasjonsmal fra den åpne IFC-filen og lagrer den som PDF, Word-dokument eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).
- **Sammenlign en skanning med modellen.** Med en punktsky åpen, bedømmer {{ui:Sammenlign}} hvert element som bygget, delvis bygget, manglende eller ikke nådd, og viser prosentandelen bygget. Se [Sammenlign en skanning med modellen](topic:compare-scan-with-model).
- **Karbon og kostnad.** Karbonpanelet summerer innbygd karbon fra en faktortabell du kan redigere, og kostnadspanelet fordeler priser over 4D-tidsplanen. Faktorene som følger med BimCraft er generiske og merket ukontrollert. Se [Innbygd karbon og kostnad](topic:embodied-carbon-and-5d-cost).
- **Hvilken som helst kartprojeksjon.** {{ui:Mål}} › {{ui:Koordinatsystem…}} tar et EPSG-nummer, en UTM-sone, et navn eller din egen projeksjonsdefinisjon. Se [Georeferer med hvilken som helst projeksjon](topic:georeference-any-projection).

**Tegn og rediger**

- **Flytt, juster og fordel.** Under {{ui:Bygg}}; {{key:Shift+M}} starter Flytt (vanlig {{key:M}} er fortsatt Mål). Flytt kopierer mens du går med {{key:C}}, hvert steg er ett angretrinn, og den reiser i en Live TeamWork-økt. Se [Flytt, kopier, juster og fordel](topic:move-align-distribute).
- **Bilder under planen.** {{ui:Bygg}} › {{ui:Bilde}} plasserer en PNG, JPEG eller WebP under et nivås plan eller på et vertikalt plan. Sett målestokken med to punkter, og flytt, roter, toner og lås det. Et område kopiert i MarkupCraft limes inn i sin arks målestokk. Se [Legg et bilde under planen](topic:pictures-as-backgrounds).
- **Vegger fra en skanning.** Med en skanning åpen kommer vegger, dører og rom som forslag du beholder eller forkaster ett for ett, i ett angretrinn. Bare vegger i to vinkelrette retninger finnes. Se [Gjør en skanning til vegger](topic:scan-to-walls).
- **Spor, penner og skissetrapp.** {{ui:Spor}} viser et annet nivå stiplet under planen, {{ui:Penner}} gir vegger, dører og vinduer sin egen linjetykkelse i én visning, og {{ui:Skissetrapp}} gjør en gangelinje til en trapp. En Wavefront OBJ-maske åpnes. Se [Spor et nivå, penner og en trapp fra en skisse](topic:trace-pens-stairs-obj).
- **Bygninger rundt en adresse.** Bygningene og tomten CivilCrafts Adresse til område fant, kommer som forslag; du kryss av for dem du vil legge til. Se [Start fra CivilCrafts område](topic:site-from-civilcraft).
- **Paneltegninger.** {{ui:Bygg}} › {{ui:Paneltegninger}} rammer inn vegger, gulv og tak i tre eller lettbetong av stål, og lagrer en kutteliste som CSV og verkstedtegninger som PDF. Startverdier, ikke en konstruksjonsdesign. Se [Paneltegninger](topic:panel-drawings).
- **Symbolpalett og anlegg.** {{ui:Bygg}} › {{ui:Symbolpalett}} finner elektriske og rørleggersymboler etter navn. Kilden {{ui:Anlegg}} i {{ui:Bibliotek}} lister omtrent 400 anlegg med plansymboler. Se [Symbolpalett](topic:symbol-palette) og [Plasser et anlegg](topic:plant-list).

**Rør, kanaler og energi**

- **Splitt, VRF og vifteenheter.** Innendørs- og utendørsenheter med sine tilkoblinger, og væskeledninger dimensjonert fra en tabell med typiske eksempelverdier som du kan endre. Se [Splitt, VRF og vifteenheter](topic:split-vrf-fan-coils).
- **Beregninger.** Beregningspanelet sjekker tilførselsrør- og kanalstørrelser med trykkfall, legger kabler gjennom kabelbroer og rør og viser deres fylling, og regner ut belysningsstyrke fra IES- eller EULUMDAT-filer. Standardverdier er merket; skriv inn verdiene i din norm. Se [Rør-, kanal-, kabel- og lysberegninger](topic:mep-calculations).
- **PCF-filer.** Rørverktøyets **Eksporter PCF** skriver løpene for rørspenningsprogrammer og isometriske programmer, og en PCF-fil som leses inn, tegner sitt rør. Se [Rørkomponentfiler](topic:piping-pcf).
- **Solcelle-PV.** Monter rekker på tak eller bakken, skyg dem fra modellen, anslå årsenergi, sjekk strenger og lag data for enlinjediagram. Startmodulen og tapene er generiske. Se [Solcelle-PV](topic:solar-pv).
- **EnergyPlus-fil.** Panelet Sjekk med EnergyPlus skriver modellen som en IDF som du kan kjøre i din egen EnergyPlus. Å kjøre den i nettleseren krever et bygg du selv hoster og skriver adressen til. BimCraft inneholder den ikke. Se [Sjekk varme og kjøling med EnergyPlus](topic:check-with-energyplus).

**Bilder og filer**

- **Velg renderingsmotor.** {{ui:Render}} har et {{ui:Motor}}-valg. Våre to innebygde motorer (Rask og Strålefører) forblir standard. **Åpne i** lagrer scenen som en USD- eller glTF-fil, og en Unreal-prosjektmappe som en .zip. I CadCraft Studio kan et tillegg legge til en motor. Unreal-programtillegget som åpner prosjektet, er ikke utgitt. Se [Velg hvilket program som tegner bildet](topic:render-engines).
- **Studio-angre.** Inne i CadCraft Studio forteller BimCraft Studio hvert ferdig steg, slik at Studio kan angre ditt siste steg i det vinduet du brukte sist. Se [Angre på tvers av apper](topic:undo-across-apps).
- **Tillegg i filen din.** En IFC registrerer hvilke tillegg som skrev inn i den, og tilbyr dem du mangler når du åpner den. Se [Tillegg i filen din](topic:add-ons-in-your-file).

**I alle apper**

- **Koble til din AI.** Din egen assistent kan styre BimCraft gjennom Studios tilkobling, og svare på spørsmål om modellen, for eksempel hvilke rom som ligger under et gitt område. Studio har ingen AI selv. Se [La en AI-assistent jobbe med modellen din](topic:assistants).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr Bryt, 2 rader eller 1 rad. Bryt er fortsatt standard.
- **Inndataenheter.** Innstillinger for styreflate, penn, 3D-mus, kontroller og MIDI deles av alle apper.
- **Problemer og Live.** Advarselspanelet og Live-økter fungerer som før, med de nye kontrollene over som mater Problemer.
- **Språk.** 54 språk, ti av dem nye. De som er andre enn engelsk, er maskinutkast som ikke er lest av en morsmålstaler. Hjelpeemner er for det meste på engelsk.

### Rettet i 0.8.1

- **Bånd + layout for prosjektleseren.** Sett inn › Importer CAD, Sett inn › Bilde og Administrer › Prosjektenheter sa «Ikke bygget i BimCraft ennå». Bilde åpner nå bildeverktøyet, Importer CAD åpner {{ui:Bygg}} › {{ui:Fra en tegning…}} (DWG, DXF, PDF eller en skanning), og Prosjektenheter åpner {{ui:Innstillinger}} › {{ui:Global}} › {{ui:Enheter}}. Flytt og Juster kjører flytte- og justeringsverktøyene, Nivå åpner {{ui:Legg til nivåer…}}, Faser åpner seksjonen for renoveringsfaser, og Materialer åpner materialbiblioteket.
- **DWG-klassesektion.** Den ble lest som feil type. Rettet i BimCraft og de andre appene som leser DWG.
- **Språk under kjøring.** Studio og de pakkede utgavene kan nå bytte språk uten omstart. Dette er ikke testet på alle plattformer ennå. Si fra hvis språket ikke endres.
- **Arkivskript for Archicad.** `archicad_bundle.py`, en egen nedlasting, finner nå Archicads sti, overvåker mappen i opptil 20 sekunder og prøver på nytt ved siden av pakken.

### Ikke i denne versjonen ennå

- **Sikkerhets- og designhjelpemidler.** Personer i bygningen har ingen reisegrense fra en byggeforskrift (du skriver inn grensen) og er ikke kontrollert for hånd på en ekte plan. Akustikk-, livssyklus- og farefigurene er planleggingsverdier, ikke en normkontroll.
- **Klimafremtider og EnergyPlus.** Ingen innebygde klimafremtider: du kan laste en scenariofil for flomkjøringen. EnergyPlus-kjøringen i nettleseren er ikke med i denne utgivelsen.
- **Båndoppsett.** Materialmengder står som «Ikke bygget», fordi BimCraft ikke har en materialmengdeliste, og 54 andre nedtonede båndverktøy har ingen BimCraft-verktøy bak seg ennå.
- **Signering og plattformer.** Windows-installasjonsprogrammer og macOS .dmg er usignerte, så SmartScreen viser {{ui:Mer info}}, og deretter {{ui:Kjør likevel}}. macOS krever høyreklikk og deretter {{ui:Åpne}}. iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- **Tester på ekte sider.** Noen eldre nettleser-tester for BimCraft feiler på vår testside, slik de gjorde før 0.8.1.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet). Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).

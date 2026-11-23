---
title: Nytt i 0.9 (tidligere)
summary: Vegg­former, del, forskyvning, strekk og lås til rutenett, nivåer under bakken, mål for rutenett og Mål på planen, dupliserte visninger med arbeidsstiler og pennetabeller, Rapporter som, Collada- og Google Earth-eksport, Scan til BIM, vind- og seismisk analyse, tillegg for harpiksprinting.
keywords: nytt i 0.9, tidligere utgivelse, nytt i, 0.9, utgivelsesnotater, veggformer, rektangel, mangekant, bue, velg linjer, sporing av omriss, forskyvning, sammenkobling, boksstrekk, innrett og lås, del vegg, mellomrom, sett sammen igjen, lås til rutenett, vokse fra, mål fra, legg til et nivå under, kjeller, nivåkommando, mål for rutenett, mål på planen, arbeidsstil, dupliser visning, egen kopi, koblet visning, pennetabell, skriv ut som vist, rapporter som, skriv inn en målestokk, importer svg, plasser i plan, plasser i modell, collada, dae, kmz, google earth, scan til bim, vindlast, seismisk, endelige elementer, dokumentpanel, harpiksprinting, nytt i, utgivelsesnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, evakuering, personer, køer, akustikk, etterklangstid, impulsrespons, flom, vind, jordskjelv, fare, livssyklus, levetid, ids, merkelapper, tabeller, flytt, innrett, fordel, bilde, bakgrunn, scan til vegger, tomt fra civilcraft, paneltegninger, bindingsverk, sol, pv, del, vrf, takvifte, rørdimensjonering, kabelbrett, belysningsstyrke, betong, seismisk, sammenlign skanning, epsg, projeksjon, dokumenter, mal, karbon, kostnad, energyplus, render-motor, åpne i, usd, glb, unreal, angre, tillegg, pcf, symboler, planter, spor, penner, bånd, prosjektnettleser, layout
from: 816df7f8
---

Dette er hva som endret seg i BimCraft 0.9, sammenlignet med 0.8.1. De to store temaene er et ekte veggverktøy og visninger som oppfører seg slik folk som kommer fra de store BIM-programmene forventer. Rundt dem kommer Collada-eksport, assistenter som kan plassere elektriske enheter, Scan til BIM, og vind-, seismisk og endelige elementer-arbeid i fanen {{ui:Analyse}}.

## Nytt

### Vegger

- **Tegn hele former.** I {{ui:Tegn}} åpner du {{ui:Former}} (eller velger en form i Form-listen i Vegg-raden) for et rektangel, et rotert rektangel, en mangekant med 3 til 64 sider, en bue etter sentrum, en tangentbue, vegger på valgte linjer, eller vegger rundt et lukket område du klikker inni. Et rektangel er fire vegger med fire sammenkoblede hjørner og ett angretrinn. Se [Veggformer, del, forskyvning, strekk og lås](topic:wall-tools).
- **Sett før du tegner, endre etterpå.** Vegg-raden har {{ui:Forskyvning}} og {{ui:Sammenkobling}} (fjern avkryssingen for å tegne frittstående vegger). Etterpå bruker du {{ui:Forskyvning}}, {{ui:Boksstrekk}} og {{ui:Innrett og lås}} på tegnede vegger. En flyttet eller strukket vegg beholder sine dører, vinduer og mål. Hver oppskrift er ett angretrinn.
- **Del vegger.** {{ui:Del}}, {{ui:Mellomrom}}, {{ui:Frie ender}}, {{ui:Slett segment}} og {{ui:Sett sammen igjen}} deler en vegg med et klikk eller der en annen vegg krysser den. Et snitt gjennom en dør avvises. Se [Veggformer, del, forskyvning, strekk og lås](topic:wall-tools).
- **Lås vegger til rutenettlinjer.** Velg en vegg langs en rutenettlinje og kryss av for {{ui:Lås til rutenett}} i {{ui:Egenskaper}}. Med Rutenett-verktøyet på skriver du en avstand i {{ui:Flytt med}} for en valgt linje, og de låste veggene følger med i ett angretrinn.
- **Form én vegg.** I {{ui:Egenskaper}} for én vegg kan du feste toppen eller sokkelen til et tak, et dekke eller en himling, redigere høydeomrisset, skråstille den, eller kutte en veggåpning uten dør eller vindu. Se [Veggform](topic:wall-shape).
- **Lengden viser hvilken ende som står fast.** {{ui:Vokse fra}} angir om starten, enden eller midten står stille når du endrer lengden.
- **Lengde og plan-mål stemmer.** {{ui:Mål fra}} (senterlinje, innside eller utside) styrer både lengdefeltet og veggmålene på planen. Den starter på senterlinjen, så veggmålene på planen leser nå senterlinjen der de før leste utsiden. Endre den i Vegg-raden, i {{ui:Egenskaper}} eller i {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Vegger}}.

### Nivåer, rutenett og måling

- **Legg til et nivå under.** {{ui:Legg til et nivå under}} i panelet {{ui:Nivåer}} legger til et nivå under det laveste, like høyt som det, på negativ høyde (Nivå -1, Nivå -2). Ingenting annet flyttes. {{ui:Legg til nivåer…}} godtar nå negative høyder. Hvis du skriver LEVEL, LEVELS, STOREY eller STOREYS på kommandolinjen, åpnes {{ui:Legg til nivåer…}}, og det finnes en knapp {{ui:Nivåer}} i menyene og båndfanene. Se [Områder, bygninger og nivåer](topic:site-building-and-levels).
- **Mål for rutenett på planen.** Med {{ui:Rutenett}}-verktøyet på kryss av for {{ui:Mål}} for å tegne avstanden mellom nabolinjer og den samlede størrelsen forbi boblene på hvert nivås plan. Se [Mål for et rutenett](topic:grid-dimensions).
- **Måling på planen.** {{ui:Mål}} i {{ui:Tegn}}-gruppen gir en avstand med X- og Y-forskjellene mellom to klikk. Ingenting lagres i modellen. Se [Mål på planen](topic:measure-on-the-plan).
- **Endre flere søyler samtidig.** Velg søyler sammen med en vegg, så lister valget hver type med {{ui:Behold bare disse}}. Ett klikk beholder søylene og viser feltene de har felles.
- **Én visningsenhet overalt.** Koordinater, mål, snitt, arkmålestokker, rammefanens laster og resultater og teksten i Problemer følger enheten du velger. Eksporter forblir SI.

### Visninger, ark og utskrift

- **Arbeidsstil.** {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Arbeidsstil}} velger mellom at hver visning har sine egne merknader og pennetabeller, eller deler dem. Se [Arbeidsstil, dupliserte visninger, penner på papir, Rapporter som og maler](topic:working-style).
- **Dupliser en visning.** Planer, takplaner, henvisninger, fasader og snitt kan dupliseres som {{ui:Egen kopi}} eller {{ui:Koblet}}; {{ui:Gjør til egen kopi}} gjør en koblet en uavhengig. Se [Arbeidsstil, dupliserte visninger, penner på papir, Rapporter som og maler](topic:working-style).
- **Skriv ut som vist, eller gjennom en pennetabell.** Pennoverstyringer lagres i IFC-filen sammen med visningen, og ark og PDF-er tegner dem slik skjermen gjør. Samme emne dekker pennetabeller.
- **Rapporter som.** {{ui:Rapporter som}} i {{ui:Egenskaper}} skriver en plate tegnet som en vei, en vegg som et panel eller et tak som en rampe til IFC-filen som klassen du velger, og teller den slik i tabeller, mengder, Finn, Farge etter og Problemer.
- **Rediger i fasader og snitt.** Tegn og flytt vegger, åpninger, nivåer, mål og merknader rett i en fasade eller et snitt, med dine egne arkstørrelser og tegningshoder. Se [Rediger i fasader og snitt](topic:edit-in-elevations).
- **Ark.** Hvert ark kan være liggende eller stående. En boks {{ui:Skriv inn en målestokk}} står ved siden av målestokklisten på hver plassert visning (1:64, 2:1, 1/4" = 1'). Du kan dra en plassert tegning eller flytte den med piltastene, og {{ui:Formater…}} › {{ui:Importer SVG…}} gjør din egen arkdesign til et tegningshode med felt som skrives inn per ark.
- **Bibliotekkreditering på et ark.** Et tegningssett med bibliotekselementer får en tabell over bibliotekkrediteringer som du kan plassere på et hvilket som helst ark. Se [Bibliotekkreditering](topic:library-credits).

### Bibliotek: plassering

- **Plassering følger visningen.** I planvisningen viser Bibliotek {{ui:Plasser i plan}}; i 3D viser det {{ui:Plasser i modell}}; i Delt viser det en delt knapp med {{ui:Plasser i plan}} som hovedhandling. Begge måter skriver samme IFC-element. Du kan også dra et bibliotekkort til planen eller 3D-visningen; med penn eller finger trykker og holder du, og drar deretter. Se [Plasser fra biblioteket](topic:place-from-library).

### Filer og assistenter

- **Collada og Google Earth.** {{ui:Collada}} på verktøylinjen (Fil-menyen i menystilene) skriver en .dae, eller en .kmz plassert der modellen er på kartet. Se [Eksporter modellen som Collada eller for Google Earth](topic:collada).
- **Assistenter kan plassere elektriske enheter.** Assistenten din som er tilkoblet, har nye verktøy for å legge til, liste, endre og slette enheter og for å sette lys. Assistenter er av til du slår dem på i {{ui:Innstillinger}}. Se [La en AI-assistent jobbe med modellen din](topic:assistants).
- **Scan til BIM (tillegg).** Av som standard og krever tillegget Punktskyer. Det foreslår etasjer, vegger, dører og vinduer fra en skanning med det målte avviket for hver; å godta er ett angretrinn.

### Analyse

- **Vind- og seismiske områdedata.** I fanen {{ui:Analyse}}: vindlaster etter ASCE 7-10 eller 7-16 for en stiv, lukket bygning, med en kraft på hver etasje som lastetilfeller, og seismiske områdedata med et USGS-oppslag og dimensjoneringsspekteret.
- **Konstruksjonsoppfølging og endelige elementer.** Betongkontroller etter ACI 318-19, ekvivalente horisontale krefter etter ASCE 7-22, etasjeforskyvning, dekker og vegger som plater, og lastkombinasjoner fra ASCE 7 og EN 1990. Vår egen beregningsmotor for endelige elementer håndterer skall, tetraedre og modalanalyse. Se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic) og [Rammeanalyse](topic:frame-analysis).

### Andre tillegg og dokumenter

- **Innendørs belysning (tillegg).** Plasserer lysarmaturer og skriver lux som tall inn i hvert nivås plan, med et anslag for blending og en utskrivbar rapport.
- **Dokumentpanelet.** {{ui:Fil}} › {{ui:Dokumenter…}} har sjekk ut og inn med en låsefil, revisjonsbokstaver, utgivelsestilstander og historikk.
- **Regioner og stål.** Sørafrikanske tegnings- og byggeforskriftspakker i tillegget Forskrifter, og 976 britiske stålprofiler i den delte profiltabellen.
- **Gratis tillegg for harpiksprinting.** Skiver, støtter og sokkel, eksponeringstest, og filformatene GOO, SL1, Chitubox og Anycubic, alle av som standard.

## I alle programmer

- Når du holder musepekeren over en knapp eller kontroll, vises en Bootstrap-verktøytips.
- Startteksten i et tomt tegneområde har en lukkeknapp; BimCraft husker at den ble lukket.
- Fanerekken i et panel som ikke får plass, ruller nå i stedet for å bli kuttet av.
- Når et dokument er åpent, leser nettleserfanen «<dokument> - BimCraft | CadCraft».
- I {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layout}} er oppsettene en rullegardin med tolinjevalg.
- Språklisten i {{ui:Innstillinger}} har flere språk enn i 0.8; språk andre enn engelsk er maskinutkast.

## Rettet

- **Flytt fungerer på trapper,** og på ramper, rekkverk, takplan, frittstående enheter, bilder og stier.
- **Å dra en vegg skjever ikke lenger rommet.** Midtgrepet flytter veggen vinkelrett på seg selv, og hjørnene glir langs de sammenkoblede veggene. Hold {{key:Mod}} for den gamle frie flyttingen; {{ui:Rett opp}} gir tilbake 90 grader.
- **En endring av tykkelse eller type i en sammenkoblet knute** holder nå hjørnet lukket ved en L, en T, en knute med tre vegger og ved siden av en buet vegg.
- **Flytting eller kopiering av en gruppe rom** beholder sammenkoblede vegger utenfor gruppen sammenkoblet.
- **Redo beholder identiteten til et veggmål.**
- **Å velge en vegg med Tegn av** gir ikke lenger en feil i Egenskaper.
- **Render går over til WebGL** når GPU-en ikke kan starte, i stedet for å stoppe.
- **EnergyPlus-kontrollen kan slås på** igjen.
- **Dokumenter åpnes som en sentrert dialog.** {{key:Esc}}, X-en eller et klikk på den dimmede siden lukker den.
- **Knappene {{ui:Plan}}, {{ui:Delt}} og {{ui:3D}} vises** så snart en modell er åpen, ikke bare etter at Tegn har vært slått på én gang.

## Ærlige begrensninger

- Ingenting ble skrevet ut på ekte maskinvare. Støttene for harpiks er nye og ikke prøvd.
- Resultater for vind, seismikk, betong og endelige elementer er kontrollhjelpemidler for en ingeniør, sjekket mot lukkede formler, ikke mot en ekte bygning.
- Scan til BIM ble testet på en syntetisk bygning, ikke en ekte skanning, og finner bare rektangulære rom.
- Collada er ikke åpnet i Blender eller Google Earth her.
- Belysningsanslaget er sjekket mot vår egen sporing, ikke mot andre belysningsprogrammer.
- De sørafrikanske tallene er ikke verifisert.
- Sammenføyningsstiler for vegger (stumpt, gjæring, kvadratisk) og lagprioritet er ikke bygget; hjørner gjæres.
- Språk andre enn engelsk er maskinutkast.

Alt annet står i [Det som ikke er bygget ennå](topic:not-built-yet). Tidligere endringer står i notatene for 0.8 og 0.8.1 lenger ned på denne siden.

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. BimCraft kan nå svare på spørsmål om en bygning og teste den, med personer, lyd, vann, vind og jordskjelv, og tegne den med flere verktøy; 0.8.1 er en feilrettingsutgave.

### Nytt

**Test bygningen**

- **Personer i bygningen.** Seksjonen {{ui:Personer i bygningen}} i venstre panel fører en evakuering eller en vanlig dags ankomster gjennom rommene, dørene og trappene dine. Du ser køene der bygningen smalner, den lengste gangavstanden til en utgang fra hvert rom og hvor lang tid den siste personen bruker. Kryss av for {{ui:Stengt}} på en dør for å se hva som endres, og kryss av for {{ui:Vis personene i 3D-visningen}} for å se gjengerne. Funnene går til Problemer. En grov folkemodell for prosjekteringsbeslutninger, ikke et brannsikkerhetssertifikat. Se [Før personer gjennom bygningen](topic:people-in-the-building).
- **Romakustikk, og hør det.** Seksjonen {{ui:Romakustikk}} gir hvert rom sin etterklangstid per oktavbånd (Sabine og Eyring) ut fra størrelsen og overflatene du velger, og med et mål eget for deg sier den hvor mye absorpsjon som skal til for å nå det. {{ui:Spill den i dette rommet}} spiller en stemme, et klapp, plukkede toner eller din egen lydfil gjennom en impulsrespons beregnet for rommet. Absorpsjonstallene er vanlige publiserte verdier som du kan erstatte. Se [Romakustikk](topic:room-acoustics).
- **Flom-, vind- og jordskjelvavspilling.** {{ui:Farefremvisning}} spiller av vann som stiger gjennom rommene, vindtrykk på hver etasje og et jordskjelv som rister etasjene, på en plan eller fasade med en tidsskyver. Enkle modeller med sine forutsetninger på panelet; ingen forskriftskontroll. Se [Spill av en flom, vind eller et jordskjelv](topic:hazard-playback).
- **Hva som slites ut på femti år.** {{ui:Livssyklusvisning}} lister vinduene, dørene, overflatene og taket med en levetid hver, årene de skiftes, og når du skriver inn en kostnad per enhet, kostnaden per år og nåverdien. {{ui:Lagre planen (CSV)}} skriver den ut. Levetidene er planleggingstall. Se [Se hva som slites ut over femti år](topic:life-cycle-view).
- **Betong- og seismiske kontroller.** Blokkene {{ui:Betongelementer}} og {{ui:Seismiske laster}} i fanen {{ui:Analyse}} kontrollerer betongbjelker og -søyler etter ACI 318-19 og lager ekvivalente horisontale krefter etter ASCE 7-22 på stive dekker, med etasjeforskyvning. For en ingeniør å kontrollere. Se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic).

**Kontroller og rapporter**

- **Kontroller mot en IDS.** Last inn `.ids`-filen en kunde ga deg, og se hvert element som ikke oppfyller den i Problemer, før du leverer IFC-filen. Åpne {{ui:Kontroller mot en IDS}} under {{ui:Modellkontroller}}. Se [Kontroller en modell mot en kundes IDS](topic:check-against-ids).
- **Merkelapper og tabeller.** Definer egne merkelapper, sett dem på mange elementer samtidig, og lag tabeller hvis kolonner, filtre og grupper leser dem; merkelappene lagres i IFC-filen. Se [Merkelapper og tabeller](topic:tags-and-schedules).
- **Dokumenter fra modellen.** {{ui:Dokumenter fra modellen}} fyller en spesifikasjonsmal fra den åpne IFC-filen og lagrer den som PDF, Word-dokument eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).
- **Sammenlign en skanning med modellen.** Med en punktsky åpen dømmer {{ui:Sammenlign}} hvert element som bygget, delvis bygget, manglende eller ikke nådd, og viser prosentandelen bygget. Se [Sammenlign en skanning med modellen](topic:compare-scan-with-model).
- **Karbon og kostnad.** Karbonpanelet legger sammen innebygd karbon fra en faktortabell du kan redigere, og kostnadspanelet fordeler priser over 4D-tidsplanen. Faktorene som følger med BimCraft er generiske og merket som ikke kontrollert. Se [Innebygd karbon og kostnad](topic:embodied-carbon-and-5d-cost).
- **Enhver kartprojeksjon.** {{ui:Mål}} › {{ui:Koordinatsystem…}} tar et EPSG-nummer, en UTM-sone, et navn eller din egen projeksjonsdefinisjon. Se [Georeferer med en hvilken som helst projeksjon](topic:georeference-any-projection).

**Tegn og rediger**

- **Flytt, Innrett og Fordel.** Under {{ui:Bygg}}; {{key:Shift+M}} starter Flytt (vanlig {{key:M}} er fortsatt Mål). Flytt kopierer etter hvert som du går med {{key:C}}, hvert steg er ett angretrinn, og den går med i en Live TeamWork-økt. Se [Flytt, kopier, innrett og fordel](topic:move-align-distribute).
- **Bilder under planen.** {{ui:Bygg}} › {{ui:Bilde}} plasserer en PNG, JPEG eller WebP under et nivås plan eller på et vertikalt plan. Sett målestokken med to punkter, og flytt, roter, fade og lås det. Et område kopiert i MarkupCraft limes inn i sin arkmålestokk. Se [Legg et bilde under planen](topic:pictures-as-backgrounds).
- **Vegger fra en skanning.** Med en skanning åpen kommer vegger, dører og rom som forslag du beholder eller forkaster ett for ett, i ett angretrinn. Bare vegger i to vinkelrette retninger finnes. Se [Gjør en skanning til vegger](topic:scan-to-walls).
- **Spor, penner og skissetrapp.** {{ui:Spor}} viser et annet nivå stiplet under planen, {{ui:Penner}} gir vegger, dører og vinduer sin egen linjevekt i én visning, og {{ui:Skisser trapp}} gjør en gangsti til en trapp. En Wavefront OBJ-nett åpnes. Se [Spor et nivå, penner og en trapp fra en skisse](topic:trace-pens-stairs-obj).
- **Bygninger rundt en adresse.** Bygningene og eiendommen som CivilCraft sin Adresse til tomt fant, kommer som forslag; du krysser av for dem du vil legge til. Se [Start fra CivilCrafts tomt](topic:site-from-civilcraft).
- **Paneltegninger.** {{ui:Bygg}} › {{ui:Paneltegninger}} rammer inn vegger, dekker og tak i tre eller lett stålprofil og lagrer en kappeliste som CSV og verkstedtegninger som PDF. Startverdier, ikke en konstruksjonsprosjektering. Se [Paneltegninger](topic:panel-drawings).
- **Symbolpalett og planter.** {{ui:Bygg}} › {{ui:Symbolpalett}} finner elektriske og sanitære symboler etter navn; kilden {{ui:Planter}} i {{ui:Bibliotek}} lister omtrent 400 planter med plansymboler. Se [Symbolpalett](topic:symbol-palette) og [Plasser en plante](topic:plant-list).

**Rør, kanaler og energi**

- **Split, VRF og takvifter.** Innendørs- og utendørsenheter med sine tilkoblinger, og væskeledninger dimensjonert fra en tabell med typiske eksempelverdier som du kan endre. Se [Split, VRF og takvifter](topic:split-vrf-fan-coils).
- **Beregninger.** Beregningspanelet kontrollerer dimensjonene på forsyningsrør og kanaler med trykkfall, fører kabler gjennom kabelbrett og rør og viser deres fylling, og beregner belysningsstyrke fra IES- eller EULUMDAT-filer. Standardverdier er merket; skriv inn verdiene i dine forskrifter. Se [Beregninger for rør, kanaler, kabler og lys](topic:mep-calculations).
- **PCF-filer.** Rørverktøyets **Eksporter PCF** skriver løpene for rørspennings- og isometriprogrammer, og en PCF-fil som leses inn tegner sitt rør. Se [Filer for rørkomponenter](topic:piping-pcf).
- **Solcelle-PV.** Monter rekker på tak eller bakken, skygg dem fra modellen, anslå årlig energi, kontroller strenger og lag data for enlinjeskjema. Startmodulen og tapene er generiske. Se [Solcelle-PV](topic:solar-pv).
- **EnergyPlus-fil.** Panelet Kontroller med EnergyPlus skriver modellen som en IDF som kjøres i din egen EnergyPlus. Kjøring i nettleseren krever et bygg du selv er vert for og skriver adressen til; BimCraft leverer det ikke. Se [Kontroller oppvarming og kjøling med EnergyPlus](topic:check-with-energyplus).

**Bilder og filer**

- **Velg render-motor.** {{ui:Render}} har et valg {{ui:Motor}}. Våre to innebygde motorer (Rask og Stisporing) forblir standard. **Åpne i** lagrer scenen som en USD- eller glTF-fil, og en Unreal-prosjektmappe som en .zip; i CadCraft Studio kan et tillegg legge til en motor. Unreal-tillegget som åpner prosjektet er ikke utgitt. Se [Velg hvilket program som tegner bildet](topic:render-engines).
- **Angre i Studio.** Inne i CadCraft Studio forteller BimCraft Studio hvert ferdige steg, slik at Studio kan angre det siste steget ditt i det vinduet du brukte sist. Se [Angre på tvers av programmer](topic:undo-across-apps).
- **Tillegg i filen din.** En IFC-fil registrerer hvilke tillegg som skrev til den, og tilbyr de du mangler når du åpner den. Se [Tillegg i filen din](topic:add-ons-in-your-file).

**I alle programmer**

- **Koble til din AI.** Din egen assistent kan styre BimCraft gjennom Studios tilkobling og svare på spørsmål om modellen, for eksempel hvilke rom som ligger under et gitt areal. Studio har ingen egen AI. Se [La en AI-assistent jobbe med modellen din](topic:assistants).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr Bryt, 2 rader eller 1 rad; Bryt er fortsatt standard.
- **Inndataenheter.** Styreflate, penn, 3D-mus, kontroller og MIDI-innstillinger deles av alle programmene.
- **Problemer og Live.** Advarselspanelet og Live-økter fungerer som før, med de nye kontrollene over som mater Problemer.
- **Språk.** 54 språk, ti av dem nye. De andre enn engelsk er maskinutkast som ennå ikke er lest av en morsmålsbruker; hjelpeemner er stort sett på engelsk.

### Rettet i 0.8.1

- **Bånd + layout for prosjektnettleseren.** Sett inn › Importer CAD, Sett inn › Bilde og Administrer › Prosjektenheter sa «Ikke bygget i BimCraft ennå». Bilde åpner nå Bilde-verktøyet, Importer CAD åpner {{ui:Bygg}} › {{ui:Fra en tegning…}} (DWG, DXF, PDF eller en skanning), og Prosjektenheter åpner {{ui:Innstillinger}} › {{ui:Global}} › {{ui:Enheter}}. Flytt og Innrett kjører Flytt- og Innrett-verktøyene, Nivå åpner {{ui:Legg til nivåer…}}, Faser åpner seksjonen Renoveringsfaser, og Materialer åpner materialbiblioteket.
- **Seksjonen for DWG-klasser.** Den ble lest som feil type; rettet i BimCraft og de andre programmene som leser DWG.
- **Språk under kjøring.** Studio og de pakkede utgavene kan nå bytte språk uten omstart. Dette er ikke testet på alle plattformer ennå; si fra hvis språket ikke endres.
- **ArkiCAD-pakkeskript.** `archicad_bundle.py`, en egen nedlasting, finner nå Archicads bane, følger mappen i opptil 20 sekunder og prøver på nytt ved siden av pakken.

### Ikke i denne versjonen ennå

- **Sikkerhets- og designhjelpemidler.** Personer i bygningen har ingen grense for gangavstand fra en bygningsforskrift (du skriver inn grensen), og er ikke kontrollert for hånd mot en ekte plan. Akustikk-, livssyklus- og faretall er planleggingsverdier, ikke en forskriftskontroll.
- **Klimaframtider og EnergyPlus.** Ingen innebygde klimaframtider: du kan laste en scenariofil for flomkjøringen. EnergyPlus-kjøringen i nettleseren er ikke med i denne utgivelsen.
- **Båndoppsett.** Materialmengder står som «Ikke bygget» fordi BimCraft ikke har en materialmengdeliste, og 54 andre nedtonede båndverktøy har ingen BimCraft-verktøy bak seg ennå.
- **Signering og plattformer.** Windows-installasjonsprogrammene og macOS .dmg-filen er usignerte, så SmartScreen viser {{ui:Mer info}}, deretter {{ui:Kjør likevel}}, og macOS krever høyreklikk og deretter {{ui:Åpne}}. iPad- og iPhone-utgaven ble ikke bygget på nytt for 0.8.1.
- **Tester på ekte sider.** Noen eldre nettleser-tester for BimCraft feiler fortsatt på testsiden vår, som de gjorde før 0.8.1.

Alt annet står i [Det som ikke er bygget ennå](topic:not-built-yet). Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).

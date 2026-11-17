---
title: Nyt i 0.9
summary: Vægformer, deling, forskydning, strækning og lås til gitter, niveauer under jorden, gitter-målsætninger og Mål på planen, dubletviser med arbejdsstile og pentabeller, Rapportér som, Collada- og Google Earth-eksport, Scan til BIM, vind- og seismisk analyse, add-ons til harpiksprint.
keywords: nyt, 0.9, udgivelsesnoter, vægformer, rektangel, polygon, bue, vælg linjer, optegn kontur, forskydning, sammenføj, kasse-stræk, justér og lås, del væg, mellemrum, sammenføj igen, lås til gitter, vokse fra, mål fra, tilføj et niveau under, kælder, niveaukommando, gitter-målsætninger, mål på planen, arbejdsstil, dubletvisning, egen kopi, linket visning, pentabel, udskriv som vist, rapportér som, skriv en målestok, importér svg, placér i plan, placér i model, collada, dae, kmz, google earth, scan til bim, vindlast, seismisk, finite element, dokumentpanel, harpiksprint, hvad er nyt, ændringslog, ændringer, 0.8, 0.8.1, version, nye funktioner, evakuering, personer, køer, akustik, efterklang, impulsrespons, oversvømmelse, vind, jordskælv, fare, livscyklus, levetid, ids, tags, skemaer, flyt, flugt, fordel, billede, baggrund, scan til vægge, område fra civilcraft, paneltegninger, skelet, sol, pv, del, vrf, fan coil, rørdimensionering, kabelbakke, belysningsstyrke, beton, seismisk, sammenlign scanning, epsg, projektion, dokumenter, skabelon, kulstof, omkostning, energyplus, render-motor, åbn i, usd, glb, unreal, fortryd, add-ons, pcf, symboler, anlæg, spor, pen, bånd, projektbrowser, layout
from: 5624fe88
---

Dette er, hvad der ændrede sig i BimCraft 0.9 i forhold til 0.8.1. De to store temaer er et rigtigt vægværktøj og visninger, der opfører sig, som folk fra de store BIM-programmer forventer. Dertil kommer Collada-eksport, assistenter, der kan placere elektriske enheder, Scan til BIM og vind-, seismisk og finite-element-arbejde i fanen {{ui:Analyse}}.

## Nyt

### Vægge

- **Tegn hele former.** I {{ui:Tegn}} åbner du {{ui:Former}} (eller vælger en form i listen **Form** på rækken Væg) for et rektangel, et roteret rektangel, en polygon med 3 til 64 sider, en bue efter centrum, en tangentbue, vægge på valgte linjer eller vægge rundt om et lukket areal, du klikker inde i. Et rektangel er fire vægge med fire sammenføjede hjørner og ét fortrydelsestrin. Se [Vægformer, deling, forskydning, strækning og lås](topic:wall-tools).
- **Indstil før du tegner, ændr efter.** Rækken Væg har {{ui:Forskydning}} og {{ui:Sammenføj}} (fjern fluebenet for at tegne frit stående vægge). Bagefter bruger du {{ui:Forskydning}}, {{ui:Kasse-stræk}} og {{ui:Justér og lås}} på tegnede vægge. En flyttet eller strakt væg beholder sine døre, vinduer og målsætninger. Hver fremgangsmåde er ét fortrydelsestrin.
- **Del vægge.** {{ui:Del}}, {{ui:Mellemrum}}, {{ui:Frie ender}}, {{ui:Slet segment}} og {{ui:Sammenføj igen}} skærer en væg ved et klik, eller hvor en anden væg krydser den. Et snit gennem en dør afvises. Se [Vægformer, deling, forskydning, strækning og lås](topic:wall-tools).
- **Lås vægge til gitterlinjer.** Vælg en væg langs en gitterlinje, og sæt flueben i {{ui:Lås til gitter}} i {{ui:Egenskaber}}. Med gitterværktøjet slået til skriver du en afstand i {{ui:Flyt med}} for en valgt linje, og de låste vægge følger med i ét fortrydelsestrin.
- **Form én væg.** I {{ui:Egenskaber}} for én væg kan du fastgøre dens top eller fod til et tag, en gulvplade eller et loft, redigere dens højdeprofil, lade den hælde eller skære en vægåbning uden dør eller vindue. Se [Form en væg](topic:wall-shape).
- **Længden siger, hvilken ende der holder.** {{ui:Vokse fra}} sætter, om start, slut eller midten bliver stående, når du ændrer længden.
- **Længde og planens målsætning stemmer.** {{ui:Mål fra}} (midterlinje, indvendig flade eller udvendig flade) styrer både længdefeltet og planens vægmål. Den starter på midterlinjen, så planens vægmål nu læser midterlinjen, hvor de før læste den udvendige flade. Skift den på rækken Væg, i {{ui:Egenskaber}} eller i {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Vægge}}.

### Niveauer, gitre og måling

- **Tilføj et niveau under.** {{ui:Tilføj et niveau under}} i panelet {{ui:Niveauer}} tilføjer et niveau under det laveste, lige så højt som det, på en negativ kote (Niveau -1, Niveau -2). Intet andet flyttes. {{ui:Tilføj niveauer…}} accepterer nu negative højder. Skriver du LEVEL, LEVELS, STOREY eller STOREYS på kommandolinjen, åbnes {{ui:Tilføj niveauer…}}, og der findes en {{ui:Niveauer}}-knap i menuerne og båndfanerne. Se [Områder, bygninger og niveauer](topic:site-building-and-levels).
- **Gitter-målsætninger på planen.** Med gitterværktøjet {{ui:Gitter}} slået til sætter du fluebenet i {{ui:Mål}} for at tegne afstanden mellem nabolinjer og den samlede størrelse uden om cirklerne på hvert niveaus plan. Se [Målsæt et gitter](topic:grid-dimensions).
- **Mål på planen.** {{ui:Mål}} i gruppen {{ui:Tegn}} giver en afstand med X- og Y-forskellene mellem to klik. Intet gemmes i modellen. Se [Mål på planen](topic:measure-on-the-plan).
- **Ændr flere søjler på én gang.** Vælg søjler sammen med en væg, og listen viser hver type med {{ui:Behold kun disse}}. Ét klik beholder søjlerne og viser deres fælles felter.
- **Én visningsenhed overalt.** Koordinater, målinger, snit, arkskalaer, rammefanens laster og resultater og teksten i Problemer følger den enhed, du vælger. Eksporter forbliver SI.

### Visninger, ark og udskrift

- **Arbejdsstil.** {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Arbejdsstil}} vælger mellem, at hver visning har sine egne annoteringer og pentabeller, eller at de deles. Se [Arbejdsstil, dublerede visninger, penne på papir, Rapportér som og skabeloner](topic:working-style).
- **Dublér en visning.** Planer, loftsplaner, henvisninger, facader og snit kan dubleres som {{ui:Egen kopi}} eller {{ui:Linket}}. {{ui:Gør til egen kopi}} gør en linket visning uafhængig. Se [Arbejdsstil, dublerede visninger, penne på papir, Rapportér som og skabeloner](topic:working-style).
- **Udskriv som vist, eller gennem en pentabel.** Pen-overskrivninger gemmes i IFC'en med visningen, og ark og PDF'er tegner dem, som skærmen gør. Det samme emne dækker pentabeller.
- **Rapportér som.** {{ui:Rapportér som}} i {{ui:Egenskaber}} skriver en plade tegnet som en vej, en væg som et panel eller et tag som en rampe til IFC'en som den klasse, du vælger, og tæller den sådan i skemaer, mængder, Find, Farv efter og Problemer.
- **Redigér i facader og snit.** Tegn og flyt vægge, åbninger, niveauer, målsætninger og noter direkte i en facade eller et snit, med dine egne arkstørrelser og tegningshoveder. Se [Redigér i facader og snit](topic:edit-in-elevations).
- **Ark.** Hvert ark kan være liggende eller stående. En boks {{ui:Skriv en målestok}} står ved siden af skalalisten på hver placeret visning (1:64, 2:1, 1/4" = 1'). Du kan trække en placeret tegning eller skubbe den med piletasterne, og {{ui:Formater…}} › {{ui:Importér SVG…}} gør dit eget arkdesign til et tegningshoved med felter, der skrives pr. ark.
- **Biblioteksnavne på et ark.** Et tegningssæt med bibliotekselementer får et skema over biblioteksnavne, som du kan placere på ethvert ark. Se [Biblioteksnavne](topic:library-credits).

### Bibliotek: placering

- **Placering følger visningen.** I planvisningen viser biblioteket {{ui:Placér i plan}}; i 3D viser det {{ui:Placér i model}}; i delt visning viser det en delt knap med {{ui:Placér i plan}} som hovedhandling. Begge måder skriver det samme IFC-element. Du kan også trække et bibliotekskort ind på planen eller 3D-visningen. Med pen eller finger trykker du og holder, og trækker derefter.

### Filer og assistenter

- **Collada og Google Earth.** {{ui:Collada}} på værktøjslinjen (under menuen Fil i menustilene) skriver en .dae, eller en .kmz placeret, hvor modellen er på kortet. Se [Eksportér modellen som Collada eller til Google Earth](topic:collada).
- **Assistenter kan placere elektriske enheder.** Din tilsluttede assistent har nye værktøjer til at tilføje, liste, ændre og slette enheder og til at sætte lys. Assistenter er slået fra, indtil du tænder dem i {{ui:Indstillinger}}. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Scan til BIM (add-on).** Slået fra som standard og kræver add-on'en Punktskyer. Den foreslår gulve, vægge, døre og vinduer ud fra en scanning med den målte afvigelse for hver. At acceptere er ét fortrydelsestrin.

### Analyse

- **Vind- og seismiske stedsdata.** I fanen {{ui:Analyse}}: vindlaster efter ASCE 7-10 eller 7-16 for en stiv, lukket bygning, med en kraft på hvert gulv som lasttilfælde, og seismiske stedsdata med et USGS-opslag og designspektret.
- **Konstruktionsopfølgning og finite elementer.** Betonkontroller efter ACI 318-19, ækvivalente sidekræfter efter ASCE 7-22, etagedrift, dæk og vægge som plader og lastkombinationer efter ASCE 7 og EN 1990. Vores egen finite element-motor laver skaller, tetraedre og modalanalyse. Se [Kontrollér betonelementer og lav seismiske laster](topic:concrete-and-seismic) og [Rammeanalyse](topic:frame-analysis).

### Andre add-ons og dokumenter

- **Indendørs belysning (add-on).** Placerer lysarmaturer og skriver lux som tal ind i hvert niveaus plan, med et blændingsestimat og en rapport, der kan udskrives.
- **Dokumentpanel.** {{ui:Fil}} › {{ui:Dokumenter…}} har check ud og ind med en låsefil, revisionsbogstaver, udgivelsestilstande og historik.
- **Regioner og stål.** Sydafrikanske tegne- og byggeforskriftspakker i Regulering-add-on'en, og 976 britiske stålstørrelser i den delte profiltabel.
- **Gratis add-ons til harpiksprint.** Slicer, understøtninger og raft, eksponeringstest og filformaterne GOO, SL1, Chitubox og Anycubic, alle slået fra som standard.

## I alle apps

- Når du holder markøren over en knap eller kontrol, vises et Bootstrap-værktøjstip.
- Startfeltet på et tomt tegneområde har en lukkeknap. BimCraft husker, at det blev lukket.
- En panelfanerække, der ikke har plads, ruller nu i stedet for at blive skåret af.
- Med et dokument åbent læser browserfanen "<dokument> - BimCraft | CadCraft".
- I {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layout}} er layouterne en rullemenu med valg på to linjer.
- Sproglisten i {{ui:Indstillinger}} tilbyder flere sprog end i 0.8. Andre sprog end engelsk er maskinkladder.

## Rettet

- **Flyt virker på trapper** og på ramper, rækværk, tagplaner, frit stående enheder, billeder og stier.
- **Trækning af en væg skæver ikke længere rummet.** Midtergrebet flytter væggen vinkelret på sig selv, og dens hjørner glider langs de sammenføjede vægge. Hold {{key:Mod}} nede for den gamle frie flytning. {{ui:Ret vinklen op}} gør 90 grader rigtige igen.
- **En ændring af tykkelse eller type i et sammenføjet knudepunkt** holder nu hjørnet lukket ved et L, et T, en knude med tre vægge og ved siden af en buet væg.
- **Flytning eller kopiering af en gruppe rum** beholder sammenføjede vægge uden for gruppen sammenføjet.
- **Redo bevarer en væg-målsætnings identitet.**
- **At vælge en væg med Tegn slået fra** giver ikke længere en fejl i Egenskaber.
- **Rendering falder tilbage til WebGL**, når grafikkortet ikke kan starte, i stedet for at stoppe.
- **EnergyPlus-kontrollen kan igen slås til.**
- **Dokumenter åbnes som en centreret dialog.** {{key:Esc}}, X'et eller et klik på den dæmpede side lukker den.
- **Knapperne {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} vises**, så snart en model er åben, og ikke først efter at Tegn har været slået til én gang.

## Ærlige begrænsninger

- Intet er udskrevet på rigtigt udstyr. Harpiksunderstøtningerne er nye og endnu ubevist.
- Vind-, seismiske, beton- og finite element-resultater er kontrolhjælp for en ingeniør, kontrolleret mod lukkede formler, ikke mod en rigtig bygning.
- Scan til BIM er testet på en syntetisk bygning, ikke en rigtig scanning, og finder kun rektilineære rum.
- Collada er ikke åbnet i Blender eller Google Earth her.
- Belysningsestimatet er kontrolleret mod vores egen sporing, ikke mod andre belysningsprogrammer.
- De sydafrikanske tal er ikke verificerede.
- Sammenføjningsstile på vægge (stød, gering, afslut firkantet) og lagprioritet er ikke bygget; hjørner bliver gerede.
- Andre sprog end engelsk er maskinkladder.

Alt andet står i [Hvad der ikke er bygget endnu](topic:not-built-yet). Tidligere ændringer står i 0.8- og 0.8.1-noterne længere nede på denne side.

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der ændrede sig i BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02) i forhold til 0.7. BimCraft kan nu svare på spørgsmål om en bygning og teste den, med personer, lyd, vand, vind og jordskælv, og tegne den med flere værktøjer. 0.8.1 er en rettelsesudgivelse.

### Nyt

**Test bygningen**

- **Personer i bygningen.** Sektionen {{ui:Personer i bygningen}} i venstre panel fører en evakuering eller en almindelig dags ankomster gennem dine rum, døre og trapper. Du ser køerne, hvor bygningen indsnævres, den længste gang til en udgang fra hvert rum, og hvor lang tid den sidste person bruger. Sæt flueben i {{ui:Lukket}} på en dør for at se, hvad der ændrer sig, og sæt flueben i {{ui:Vis personerne i 3D-visningen}} for at se gæsterne gå. Resultaterne går til Problemer. En grov menneskemodel til designbeslutninger, ikke et brandsikkerhedscertifikat. Se [Lad personer gå gennem bygningen](topic:people-in-the-building).
- **Rumakustik, og hør den.** Sektionen {{ui:Rumakustik}} giver hvert rums efterklangstid pr. oktavbånd (Sabine og Eyring) ud fra dets størrelse og de overflader, du vælger, og med et mål, du selv sætter, siger den, hvor meget absorption der skal til for at opfylde det. {{ui:Afspil den i dette rum}} afspiller en stemme, et klap, plukkede toner eller din egen lydfil gennem en impulsrespons beregnet for rummet. Absorptionstallene er typiske, offentliggjorte værdier, som du kan erstatte. Se [Rumakustik](topic:room-acoustics).
- **Oversvømmelses-, vind- og jordskælvsafspilning.** {{ui:Afspilning af fare}} afspiller vand, der stiger gennem rummene, vindtryk på hver etage og et jordskælv, der ryster etagerne, på en plan eller en facade med en tidsskyder. Enkle modeller med deres antagelser på panelet; ikke en normkontrol. Se [Afspil en oversvømmelse, vind eller et jordskælv](topic:hazard-playback).
- **Hvad slides op på halvtreds år.** {{ui:Livscyklusvisning}} lister vinduer, døre, overflader og tag med en levetid hver, de år de udskiftes, og når du skriver en pris pr. enhed, omkostningen pr. år og dens nutidsværdi. {{ui:Gem planen (CSV)}} skriver den ud. Levetiderne er planlægningstal. Se [Se, hvad der slides op over halvtreds år](topic:life-cycle-view).
- **Betonkontroller og seismik.** Blokkene {{ui:Betonelementer}} og {{ui:Jordskælvslaster}} i fanen {{ui:Analyse}} kontrollerer betonbjælker og -søjler efter ACI 318-19 og laver ækvivalente sidekræfter efter ASCE 7-22 på stive gulve, med etagedrift. Til en ingeniør at kontrollere. Se [Kontrollér betonelementer og lav seismiske laster](topic:concrete-and-seismic).

**Kontrollér og rapportér**

- **Kontrollér mod en IDS.** Indlæs den `.ids`-fil, en kunde gav dig, og se hvert element, der ikke opfylder den, i Problemer, før du leverer IFC'en. Åbn {{ui:Kontrollér mod en IDS}} under {{ui:Modelkontrol}}. Se [Kontrollér en model mod en kundes IDS](topic:check-against-ids).
- **Mærker og skemaer.** Definer egne mærker, sæt dem på mange elementer på én gang, og lav skemaer, hvis kolonner, filtre og grupper læser dem. Mærkerne gemmes i IFC'en. Se [Mærker og skemaer](topic:tags-and-schedules).
- **Dokumenter fra modellen.** {{ui:Dokumenter fra modellen}} udfylder en specifikationsskabelon fra den åbne IFC og gemmer den som PDF, Word-dokument eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).
- **Sammenlign en scanning med modellen.** Med en punktsky åben vurderer {{ui:Sammenlign}} hvert element som bygget, delvist bygget, manglende eller ikke nået, og viser den procentdel, der er bygget. Se [Sammenlign en scanning med modellen](topic:compare-scan-with-model).
- **Kulstof og omkostning.** Kulstofpanelet summerer indlejret kulstof ud fra en faktortabel, du kan redigere, og omkostningspanelet fordeler priser over 4D-tidsplanen. De faktorer, der følger med BimCraft, er generiske og markeret som ukontrollerede. Se [Indlejret kulstof og omkostning](topic:embodied-carbon-and-5d-cost).
- **Enhver kortprojektion.** {{ui:Mål}} › {{ui:Koordinatsystem…}} tager et EPSG-nummer, en UTM-zone, et navn eller din egen projektionsdefinition. Se [Georeferér med enhver projektion](topic:georeference-any-projection).

**Tegn og redigér**

- **Flyt, flugt og fordel.** Under {{ui:Build}}; {{key:Shift+M}} starter Flyt (almindeligt {{key:M}} er stadig Mål). Flyt kopierer, mens du går, med {{key:C}}, hvert trin er ét fortrydelsestrin, og det følger med i en Live TeamWork-session. Se [Flyt, kopiér, flugt og fordel](topic:move-align-distribute).
- **Billeder under planen.** {{ui:Build}} › {{ui:Billede}} placerer et PNG-, JPEG- eller WebP-billede under et niveaus plan eller på et lodret plan. Sæt skalaen med to punkter, og flyt, drej, forton og lås det. Et område kopieret i MarkupCraft indsættes i sin arks skala. Se [Læg et billede under planen](topic:pictures-as-backgrounds).
- **Vægge fra en scanning.** Med en scanning åben kommer vægge, døre og rum som forslag, du beholder eller forkaster et ad gangen, i ét fortrydelsestrin. Kun vægge i to vinkelrette retninger findes. Se [Lav en scanning om til vægge](topic:scan-to-walls).
- **Optegning, penne og trappe fra en skitse.** {{ui:Optegn}} viser et andet niveau stiplet under planen, {{ui:Penne}} giver vægge, døre og vinduer deres egen linjetykkelse i én visning, og {{ui:Skitsér trappe}} gør en gangsti til en trappe. En Wavefront OBJ-mesh åbnes. Se [Optegn et niveau, penne og en trappe fra en skitse](topic:trace-pens-stairs-obj).
- **Bygninger omkring en adresse.** De bygninger og den parcel, CivilCraft's Adresse til område fandt, kommer som forslag, og du sætter flueben i dem, du vil tilføje. Se [Start fra CivilCraft's område](topic:site-from-civilcraft).
- **Paneltegninger.** {{ui:Build}} › {{ui:Paneltegninger}} rammer vægge, gulve og tage i træ eller lette stålprofiler og gemmer en tilskæringsliste som CSV og værkstedstegninger som PDF. Startværdier, ikke en konstruktionsberegning. Se [Paneltegninger](topic:panel-drawings).
- **Symbolpalette og anlæg.** {{ui:Build}} › {{ui:Symbolpalette}} finder el- og VVS-symboler ud fra navn; kilden {{ui:Planter}} i {{ui:Bibliotek}} lister omkring 400 anlæg med plansymboler. Se [Symbolpalette](topic:symbol-palette) og [Placér et anlæg](topic:plant-list).

**Rør, kanaler og energi**

- **Split, VRF og fan coils.** Indendørs- og udendørsenheder med deres forbindelser, og væskeledninger dimensioneret ud fra en tabel med typiske eksempelværdier, som du kan ændre. Se [Split, VRF og fan coils](topic:split-vrf-fan-coils).
- **Beregninger.** Beregningspanelet kontrollerer dimensioner på forsyningsrør og kanaler med trykfald, fører kabler gennem bakker og rør og viser deres fyldning, og beregner belysningsstyrke ud fra IES- eller EULUMDAT-filer. Standardværdier er mærket; skriv værdierne fra din egen norm. Se [Beregninger af rør, kanaler, kabler og lys](topic:mep-calculations).
- **PCF-filer.** Rørværktøjets **Eksportér PCF** skriver strækningerne til rørspændingsprogrammer og isometriske programmer, og en PCF-fil, der læses tilbage, tegner dens rør. Se [Rørkomponentfiler](topic:piping-pcf).
- **Solceller.** Montér arrays på tage eller på jorden, skyg dem fra modellen, estimér årlig energi, kontrollér strenge og lav data til et enliniediagram. Startmodulet og tabene er generiske. Se [Solceller](topic:solar-pv).
- **EnergyPlus-fil.** Panelet {{ui:Kontrollér med EnergyPlus}} skriver modellen som en IDF, der kan køres i din egen EnergyPlus. Kørsel i browseren kræver en build, du selv hoster og skriver adressen til; BimCraft medfølger den ikke. Se [Kontrollér opvarmning og køling med EnergyPlus](topic:check-with-energyplus).

**Billeder og filer**

- **Vælg render-motoren.** {{ui:Render}} har et valg {{ui:Motor}}. Vores to indbyggede motorer (Hurtig og Stisporer) forbliver standard. **Åbn i** gemmer scenen som en USD- eller glTF-fil, og en Unreal-projektmappe som en .zip. I CadCraft Studio kan et add-on tilføje en motor. Unreal-plugin'et, der åbner projektet, er ikke udgivet. Se [Vælg hvilket program, der tegner billedet](topic:render-engines).
- **Studio-fortryd.** Inde i CadCraft Studio fortæller BimCraft Studio hvert færdigt trin, så Studio kan fortryde dit sidste trin i det vindue, du brugte sidst. Se [Fortryd på tværs af apps](topic:undo-across-apps).
- **Add-ons i din fil.** En IFC registrerer, hvilke add-ons der skrev i den, og tilbyder dem, du mangler, når du åbner den. Se [Add-ons i din fil](topic:add-ons-in-your-file).

**I alle apps**

- **Forbind din AI.** Din egen assistent kan styre BimCraft gennem Studios forbindelse og svare på spørgsmål om modellen, fx hvilke rum der ligger under et givet areal. Studio har ingen AI af sin egen. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder Brydning, 2 rækker eller 1 række; Brydning er stadig standard.
- **Inputenheder.** Trackpad-, pen-, 3D-mus-, controller- og MIDI-indstillinger deles af alle apps.
- **Problemer og Live.** Advarselspanelet og Live-sessioner virker som før, med de nye kontroller ovenfor, der fodrer Problemer.
- **Sprog.** 54 sprog, ti af dem nye. De andre end engelsk er maskinkladder, der endnu ikke er læst af en modersmålstaler. Hjælpeemnerne er for det meste på engelsk.

### Rettet i 0.8.1

- **Ribbon + layout for projektbrowseren.** Indsæt › Importér CAD, Indsæt › Billede og Administrer › Projektenheder sagde "Ikke bygget i BimCraft endnu". Billede åbner nu billedværktøjet, Importér CAD åbner {{ui:Build}} › {{ui:Fra en tegning…}} (DWG, DXF, PDF eller en scanning), og Projektenheder åbner {{ui:Indstillinger}} › {{ui:Global}} › {{ui:Enheder}}. Flyt og Flugt kører flyt- og flugtværktøjerne, Niveau åbner {{ui:Tilføj niveauer…}}, Faser åbner sektionen Renoveringsfaser, og Materialer åbner materialebiblioteket.
- **DWG-klassesektion.** Den blev læst som den forkerte type; rettet i BimCraft og de andre apps, der læser DWG.
- **Sprog under kørsel.** Studio og de pakkede udgaver kan nu skifte sprog uden genstart. Det er endnu ikke testet på alle platforme; sig til, hvis sproget ikke skifter.
- **Arkiv-script til Archicad.** `archicad_bundle.py`, en separat download, finder nu Archicads sti, overvåger mappen i op til 20 sekunder og prøver igen ved siden af pakken.

### Ikke i denne version endnu

- **Sikkerheds- og designhjælpemidler.** Personer i bygningen har ingen gangafstandsgrænse fra en bygningskode (du skriver grænsen), og den er ikke kontrolleret i hånden på en rigtig plan. Akustik-, livscyklus- og fareberegningerne er planlægningsværdier, ikke en normkontrol.
- **Klimafremtider og EnergyPlus.** Ingen indbyggede klimafremtider: du kan indlæse en scenariefil til oversvømmelseskørslen. EnergyPlus-kørslen i browseren er ikke en del af denne udgivelse.
- **Båndlayout.** Materialemængder forbliver "Ikke bygget", fordi BimCraft ikke har nogen materialemængdeliste, og 54 andre nedtonede båndværktøjer har endnu ingen BimCraft-værktøj bag sig.
- **Signering og platforme.** Windows-installationsprogrammer og macOS .dmg er usignerede, så SmartScreen viser {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}, og macOS kræver højreklik og derefter {{ui:Åbn}}. iPad- og iPhone-versionen blev ikke genbygget til 0.8.1.
- **Tests på rigtige sider.** Nogle ældre BimCraft-browsertests fejler stadig på vores testside, som de gjorde før 0.8.1.

Alt andet står i [Hvad der ikke er bygget endnu](topic:not-built-yet). Tidligere ændringer står i [Nyt i 0.7](topic:whats-new-0-7).

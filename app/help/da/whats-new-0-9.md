---
title: Nyheder i 0.9 (tidligere)
summary: Vægformer, opdeling, forskydning, strækning og lås til gitter, niveauer under jorden, gittermål og Mål på planen, dubletvisninger med arbejdsstile og pennetabeller, Rapportér som, Collada- og Google Earth-eksport, Scan til BIM, vind- og jordskælvsanalyse, tilføjelser til harpiksprint.
keywords: nyheder 0.9, tidligere udgivelse, nyheder, 0.9, udgivelsesnoter, vægformer, rektangel, polygon, bue, vælg linjer, optegn kontur, forskydning, sammenføj, kasse-stræk, justér og lås, del væg, mellemrum, sammenføj igen, lås til gitter, vokse fra, mål fra, tilføj et niveau under, kælder, niveaukommando, gittermål, mål på planen, arbejdsstil, dublet-visning, egen kopi, koblet visning, pennetabel, udskriv som vist, rapportér som, skriv en målestok, importér svg, placér i plan, placér i model, collada, dae, kmz, google earth, scan til bim, vindlast, jordskælv, endelig elementanalyse, dokumentpanel, harpiksprint, hvad er nyt, ændringslog, ændringer, 0.8, 0.8.1, version, nye funktioner, evakuering, personer, køer, akustik, efterklang, impulsrespons, oversvømmelse, vind, jordskælv, fare, livscyklus, levetid, ids, mærker, lister, flyt, justér, fordel, billede, baggrund, scan til vægge, sted fra CivilCraft, paneltegninger, rammeværk, sol, pv, opdeling, vrf, fan coil, rørdimensionering, kabelbakke, belysningsstyrke, beton, sammenlign scan, epsg, projektion, dokumenter, skabelon, kulstof, omkostning, energyplus, render-motor, åbn i, usd, glb, unreal, fortryd, tilføjelsesprogrammer, pcf, symboler, planter, optegn, penne, bånd, projektbrowser, layout
from: 816df7f8
---

Dette er ændringerne i BimCraft 0.9 sammenlignet med 0.8.1. De to store temaer er et rigtigt vægværktøj og visninger, der opfører sig, som folk fra de store BIM-programmer forventer. Omkring dem kommer Collada-eksport, assistenter, der kan placere elektriske enheder, Scan til BIM og vind-, jordskælvs- og endelig elementanalyse i fanen {{ui:Analyse}}.

## Nyt

### Vægge

- **Tegn hele former.** I {{ui:Tegn}} åbner du {{ui:Former}} (eller vælger en form i Form-listen i væg-rækken) for et rektangel, et roteret rektangel, en polygon med 3 til 64 sider, en bue efter centrum, en tangentbue, vægge på valgte linjer eller vægge rundt om et lukket areal, du klikker inde i. Et rektangel er fire vægge med fire sammenhængende hjørner og ét fortrydelsestrin. Se [Vægformer, opdeling, forskydning, strækning og lås](topic:wall-tools).
- **Indstil før du tegner, ændr bagefter.** Væg-rækken har {{ui:Forskydning}} og {{ui:Sammenføj}} (fjern krydset for at tegne frie vægge). Bagefter bruger du {{ui:Forskydning}}, {{ui:Kasse-stræk}} og {{ui:Justér og lås}} på tegnede vægge. En flyttet eller strakt væg beholder sine døre, vinduer og mål. Hver opskrift er ét fortrydelsestrin.
- **Del vægge.** {{ui:Del}}, {{ui:Mellemrum}}, {{ui:Frie ender}}, {{ui:Slet segment}} og {{ui:Sammenføj igen}} skærer en væg ved et klik eller dér, hvor en anden væg krydser den. Et snit gennem en dør afvises. Se [Vægformer, opdeling, forskydning, strækning og lås](topic:wall-tools).
- **Lås vægge til gitterlinjer.** Vælg en væg langs en gitterlinje, og sæt kryds i {{ui:Lås til gitter}} i {{ui:Egenskaber}}. Med gitterværktøjet slået til skriver du en afstand i {{ui:Flyt med}} for en valgt linje, og de låste vægge følger med i ét fortrydelsestrin.
- **Form én væg.** I {{ui:Egenskaber}} for én væg kan du fastgøre dens top eller fod til et tag, et dæk eller et loft, redigere dens højdeprofil, hælde den eller lave en vægåbning uden dør eller vindue. Se [Vægform](topic:wall-shape).
- **Længden siger, hvilken ende der holder.** {{ui:Vokse fra}} angiver, om start, slut eller midten bliver stående, når du ændrer længden.
- **Længde og mål på planen stemmer overens.** {{ui:Mål fra}} (midtlinje, indvendig flade eller udvendig flade) styrer både feltet Længde og planens vægmål. Den starter på midtlinjen, så planens vægmål viser midtlinjen, hvor de før viste den udvendige flade. Ændr den i væg-rækken, i {{ui:Egenskaber}} eller i {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Vægge}}.

### Niveauer, gitre og måling

- **Tilføj et niveau under.** {{ui:Tilføj et niveau under}} i panelet {{ui:Niveauer}} tilføjer et niveau under det laveste, lige så højt som det, på negativ kote (Niveau -1, Niveau -2). Intet andet flyttes. {{ui:Tilføj niveauer…}} accepterer nu negative højder. Hvis du skriver LEVEL, LEVELS, STOREY eller STOREYS på kommandolinjen, åbnes {{ui:Tilføj niveauer…}}, og der er en knap {{ui:Niveauer}} i menuerne og båndfanerne. Se [Grunde, bygninger og niveauer](topic:site-building-and-levels).
- **Gittermål på planen.** Med {{ui:Gitter}}-værktøjet slået til sætter du kryds i {{ui:Mål}} for at tegne afstanden mellem nabolinjer og den samlede størrelse uden for cirklerne på hver etages plan. Se [Mål et gitter](topic:grid-dimensions).
- **Mål på planen.** {{ui:Mål}} i gruppen {{ui:Tegn}} giver en afstand med X- og Y-forskellene mellem to klik. Intet gemmes i modellen. Se [Mål på planen](topic:measure-on-the-plan).
- **Ret flere søjler på én gang.** Vælg søjler sammen med en væg, og valgtlisten viser hver type med {{ui:Behold kun disse}}. Ét klik beholder søjlerne og viser deres fælles felter.
- **Én visningsenhed overalt.** Koordinater, mål, snit, arkskalaer, rammefanens laster og resultater samt problemtekster følger den enhed, du vælger. Eksporter forbliver SI.

### Visninger, ark og udskrift

- **Arbejdsstil.** {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Arbejdsstil}} vælger, om hver visning har egne annoteringer og pennetabeller, eller om de deles. Se [Arbejdsstil, dublerede visninger, penne på papir, Rapportér som og skabeloner](topic:working-style).
- **Dublér en visning.** Planer, loftsplaner, henvisninger, facader og snit kan dubleres som {{ui:Egen kopi}} eller {{ui:Koblet}}. {{ui:Gør til egen kopi}} gør en koblet visning uafhængig. Se [Arbejdsstil, dublerede visninger, penne på papir, Rapportér som og skabeloner](topic:working-style).
- **Udskriv som vist, eller gennem en pennetabel.** Pennetilsidesættelser gemmes i IFC'en med visningen, og ark og PDF'er tegner dem, som skærmen gør. Samme emne dækker pennetabeller.
- **Rapportér som.** {{ui:Rapportér som}} i {{ui:Egenskaber}} skriver et dæk tegnet som en vej, en væg som et panel eller et tag som en rampe til IFC som den klasse, du vælger. Det tælles sådan i lister, Mængder, Søg, Farv efter og Problemer.
- **Rediger i facader og snit.** Tegn og flyt vægge, åbninger, niveauer, mål og noter direkte i en facade eller et snit, med dine egne arkstørrelser og tegningshoveder. Se [Rediger i facader og snit](topic:edit-in-elevations).
- **Ark.** Hvert ark kan være liggende eller stående. En boks {{ui:Skriv en målestok}} sidder ved siden af skalalisten på hver placeret visning (1:64, 2:1, 1/4" = 1'). Du kan trække en placeret tegning eller flytte den med piletasterne. {{ui:Formater…}} › {{ui:Importér SVG…}} gør dit eget arkdesign til et tegningshoved med felter, der skrives pr. ark.
- **Bibliotekskreditering på et ark.** Et tegningssæt med bibliotekselementer får en liste over bibliotekskreditering, som du kan placere på et hvilket som helst ark. Se [Bibliotekskreditering](topic:library-credits).

### Bibliotek: placering

- **Placering følger visningen.** I planvisningen viser Bibliotek {{ui:Placér i plan}}. I 3D viser det {{ui:Placér i model}}. I Opdelt viser det en delt knap med {{ui:Placér i plan}} som hovedhandling. Begge måder skriver det samme IFC-element. Du kan også trække et bibliotekskort op på planen eller 3D-visningen. Med pen eller finger trykker og holder du først og trækker derefter. Se [Placér fra biblioteket](topic:place-from-library).

### Filer og assistenter

- **Collada og Google Earth.** {{ui:Collada}} på værktøjslinjen (Fil-menuen i menustilene) skriver en .dae eller en .kmz placeret, hvor modellen står på kortet. Se [Eksportér modellen som Collada eller til Google Earth](topic:collada).
- **Assistenter kan placere elektriske enheder.** Din forbundne assistent har nye værktøjer til at tilføje, liste, ændre og slette enheder og til at sætte lys. Assistenter er slået fra, indtil du slår dem til i {{ui:Indstillinger}}. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Scan til BIM (tilføjelse).** Slået fra som standard og kræver tilføjelsen Punktskyer. Den foreslår dæk, vægge, døre og vinduer ud fra en scanning, med den målte afvigelse for hver. Accept er ét fortrydelsestrin.

### Analyse

- **Vind- og jordskælvsdata for stedet.** I fanen {{ui:Analyse}}: vindlaster efter ASCE 7-10 eller 7-16 for en stiv, lukket bygning, med en kraft på hver etage som lasttilfælde, og jordskælvsdata for stedet med et USGS-opslag og designspektret.
- **Opfølgning på konstruktion og endelige elementer.** Betonkontroller efter ACI 318-19, ækvivalente horisontale kræfter efter ASCE 7-22, etageforskydning, dæk og vægge som plader og lastkombinationer fra ASCE 7 og EN 1990. Vores egen endelige elementmotor håndterer skaller, tetraedre og modalanalyse. Se [Kontrollér betonelementer og lav jordskælvslaster](topic:concrete-and-seismic) og [Rammeanalyse](topic:frame-analysis).

### Andre tilføjelser og dokumenter

- **Indvendig belysning (tilføjelse).** Placerer lysarmaturer og skriver lux som tal ind i hver etages plan, med et blændingsestimat og en rapport, der kan udskrives.
- **Dokumentpanel.** {{ui:Fil}} › {{ui:Dokumenter…}} har tjek ud og tjek ind med en låsefil, revisionsbogstaver, udgivelsestilstande og historik.
- **Regioner og stål.** Sydafrikanske tegnings- og byggeforskriftspakker i tilføjelsen Regulativer og 976 britiske stålstørrelser i den fælles profiltabel.
- **Gratis tilføjelser til harpiksprint.** Slicer, understøtninger og raft, eksponeringstest og filformaterne GOO, SL1, Chitubox og Anycubic. Alle er slået fra som standard.

## I alle programmer

- Når du holder musen over en knap eller kontrol, vises et Bootstrap-tip.
- Startspidset på et tomt tegneområde har en lukkeknap. BimCraft husker, at det blev lukket.
- Et panels fanerække, der ikke passer, ruller nu i stedet for at blive skåret af.
- Med et dokument åbent lyder browserfanens titel »<dokument> - BimCraft | CadCraft«.
- I {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layout}} er layouterne en rulleliste med valg på to linjer.
- Sproglisten i {{ui:Indstillinger}} tilbyder flere sprog end i 0.8. Sprog andet end engelsk er maskinkladder.

## Rettet

- **Flyt virker på trapper** og på ramper, rækværk, tagplaner, frit stående enheder, billeder og stier.
- **At trække en væg skæver ikke længere rummet.** Midtgrebet flytter væggen vinkelret på sig selv, og dens hjørner glider langs de sammenføjede vægge. Hold {{key:Mod}} nede for den gamle frie flytning. {{ui:Ret vinklen op}} giver 90 grader tilbage.
- **En tykkelses- eller typeændring i et sammenføjet knudepunkt** holder nu hjørnet lukket ved et L, et T, en knude med tre vægge og ved siden af en buet væg.
- **Flytning eller kopiering af en gruppe rum** beholder sammenføjede vægge uden for gruppen sammenføjet.
- **Gentag beholder en vægmåls identitet.**
- **Valg af en væg med Tegn fra** giver ikke længere en fejl i Egenskaber.
- **Render falder tilbage til WebGL,** når GPU'en ikke kan starte, i stedet for at stoppe.
- **EnergyPlus-kontrollen kan slås til** igen.
- **Dokumenter åbner som en centreret dialog.** {{key:Esc}}, X'et eller et klik på den nedtonede side lukker den.
- **Knapperne {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} vises,** så snart en model er åben, ikke kun efter at Tegn er slået til én gang.

## Ærlige grænser

- Intet blev printet på rigtig hardware. Understøtningerne til harpiks er nye og ubeviste.
- Vind-, jordskælvs-, beton- og endelige elementers resultater er kontrolhjælpemidler for en ingeniør. De er kontrolleret mod lukkede formler, ikke mod en rigtig bygning.
- Scan til BIM er testet på en syntetisk bygning, ikke en rigtig scanning, og finder kun rektangulære rum.
- Collada er ikke åbnet i Blender eller Google Earth her.
- Belysningsestimatet er kontrolleret mod vores egen optegning, ikke mod andre belysningsprogrammer.
- Tallene for Sydafrika er ikke verificeret.
- Vægsammenføjningsstile (butt, mitre, square off) og lagprioritet er ikke bygget. Hjørner er geringsskårne.
- Sprog andet end engelsk er maskinkladder.

Alt andet står i [Hvad der ikke er lavet endnu](topic:not-built-yet). Tidligere ændringer står i noterne for 0.8 og 0.8.1 længere nede på denne side.

## Tidligere: 0.8 og 0.8.1

Dette er ændringerne i BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02) sammenlignet med 0.7. BimCraft kan nu svare på spørgsmål om en bygning og teste den, med personer, lyd, vand, vind og jordskælv, og tegne den med flere værktøjer. 0.8.1 er en rettelsesudgivelse.

### Nyt

**Test bygningen**

- **Personer i bygningen.** Afsnittet {{ui:Personer i bygningen}} i venstre panel fører en evakuering eller en almindelig dags ankomster gennem dine rum, døre og trapper. Du ser køerne, hvor bygningen smalner, den længste gang til en udgang fra hvert rum og hvor lang tid den sidste person bruger. Sæt kryds i {{ui:Lukket}} på en dør for at se, hvad der ændrer sig. Sæt kryds i {{ui:Vis personerne i 3D-visningen}} for at følge de gående. Fundene går til Problemer. Det er en grov menneskemængdemodel til designbeslutninger, ikke et brandsikkerhedscertifikat. Se [Før personer gennem bygningen](topic:people-in-the-building).
- **Rumakustik, og hør det.** Afsnittet {{ui:Rumakustik}} giver hvert rums efterklangstid pr. oktavbånd (Sabine og Eyring) ud fra dets størrelse og de overflader, du vælger. Med et mål, du selv sætter, siger den, hvor meget absorption der skal til for at nå det. {{ui:Afspil den i dette rum}} afspiller en stemme, et klap, plukkede toner eller din egen lydfil gennem en impulsrespons, der er beregnet for rummet. Absorptionstallene er typiske, offentliggjorte værdier, som du kan erstatte. Se [Rumakustik](topic:room-acoustics).
- **Afspilning af oversvømmelse, vind og jordskælv.** {{ui:Afspilning af fare}} viser vand, der stiger gennem rummene, vindtryk på hver etage og et jordskælv, der rokker etagerne. Det vises på en plan eller en facade med en tidsskyder. Enkle modeller med deres antagelser står på panelet. Det er ikke en normkontrol. Se [Afspil en oversvømmelse, vind eller et jordskælv](topic:hazard-playback).
- **Hvad slides op på halvtreds år.** {{ui:Livscyklusvisning}} lister vinduer, døre, overflader og tag med en levetid hver, årene de udskiftes, og når du skriver en pris pr. enhed, prisen pr. år og dens nutidsværdi. {{ui:Gem planen (CSV)}} skriver den ud. Levetiderne er planlægningstal. Se [Se hvad der slides op over halvtreds år](topic:life-cycle-view).
- **Beton- og jordskælvskontroller.** Blokkene {{ui:Betonelementer}} og {{ui:Jordskælvslaster}} i fanen {{ui:Analyse}} kontrollerer betonbjælker og -søjler efter ACI 318-19 og laver ækvivalente horisontale kræfter efter ASCE 7-22 på stive etager, med etageforskydning. Det er til en ingeniør at kontrollere. Se [Kontrollér betonelementer og lav jordskælvslaster](topic:concrete-and-seismic).

**Kontrollér og rapportér**

- **Kontrollér mod en IDS.** Indlæs den `.ids`-fil, en kunde gav dig, og se hvert element, der ikke opfylder den, i Problemer, før du leverer IFC-filen. Åbn {{ui:Kontrollér mod en IDS}} under {{ui:Modelkontrol}}. Se [Kontrollér en model mod en kundes IDS](topic:check-against-ids).
- **Mærker og lister.** Definér dine egne mærker, sæt dem på mange elementer på én gang, og lav lister, hvis kolonner, filtre og grupper læser dem. Mærkerne gemmes i IFC-filen. Se [Mærker og lister](topic:tags-and-schedules).
- **Dokumenter fra modellen.** {{ui:Dokumenter fra modellen}} udfylder en specifikationsskabelon fra den åbne IFC og gemmer den som PDF, Word-dokument eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).
- **Sammenlign en scanning med modellen.** Med en punktsky åben bedømmer {{ui:Sammenlign}} hvert element som bygget, delvist bygget, manglende eller ikke nået, og viser procent bygget. Se [Sammenlign en scanning med modellen](topic:compare-scan-with-model).
- **Kulstof og omkostning.** Kulstofpanelet lægger indlejret kulstof sammen ud fra en faktortabel, du kan redigere. Omkostningspanelet fordeler priser over 4D-tidsplanen. Faktorerne, der følger med BimCraft, er generiske og markeret som ikke kontrolleret. Se [Indlejret kulstof og omkostning](topic:embodied-carbon-and-5d-cost).
- **Vilkårlig kortprojektion.** {{ui:Mål}} › {{ui:Koordinatsystem…}} tager et EPSG-nummer, en UTM-zone, et navn eller din egen projektionsdefinition. Se [Georeferér med en hvilken som helst projektion](topic:georeference-any-projection).

**Tegn og redigér**

- **Flyt, Justér og Fordel.** Under {{ui:Build}}. {{key:Shift+M}} starter Flyt (almindelig {{key:M}} er stadig Mål). Flyt kopierer undervejs med {{key:C}}, hvert trin er ét fortrydelsestrin, og det virker i en Live TeamWork-session. Se [Flyt, kopiér, justér og fordel](topic:move-align-distribute).
- **Billeder under planen.** {{ui:Build}} › {{ui:Billede}} placerer en PNG, JPEG eller WebP under en etages plan eller på et lodret plan. Sæt skalaen med to punkter, og flyt, drej, udtoning og lås den. Et område kopieret i MarkupCraft indsættes i sit arks skala. Se [Læg et billede under planen](topic:pictures-as-backgrounds).
- **Vægge fra en scanning.** Med en scanning åben kommer vægge, døre og rum som forslag, som du beholder eller afviser et for et, i ét fortrydelsestrin. Kun vægge i to vinkelrette retninger findes. Se [Lav vægge af en scanning](topic:scan-to-walls).
- **Optegn, penne og trappe fra en skitse.** {{ui:Optegn}} viser en anden etage stiplet under planen. {{ui:Penne}} giver vægge, døre og vinduer deres egen linjetykkelse i én visning. {{ui:Skitsér trappe}} gør en gangsti til en trappe. Et Wavefront OBJ-net åbnes. Se [Optegn en etage, penne og en trappe fra en skitse](topic:trace-pens-stairs-obj).
- **Bygninger omkring en adresse.** Bygningerne og matriklen, som CivilCraft's Adresse til sted fandt, kommer som forslag. Du sætter kryds ved dem, du vil tilføje. Se [Start fra CivilCraft's sted](topic:site-from-civilcraft).
- **Paneltegninger.** {{ui:Build}} › {{ui:Paneltegninger}} indrammer vægge, dæk og tage i træ eller letprofilstål og gemmer en tilskæringsliste som CSV og værkstedstegninger som PDF. Det er startværdier, ikke en konstruktionsberegning. Se [Paneltegninger](topic:panel-drawings).
- **Symbolpalette og planter.** {{ui:Build}} › {{ui:Symbolpalette}} finder el- og VVS-symboler efter navn. Kilden {{ui:Planter}} i {{ui:Bibliotek}} lister cirka 400 planter med plansymboler. Se [Symbolpalette](topic:symbol-palette) og [Placér en plante](topic:plant-list).

**Rør, kanaler og energi**

- **Split, VRF og fan coils.** Inde- og udeenheder med deres forbindelser, og ledningssæt dimensioneret ud fra en tabel med typiske eksempelværdier, som du kan ændre. Se [Split, VRF og fan coils](topic:split-vrf-fan-coils).
- **Beregninger.** Beregningspanelet kontrollerer forsyningsrør- og kanalstørrelser med trykfald, fører kabler gennem bakker og rør og viser deres fyldning. Det beregner også belysningsstyrke ud fra IES- eller EULUMDAT-filer. Standardværdier er mærket. Skriv værdierne fra din norm. Se [Rør-, kanal-, kabel- og lysberegninger](topic:mep-calculations).
- **PCF-filer.** Rørværktøjets **Eksportér PCF** skriver strækningerne til programmer for rørspænding og isometrier, og en PCF-fil, der læses tilbage, tegner sit rør. Se [Rørkomponentfiler](topic:piping-pcf).
- **Solcelle-PV.** Monter arrays på tage eller på jorden, skyg dem ud fra modellen, estimér årsenergien, kontrollér strenge og lav data til enlinjeskemaet. Startmodulet og tabene er generiske. Se [Solcelle-PV](topic:solar-pv).
- **EnergyPlus-fil.** Panelet Kontrollér med EnergyPlus skriver modellen som en IDF, der kan køres i din egen EnergyPlus. At køre den i browseren kræver en build, du selv hoster, og adressen, du skriver ind. BimCraft medbringer den ikke. Se [Kontrollér varme og køling med EnergyPlus](topic:check-with-energyplus).

**Billeder og filer**

- **Vælg render-motoren.** {{ui:Render}} har et valg {{ui:Motor}}. Vores to indbyggede motorer (Fast og Path tracer) forbliver standard. **Åbn i** gemmer scenen som en USD- eller glTF-fil, og en Unreal-projektmappe som en .zip. I CadCraft Studio kan en tilføjelse tilføje en motor. Unreal-pluginet, der åbner projektet, er ikke udgivet. Se [Vælg hvilket program der tegner billedet](topic:render-engines).
- **Studio-fortryd.** I CadCraft Studio fortæller BimCraft Studio hvert færdigt trin, så Studio kan fortryde dit sidste trin i det vindue, du brugte sidst. Se [Fortryd på tværs af programmer](topic:undo-across-apps).
- **Tilføjelser i din fil.** En IFC noterer, hvilke tilføjelser der skrev i den, og tilbyder dem, du mangler, når du åbner den. Se [Tilføjelser i din fil](topic:add-ons-in-your-file).

**I alle programmer**

- **Forbind din AI.** Din egen assistent kan styre BimCraft via Studios forbindelse og svare på spørgsmål om modellen, for eksempel hvilke rum der ligger under et givet areal. Studio har ingen egen AI. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder Ombrydning, 2 rækker eller 1 række. Ombrydning forbliver standard.
- **Inputenheder.** Trackpad-, pen-, 3D-mus-, controller- og MIDI-indstillinger deles af alle programmer.
- **Problemer og Live.** Advarselspanelet og Live-sessioner virker som før, og de nye kontroller ovenfor føder Problemer.
- **Sprog.** 54 sprog, ti af dem nye. Sprog andet end engelsk er maskinkladder, som endnu ikke er læst af en indfødt taler. Hjælpeemner er for det meste på engelsk.

### Rettet i 0.8.1

- **Bånd og layout for projektbrowser.** Indsæt › Importér CAD, Indsæt › Billede og Administrér › Projektenheder sagde »Ikke lavet i BimCraft endnu«. Billede åbner nu billedværktøjet. Importér CAD åbner {{ui:Build}} › {{ui:Fra en tegning…}} (DWG, DXF, PDF eller en scanning), og Projektenheder åbner {{ui:Indstillinger}} › {{ui:Global}} › {{ui:Enheder}}. Flyt og Justér kører flyt- og justeringsværktøjerne. Niveau åbner {{ui:Tilføj niveauer…}}, Faser åbner afsnittet Renoveringsfaser, og Materialer åbner materialebiblioteket.
- **DWG-klasseafsnit.** Det blev læst som den forkerte type. Det er rettet i BimCraft og de andre programmer, der læser DWG.
- **Sprog under kørsel.** Studio og de pakkede udgaver kan nu skifte sprog uden genstart. Det er ikke testet på alle platforme. Sig til, hvis sproget ikke skifter.
- **Archicad-bundtscript.** `archicad_bundle.py`, en separat download, finder nu Archicads sti, overvåger mappen i op til 20 sekunder og prøver igen ved siden af bundtet.

### Ikke i denne version endnu

- **Sikkerheds- og designhjælpemidler.** Personer i bygningen har ingen gangafstandsgrænse fra en bygningskode (du skriver grænsen), og den er ikke kontrolleret i hånden på en rigtig plan. Akustik-, livscyklus- og faretal er planlægningsværdier, ikke en normkontrol.
- **Klimafremtider og EnergyPlus.** Der er ingen indbyggede klimafremtider. Du kan indlæse en scenariefil til oversvømmelseskørslen. EnergyPlus-kørslen i browseren er ikke en del af denne udgivelse.
- **Båndlayout.** Materialemængder forbliver »Ikke lavet«, fordi BimCraft ikke har en materialemængdeliste. 54 andre nedtonede båndværktøjer har endnu ikke et BimCraft-værktøj bag sig.
- **Signering og platforme.** Windows-installationsprogrammer og macOS .dmg er usignerede, så SmartScreen viser {{ui:Flere oplysninger}}, derefter {{ui:Kør alligevel}}. macOS kræver højreklik og derefter {{ui:Åben}}. iPad- og iPhone-builden blev ikke bygget om til 0.8.1.
- **Tests på rigtige sider.** Nogle ældre BimCraft-browsertests fejler stadig på vores testside, som de gjorde før 0.8.1.

Alt andet står i [Hvad der ikke er lavet endnu](topic:not-built-yet). Tidligere ændringer står i [Nyheder i 0.7](topic:whats-new-0-7).

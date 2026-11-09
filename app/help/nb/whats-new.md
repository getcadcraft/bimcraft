---
title: Nytt i 0.8 og 0.8.1
summary: BimCraft legger til personer som går gjennom bygningen, romakustikk du kan høre, avspilling av flom, vind og jordskjelv, en femtiårig livssyklusvisning, kontroller mot en IDS, merkelapper og tabeller, Flytt, Juster og Fordel, bilder under planen, vegger fra en skanning, paneltegninger, sol, delte og VRF-systemer, dimensjonering av rør og kabel, betong- og seismiske kontroller, alle kartprojeksjoner, valg av renderingsmotor og angre i Studio; 0.8.1 retter de nedtonede verktøyene i båndoppsettet.
keywords: nytt, hva er nytt, utgivelsesnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, evakuering, personer, køer, akustikk, etterklang, impulsrespons, flom, vind, jordskjelv, fare, livssyklus, levetid, ids, merkelapper, tabeller, flytt, juster, fordel, bilde, bakgrunn, skanning til vegger, sted fra civilcraft, paneltegninger, rammeverk, sol, pv, delt, vrf, viftekonvektor, rørdimensjonering, kabelbro, belysningsstyrke, betong, seismisk, sammenlign skanning, epsg, projeksjon, dokumenter, mal, karbon, kostnad, energyplus, renderingsmotor, åpne i, usd, glb, unreal, angre, tillegg, pcf, symboler, planter, spor, penner, bånd, prosjektleser, layout
from: 87b03056
---

Dette er hva som endret seg i BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), sammenlignet med 0.7. BimCraft kan nå svare på spørsmål om en bygning og teste den, med personer, lyd, vann, vind og jordskjelv, og tegne den med flere verktøy; 0.8.1 er en feilrettingsutgave.

## Nytt

### Test bygningen

- **Personer i bygningen.** Seksjonen {{ui:Personer i bygningen}} i venstre panel fører en evakuering eller en vanlig dags ankomster gjennom rommene, dørene og trappene dine. Du ser køene der bygningen innsnevres, den lengste gangveien til en utgang fra hvert rom og hvor lang tid den siste personen bruker. Kryss av {{ui:Stengt}} på en dør for å se hva som endres, og kryss av {{ui:Vis personene i 3D-visningen}} for å se gjengerne. Funnene går til Problemer. Dette er en grov folkemodell for designbeslutninger, ikke et brannsikkerhetssertifikat. Se [Før personer gjennom bygningen](topic:people-in-the-building).
- **Romakustikk, og hør den.** Seksjonen {{ui:Romakustikk}} gir hvert roms etterklangstid per oktavbånd (Sabine og Eyring) ut fra størrelsen og overflatene du velger, og med et mål du selv setter sier den hvor mye absorpsjon som må til for å nå det. {{ui:Spill den i dette rommet}} spiller av en stemme, et klapp, plukkede toner eller din egen lydfil gjennom en impulsrespons beregnet for rommet. Absorpsjonsverdiene er typiske publiserte verdier som du kan erstatte. Se [Romakustikk](topic:room-acoustics).
- **Flom-, vind- og jordskjelvavspilling.** {{ui:Farefremvisning}} spiller av vann som stiger gjennom rommene, vindtrykk på hver etasje og et jordskjelv som rister etasjene, på en plan eller et oppriss med en tidsglidebryter. Enkle modeller med forutsetningene sine på panelet; ikke en kontroll mot norm. Se [Spill av en flom, vind eller et jordskjelv](topic:hazard-playback).
- **Hva som slites på femti år.** {{ui:Livssyklusvisning}} lister vinduer, dører, overflater og tak med en levetid hver, årene de skiftes ut, og når du skriver inn en kostnad per enhet, kostnaden per år og nåverdien. {{ui:Lagre planen (CSV)}} skriver den ut. Levetidene er planleggingsverdier. Se [Se hva som slites over femti år](topic:life-cycle-view).
- **Betong- og seismiske kontroller.** Blokkene {{ui:Betongstaver}} og {{ui:Seismiske laster}} under fanen {{ui:Analyse}} kontrollerer betongbjelker og -søyler mot ACI 318-19 og lager ekvivalente horisontale krefter etter ASCE 7-22 på stive dekker, med etasjeforskyvning. For en ingeniør å kontrollere. Se [Kontroller betongstaver og lag seismiske laster](topic:concrete-and-seismic).

### Kontroller og rapporter

- **Kontroller mot en IDS.** Last inn `.ids`-filen en kunde ga deg, og se hvert element som ikke oppfyller den, i Problemer, før du leverer IFC-filen. Åpne {{ui:Kontroller mot en IDS}} under {{ui:Modellkontroller}}. Se [Kontroller en modell mot en kundes IDS](topic:check-against-ids).
- **Merkelapper og tabeller.** Definer egne merkelapper, sett dem på mange elementer samtidig, og lag tabeller der kolonner, filtre og grupper leser dem; merkelappene lagres i IFC-filen. Se [Merkelapper og tabeller](topic:tags-and-schedules).
- **Dokumenter fra modellen.** {{ui:Dokumenter fra modellen}} fyller en spesifikasjonsmal fra den åpne IFC-filen og lagrer den som PDF, Word-dokument eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).
- **Sammenlign en skanning med modellen.** Med en punktsky åpen vurderer {{ui:Sammenlign}} hvert element som bygget, delvis bygget, manglende eller ikke nådd, og viser prosent bygget. Se [Sammenlign en skanning med modellen](topic:compare-scan-with-model).
- **Karbon og kostnad.** Karbonpanelet summerer innebygd karbon fra en faktortabell du kan redigere, og kostnadspanelet fordeler priser over 4D-planen. Faktorene som følger med BimCraft, er generiske og merket som ikke kontrollert. Se [Innebygd karbon og kostnad](topic:embodied-carbon-and-5d-cost).
- **Enhver kartprojeksjon.** {{ui:Mål}} › {{ui:Koordinatsystem…}} tar et EPSG-nummer, en UTM-sone, et navn eller din egen projeksjonsdefinisjon. Se [Georefer med enhver projeksjon](topic:georeference-any-projection).

### Tegn og rediger

- **Flytt, Juster og Fordel.** Under {{ui:Bygg}}; {{key:Shift+M}} starter Flytt (vanlig {{key:M}} er fortsatt Mål). Flytt kopierer mens du går med {{key:C}}, hvert steg er ett angre-trinn, og det følger med i en Live TeamWork-økt. Se [Flytt, kopier, juster og fordel](topic:move-align-distribute).
- **Bilder under planen.** {{ui:Bygg}} › {{ui:Bilde}} plasserer en PNG-, JPEG- eller WebP-fil under en etasjes plan eller på et vertikalt plan. Sett målestokken med to punkter, og flytt, roter, dimmer og lås den. Et område kopiert i MarkupCraft limes inn i arkets målestokk. Se [Legg et bilde under planen](topic:pictures-as-backgrounds).
- **Vegger fra en skanning.** Med en skanning åpen kommer vegger, dører og rom som forslag, som du beholder eller forkaster ett for ett, i ett angre-trinn. Bare vegger i to vinkelrette retninger finnes. Se [Gjør en skanning om til vegger](topic:scan-to-walls).
- **Spor, penner og skisse-trapp.** {{ui:Spor}} viser en annen etasje stiplet under planen, {{ui:Penner}} gir vegger, dører og vinduer egen linjevekt i én visning, og {{ui:Skisser trapp}} gjør en gangstreg om til en trapp. En Wavefront OBJ-nettverksmodell åpnes. Se [Spor en etasje, penner og en trapp fra en skisse](topic:trace-pens-stairs-obj).
- **Bygninger rundt en adresse.** Bygningene og eiendommen som CivilCrafts Adresse til tomt fant, kommer som forslag; du krysser av for dem du vil legge til. Se [Start fra CivilCrafts tomt](topic:site-from-civilcraft).
- **Paneltegninger.** {{ui:Bygg}} › {{ui:Paneltegninger}} rammer inn vegger, dekker og tak i tre eller lettstål og lagrer en kappeliste som CSV og verkstedtegninger som PDF. Startverdier, ikke en konstruksjonsprosjektering. Se [Paneltegninger](topic:panel-drawings).
- **Symbolpalett og planter.** {{ui:Bygg}} › {{ui:Symbolpalett}} finner elektriske og sanitære symboler etter navn; kilden {{ui:Planter}} under {{ui:Bibliotek}} lister omtrent 400 planter med plansymboler. Se [Symbolpalett](topic:symbol-palette) og [Plasser en plante](topic:plant-list).

### Rør, kanaler og energi

- **Delt, VRF og viftekonvektorer.** Innendørs- og utendørsenheter med tilkoblingene deres, og rørsett dimensjonert fra en tabell med typiske eksempelverdier som du kan endre. Se [Delt, VRF og viftekonvektorer](topic:split-vrf-fan-coils).
- **Beregninger.** Beregningspanelet kontrollerer dimensjoner på forsynings-rør og -kanaler med trykkfall, legger kabler gjennom kabelbaner og rør og viser deres fylling, og regner ut belysningsstyrke fra IES- eller EULUMDAT-filer. Standardverdier er merket; skriv inn verdiene fra din norm. Se [Rør-, kanal-, kabel- og lysberegninger](topic:mep-calculations).
- **PCF-filer.** Rørverktøyets **Eksporter PCF** skriver ut løpene for program for rørspenning og isometri, og en PCF-fil som leses tilbake, tegner røret sitt. Se [Rørkomponentfiler](topic:piping-pcf).
- **Solcelle-PV.** Monter rekker på tak eller bakken, skyggelegg dem fra modellen, anslå årlig energi, kontroller strenger og lag data for enlinjediagram. Startmodulen og tapene er generiske. Se [Solcelle-PV](topic:solar-pv).
- **EnergyPlus-fil.** Panelet Kontroller med EnergyPlus skriver modellen som en IDF-fil som du kan kjøre i din egen EnergyPlus. Å kjøre den i nettleseren krever en bygg du selv er vert for, og adressen skriver du inn selv; BimCraft har ikke den med. Se [Kontroller oppvarming og kjøling med EnergyPlus](topic:check-with-energyplus).

### Bilder og filer

- **Velg renderingsmotor.** {{ui:Render}} har et valg {{ui:Motor}}. Våre to innebygde motorer (Fast og Path tracer) forblir standard. **Åpne i** lagrer scenen som en USD- eller glTF-fil, og en Unreal-prosjektmappe som en .zip; i CadCraft Studio kan et tillegg legge til en motor. Unreal-tillegget som åpner prosjektet, er ikke utgitt. Se [Velg hvilket program som tegner bildet](topic:render-engines).
- **Angre i Studio.** Inne i CadCraft Studio forteller BimCraft Studio om hvert ferdig steg, slik at Studio kan angre det siste steget ditt i vinduet du brukte sist. Se [Angre på tvers av apper](topic:undo-across-apps).
- **Tillegg i filen din.** En IFC-fil registrerer hvilke tillegg som skrev inn i den, og tilbyr dem du mangler når du åpner den. Se [Tillegg i filen din](topic:add-ons-in-your-file).

### I hver app

- **Koble til din KI.** Din egen assistent kan styre BimCraft gjennom Studios tilkobling og svare på spørsmål om modellen, for eksempel hvilke rom som ligger under et gitt areal. Studio har ingen egen KI. Se [La en KI-assistent arbeide med modellen din](topic:assistants).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr Bryt, 2 rader eller 1 rad; Bryt er fortsatt standard.
- **Inndataenheter.** Styreflate, penn, 3D-mus, kontroller og MIDI-innstillinger deles av alle appene.
- **Problemer og Live.** Advarselspanelet og Live-økter fungerer som før, med de nye kontrollene over som mater Problemer.
- **Språk.** 54 språk, ti av dem nye. De som ikke er engelske, er maskinutkast som ingen morsmålsbruker har lest ennå; hjelpeemnene er stort sett på engelsk.

## Rettet i 0.8.1

- **Oppsett med bånd og prosjektleser.** Sett inn › Importer CAD, Sett inn › Bilde og Administrer › Prosjektenheter sa «ikke bygget i BimCraft ennå». Bilde åpner nå Bilde-verktøyet, Importer CAD åpner {{ui:Bygg}} › {{ui:Fra en tegning…}} (DWG, DXF, PDF eller en skanning), og Prosjektenheter åpner {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Enheter}}. Flytt og Juster kjører Flytt- og Juster-verktøyene, Nivå åpner {{ui:Legg til nivåer…}}, Faser åpner seksjonen for renoveringsfaser, og Materialer åpner materialbiblioteket.
- **DWG-klasseseksjon.** Den ble lest som feil type; rettet i BimCraft og de andre appene som leser DWG.
- **Språk under kjøring.** Studio og de pakkede utgavene kan nå bytte språk uten omstart. Dette er ennå ikke testet på alle plattformer; gi oss beskjed hvis språket ikke endres.
- **Archicad-bundle-skript.** `archicad_bundle.py`, en egen nedlasting, finner nå Archicads sti, overvåker mappen i opptil 20 sekunder og prøver på nytt ved siden av pakken.

## Ikke i denne versjonen ennå

- **Sikkerhets- og designhjelpemidler.** Personer i bygningen har ingen grense for gangavstand fra en bygningsnorm (du skriver inn grensen selv), og er ikke kontrollert for hånd på en ekte plan. Akustikk-, livssyklus- og faretallene er planleggingsverdier, ikke en kontroll mot norm.
- **Klimafremtider og EnergyPlus.** Ingen innebygde klimafremtider: du kan laste en scenariofil for flomkjøringen. EnergyPlus-kjøringen i nettleseren er ikke en del av denne utgaven.
- **Båndoppsett.** Mengdeuttak for materialer står fortsatt som «Ikke bygget», fordi BimCraft ikke har en materialmengdeliste, og 54 andre nedtonede båndverktøy har ingen BimCraft-verktøy bak seg ennå.
- **Signering og plattformer.** Windows-installasjonsprogrammene og macOS .dmg-filen er usignerte, så SmartScreen viser {{ui:Mer informasjon}}, deretter {{ui:Kjør likevel}}, og macOS krever høyreklikk og deretter {{ui:Åpen}}. iPad- og iPhone-bygget ble ikke bygget på nytt for 0.8.1.
- **Tester på ekte sider.** Noen eldre nettleser-tester for BimCraft feiler fortsatt på testsiden vår, slik de gjorde før 0.8.1.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet). Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).

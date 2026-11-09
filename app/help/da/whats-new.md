---
title: Nyheder i 0.8 og 0.8.1
summary: BimCraft tilføjer personer, der går gennem bygningen, rumakustik du kan høre, afspilning af oversvømmelse, vind og jordskælv, en livscyklusvisning over halvtreds år, kontrol mod en IDS, tags og lister, Flyt, Justér og Fordel, billeder under planen, vægge fra en scanning, paneltegninger, sol, split- og VRF-systemer, rør- og kabeldimensionering, beton- og seismiske kontroller, enhver kortprojektion, valg af renderingsmotor og Studio-fortryd; 0.8.1 retter de nedtonede værktøjer i båndlayoutet.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, ændringer, 0.8, 0.8.1, version, nye funktioner, evakuering, personer, køer, akustik, efterklang, impulsrespons, oversvømmelse, vind, jordskælv, fare, livscyklus, levetid, ids, tags, lister, flyt, justér, fordel, billede, baggrund, scanning til vægge, grund fra civilcraft, paneltegninger, rammeværk, sol, pv, split, vrf, fan coil, rørdimensionering, kabelbakke, belysningsstyrke, beton, seismisk, sammenlign scanning, epsg, projektion, dokumenter, skabelon, kulstof, omkostning, energyplus, renderingsmotor, åbn i, usd, glb, unreal, fortryd, add-ons, pcf, symboler, planter, optegn, penne, båndet, projektbrowser, layout
from: 87b03056
---

Dette er hvad der ændrede sig i BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02) sammenlignet med 0.7. BimCraft kan nu svare på spørgsmål om en bygning og teste den med personer, lyd, vand, vind og jordskælv, og tegne den med flere værktøjer; 0.8.1 er en fejlretning.

## Nyt

### Test bygningen

- **Personer i bygningen.** Afsnittet {{ui:Personer i bygningen}} i venstre panel fører en evakuering eller en normal dags ankomster gennem dine rum, døre og trapper. Du ser køerne, hvor bygningen smalner, den længste gang til en udgang fra hvert rum, og hvor lang tid den sidste person bruger. Sæt flueben i {{ui:Lukket}} ved en dør for at se, hvad der ændrer sig, og sæt flueben i {{ui:Vis personerne i 3D-visningen}} for at se de gående. Fundene går til problemer. Det er en grov menneskemodel til designbeslutninger, ikke et brandsikkerhedscertifikat. Se [Før personer gennem bygningen](topic:people-in-the-building).
- **Rumakustik, og hør den.** Afsnittet {{ui:Rumakustik}} giver hvert rums efterklangstid pr. oktavbånd (Sabine og Eyring) ud fra dets størrelse og de overflader, du vælger. Med et mål, du selv har sat, siger det, hvor meget absorption der skal til for at nå det. {{ui:Afspil den i dette rum}} afspiller en stemme, et klap, plukkede toner eller din egen lydfil gennem en impulsrespons beregnet for rummet. Absorptionstallene er typiske, publicerede værdier, som du kan erstatte. Se [Rumakustik](topic:room-acoustics).
- **Oversvømmelse, vind og jordskælv som afspilning.** {{ui:Afspilning af fare}} afspiller vand, der stiger gennem rummene, vindtryk på hver etage og et jordskælv, der rokker etagerne, på en plan eller en facade med en tidsskyder. Simple modeller vises med deres antagelser på panelet; det er ikke en normkontrol. Se [Afspil en oversvømmelse, vind eller et jordskælv](topic:hazard-playback).
- **Hvad der slides op på halvtreds år.** {{ui:Livscyklusvisning}} viser vinduer, døre, overflader og tag med en levetid hver, årene de udskiftes, og når du skriver en pris pr. enhed, omkostningen pr. år og dens nutidsværdi. {{ui:Gem planen (CSV)}} skriver den ud. Levetiderne er planlægningstal. Se [Se hvad der slides op over halvtreds år](topic:life-cycle-view).
- **Beton- og seismiske kontroller.** Blokkene {{ui:Betonelementer}} og {{ui:Jordskælvslaster}} på fanen {{ui:Analyse}} kontrollerer betonbjælker og -søjler efter ACI 318-19 og beregner ækvivalente sidelastkræfter efter ASCE 7-22 på stive dæk, med etagedrift. Det er til en ingeniør at kontrollere. Se [Kontrollér betonelementer og lav seismiske laster](topic:concrete-and-seismic).

### Kontroller og rapportér

- **Kontrol mod en IDS.** Indlæs den `.ids`-fil, en kunde gav dig, og se hvert element, der ikke opfylder den, under problemer, før du leverer IFC-filen. Åbn {{ui:Kontrollér mod en IDS}} under {{ui:Modelkontrol}}. Se [Kontrollér en model mod en kundes IDS](topic:check-against-ids).
- **Tags og lister.** Definer dine egne tags, sæt dem på mange elementer på én gang, og lav lister, hvis kolonner, filtre og grupper læser dem. Tags gemmes i IFC-filen. Se [Tags og lister](topic:tags-and-schedules).
- **Dokumenter fra modellen.** {{ui:Dokumenter fra modellen}} udfylder en specifikationsskabelon fra den åbne IFC og gemmer den som PDF, Word-dokument eller Markdown. Se [Dokumenter fra modellen](topic:documents-from-the-model).
- **Sammenlign en scanning med modellen.** Med en punktsky åben vurderer {{ui:Sammenlign}} hvert element som bygget, delvist bygget, manglende eller ikke nået og viser procent bygget. Se [Sammenlign en scanning med modellen](topic:compare-scan-with-model).
- **Kulstof og omkostning.** Panelet Kulstof lægger indlejret kulstof sammen ud fra en faktortabel, du kan redigere, og panelet Omkostning fordeler priser over 4D-tidsplanen. Faktorerne, der følger med BimCraft, er generiske og markeret som ikke kontrolleret. Se [Indlejret kulstof og omkostning](topic:embodied-carbon-and-5d-cost).
- **Enhver kortprojektion.** {{ui:Mål}} › {{ui:Koordinatsystem…}} tager et EPSG-nummer, en UTM-zone, et navn eller din egen projektionsdefinition. Se [Georeferér med enhver projektion](topic:georeference-any-projection).

### Tegn og rediger

- **Flyt, Justér og Fordel.** Under {{ui:Build}}; {{key:Shift+M}} starter Flyt (almindelig {{key:M}} er stadig Mål). Flyt kopierer undervejs med {{key:C}}, hvert trin er ét fortryd, og det rejser med i en Live TeamWork-session. Se [Flyt, kopiér, justér og fordel](topic:move-align-distribute).
- **Billeder under planen.** {{ui:Build}} › {{ui:Billede}} placerer en PNG, JPEG eller WebP under en etages plan eller på et lodret plan. Sæt målestokken med to punkter, og flyt, drej, udtone og lås billedet. Et område kopieret i MarkupCraft indsættes i sit arks målestok. Se [Læg et billede under planen](topic:pictures-as-backgrounds).
- **Vægge fra en scanning.** Med en scanning åben kommer vægge, døre og rum som forslag, som du beholder eller forkaster et ad gangen, i ét fortryd-trin. Kun vægge i to vinkelrette retninger findes. Se [Omdan en scanning til vægge](topic:scan-to-walls).
- **Optegn, penne og skitseret trappe.** {{ui:Optegn}} viser en anden etage stiplet under planen, {{ui:Penne}} giver vægge, døre og vinduer deres egen linjetykkelse i én visning, og {{ui:Skitsér trappe}} gør en gålinje til en trappe. Et Wavefront OBJ-net åbnes. Se [Optegn en etage, penne og en trappe fra en skitse](topic:trace-pens-stairs-obj).
- **Bygninger omkring en adresse.** Bygningerne og matriklen, som CivilCraft's Address to site fandt, kommer som forslag. Du sætter flueben ved dem, du vil tilføje. Se [Start fra CivilCraft's grund](topic:site-from-civilcraft).
- **Paneltegninger.** {{ui:Build}} › {{ui:Paneltegninger}} indrammer vægge, dæk og tage i træ eller let stål og gemmer en tilskæringsliste som CSV og værkstedstegninger som PDF. Det er startværdier, ikke en konstruktionsberegning. Se [Paneltegninger](topic:panel-drawings).
- **Symbolpalette og planter.** {{ui:Build}} › {{ui:Symbolpalette}} finder el- og VVS-symboler efter navn. Kilden {{ui:Planter}} i {{ui:Bibliotek}} lister omkring 400 planter med plansymboler. Se [Symbolpalette](topic:symbol-palette) og [Placér en plante](topic:plant-list).

### Rør, kanaler og energi

- **Split, VRF og fan coils.** Indendørs- og udendørsenheder med deres tilslutninger, og linjesæt dimensioneret ud fra en tabel med typiske eksempelværdier, som du kan ændre. Se [Split, VRF og fan coils](topic:split-vrf-fan-coils).
- **Beregninger.** Panelet Beregninger kontrollerer dimensioner på forsyningsrør og kanaler med trykfald, fører kabler gennem kabelbakker og rør og viser deres fyldning, og beregner belysningsstyrke ud fra IES- eller EULUMDAT-filer. Standardværdier er mærket; skriv værdierne fra din egen norm. Se [Rør-, kanal-, kabel- og lysberegninger](topic:mep-calculations).
- **PCF-filer.** Rørværktøjets **Eksportér PCF** skriver rørforløbene til programmer for rørspænding og isometri, og en PCF-fil, der læses tilbage, tegner sit rør. Se [Rørkomponentfiler](topic:piping-pcf).
- **Solenergi (PV).** Monter arrays på tage eller på jorden, skyg dem ud fra modellen, anslå årlig energi, kontrollér strenge og lav data til et enlinjediagram. Startmodulet og tabene er generiske. Se [Solenergi (PV)](topic:solar-pv).
- **EnergyPlus-fil.** Panelet Kontrollér med EnergyPlus skriver modellen som en IDF, der kan køres i din egen EnergyPlus. Kørsel i browseren kræver en build, du selv driver, og adressen til den skriver du selv. BimCraft medfølger den ikke. Se [Kontrollér varme og køling med EnergyPlus](topic:check-with-energyplus).

### Billeder og filer

- **Vælg renderingsmotor.** {{ui:Render}} har et valg {{ui:Motor}}. Vores to indbyggede motorer (Fast og Path tracer) forbliver standard. {{ui:Åbn i}} gemmer scenen som en USD- eller glTF-fil, og en Unreal-projektmappe som en .zip. I CadCraft Studio kan et add-on tilføje en motor. Unreal-pluginet, der åbner projektet, er ikke udgivet. Se [Vælg hvilket program der tegner billedet](topic:render-engines).
- **Studio-fortryd.** Inde i CadCraft Studio fortæller BimCraft Studio hvert færdigt trin, så Studio kan fortryde dit sidste trin i det vindue, du sidst brugte. Se [Fortryd på tværs af apps](topic:undo-across-apps).
- **Add-ons i din fil.** En IFC noterer, hvilke add-ons der har skrevet i den, og tilbyder dem, du mangler, når du åbner den. Se [Add-ons i din fil](topic:add-ons-in-your-file).

### I alle apps

- **Tilslut din AI.** Din egen assistent kan styre BimCraft gennem Studios forbindelse og besvare spørgsmål om modellen, for eksempel hvilke rum der ligger under et givet areal. Studio har ingen egen AI. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder Bryd om, 2 rækker eller 1 række. Bryd om forbliver standard.
- **Inputenheder.** Indstillinger for trackpad, pen, 3D-mus, controller og MIDI deles af alle apps.
- **Problemer og Live.** Advarselspanelet og Live-sessioner fungerer som før, og de nye kontroller ovenfor leverer data til problemer.
- **Sprog.** 54 sprog, ti af dem nye. Sprogene ud over engelsk er maskinkladder, som endnu ikke er læst af en indfødt taler. Emnerne i hjælpen er for det meste på engelsk.

## Rettet i 0.8.1

- **Båndet + Projektbrowser-layout.** Indsæt › Importér CAD, Indsæt › Billede og Administrér › Projektenheder sagde »Ikke lavet i BimCraft endnu«. Billede åbner nu værktøjet Billede, Importér CAD åbner {{ui:Build}} › {{ui:Fra en tegning…}} (DWG, DXF, PDF eller en scanning), og Projektenheder åbner {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Enheder}}. Flyt og Justér kører værktøjerne Flyt og Justér, Niveau åbner {{ui:Tilføj niveauer…}}, Faser åbner afsnittet om renoveringsfaser, og Materialer åbner materialebiblioteket.
- **DWG-klassesektionen.** Den blev læst som den forkerte type. Det er rettet i BimCraft og de andre apps, der læser DWG.
- **Sprog under kørsel.** Studio og de pakkede udgaver kan nu skifte sprog uden genstart. Dette er ikke endnu testet på alle platforme. Giv os besked, hvis sproget ikke skifter.
- **Archicad-bundle-script.** `archicad_bundle.py`, en separat download, finder nu Archicads sti, overvåger mappen i op til 20 sekunder og prøver igen ved siden af bundlen.

## Ikke i denne version endnu

- **Sikkerheds- og designhjælpemidler.** Personer i bygningen har ingen grænse for gangafstand fra en bygningskode (du skriver selv grænsen), og den er ikke kontrolleret i hånden på en rigtig plan. Akustik-, livscyklus- og faretal er planlægningsværdier, ikke en normkontrol.
- **Klimafremtider og EnergyPlus.** Der er ingen indbyggede klimafremtider: du kan indlæse en scenariofil til oversvømmelseskørslen. EnergyPlus-kørslen i browseren er ikke en del af denne udgivelse.
- **Båndlayout.** Mængdeudtræk for materialer forbliver »Ikke lavet«, fordi BimCraft ikke har en materialemængdeliste, og 54 andre nedtonede båndværktøjer har endnu ikke et BimCraft-værktøj bag sig.
- **Signering og platforme.** Windows-installationsprogrammer og macOS .dmg er usignerede, så SmartScreen viser {{ui:Flere oplysninger}}, derefter {{ui:Kør alligevel}}, og macOS kræver højreklik og derefter {{ui:Åben}}. iPad- og iPhone-builden blev ikke genbygget til 0.8.1.
- **Test på rigtige sider.** Nogle ældre BimCraft-browsertests fejler stadig på vores testside, ligesom før 0.8.1.

Alt andet findes i [Hvad der ikke er lavet endnu](topic:not-built-yet). Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).

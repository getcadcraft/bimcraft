---
title: Wat is nuut in 0.9
summary: Muurvorms, splits, verskuiwing, rek en slot-aan-rooster, vlakke onder grond, roosterafmetings en Meet op die plan, duplikaataansigte met werkstyle en penntabelle, Rapporteer as, Collada- en Google Earth-uitvoer, Skandeer na BIM, wind- en seismiese ontleding, harsdruk-byvoegings.
keywords: wat is nuut, 0.9, vrystellingsnotas, muurvorms, reghoek, veelhoek, boog, lyne kies, spoor omtrek, verskuiwing, verbind, boksrek, belyn en sluit, muur splits, gaping, heranker, slot aan rooster, groei vanaf, meet vanaf, voeg 'n vlak onder by, kelder, vlak-opdrag, roosterafmetings, meet op die plan, werkstyl, dupliseer aansig, eie kopie, gekoppelde aansig, penntabel, druk soos gewys, rapporteer as, tik 'n skaal, voer svg in, plaas in plan, plaas in model, collada, dae, kmz, google earth, skandeer na bim, windlas, seismies, eindige element, dokumentepaneel, harsdruk, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, ontruiming, mense, toue, akoestiek, nagalm, impulsrespons, vloed, wind, aardbewing, gevaar, lewensiklus, diensleeftyd, ids, etikette, skedules, skuif, belyn, versprei, prent, agtergrond, skandeer na mure, terrein van civilcraft, paneeltekeninge, raamwerk, sonkrag, pv, splits, vrf, waaiereenheid, pyp dimensionering, kabelbak, verligting, beton, seismies, vergelyk skandeer, epsg, projeksie, dokumente, sjabloon, koolstof, koste, energyplus, weergee-enjin, oopmaak in, usd, glb, unreal, ontdoen, byvoegings, pcf, simbole, plante, spoor, penne, lint, projekblaaier, uitleg
from: 5624fe88
---

Dit is wat in BimCraft 0.9 verander het, vergeleke met 0.8.1. Die twee groot temas is 'n regte muurgereedskap en aansigte wat optree soos mense uit die groot BIM-programme verwag. Daarrond kom CoLLADA-uitvoer, assistente wat elektriese toestelle kan plaas, Skandeer na BIM, en wind-, seismiese en eindige-element-werk in die **Ontleding**-oortjie.

## Nuut

### Mure

- **Teken hele vorms.** In {{ui:Draw}}, maak {{ui:Shapes}} oop (of kies 'n vorm in die Vorm-lys van die Muur-ry) vir 'n reghoek, 'n geroteerde reghoek, 'n veelhoek van 3 tot 64 sye, 'n boog volgens middelpunt, 'n raakboog, mure op gekose lyne, of mure rondom 'n geslote gebied waarbinne jy klik. 'n Reghoek is vier mure met vier verbonde hoeke en een ontdoen-stap. Sien [Muurvorms, splits, verskuiwing, rek en slot](topic:wall-tools).
- **Stel voor jy teken, verander daarna.** Die Muur-ry het {{ui:Offset}} en {{ui:Join}} (haal die merkie uit om vrystaande mure te teken). Gebruik daarna {{ui:Offset}}, {{ui:Box stretch}} en {{ui:Align and lock}} op getekende mure. 'n Geskuifde of gerekte muur hou sy deure, vensters en maatte. Elke resep is een ontdoen-stap.
- **Sny mure.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} en {{ui:Rejoin}} sny 'n muur met een klik of waar 'n ander muur dit kruis. 'n Snit deur 'n deur word geweier. Sien [Muurvorms, splits, verskuiwing, rek en slot](topic:wall-tools).
- **Sluit mure aan roosterlyne vas.** Kies 'n muur langs 'n roosterlyn en tik {{ui:Lock to grid}} in {{ui:Properties}} aan. Met die Rooster-gereedskap aan, tik 'n afstand in {{ui:Move by}} vir 'n gekose lyn, en die gesluite mure volg in een ontdoen-stap.
- **Vorm een muur.** In {{ui:Properties}} van een muur kan jy sy bo- of basis aan 'n dak, vloer of plafon heg, sy hoogteomtrek wysig, dit laat hel, of 'n muuropening sonder deur of venster sny. Sien [Muurvorm](topic:wall-shape).
- **Lengte wys watter kant vashou.** {{ui:Grow from}} stel in of die begin, die einde of die middelpunt vas bly wanneer jy die lengte verander.
- **Lengte en die plan se maat stem ooreen.** {{ui:Measure from}} (middellyn, binnevlak of buitevlak) dryf sowel die Lengte-veld as die muurmate op die plan. Dit begin op die middellyn, so die muurmate op die plan lees nou die middellyn waar hulle vroeër die buitevlak gelees het. Verander dit in die Muur-ry, in {{ui:Properties}} of in {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Vlakke, roosters en meet

- **Voeg 'n vlak onder by.** {{ui:Add a level below}} in die paneel {{ui:Levels}} voeg 'n vlak onder die laagste een by, net so hoog, op 'n negatiewe hoogte (Vlak -1, Vlak -2). Niks anders skuif nie. {{ui:Add levels…}} aanvaar nou negatiewe hoogtes. As jy LEVEL, LEVELS, STOREY of STOREYS op die opdragreël tik, maak {{ui:Add levels…}} oop, en daar is 'n {{ui:Levels}}-knoppie in die kieslyste en lintoortjies. Sien [Terreine, geboue en vlakke](topic:site-building-and-levels).
- **Roosterafmetings op die plan.** Met die {{ui:Grid}}-gereedskap aan, tik {{ui:Dimensions}} aan om die afstand tussen buurlyne en die algehele grootte verby die klokkies op elke vlak se plan te teken. Sien [Dimensioneer 'n rooster](topic:grid-dimensions).
- **Meet op die plan.** {{ui:Measure}} in die {{ui:Draw}}-groep gee 'n afstand met die X- en Y-verskille tussen twee kliks. Niks word in die model gestoor nie. Sien [Meet op die plan](topic:measure-on-the-plan).
- **Verander verskeie kolomme tegelyk.** Kies kolomme saam met 'n muur, en die keuse lys elke soort met {{ui:Keep only these}}. Een klik hou die kolomme en wys hul gedeelde velde.
- **Een weergave-eenheid oral.** Koördinate, metings, snitte, blad-skale, die raamoortjie se laste en resultate en die Probleme-teks volg die eenheid wat jy kies. Uitvoere bly SI.

### Aansigte, blaaie en druk

- **Werkstyl.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} kies tussen elke aansig met sy eie aantekeninge en penntabelle, of dat dit gedeel word. Sien [Werkstyl, gedupliseerde aansigte, penne op papier, Rapporteer as en sjablone](topic:working-style).
- **Dupliseer 'n aansig.** Planne, plafonplanne, uitroepe, aansigte en snitte kan as {{ui:Own copy}} of {{ui:Linked}} gedupliseer word; {{ui:Make own copy}} maak 'n gekoppelde een onafhanklik. Sien [Werkstyl, gedupliseerde aansigte, penne op papier, Rapporteer as en sjablone](topic:working-style).
- **Druk soos gewys, of deur 'n penntabel.** Penoorskrywings word saam met die aansig in die IFC bewaar, en blaaie en PDF's teken hulle soos die skerm. Dieselfde onderwerp dek penntabelle.
- **Rapporteer as.** {{ui:Report as}} in {{ui:Properties}} skryf 'n plaat wat as pad geteken is, 'n muur as paneel of 'n dak as hellingbaan na die IFC as die klas wat jy kies, en tel dit so in skedules, Hoeveelhede, Soek, Kleur volgens en Probleme.
- **Wysig in aansigte en snitte.** Teken en beweeg mure, openinge, vlakke, maate en notas reg in 'n aansig of snit, met jou eie bladgroottes en titelblaaie. Sien [Wysig in aansigte en snitte](topic:edit-in-elevations).
- **Blaaie.** Elke blad kan staande of lêende wees. 'n Kassie **Tik 'n skaal** staan langs die skaallys op elke geplaasde aansig (1:64, 2:1, 1/4" = 1'). Jy kan 'n geplaasde tekening sleep of met die pylsleutels aanskuif, en {{ui:Formats…}} › {{ui:Import SVG…}} maak jou eie bladontwerp 'n titelblad met velde wat per blad getik word.
- **Biblioteekkrediete op 'n blad.** 'n Tekenstel met Biblioteek-items kry 'n skedule van Biblioteekkrediete wat jy op enige blad kan plaas. Sien [Biblioteekkrediete](topic:library-credits).

### Biblioteek: plaas

- **Plasing volg die aansig.** In die Plan-aansig wys die Biblioteek {{ui:Place in plan}}; in 3D wys dit {{ui:Place in model}}; in Verdeel wys dit 'n verdeelknoppie met {{ui:Place in plan}} as die hoofaksie. Albei maniere skryf dieselfde IFC-element. Jy kan ook 'n Biblioteek-kaart na die plan of die 3D-aansig sleep; met 'n pen of vinger, druk en hou, sleep dan. Sien [Plaas uit die Biblioteek](topic:place-from-library).

### Lêers en assistente

- **Collada en Google Earth.** {{ui:Collada}} op die werkbalk (Lêer-kieslys in die kieslysstyle) skryf 'n .dae, of 'n .kmz wat op die kaart geplaas word waar die model is. Sien [Voer die model uit as Collada of vir Google Earth](topic:collada).
- **Assistente kan elektriese toestelle plaas.** Jou gekoppelde assistent het nuwe gereedskap om toestelle by te voeg, te lys, te verander en te skrap, en om ligte te stel. Assistente bly af totdat jy hulle in {{ui:Settings}} aanskakel. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Skandeer na BIM (byvoeging).** Standaard af en benodig die Puntwolke-byvoeging. Dit stel vloere, mure, deure en vensters uit 'n skandering voor met die gemete afwyking vir elkeen; aanvaar is een ontdoen-stap.

### Ontleding

- **Wind- en seismiese terreindata.** In die {{ui:Analysis}}-oortjie: windlaste volgens ASCE 7-10 of 7-16 vir 'n stywe ingeslote gebou, met 'n krag op elke vloer as lasgevalle, en seismiese terreindata met 'n USGS-soektog en die ontwerpspektrum.
- **Strukturele opvolging en eindige elemente.** Betonkontroles volgens ACI 318-19, gelykwaardige laterale kragte volgens ASCE 7-22, verdieping-drywing, vloere en mure as plate, en lastkombinasies uit ASCE 7 en EN 1990. Ons eie eindige-element-enjin doen skille, tetraëders en modale ontleding. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic) en [Raamontleding](topic:frame-analysis).

### Ander byvoegings en dokumente

- **Binneverligting (byvoeging).** Plaas ligarmatuur en skryf die lux as getalle in elke vlak se plan, met 'n skitterskatting en 'n druobare verslag.
- **Dokumentepaneel.** {{ui:File}} › {{ui:Documents…}} het uitcheck en inchecking met 'n slotlêer, hersieningsletters, vrystellingstoestande en geskiedenis.
- **Streke en staal.** Suid-Afrikaanse tekening- en bouregulasiepakkette in die Regulasies-byvoeging, en 976 Britse staalgroottes in die gedeelde profieltabel.
- **Gratis harsdruk-byvoegings.** Snyer, steunings en vlot, blootstellingstoets, en die GOO-, SL1-, Chitubox- en Anycubic-lêerformate, almal standaard af.

## In elke program

- As jy oor 'n knoppie of kontrole hou, wys 'n Bootstrap-wenk.
- Die beginwenk op 'n leë tekenarea het 'n toemaakknoppie; BimCraft onthou dat dit toegemaak is.
- 'n Paneel se oortjiestrook wat nie pas nie, rol nou eerder as om afgesny te word.
- Met 'n dokument oop lees die blaaiertjie "<dokument> - BimCraft | CadCraft".
- In {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} is die uitlegte 'n aftreklys van tweelyn-keuses.
- Die taallys in {{ui:Settings}} bied meer tale as in 0.8; tale behalwe Engels is masjienkonsepte.

## Reggestel

- **Skuif werk op trappe,** en op hellings, leuninge, dakvlakke, vrystaande toestelle, prente en paaie.
- **Om 'n muur te sleep, skeef die kamer nie meer nie.** Die middelgreep skuif die muur vierkant na homself en sy hoeke gly langs die verbonde mure. Hou {{key:Mod}} vas vir die ou vrye skuif; {{ui:Square up}} bring 90 grade terug.
- **'n Dikte- of tipeverandering by 'n verbonde knoop** hou nou die hoek toe by 'n L, 'n T, 'n drie-muur-knoop en langs 'n geboë muur.
- **Om 'n groep kamers te skuif of te kopieer** hou verbonde mure buite die groep verbonde.
- **Redo behou 'n muurmaat se identiteit.**
- **Om 'n muur met Teken af te kies** gee nie meer 'n fout in Eienskappe nie.
- **Weergee val terug na WebGL** wanneer die GPU nie kan begin nie, in plaas van om te stop.
- **Die EnergyPlus-toets kan weer aangeskakel word.**
- **Dokumente maak as 'n gesentreerde dialoog oop.** {{key:Esc}}, die X of 'n klik op die verdonkerde bladsy maak dit toe.
- **Die knoppies {{ui:Plan}}, {{ui:Split}} en {{ui:3D}} wys** sodra 'n model oop is, nie net nadat Teken een keer aangeskakel is nie.

## Eerlike beperkings

- Niks is op werklike hardeware gedruk nie. Die harsondersteunings is nuut en onbewys.
- Wind-, seismiese, beton- en eindige-element-resultate is kontrolehulpmiddele vir 'n ingenieur, nagegaan teen geslote vorme, nie teen 'n werklike gebou nie.
- Skandeer na BIM is op 'n sintetiese gebou getoets, nie op 'n werklike skandering nie, en vind net reghoekige vertrekke.
- Collada is hier nie in Blender of Google Earth oopgemaak nie.
- Die beligtingsskatting is teen ons eie spoor nagegaan, nie teen ander beligtingsprogramme nie.
- Die Suid-Afrikaanse getalle is nie bevestig nie.
- Muurvoegstyle (stomp, gerigte snit, vierkant af) en laagprioriteit is nie gebou nie; hoeke is gerig gesny.
- Tale behalwe Engels is masjienkonsepte.

Al die res is in [Wat nog nie gebou is nie](topic:not-built-yet). Vroeër veranderinge is in die 0.8- en 0.8.1-notas verder op hierdie bladsy.

## Vroeër: 0.8 en 0.8.1

Dit is wat in BimCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. BimCraft kan nou vrae oor 'n gebou beantwoord en dit toets, met mense, klank, water, wind en aardbewings, en teken dit met meer gereedskap; 0.8.1 is 'n regstellingsvrystelling.

### Nuut

**Toets die gebou**

- **Mense in die gebou.** Die afdeling {{ui:People in the building}} van die linkerpaneel loop 'n ontruiming of 'n normale dag se aankomste deur jou vertrekke, deure en trappe. Jy sien die toue waar die gebou vernou, die langste loopafstand na 'n uitgang uit elke vertrek en hoe lank die laaste persoon neem. Tik {{ui:Shut}} op 'n deur om te sien wat verander, en tik {{ui:Show the people in the 3D view}} aan om die wandelaars te sien. Die bevindinge gaan na Probleme. 'n Growwe menigtemodel vir ontwerpbesluite, nie 'n brandveiligheidsertifikaat nie. Sien [Loop mense deur die gebou](topic:people-in-the-building).
- **Vertrekakoestiek, en hoor dit.** Die afdeling {{ui:Room acoustics}} gee elke vertrek se nagalmtyd per oktaafband (Sabine en Eyring) uit sy grootte en die afwerkings wat jy kies, en met 'n teiken van jou eie sê dit hoeveel absorpsie nodig is om dit te haal. {{ui:Play it in this room}} speel 'n stem, 'n klap, getokkelde note of jou eie klanklêer deur 'n impulsrespons wat vir die vertrek bereken is. Die absorpsiegetalle is tipiese gepubliseerde waardes wat jy kan vervang. Sien [Vertrekakoestiek](topic:room-acoustics).
- **Vloed-, wind- en aardbewingsweergawe.** {{ui:Hazard playback}} speel water wat deur die vertrekke styg, winddruk op elke verdieping en 'n aardbewing wat die verdiepings skud, op 'n plan of 'n aansig met 'n tydskuif. Eenvoudige modelle met hul aannames op die paneel; nie 'n kodetoets nie. Sien [Speel 'n vloed, wind of aardbewing](topic:hazard-playback).
- **Wat in vyftig jaar slyt.** {{ui:Life-cycle view}} lys die vensters, deure, afwerkings en die dak met elk 'n diensleeftyd, die jare waarin hulle vervang word en, wanneer jy 'n koste per eenheid tik, die koste per jaar en sy huidige waarde. {{ui:Save the schedule (CSV)}} skryf dit uit. Die diensleeftye is beplanningsyfers. Sien [Kyk wat in vyftig jaar slyt](topic:life-cycle-view).
- **Beton- en seismiese kontroles.** Die blokke {{ui:Concrete members}} en {{ui:Seismic loads}} van die {{ui:Analysis}}-oortjie kontroleer betonbalke en -kolomme volgens ACI 318-19 en maak gelykwaardige laterale kragte volgens ASCE 7-22 op stywe vloere, met verdieping-drywing. Vir 'n ingenieur om na te gaan. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic).

**Kontroleer en rapporteer**

- **Kontroleer teen 'n IDS.** Laai die `.ids`-lêer wat 'n kliënt jou gegee het en sien elke element wat nie daaraan voldoen nie in Probleme, voordat jy die IFC lewer. Maak {{ui:Check against an IDS}} oop onder {{ui:Model checks}}. Sien [Kontroleer 'n model teen 'n kliënt se IDS](topic:check-against-ids).
- **Etikette en skedules.** Definieer jou eie etikette, stel dit op baie elemente tegelyk en maak skedules waarvan die kolomme, filters en groepe hulle lees; die etikette word in die IFC bewaar. Sien [Etikette en skedules](topic:tags-and-schedules).
- **Dokumente uit die model.** {{ui:Documents from the model}} vul 'n spesifikasiesjabloon uit die oop IFC in en stoor dit as 'n PDF, 'n Word-dokument of Markdown. Sien [Dokumente uit die model](topic:documents-from-the-model).
- **Vergelyk 'n skandering met die model.** Met 'n puntwolk oop, {{ui:Compare}} beoordeel elke element as gebou, deels gebou, ontbrekend of nie bereik nie, en wys die persentasie gebou. Sien [Vergelyk 'n skandering met die model](topic:compare-scan-with-model).
- **Koolstof en koste.** Die Koolstof-paneel tel ingebedde koolstof op uit 'n faktortabel wat jy kan wysig, en die Koste-paneel versprei pryse oor die 4D-skedule. Die faktore wat met BimCraft kom, is generies en as ongekontroleer gemerk. Sien [Ingebedde koolstof en koste](topic:embodied-carbon-and-5d-cost).
- **Enige kaartprojeksie.** {{ui:Measure}} › {{ui:Coordinate system…}} neem 'n EPSG-nommer, 'n UTM-sone, 'n naam of jou eie projeksiedefinisie. Sien [Georefereer met enige projeksie](topic:georeference-any-projection).

**Teken en wysig**

- **Skuif, Belyn en Versprei.** Onder {{ui:Build}}; {{key:Shift+M}} begin Skuif (gewone {{key:M}} is steeds Meet). Skuif kopieer soos jy gaan met {{key:C}}, elke stap is een ontdoen, en dit reis in 'n Live TeamWork-sessie. Sien [Skuif, kopieer, belyn en versprei](topic:move-align-distribute).
- **Prente onder die plan.** {{ui:Build}} › {{ui:Picture}} plaas 'n PNG, JPEG of WebP onder 'n vlak se plan of op 'n vertikale vlak. Stel die skaal met twee punte, en skuif, draai, vervaag en sluit dit. 'n Gebied wat in MarkupCraft gekopieer is, plak in teen sy blad se skaal. Sien [Plaas 'n prent onder die plan](topic:pictures-as-backgrounds).
- **Mure uit 'n skandering.** Met 'n skandering oop, kom mure, deure en vertrekke as voorstelle wat jy een vir een hou of verwerp, in een ontdoen-stap. Net mure in twee loodregte rigtings word gevind. Sien [Verander 'n skandering in mure](topic:scan-to-walls).
- **Spoor, penne en skets-trap.** {{ui:Trace}} wys 'n ander vlak gestippel onder die plan, {{ui:Pens}} gee mure, deure en vensters hul eie lynwydte in een aansig, en {{ui:Sketch stair}} verander 'n stapylyn in 'n trap. 'n Wavefront OBJ-netwerk maak oop. Sien [Spoor 'n vlak, penne en 'n trap uit 'n skets](topic:trace-pens-stairs-obj).
- **Geboue rondom 'n adres.** Die geboue en erf wat CivilCraft se Adres na terrein gevind het, kom as voorstelle; jy merk die wat jy wil byvoeg. Sien [Begin vanaf CivilCraft se terrein](topic:site-from-civilcraft).
- **Paneeltekeninge.** {{ui:Build}} › {{ui:Panel drawings}} raam mure, vloere en dakke in hout of ligte staal en stoor 'n snylys as CSV en werkswinkeltekeninge as 'n PDF. Beginwaardes, nie 'n strukturele ontwerp nie. Sien [Paneeltekeninge](topic:panel-drawings).
- **Simboolpalet en plante.** {{ui:Build}} › {{ui:Symbol palette}} vind elektriese en loodgieterssimbole volgens naam; die {{ui:Plants}}-bron van die {{ui:Library}} lys ongeveer 400 plante met plansimbole. Sien [Simboolpalet](topic:symbol-palette) en [Plaas 'n plant](topic:plant-list).

**Pype, kanale en energie**

- **Verdeelde, VRF- en waaiereenhede.** Binne- en buitenste eenhede met hul verbindings, en lynstelle gedimensioneer uit 'n tabel van tipiese voorbeeldwaardes wat jy kan verander. Sien [Verdeel, VRF en waaiereenhede](topic:split-vrf-fan-coils).
- **Berekeninge.** Die Berekeninge-paneel kontroleer toevoerpyp- en kanaalgroottes met drukval, lei kabels deur bakke en pype en wys hul vulling, en bereken verligting uit IES- of EULUMDAT-lêers. Standaarde is benoem; tik die waardes van jou kode. Sien [Pyp-, kanaal-, kabel- en ligberekeninge](topic:mep-calculations).
- **PCF-lêers.** Die Pyp-gereedskap se **Voer PCF uit** skryf die lope vir pypspannings- en isometriese programme, en 'n PCF-lêer wat teruggelees word, teken sy pyp. Sien [PCF-pyplêers](topic:piping-pcf).
- **Sonkrag-PV.** Pas reekse op dakke of die grond, skadu hulle uit die model, skat jaarlikse energie, kontroleer stringe en maak een-lyn-diagramdata. Die beginmodule en verliese is generies. Sien [Sonkrag-PV](topic:solar-pv).
- **EnergyPlus-lêer.** Die paneel Kontroleer met EnergyPlus skryf die model as 'n IDF om in jou eie EnergyPlus te laat loop. Om dit in die blaaier te laat loop, benodig 'n bou wat jy self hou en waarvan jy die adres tik; BimCraft dra dit nie saam nie. Sien [Kontroleer verwarming en verkoeling met EnergyPlus](topic:check-with-energyplus).

**Prente en lêers**

- **Kies die weergee-enjin.** {{ui:Render}} het 'n {{ui:Engine}}-keuse. Ons twee ingeboude enjins (Vinnig en Pad-spoorder) bly die standaard. **Maak oop in** stoor die toneel as 'n USD- of glTF-lêer, en 'n Unreal-projekgids as 'n .zip; in CadCraft Studio kan 'n byvoeging 'n enjin byvoeg. Die Unreal-inprop wat die projek oopmaak, is nie vrygestel nie. Sien [Kies watter program die prent teken](topic:render-engines).
- **Studio-ontdoen.** Binne CadCraft Studio vertel BimCraft Studio van elke afgehandelde stap, sodat Studio jou laaste stap kan ontdoen in watter venster jy laaste gebruik het. Sien [Ontdoen oor programme](topic:undo-across-apps).
- **Byvoegings in jou lêer.** 'n IFC hou aan watter byvoegings daarin geskryf het, en bied die wat jy nie het nie aan wanneer jy dit oopmaak. Sien [Byvoegings in jou lêer](topic:add-ons-in-your-file).

**In elke program**

- **Koppel jou KI.** Jou eie assistent kan BimCraft beheer deur Studio se koppeling en vrae oor die model beantwoord, soos watter vertrekke onder 'n gegewe oppervlakte is. Studio het geen eie KI nie. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Werkbalkrye.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} bied Wrap, 2 rye of 1 ry; Wrap bly die standaard.
- **Invoertoestelle.** Trackpad-, pen-, 3D-muis-, beheerder- en MIDI-instellings word deur alle programme gedeel.
- **Probleme en Live.** Die waarskuwingspaneel en Live-sessies werk soos vantevore, met die nuwe kontroles hierbo wat in Probleme voer.
- **Tale.** 54 tale, tien daarvan nuut. Dié behalwe Engels is masjienkonsepte wat nog nie deur 'n moedertaalspreker gelees is nie; hulponderwerpe is meestal Engels.

### Reggestel in 0.8.1

- **Lint + Projekblaaier-uitleg.** Invoeg › Voer CAD in, Invoeg › Prent en Bestuur › Projekeenhede het gesê "Nog nie in BimCraft gebou nie". Prent maak nou die Prent-gereedskap oop, Voer CAD in maak {{ui:Build}} › {{ui:From a drawing…}} oop (DWG, DXF, PDF of 'n skandering), en Projekeenhede maak {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} oop. Skuif en Belyn voer die Skuif- en Belyn-gereedskap uit, Vlak maak {{ui:Add levels…}} oop, Fases maak die afdeling Hernuwingsfases oop en Materiale maak die materiaalbiblioteek oop.
- **DWG-klasse-afdeling.** Dit is as die verkeerde tipe gelees; reggestel in BimCraft en die ander programme wat DWG lees.
- **Taal tydens uitvoering.** Studio en die gepakte uitgawes kan nou taal wissel sonder 'n herbegin. Dit is nog nie op elke platform getoets nie; sê vir ons as die taal nie verander nie.
- **Archicad-bundelskrip.** `archicad_bundle.py`, 'n aparte aflaai, vind nou Archicad se pad, hou die gids tot 20 sekondes dop en probeer weer langs die bundel.

### Nog nie in hierdie weergawe nie

- **Veiligheids- en ontwerphulpmiddele.** Mense in die gebou het geen loopafstandgrens uit 'n boukode nie (jy tik die grens) en is nie met die hand op 'n werklike plan nagegaan nie. Die akoestiek-, lewensiklus- en gevaarsyfers is beplanningswaardes, nie 'n kodetoets nie.
- **Klimaattoekoms en EnergyPlus.** Geen ingeboude klimaattoekoms nie: jy kan 'n scenario-lêer vir die vloedlopie laai. Die EnergyPlus-lopie in die blaaier is nie deel van hierdie vrystelling nie.
- **Lintuitleg.** Materiaalhoeveelheid bly "Nog nie gebou" omdat BimCraft geen materiaalhoeveelheidlys het nie, en 54 ander grys lintgereedskappe het nog geen BimCraft-gereedskap agter hulle nie.
- **Ondertekening en platforms.** Windows-installeerders en die macOS .dmg is nie onderteken nie, so SmartScreen wys {{ui:More info}}, dan {{ui:Run anyway}}, en macOS benodig regs-klik dan {{ui:Open}}. Die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Werklike bladsytoetse.** Sommige ouer BimCraft-blaaiertoetse slaag nog nie op ons toetsbladsy nie, soos voor 0.8.1.

Al die res is in [Wat nog nie gebou is nie](topic:not-built-yet). Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).

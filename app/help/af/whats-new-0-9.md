---
title: Wat is nuut in 0.9 (vroeër)
summary: Muurvorms, splits, verskuiwing, rek en sluit aan rooster vas, vlakke onder die grond, roostermaatte en meet op die plan, dupliseer-aansigte met werkstyle en penntabelle, Rapporteer as, Collada- en Google Earth-uitvoer, Scan na BIM, wind- en seismiese ontleding, harsdruk-byvoegings.
keywords: wat is nuut 0.9, vroeër weergawe, wat is nuut, 0.9, uitgawenotas, muurvorms, reghoek, veelhoek, boog, lyne kies, spoor omtrek, verskuiwing, verbind, boksrek, belyn en sluit, splits muur, gaping, heranker, sluit aan rooster vas, groei vanaf, meet vanaf, voeg 'n vlak onder by, kelder, vlakopdrag, roostermaatte, meet op die plan, werkstyl, dupliseer aansig, eie kopie, gekoppelde aansig, pentabel, druk soos gewys, rapporteer as, tik 'n skaal, voer SVG in, collada, dae, kmz, google earth, scan na bim, windlading, seismies, eindige element, dokumentepaneel, harsdruk, wat is nuut, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, ontruiming, mense, wagrye, klank, nagalm, impulsrespons, vloed, wind, aardbewing, gevaar, lewensiklus, diensleeftyd, ids, etikette, skedules, skuif, belyn, versprei, prent, agtergrond, skandering na mure, terrein van civilcraft, paneeltekeninge, raamwerk, sonkrag, pv, splits, vrf, waaierspoel, pyp dimensionering, kabelrak, verligting, beton, seismies, vergelyk skandering, epsg, projeksie, dokumente, sjabloon, koolstof, koste, energyplus, weergeeenjin, maak oop in, usd, glb, unreal, ontdoen, byvoegings, pcf, simbole, plante, spoor, penne, lint, projekblaaier, uitleg
from: 816df7f8
---

Dit is wat in BimCraft 0.9 verander het, vergeleke met 0.8.1. Die twee groot temas is 'n werklike muurgereedskap en aansigte wat optree soos mense wat van die groot BIM-programme af kom, verwag. Daarrond kom Collada-uitvoer, assistente wat elektriese toestelle kan plaas, Scan na BIM, en wind-, seismiese en eindige-element-werk in die {{ui:Ontleding}}-oortjie.

## Nuut

### Mure

- **Teken hele vorms.** In {{ui:Teken}}, maak {{ui:Vorms}} oop (of kies 'n vorm in die Vormlys van die Muur-ry) vir 'n reghoek, 'n gedraaide reghoek, 'n veelhoek van 3 tot 64 sye, 'n boog volgens middelpunt, 'n raakboog, mure op gekose lyne, of mure rondom 'n geslote gebied waarin jy klik. 'n Reghoek is vier mure met vier aaneengesluite hoeke en een ontdoenstap. Sien [Muurvorms, splits, verskuiwing, rek en sluit](topic:wall-tools).
- **Stel voor jy teken, verander daarna.** Die Muur-ry het {{ui:Verskuiwing}} en {{ui:Verbind}} (ontmerk om vrystaande mure te teken). Daarna gebruik {{ui:Verskuiwing}}, {{ui:Boksrek}} en {{ui:Belyn en sluit}} op getekende mure. 'n Muur wat geskuif of gerek is, behou sy deure, vensters en maatte. Elke resep is een ontdoenstap.
- **Sny mure.** {{ui:Splits}}, {{ui:Gaping}}, {{ui:Vrye punte}}, {{ui:Skrap segment}} en {{ui:Heranker}} sny 'n muur met 'n klik of waar 'n ander muur dit kruis. 'n Snit deur 'n deur word geweier. Sien [Muurvorms, splits, verskuiwing, rek en sluit](topic:wall-tools).
- **Sluit mure aan roosterlyne vas.** Kies 'n muur langs 'n roosterlyn en merk {{ui:Sluit aan rooster vas}} in {{ui:Eienskappe}}. Met die Rooster-gereedskap aan, tik 'n afstand in {{ui:Skuif met}} vir 'n gekose lyn, en die vaste mure volg in een ontdoenstap.
- **Vorm een muur.** In {{ui:Eienskappe}} van een muur kan jy sy bokant of basis aan 'n dak, vloer of plafon heg, sy opstandkontoer wysig, dit laat hel, of 'n muuropening sonder deur of venster sny. Sien [Muurvorm](topic:wall-shape).
- **Lengte sê watter punt vas bly.** {{ui:Groei vanaf}} stel in of die begin, die einde of die middelpunt vas bly wanneer jy die lengte verander.
- **Lengte en die plan se maat stem ooreen.** {{ui:Meet vanaf}} (middellyn, binnevlak of buitevlak) beheer sowel die Lengte-veld as die plan se muurmaatte. Dit begin op die middellyn, so die plan se muurmaatte lees nou die middellyn waar hulle vroeër die buitevlak gelees het. Verander dit in die Muur-ry, in {{ui:Eienskappe}} of in {{ui:Instellings}} › {{ui:BimCraft}} › {{ui:Mure}}.

### Vlakke, roosters en meting

- **Voeg 'n vlak onder by.** {{ui:Voeg 'n vlak onder by}} in die {{ui:Vlakke}}-paneel voeg 'n vlak onder die laagste een by, net so hoog as dit, op 'n negatiewe hoogte (Vlak -1, Vlak -2). Niks anders skuif nie. {{ui:Voeg vlakke by…}} aanvaar nou negatiewe hoogtes. As jy LEVEL, LEVELS, STOREY of STOREYS op die opdragreël tik, maak dit {{ui:Voeg vlakke by…}} oop, en daar is 'n {{ui:Vlakke}}-knoppie in die kieslyste en lintoortjies. Sien [Terreine, geboue en vlakke](topic:site-building-and-levels).
- **Roostermaatte op die plan.** Met die {{ui:Rooster}}-gereedskap aan, merk {{ui:Maatte}} om die afstand tussen naasliggende lyne en die algehele grootte verby die borrels op elke vlak se plan te teken. Sien [Maat 'n rooster](topic:grid-dimensions).
- **Meet op die plan.** {{ui:Meet}} in die {{ui:Teken}}-groep gee 'n afstand met die X- en Y-verskille tussen twee klikke. Niks word in die model gestoor nie. Sien [Meet op die plan](topic:measure-on-the-plan).
- **Verander verskeie kolomme op een slag.** Kies kolomme saam met 'n muur en die keuselys lys elke soort met {{ui:Hou net hierdie}}. Een klik hou die kolomme en wys hulle gedeelde velde.
- **Een wysue-eenheid oral.** Koördinate, metings, snitte, bladskale, die raamoortjie se laste en resultate en die Probleme-teks volg die eenheid wat jy kies. Uitvoere bly SI.

### Aansigte, blaaie en druk

- **Werkstyl.** {{ui:Instellings}} › {{ui:BimCraft}} › {{ui:Werkstyl}} kies tussen elke aansig wat sy eie aantekeninge en pentabelle het, of dit deel. Sien [Werkstyl, gedupliseerde aansigte, penne op papier, Rapporteer as en sjablone](topic:working-style).
- **Dupliseer 'n aansig.** Planne, plafonplanne, uitroepe, opstaande aansigte en snitte kan as {{ui:Eie kopie}} of {{ui:Gekoppel}} gedupliseer word; {{ui:Maak eie kopie}} maak 'n gekoppelde een onafhanklik. Sien [Werkstyl, gedupliseerde aansigte, penne op papier, Rapporteer as en sjablone](topic:working-style).
- **Druk soos gewys, of deur 'n pentabel.** Pen-oorskrywings word saam met die aansig in die IFC behou, en blaaie en PDF's teken hulle soos die skerm doen. Dieselfde onderwerp dek pentabelle.
- **Rapporteer as.** {{ui:Rapporteer as}} in {{ui:Eienskappe}} skryf 'n plaat wat as 'n pad geteken is, 'n muur as 'n paneel of 'n dak as 'n hellingbaan na die IFC as die klas wat jy kies, en tel dit so in skedules, Hoeveelhede, Soek, Kleur volgens en Probleme.
- **Wysig in opstaande aansigte en snitte.** Teken en skuif mure, openinge, vlakke, maatte en notas reg in 'n opstaande aansig of snit, met jou eie bladgroottes en titelblokke. Sien [Wysig in opstaande aansigte en snitte](topic:edit-in-elevations).
- **Blaaie.** Elke blad kan landskap of portret wees. Die blokkie {{ui:Tik 'n skaal}} staan langs die skaallys op elke geplaasde aansig (1:64, 2:1, 1/4" = 1'). Jy kan 'n geplaasde tekening sleep of met die pylsleutels verskuif, en {{ui:Formate…}} › {{ui:Voer SVG in…}} verander jou eie bladontwerp in 'n titelblok met velde wat per blad getik word.
- **Biblioteekkrediete op 'n blad.** 'n Tekenstel met Biblioteek-items kry 'n Biblioteekkrediete-skedule wat jy op enige blad kan plaas. Sien [Biblioteekkrediete](topic:library-credits).

### Biblioteek: plaas

- **Plaas volg die aansig.** In die Plan-aansig wys die {{ui:Biblioteek}} {{ui:Plaas in plan}}; in 3D wys dit {{ui:Plaas in model}}; in Verdeel wys dit 'n verdeelknoppie met {{ui:Plaas in plan}} as die hoofaksie. Albei maniere skryf dieselfde IFC-element. Jy kan ook 'n Biblioteekkaart na die plan of die 3D-aansig sleep; met 'n pen of vinger, druk en hou, sleep dan. Sien [Plaas vanuit die Biblioteek](topic:place-from-library).

### Lêers en assistente

- **Collada en Google Earth.** {{ui:Collada}} op die werkbalk (Lêer-kieslys in die kieslysstyle) skryf 'n .dae, of 'n .kmz wat geplaas is waar die model op die kaart is. Sien [Voer die model uit as Collada of vir Google Earth](topic:collada).
- **Assistente kan elektriese toestelle plaas.** Jou gekoppelde assistent het nuwe gereedskap om toestelle by te voeg, te lys, te verander en te skrap en om ligte in te stel. Assistente bly af totdat jy hulle in {{ui:Instellings}} aanskakel. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Scan na BIM (byvoeging).** Af by verstek en benodig die Puntwolke-byvoeging. Dit stel vloere, mure, deure en vensters uit 'n skandering voor, met die gemete afwyking vir elk; aanvaar is een ontdoenstap.

### Ontleding

- **Wind- en seismiese terreindata.** In die {{ui:Ontleding}}-oortjie: windladings volgens ASCE 7-10 of 7-16 vir 'n starre toegeslote gebou, met 'n krag op elke vloer as lasgevalle, en seismiese terreindata met 'n USGS-opsoeking en die ontwerpspektrum.
- **Strukturele opvolging en eindige elemente.** Betonkontroles volgens ACI 318-19, ekwivalente laterale kragte volgens ASCE 7-22, verdiepingsverplasing, plate en mure as plate, en laskombinasies uit ASCE 7 en EN 1990. Ons eie eindige-element-enjin doen skille, tetraëders en modale analise. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic) en [Raamanalise](topic:frame-analysis).

### Ander byvoegings en dokumente

- **Binnelig (byvoeging).** Plaas ligtoestelle en skryf die lux as getalle in elke vlak se plan, met 'n blindheidskatting en 'n drukbare verslag.
- **Dokumentepaneel.** {{ui:Lêer}} › {{ui:Dokumente…}} het uitcheck en incheck met 'n slotlêer, hersieningsletters, vrystellingstoestande en geskiedenis.
- **Streke en staal.** Suid-Afrikaanse tekening- en bouregulasiepakkette in die Regulasies-byvoeging, en 976 VK-staalgroottes in die gedeelde snitetabel.
- **Gratis harsdrukbyvoegings.** Snyer, steun en vlotbasis, blootstellingstoets, en die GOO-, SL1-, Chitubox- en Anycubic-lêerformate, almal standaard af.

## In elke toepassing

- Hou die muis oor 'n knoppie of beheerelement wys 'n Bootstrap-wenk.
- Die beginwenk op 'n leë tekenarea het 'n sluitknoppie; BimCraft onthou dat dit gesluit is.
- 'n Paneel se oortjiestrook wat nie pas nie, rol nou in plaas daarvan om afgesny te word.
- Met 'n dokument oop lees die blaaieroortjie "<dokument> - BimCraft | CadCraft".
- In {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitleg}} is die uitlegte 'n aftreklys van tweelyn-keuses.
- Die taallys in {{ui:Instellings}} bied meer tale as in 0.8; tale behalwe Engels is masjienkonsepte.

## Reggestel

- **Skuif werk op trappe,** en op hellingbane, leunings, dakvlakke, vrystaande toestelle, prente en paaie.
- **Sleep van 'n muur skeef nie meer die vertrek nie.** Die middelgreep skuif die muur vierkant na homself en sy hoeke gly langs die aaneengesluite mure. Hou {{key:Mod}} vas vir die ou vrye skuif; {{ui:Maak vierkant}} bring 90 grade terug.
- **'n Dikte- of tipeverandering by 'n aaneengesluite knoop** hou nou die hoek toe by 'n L, 'n T, 'n drie-muur-knoop en langs 'n geboë muur.
- **Skuif of kopieer 'n groep vertrekke** hou aaneengesluite mure buite die groep aaneengesluit.
- **Herdoen behou 'n muurmaat se identiteit.**
- **Kies 'n muur met Teken af** gooi nie meer 'n fout in Eienskappe nie.
- **Weergee val terug na WebGL** wanneer die GPU nie kan begin nie, in plaas van om te stop.
- **Die EnergyPlus-kontrole kan weer aangeskakel word.**
- **Dokumente maak as 'n gesentreerde dialoog oop.** {{key:Esc}}, die X of 'n klik op die verdonkerde bladsy maak dit toe.
- **Die {{ui:Plan}}-, {{ui:Verdeel}}- en {{ui:3D}}-knoppies wys** sodra 'n model oop is, nie net nadat Teken een keer aangeskakel is nie.

## Eerlike beperkings

- Niks is op werklike toerusting gedruk nie. Die harssteune is nuut en onbewys.
- Wind-, seismiese, beton- en eindige-element-resultate is kontrolehulpmiddels vir 'n ingenieur, nagegaan teen geslote formules, nie teen 'n werklike gebou nie.
- Scan na BIM is getoets op 'n sintetiese gebou, nie 'n werklike skandering nie, en vind slegs reghoekige vertrekke.
- Collada is hier nog nie in Blender of Google Earth oopgemaak nie.
- Die beligtingskatting is nagegaan teen ons eie spoor, nie teen ander beligtingsprogramme nie.
- Die Suid-Afrikaanse getalle is nie geverifieer nie.
- Muurverbindingstyle (stomp, gemiterd, vierkant afgesny) en laagprioriteit is nie gebou nie; hoeke is gemiterd.
- Tale behalwe Engels is masjienkonsepte.

Alles anders is in [Wat nog nie gebou is nie](topic:not-built-yet). Vroeëre veranderinge is in die 0.8- en 0.8.1-notas verder af op hierdie bladsy.

## Vroeër: 0.8 en 0.8.1

Dit is wat in BimCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. BimCraft kan nou vrae oor 'n gebou beantwoord en dit toets, met mense, klank, water, wind en aardbewings, en dit met meer gereedskap teken; 0.8.1 is 'n regstellingsvrystelling.

### Nuut

**Toets die gebou**

- **Mense in die gebou.** Die {{ui:Mense in die gebou}}-afdeling van die linkerpaneel loop 'n ontruiming of 'n gewone dag se aankomste deur jou vertrekke, deure en trappe. Jy sien die wagrye waar die gebou smal word, die langste loopafstand na 'n uitgang vanuit elke vertrek en hoe lank die laaste persoon neem. Merk {{ui:Toe}} op 'n deur om te sien wat verander, en merk {{ui:Wys die mense in die 3D-aansig}} om die stappers te sien. Die bevindings gaan na Probleme. 'n Growwe menigtemodel vir ontwerpbesluite, nie 'n brandveiligheidsertifikaat nie. Sien [Loop mense deur die gebou](topic:people-in-the-building).
- **Vertrekakoestiek, en hoor dit.** Die {{ui:Vertrekakoestiek}}-afdeling gee elke vertrek se nagalmtyd per oktaafband (Sabine en Eyring) uit sy grootte en die afwerkings wat jy kies, en met 'n eie teiken sê dit hoeveel absorpsie aan dit sal voldoen. {{ui:Speel dit in hierdie vertrek}} speel 'n stem, 'n klap, getokkelde note of jou eie klanklêer deur 'n impulsrespons wat vir die vertrek bereken is. Die absorpsiegetalle is tipiese gepubliseerde waardes wat jy kan vervang. Sien [Vertrekakoestiek](topic:room-acoustics).
- **Vloed-, wind- en aardbewingspeling.** {{ui:Gevaarspeel}} speel water wat deur die vertrekke styg, winddruk op elke verdieping en 'n aardbewing wat die verdiepings skud, op 'n plan of 'n opstaande aansig met 'n tydskuif. Eenvoudige modelle met hul aannames op die paneel; nie 'n kodetoets nie. Sien [Speel 'n vloed, wind of aardbewing](topic:hazard-playback).
- **Wat in vyftig jaar verslyt.** {{ui:Lewensiklusaansig}} lys die vensters, deure, afwerkings en dak met 'n diensleeftyd elk, die jare waarin hulle vervang word en, as jy 'n koste per eenheid tik, die koste per jaar en die huidige waarde daarvan. {{ui:Stoor die skedule (CSV)}} skryf dit uit. Die diensleeftye is beplanningsyfers. Sien [Sien wat in vyftig jaar verslyt](topic:life-cycle-view).
- **Beton- en seismiese kontroles.** Die {{ui:Betonlede}}- en {{ui:Seismiese laste}}-blokke van die {{ui:Ontleding}}-oortjie kontroleer betonbalke en -kolomme volgens ACI 318-19 en maak ekwivalente laterale kragte volgens ASCE 7-22 op starre vloere, met verdiepingsverplasing. Vir 'n ingenieur om na te kyk. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic).

**Kontroleer en rapporteer**

- **Kontroleer teen 'n IDS.** Laai die `.ids`-lêer wat 'n kliënt jou gegee het en sien elke element wat nie daaraan voldoen nie in Probleme, voordat jy die IFC lewer. Maak {{ui:Kontroleer teen 'n IDS}} onder {{ui:Modelkontroles}} oop. Sien [Kontroleer 'n model teen 'n kliënt se IDS](topic:check-against-ids).
- **Etikette en skedules.** Definieer jou eie etikette, stel hulle op baie elemente op een slag en maak skedules waarvan die kolomme, filters en groepe hulle lees; die etikette word in die IFC behou. Sien [Etikette en skedules](topic:tags-and-schedules).
- **Dokumente uit die model.** {{ui:Dokumente uit die model}} vul 'n spesifikasiesjabloon uit die oop IFC in en stoor dit as 'n PDF, 'n Word-dokument of Markdown. Sien [Dokumente uit die model](topic:documents-from-the-model).
- **Vergelyk 'n skandering met die model.** Met 'n puntwolk oop, {{ui:Vergelyk}} beoordeel elke element as gebou, deels gebou, ontbreek of nie bereik nie, en wys die persentasie gebou. Sien [Vergelyk 'n skandering met die model](topic:compare-scan-with-model).
- **Koolstof en koste.** Die Koolstof-paneel tel ingeslote koolstof op uit 'n faktortabel wat jy kan wysig, en die Koste-paneel versprei pryse oor die 4D-skedule. Die faktore wat by BimCraft kom, is generies en as ongekontroleer gemerk. Sien [Ingeslote koolstof en koste](topic:embodied-carbon-and-5d-cost).
- **Enige kaartprojeksie.** {{ui:Meet}} › {{ui:Koördinaatstelsel…}} neem 'n EPSG-nommer, 'n UTM-sone, 'n naam of jou eie projeksiedefinisie. Sien [Georefereer met enige projeksie](topic:georeference-any-projection).

**Teken en wysig**

- **Skuif, belyn en versprei.** Onder {{ui:Bou}}; {{key:Shift+M}} begin Skuif (gewone {{key:M}} is steeds Meet). Skuif kopieer terwyl jy gaan met {{key:C}}, elke stap is een ontdoening, en dit beweeg in 'n Live TeamWork-sessie. Sien [Skuif, kopieer, belyn en versprei](topic:move-align-distribute).
- **Prente onder die plan.** {{ui:Bou}} › {{ui:Prent}} plaas 'n PNG, JPEG of WebP onder 'n vlak se plan of op 'n vertikale vlak. Stel die skaal deur twee punte, en skuif, draai, verdof en sluit dit. 'n Gebied wat in MarkupCraft gekopieer is, plak in teen die skaal van sy blad. Sien [Plaas 'n prent onder die plan](topic:pictures-as-backgrounds).
- **Mure uit 'n skandering.** Met 'n skandering oop kom mure, deure en vertrekke as voorstelle wat jy een vir een hou of verwerp, in een ontdoenstap. Slegs mure in twee loodregte rigtings word gevind. Sien [Verander 'n skandering in mure](topic:scan-to-walls).
- **Spoor, penne en skets-trap.** {{ui:Spoor}} wys 'n ander vlak stippellyn onder die plan, {{ui:Penne}} gee mure, deure en vensters hul eie lynwydte in een aansig, en {{ui:Skets trap}} verander 'n loopreël in 'n trap. 'n Wavefront OBJ-net open. Sien [Spoor 'n vlak, penne en 'n trap uit 'n skets](topic:trace-pens-stairs-obj).
- **Geboue rondom 'n adres.** Die geboue en erf wat CivilCraft se Adres na terrein gevind het, kom as voorstelle; jy merk die wat jy wil byvoeg. Sien [Begin vanaf CivilCraft se terrein](topic:site-from-civilcraft).
- **Paneeltekeninge.** {{ui:Bou}} › {{ui:Paneeltekeninge}} raam mure, vloere en dakke in hout of ligte staal en stoor 'n snystaatlys as CSV en werkstekeninge as 'n PDF. Beginwaardes, nie 'n strukturele ontwerp nie. Sien [Paneeltekeninge](topic:panel-drawings).
- **Simboolpalet en plante.** {{ui:Bou}} › {{ui:Simboolpalet}} vind elektriese en loodgieter-simbole volgens naam; die {{ui:Plante}}-bron van die {{ui:Biblioteek}} lys omtrent 400 plante met plansimbole. Sien [Simboolpalet](topic:symbol-palette) en [Plaas 'n plant](topic:plant-list).

**Pype, kanale en energie**

- **Split, VRF en waaierspoele.** Binne- en buite-eenhede met hul verbindings, en lynstelle wat uit 'n tabel van tipiese voorbeeldwaardes gemeet word wat jy kan verander. Sien [Split, VRF en waaierspoele](topic:split-vrf-fan-coils).
- **Berekeninge.** Die Berekeninge-paneel kontroleer toevoerpyp- en kanaalgroottes met drukval, lei kabels deur trays en kabelpype en wys hul vulling, en bereken beligtingsterkte uit IES- of EULUMDAT-lêers. Verstek is geëtiketteer; tik die waardes van jou kode. Sien [Pyp-, kanaal-, kabel- en ligberekeninge](topic:mep-calculations).
- **PCF-lêers.** Die Pyp-gereedskap se **Voer PCF uit** skryf die lopies vir pyp-spanning- en isometriese programme, en 'n PCF-lêer wat teruggelees word, teken sy pyp. Sien [Piping-komponentlêers](topic:piping-pcf).
- **Sonkrag PV.** Pas skikkings op dakke of die grond, skadu hulle uit die model, skat jaarlikse energie, kontroleer stringe en maak eenlyndiagramdata. Die beginmodule en verliese is generies. Sien [Sonkrag PV](topic:solar-pv).
- **EnergyPlus-lêer.** Die paneel Kontroleer met EnergyPlus skryf die model as 'n IDF om in jou eie EnergyPlus te laat loop. Om dit in die blaaier te laat loop, benodig 'n bou wat jy self aanbied en waarvan jy die adres tik; BimCraft dra dit nie. Sien [Kontroleer verwarming en koeling met EnergyPlus](topic:check-with-energyplus).

**Prente en lêers**

- **Kies die weergeeenjin.** {{ui:Weergee}} het 'n {{ui:Enjin}}-keuse. Ons twee ingeboude enjins (Vinnig en Padspoorder) bly die verstek. **Maak oop in** stoor die toneel as 'n USD- of glTF-lêer, en 'n Unreal-projekgids as 'n .zip; in CadCraft Studio kan 'n byvoeging 'n enjin byvoeg. Die Unreal-inprop wat die projek oopmaak, is nie vrygestel nie. Sien [Kies watter program die prent teken](topic:render-engines).
- **Studio-ontdoening.** Binne CadCraft Studio vertel BimCraft Studio van elke voltooide stap sodat Studio jou laaste stap kan ontdoen in watter venster jy laas gebruik het. Sien [Ontdoen oor programme heen](topic:undo-across-apps).
- **Byvoegings in jou lêer.** 'n IFC hou aan watter byvoegings daarin geskryf het, en bied die wat jy nie het nie aan wanneer jy dit oopmaak. Sien [Byvoegings in jou lêer](topic:add-ons-in-your-file).

**In elke toepassing**

- **Koppel jou KI.** Jou eie assistent kan BimCraft deur Studio se koppeling bestuur en vrae oor die model beantwoord, soos watter vertrekke onder 'n gegewe oppervlakte val. Studio het geen eie KI nie. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} bied Wrap, 2 rye of 1 ry; Wrap bly die verstek.
- **Invoertoestelle.** Trackpad-, pen-, 3D-muis-, beheerder- en MIDI-instellings word deur alle programme gedeel.
- **Probleme en Live.** Die waarskuwingspaneel en Live-sessies werk soos voorheen, met die nuwe kontroles hierbo wat in Probleme voer.
- **Tale.** 54 tale, tien daarvan nuut. Dié behalwe Engels is masjienkonsepte wat nog nie deur 'n moedertaalspreker gelees is nie; hulp-onderwerpe is meestal Engels.

### Reggestel in 0.8.1

- **Lint + Projekblaaier-uitleg.** Invoeg › Voer CAD in, Invoeg › Prent en Bestuur › Projekeenhede het gesê "Nog nie in BimCraft gebou nie". Prent maak nou die Prent-gereedskap oop, Voer CAD in maak {{ui:Bou}} › {{ui:Uit 'n tekening…}} oop (DWG, DXF, PDF of 'n skandering), en Projekeenhede maak {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Eenhede}} oop. Skuif en Belyn voer die Skuif- en Belyn-gereedskap uit, Vlak maak {{ui:Voeg vlakke by…}} oop, Fases maak die Renovasiefases-afdeling oop en Materiale maak die materiaalbiblioteek oop.
- **DWG-klasafdeling.** Dit is as die verkeerde tipe gelees; reggestel in BimCraft en die ander programme wat DWG lees.
- **Taal tydens uitvoering.** Studio en die verpakte uitgawes kan nou taal wissel sonder 'n herbegin. Dit is nog nie op elke platform getoets nie; laat ons weet as die taal nie verander nie.
- **Archicad-bundelskrip.** `archicad_bundle.py`, 'n afsonderlike aflaai, vind nou Archicad se pad, hou die vouer tot 20 sekondes dop en probeer weer langs die bundel.

### Nog nie in hierdie weergawe nie

- **Veiligheids- en ontwerphulpmiddels.** Mense in die gebou het geen reisafstandbeperking uit 'n boukode nie (jy tik die beperking) en is nie met die hand op 'n werklike plan nagegaan nie. Die akoestiek-, lewensiklus- en gevaarsyfers is beplanningswaardes, nie 'n kodetoets nie.
- **Klimaattoekomste en EnergyPlus.** Geen ingeboude klimaattoekomste nie: jy kan 'n scenario-lêer vir die vloedlopie laai. Die EnergyPlus-lopie in die blaaier is nie deel van hierdie vrystelling nie.
- **Lintuitleg.** Materiaalhoeveelheid bly "Nie gebou nie" omdat BimCraft geen materiaalhoeveelheidslys het nie, en 54 ander grys lintgereedskappe het nog geen BimCraft-gereedskap agter hulle nie.
- **Ondertekening en platforms.** Windows-installeerders en die macOS .dmg is ongeteken, so SmartScreen wys {{ui:Meer inligting}}, dan {{ui:Hardloop tog}}, en macOS benodig regs-klik en dan {{ui:Maak oop}}. Die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Werklike bladsytoetse.** Sommige ouer BimCraft-blaaiertoetse faal steeds op ons toetsbladsy, soos vóór 0.8.1.

Alles anders is in [Wat nog nie gebou is nie](topic:not-built-yet). Vroeëre veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).

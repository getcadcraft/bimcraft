---
title: Wat is nuut in 0.8 en 0.8.1
summary: BimCraft voeg mense wat deur die gebou loop, vertrekakoestiek wat jy kan hoor, vloed-, wind- en aardbewingspeel, 'n vyftigjaar-lewensiklusaansig, kontroles teen 'n IDS, etikette en skedules, Skuif, Belyn en Versprei, prente onder die plan, mure uit 'n skandering, paneeltekeninge, sonkrag, verdeelde en VRF-stelsels, pyp- en kabeldimensionering, beton- en aardbewingskontroles, enige kaartprojeksie, 'n keuse van weergawe-enjin, en Studio-ontdoen by; 0.8.1 regstel die gryse gereedskap in die Lint-uitleg.
keywords: wat is nuut, what's new, vrystellingsnotas, veranderingslog, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, ontruiming, mense, rye, akoestiek, nagklank, impulsrespons, vloed, wind, aardbewing, gevaar, lewensiklus, dienslewe, ids, etikette, skedules, skuif, belyn, versprei, prent, agtergrond, skandering na mure, terrein uit civilcraft, paneeltekeninge, raamwerk, sonkrag, pv, verdeel, vrf, waaierspoel, pypdimensionering, kabelrak, beligting, beton, seismies, vergelyk skandering, epsg, projeksie, dokumente, sjabloon, koolstof, koste, energyplus, weergawe-enjin, oopmaak in, usd, glb, unreal, ontdoen, byvoegings, pcf, simbole, plante, spoor, penne, lint, projekblaaier, uitleg
from: 87b03056
---

Dit is wat in BimCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. BimCraft kan nou vrae oor 'n gebou beantwoord en dit toets, met mense, klank, water, wind en aardbewings, en dit met meer gereedskap teken; 0.8.1 is 'n regstellingsvrystelling.

## Nuut

### Toets die gebou

- **Mense in die gebou.** Die afdeling {{ui:Mense in die gebou}} van die linkerpaneel laat 'n ontruiming of 'n gewone dag se aankomste deur jou vertrekke, deure en trappe loop. Jy sien die rye waar die gebou smal word, die langste loopafstand na 'n uitgang uit elke vertrek en hoe lank die laaste persoon neem. Merk {{ui:Toe}} op 'n deur om te sien wat verander, en merk {{ui:Wys die mense in die 3D-aansig}} om die lopers te sien. Die bevindinge gaan na Probleme. 'n Growwe menigtemodel vir ontwerpbesluite, nie 'n brandveiligheidsertifikaat nie. Sien [Laat mense deur die gebou loop](topic:people-in-the-building).
- **Vertrekakoestiek, en hoor dit.** Die afdeling {{ui:Vertrekakoestiek}} gee elke vertrek se nagklanktyd per oktaafband (Sabine en Eyring) uit sy grootte en die afwerkings wat jy kies, en met 'n teiken van jou eie sê dit hoeveel absorpsie aan dit sal voldoen. {{ui:Speel dit in hierdie vertrek}} speel 'n stem, 'n klap, getokkelde note of jou eie klanklêer deur 'n impulsrespons wat vir die vertrek bereken is. Die absorpsiesyfers is tipiese gepubliseerde waardes wat jy kan vervang. Sien [Vertrekakoestiek](topic:room-acoustics).
- **Vloed-, wind- en aardbewingspeel.** {{ui:Gevaarspeel}} speel water wat deur die vertrekke styg, winddruk op elke verdieping en 'n aardbewing wat die verdiepings skud, op 'n plan of 'n aansig met 'n tydskuifbalk. Eenvoudige modelle met hul aannames op die paneel; nie 'n kodekontrole nie. Sien [Speel 'n vloed, wind of 'n aardbewing](topic:hazard-playback).
- **Wat in vyftig jaar verslyt.** {{ui:Lewensiklusaansig}} lys die vensters, deure, afwerkings en dak met elk 'n dienslewe, die jare waarin hulle vervang word en, wanneer jy 'n koste per eenheid tik, die koste per jaar en sy huidige waarde. {{ui:Stoor die skedule (CSV)}} skryf dit uit. Die dienslewens is beplanningsyfers. Sien [Sien wat in vyftig jaar verslyt](topic:life-cycle-view).
- **Beton- en aardbewingskontroles.** Die blokke {{ui:Betonlede}} en {{ui:Seismiese laste}} van die oortjie {{ui:Ontleding}} kontroleer betonbalke en -kolomme volgens ACI 318-19 en maak ekwivalente laterale kragte volgens ASCE 7-22 op starre vloere, met verdiepingsverplasing. Vir 'n ingenieur om na te gaan. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic).

### Kontroleer en rapporteer

- **Kontroleer teen 'n IDS.** Laai die `.ids`-lêer wat 'n kliënt jou gegee het en sien elke element wat nie daaraan voldoen nie in Probleme, voordat jy die IFC lewer. Maak {{ui:Kontroleer teen 'n IDS}} onder {{ui:Modelkontroles}} oop. Sien [Kontroleer 'n model teen 'n kliënt se IDS](topic:check-against-ids).
- **Etikette en skedules.** Definieer jou eie etikette, stel dit op baie elemente tegelyk en maak skedules waarvan die kolomme, filters en groepe dit lees; die etikette word in die IFC bewaar. Sien [Etikette en skedules](topic:tags-and-schedules).
- **Dokumente uit die model.** {{ui:Dokumente uit die model}} vul 'n spesifikasiesjabloon uit die oop IFC in en stoor dit as 'n PDF, 'n Word-dokument of Markdown. Sien [Dokumente uit die model](topic:documents-from-the-model).
- **Vergelyk 'n skandering met die model.** Met 'n puntwolk oop beoordeel {{ui:Vergelyk}} elke element as gebou, deels gebou, ontbrekend of nie bereik nie, en wys die persentasie gebou. Sien [Vergelyk 'n skandering met die model](topic:compare-scan-with-model).
- **Koolstof en koste.** Die Koolstof-paneel tel ingebedde koolstof op uit 'n faktortabel wat jy kan wysig, en die Koste-paneel versprei pryse oor die 4D-skedule. Die faktore wat met BimCraft kom, is generies en as ongeverifieer gemerk. Sien [Ingebedde koolstof en koste](topic:embodied-carbon-and-5d-cost).
- **Enige kaartprojeksie.** {{ui:Meet}} › {{ui:Koördinaatstelsel…}} neem 'n EPSG-nommer, 'n UTM-sone, 'n naam of jou eie projeksiedefinisie. Sien [Georefereer met enige projeksie](topic:georeference-any-projection).

### Teken en wysig

- **Skuif, Belyn en Versprei.** Onder {{ui:Bou}}; {{key:Shift+M}} begin Skuif (gewone {{key:M}} is steeds Meet). Skuif kopieer soos jy gaan met {{key:C}}, elke stap is een ontdoen, en dit reis in 'n Live TeamWork-sessie. Sien [Skuif, kopieer, belyn en versprei](topic:move-align-distribute).
- **Prente onder die plan.** {{ui:Bou}} › {{ui:Prent}} plaas 'n PNG, JPEG of WebP onder 'n vlak se plan of op 'n vertikale vlak. Stel die skaal met twee punte, en skuif, draai, verdof en sluit dit. 'n Area wat in MarkupCraft gekopieer is, plak in teen sy blad se skaal. Sien [Plaas 'n prent onder die plan](topic:pictures-as-backgrounds).
- **Mure uit 'n skandering.** Met 'n skandering oop kom mure, deure en vertrekke as voorstelle wat jy een vir een behou of verwerp, in een ontdoenstap. Net mure in twee loodregte rigtings word gevind. Sien [Verander 'n skandering in mure](topic:scan-to-walls).
- **Spoor, penne en skets trap.** {{ui:Spoor}} wys 'n ander vlak gestippel onder die plan, {{ui:Penne}} gee mure, deure en vensters hul eie lyndikte in een aansig, en {{ui:Skets trap}} verander 'n loopsnyding in 'n trap. 'n Wavefront OBJ-netwerk open. Sien [Spoor 'n vlak, penne en 'n trap uit 'n skets](topic:trace-pens-stairs-obj).
- **Geboue rondom 'n adres.** Die geboue en erf wat CivilCraft se Adres na terrein gevind het, verskyn as voorstelle; jy merk die wat jy wil byvoeg aan. Sien [Begin vanaf CivilCraft se terrein](topic:site-from-civilcraft).
- **Paneeltekeninge.** {{ui:Bou}} › {{ui:Paneeltekeninge}} raam mure, vloere en dakke in hout of ligte staalvorm en stoor 'n snylys as CSV en werkswinkeltekeninge as 'n PDF. Beginwaardes, nie 'n strukturele ontwerp nie. Sien [Paneeltekeninge](topic:panel-drawings).
- **Simboolpalet en plante.** {{ui:Bou}} › {{ui:Simboolpalet}} vind elektriese en loodgieterssimbole volgens naam; die bron {{ui:Plante}} van die {{ui:Biblioteek}} lys omtrent 400 plante met plansimbole. Sien [Simboolpalet](topic:symbol-palette) en [Plaas 'n plant](topic:plant-list).

### Pype, kanale en energie

- **Verdeel, VRF en waaierspoele.** Binnenshuise en buitenshuise eenhede met hul aansluitings, en koelpypstelle gedimensioneer uit 'n tabel met tipiese voorbeeldwaardes wat jy kan verander. Sien [Verdeel, VRF en waaierspoele](topic:split-vrf-fan-coils).
- **Berekeninge.** Die Berekeninge-paneel kontroleer toevoerpyp- en kanaalgroottes met drukval, roetes kabels deur rakke en pype en wys hul vulling, en bereken beligting uit IES- of EULUMDAT-lêers. Verstekwaardes is geëtiketteer; tik die waardes van jou kode. Sien [Pyp-, kanaal-, kabel- en ligberekeninge](topic:mep-calculations).
- **PCF-lêers.** Die Pyp-gereedskap se **Voer PCF uit** skryf die lope vir pypspannings- en isometriese programme, en 'n PCF-lêer wat teruggelees word, teken sy pyp. Sien [PCF-pypkomponentlêers](topic:piping-pcf).
- **Sonkrag-PV.** Pas stelle op dakke of die grond, skadu hulle uit die model, skat jaarlikse energie, kontroleer stringe en maak data vir 'n enkellyndiagram. Die beginmodule en verliese is generies. Sien [Sonkrag-PV](topic:solar-pv).
- **EnergyPlus-lêer.** Die paneel Kontroleer met EnergyPlus skryf die model as 'n IDF om in jou eie EnergyPlus te laat loop. Om dit in die blaaier te laat loop, is 'n bou wat jy self aanbied en 'n adres wat jy tik nodig; BimCraft dra dit nie. Sien [Kontroleer verwarming en koeling met EnergyPlus](topic:check-with-energyplus).

### Prente en lêers

- **Kies die weergawe-enjin.** {{ui:Weergee}} het 'n keuse {{ui:Enjin}}. Ons twee ingeboude enjins (Vinnig en Padtraseerder) bly die verstek. {{ui:Maak oop in}} stoor die toneel as 'n USD- of glTF-lêer, en 'n Unreal-projekvouer as 'n .zip; in CadCraft Studio kan 'n byvoeging 'n enjin byvoeg. Die Unreal-inprop wat die projek oopmaak, is nie vrygestel nie. Sien [Kies watter program die prent teken](topic:render-engines).
- **Studio-ontdoen.** Binne CadCraft Studio vertel BimCraft Studio van elke voltooide stap, sodat Studio jou laaste stap kan ontdoen in watter venster jy laas gebruik het. Sien [Ontdoen oor programme heen](topic:undo-across-apps).
- **Byvoegings in jou lêer.** 'n IFC hou aan watter byvoegings daarin geskryf het, en bied die wat jy nie het nie aan wanneer jy dit oopmaak. Sien [Byvoegings in jou lêer](topic:add-ons-in-your-file).

### In elke program

- **Koppel jou KI.** Jou eie assistent kan BimCraft beheer deur Studio se koppeling en vrae oor die model beantwoord, soos watter vertrekke onder 'n gegewe oppervlakte lê. Studio het geen KI van sy eie nie. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} bied Wrap, 2 rye of 1 ry; Wrap bly die verstek.
- **Invoertoestelle.** Trackpad-, pen-, 3D-muis-, beheerder- en MIDI-instellings word deur al die programme gedeel.
- **Probleme en Live.** Die waarskuwingspaneel en Live-sessies werk soos voorheen, met die nuwe kontroles hierbo wat Probleme voed.
- **Tale.** 54 tale, tien daarvan nuut. Dié behalwe Engels is masjienkonsepte wat nog nie deur 'n moedertaalspreker gelees is nie; hulpbladsye is meestal in Engels.

## Reggestel in 0.8.1

- **Lint + Projekblaaier-uitleg.** Voeg in › Voer CAD in, Voeg in › Beeld en Bestuur › Projekeenhede het gesê "Nog nie in BimCraft gebou nie". Beeld open nou die Prent-gereedskap, Voer CAD in open {{ui:Bou}} › {{ui:Uit 'n tekening…}} (DWG, DXF, PDF of 'n skandering), en Projekeenhede open {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Eenhede}}. Skuif en Belyn voer die Skuif- en Belyn-gereedskap uit, Vlak open {{ui:Voeg vlakke by…}}, Fases open die afdeling Opknappingsfases en Materiale open die materiaalbiblioteek.
- **DWG-klasse-afdeling.** Dit is as die verkeerde tipe gelees; reggestel in BimCraft en die ander programme wat DWG lees.
- **Taal tydens uitvoering.** Studio en die gepakte uitgawes kan nou van taal wissel sonder 'n herbegin. Dit is nog nie op elke platform getoets nie; laat ons weet as die taal nie verander nie.
- **Archicad-bundelskrip.** `archicad_bundle.py`, 'n aparte aflaai, vind nou Archicad se pad, hou die gids tot 20 sekondes dop en probeer weer langs die bundel.

## Nog nie in hierdie weergawe nie

- **Veiligheids- en ontwerphulpmiddels.** Mense in die gebou het geen reislengtegrens uit 'n boukode nie (jy tik die grens) en is nog nie met die hand op 'n werklike plan nagegaan nie. Die akoestiek-, lewensiklus- en gevaarsyfers is beplanningswaardes, nie 'n kodekontrole nie.
- **Klimaattoekomste en EnergyPlus.** Geen ingeboude klimaattoekomste nie: jy kan 'n scenario-lêer vir die vloedlopie laai. Die EnergyPlus-lopie in die blaaier is nie deel van hierdie vrystelling nie.
- **Lint-uitleg.** Materiaalhoeveelheid bly "Nog nie gebou nie" omdat BimCraft geen materiaalhoeveelheidlys het nie, en 54 ander gryse lintgereedskappe het nog nie 'n BimCraft-gereedskap agter hulle nie.
- **Teken en platforms.** Windows-installeerders en die macOS .dmg is nie geteken nie, so SmartScreen wys {{ui:Meer inligting}}, dan {{ui:Laat tog loop}}, en macOS benodig regs-klik en dan {{ui:Oop}}. Die iPad- en iPhone-bou is nie vir 0.8.1 weer gebou nie.
- **Werklike bladsytoetse.** Sommige ouer BimCraft-blaaiertoetse faal nog op ons toetsbladsy, soos voor 0.8.1.

Al die ander is in [Wat is nog nie gebou nie](topic:not-built-yet). Vroeëre veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).

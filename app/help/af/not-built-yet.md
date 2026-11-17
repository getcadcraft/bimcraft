---
title: Wat nog nie gebou is nie
summary: Wat hierdie BimCraft-bou nog nie doen nie, en wat om vandag eerder te gebruik.
keywords: ontbrekend, grense, beperkings, nie ondersteun nie, padkaart, outeurskap, modellering, snitte, meet, botsing, bcf, wolk, lessenaar, uitvoer
from: 87777dcc
---

BimCraft is vandag 'n leser, kontroleerder en IFC-dataredigeerder wat begin het om geboue te teken: mure, deure en vensters, kamers, vloere, plafonne en dakke (sien [Teken mure](topic:draw-walls), [Deure en vensters](topic:doors-and-windows) en [Kamers, vloere, plafonne en dakke](topic:floors-and-roofs)). Dit is die eerlike lys van wat dit nog nie doen nie, met wat om eerder vandag te doen.

## Modellering en outeurskap

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Balke teken; kolomme van staalprofiele | Gebruik jou outeurprogram, en open dan die IFC-uitvoer hier. Reghoekige en ronde kolomme word hier geplaas (sien [Roosters en kolomme](topic:grids-and-columns)); reguit, L-, U-, winder- en spiraaltrappe en leuninge word hier geteken (sien [Trappe en leuninge](topic:stairs-and-railings)) |
| 'n Venster in 'n dakkapel se voorkant; dakkapelle op dakvlakke wat met die hand geteken is; geboë dakke; 'n gerendeerde dak met teksturdekking | Dakvlakke wat by hul hoeke geteken word, en 'n helling vir elke muur: sien [Dakke: 'n helling vir elke muur, gewels, lessenaardakke en dakvlakke](topic:roofs) |
| Verandering van mure, deure of vensters wat 'n ander program gemaak het | Jou outeurprogram; die tekenhulpmiddels verander net wat hulle geteken het |
| Muurprofiele met oorhange of gate; muuropenings wat nie reghoeke is nie; byvoeg of verwyder van 'n muur se profielpunte in die 3D-aansig | Profiel, aanhegting, skuinste en openings werk in {{ui:Eienskappe}}, in aanse en snitte, op die muur se vooraansig en met handvatsels in 3D, vir reguit en geboë mure: sien [Vorm 'n muur: heg aan, profiel, skuins en openings](topic:wall-shape) |
| Op geboë mure: {{ui:Trek bo / verleng}} en {{ui:Hoek}}, raamwerk, outomatiese plan-afmetings, vasvang langs die boog (dit vang aan sy einde en die middel van sy boog) | Teken die muur reguit vir daardie, of gebruik reguit segmente. Geboë mure is in [Teken mure](topic:draw-walls) |
| Sleep 'n geplaasde biblioteekitem in die 3D-aansig | Sleep dit in die plan, of tik X, Y en Rotasie in {{ui:Eienskappe}}: sien [Plaas toerusting en meubels uit die biblioteek](topic:place-from-library) |
| Plaas plante uit die plantbiblioteek van CivilCraft se Landscape-werkruimte | Plant dit in CivilCraft, of plaas bome en struike uit die biblioteek se entourage: sien [Plaas toerusting en meubels uit die biblioteek](topic:place-from-library) |
| In die Plant-byvoeging (afgeskakel totdat jy dit aanskakel): 'n geroeteerde lopie in die model teken, spoelnommers op sy isometriese tekeninge, 'n uitlegtoets van toerusting wat uit die biblioteek geplaas is | Teken die lopie met {{ui:Pyp}} (sien [Pype en kanale](topic:pipes-and-ducts)); die uitlegtoets lees die byvoeging se eie toerustingtabel |
| Draai, spieël of skikking van enkele getekende mure, deure en vensters (mure skuif en kopieer met Skuif, Verskuif en Boksrek: sien [Muurvorms, splits, verskuif, rek en sluit](topic:wall-tools)); 'n verbindingstyl (stomp, vierkant maak) by hoeke met 'n geboë muur of drie mure of meer (sien [Muurvorms, splits, verskuif, rek en sluit](topic:wall-tools)); 'n Teks-hulpmiddel; gordynmure | Kopieer alles op 'n vlak met {{ui:Kopieer hierdie vlak…}} (sien [Teken mure](topic:draw-walls#levels)); andersins, teken hulle weer |
| Muursamestellingslae wat in die plan en die snit geteken is; afmetings in snitte en aanse; verwysingsafmetings na deure, vensters en ander komponente; samestellings en membrane in tabelle en hoeveelhede; 'n materiaalbiblioteek wat tussen projekte gedeel word; laagprioriteit in snitte, aanse en 3D en by knope van drie mure of meer (op die plan word hoeke, T-verbindings en kruisings van twee mure deur laagprioriteit skoongemaak: sien [Muurvorms, splits, verskuif, rek en sluit](topic:wall-tools)); gewikkelde of veranderlike lae; die wysiging van die samestelling van 'n muur wat 'n ander program gemaak het | Die lae is in die muurtipe en sy voorskou ({{ui:Muursamestellings…}}); mure word as een omhulsel gemeet: sien [Muursamestellings en verwysingsafmetings](topic:wall-assemblies) |
| Verandering van 'n element se vorm of grootte (behalwe mure, deure en vensters wat hier geteken is, en elemente wat uit 'n familie geplaas is) | Jou outeurprogram. Skrap, knip, kopieer en plak werk hier: sien [Skrap, knip, kopieer en plak bou-elemente](topic:edit-elements) |
| Skrap van verdiepings, ruimtes, geboue of die terrein | Skrap die elemente daarin |
| Plak van bou-elemente in 'n ander model | Kopieer en plak binne een model; geplaasde biblioteekitems plak in enige model |
| Byvoeging van nuwe eienskappe of eienskapstelle | Vul bestaande waardes hier in, of voeg die parameter in jou outeurprogram by en voer weer uit |
| Wysiging van hoeveelhede, lyste, opsommings | Jou outeurprogram |
| Stoor van projeklêers van ander programme | BimCraft stoor IFC (en sy eie familielêers: sien [Families en hul groottes](topic:families)) |
| Families: 'n biblioteek van families wat uit die plan geplaas en tussen projekte gedeel word (Biblioteek), 'n handvatsel wat in die 3D-aansig van 'n geplaaste element gesleep word (hulle sleep in die familie-redigeerder se voorskou en in die plan), detailvlakke gekies per aansig (een vlak vir die projek; blaaie kies volgens skaal), 'n omwenteling op 'n regop vlak binne 'n ander familie wat met 'n kwartdraai gedraai word, deur- en vensterplansimbole van hul eie (hulle teken dié van hul beginfamilie) | Families met getikte parameters, formules, 'n eie plansimbool, handvatsels, herhalings, detailvlakke, families binne families, groottes uit 'n tabel en per-element-parameters word hier gemaak: sien [Wysig 'n familie](topic:family-editor) en [Families en hul groottes](topic:families). Dupliseer 'n familie om van een te begin |
| Wysiging van ander programme se tipes as families; 'n biblioteekitem in 'n familie omskep | Ander programme se tipes word gelys, volgens 'n raaiwerk gegroepeer, en hul elemente gekies. Biblioteekitems word geplaas soos hulle is |
| Fabrikante se passtukke, kleppe en toerusting (kapasiteite, gewigte, fabrikante se verbindingsgroottes); ASME B16.9 T-stuk- en verminderaarlengtes op staalspoele; drukverliese deur passtukke, vloeie en balansering; sproeiers; kabelbakke; dimensionering van stapels en ontluchting volgens toesteleenhede; 'n lopie se hoeke sleep; openings in mure en plate sny; 'n lopie se einde wat aan 'n poort vas is, loslaat (behalwe deur die toerusting te skrap); poorte op biblioteekitems wat uit die Biblioteek-paneel geplaas is; passtukgewigte; kanaalnate, meters en verbinders | Pyp- en kanaallopies met generiese standaardpasstukke, stelsels, planne, tabelle en die hoeveelheidsopname word hier geteken: sien [Pype en kanale](topic:pipes-and-ducts). Generiese toerusting met poorte, verbonde lopies en die Verbindingskontrole: [MEP-toerusting met poorte](topic:mep-equipment), [Koppel pype en kanale aan toerusting](topic:mep-connections). Botsingstelle, vrye ruimtes en die openingslys: [Kontroleer pype en kanale teen die struktuur](topic:mep-against-structure). Staalspoele en -blaaie, die kanaal-snylys: [Staalpypspoele en spoelblaaie](topic:pipe-spools). Bring fabrikante se items uit jou MEP-program as IFC |
| Ontwerpkodetoetse van gelaste I-vorms, van I-vorms wie se IFC-profiel nie as 'n gewalsde W-, S-, IPE-, HEA- of HEB-grootte benoem is nie, en van buise, hoeke en kanale (hulle kom terug as nie gekontroleer nie); buiging of dinamiese reaksie (natuurlike frekwensies is in die Eindige-elemente-blok) (tweede orde is net P-Delta: elasties, buigend, sonder styfheidsvermindering); mure en plate in die ontleding; laste wat uit oppervlaktes gemaak word (behalwe een druk op elke betonplaat) | Die {{ui:Ontleding}}-oortjie gee kragte, reaksies en defleksies van balke, kolomme en diagonale deur eerste-orde-ontleding en kontroleer gewalste I-vorms, 'n hulp totdat 'n ingenieur dit hersien het: sien [Ontleed die strukturele raamwerk](topic:frame-analysis#design-checks) |

## Aansigte van modelle

| Nog nie | In plaas daarvan, vandag |
|---|---|
| 3D uit projeklêers | Voer IFC uit en maak dit oop. Sien [Kry 'n projeklêer in 3D deur IFC](topic:rvt-to-ifc) |
| Binne-aanse in die gegenereerde tekenstel (uit 'n kamer se Eienskappe en op jou eie blaaie word hulle gebou); jou eie afmetings op aanse en snitte (vlakmerke, hoogtes, die breedte en deur-/vensteretikette word geteken; notas word in die aansig geskryf: sien [Wysig in aanse en snitte](topic:edit-in-elevations)); mure in 'n aansig teken (hulle word in 'n snit se vlak geteken); span-sjablone deur Studio | Die tekenstel wat uit die model gemaak is: sien [Aanse, snitte en blaaie](topic:sheets). Vir enige IFC-model: een {{ui:Snit}}-vlak, of 'n snitblok; sien [Sny 'n IFC-model met 'n snitvlak](topic:section-plane) |
| Roepaansigte, detailaansigte, tekenaansigte en legendes; tekenlyne en arsering wat in 'n aansig geteken word; 'n aansig of snit besny; aansigsjablone vir aanse, snitte, plafonplanne en 3D-aansigte; plafonplanne in die gegenereerde tekenstel; 'n hele stel van jou eie blaaie in een PDF | Planne en plafonplanne het aansigreekse, 'n snyarea, 'n skaal en 'n onderlaag (planne ook sjablone), en jou eie blaaie neem planne, plafonplanne, aanse, snitte en tabelle, elk as PDF gestoor: sien [Aansigte, aansigreekse en jou eie blaaie](topic:views-and-sheets) |
| 'n Geplaasde lig later na die plafon skuif; hellende of trapsgewyse plafonne; plafonpatrone behalwe die vyf roosters; 'n lig se eie simbool in die plafonplan | Plaas dit met **Monteer: By die plafon**; die plafonplan teken 'n armatuur uit sy eie vorm: sien [Plaas toerusting en meubels uit die biblioteek](topic:place-from-library) |
| Deel van soektelle met ander; stelle binne die IFC-lêer | Stelle bly in hierdie blaaier; sien [Vind elemente volgens klas, naam of eienskap](topic:find) |
| Meet hoeke, of langs 'n pad van verskeie punte | Meet elke deel met {{ui:Meet}}: sien [Meet afstande, vlakoppervlaktes en liggings in 3D](topic:measure) |
| Teksture in die lewendige 3D-aansig | Geverfde materiale wys hul kleur in die aansig en hul tekstuur in gerendeerde prente: sien [Render 'n prent van die model](topic:render) |
| Speling (sagte) botsings tussen enige twee stelle, botsingsgroepe, stoor van botsingsresultate | Loop {{ui:Botsingstoets}} en maak issues van die wat saak maak: sien [Kontroleer vir botsings](topic:clash-check). Pype en kanale teen die struktuur het {{ui:Kontroleer vrye ruimte}}: sien [Kontroleer pype en kanale teen die struktuur](topic:mep-against-structure) |
| Stoor verskeie modelle as een stel, of wysig twee modelle terselfdertyd | Wysig een model op 'n slag; elkeen stoor sy eie lêer |
| Issues toewys, vervaldatums, etikette, verskeie aansigpunte per issue, 'n issue wysig | Een aansig per issue; sien [Issues en BCF-lêers](topic:issues-bcf) |
| `.ifczip` en `.ifcxml` | Pak uit of voer gewone `.ifc` uit |
| Kaartlae vir 'n model sonder 'n kaartomskakeling, of in 'n tekening se aansigte | Voer die model uit met sy koördinate: sien ['n Kaart op die grond onder die model](topic:map-layers) |
| E57-skanderings van meer as 6 miljoen punte of 512 MB; skandeerfabrikante se eie lêers (RCP, RCS, FLS, LGS, TZF, ZFS); puntwolke in 'n tekening se 3D-aansig; 'n wolk se plek saam met die model stoor | Voer die skandering as LAS of LAZ uit en maak dit langs 'n IFC-model oop: sien [Puntwolkformate](topic:point-cloud-formats) en [Wys 'n puntwolk langs die model](topic:point-clouds) |
| Registrasie van skanderings: teikens (sfere, dambordjies) in 'n skandering self vind, alle skanderings saam oplos (bundelaanpassing), skaal, registrasie teen 'n model | Kies passende punte of tik teikenkoördinate, en verfyn dan een skandering op 'n slag met ICP: sien [Registreer verskeie skanderings tot een](topic:register-scans) |
| Oopmaak van `.pln`-, `.pla`-, `.tpl`- en `.bpn`-projeklêers | Voer IFC en DWG daaruit uit, of 'n projekbondel: sien [Maak .pln- en .pla-projeklêers oop](topic:pln-project-files) en [Maak 'n projekbondel oop](topic:open-project-bundle) |
| Oopmaak van die {{ui:Elemente}}-lys om volgens soort te kies | Klik op 'n soort se groep in die {{ui:Modelboom}}: sien [Vind jou pad met die modelboom](topic:model-tree) |
| Tik 'n opmerking of 'n titel op 'n issue in VR, stemnotas, die skuif van 'n snitvlak met die hand in VR, 'n snitblok in VR | Plaas die issue in VR, en voeg dan sy woorde by in die Issues-oortjie; stel 'n snitvlak of -blok in die 3D-aansig voordat jy ingaan: sien [Hersien die model in 'n VR-kopstuk](topic:vr-review) |
| Mense by die lessenaar in VR sien (net mense in VR wys), 'n VR-stap opneem | Vra hulle om in VR aan te sluit, of volg saam in die 3D-aansig |
| Daglig-simulasie (klimaatgebaseerde daglig, verblinding, sonure), dakvensters in die daglig-faktor, toetse teen BS EN 17037 of groen-gebou-skemas; die ISO 52016-1-energiemetode, uurlikse energiesimulasie, termiese massa en brue, klimaatlêers | Ontwerphulpmiddels: die gemiddelde daglig-faktor, elke venster se vertikale hemelkomponent, die son deur die vensters op 'n datum en die daglig-faktor op 'n rooster ([Skat die daglig in elke kamer](topic:daylight-factor)); hitteverlies, 'n graad-dag-jaar en 'n verkoelingspiek per kamer ([Skat verwarmings- en verkoelingslaste](topic:heating-and-cooling-loads)). Gebruik 'n simulasieprogram vir nakoming |
| 'n Gehoste gebou-tweeling: lesings wat gehou en waarskuwings gepos word terwyl BimCraft toe is, onderhoudsvervaldatum-e-posse; MQTT 5; COBie se werk terug lees | Lesings uit 'n CSV of reguit uit jou eie makelaar of adres terwyl die model oop is, limiete wat bates merk, dokumente, COBie uit en in: sien [Hou batedata en 'n onderhoudsrekord in die model](topic:assets-and-maintenance) |
| 'n Inprop- of lewendige skakel vir Enscape, Twinmotion of ander visualiseringsprogramme; FBX- of Datasmith-lêers; een objek per element, gestoorde aansigte en wandelings in die .glb | Stoor 'n .glb vir weergaveprogramme wat glTF lees, 'n USD-lêer (een objek per element, met sy IFC-data: sien [Voer die model uit as USD](topic:usd)), of die IFC vir dié wat binne 'n ander ontwerpprogram loop: sien [Stuur die model na 'n weergaveprogram](topic:model-for-rendering) en [Maak die toneel in 'n ander program oop](topic:render-open-in) |
| 'n Ander program wat die Render-prent teken sonder 'n renderenjin-byvoeging (CadCraft laat nooit 'n program onder die GNU GPL-lisensie loop nie); panorama- of stereokameras en 'n hemelprent deur 'n ander program; die Unreal Engine-inprop (die lêers word geskryf, die inprop wat hulle oopmaak, is nie vrygestel nie) | Ons eie Fast- en Path-tracer-enjins; 'n byvoeging se enjin ([teken die prent met 'n ander program](topic:render-other-program)); 'n USD-, glTF- of Unreal-gidslêer uit die Enjin-lys om na enige program te neem |
| In die lewendige aansig: plante en rotse versprei, panoramas deel, 'n toer, 'n aflyn-kyker of 'n video | ModelCraft se lewendige aansig het hulle; hier: render prente en 360°-panoramas: sien [Die lewendige aansig](topic:live-view) en [Render 'n prent van die model](topic:render) |

## Tekeninge

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Redigeer, meet of stoor DWG en DXF | Die CadCraft-tekenprogram ({{ui:Wysig in CadCraft}} op die 2D-aansig) |
| Druk of voer PDF uit | Druk uit die program wat die tekening gemaak het; kontroleer dit eers met {{ui:Druikaansig}} |
| Plotstyle en pentabelle | {{ui:Druikaansig}} wys gewone swart met lynwydtes |
| DWG-lêers ouer as R13, en binêre DXF (BimCraft sê so wanneer jy een oopmaak) | Stoor die tekening weer as 'n nuwer DWG, of as ASCII DXF |
| Tekeninge wat binne gekoppelde tekeninge gekoppel is | Maak hulle direk oop |
| TIFF-prente | Stoor 'n PNG- of JPEG-kopie met dieselfde naam en voeg dit by |
| DGN-tekeninge | Net in gidsverslae gelys |
| Voorwerpe wat onder **Nog nie geteken nie** gelys word | Wys die tekening in die program wat dit gemaak het |
| ACIS-soliede, liggame, streke en oppervlaktes, en onderverdelingsnette in 3D | Voer IFC of 3D-vlakke uit die program wat die tekening gemaak het |
| Prente, multileaders en blaaie in die 3D-aansig van 'n tekening | Sien dit op die {{ui:Model}}-oortjie en die blaaie |
| Voorwerpe in 'n tekening se 2D-aansig kies | Skakel na {{ui:3D}} en klik die voorwerp daar: sien [Sien 'n DWG- of DXF-tekening in 3D](topic:dwg-in-3d) |
| Toerustingstabelle uit tekeninge sonder `KCL-ITEM`-etikette | Nie beskikbaar nie |
| Toerustingstabel as XLSX of PDF | {{ui:Laai CSV af}} en maak dit in 'n sigblad oop |

## Lêers en platforms

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Wolkstoor | Stoor kopieë op jou rekenaar of kantoorbediener. Wolkstoor is nog nie beskikbaar nie |
| Onthou van vouers in Firefox en Safari | Kies die vouer weer, of sleep dit in |
| Ontdoen na stoor | Maak die oorspronklike lêer weer oop om van voor af te begin |
| Vul die ontbrekende deel van 'n afgesnyde projeklêer aan | Kopieer die oorspronklike weer; in 'n vouer lees BimCraft die nuutste volledige rugsteun |
| Weer oopmaak van die lêers wat jy oop gehad het | Ongestoorde veranderinge word as "Herstel jou werk?" aangebied wanneer jy terugkeer; maak die lêers weer oop uit die onlangse lys |

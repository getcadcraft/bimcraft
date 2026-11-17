---
title: Redigeer 'n familie
summary: Verander 'n familie se parameters, formules en massiewe liggame, wys dele volgens 'n Ja / Nee-parameter, sny en verbind massiewe liggame, gee hulle verbindings vir pype en lugkanale, en sien die resultaat geteken uit die IFC wat dit sal stoor.
keywords: familie-redigeerder, redigeer familie, parameter, parameters, formule, formules, sigbaarheid, ja nee, massiewe liggaam, massiewe liggame, boks, ekstrusie, rotasie, swaai, profiel, boog, booleaans, booleaans, sny, verbind, verskil, unie, handvatsel, handvatsels, werkvlak, skets, nuwe familie, verbinding, verbindings, poort, poorte, pyp-verbinding, lugkanaal-verbinding, afvoer, watertoevoer
from: 1ab31c10
---

## Maak die redigeerder oop

Maak 'n familie oop (die projekbladeerder se **Families**, of {{ui:Build}} › {{ui:Families…}}) en klik {{ui:Edit the family}}. Om van niks af te begin nie, klik {{ui:New family}}: gee dit 'n naam, sê wat dit is ('n deur, 'n venster, meubels, 'n toestel of iets anders) en, vir 'n deur of venster, watter startpunt sy plansimbool en handvatsel kom. Die redigeerder maak oop op 'n familie met 'n paar parameters en een massiewe liggaam.

Die redigeer van 'n startfamilie hou jou veranderinge net in hierdie model. Ander modelle hou die startfamilie soos dit is.

Niks in die model verander totdat jy {{ui:Save the family}} klik nie. Die redigeerder het sy eie ontdoen en herdoen (die pyl-knoppies langs die naam, of {{key:Mod+Z}} en {{key:Mod+Y}}); stoor is een stap in die model se ontdoen.

## Parameters

Die {{ui:Parameters}}-oortjie lys die familie se parameters: 'n naam, 'n soort en 'n verstekwaarde. Die soorte: **Lengte** (millimeter), **Hoek** (grade), **Getal**, **Heelgetal**, **Ja / Nee**, **Pen** (1–16), en drie wat woorde hou in plaas van getalle: **Teks**, **Materiaal** (een van die projek se materiale) en **Vulling** ('n plan-vulling). Woorde word nie in formules gebruik nie; hulle kleur 'n massiewe liggaam (sy **Materiaal**), vul 'n deel van 'n simbool, of druk as `{Name}` binne 'n simbool se teks. Die **Per element**-blokkie maak 'n parameter iets wat elke geplaasde element vir homself stel in plaas van sy grootte.

- 'n **Formule** laat 'n parameter ander volg, byvoorbeeld `Width / 30` of `if(Width > 1200, 2, 1)`. Lengtes in formules is millimeter, of skryf 'n eenheid: `3'`, `6in`, `50cm`.
- Hernoem 'n parameter, en dit hernoem dit in elke formule en veld wat dit gebruik. 'n Parameter wat nog in gebruik is, kan nie verwyder word nie.
- 'n Massiewe liggaam se **Materiaal** neem 'n projekmateriaal se kleur (of 'n Materiaal-parameter s'n), **Gewys by** verberg dit op growwer detailvlakke, en **Herhaal** maak kopieë: 'n telling ('n getal of 'n heelgetal-parameter, 1 tot 200) en die stap tussen hulle in x, y en z. 'n Herhaalde massiewe liggaam is 'n ry planke, stawe of gate; in 'n sny sny die kopieë saam.
- 'n Deur- of vensterfamilie kry ook twee name van sy muur: `WallThickness` en `Face` (1 of −1, die kant waarheen die deur swaai).

## Massiewe liggame

Die {{ui:Solids}}-oortjie lys die massiewe liggame. Voeg 'n boks, 'n ekstrusie, 'n rotasie of 'n swaai by:

| Soort | Wat jy stel |
|---|---|
| Boks | sy twee hoeke: x0 tot x1, y0 tot y1, z0 tot z1 |
| Ekstrusie | 'n profiel op 'n werkvlak (plan, voor- of syaansig), waar die vlak is, en 'n diepte |
| Rotasie | 'n profiel, 'n as op die vlak, en 'n hoek tot 360° |
| Swaai | 'n pad van punte en 'n radius ('n staaf of 'n reling) |

Elke getal kan 'n getikte getal of 'n uitdrukking van die parameters wees. Elke massiewe liggaam het 'n kleur en **Gewys wanneer**: laat dit leeg om dit altyd te wys, of noem 'n Ja / Nee-parameter (of skryf 'n vergelyking soos `Shelves >= 3`) om dit net dan te wys. Dit is 'n sigbaarheidsparameter.

### Teken 'n profiel

'n Ekstrusie se of rotasie se profiel word op sy werkvlak onder die voorskou geteken:

- Klik op die papier om 'n punt na die gekose een by te voeg.
- Sleep 'n punt om dit te skuif. Punte snap na die rooster; hou {{key:Shift}} om hulle vry te plaas.
- Klik 'n klein vierkantjie op 'n segment om 'n punt daar by te voeg. {{key:Shift}}+klik daarop om daardie segment 'n boog te maak (klik weer vir die ander kant, dan reguit).
- Dubbelklik 'n punt om dit te verwyder.

Hol punte word deur parameters gestel: verander hulle in die tabel, nie deur te sleep nie.

## Booleaans

Die {{ui:Booleans}}-oortjie sny die tweede massiewe liggaam uit die eerste, of voeg hulle saam. 'n Booleaans se resultaat kan weer gesny of saamgevoeg word. 'n Massiewe liggaam wat in 'n Booleaans gebruik word, word net as deel daarvan geteken.

Wanneer die tweede massiewe liggaam deur sy Ja / Nee-parameter verberg word, bly die eerste soos dit is; wanneer die eerste verberg word, word die resultaat verberg.

## Plansimbool

Die {{ui:Plan symbol}}-oortjie teken wat die plan vir hierdie familie wys, in plaas van die snit van sy massiewe liggame: lyne, reghoeke, sirkels, boë, veelhoeke en teks, in die familie se eie asse. Elke deel het 'n **pen** (1–16, 'n uitdrukking of 'n Pen-parameter), 'n **vulling** (geen, soliede, diagonaal, gekruis, beton, isolasie, grond, of 'n Vulling-parameter), 'n **gewys deur**-uitdrukking, 'n **snitreeks** in millimeter bo sy basis ('n deel word met volle gewig geteken wanneer die plan se snit binne dit is, dun daaronder, gestippel daarbo: 'n kabinet bo die snit wys gestippel), 'n detailvlak en 'n herhaling. Teks kan parameters as `{Name}` noem. **Die plan wys: Die snit van die massiewe liggame** hou die plan op die snit van die liggame terwyl die simbool in die familie bly. Ander programme lees die simbool as die familie se voetspoor (lyne en vorms; die teks bly in BimCraft).

## Families binne

Die {{ui:Families inside}}-oortjie plaas 'n ander familie binne hierdie een: 'n poot in 'n tafel, 'n handvatsel op 'n deur. Kies die familie, dan waar dit gaan (x, y, z), hoe ver dit gedraai is (slegs kwartdraaie: 0, 90, 180, 270), wanneer dit gewys word, en die waardes wat dit kry, een per lyn as `Height = Height - 40`. Om die binneste familie te stoor, teken hierdie een weer; 'n familie wat deur 'n ander gehou word, kan nie verwyder word nie; 'n familie kan nie homself hou nie, selfs nie deur 'n ander nie, en die nesting stop op vier vlakke.

## Warmpunte

'n Warmpunt is 'n punt of rand wat jy sleep om 'n parameter te verander. Voeg een by op die {{ui:Hotspots}}-oortjie, kies die as waarlangs dit sleep en die getal-parameter wat dit verander, en skryf sy posisie in dieselfde uitdrukkings as die massiewe liggame. In die voorskou, kies **Warmpunte** onder die handvatsels om hulle te sleep. Op 'n geplaasde element in die plan (kies dit met {{ui:Select}}) wys die x- en y-warmpunte as handgrepe: sleep een en die element neem die grootte wat die warmpunt daar plaas, deur enige formules tussen hulle; een Ontdoen plaas dit terug. 'n Warmpunt kan nie 'n aangedrewe parameter, 'n Ja / Nee of 'n woord verander nie.

In die 3D-aansig wys dieselfde warmpunte as handgrepe op die gekose element, en die op-en-af-punte (as z) wys daar ook, wat die plan nie kan teken nie. Kies die element, sleep 'n handgreep langs sy as en laat los: die element neem die grootte wat die warmpunt daar plaas, as een ontdoen-stap. Die handgrepe is verberg terwyl die snitboks aan is, omdat dit dieselfde handgrepe gebruik.

## Verbindings

Families wat op 'n vloer geplaas word (meubels, toestelle en ander) het 'n {{ui:Connectors}}-oortjie: die punte waar 'n pyp of 'n lugkanaal by die element aansluit, soos op 'n wasbak se kraan en afvoer. Klik {{ui:Add a connector}} en stel:

- **Soort**: pyp of lugkanaal, en sy **Stelsel** (koue water, sanitêre afvoer, toevoerlug…).
- **x**, **y** en **z**: waar dit is, in die familie se eie asse. Soos 'n massiewe liggaam se getalle, kan elk 'n getal of 'n formule van die parameters wees, so die verbinding skuif met die grootte.
- **Uitweg**: die rigting waarin 'n pyp of lugkanaal dit verlaat, langs een van die familie se asse ('n afvoer onder 'n wasbak is **Af**).
- **Grootte (mm)**: die pyp se nominale grootte (DN) of die ronde lugkanaal se deursnee.
- **Vloei**: **In** vir 'n verbinding wat gevoed word ('n kraan), **Uit** vir een wat afvoer.

Die voorskou teken elke verbinding as 'n ring met 'n pyl in die uitrigting. Deure en vensters het geen verbindings nie.

Vir 'n loodgieterstoestel, kies watter een dit is onder **Loodgieterstoestel** (toilet, wasbak, kombuisspoelbak, stort, wasgoedkuip). Die startpunt-toestelle sê dit reeds.

Elke element wat uit die familie geplaas word, kry sy verbindings as poorte in die IFC-lêer, en hulle word weer gemaak wanneer die element van grootte verander of die familie gestoor word. Programme wat IFC-stelsels lees, sien waar elke pyp of lugkanaal hoort.

## Die voorskou en sy handgrepe

Die voorskou is die familie geskryf as IFC, deur dieselfde kode wat dit in die model stoor, en teruggeteken. Wat jy sien, is wat ander programme kry. Onder dit stel **Grootte gewys** die parameterwaardes wat die voorskou gebruik.

**Handgrepe** is kolletjies op die voorskou: **Die grootte** wys 'n handgreep vir Breedte, Diepte en Hoogte; **Die gekose massiewe liggaam** wys een op elke vlak van die liggaam wat jy gekies het. Sleep 'n handgreep:

- op 'n vlak wat deur 'n parameter gestel is, verander die gewyse grootte (die familie se formules bly behou);
- op 'n vlak wat deur 'n getikte getal gestel is, verander die getal.

## Stoor

{{ui:Save the family}} kontroleer die familie, teken elke grootte weer en maak elke element weer, as een stap wat jy kan ontdoen. As 'n grootte nie met die verandering geteken kan word nie (byvoorbeeld 'n massiewe liggaam sou geen breedte by daardie grootte hê nie), word niks gestoor nie en die redigeerder sê watter grootte.

As iemand anders dieselfde familie gestoor het terwyl jou redigeerder oop was (in 'n Live TeamWork-sessie, of in 'n ander venster), weier {{ui:Save the family}} en sê dit, in plaas daarvan om hulle verandering met joune te vervang. Maak die redigeerder toe, maak die familie weer oop om hulle verandering te sien, en maak joune weer.

:::note
Die meetkunde word as IFC se eie massiewe liggame gestoor: ekstrusies, rotasies, geswaaide skywe en Booleaans-resultate. Niks word in 'n lys driehoeke omskep nie, so lêers bly klein en ander programme kan die vorms as vorms lees. Profiele met boë word met boë in IFC4 gestoor; IFC2X3 het geen boogsegmente in 'n profiel nie, so daar word die boë as kort reguit stukke gestoor.
:::

Sien ook [Families en hul groottes](topic:families).

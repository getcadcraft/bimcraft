---
title: Die terrein, die gebou daarop, en sy vlakke
summary: Teken die terrein se omtrek, plaas en draai die gebou op die terrein, voeg vlakke by teen gegewe hoogtes of verdeel die gebou se hoogte, en teken op die vlak wat jy kies.
keywords: terrein, terreinplan, boulyn, terugtrekking, serwituut, regte van weg, erfgrens, kavel, perseel, grens, gebouplasing, draai gebou, plaas gebou, vlakke, verdiepings, vloere, voeg vlakke by, verdeel hoogte, vloer-tot-vloer, IfcSite, IfcBuilding, IfcBuildingStorey, ruimtelike struktuur
from: 48d10c1e
---

## Wat jy gaan doen

Stel die dele van 'n IFC-model op wat al die ander hou: die terrein, die gebou daarop en die gebou se vlakke.

'n Model is georganiseer as 'n **terrein** wat 'n **gebou** hou, wat sy **vlakke** (verdiepings) hou; mure, vloere en alles anders behoort aan 'n vlak. {{ui:Lêer}} › {{ui:Nuwe gebou}} stel al drie op. 'n Model uit 'n ander program wat 'n gebou het maar geen terrein nie, kry 'n terrein die eerste keer wat jy een teken: die gebou word daarop geplaas waar dit reeds was.

## Teken die terrein

1. Skakel {{ui:Teken}} aan, kies dan {{ui:Bou}} › {{ui:Terrein}}.
2. Klik die hoeke van die terrein (die gereedskap snap soos die Muur-gereedskap). Klik die eerste hoek weer, dubbelklik of druk {{key:Enter}} om klaar te maak. {{key:Backspace}} neem 'n hoek terug.
3. Die ry wys die terrein se oppervlakte. Teken dit weer om dit te verander.

Elke vlak se plan wys die terreinomtrek as 'n eiendomslyn.

## Plaas die gebou op die terrein

Met {{ui:Terrein}} aan, tik die gebou se **X** en **Y** op die terrein en sy **Draai** in grade, of klik {{ui:Plaas die gebou met 'n klik}} en klik waar die gebou se oorsprong moet wees. Alles in die gebou (vlakke, mure, roosters, alles wat jy geteken het) skuif saam; die terrein en sy omtrek bly. Die planne hou elke vlak reghoekig met die gebou wys.

## Boulyne en serwitute

Boulyne en serwitute (servitute, regte van weg) word op die terrein as beperkings geteken. Hulle **waarsku, hulle blokkeer nooit**: 'n muur daaroor word geteken soos jy gevra het, en 'n waarskuwing wat die muur en die lyn of serwituut noem, verskyn in Probleme. Skuif die muur terug en die waarskuwing verdwyn. 'n Waarskuwing kan met 'n rede aanvaar word (byvoorbeeld 'n verligting wat die owerheid toegestaan het).

- **Boulyn uit terugtrekkings.** {{ui:Bou}} › {{ui:Boulyn}}, dan {{ui:Terugtrekkings}}: tik hoe ver die lyn van elke grens van die terrein af staan. Die grense is op die plan genommer terwyl die gereedskap aan is. Die lyn word uit daardie afstande bereken en volg die terreinomtrek as jy dit weer teken met soveel grense. Die afstande is joune, gelees uit jou titelakte of soneringskema; BimCraft vul geen in nie.
- **'n Geteekende boulyn.** Met {{ui:Boulyn}} aan, klik sy punte en maak klaar deur dubbelklik of {{key:Enter}}. Maak klaar op die eerste punt vir 'n geslote lyn: die gebied binne is waar 'n mens mag bou, en 'n muur met enige deel buite word gewaarsku. 'n Oop lyn waarsku net oor 'n muur wat dit kruis.
- **'n Serwituut.** {{ui:Bou}} › {{ui:Serwituut}}: kies sy soort, tik sy naam, sy geregistreerde verwysing en sy breedte, en klik dan sy middellyn en maak klaar ('n strook), of sluit dit op sy eerste punt ('n gebied). 'n Muur met enige deel daarop word op elke vlak gewaarsku.
- 'n Vlak wat presies op 'n lyn lê, raak aan, kruis nie (die toleransie is 1 mm).
- Die huidige massa-opsie van elke opsiestel word soos die mure nagegaan: 'n massa buite die grens, oor 'n boulyn of op 'n serwituut kry 'n waarskuwing. Sien [Massa-opsies langs mekaar gehou](topic:massing-options).
- Kies een met {{ui:Kies}} om sy naam, verwysing, soort of breedte te verander, dit te skuif, of dit te skrap.

Hulle word op elke vlak se plan, op blaaie en in die plan-PDF geteken: boulyne gestreep, serwitute gestippel, elk met sy etiket. In die IFC-lêer is elkeen 'n annotasie (IfcAnnotation, tipe BuildingLine of Servitude) op die terrein, met sy lyn as 'n gewone kromme wat ander programme kan lees. Die kontrole gebruik elke muur se werklike omtrek op die plan, met sy verbindings soos geteken; 'n geboë muur word met sy eie dikte oor sy middellyn gekontroleer.

## Voeg vlakke by

In die {{ui:Vlakke}}-paneel voeg {{ui:Voeg 'n vlak bo-op by}} een by, en {{ui:Voeg 'n vlak onder by}} voeg een onder die laagste by ('n kelder, op 'n negatiewe hoogte). {{ui:Voeg vlakke by…}} voeg verskeie tegelyk by:

- **Teen hierdie hoogtes**: tik hoogtes bo die laagste vlak, geskei deur kommas (byvoorbeeld `12', 24', 36'`). Hoogtes wat reeds 'n vlak het, word oorgeslaan.
- **Verdeel die gebou se hoogte**: tik die gebou se hoogte en die aantal vlakke. Die vlakke wat jy het, skuif na hul nuwe hoogtes vanaf die laagste op, ontbrekende word bygevoeg, en enige bo hulle bly waar hulle is.

Mure wat tot die vlak bo loop, volg dit, soos kolomme en oprampe.

{{ui:Kopieer hierdie vlak…}} (dieselfde paneel) kopieer wat op die vlak geteken is wat jy kyk na 'n ander vlak of na 'n nuwe vlak bo-op, sodat 'n vloerplan in een stap die gebou op kan gaan. Sien [Teken mure](topic:draw-walls).

## Teken op 'n vlak

Elke {{ui:Teken}}-gereedskap werk op die vlak wat in die plan se vlaklys gekies is (of in die {{ui:Vlakke}}-paneel gekies is): wat jy teken, behoort aan daardie vlak.

## Wat jy behoort te sien

- Elkeen van hierdie veranderinge is een stap: {{key:Mod+Z}} neem dit terug.
- In die IFC-lêer: die terrein (IfcSite) met sy omtrek en oppervlakte, die gebou (IfcBuilding) daarop geplaas, en die vlakke (IfcBuildingStorey) in die gebou.

Sien ook [Koördinate in BimCraft](topic:coordinates) vir die projekoorsprong en die opmeetpunt.

---
title: Weergee 'n prent van die model
summary: Maak 'n daglig-prent van die 3D-aansig: lug, die son by jou terrein se breedtegraad, sagte skaduwees, glasvensters; met WebGPU, padgevolg op die grafiese kaart met lug, kamera, ligmenging, kleurgradering, mis en 'n renderreeks.
keywords: weergee, voorinstelling, toneel-voorinstelling, interieur, eksterieur, snitaansig, nag, een klik, weergee, padvolging, padgevolg, straalvolging, globale verligting, weerkaatsings, refraksie, hoë gehalte, foto, fotorealisties, realisties, prent, beeld, png, stilbeeld, lug, son, daglig, skaduwees, sagte skaduwees, omgewingsokklusie, glas, vensters, metaal, materiale, blootstelling, helderheid, bewolk, skemering, studio, aanbieding, visualisering, webgpu, ruisverwydering, fisiese lug, hdri, ies, veldtediepte, panorama, witbalans, ligmenging, weergee-elemente, exr, 16-bis png, mis, kaustieke, renderreeks
from: beb74cc7
---

{{ui:Weergee}} op die nutsbalk maak 'n prent van die 3D-aansig wat soos daglig lyk: 'n lug, die son waar die terrein se breedtegraad dit plaas, sagte skaduwees, lig van die hele lug wat hoeke donker maak, en kleure wat soos glas of metaal kan lyk. Die model en die lêer word nie verander nie.

## Weergee die aansig

1. Stel die 3D-aansig op soos jy die prent wil hê: wentel en zoem, verberg verdiepings of elemente wat jy nie wil hê nie, en stel 'n [snit](topic:section-plane) as die prent 'n snit moet wys.
2. Klik {{ui:Weergee}} op die nutsbalk.
3. Kies 'n {{ui:Toneel}} as die een wat ingedruk is nie is wat jy wil hê nie (sien [Toneel-voorinstellings](topic:render#scene-presets-a-good-picture-in-one-click)), kies die {{ui:Grootte}}, en klik dan {{ui:Weergee}} in die dialoog.

   Die prent vul in terwyl dit weergee en word gladder met elke deurgang. {{ui:Stop}} (of {{key:Esc}}) beëindig dit vroeg en hou die prent tot dusver.

4. Klik {{ui:Stoor}} om dit as 'n PNG af te laai, of {{ui:Stoor as}} vir 'n ander formaat (sien [Stoor die prent](topic:render#save-the-picture)). Dit kry die naam van die model se lêer.

:::tip
Begin met {{ui:Konsep}} by {{ui:Die aansig se grootte}} om die kamera te toets, en weergee dan {{ui:Goed}} of {{ui:Beste}} by 'n groter grootte vir die finale prent.
:::

## Toneel-voorinstellings: 'n goeie prent met een klik

Die bo-kant van die dialoog het vier {{ui:Toneel}}-knoppies. Elkeen stel die lug, die helderheid, die grond, die randlyne, die gehalte en die son in een klik, so daar is niks om te leer voor die eerste prent nie. Klik een, en dan {{ui:Weergee}}.

| {{ui:Toneel}} | Wat dit stel | Gebruik dit vir |
|---|---|---|
| {{ui:Buite}} | Helder lug, die model se eie son, grond aan | Die gebou van buite |
| {{ui:Binne}} | Bewolkte lug (gelykmatige lig, geen harde sonvlekke nie), 'n halwe stop helderder | 'n Aansig van binne 'n kamer |
| {{ui:Snitaansig}} | Wit studio, geen grond nie, randlyne in die vinnige weergee | 'n Model wat deur 'n snit gesny is |
| {{ui:Nag}} | Die son onder (middernag in midwinter vir die terrein se halfrond), een stop helderder | Lampe wat die model verlig. Sonder lampe is die prent donker |

- {{ui:Kies vir hierdie aansig}} kies vir jou: {{ui:Snitaansig}} wanneer 'n snit aan is, {{ui:Binne}} wanneer die kamera binne die model is, anders {{ui:Buite}}. Die eerste keer wat jy die dialoog oopmaak, begin dit self so.
- Elke instelling bly onder en kan verander word. Sodra jy een verander wat die toneel stel, is geen knoppie meer ingedruk nie, en die lyn onder die knoppies sê die instellings is joune. Klik die toneel weer om sy waardes terug te sit.
- 'n Toneel raak nie die enjin, die modus, die grootte, die materiale, die kamera of die lampe aan nie.

:::note
Die tonele gee dieselfde waardes in ModelCraft en BimCraft. Hoe die klaar prent lyk, hang af van jou model en jou grafiese kaart.
:::

## Wat in die prent wys

Wat die 3D-aansig soliede wys: verborge en deursigtige elemente, verborge verdiepings en verborge modelle word weggelaat, en vertrekke wys net wanneer {{ui:Ruimtes}} aan is. 'n Snitvlak of snitboks sny die prent soos dit die aansig sny. Elemente wys in hul eie kleure: kleur volgens eienskap (die {{ui:Kleur}}-oortjie) word nie gebruik nie.

## Instellings

| Instelling | Wat dit doen |
|---|---|
| {{ui:Grootte}} | Die aansig se grootte, twee keer die aansig se grootte, Full HD, 4K of 'n vierkant |
| {{ui:Modus}} | {{ui:Vinnig}}, of {{ui:Hoë gehalte (padgevolg)}} (hieronder) met sy {{ui:Tydlimiet}} |
| {{ui:Kwaliteit}} | Hoeveel deurgange (of, in hoë gehalte, monsters) gemiddeld word: {{ui:Konsep}} 16, {{ui:Goed}} 64, {{ui:Beste}} 256. Meer deurgange gee gladder skaduwees en rande en neem langer |
| {{ui:Hemel}} | {{ui:Helder lug}}, {{ui:Bewolk}}, {{ui:Skemering}} of {{ui:Wit studio}} ('n gewone wit agtergrond) |
| {{ui:Son}} | 21 Junie om 15:00 by die breedtegraad wat die lêer vir sy terrein gee (IfcSite), gedraai na die model se ware noord. Merk {{ui:Gebruik 'n ander datum en tyd vir hierdie prent}} vir 'n ander tyd |
| {{ui:Helderheid}} | Ligter of donkerder, in stappe (stops) |
| {{ui:Grond onder die model}} | 'n Grond by die model se laagste punt wat die skaduwees opvang en in die horison verdof |
| {{ui:Teken rande}} | Teken die elemente se rande dun oor die prent |

As die son op die gekose tyd onder die horison is, is dit nag: die lug word donker en die model se lampe verlig dit.

## Lampe

Elke ligtoestel in die model is 'n lamp in die prent: die toestelle in 'n IFC-lêer (IfcLightFixture, of 'n element wat as 'n ligtoestel getipeer is), insluitend dié wat jy uit die biblioteek plaas. Elkeen skyn af vanaf net onder die toestel. Wanneer die lêer 'n toestel se wattgetal gee, volg sy helderheid daaruit; anders is dit 800 lumen, 'n warm wit.

Die dialoog lys die lampe onder {{ui:Lampe}}: ontmerk een om dit af te skakel, of tik sy helderheid in lumen. Hierdie veranderinge word in die IFC gestoor (die toestel se `CadCraft_Light`-eienskapstel, waar jy hulle ook in Eienskappe kan verander), en {{key:Ctrl+Z}} ontdoen hulle.

As 'n lêer niks sê oor waar sy terrein is nie, word die son by 40° noord geplaas, en die dialoog sê so. Die tyd is die terrein se kloktyd, bereken uit sy lengtegraad, so dit kan 'n uur af wees waar klokke anders gestel is.

Hierdie instellings word in hierdie blaaier onthou vir die volgende prent. Hulle word nie in die IFC-lêer gestoor nie.

## Glas en ander materiale

Onder {{ui:Materiale}} het elke kleur op die skerm 'n voorkoms: {{ui:Mat}}, {{ui:Satyn}}, {{ui:Glansend}}, {{ui:Metaal}}, {{ui:Gepoleerde metaal}}, {{ui:Glas}} of {{ui:Matglas}}. Kleure wat die IFC-lêer deursigtig maak (vensterglasing, byvoorbeeld) begin as {{ui:Glas}}.

:::note
In die {{ui:Vinnig}}-modus weerkaats glas en metaal die lug, nie die res van die model nie, en lig buig nie deur glas nie. Die {{ui:Hoë gehalte (padgevolg)}}-modus hieronder doen albei.
:::

## Hoë gehalte

Kies {{ui:Modus}} › {{ui:Hoë gehalte (padgevolg)}} vir 'n prent wat lig volg soos 'n kamera dit sien:

- lig kaats tussen oppervlakke terug, so 'n vertrek wat deur 'n venster of deur 'n lamp verlig word, is rondom verlig en kleure vloei na hul bure;
- glas is werklike glas: lig buig daardeur en dit weerkaats die model;
- metaal en gepoleerde oppervlakke weerkaats die res van die model;
- ligpanele verlig soos panele, met sagte skaduwees.

Dit is baie stadiger as {{ui:Vinnig}}: elke deurgang volg elke pixel se lig weer. Die prent begin korrelrig en word skoner soos die monsters optel, so begin klein ({{ui:Die aansig se grootte}}, {{ui:Konsep}}) en kies 'n {{ui:Tydlimiet}}: wanneer dit opraak, word die prent tot dusver behou. {{ui:Stop}} behou dit ook. Die eerste deurgang wag terwyl die blaaier die padvolger voorberei.

Waar die blaaier WebGPU het, is die padvolger CadCraft se eie en loop op die grafiese kaart; die lyn onder die prent sê so. Na {{ui:Stop}} of die tydlimiet, gaan {{ui:Hervat}} voort met dieselfde prent totdat dit al sy monsters het; 'n instelling verander of weer op {{ui:Weergee}} druk begin van nuuts af. Sonder WebGPU word die prent in plaas daarvan met WebGL padgevolg (die lyn sê so) en {{ui:Hervat}} word nie aangebied nie.

:::linux
Firefox en die meeste Chrome-opstellings op Linux het nog geen WebGPU nie, so hoë gehalte gebruik daar WebGL.
:::

In hierdie modus word rande nie geteken nie, teksture wys hul kleur en ruwheid maar nie hul bulte nie, en 'n snit word op die model gemaak voordat die prent begin.

{{ui:Ruisverwydering (verwyder die korrel wat na die monsters oorbly)}} is standaard aan: wanneer die prent klaar is, of gestop is, word die korrel wat oorbly deur 'n neurale netwerk vir hierdie doel skoongemaak (Intel Open Image Denoise se gepubliseerde netwerk, op jou eie rekenaar gedraai: op die grafiese kaart, anders op die verwerker). {{ui:Wys}} › {{ui:Die prent voor ruisverwydering}} wys dit soos weergegee.

## Lug en ligprofiele op die grafiese kaart

Met WebGPU het hoë gehalte twee addisionele lugte:

- {{ui:Fisiese lug}} werk die daglig uit uit die son se hoogte: 'n diep blou bo, 'n bleek band by die horison, en 'n son wat warmer en dowwer word soos dit laag kom. {{ui:Waasheid}} gaan van 'n baie helder dag (2) na 'n wasige een (10).
- {{ui:Lugprent (HDRI)}} verlig die model met 'n panoramaprent van 'n werklike plek. {{ui:Kies 'n prent…}} neem 'n ekwirektangulêr `.hdr`- of `.exr`-lêer; {{ui:Draai}} draai dit om die model en {{ui:Prenthelderheid}} maak dit helderder of donkerder. Die prent dra sy eie son, so die model se son word nie bygevoeg nie. Dit word net behou terwyl die bladsy oop is: ná heropening, kies dit weer.

Elke lamp in die {{ui:Lampe}}-lys kan 'n vervaardiger se ligprofiel neem: {{ui:IES-profiel…}} lees 'n IES (LM-63)-lêer en die lamp gooi dan sy lig soos daardie armatuur dit doen ('n smal afwaartse lig, 'n muurwasser). Elke lamp met daardie naam gebruik dit, en die lamp hou sy eie helderheid. Klik die profiel se naam om op te hou om dit te gebruik.

Vensters van helder glas help die lug se lig om 'n pad na 'n vertrek te vind.

Die {{ui:Vinnig}}-modus en die WebGL-padvolger wys die {{ui:Fisiese lug}} en {{ui:Lugprent (HDRI)}} as 'n helder lug en ignoreer ligprofiele.

## Die kamera

{{ui:Kamera}} stel die prent op soos 'n foto:

- {{ui:Blootstelling}}: hou die {{ui:Helderheidskuiertjie}}, of kies {{ui:Kamera-instellings}} en stel die {{ui:Diafragma (f-stop)}}, {{ui:Sluitertyd}} en {{ui:ISO}} soos op 'n kamera; die EV langs hulle is die gewone blootstellingswaarde. f/16 by 1/100 s en ISO 100 pas by 'n sonnige dag; 'n donkerder toneel wil 'n wyer diafragma, 'n stadiger sluiter of 'n hoër ISO hê. Dit werk in elke modus.
- {{ui:Veldtediepte}} vervaag wat nader of verder is as die {{ui:Fokusafstand (m)}} soos 'n lens van daardie f-stop sou doen (laat dit leeg om op wat in die middel van die aansig is te fokus); {{ui:Diafragmavorm}} gee uit-fokus-hoogtepunte 'n ronde of geblaaide vorm.
- {{ui:Tweepunt-perspektief (vertikale lyne bly vertikaal)}} stel die kamera gelyk en skuif die prent, soos 'n argitektoniese kantel-skuiflens doen, sodat mure nie oorhel wanneer jy na 'n gebou op of af kyk nie.
- {{ui:Witbalans}} stel watter lig-kleur as wit wys: laer (byvoorbeeld 3000 K) vir warm lampligt, hoër vir skaduwee en bewolkte dae.
- {{ui:Projeksie}}: {{ui:360°-panorama}} maak 'n 2:1-prent van alles rondom die kamera vir panoramakykers; {{ui:360°-stereopanorama}} stapel 'n linkeroog- en 'n regteroog-panorama vir koptelefone; {{ui:Kubusmap (6 vlakke)}} maak ses vierkantige aansigte in 'n 3 × 2-rooster. Die breedte kom van {{ui:Grootte}}.

Projeksie, veldtediepte, tweepunt-perspektief en witbalans benodig die padvolger op die grafiese kaart (WebGPU), so hulle wys net in {{ui:Hoë gehalte (padgevolg)}}.

## Voltooi die prent

{{ui:Prent}} gradeer die hoë-gehalte-prent soos 'n foto, en elke beheerder verander die klaar prent onmiddellik, sonder om weer te weergee:

- {{ui:Voorkoms (aansigtransformasie)}}: {{ui:ACES-filmies}} (die prent soos voorheen), {{ui:AgX}} (sagter, hou kleur in baie helder lig), {{ui:Filmies}} ('n sagte filmkromme) of {{ui:Standaard}} (gewoon, helder lig knip na wit).
- {{ui:Kontras}} en {{ui:Hoëligkompressie}} (bring detail terug in baie helder dele).
- {{ui:Bloei}} ('n sagte gloed rondom helder lig), {{ui:Blink}} met sy {{ui:Blinkstrepe}} (sterstrale van die helderste punte) en {{ui:Vinjet}} (donkerder hoeke).
- {{ui:Kleurtabel (.cube)…}} pas 'n kleurgradering toe uit 'n `.cube`-lêer, met sy {{ui:Kleurtabelsterkte}}; soos 'n lugprent word dit net behou terwyl die bladsy oop is.

## Stoor die prent

{{ui:Stoor as}} langs {{ui:Stoor}} kies die lêer: {{ui:PNG}}, {{ui:JPEG}} of {{ui:WebP}} om te deel (JPEG en WebP net waar die blaaier hulle kan skryf), en ná 'n hoë-gehalte-weergee op die grafiese kaart ook:

- {{ui:PNG, 16 bis}}: die gegradeerde prent met fyner stappe tussen skakerings, vir druk of verdere redigeering.
- {{ui:EXR, elke laag (32-bis drywende komma)}}: die prent soos weergegee (lineêre lig, geen gradering) met elke weergee-element en liggroep as sy eie laag, vir samestellingsprogramme.
- {{ui:Weergee-lêer (.ccrender, om later weer te kleurgradeer)}}: alles wat die dialoog nodig het om die prent weer te meng en te gradeer. {{ui:Maak 'n weergee-lêer oop…}} bring dit terug, met sy mengsel en sy gradering, sonder om te weergee.

## Meng die ligte ná die weergee

Skakel {{ui:Ligmenging (verander elke lig se kleur en helderheid na die weergee)}} aan voordat jy op {{ui:Weergee}} druk. Wanneer die prent klaar is (of gestop is), lys {{ui:Meng die prent}} sy ligte in groepe: die lug, die son, en die lampe volgens naam (elke lamp met dieselfde naam is een groep). Skakel 'n groep af, gee dit 'n kleur, of maak dit helderder of donkerder, en die prent verander onmiddellik, sonder om weer te weergee. {{ui:Stoor mengsel}} hou die mengsel onder 'n naam om later weer te kies; {{ui:Soos weergegee}} gaan terug na die prent soos dit gemaak is. {{ui:Stoor}} stoor die gemengde prent.

{{ui:Weergee-elemente (albedo, normale, diepte, diffuus, spekulêr, transmissie, emissie, ID's)}} hou die prent se dele ook. {{ui:Wys}} skakel die aansig na een van hulle: die oppervlakkleure (albedo), die normale, die diepte, die diffuse, spekulêre en deurgelate lig (elk direk en indirek), wat gloei en die lug, en 'n kleur per voorwerp of per materiaal vir die maak van maskers.

Albei hou ekstra lae op die grafiese kaart. By groot groottes het 'n grafiese kaart dalk nie plek nie; die dialoog sê so en 'n kleiner grootte werk.

## Mis, rook, geraas en kaustieke

Hierdie is in {{ui:Mis, rook en geraas}} en werk in {{ui:Hoë gehalte (padgevolg)}} op die grafiese kaart; die ander enjins laat hulle uit.

- {{ui:Mis en newel}} vul die lug tot 'n hoogte met 'n newel wat die son, die lug en lampe verlig. {{ui:Hoe ver jy kan sien, in meter}} stel hoe dik dit is (ongeveer 100 m is 'n ligte waas, 20 m 'n dik mis), {{ui:Hoogte van die mis bo die grond, in meter}} is waar dit eindig, en {{ui:Ligstrale}} is hoeveel die newel na die lig toe gloei. Sonlig verlaat die mis aan sy bokant, so waar son deur 'n venster of tussen geboue kom, sien jy dit as ligstrale.
- {{ui:Rook of wolk}} voeg een volume rook of wolk by wat soos die mis verlig word. {{ui:Soort}} is 'n {{ui:Wolk}}, 'n {{ui:Rookkolom}} of {{ui:Uit 'n volumelêer (.ccvol)}}, CadCraft se eie roosterformaat. {{ui:Detail}} en {{ui:Variasie}} verander 'n gemaakte wolk of kolom, {{ui:Grootte van sy langste kant, in meter (0 = die grootte van die model)}}, {{ui:Skuif X (m)}}, {{ui:Skuif Y (m)}}, {{ui:Skuif Z (m)}} en {{ui:Draai}} plaas dit (dit begin in die middel van die model), {{ui:Dikte}} maak dit digter, {{ui:Voorwaartse gloed}} maak dit helderder na die lig toe, en {{ui:Kleur}} kleur dit. 'n Volumelêer word net behou terwyl die bladsy oop is, soos 'n lugprent.
- {{ui:Stop vroeg waar die prent skoon is (aanpasbare steekproefneming)}} gee geen verdere monsters aan pixels wat gesettel het nie. {{ui:Geraas om te aanvaar}} is hoeveel korrel oorbly wanneer 'n pixel stop. Die lyn onder die prent sê hoeveel monsters 'n pixel gemiddeld gekry het.
- {{ui:Kaustieke (lig gebuig deur glas of teruggekaats deur spieëls)}} volg lig van die lampe en die son, so die helder kol onder 'n glasbol of 'n spieël se lig op 'n muur kom skoon uit in plaas van korrelrig. Dit is af terwyl mis, rook, ligmenging of weergee-elemente aan is, en dit is vir prente gemaak, nie vir 360°-prente nie.

## Die renderreeks

{{ui:Renderreeks}} in die dialoog: {{ui:Voeg hierdie prent by die reeks}} hou die prent se instellings en aansig, en {{ui:Begin die reeks}} weergee wat wag, een na die ander, op hierdie rekenaar. As jy die bladsy toemaak, bly die reeks; maak dieselfde model oop om voort te gaan. {{ui:Stoor}} laai 'n voltooide een af; {{ui:Verwyder}} en {{ui:Maak voltooide leeg}} maak die lys skoon. Die reeks weergee in hoë gehalte, so dit benodig WebGPU.

## Hoe lank dit neem

Die prent word op jou eie rekenaar gemaak, deur sy grafiese kaart; niks word opgelaai nie. Tyd groei met die deurgange en die pixels: {{ui:Beste}} het 16 keer die deurgange van {{ui:Konsep}}, en 'n 4K-prent het ongeveer vier keer die pixels van Full HD. Groot modelle neem langer per deurgang.

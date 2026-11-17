---
title: Skat die dagligte in elke vertrek
summary: Die gemiddelde dagligfaktor van elke vertrek uit sy vensters, sy binneoppervlakke en die lug wat elke venster sien, met die lughoek gemeet in die model. 'n Vroeë ontwerpskatting, nie 'n simulasie of 'n kodetoets nie.
keywords: dagligte, dagligfaktor, gemiddelde dagligfaktor, adf, vertikale lugkomponent, vsc, sonwins, son, g-waarde, rooster, gesplete vloei, lugkomponent, intern gereflekteerde komponent, natuurlike lig, venster, beglazing, lughoek, versperring, oorskaduwing, balkon, oorhang, reflektansie, deurlaatbaarheid, vroeë ontwerp, ontleding, vertrekke, ruimtes
from: 5f300a78
---

Die {{ui:Daylight}}-oortjie in die regterpaneel bereken elke vertrek se **gemiddelde dagligfaktor**: hoeveel van die lig van 'n bewolkte lug buite gemiddeld die vertrek bereik, as 'n persentasie. Dit lees die oop IFC-model se vertrekke (ruimtes) en vensters. Niks in die model word verander nie en niks word opgelaai nie.

:::warning
Alles in hierdie oortjie is **'n ontwerphulpmiddel, nie 'n nakomingsberekening nie**: vroeë ontwerpskattings volgens gepubliseerde metodes, **nie 'n simulasie** en **nie 'n toets teen 'n boukode of 'n standaard nie**. BS EN 17037, LEED, BREEAM en energiekodes vra vir 'n dagligsimulasie met die klimaat van die plek; gebruik 'n dagligsimulasieprogram vir daardie.
:::

## Bereken dit

1. Open 'n IFC-model wat vertrekke (ruimtes) en vensters het. Modelle wat hier geteken is, het 'n vertrek binne elke geslote stel mure.
2. Maak die {{ui:Daylight}}-oortjie oop en klik op {{ui:Calculate}}.
3. Elke vertrek wys sy dagligfaktor en 'n band: onder 2 %, 2–5 %, 5 % of meer. Klik op 'n vertrek om sy oppervlakke en elke venster se oppervlakte en lughoek te sien; die vertrek en sy vensters word in die model gekies.

Verander 'n invoer en die getalle volg dadelik; na 'n verandering aan die model, {{ui:Calculate again}}. {{ui:CSV}} stoor elke vertrek met sy getalle en die invoere wat gebruik is.

## Die formule

Gemiddelde dagligfaktor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), bymekaar opgetel oor die vertrek se vensters (Littlefair se formule, gebruik deur BRE 209, BS 8206-2 en CIBSE LG10):

- **T**, die glas se ligdeurlaatbaarheid (0.7 om mee te begin: gebruik die vervaardiger se syfer).
- **Ag**, die beglaasde oppervlakte: elke venster se oppervlakte (sy totale breedte × hoogte, anders sy grootte in die model) × die **beglaasde aandeel** (0.75 om mee te begin: die res is raamwerk).
- **θ**, die hoek van die lug wat die venster sien, in grade (hieronder).
- **M**, die onderhoudsfaktor vir vuil op die glas (1 om mee te begin).
- **A**, elke binneoppervlak van die vertrek: vloer, mure, plafon en vensters, geneem uit die vertrek se eie vorm.
- **R**, hul gemiddelde reflektansie, geweeg volgens oppervlakte: vloer 0.2, mure 0.5, plafon 0.7 om mee te begin; glas tel as 0.1.

## Hoe die lughoek gemeet word

Vir elke venster sny BimCraft die model met 'n vertikale vlak haaks op die venster, vanaf die buitevlak van die glas, en kyk vanaf die horison reguit op: alles wat die snit voor die venster raak ('n gebou oorkant, 'n balkon of 'n oorhang bokant, die dakrand) versper deel van daardie 90°. θ is wat oorbly. Die venster self en die muur waarin dit sit, word weggelaat. Dit doen dit op vyf plekke oor die venster se breedte en neem die gemiddelde, so 'n dun paal voor die middel neem sy aandeel, nie die hele lug nie.

'n Gebou 8.5 m bo die venster se middelpunt en 9.9 m weg versper 40.65° (die hoek waarvan die tangens 8.5 ÷ 9.9 is), wat θ = 49.35° laat.

## Vertikale lugkomponent van elke venster

{{ui:Calculate}} meet ook, vir elke venster, wat dit van die hele lug sien: dieselfde vertikale snit, gedraai na elke rigting oor die venster se voorkant (elke 2°, van die een kant na die ander), so 'n gebou aan die een kant, 'n vin of 'n diep vensterkosyn neem sy aandeel. Hieruit bereken BimCraft die **vertikale lugkomponent (VSC)**: hoeveel van die bewolkte lug se lig die glas bereik, as 'n aandeel van wat 'n oop, plat dak sou kry. 'n Venster met niks voor dit nie kry **39.6 %**, die meeste wat 'n vertikale venster kan; 'n lang gebou wat 25° bo die venster styg, laat omtrent **27 %**, die syfer wat Britse riglyne (BRE 209) as 'n duimreël gebruik. Elke venster in 'n vertrek se detail wys sy VSC en sy **versperringshoek** (hoe hoog dinge reguit voor dit styg).

Die lug is die CIE-standaard bewolkte lug, wat reguit bo drie keer helderder is as by die horison, en die snit is presies: niks word gemonster nie.

## Die son deur die vensters op 'n datum

Maak {{ui:Sun through the windows on a date}} oop en kies 'n datum. BimCraft volg die son deur daardie dag in kwartier-intervalle en tel vir elke venster die hitte wat die son deur die glas bring op:

- die **direkte son**, wanneer dit voor die venster is en niks in die model dit versper nie (dieselfde presiese snit, gedraai na die son: 'n balkon wat die hoë somerson om die middag afskerm, laat die lae winterson wel in);
- die **lug se lig** op die glas, minus wat die venster nie kan sien nie;
- die lig **van die grond af** (sy reflektansie: 0.2 om mee te begin);
- alles deur die glas se **g-waarde** (die aandeel van die son se energie wat dit deurlaat: 0.6 om mee te begin; gebruik die vervaardiger se syfer) en sy beglaasde aandeel.

Elke vertrek wys die dag se totaal in kWh en sy piek in watt met die tyd; 'n vertrek se detail teken die dag as 'n grafiek. Die lug is 'n helder lug volgens Hottel se model (Duffie & Beckman, *Solar Engineering of Thermal Processes*), met die somer- of wintersyfers vir die plek en seisoen en die terrein se hoogte; die son se posisie is NOAA s'n. Die terrein se breedte- en lengtegraad kom uit die IFC se terrein, en noord uit die model se ware noord; as die model geen terrein het nie, tik 'n breedte- en lengtegraad in. Tye is standaardtyd (geen somertyd nie) in die tydsone wat jy tik, anders die een wat die lengtegraad aandui.

Wat dit weglaat: wolke (dit is 'n helder dag), die glas wat minder deurlaat by lae hoeke, rame wat die glas afskerm, hortjies, en wat die mure en die dak opneem. Die koelingskatting in dieselfde oortjie gebruik die piek.

## Die dagligfaktor op 'n rooster

Maak {{ui:Daylight factor on a grid}} oop en {{ui:Work out the grid}}: BimCraft lê 'n rooster oor elke vertrek se vloer op die werkvlakhoogte (0.85 m om mee te begin), 'n halwe meter in van die mure af, en bereken die dagligfaktor op elke punt volgens die **BRE-gesplete-vloeimetode**:

- die **lugkomponent**: die bewolkte lug wat van die punt deur elke venster se opening gesien word, minus die rame;
- die **eksterne gereflekteerde komponent**: wat die punt van geboue buite deur die venster sien, wat teen 'n tiende van die lug agter hulle skyn (verander die versperring se helderheid as hulle baie ligter of donkerder is);
- die **intern gereflekteerde komponent**: die lig wat in die vertrek rondkaats, uit die vertrek se oppervlakke en reflektansies, die vensters se oppervlakte en hoeveel daarvan buite is (die BRE-formule, met die glas se deurlaatbaarheid in die plek van die helder glas waarvoor dit aanvaar het).

Elke vertrek wys sy gemiddelde, sy laagste punt en hoeveel daarvan 2 % of meer kry; 'n vertrek se detail teken sy plan met elke punt gekleur volgens sy dagligfaktor en die vensters in rooi. Om dit op enige rekenaar vinnig te hou, kry 'n vertrek hoogstens **400 punte**: in 'n groot vertrek groei die spasiëring om te pas (tik 'n spasiëring om self te kies).

## Wat dit weglaat

- Dakvensters (glas wat plat of skuins lê) word gelys maar nie getel nie: die formules hier is vir vensters in mure.
- Vensters sonder 'n vertrek agter hulle ('n gang sonder 'n ruimte, byvoorbeeld) word apart gelys.
- Vensterkosyne (die opening word aan die buitevlak geneem), verblinding, sonure en klimaatgebaseerde dagligte. Vir BS EN 17037, LEED of BREEAM gebruik 'n dagligsimulasieprogram.
- Die bands is uit ouer Britse riglyne (BS 8206-2), as 'n gids gewys, nooit as 'n slaag of druip nie.

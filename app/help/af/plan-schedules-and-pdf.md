---
title: Skedules, afmetings en 'n PDF van die plan
summary: Deur-, venster-, muur- en vertrekskedules wat verander soos jy teken, afmetings op die plan, en die plan van 'n vlak gestoor as 'n PDF op 'n standaardskaal.
keywords: skedule, deurskedule, vensterskedule, muurskedule, vertrekskedule, hoeveelhede, hoeveelheidsopname, oppervlakte, csv, sigblad, afmetings, afmeting, druk, pdf, plot, skaal, 1/4", 1:50, blad
from: d97cd16e
---

## Wat jy gaan doen

Sien wat die gebou wat jy teken, optel terwyl jy teken: hoeveel deure en vensters van elke grootte, hoeveel muur van elke tipe, hoe groot elke vertrek is. Plaas afmetings op die plan en stoor dit as 'n PDF om te druk of te stuur.

## Skedules

Met {{ui:Teken}} aan wys **Skedules** in die linkerpaneel een tabel op 'n slag:

- **Deure** en **Vensters**: elkeen volgens sy merk (D1, D2 … en W1 …, soos jy dit plaas), sy tipe, breedte, hoogte (en vensterbank), vlak en die muur waarin dit is.
- **Mure volgens tipe**: vir elke muurtipe, hoeveel mure, hul dikte, hul totale lengte en hul syoppervlakte as **Bruto-oppervlakte**, **Aftrekkings** en **Netto-oppervlakte**, met 'n totaal.
- **Vertrekke**: nommer, naam, vlak, oppervlakte en omtrek, met die totale oppervlakte.
- **Vloere**: elke vloer met sy vlak, soort en dikte, en sy bruto-oppervlakte, aftrekkings en netto-oppervlakte.
- **Afwerkings**: elke afwerklaag van die muurtipes (volgens materiaal en kant van die muur) en die plafonne, met die aantal vlakke en bruto, aftrekkings en netto.
- **Muurtipes: hoeveelheidsdata**: wat eenmaal op elke muurtipe ingevoer is (eenheid, mortel, tarief), met die aantal mure, hul lengte en netto-oppervlakte, en die tarief maal die gemete hoeveelheid. Sien [Muursamestellings](topic:wall-assemblies).
- **Afwerkings volgens vertrek**, **Afwerkings volgens muur**, **Afwerkings volgens sone** en **Afwerkhoeveelhede**: wat elke vertrek bedek, met oppervlaktes, teltalle van teëls insluitend snitte en substraatvolumes. Sien [Vertrekafwerkings en afwerkskedules](topic:room-finishes).
- Jou eie **opstellings**: 'n skedule wat jy gegroepeer, getotaal en onder 'n naam gestoor het. Sien [Rangskik, stoor en voer 'n skedule uit](topic:schedule-layouts).

Die tabelle verander met elke wysiging. Klik 'n ry, of 'n enkele syfer, om die elemente te kies waaruit dit kom. {{ui:Laai CSV af}} stoor die tabel, om in 'n sigblad oop te maak; Laai Excel af en Kopieer vir Google Sheets is daaronder. **Vertrekafwerkings** en **Spesifikasie** ([Skryf die spesifikasie uit die model](topic:specification)) maak oop vanaf dieselfde plek.

## Oppervlakte en volume van elke laag

Kies **Lae: oppervlakte en volume** in die Skedules-lys. Dit het 'n ry vir elke laag van elke muur-, vloer-, dak- en plafondtipe in gebruik: die element, die tipe en sy LOD, die laag (getel vanaf die buitekant van 'n muur, vanaf die bo van 'n vloer, dak of plafon), sy materiaal en funksie, sy dikte, hoeveel elemente, die **netto-oppervlakte** en die **volume**.

- Die oppervlakte is die netto-oppervlakte van die elemente van daardie tipe, presies gemeet soos in Muur volgens tipe, Vloere en Afwerkings, volgens die projek se meetmetode. 'n Dak word op die helling gemeet; geen meetmetode het 'n reël vir dakke nie.
- Die volume is daardie oppervlakte maal die laag se eie dikte.
- 'n Vloer, dak of plafon sonder 'n tipe is een ry: een laag van sy eie dikte.
- 'n Lugholte word met sy oppervlakte gelys en uit die totale volume gelaat. 'n Membraan het 'n oppervlakte en geen volume nie.

Klik 'n ry om sy elemente te kies. {{ui:Laai CSV af}} stoor die tabel.

## Hoe oppervlaktes gemeet word

Elke oppervlakte is drie getalle wat optel: bruto minus aftrekkings is die netto. Die reël staan bo elk van hierdie tabelle geskryf, en dit is een reël: die skedules, die hoeveelhede wat in die IFC-lêer gestoor word, en die hoeveelheidsopname wat na TakeoffCraft gaan, gebruik almal dit.

- **'n Muur**: bruto is een kant van die muur, sy lengte langs die middellyn maal sy hoogte (die werklike kant vir 'n muur met 'n gevormde bo of basis). Elke deur, venster en ander opening word afgetrek, breedte maal hoogte, elke opening een keer.
- **'n Vloer of 'n plafon**: bruto is die oppervlakte binne sy omtrek. Elke opening en uitsnit daarin word een keer afgetrek.
- **'n Muurafwerking**: elke afwerklaag van die muurtipe bedek een kant van die muur, gemeet soos die muur, met dieselfde openings afgetrek. 'n Afwerking is 'n laag van die muur: dit word onder Afwerkings gelys en word nie by die muuroppervlakte getel nie, so 'n muur met 'n deur word nooit twee keer getel nie.

Dit is die **CadCraft-verstek**: elke opening word afgetrek, ongeag sy grootte; muurlengtes is langs die middellyn; ommurings word nie gemeet nie. Dit is wat elke projek gebruik totdat jy 'n ander metode kies.

## Kies 'n meetmetode

Bo die skedule lys **Meetmetode** die metodes wat by BimCraft kom, en **Laai 'n metodelêer** neem jou kantoor s'n. Die keuse word in die IFC-lêer gestoor, as een ontdoen-stap, en drie dinge volg dit terselfdertyd: die skedules, die netto-hoeveelhede wat in die lêer gestoor word, en die hoeveelheidsopname wat na TakeoffCraft gaan. Die reël bo elke tabel begin dan met die metode, sy bron, die datum waarop die bron gelees is, en die woorde **Nie deur 'n kwantitatiewe landmeter nagegaan nie**.

'n Metode is 'n klein lêer van feite, nie programkode nie. Vir elke hoeveelheid sê dit:

- **die kleinste opening wat afgetrek word**: byvoorbeeld, 'n opening van 0,5 m² of minder bly in die muuroppervlakte;
- **hoe muurverbindings gemeet word**: langs die middellyn; of met 'n muur wat teen 'n ander eindig, gemeet tot die vlak van daardie muur; of met elke muurent wat 'n ander muur ontmoet, gemeet tot die naaste vlak;
- **of ommurings gemeet word** vir 'n afwerking (die terugsprong van die afwerking in die openings), as 'n oppervlakte of, wanneer dit vlak is, as 'n lengte. Die diepte van 'n ommuring word geneem as die helfte van die muur se dikte;
- **wat dit oor messelwerk sê**: hoe dit gemeet word, en enige verlies- of mortelvergoeding wat dit noem.

Die metodes wat by BimCraft kom:

| Metode | Mure: kleinste opening wat afgetrek word | Muurafwerkings | Plafonne | Messelwerk |
|---|---|---|---|---|
| CadCraft-verstek | elke opening | elke opening | elke uitsnit | geen vergoedings |
| RICS NRM 2 (Verenigde Koninkryk), 2de uitgawe 2021 | 0,5 m² of minder bly in | 1 m² of minder bly in | 1 m² of minder bly in | volgens oppervlakte; geen persentasies gestel nie |
| AAQS Standard Method for Africa 2015 | 0,5 m² of minder bly in | 0,5 m² of minder bly in | 0,5 m² of minder bly in | volgens oppervlakte; netto gemeet, 0% verlies |
| IS 1200 (Indië), 1976, steenwerk | 0,1 m² of minder bly in | verstek (sien hieronder) | verstek | volgens volume |
| BIA Technical Note 10 (Verenigde State), 2009 | elke opening | verstek | verstek | 5% verlies op eenhede, 15% op mortel |

Lees hierdie beperkings voordat jy op 'n metode staatmaak:

- **Geen kwantitatiewe landmeter het enige van hulle nagegaan nie.** Elkeen is gemaak deur die genoemde bron te lees en sy getalle op te teken met die klousule waaruit hulle kom. As jy 'n kwantitatiewe landmeter is en een kan nagaan, wil die program se skeppers graag van jou hoor.
- Waar 'n reël nie uit die bron gelees kon word nie, sê die metode **nie bevestig** daarvoor en word die CadCraft-verstek gebruik. Geen metode wat by BimCraft kom, het 'n bevestigde reël vir muurverbindings, ommurings of vloere nie, so daardie word onder almal op die verstekmaniere gemeet.
- IS 1200 trek openings in pleister in drie bande af. 'n Metodelêer kan nog nie bande hou nie, so muurafwerkings gebruik onder daardie metode die verstek, en die reël sê so.
- Die Suid-Afrikaanse Standaardstelsel vir die meet van boukundige werk is **nie** onder hulle nie: die teks daarvan kon nie gelees word nie. Die AAQS-metode vir Afrika sê dit is op die 1991-uitgawe van daardie stelsel gebou, maar dit is 'n ander dokument.
- BIA Technical Note 10 is 'n bedryfsramingsnota, nie 'n standaard meetmetode nie.
- 'n Opening wat presies die kleinste grootte is, volg die metode se eie woorde ("nie meer as", "minder as"). Groottes binne 2 dele in 10 000 daarvan tel as presies daardie grootte.
- Onder 'n metode volg die lêer se netto-kantoppervlakte van 'n muur en netto-oppervlakte van 'n vloer of plafon die metode, en die hoeveelheidstel noem dit. Die bruto oppervlaktes en volumes in die lêer bly soos getek.

**Aantekeninge oor hierdie metode**, onder die kieser, sê wat elke bron oop laat. **Maak die bron oop** gaan na die dokument.

### Jou kantoor se eie metode

'n Metodelêer is JSON in die formaat `cadcraft-measurement-method`. Elke waarde daarin noem die klousule waaruit dit kom; 'n waarde sonder 'n klousule word geweier. Die lêer word nagegaan wanneer jy dit laai, 'n verkeerde veld word benoem, en niks word gebruik uit 'n lêer wat nie slaag nie. Wanneer dit gekies is, word die lêer binne die projek gestoor, sodat die projek op 'n ander rekenaar dieselfde oopmaak. Sy id is 'n gewone naam van jou eie (dit mag nie die id van 'n metode wees wat by die app kom nie).

## Stene, blokke en mortel

**Muurtipes: hoeveelheidsdata** tel die eenhede en die mortel van elke muurtipe wie se eenheid 'n lengte en 'n hoogte het (sien [Gee 'n tipe sy hoeveelheidsdata](topic:wall-assemblies#give-a-type-its-takeoff-data)). Dit is die formules, presies soos bereken:

- **Eenhede per oppervlakte van een blad** = 1 / ((eenheidlengte + voeg) × (eenheidhoogte + voeg)). 'n 215 × 65 mm baksteen met 'n 10 mm voeg: 1 / (225 × 75 mm) = 59,26 per m².
- **Eenheidsbreedtes oor 'n blad** = (bladdikte + voeg) / (eenheidbreedte + voeg), afgerond tot 'n heelgetal, minstens 1. 'n 102,5 mm blad van 102,5 mm baksteen is 1; 'n 215 mm muur van dieselfde baksteen is 2.
- **Eenhede** = eenhede per oppervlakte × eenheidsbreedtes oor × die netto-oppervlakte van die muurvlak, opgetel oor die tipe se messelwerkbladre.
- **Eenhede om te bestel** = eenhede × (1 + verlies % / 100), opgerond tot 'n heel eenheid. Die verlies is dié wat op die tipe ingevoer is; as niks ingevoer is nie, dié van die metode, as dit een noem; anders 0%.
- **Mortel** = netto-oppervlakte × bladdikte, minus die volume van die eenhede (eenhede × lengte × hoogte × breedte), dan plus die ekstra persentasie wat op die tipe ingevoer is vir uitholling of perforasies, dan plus die metode se vergoeding as dit een noem. Dit het die eenheidsbreedte nodig.

Wat aangeneem word: elke messelwerkblad van 'n tipe is gebou van die tipe se een eenheid; 'n blad dikker as een eenheidsbreedte word as soveel eenheidsbreedtes getel, elk soos 'n blad wat in die lengterigting gelê is, sodat gesnyde eenhede, sluitstene en spesiale vorms nie apart getel word nie; waar geen laag as gebou van die eenheid gemerk is nie, word die kernlae as die bladlae geneem, en die notas bo die tabel sê so. **Bedrag** is die tarief maal waarvoor die tarief geld, wat nou ook 'n eenheid om te bestel, 1000 eenhede om te bestel of 'n m³ mortel kan wees.

Merke is die elemente se IFC-etiket: verander een in **Eienskappe** (Etiket) en die skedule volg. Vir elke IFC-model, getek of nie, voeg [Tel hoeveelhede op, lys elemente en skedule ruimtes](topic:quantity-totals) enige eienskap op.

## Afmetings

Die plan wys elke getekende muur se lengte langs sy buitekant ('n binnemuur: langs een kant) en, vir 'n muur met deure of vensters, 'n ketting van die hoeke na elke opening. {{ui:Afmetings}} in die modelbalk verberg hulle en wys hulle weer.

## Stoor die plan as 'n PDF

1. Wys die vlak wat jy wil hê en stel die eenhede in die **Vlakke**-paneel.
2. Klik {{ui:Druk}} in die modelbalk.
3. BimCraft stoor "<lêer> — <vlak>.pdf": die plan in swart en wit op die grootste standaardskaal wat by die bladsy pas (1/4" = 1'-0", 1/8" = 1'-0" … op Letter in voet en duim; 1:50, 1:100 … op A4 in millimeter), met die mure gevul, deure, vensters, vertreknaam en oppervlaktes, afmetings, en 'n titelstrook met die vlak, die lêer, die snithoogte, die datum en die skaal.

Die PDF word as lyne en teks geteken, so dit bly skerp op enige zoem en sy teks kan gesoek word.

## Goed om te weet

- Die skedules lys wat die tekengereedskap gemaak het. Deure en vensters uit 'n ander program wys in Hoeveelheidstotale in plaas daarvan.
- Om die werk te prys, gee die hoeveelhede aan TakeoffCraft: sien [Hoeveelhede na TakeoffCraft](topic:takeoff). Die CSV-aflaai bly vir 'n sigblad.

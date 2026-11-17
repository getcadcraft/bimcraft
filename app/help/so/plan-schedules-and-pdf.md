---
title: Jadwallada, cabbirrada iyo PDF-ka qorshaha
summary: Jadwallada albaabbada, daaqadaha, darbiyada iyo qolalka oo isbedela markaad rasmeynayso, cabbirrada qorshaha, iyo qorshaha dabaqa oo lagu kaydiyo PDF cabbir caadi ah.
keywords: jadwal, jadwalka albaabka, jadwalka daaqadda, jadwalka darbiga, jadwalka qolka, tiro, takeoff, bed, csv, xaashi xisaab, cabbir, daabac, pdf, plot, miisaan, xaashi, 1/4", 1:50, sheet
from: d97cd16e
---

## Waxa aad samayn doontid

Arag waxa dhismaha aad rasmeysay ku soo dhammaada intaad rasmeynayso: inta albaab iyo daaqad oo cabbir kasta leh, inta darbi oo nooc kasta leh, iyo inta ballaadhan qol kasta. Cabbirrada qorshaha ku dhig oo kaydi PDF si aad u daabacdo ama u dirto.

## Jadwallada

Marka {{ui:Sawir}} la shido, **Jadwallada** panelka bidix wuxuu muujiyaa hal miis mar kasta:

- **Albaabbada** iyo **Daaqadaha**: mid kasta calaamadiisa (D1, D2 … iyo W1 …, sida aad dhigtid), nooceeda, ballaca, dhererka (iyo sill-ka), dabaqa iyo darbiga uu ku jiro.
- **Darbiyada sida nooca**: nooc kasta oo darbi, tirada darbiyada, dhumucdooda, dherer wadar ah iyo bedka dhinaca ah oo ah **Gross area**, **Deductions** iyo **Net area**, iyo wadar.
- **Qolalka**: lambarka, magaca, dabaqa, bedka iyo perimeter-ka, iyo bedka wadar ah.
- **Dabaqyada**: dabaq kasta oo leh heerkiisa, nooceeda iyo dhumucdiisa, iyo bedkiisa gross, deductions iyo net.
- **Dhamaystirada**: lakab kasta oo dhamaystir ah oo darbiyada nooceedu leeyihiin (sida agabka iyo dhinaca darbiga) iyo saqafyada, oo leh tirada wejiyada iyo gross, deductions iyo net.
- **Noocyada darbiga: xogta takeoff**: waxa mar la geliyay nooc kasta oo darbi (unit, moorta, heer), oo leh tirada darbiyada, dhererkooda iyo bedka net, iyo heerka lagu dhuftay qaddarka la cabbiray. Eeg [Darbiyada dhismaha](topic:wall-assemblies).

- **Dhamaystirada qolalka**, **Dhamaystirada darbiga**, **Dhamaystirada aagga** iyo **Tirada dhamaystirka**: waxa qol kasta daboolaya, oo leh bedka, tirada alaabta tiles oo ay ku jiraan gooynta iyo mugga substrate-ka. Eeg [Dhamaystirada qolalka iyo jadwallada dhamaystirka](topic:room-finishes).
- Habaynta gaarka ah: jadwal aad kooxeysay, wadartay oo magac ku kaydisay. Eeg [Habaynta, kaydinta iyo u dhoofinta jadwalka](topic:schedule-layouts).

Miisaska waxay isbeddelaan tafatir kasta. Guji safka, ama tiro keliya, si aad u doorato elementiyada uu ka yimid. **Deji CSV** wuxuu kaydiyaa miiska, si aad ugu furto spreadsheet; **Deji Excel** iyo **Koobiyee Google Sheets** ayaa hoosteeda. **Dhamaystirada qolalka** iyo **Specification** ([Qor specification-ka moodelka](topic:specification)) waxay ka furmaan isla meesha.

## Bedka iyo mugga lakab kasta

Dooro **Layers: area and volume** liiska Jadwallada. Waxay leedahay hal safka lakab kasta oo darbi, dabaq, saqaf iyo saqaf-hoosaad oo nooc kasta oo la isticmaalay: elementiga, nooca iyo LOD-kiisa, lakabka (laga tiriyo dhinaca dibadda darbiga, ama sare dabaqa, saqafka), agabkiisa iyo shaqadiisa, dhumucdiisa, inta elementi, **net area** iyo **volume**.

- Bedku waa net area ee elementiga nooca sidaas, oo loo cabbiray sida darbiyada sida nooca, Dabaqyada iyo Dhamaystirada, habka cabbirka mashruuca. Saqafka waa la cabbiraa sida dhinac; cabbirka saqafyada ma leh xeer.
- Mugga waa bedkaas oo ku dhufan dhumucda lakabkiisa.
- Dabaq, saqaf ama saqaf-hoosaad aan nooc lahayn waa hal safka: hal lakab oo dhumucdiisa.
- Lakabka hawo-dhexe ah ayaa lagu liistaa bedkiisa oo laga reebay wadarta mugga. Membrane wuxuu leeyahay bed laakiin mug ma lahan.

Guji safka si aad u doorato elementiyadiisa. **Deji CSV** wuxuu kaydiyaa miiska.

## Sida loo cabbiro bedka

Bedka kasta waa saddex tiro oo isku dara: gross ka dhimma deductions waa net. Xeerka waxa lagu qoray miis kasta oo sare, waana hal xeer: jadwallada, tirooyinka lagu kaydiyay faylka IFC iyo takeoff-ka loo diro TakeoffCraft oo dhammaantood isticmaalaan.

- **Darbi**: gross waa hal dhinac oo darbiga ah, dherer ahaan oo dhexe ka dhigan dhererka dhexe ee darbiga oo ku dhufan dhererkiisa (darbiga leh qaab sare ama hoose oo gaar ah, dhulka dhabta ah). Albaab, daaqad iyo furaha kale ee kasta waa la dhimayaa, ballac ku dhufan dhererka, furaha kasta mar keliya.
- **Dabaq ama saqaf**: gross waa bedka gudaha xuduuddiisa. Furaha kasta iyo jarista gudaha ayaa mar keliya la dhimayaa.
- **Dhamaystirka darbiga**: lakab kasta oo dhamaystir ah oo nooca darbiga leeyahay wuxuu daboolaa hal wejiga darbiga, oo lagu cabbiro sida darbiga, iyadoo furaha la dhimayo isla sidaas. Dhamaystirku waa lakab darbiga ka mid ah: waxa lagu liistaa hoosta Dhamaystirada wuxuuna aan lagu darin bedka darbiga, sidaas darteed darbi leh albaab marna lagama tiriyo laba jeer.

Taasi waa **CadCraft default**: furaha kasta waa la dhimayaa, cabbirkiisa ha ahaado wax kasta; dhererka darbiga waa dhererka dhexe; reveals-ka lama cabbirro. Waa wixii kasta oo mashruuc kasta isticmaalo ilaa aad doorato habka kale.

## Dooro habka cabbirka

Sare jadwalka, **Habka cabbirka** wuxuu liistaa hababka ku jira BimCraft, **Soo rar fayl habka** wuxuu qaadaa kan xafiiskaaga. Doorashada waa la kaydiyaa faylka IFC, hal tallaabo oo undo ah, saddex waxyaalood ayay isla markiiba raacaan: jadwallada, tirooyinka net ee lagu kaydiyay faylka, iyo takeoff-ka loo diro TakeoffCraft. Xeerka sare miis kasta wuxuu markaas ku bilaabmaa habka, isha, taariikhda uu isha la akhriyay iyo erayada **Unchecked by a quantity surveyor**.

Habku waa fayl yar oo xog ah, ma aha code barnaamij. Tirada kasta wuxuu sheegaa:

- **furaha ugu yar ee la dhimo**: tusaale ahaan, furaha 0.5 m² ama ka yar wuxuu ku jiraa bedka darbiga;
- **sida loo cabbiro isgoysyada darbiyada**: dhexe oo ah dhererka bartamaha; ama darbi ku dhammaada darbi kale oo loo cabbiro ilaa wejiga darbigaas; ama darbiga kasta oo ku kulma darbi kale oo loo cabbiro dhinaca dhow;
- **haddii reveals-ka la cabbiro** dhamaystirka (soo laabashada dhamaystirka furaha gudihiisa), oo bedka ama, marka uu hooseeyo, dherer ahaan. Qoto dheerida reveal-ka waxa loo qaataa nus dhumucda darbiga;
- **waxa uu ku yidhi dhisme dhagaxa**: sida loo cabbiro, iyo wixii qiyaas qalalan ama mooraar uu sheego.

Hababka uu BimCraft leeyahay:

| Habka | Darbiyada: furaha ugu yar ee la dhimo | Dhamaystirada darbiga | Saqafyada | Dhagaxa |
|---|---|---|---|---|
| CadCraft default | furaha kasta | furaha kasta | jarista kasta | ma leh qiyaas |
| RICS NRM 2 (Boqortooyada Ingiriiska), 2nd edition 2021 | 0.5 m² ama ka yar ayaa ku jirta | 1 m² ama ka yar ayaa ku jirta | 1 m² ama ka yar ayaa ku jirta | bedka; boqolleyda lama sheegin |
| AAQS Standard Method for Africa 2015 | 0.5 m² ama ka yar ayaa ku jirta | 0.5 m² ama ka yar ayaa ku jirta | 0.5 m² ama ka yar ayaa ku jirta | bedka; net la cabbiray, 0% waste |
| IS 1200 (Hindiya), 1976, brickwork | 0.1 m² ama ka yar ayaa ku jirta | default (eeg hoos) | default | mugga |
| BIA Technical Note 10 (Maraykanka), 2009 | furaha kasta | default | default | 5% waste unitiyada, 15% moorta |

Akhri xaddaddaan ka hor intaadan ku tiirsanaan habka:

- **Ma jiro xisaabiye tirada qaadiyaa oo hubiyay mid kasta.** Mid kasta waxa lagu sameeyay akhrinta ilaha la magacaabay oo tirooyinkiisa waxa lagu duubay qodobka ka yimid. Haddii aad tahay xisaabiye tirada qaadiya oo hubin karta mid, ilaa dhammaadka app-ka waa la jeclaan lahaa inaad nala soo xidhiidho.
- Halka xeerka aan laga akhrin karin ilaha, habku wuxuu leeyahay **not confirmed** oo wuxuu isticmaalaa CadCraft default. Habka BimCraft ku jira ma leh xeer la xaqiijiyay isgoysyada darbiyada, reveals-ka ama dabaqyada, sidaas darteed waxa loo cabbiraa si default ah habkasta.
- IS 1200 wuxuu dhimaa furaha ku jira plaster-ka saddex heer. Faylka habka weli ma qaadi karo heerar, sidaas darteed dhamaystirada darbiga waxay isticmaalaan default habkaas hoos, xeerkuna wuu sheegaa.
- Qaabka Cabbirka Shaqada Dhismaha ee Koonfur Afrika **ma** ku jirto: qoraalkeeda lama akhriyi karin. Habka AAQS ee Afrika wuxuu sheegaa inuu ku saleysan yahay tafatirka 1991 ee nidaamkaas, laakiin waa dukumeen kale.
- BIA Technical Note 10 waa warqad qiyaas warshad, ma aha habka caadiga ah ee cabbirka.
- Furaha ah cabbirka ugu yar ee saxda ah wuxuu raacaa erayada habka ("not exceeding", "less than"). Cabbirrada ku dhow 2 qayb 10 000 ee saxda ah waxay ka mid yihiin saxda ah.
- Habka hoostiisa, bedka net ee darbiga iyo bedka net ee dabaqa ama saqafka faylka waxay raacaan habka, magaca habka ayaa lagu qoraa jadwalka. Bedka gross iyo mugga faylka waxay sidii ay u muuqdaan u sii jiraan.

**Qoraallada habkan**, oo ku hoos doorashada, waxay sheegaan wixii ilaha kastaa uu furan yahay. **Fur ilaha** wuxuu u gudbiyaa dukumeentiga.

### Habka xafiiskaaga

Faylka habka waa JSON oo qaabkiisu yahay `cadcraft-measurement-method`. Qiime kasta oo ku jira wuxuu magacaabaa qodobka uu ka yimid; qiime aan qodob lahayn waa la diidaa. Faylka waa la hubiyaa marka la soo rarayo, khaladka dhab ah ayaa la magacaabaa, wax aan ka soo baxin faylka aan gudbin ma la isticmaalo. Marka la doorto, faylka waxa lagu kaydiyaa gudaha mashruuca, sidaas darteed mashruucu wuxuu u furmaa isla sidaas kombuyuutar kale. ID-kiisu waa magac gaar ah oo adiga kuu gaar ah (ma noqon karo ID-ga habka app-ka ku jira).

## Dhagaxa, blocks iyo moorta

**Noocyada darbiga: xogta takeoff** wuxuu tiriyaa unitiyada iyo moorta nooc kasta oo darbi oo unitigiisu leeyahay dherer iyo dhererka (eeg [Ku sii xogta takeoff nooc](topic:wall-assemblies#give-a-type-its-takeoff-data)). Kuwanu waa qaababka xisaabta, sidii la xisaabiyay:

- **Unitiyada bedka hal leaf** = 1 / ((dhererka unitiga + joint) × (dhererka unitiga + joint)). Dhagax 215 × 65 mm oo leh joint 10 mm: 1 / (225 × 75 mm) = 59.26 m² kasta.
- **Unitiyada ballaca leaf-ka dhexdiisa** = (dhumucda leaf-ka + joint) / (ballaca unitiga + joint), oo la wareejiyay tiro oo dhan, ugu yaraan 1. Leaf 102.5 mm ah oo leh dhagax 102.5 mm waa 1; darbi 215 mm ah oo leh isla dhagaxa waa 2.
- **Unitiyada** = unitiyada bedka × unitiyada ballaca × bedka net ee wejiga darbiga, oo lagu daray leaf-yada dhoobada nooca.
- **Unitiyada la dalbo** = unitiyada × (1 + waste % / 100), oo la kor u qaadaa unit oo dhan. Waste-ka waa midka lagu galay nooca; haddii aan la galin, waa midka habka haddii uu sheego; haddii kale 0%.
- **Moorta** = bedka net × dhumucda leaf-ka, oo laga jaro mugga unitiyada (unitiyada × dherer × dhererka × ballac), kadibna lagu daro boqolleyda dheeraadka ah ee lagu galay nooca ee frogs ama perforations, kadibna lagu daro qiyaaska habka haddii uu sheego. Waxay u baahan tahay ballaca unitiga.

Waxa la qaatay: leaf kasta oo dhagax ah ee nooc wuxuu ka samaysan yahay unitiga keliya ee nooca; leaf ka weyn hal ballac unitiga waxa loo tiriyaa tiro ballacyo unitiga, mid kastaa sida leaf jiifa; sidaas darteed unitiyada jaraan, cutyada iyo qaabab gaar ah lama tirin kala gooya. Halka aan lakab la calaamadin inuu ka samaysan yahay unitiga, lakabyada dhexe waxa loo qaataa leaf-yada, qoraalka sare shaxda ayaa sidaas sheegaya. **Amount** waa qiimaha iyo waxa uu qiimaha ku saleysan yahay, oo hadda waxa uu noqon karaa unitiga la dalbo, 1000 unit la dalbo ama m³ moorta.

Calaamadaha waa **tag** IFC-ga elementiga: beddel mid **Properties** (Tag) oo jadwalku wuu raacaa. Moodel IFC kasta, la rasmeeyay ama aan la rasmeyn, [Isku dar tirooyinka, liiska elementiyada iyo jadwalka meelaha](topic:quantity-totals) ayaa isku dara sifo kasta.

## Cabbirrada

Qorshuhu wuxuu muujiyaa dherer kasta oo darbi la rasmeeyay dhinaca dibadda (darbi gudaha ah: hal dhinac) iyo, darbiga leh albaab ama daaqad, silsilad ka bilaabanta geeska ilaa furaha kasta. {{ui:Cabbirrada}} wuxuu qarsadaa oo mar kale muujiyaa qaybta moodelka.

## Kaydi qorshaha sida PDF

1. Muuji dabaqa aad rabto oo deji unitiyada panelka **Levels**.
2. Guji {{ui:Daabac}} qalabka moodelka.
3. BimCraft wuxuu kaydiyaa "<file> — <level>.pdf": qorshaha madow iyo cad, cabbirka caadiga ah ee ugu weyn ee bogga ku dhex mushaaxaysa (1/4" = 1'-0", 1/8" = 1'-0" … Letter oo feet iyo inch, 1:50, 1:100 … A4 oo millimitir), darbiyada buuxsan, albaabbada, daaqadaha, magacyada qolalka iyo bedadkooda, cabbirrada, iyo xarig cinwaan oo leh dabaqa, faylka, heerka goynta, taariikhda iyo cabbirka.

PDF-ka waxa loo rasmeeyaa xariiqyo iyo qoraal, sidaas darteed wuu cad yahay cabbir kasta, qoraalkeeduna waa la baari karaa.

## Waxa muhiim ah

- Jadwallada waxay tirinayaan waxa qalabyada rasmeynta samaysay. Albaabbada iyo daaqadaha qalab kale laga soo qaatay waxay ka muuqdaan Quantity totals halkii.
- Si aad shaqada u qiimaysid, tirooyinka u dir TakeoffCraft: eeg [Tirooyinka TakeoffCraft](topic:takeoff). Downloadka CSV wuxuu ku sii jiraa spreadsheet.

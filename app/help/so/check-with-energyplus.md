---
title: Ka hubi kulaynta iyo qabowga EnergyPlus-ka
summary: Qor moodelka fayl EnergyPlus ah, ama ku socodsii EnergyPlus nooca 26.2.0 browser-ka, oo isku barbardhig culayska naqshadeynta iyo caawiyaha degdega ah ee kulaynta iyo qabowga. Fikrad labaad oo naqshadeynta hore, ma aha xisaabinta waafaqsanaanta.
keywords: energyplus, simulation tamarta, maalinta naqshadeynta, culaynta kulaynta, culaynta qabowga, faylka cimilada, epw, idf, cufnaanta kulaynta, tamarta sannadlaha, simulate
from: b82a5bf2
---

## Waxa aad samaynaysaa

Panelka **Ka hubi EnergyPlus-ka** wuxuu moodelka furan u qoraa fayl gelin EnergyPlus ah (IDF): hal goob qol kasta, derbiyada, dhulalka, saqafyada iyo daaqadaha oo leh U-values-kooda, isbeddelka hawada, iyo kulaynta iyo qabowga ee ku habboon. Mar walba waad **kaydin kartaa faylkaas** oo ku socodsiin kartaa EnergyPlus-kaaga.

Haddii aad sidoo kale engine-ka diyaariso, panelku wuxuu isla markiiba simulate samayn karaa, oo wuxuu liistaa kulaynta iyo qabowga naqshadeynta ee EnergyPlus-ka, ku dhinac-dhinac caawiyaha degdega ah, qol kasta.

Tani waa caawiye naqshadeyn. Heerarka tamarta, shahaadooyinka iyo ogolaanshaha waxay u baahan yihiin qalab la ansixiyay iyo xogta cimilada ay codsato, natiijadana waxay u baahan tahay dib-u-eegis ka timid qofka u jawaabaya.

## Diyaari engine-ka

BimCraft ma sido EnergyPlus. Waa dhismo WebAssembly oo weyn (qiyaastii 6 MB oo la cadaadiyay, iyo fayl xog 4.6 MB), sidaas darteed adigu ayaad martigelisaa oo ciwaanka ku qortaa panelka. Bogga wuxuu soo rarayaa kaliya markaad riixdo badhanka simulate, weligiis bilowga ma yeelan. Ciwaanku waa inuu noqdaa https, jid ku yaal goobtan, ama localhost.

## Maalmo naqshadeyn ama sannad

- **Samee maalmaha naqshadeynta** ma u baahna fayl cimilo. Waxay socodsiisaa maalin qabow oo jiilaal ah oo aan qorrax lahayn iyo maalin kulul oo cad oo xagaag ah, heerkulka lagu qoray gelinta kulaynta iyo qabowga ee tab-ka Daylight, wuxuuna sheegaa culaynta qol kasta watt-ka.
- **Samee sannad** wuxuu u baahan yahay fayl cimilo oo EPW ah oo aad dooratid. Wuxuu ku daraa dadka, nalalka iyo qalabka isla gelinta (had iyo jeer shidan, sababtoo ah jadwal lama abuurin), wuxuuna sheegaa tamarta kulaynta iyo qabowga qol kasta kWh-ga. Faylalka cimilada waxay leeyihiin liisanskooda, sidaas darteed isticmaal midka aad isticmaali karto.

## Cufnaanta kulaynta

Calaamadi **Derbiyada rakaabyo la yaqaan u sii cufnaanta kulaynta**: derbiyada, saqafyada iyo dhulalka rakaabkoodu la yaqaan waxa loo qoraa rakaab rakaab ah, iyadoo cufnaanta iyo kulaynta gaarka ah laga qaadayo miis gaaban oo qiyaasaha caadiga ah ku salaysan magaca agabka. Rakaabyada waxa lagu qaadaa dibada marka hore, siday faylku u liistay. Walxaha aan rakaab lahayn waxay ku sii jiraan U-value-kooda, iyada oo aan cufnaan lahayn.

## Akhrinta isbarbardhigga

Labada hab su'aalo kala duwan ayay ka jawaabaan. Caawiyaha degdega ah wuxuu hayaa walx kasta; faylka EnergyPlus-ku wuxuu celceliyaa U-values-ka qol kasta sida nooca dusha. Farqiga ka badan 15 % ee kulaynta naqshadeynta qol kasta waxa lagu liistaa qoraal ku jira panelka ⚠, oo leh labada tirooyin. Qabowga farqigu wuu ka weyn yahay naqshadeyn ahaan: caawiyaha degdega ah wuxuu xisaabiyaa kor-u-kaca qorraxda maalin keliya, EnergyPlus-kuna wuxuu cabbiraa maalinta naqshadeyntiisa.

---
title: Vumela umsizi we-AI asebenze nemodeli yakho
summary: Vula abasizi ku-Izilungiselelo ukuze umsizi kwikhompyutha yakho athole izinto, afunde izakhiwo zazo, azihlukanise embonweni nedwetshe izindonga, iminyango, amawindi, amaphansi, amazinga namagridi, ngoCadCraft Studio. Kuvaliwe kuze uvule.
keywords: ai, umsizi, mcp, isikripthi, ukuzenzakalela, studio, thola izinto, hlukanisa, izakhiwo, izimvume, nqamula, umsebenzi, dweba izindonga, engeza iminyango, engeza amawindi, amazinga, amagridi, amaphansi, hlehlisa, londoloza, umugqa womyalo, cli, ngaphandle kwewindi, sebenzisa nabasizi be-ai
from: c5ee595b
---

## Okuzofunda

Indlela yokuvumela umsizi we-AI (noma yimuphi umsizi okhuluma i-MCP) abheke imodeli ye-IFC evulekile futhi adwetshe kuyo, okuvunyelwe nokungavunyelwe, nendlela yokumyeka.

## Okungenziwa umsizi nge-BimCraft

| Icela | Kwenzekani | Kudingeka |
|---|---|---|
| Thola izinto | Uthola uhlu lwezinto ngeklasi, isitezi, igama, noma inani lempahla, njengoba **Thola** kwenza | Funda |
| Funda izakhiwo | Uthola izindawo zento eyodwa, uhlobo, amasethi wezakhiwo nezinani, njengoba **Izakhiwo** ikubonisa | Funda |
| Chaza imodeli, uhlu izindonga | Uthola amazinga, izindonga, iminyango, amawindi, amagumbi, amaphansi, amagridi namakholomu, nokuphela kwendonga ngayinye, uhlobo nokuphakama kwayo | Funda |
| Hlukanisa, bonisa ngokuqondakala, fihla noma bonisa | Ukubukwa kwe-3D kuyashintsha njengoba wayesebenzisile imenyu {{ui:Show}} | Shintsha ukubuka nokudweba |
| Dweba izindonga, iminyango, amawindi, amaphansi, amazinga noma imigqa yegridi | Imodeli iyashintsha njengoba wayesebenzise amathuluzi {{ui:Draw}}: izindonga ziyahlangana, amagumbi namaphansi nezindonga zilandela | Shintsha ukubuka nokudweba |
| Shintsha igama noma inani lempahla | Igama, Incazelo, Uhlobo lwento noma Ithegi lento eyodwa, noma inani lempahla eyodwa. Inani elabelana ngalo nezinye izinto liyakopishelwa kuqala; inani lohlobo lwayo lishintsha kuphela uma umsizi esho, ngoba yonke into yalolo hlobo iyalandela | Shintsha ukubuka nokudweba |
| Hambisa, susa, shintsha izindonga, iminyango namawindi | Izinto ziyahanjiswa noma zisulwe nalokho ezikubambile; izindonga ezidwetshwe ngamathuluzi {{ui:Draw}} ziyashintsha ngezikhawu zazo noma uhlobo, iminyango namawindi ngendawo, usayizi noma uhlobo lwawo, namagumbi nokuhlangana kuyalandela | Shintsha ukubuka nokudweba |
| Setha, lungisa nofunde uhlu | "Uhlu lomnyango ngomumo nelungu lomlilo, nomshini": umsizi ubiza uhlu, amakholomu alo (insimu noma ithegi iba ikholomu) kanye nokuhlanganiswa kwalo; i-BimCraft iligcwalisa emodelini iphinde iyakhonza, ngokuthatha lokho umsizi ongakushongo kumgomo wehhovisi. Uhlu luyajoyina uhlu lwakho lwe-{{ui:Schedules}}. Umugqa ngamunye oyithola ubiza izinto zawo, ukuze ukhethe | Funda ukuze ufunde; Shintsha ukubuka nokudweba ukuze ulondoloze isethingi |
| Hambisa uhlu | CSV, Excel, noma umbhalo ohlukaniswe ngamathebu ukuze unamathisele ku-Google Sheets (akukho okuthunyelwa ku-Google) | Hambisa |
| Funda futhi usethe ukuqedwa kwamagumbi | Izinhlobo zokuqedwa, ukuqedwa kwephansi, udonga nesiling yegumbi ngalinye, izindawo; izindawo, inani lamathayili nevolumu yesisekelo kulandela uhlu lokuqedwa | Funda; Shintsha ukubuka nokudweba ukuze usethe |
| Khetha izinto, hlehlisa izinyathelo zayo | Izinto zikhethwa embonweni; isinyathelo sayo sokugcina siyahlehliswa | Shintsha ukubuka nokudweba |
| Londoloza | Ifayela le-IFC elisha nazo zonke izinguquko, njengoba {{ui:Save as IFC}} ikwenza (ifayela lokuqala aliyikushintshwa) | Londoloza |
| Hambisa i-USD | Imodeli evulekile njenge-OpenUSD (.usda, .usdc noma .usdz), njengoba {{ui:USD}} kwibha yamathuluzi ikubhala | Hambisa |
| Nika isithombe, gijima umugqa wokurenda | Isithombe se-3D view, njengoba ingxoxo ye-{{ui:Render}} ikwenza ngezilungiselelo zakho zokurenda ngaphandle uma icela ezinye, noma izithombe ezinekhwalithi ephezulu zengezwe emugqeni wengxoxo bese zirenderwa zilandelana (umugqa udinga i-WebGPU). Akukho okushintshayo emodelini ([Renda isithombe](topic:render)) | Hambisa |

Yonke inguquko umsizi ayenza iyisinyathelo kwi-**Changes**, ibizwa ngokuthi "Assistant: …" (isibonelo "Assistant: add 4 walls"), ngakho {{key:Mod+Z}} ihlehlisa lonke isenzo sawo, futhi ungabona ukuthi isinyathelo sasiwesiphi. Ewindini akakwazi ukuvula amafayela: wena uvula imodeli; usebenza nalena evulekile.

## Vula

Abasizi bafika ku-BimCraft ngoCadCraft Studio kwikhompyutha yakho; isiphequluli esivamile asinayo indlela ngena.

1. Vula {{ui:Settings}} bese ukhetha ithebhu ye-**BimCraft**.
2. Ngaphansi kwesihloko **Abasizi**, khetha **Vumela abasizi be-AI nezikripthi basebenzise i-BimCraft**.
3. **Funda** ikhethiwe wena ngokuzenzakalelayo. Khetha **Shintsha ukubuka nokudweba** uma umsizi evunyelwe ukuhlukanisa nokufihla izinto nokudweba, nethi **Londoloza** uma evunyelwe ukulondoloza imodeli njengefayela elisha.
4. Xhumanisa umsizi ku-Studio (i-Studio ikhombisa ikheli nezilungiselelo okufanele uzinamathisele kuwo).

## Lapho umsizi exhunyiwe

Isaziso esiphezulu kwiphaneli yesokudla sitshela ukuthi ngubani umsizi oxhunyiwe nokuthi ungenzani. Chofoza {{ui:Disconnect}} ukuze uvale isikhathi sakhe masinyane; kufanele axhume futhi ukuze aqhubeke.

**Okwenziwe**, ngaphansi kwe-**Abasizi** ku-Settings, kuhlu lwakho lonke ukubizwa umsizi akwenzile, okokuqala okusha kakhulu, nokuthi kuphumelele yini.

:::tip
Buza ngamagama ajwayelekile, isibonelo "hlukanisa izindonga zangaphandle ku-Izinga 1", "yiziphi iminyango engenalo izinga lomlilo?" noma "dweba igumbi lamamitha ayi-6 ngama-4 ku-Izinga 1 nomnyango odongeni olusenyakatho". Umsizi uthola izinto abonise embonweni wakho, noma uzidwetshe.
:::

## Ngaphandle kwewindi: izikripthi nomugqa womyalo

Amathuluzi afanayo okudweba asebenza kumafayela e-IFC emafolda oyacacisayo, ngaphandle kwewindi evulekile: i-MCP server ye-CadCraft nomugqa womyalo angaqala isakhiwo esisha noma avule ifayela le-IFC, alichaze, angeze izindonga, iminyango, amawindi, amaphansi, amazinga namagridi, ahlehlise bese alilondoloza njengefayela elisha le-`.ifc`. Wena unquma ukuthi yimaphi amafolda angawasebenzisa nokuthi angashintsha noma alondoloze yini.

## Vala

Susa ukukhethwa kwe-**Vumela abasizi be-AI nezikripthi basebenzise i-BimCraft**. Wonke umsizi uyanqanyulwa ngokushesha, futhi izilungiselelo ziyagcinwa ukuze zisetshenziswe ngesikhathi esilandelayo.

## Bheka futhi

- [Izindlela zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye nemisebenzi ebiziwe.
- [Thola izinto ngeklasi, igama noma impahla](topic:find)
- [Fihla, hlukanisa nenze izinto zibonakale ngokuqondakala](topic:hide-and-isolate)
- [Izilungiselelo ze-BimCraft](topic:settings)

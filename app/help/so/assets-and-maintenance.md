---
title: Ku hay xogta hantida iyo diiwaanka dayactirka moodelka
summary: Isticmaal moodelka IFC ee la wareejiyay si aad dhismaha u shaqeyso: soo saaraha, moodelka, lambarka taxanaha, damaanadda iyo nolosha adeegga qalabka iyo qalabka guriga, iyo diiwaan shaqada dayactirka la sameeyay, oo dhan lagu qoro IFC.
keywords: wareejin, shahaadada dhammaystirka, shahaadada isticmaalka, as-built, xirmada wareejinta, hanti, diiwaanka hantida, maareynta guryaha, fm, hawlgal, dayactir, adeeg, damaanad, lambarka taxanaha, barcode, soo saaraha, moodel, nolosha adeegga, cobie, mataanaha dhijitaalka, dib u dhacay, waqtigu gaaray, shaqo-amar
from: b84ac492
---

Tab-ka {{ui:Hantida}} ee panel-ka midig ayaa furaha moodelka IFC u beddela diiwaan qalabka dhismaha. Wax kasta waxaa lagu qoraa IFC laftiisa, set-yada sifada iyo hawlaha IFC ee u gaarka ah, sidaas darteed barnaamijka xiga ee furaya faylka ayaa akhrinaya. Waxba lama soo rarin, server looma baahna: kaydi IFC-ga si aad u hayso.

## Waxa la liisto

- Qalabka iyo qalabka guriga: alaabta guriga, qalabka musqusha, qalabka iftiinka, qalabka guriga, terminal-ada hawada, valve-yada, pump-yada, fan-yada, boiler-yada, tank-yada, outlet-yada, switchboard-yada, lift-yada iyo walxo kale oo sidaas ah, iyo alaabta maktabadda leh xogta qalabka.
- Walxo kale oo aad **raacdo**: dooro moodelka (albaab, darbi, pump oo loo sameeyay shay caadi ah) oo guji {{ui:Raac wixii la doortay}}.
- Wax kasta oo horay u leh xogta hantida ama hawl dayactir, oo halkan ama barnaamij kale lagu qoray.

Waxa dib u dhacay ayaa marka hore yimaadda, kadibna waxa waqtigu gaarayo 30 maalmood gudahood. Shaandee magaca, tag-ka, soo saaraha, moodelka ama lambarka taxanaha, dabaqa, ama dooro {{ui:Kaliya kuwa dib u dhacay ama 30 maalmood gudahood}}.

## Xogta hantida

Guji hanti liiska ku jirta (ama dooro moodelka) si aad u furto xogtiisa: soo saaraha, moodelka, tixraaca moodelka, lambarka taxanaha, barcode, maalinta la rakibay, lambarka damaanadda iyo bilowga iyo dhammaadkeeda, iyo nolosha adeegga sannado ahaan. {{ui:Kaydi xogta}} wuxuu qoraa hal tallaabo ({{key:Mod+Z}} ayaa ka noqda). Sanduuq madhan ka dhig si aad qiimahaas uga saarto.

## Dukumentiyada

Xogta hoosteeda, {{ui:Dukumentiyo}} wuxuu liistaa buugaagta, damaanadaha, sawirrada, shahaadooyinka iyo naqshadaha la xidhiidha hantida. Dooro nooca, bixi cinwaan (ama ka tag madhan: magaca faylka ayaa la isticmaalaa), oo qor meesha uu ku yaal:

- **cinwaan web** (`https://…`): wuxuu helayaa Open link, kaas oo furaya tab cusub;
- ama **magaca fayl ama jid** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, network share): ku hay faylasha agtiisa IFC-ga, isla folder-ka ama mid ka hooseeya, si magacyadu u shaqeeyaan marka folder-ka la wareejiyo. BimCraft wuxuu muujiyaa magaca; faylka ka fur folder-ka.

Faylasha laftooda lama soo rarin ama lama koobiyeeyo IFC-ga: waxaa la qoraa oo keliya xidhiidhka. Cinwaan web oo password ku jira, iyo xidhiidh kasta oo aan ahayn cinwaan web ama fayl (sida `javascript:`), waa la diidaa. {{ui:Ka saar}} wuxuu dukumentiga ka saaraa hantida (hal tallaabo; {{key:Mod+Z}} ayaa ka noqda).

Dukumentiyada barnaamij kale ku dhigay walxa ayaa sidoo kale la liistaa. Dukumentiyada ku jira **nooca** walxa waxay muujinayaan walxaha isku nooca ah oo dhan, waxayna sheegaan taas; isbedelkooda ka samee meesha nooca laga sameeyay.

Gudaha IFC dukumenti kasta waa IFC document reference oo walxa ku xiran, nooceeda oo lagu hayo xidhiidhkaas, IFC4 iyo IFC2X3 labadaba.

## Diiwaanka dayactirka

Hoos dukumentiyada, {{ui:Diiwaan geli shaqada la sameeyay}}: maalinta la sameeyay, shaqada, cidda sameysay, goorta xigta ee la gaarayo iyo qoraalo. Qoraal kasta waa hal tallaabo; {{ui:Wax ka beddel}} iyo {{ui:Tirtir}} waxay beddelaan mar dambe. Taariikhda xigta ee qoraalka ugu dambeeya ayaa go'aamisa in hantidu dib u dhacday ama si dhaqso ah u socota.

## Sida loo hayo IFC-ga

- Soo saaraha iyo moodelka gudaha `Pset_ManufacturerTypeInformation`, lambarka taxanaha, barcode-ka iyo maalinta la rakibay gudaha `Pset_ManufacturerOccurrence`, damaanadda gudaha `Pset_Warranty`, nolosha adeegga gudaha `Pset_ServiceLife`, walxa laftiisa. Marka nooca walxa horay u leeyahay soo saare ama moodel, wuu muuqdaa ilaa aad qortid kaaga.
- Qoraal kasta oo dayactir waa IFC **task** nooca dayactirka ah, walxa ku xiran, taariikhaheeda (IFC4 sidoo kale waqtiga hawsha), iyo set-ka `CadCraft_Maintenance` oo leh maalinta, cidda sameysay iyo maalinta xigta.
- Qiimayaasha walxaha kale wadaagaan waa la koobiyeeyaa marka hore: beddelka hal hanti ma beddelo kuwa deriska ah.
- Faylasha IFC2X3 ee duugga ah taariikhaha waxaa lagu qoraa qoraal (YYYY-MM-DD); nooca ayaa u baahan diiwaan taariikh gaar ah oo halkaas, taas oo BimCraft aanu qorin.

## Akhriska sensorrada

Fur {{ui:Qiimaha sensorrada}} iyo {{ui:Fur akhrisyada (CSV)…}} si aad u soo gashid akhrisyo laga soo dhoofiyay nidaamka maamulka dhismaha, data logger ama miis-xisaab:

- **Tiirka koowaad waa waqtiga**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ama ilbiriqsiyo Unix. Waqti aan aag lahayn waxaa la akhriyaa aagga waqtiga kombiyuutarkaaga. Taariikhaha maalinta-ugu-horreeya sida `23/10/2026` lama akhriyo (waa is-qabsanayaan); dhoofi taariikhaha ISO.
- **Tiir kasta oo kale waa hal sensor**, oo madaxiisa lagu qoray **tag**, **name** ama **GlobalId** hantidiisa. Madax aan hanti u dhigmin, ama in ka badan hal hanti u dhigma, waa la liistaa oo laga reebaa. Commas, semicolons ama tabs ayaa kala soocaya tiirarka; marka semicolons ama tabs la isticmaalo, koma tobanle (`21,5`) waa la akhriyaa.
- Waqtiyada ama qiimayaasha aan la akhriyi karin (eray, ama unug uu ku qoran yahay unug cabbir) waa la tiriyaa oo laga reebaa, weligood looma male-yeelo.

Akhriska ugu dambeeya wuxuu muuqdaa tiirka {{ui:Akhriska}} ee liiska iyo bloke {{ui:Sensor}} ee hantida, oo leh **chart** ee akhrisyada oo dhan (telefoonka chart-yada waa la sugaa ilaa aad gujiso {{ui:Muuji jadwalka}}). Deji **xadka hoose iyo xadka sare** iyo cutub hantida, kadibna {{ui:Kaydi xadadka}}: akhris ka baxsan xaddadaas wuxuu calaamadeeyaa hantida. Calaamadee {{ui:Ku muuji moodelka}} si aad hanti kasta midabka ugu sawirto akhriskeeda — buluug marka ka hooseyso xadka hoose, cagaar gudaha xadadka, casaan marka ka sarreyso xadka sare, iyo, hantida aan xad lahayn, miisaan buluug oo keliya oo ka bilaabmaya akhriska ugu hooseeya ilaa ugu sarreeya — iyo akhriskeeda sida calaamad (ilaa 60 calaamadood, kuwa calaamadaysan marka hore).

**Akhrisyada waxay ku sii jiraan tab-kan browser-ka**: lama kaydiyo IFC-ga, mana loo diro meel kale; xiliga xiga CSV-ga mar kale fur. **Xadadka waa la kaydiyaa IFC-ga** (set `CadCraft_Sensor` oo walxa ku jira: Low, High, Unit), sidaas darteed qofka xiga ee furaya faylka wuxuu arkaa calaamadaha isku mid ah.

## Akhrisyada toosa ah

{{ui:Xogta toosa}} wuxuu akhriyaa qiimayaasha markay dhacaan, **si toos ah browser-kan ilaa nidaamkaaga**. Waxba ma marayo server-keenna, waxna lama kaydiyo meel kale marka laga reebo tab-ka browser-kaaga. Waxba ma xidhmayo marka faylku furmo: kaliya {{ui:Xidhiidh}} ayaa taas sameeya.

- **MQTT over WebSockets**: cinwaanka dhegaystaha WebSocket ee broker-kaaga (`wss://broker.example.com:8884/mqtt`), iyo mawduuc ama in ka badan oo leh `{tag}` halka tag-ka hantida laga dhigo, tusaale `site/{tag}/temperature` (BimCraft wuxuu ku diiwaangeliyaa `site/+/temperature` wuxuuna akhriyaa tag-ka mawduuca fariin kasta). Mawduucyada aan `{tag}` lahayn waxay magacaabaan sensor-ka laftiisa. Fariintu waa lambar caadi ah (`21.5`) ama JSON sida `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (deji {{ui:Goobta qiimaha ee JSON-ka}} haddii tiirkaagu magac kale yeelanayo).
- **Weydii cinwaan (HTTP)**: cinwaan web oo nidaamka maamulka dhismahaaga ama script yar oo aad leedahay ku jawaabo, oo la weydiiyo ilaa tiro ilbiriqsi ah (ugu yaraan 5). Waxay ku jawaabi kartaa JSON oo tag lagu furay (`{"AHU-1": 21.5}`), liis JSON ah (`[{"tag": "AHU-1", "value": 21.5}]`), ama CSV oo akhrisyo ah sida kor. Haddii aanu jawaabin, BimCraft wuxuu sugaa laba jibbaar wakhtigaas ka hor inta uusan mar kale weydiin, ilaa shan daqiiqo.

Akhris kasta wuxuu u gaaraa hantida magaceeda, tag-keeda, ama GlobalId-keeda uu sheegay, sida tiir CSV oo kale; magacyada aan hanti u dhigmin waa la liistaa. Akhrisyadu waxay ku biiraan {{ui:Qiimaha sensorrada}}: liiska, chart-yada, xadadka iyo midabka moodelka waxay u shaqeeyaan sidii hore.

**Password-kaaga ama token-kaaga** waa la qoraa xidhiidh kasta: waa la siiyaa xidhiidhka, sanduuqana waa la madhiyaa; marna lama kaydiyo browser-kan ama IFC-ga. Token-ku wuxuu u socdaa header `Authorization: Bearer` caadi ah, cookies lama diro.

{{ui:Ku hay dejimahan IFC-da}} wuxuu qoraa cinwaanka, mawduucyada, goobta qiimaha iyo sida uu u weydiiyo moodelka (set `CadCraft_Feed` ee mashruuca; password goob uma leh), sidaas darteed qofka xiga ee furaya faylka wuxuu qoraa login-kiisa oo keliya wuxuuna gujiyaa {{ui:Xidhiidh}}. Ha dhigin password ama furaha cinwaanka laftiisa: cinwaan leh magac isticmaale iyo password ku jira waa la diidaa.

:::note
**Waxa broker-kaaga ama cinwaankaagu u baahan yahay.** Bogga browser-ku wuxuu kaliya la hadli karaa server oggolaanaya:
- Bogga waa amni (https), sidaas darteed browser-ku wuxuu ku xidhmaa kaliya cinwaanada `wss://` iyo `https://` — marka laga reebo kombiyuutarkaaga (`localhost`), halkaas oo `ws://` iyo `http://` ay ku shaqeeyaan tijaabada.
- Cinwaanka HTTP waa inuu ogolaadaa codsiyada bogagga (CORS: header-ka `Access-Control-Allow-Origin`, iyo `Authorization` ka mid ah headers-ka la ogolaaday haddii aad token isticmaashid).
- Broker-yada badankood (Mosquitto, EMQX, HiveMQ iyo kuwa kale) waxay bixiyaan dhegaystaha WebSocket; inta badan waa la damiyaa ilaa la shido. BimCraft wuxuu hadlaa MQTT 3.1.1.
:::

**Digniin ma jirto** marka BimCraft la xiro: xadadku waxay calaamadeeyaan hantida inta moodelku furan yahay oo feed xidhiidh la xidhan yahay. Dhismo la ilaaliyo saacadaha oo dhan wuxuu u baahan yahay server, BimCraft ma socodsiiyo.

## Faylka COBie

**COBie** waa miiska wareejinta ee milkiilayaasha iyo kooxaha hantida inta badan weydiista (oo ay soo saartay National BIM Standard ee Mareykanka; BS 1192-4 ee Ingriiska). Fur {{ui:Miiska COBie}} tab-ka:

- {{ui:U kaydi sida COBie (.xlsx)}} wuxuu qoraa xaashiyada COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document iyo Attribute — moodelka iyo xogta hantida: dhismaha, dabaqyadiisa iyo qolalkiisa (bedadka quantities-ka moodelka), hanti kasta oo component ah leh lambarka taxanaha, maalinta la rakibay, bilowga damaanadda, tag-ka iyo barcode-ka, nooca oo leh soo saaraha, moodelka, nolosha adeegga iyo dhererka damaanadda, nidaamyada ay ka tirsan tahay, diiwaanka dayactirka sida jobs iyo dukumentiyada xidhiidhka. Component kasta wuxuu xambaarayaa IFC GlobalId ee walxa. Qor cinwaanka emailkaaga tiirka "created by" ee COBie, ama ka tag madhan (markaas wuxuu leeyahay n/a). Qiimayaasha moodelku ma lahan waxay leeyihiin **n/a**; tiirarka qaybta waxay xambaaraan fasalka IFC, ma aha koodka OmniClass.
- {{ui:Akhri miiska COBie…}} wuxuu dib u akhriyaa mid laga soo bilaabay BimCraft ama barnaamij kale, oo **wuxuu liistaa isbedel kasta marka hore**: hantida, qiimaha, ka-maxay ilaa-maxay, iyo dukumentiyo cusub. {{ui:Codso}} wuxuu qoraa dhammaantood hal tallaabo ({{key:Mod+Z}} ayaa ka noqda). Safyada waa la isku xidhaa GlobalId, kadibna magaca component-ka. Safyada aan wax moodelka ku xidhnayn waa la liistaa, lama darin.

Miiska waa la tixgeliyaa mid aan la isku halayn karin: formulas lama akhriyo lamana fulin (kaliya qiimihii ugu dambeeyay ee unugga laga kaydiyay), qiime ku dhammeeya damaanadda ka hor bilowga iyo xidhiidh dukumenti oo aan ahayn cinwaan web ama magac fayl waa la dhaafaa oo la tiriyaa, buugaag aad u waaweyn waa la diidaa. Jobs-ka COBie waa shaqada qorsheysan ee nooca, waa la qoraa laakiin lama akhriyo mar kale. Miiska BimCraft qoro, qoraal ay miiska ka qaadan karto formula (oo bilaabma `=`, `+`, `-` ama `@`) waa lagu calaamadiyaa inuu yahay qoraal.

Buugga shaqada waxaa lagu hubiyay tijaabooyinkeenna iyada oo la barbardhigayo akhristaha miiska madaxbannaan; ma uu marin COBie validator. Haddii kooxda la wareejinayo mid isticmaasho, noo sheeg waxa uu sheegayo.

## Dukumentiyada wareejinta

Waraaqaha loo geeyo milkiilaha dhismaha dhammaystiran waxay khuseeyaan mashruuca, ma aha hal hanti. Tab-ka {{ui:Hantida}} fur {{ui:Dukumentiyada wareejinta}}:

1. {{ui:Ku dar dukumenti}}, dooro nooca (shahaadada dhammaystirka, shahaadada isticmaalka, damaanad, buug-gacmeed, sawirrada as-built, kale), oo qor cinwaankiisa, taariikhda la soo saaray, cidda soo saartay iyo lambarka tixraaca.
2. Sheeg meesha uu ku yaal: cinwaan web, magaca fayl ee agtiisa IFC-ga lagu hayo, ama {{ui:Faylka ku lifaaq}}.
3. {{ui:Liiska ku dar}}. {{ui:Wax ka beddel}} iyo {{ui:Ka saar}} waxay beddelaan liiska; mid kasta waa hal tallaabo oo laga noqon karo.

{{ui:Dhis xirmada wareejinta}} wuxuu soo dejiyaa hal zip: bog hordhac ah oo liistaa dukumenti kasta, isla liiska sida miiska, buugga COBie (dukumentiyada ku jira xaashiga Document, safyo ku saabsan Facility), moodelka, iyo faylasha kasta ee lifaaqan. Shahaadada dhammaystirka ama isticmaalka oo weli liiska ku jirin waa la magacaabaa bogga hordhaca; xirmada si kastaba ha ahaatee ayaa la dhisaa.

Moodelka xirmada gudihiisa waa **moodelka as-built**: wuxuu sheegayaa walxaha la cabbiray goobta. Isaga la socda, folder-ka `as-built`: bayaanka, liis walxo kasta oo leh xaaladda xaqiijinta, set-ka naqshadaha sida hadda yihiin hal PDF (naqshadaha as-built), iyo diiwaanka isbedelka naqshadaha markii moodelku soo saaray set-yo. Eeg [Calaamadee walxaha la hubiyay ama la xaqiijiyay goobta](topic:verification).

- Faylka IFC dukumenti kasta waa IfcDocumentInformation oo mashruuca ku xiran (IfcRelAssociatesDocument), oo leh cinwaankiisa, tixraaca, taariikhda, soo saaraha iyo meeshiisa, si barnaamijyada kale u liistaan.
- Fayl lifaaqan waxaa lagu diiwaangeliyaa magaca, cabbirka iyo SHA-256. Si aad faylka laftiisa mashruuca ula hayso, isticmaal {{ui:Kaydi mashruuca xirmo ahaan}} (.ccbundle wuxuu hayaa moodelka iyo faylasha lifaaqan; furiddiisa ayaa soo celinaysa, mid kastaba waa la hubinayaa diiwaankiisa). Kaydinta caadiga ah ayaa idin weydiisa midkee rabtaan.
- IFC caadi ah wuxuu hayaa diiwaanka, faylka ma hayo: furidda ka dib, isticmaal {{ui:Faylka mar kale ku lifaaq}}. Faylka isku mid ah waa la aqoonsadaa; faylka kale ayaa diiwaanka beddela.

## CSV

{{ui:CSV}} wuxuu kaydiyaa hanti kasta oo leh xogteeda, qoraal kasta oo dayactir iyo dukumenti kasta, safka kasta hal hal, oo loogu talagalay miis-xisaab ama barnaamij kale oo dayactirka.

:::note
Aan la dhisin: adeeg la martiqaaday oo kaydiya akhrisyada oo digniinaha u diri kara marka BimCraft la xiro, iyo akhriska jobs-ka COBie oo dib loo akhriyo. Eeg [Weli lama dhisin](topic:not-built-yet).
:::

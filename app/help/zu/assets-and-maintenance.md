---
title: Gcina idatha yezimpahla nerekhodi lokulondolozwa emodelini
summary: Sebenzisa imodeli ye-IFC enikezwe ukuze uphathe isakhiwo: umkhiqizi, imodeli, inombolo yochungechunge, iwaranti nesikhathi sokusebenza kwezinsiza nezinto ezifakiwe, kanye nerekhodi lomsebenzi wokulondolozwa, konke kubhalwe ku-IFC.
keywords: ukunikezela, isitifiketi sokuqedwa, isitifiketi sokuhlala, njengokwakhiwe, iphakheji lokunikezela, izimpahla, irejista yezimpahla, ukuphatha izakhiwo, fm, ukusebenza, ukulondolozwa, isevisi, iwaranti, inombolo yochungechunge, ibhakhodi, umkhiqizi, imodeli, isikhathi sokusebenza, cobie, iphinde yakhe ngokudijithali, ephuzile, ifika, i-odolo yomsebenzi
from: b84ac492
---

Ithebhu {{ui:Assets}} kuphaneli yesokudla iguqula imodeli evulekile ibe irekhodi lezinsiza zesakhiwo. Konke kubhalwa ku-IFC ngokwayo, ngama-property set nemisebenzi yayo, ukuze uhlelo olulandelayo oluvula ifayela luyifunde nakho. Akukho okulayishwayo, futhi akudingeki iseva: londoloza i-IFC ukuze uyigcine.

## Okudwetshiwe

- Izinsiza nezinto zokufaka: ifenisha, izinto zasendlini yangasese, izinto zokukhanyisa, izinsiza zasekhishini, izinto zomoya, amavalvu, amaphampu, izibambi zomoya, amabhoyila, amathangi, amaawutlethi, amabhodi kagesi, amalifti nezinye izinto ezinjalo, nezinto zomtapo ezinedatha yezinsiza.
- Noma yini enye oyilandelayo: khetha emodelini (umnyango, udonga, ipheshi edwetshwe njengento evamile) bese uchofoza {{ui:Track picked}}.
- Noma yini esevele inedatha yezimpahla noma umsebenzi wokulondolozwa, ebhalwe lapha noma yinhlelo enye.

Okuphuzile kuqala, bese kufika phakathi kwezinsuku ezingu-30. Hlunga ngegama, ithegi, umkhiqizi, imodeli noma inombolo yochungechunge, ngezinga, noma chofoza {{ui:Only overdue or due within 30 days}}.

## Idatha yempahla

Chofoza impahla ohlwini (noma uyikhethe emodelini) ukuze uvule idatha yayo: umkhiqizi, imodeli, inkomba yemodeli, inombolo yochungechunge, ibhakhodi, usuku olufakwe ngalo, inombolo yewaranti nokuqala nokuphela kwayo, nesikhathi sokusebenza ngeminyaka. {{ui:Save the data}} ibhala konke ngesinyathelo esisodwa ({{key:Mod+Z}} iyahlehlisa). Shiya ibhokisi lingenalutho ukuze ususe leyo nani.

## Imibhalo

Ngaphansi kwedatha, {{ui:Documents}} ibala imanuwali, iwaranti, izithombe, izitifiketi nemidwebo exhunywe kempahleni. Khetha uhlobo, unikeze isihloko (noma ushiye lingenalutho: kusetshenziswa igama lefayela) bese uchaza lapho itholakala:

- **ikheli lewebhu** (`https://…`): liba nesixhumanisi sokuvula, esivula ithebhu entsha;
- noma **igama lefayela noma indlela** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, i-network share): gcina amafayela eduze kwe-IFC, esiqondisweni esifanayo noma esingaphansi kwaso, ukuze amagama asasebenze uma unikeza isikhwama. I-BimCraft ibonisa igama; vula ifayela kusuka esiqondisweni.

Amafayela ngokwawo awalayishwa noma akopishelwa ku-IFC: kubhalwa isixhumanisi kuphela. Ikheli lewebhu elinephasiwedi kulo, nanoma yisiphi isixhumanisi esingesona ikheli lewebhu noma ifayela (njengo `javascript:`), ziyenqatshwa. {{ui:Remove}} isusa idokhumenti kwempahla (isinyathelo esisodwa; {{key:Mod+Z}} iyahlehlisa).

Imibhalo ebekwe yenye inhlelo ekuleli nto nayo iyabhalwa ohlwini. Imibhalo ekuhlobo **lwento** ibonakala kuyo yonke into yalolo hlobo futhi iyashoyo lokho; yenza ushintshe lapho uhlobo lwenziwa khona.

Ku-IFC idokhumenti ngayinye iyinkomba yedokhumenti ye-IFC exhunywe kulento, nohlobo lwayo lugcinwe kulowo xhumano, ku-IFC4 nasku-IFC2X3 ngokufanayo.

## Irekhodi lokulondolozwa

Ngaphansi kwemibhalo, {{ui:Record work done}}: usuku umsebenzi owenziwe ngalo, umsebenzi, owewenzile, lapho okulandelayo kufanele kwenziwe khona, nezinsiza. Yonke intulo ingesinyathelo esisodwa; {{ui:Edit}} ne-{{ui:Delete}} ziyishintsha kamuva. Usuku lokufika olusha kakhulu lwentulo lunquma ukuthi impahla iphuzile noma izofika maduze.

## Indlela okugcinwa ngayo ku-IFC

- Umkhiqizi nemodeli ku-`Pset_ManufacturerTypeInformation`, inombolo yochungechunge, ibhakhodi nosuku olufakwe ngalo ku-`Pset_ManufacturerOccurrence`, iwaranti ku-`Pset_Warranty`, nesikhathi sokusebenza ku-`Pset_ServiceLife`, kulento uqobo. Uma uhlobo lwento seluke lunomkhiqizi noma imodeli, lubonakala size usibhale sakho.
- Ukulondolozwa ngakunye kuyi-IFC **task** yohlobo lokulondolozwa, exhunywe kulento, nezinsuku zayo (ku-IFC4 futhi njengezikhathi zomsebenzi ngokwawo) kanye nesethi `CadCraft_Maintenance` enosuku, owenzile nosuku olulandelayo olufanele.
- Amanani okwabelana ngawo izinto ziyakopishelwa kuqala: ukushintsha impahla eyodwa akuyishintshi omakhelwane bayo.
- Emafayeleni akudala e-IFC2X3 izinsuku zibhalwa njengombhalo (YYYY-MM-DD); lolo guqulo ludinga irekhodi ledethi elihlukile lapho, into i-BimCraft engayibhali.

## Izifundo zezinzwa

Vula {{ui:Sensor values}} bese {{ui:Open readings (CSV)…}} ukuze uletha izifundo ezithunyelwe kusuka ohlelweni lokuphatha isakhiwo, kusuka kulogger wedatha noma kwi-spreadsheet:

- **Ikholomu yokuqala iyisikhathi**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` noma imizuzwana ye-Unix. Isikhathi esingenazo izone sifundwa ngesikhathi sezone yekhompyutha yakho. Amadethi aqala ngosuku njengo `23/10/2026` ayafundwa (ayabhida); thumela amadethi e-ISO.
- **Yonke enye ikholomu iyinzwa eyodwa**, ikhanda layo lingu-**ithegi**, **igama** noma i-**GlobalId** yempahla yayo. Ikhanda elingafani nanoma iyiphi impahla, noma elifana nezimpahla ezingaphezu kweyodwa, liyabhalwa futhi likhishwe. Amakhoma, amasemikholoni noma amathebu ahlukanisa amakholomu; ngamasemikholoni noma amathebu, ikhefu lamadesimali (`21,5`) liyafundwa nalo.
- Izikhathi noma amanani angafundeki (igama, iyunithi ethayipiwe eseleni) ayabalwa futhi ayakhishwa, akuqagelwa.

Ukufunda kwakamuva kubonakala ekholomini {{ui:Reading}} yohlu nasebhokisini {{ui:Sensor}} lempahla, nesithombe esinesithombe **ishathi** sazo zonke izifundo (esidlekeni, amashathi alinda ukuthi uthepha {{ui:Show the chart}}). Setha **umkhawulo ophansi nophezulu** neyunithi empahleni bese {{ui:Save the limits}}: ukufunda okuphandle kwawo kumaka impahla. Khetha {{ui:Show on the model}} ukuze udaye impahla ngayinye ngokufunda kwayo — eluhlaza okwesibhakabhaka ngaphansi komkhawulo ophansi, eluhlaza ngaphakathi kwemikhawulo, ebomvu ngaphezu komkhawulo ophezulu, futhi, kwezimpahla ezingenayo imikhawulo, isikali esisodwa seluhlaza okwesibhakabhaka kusuka ekufundweni okuphansi kakhulu kuye ekuphezulu kakhulu — nokufunda kwayo njengelebula (kuze kube ngama-60 amalebula, okumakiwe kuqala).

**Izifundo zihlala kule thebhu yesiphequluli**: azilondolozwa ku-IFC futhi azithunyelwa noma kuphi; vula i-CSV futhi ngesikhathi esilandelayo. **Imikhawulo igcinwa ku-IFC** (i-set `CadCraft_Sensor` kulento: Low, High, Unit), ngakho umuntu olandelayo ovula ifayela ubona amakhalishi afanayo.

## Izifundo eziphilayo

{{ui:Live feed}} ifunda amanani njengoba eshintsha, **ngqo kusuka kulesi siphequluli kuya kohlelo lwakho**. Akukho okudlula iseva yethu futhi akukho okugcinwa noma kuphi ngaphandle kwethebhu yakho yesiphequluli. Akukho okuxhuma lapho ifayela livulwa: kuphela {{ui:Connect}} iyakwenza lokho.

- **MQTT ngama-WebSockets**: ikheli lesilaleli se-WebSocket sombrokha wakho (`wss://broker.example.com:8884/mqtt`), nezihloko ezilodwa noma ezimbalwa ezine-`{tag}` lapho kufakwa khona ithegi lempahla, isibonelo `site/{tag}/temperature` (i-BimCraft ibhalisela `site/+/temperature` ifunde ithegi kusihloko ngasinye somlayezo). Izihloko ezingenayo `{tag}` zibiza izinzwa ngokwazo. Umlayezo ungaba inombolo elula (`21.5`) noma i-JSON njengo `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (setha {{ui:Value field in JSON}} uma eyakho ibizwa ngenye into).
- **Buza ikheli (HTTP)**: ikheli lewebhu inhlelo yakho yokuphatha isakhiwo noma isikripthi sakho esincane esiphendulayo, esibuzwa njalo ngamasekhondi athile (okungenani ama-5). Lingaphendula nge-JSON ekhiyelwe ngethegi (`{"AHU-1": 21.5}`), uhlu lwe-JSON (`[{"tag": "AHU-1", "value": 21.5}]`), noma i-CSV yezifundo njengaleyo engenhla. Uma lingaphenduli, i-BimCraft ilinda kabili isikhathi ngaphambi kokubuza futhi, kuze kube imizuzu emihlanu.

Ukufunda ngakunye kuyaempahleni ethegi, igama noma i-GlobalId yayo kubizwa kuyo, njengakukholomu ye-CSV; amagama angafani nanoma iyiphi impahla ayabalwa. Izifundo zijoyina {{ui:Sensor values}}: uhlu, amashathi, imikhawulo nemibala emodelini kusebenza ngendlela efanayo.

**Iphasiwedi noma ithokheni yakho** ithayipwa ngokuxhuma okukodwa: iphiwa kuxhumo bese ibhokisi liyahlanzwa; ayilondolozwa kule thebhu yesiphequluli noma ku-IFC. Ithokheni ihamba njengesihloko esijwayelekile se-`Authorization: Bearer`, futhi azikho ama-cookie athunyelwa.

{{ui:Keep these settings in the IFC}} ibhala ikheli, izihloko, insimu yenani nokuthi kangaki kubuzwa emodelini (i-set `CadCraft_Feed` kwiphrojekthi; ayikho insimu yephasiwedi), ukuze umuntu olandelayo avula ifayela athayipe ulwazi lwakhe lokungena bese echofoza {{ui:Connect}}. Ungafaki iphasiwedi noma ukhiye ekhelini ngokwalo: ikheli elinegama lomsebenzisi nephasiwedi kulo liyenqatshwa.

:::note
**Okudingwa yibhrokha noma ikheli lakho.** Ikhasi lesiphequluli lingakhuluma kuphela neseva evumela lokho:
- Ikhasi liphephile (https), ngakho isiphequluli sixhuma kuphela kumakheli `wss://` ne-`https://` — ngaphandle kwekhompyutha yakho (`localhost`), lapho `ws://` ne-`http://` zisebenza ekuhloleni.
- Ikheli le-HTTP kumele livume izicelo kusuka kulelikhasi (CORS: ikhanda `Access-Control-Allow-Origin`, kanye ne-`Authorization` phakathi kwamakhanda avumelekile uma usebenzisa ithokheni).
- Ababrokha abaningi (Mosquitto, EMQX, HiveMQ nabanye) banikeza isilaleli se-WebSocket; sivame ukuba sivalwe size sivulwe. I-BimCraft ikhuluma i-MQTT 3.1.1.
:::

Akukho **zaziso** lapho i-BimCraft ivaliwe: imikhawulo imaka impahla kuphela ngenkathi imodeli ivulekile futhi kuxhunywe isifudlana. Ukuqapha isakhiwo ngezikhathi zonke kudinga iseva, into i-BimCraft ingayenzi.

## Ishidi le-COBie

**COBie** iyispreadsheet yokunikezela abaningi abanikazi nezikhungo zokuphatha bayicela (ishicilelwe yi-National BIM Standard e-US; BS 1192-4 e-UK). Vula {{ui:COBie spreadsheet}} kuthebhu:

- {{ui:Save as COBie (.xlsx)}} ibhala amashidi e-COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document and Attribute — kusukela emodelini nasedatheni yempahla: isakhiwo, amazinga aso namagumbi (izindawo zivela kwinani lemodeli), yonke impahla njengecomponent enenombolo yochungechunge, usuku olufakwe ngalo, usuku lokuqala lewaranti, ithegi nebhakhodi, uhlobo lwayo nomkhiqizi, imodeli, isikhathi sokusebenza nobude bewaranti, amasistimu azo, irekhodi lokulondolozwa njengemisebenzi nemibhalo exhunywe kuyo. Yonke icomponent iphethe i-GlobalId ye-IFC yento. Thayipha ikheli lakho le-imeyili ukuze kukholomu ye-COBie ethi "created by", noma ushiye lingenalutho (lapho lithi n/a). Amanani emodeli angawanaye athi **n/a**; amakholomu wezigaba aphethe igama lekilasi le-IFC, hhayi ikhodi ye-OmniClass.
- {{ui:Read a COBie spreadsheet…}} ifunda enye ngasemuva, evela ku-BimCraft noma enye inhlelo, bese **ibala konke okushintshile kuqala**: impahla, inani, elisuka kulo kuya kulo, nemibhalo emisha. {{ui:Apply}} ibhala konke ngesinyathelo esisodwa ({{key:Mod+Z}} iyahlehlisa). Imigqa ihlanganiswa nge-GlobalId, bese ngegama lecomponent. Imigqa engahlangani nalutho emodelini iyabalwa, ayengezwa.

Ishidi liphathwa njengelingathembeki: izifomula azifundwa noma azisebenzi (kuphela inani elilondolozwe ekugcineni kuseli), inani elingenza iwaranti iphele ngaphambi kokuqala kwayo nesixhumanisi somnyango esingesona ikheli lewebhu noma igama lefayela aziphathwa futhi ziyabalwa, namabhukhu amakhulu kakhulu ayenqatshwa. Imisebenzi ye-COBie iyimisebenzi ehlelelwe uhlobo, ibhalwa kodwa ayifundwa ibuyele. Kuspreadsheet i-BimCraft ebhala, umbhalo ongaba yifomula ngokwawo (uqala nge-`=`, `+`, `-` noma `@`) umakwa njengombhalo.

Lencwadi yomsebenzi ihlolwe ezivivinyweni zethu ngomfundi we-spreadsheet ozimele; ayikadlulwa i-validator ye-COBie. Uma ithimba elithola liyisebenzisa, sitshele ukuthi ithini.

## Amadokhumenti okunikezela

Amaphepha emukelwa umnikazi lapho isakhiwo sesiqediwe ngawo ayephrojekthi, hhayi empahleni eyodwa. Ku-ithebhu ye-{{ui:Assets}}, vula {{ui:Handover documents}}:

1. {{ui:Add a document}}, khetha uhlobo lwayo (isitifiketi sokuqedwa, isitifiketi sokuhlala, iwaranti, imanuwali, imidwebo njengokwakhiwe, okunye), bese uthayipha isihloko sayo, usuku lokukhishwa, owayikhipha nenombolo yayo yereferensi.
2. Chaza lapho itholakala: ikheli lewebhu, igama lefayela elihlala eduze kwe-IFC, noma {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} ne-{{ui:Remove}} zishintsha uhlu; yonke into ingesinyathelo esisodwa ongasihlehlisa.

{{ui:Build the handover package}} ilanda i-zip eyodwa: ikhasi lesihloko elibala zonke izidokhumenti, uhlu olufana nespreadsheet, incwadi ye-COBie (izidokhumenti zisemshidini wayo we-Document, njengemigqa mayelana ne-Facility), imodeli, nefayela ngalinye elixhunyiwe. Isitifiketi sokuqedwa noma sokuhlala esingakafiki ohlwini sikhonjwa esihlokweni; iphakheji yakhiwa noma kunjalo.

Imodeli esephakheji yimodeli **enjengokwakhiwe**: ibala izinto ezilinganiswe endaweni. Nayo, ngaphakathi kwesiqondisi `as-built`: isitatimende, uhlu lwayo yonke into nesimo sokuqinisekiswa kwayo, isethi yemidwebo njengoba ikunjalo manje njenge-PDF eyodwa (imidwebo njengokwakhiwe), nelogi yezinguquko zemidwebo uma imodeli inezethi ezikhishiwe. Bona [Maka izinto njengezihloliwe noma ezi-qinisekiswe endaweni](topic:verification).

- Ku-IFC idokhumenti ngayinye iyi-IfcDocumentInformation exhunywe kuphrojekthi (IfcRelAssociatesDocument), enesihloko sayo, ireferensi, usuku, owayikhipha nendawo, ukuze ezinye izinhlelo ziyibale.
- Ifayela elixhunyiwe libhalwa ngegama, usayizi ne-SHA-256. Ukugcina ifayela ngqo naphrojekthi, sebenzisa {{ui:Save the project as a bundle}} (i-.ccbundle iphatha imodeli namafayela axhunyiwe; ukuyivula kuwabuyisela, ngalinye lihlolwa ngerekhodi lalo). Ukugcina okuvamile kubuza ukuthi yiyiphi oyifunayo.
- I-.ifc evamile igcina irekhodi, hhayi ifayela: emva kokuyivula, sebenzisa {{ui:Attach the file again}}. Ifayela elifanayo liyaziwa; elihlukile lishintsha irekhodi.

## CSV

{{ui:CSV}} igcina yonke impahla ngedatha yayo, yonke intulo yokulondolozwa nawo wonke amadokhumenti, umugqa ngamunye, ye-spreadsheet noma enye inhlelo yokulondoloza.

:::note
Akukakwakhiwa: iseva eyisingethwe egcina izifundo futhi ithumele izaziso lapho i-BimCraft ivaliwe, nokufunda imisebenzi ye-COBie ibuyele. Bona [Akukakwakhiwa](topic:not-built-yet).
:::

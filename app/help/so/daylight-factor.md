---
title: Qiyaas iftiinka maalinta qol kasta
summary: Celceliska factor-ka iftiinka maalinta qol kasta oo ka timid daaqadihiisa, dusha gudaha iyo cirka ay arkayaan daaqad kasta, iyada oo xagalka cirka lagu cabbiray moodelka. Qiyaas hore oo naqshadeed, ma aha simulation ama hubin xeer.
keywords: iftiinka maalinta, factor-ka iftiinka maalinta, celceliska factor-ka iftiinka maalinta, adf, qaybta cirka toosan, vsc, kulaylka qorraxda, qorraxda, g-value, shabakad, split flux, qaybta cirka, dib-u-ibsasho gudaha, iftiin dabiici ah, daaqad, isbiir, xagalka cirka, hortaag, dedaal, balkoon, overhang, ibsasho, gudbin, naqshadeynta hore, falanqayn, qolal, spaces
from: 5f300a78
---

Tab-ka {{ui:Iftiinka maalinta}} ee panel-ka midig wuxuu xisaabiyaa **celceliska factor-ka iftiinka maalinta** qol kasta: inta ka mid ah iftiinka cirka daruufka leh ee dibadda ayaa gaarta qolka, celceliska ahaan, boqolkiiba. Wuxuu akhrinayaa qolalka (spaces) iyo daaqadaha moodelka IFC ee furan. Wax ma beddelayo moodelka, wax lagama soo dirayo.

:::warning
Waxa ku jira tab-kan oo dhan waa **qalab naqshadeed, ma aha xisaab u hoggaansan**: qiyaasro naqshadeed hore oo habab la daabacay, **ma aha simulation** iyo **ma aha hubin ka dhan ah xeer dhismo ama heer**. BS EN 17037, LEED, BREEAM iyo xeerarka tamarta waxay weydiiyaan simulation iftiinka maalinta oo leh cimilada meesha; u isticmaal barnaamij simulation iftiinka maalinta kuwaas.
:::

## Xisaabi

1. Fur moodel IFC oo leh qolal (spaces) iyo daaqado. Moodelada halkan lagu sawiray waxay leeyihiin qol gudaha silsilad kasta oo derbi xidhan ah.
2. Fur tab-ka {{ui:Iftiinka maalinta}} oo guji {{ui:Xisaabi}}.
3. Qol kasta wuxuu muujinayaa factor-kiisa iftiinka maalinta iyo heer: ka hooseeya 2 %, 2–5 %, 5 % ama ka badan. Guji qol si aad u aragto dusheeda iyo daaqad kasta aagga iyo xagalka cirka; qolka iyo daaqadihiisa waxaa lagu doortaa moodelka.

Beddel gelin, tirooyinka way raacaan isla markiiba; marka moodelka la beddelo, {{ui:Mar kale xisaabi}}. {{ui:CSV}} wuxuu kaydiyaa qol kasta tirooyinkiisa iyo gelinta la isticmaalay.

## Qaacidada

Celceliska factor-ka iftiinka maalinta (%) = T × Ag × θ × M ÷ (A × (1 − R²)), lagu daro daaqadaha qolka oo dhan (qaacidada Littlefair, oo ay isticmaalaan BRE 209, BS 8206-2 iyo CIBSE LG10):

- **T**, gudbinta iftiinka isbiirta (0.7 ilaa bilow: isticmaal tirada soo saaraha).
- **Ag**, aagga dhalaalka: aagga daaqad kasta (ballaca guud × dhererka, ama cabbirkeeda moodelka) × **qaybta dhalaalka** (0.75 ilaa bilow: inta kale waa qaab).
- **θ**, xagalka cirka ee daaqaddu aragto, digrii (hoos).
- **M**, factor-ka dayactirka ee wasakhda isbiirta (1 ilaa bilow).
- **A**, dusha gudaha qolka oo dhan: dhulka, darbiyada, saqafka iyo daaqadaha, oo laga qaadayo qaabka qolka laftiisa.
- **R**, ibsashada celceliska ah, oo miisaan aagga ku leh: dhulka 0.2, darbiyada 0.5, saqafka 0.7 ilaa bilow; isbiirta waxay tirinaysaa 0.1.

## Sida xagalka cirka loo cabbiro

Daaqad kasta BimCraft wuxuu jarayaa moodelka hal dhuumo oo toosan oo xagal qumman daaqadda, laga bilaabo dusha dibadda ee isbiirta, wuxuuna ka eegaa xadka dhulka oo toos u kor: wax kasta oo jarka la kulmiyo hore ka daaqadda (dhismo ka soo horjeeda, balkoon ama overhang sare, saqafka hoose) ayaa qayb ka qaada 90° ee. θ waa wixii haray. Daaqadda laftiisa iyo darbiga ay ku jirto way ka maqan yihiin. Wuxuu sidan ku sameeyaa shan meelood oo ballaca daaqadda ah oo dhexdhexaad ayuu qaadaa, sidaas darteed tiir yar oo hore ka dhexe ah wuxuu qaadaa qaybtiisa, ma aha cirka oo dhan.

Dhismo 8.5 m ka sarreeya bartamaha daaqadda oo 9.9 m ka fog wuxuu xijaabaa 40.65° (xagalka tangent-kiisu yahay 8.5 ÷ 9.9), taas oo ka tagta θ = 49.35°.

## Qaybta cirka toosan ee daaqad kasta

{{ui:Xisaabi}} wuxuu sidoo kale cabbiraa, daaqad kasta, waxa ay ka arkayso cirka oo dhan: isla jarka toosan, oo la wareejiyay jihada kasta ee hore ee daaqadda (kasta 2°, hal dhinac ilaa dhinaca kale), si dhismo dhinac ka jira, fin ama dhuxul qoto dheer ay qaybtiisa qaadaan. Kadibna BimCraft wuxuu xisaabiyaa **qaybta cirka toosan (VSC)**: intee ka mid ah iftiinka cirka daruufka leh ayaa gaarta isbiirta, iyada oo loo qaado sida uu saqaf furan oo siman ku helo. Daaqad aan wax hor ku jirin waxay heleysaa **39.6 %**, taas oo ah ugu badan ee daaqad toosan heli karto; dhismo dheer oo 25° ka sarreeya daaqadda wuxuu ka tagaa qiyaastii **27 %**, taas oo ah qiyaas ay hagistu UK (BRE 209) u isticmaasho sida xeerka dhabta. Daaqad kasta oo qolka ku jirta faahfaahinteeda waxay muujinaysaa VSC-kiisa iyo **xagalka hortaagga** (sida ugu sarreeya wax u kacaya toos hore ee daaqadda).

Cirku waa cirka daruufka CIE ee caadiga ah, kaas oo toos u kor uu ka iftiin badan yahay xadka dhulka saddex jeer, jarkuna waa sax: wax tusaale lagama qaato.

## Qorraxda daaqadaha taariikh gaar ah

Fur {{ui:Qorraxda daaqadaha taariikh gaar ah}} oo dooro taariikh. BimCraft wuxuu raacaa qorraxda maalintaas rubuc saac kasta, wuxuuna isku geeyaa daaqad kasta kulaylka ay qorraxdu keento isbiirta:

- **qorraxda toosan**, marka ay hore uga jirto daaqadda oo wax moodelka ka hortaagin (isla jarka sax ah, oo loo jeediyay qorraxda: balkoon hooseeya qorraxda xagaaga sare duhurka ayaa hoosaysa, qorraxda jiilaalka hoose ayaa soo gashaa);
- **iftiinka cirka** ee isbiirta, oo ka dhimma wixii daaqaddu aragto;
- iftiinka **dhulka laga soo jeediyo** (ibsashadiisa: 0.2 ilaa bilow);
- oo dhammaan **g-value**-ka isbiirta (qaybta tamarta qorraxda ee u oggolaatay: 0.6 ilaa bilow; isticmaal tirada soo saaraha) iyo qaybta dhalaalkeeda.

Qol kasta wuxuu muujinayaa wadarta maalinta ee kWh-ka iyo kulaylkiisa ugu sarreeya watt-ka iyo waqtigiisa; faahfaahinta qolka waxay maalinta u sawirtaa shaxan. Cirku waa cir cad sida moodelka Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), oo leh tirooyinka xagaaga ama jiilaalka ee meesha iyo xilliga, iyo dhererka goobta; booska qorraxda waa NOAA. Latitude iyo longitude-ka goobta waxay ka yimaadaan goobta IFC-ka, waqooyiga waxay ka yimaadaan waqooyiga dhabta ah ee moodelka; haddii moodelka aanu goob lahayn, qor latitude iyo longitude. Waqtiyadu waa waqtiga caadiga ah (ma jiro waqtiga xagaaga) aagga waqtiga aad qortay, ama midka longitude-ku soo jeedinayo.

Waxa uu ka tagaa: daruufka (waa maalin cad), isbiirta oo iftiin yar ka soo gasha xagal hoose, qaabka oo hooseeya isbiirta, siiraha, daaqada, iyo waxa derbiyada iyo saqafku qaadaan. Qiyaasta qaboojinta ee tab isla markaas wuxuu isticmaalaa kulaylka ugu sarreeya.

## Factor-ka iftiinka maalinta shabakad ku jirta

Fur {{ui:Factor-ka iftiinka maalinta shabakadda}} oo {{ui:Xisaabi shabakadda}}: BimCraft wuxuu saaraa shabakad dhulka qol kasta oo ah sarreeyaha shaqada (0.85 m ilaa bilow), nus mitir oo ka gudaha darbiyada, wuxuuna xisaabiyaa factor-ka iftiinka maalinta barta kasta **habka BRE split-flux**:

- **qaybta cirka**: cirka daruufka ah ee barta ka arka daaqad kasta furitaankeeda, ka dhimma qaabka.
- **qaybta dib-u-ibsatay ee dibadda**: wixii barta ka arka dhismooyinka dibadda daaqadda dhexdeeda, oo iftiinkoodu yahay tobanaad cirka ka dambeeya (beddel iftiinka hortaagga haddii ay aad uga iftiin badan yihiin ama aad uga mugdi badan yihiin);
- **qaybta dib-u-ibsatay ee gudaha**: iftiinka ku wareegaya qolka, oo ka yimid dusha qolka iyo ibsashadooda, aagga daaqadaha iyo intee ka baxsan darbiyada (qaacidada BRE, oo gudbinta iftiinka isbiirta lagu beddelay isbiirta cadda ee ay ku saleysnayd).

Qol kasta wuxuu muujinayaa celceliskiisa, barta ugu hooseysa, iyo intee ka mid ah oo heleysa 2 % ama ka badan; faahfaahinta qolka waxay sawirtaa qorshihiisa iyo barta kasta oo midab ku leh factor-kiisa iftiinka maalinta, daaqadahana casaan. Si ay kombiyuutar kasta ugu dhaqso badnaato, qol kasta waxa uu helaa ugu badnaan **400 barood**: qol weyn ku jira masaafadu way kordhaysaa (qor masaafo si aad u doorato).

## Waxa uu ka tagaa

- Daaqadaha saqafka (dhalaalka siman ama dhaadhacan) waa la liistaa laakiin lagama tirinayo: qaacidooyinka halkan waxay u yihiin daaqadaha darbiyada ku jira.
- Daaqadaha aan qol gadaashooda ku jirin (hol aan space lahayn, tusaale ahaan) waa la liistaa gooni ahaan.
- Fiiqnimada daaqadda (furitaanka waxa laga qaadaa dusha dibadda), indho-adkaynta, saacadaha qorraxda, iyo iftiinka maalinta ee cimilada ku saleysan. BS EN 17037, LEED ama BREEAM u isticmaal barnaamij simulation iftiinka maalinta.
- Heerarka waxay ka yimaadaan hagis Ingiriis oo hore (BS 8206-2), oo lagu muujiyo hagis, marna ma aha gudbid ama fashil.

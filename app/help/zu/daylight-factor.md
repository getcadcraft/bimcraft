---
title: Linganisa ukukhanya kwemini kwigumbi ngalinye
summary: Isilinganiso sesici sokukhanya kwemini esiphakathi kwigumbi ngalinye, kusuka emawindini alo, izindawo zangaphakathi nesibhakabhaka ngasinye elibona iwindi, kanye nengonya lesibhakabhaka elilinganiswe emodelini. Isilinganiso sokuqala sokwakha, hhayi ukulingisa noma ukuhlolwa kwekhodi.
keywords: ukukhanya kwemini, isici sokukhanya kwemini, isici sokukhanya kwemini esiphakathi, adf, isici sesibhakabhaka esiqondile, vsc, ukuthola kwelanga, ilanga, g-value, igridi, ukuhlukaniswa kwesibhakabhaka, isici sesibhakabhaka, ukukhanya kwemvelo, iwindi, ingilazi, ingonya lesibhakabhaka, isithiyo, ukufiphala, ibhalkhoni, ukuphuma kophahla, ukubuya kokukhanya, ukudlulisa, ukuklama kokuqala, ukuhlaziya, amagumbi, izindawo
from: 5f300a78
---

Ithebhu ye-{{ui:Ukukhanya kwemini}} ngakwesokunxele ibala **isici sokukhanya kwemini esiphakathi** kwigumbi ngalinye: ukukhanya kwesibhakabhaka esimpunga esingaphandle okungafinyelela kukho igumbi, esilinganiswe ngephesenti. Ifunda amagumbi (izindawo) nemawindi ye-IFC emodelini evuliwe. Akukho okushintshwa emodelini futhi akukho okulayishwa.

:::warning
Konke kule thebhu **kuyisisiza sokuklama, hhayi ukubala kokuthobela**: izilinganiso zokuqala ngezindlela ezishicilelwe, **hhayi ukulingisa** futhi **hhayi ukuhlolwa okuhambisana nekhodi yokwakha noma nomgomo**. I-BS EN 17037, i-LEED, i-BREEAM nemithetho yamandla idinga ukulingisa kwemini ngesimo sendawo; sebenzisa uhlelo lokulingisa ukukhanya kwemini ngalezo.
:::

## Ukubala

1. Vula imodeli ye-IFC enamagumbi (izindawo) namawindi. Imodeli edwetshwe lapha inegumbi ngaphakathi kwesethi ngayinye evaliwe yezindonga.
2. Vula ithebhu ye-{{ui:Ukukhanya kwemini}} bese ucofa {{ui:Bala}}.
3. Igumbi ngalinye likhombisa isici sokukhanya kwemini nebhendi: ngaphansi kuka-2 %, 2–5 %, 5 % noma ngaphezulu. Cofa igumbi ukuze ubone izindawo zalo nendawo kanye nengonya lesibhakabhaka lewindi ngalinye; igumbi namawindi alo akhethwa emodelini.

Shintsha okufakiwe, izinombolo zilandela ngokushesha; uma ushintsha imodeli, {{ui:Bala futhi}}. {{ui:CSV}} igcina igumbi ngalinye nezinombolo zalo nokufakwa okusetshenziswe.

## Ifomula

Isici sokukhanya kwemini esiphakathi (%) = T × Ag × θ × M ÷ (A × (1 − R²)), siphindaphindwe emawindini egumbi, siphelele (ifomula ka-Littlefair, esetshenziswa yi-BRE 209, i-BS 8206-2 ne-CIBSE LG10):

- **T**, ukudluliswa kokukhanya kwengilazi (0.7 ukuqala: sebenzisa inombolo yomkhiqizi).
- **Ag**, indawo engilaziwe: indawo yewindi ngalinye (ububanzi bonke × ubude, noma usayizi walo emodelini) × **ingxenye engilaziwe** (0.75 ukuqala: okusele kuwo kuyiframe).
- **θ**, ingonya lesibhakabhaka elibona iwindi, ngamadigri (ngezansi).
- **M**, isici sokugcinwa ngenxa yothuli esingilazini (1 ukuqala).
- **A**, zonke izindawo zangaphakathi zegumbi: floor, izindonga, uphahla lwangaphakathi namawindi, kuthathwe emumweni wegumbi ngokwalo.
- **R**, ukubonakala kwazo okumaphakathi, kusindwe ngendawo: floor 0.2, izindonga 0.5, uphahla lwangaphakathi 0.7 ukuqala; ingilazi ibalwa njenge-0.1.

## Indlela okulinganiswa ngayo ingonya lesibhakabhaka

Ewindini ngalinye i-BimCraft isika imodeli ngendiza emile eqondile kuwindi, iqala ebusweni bengilazi obuphandle, bese ibheka phezulu ngqo emngceleni: konke okuhlangana nekhala phambi kwewindi (isakhiwo esiphambene, ibhalkhoni noma uphuma kophahla phezulu, umphetho wophahla) kuhlanganisa ingxenye yalo ama-90°. θ iyalokho okusele. Iwindi ngokwalo nodonga elibamba kuyasuswa. Lokhu kwenziwa ezindaweni ezinhlanu ngobubanzi bewindi bese kuthathwa isilinganiso, ngakho umthambo omncane phambi kwesikhungo uthatha ingxenye yawo, hhayi isibhakabhaka sonke.

Isakhiwo esiphakama ngo-8.5 m ngaphezulu kwesikhungo sewindi futhi sikhashelwe ngo-9.9 m siyavimba i-40.65° (i-engeli enesipho sayo ingu-8.5 ÷ 9.9), kushiye θ = 49.35°.

## Isici sesibhakabhaka esiqondile sewindi ngalinye

{{ui:Bala}} futhi ilinganisa, ewindini ngalinye, okubona kwawo sekwoneka isibhakabhaka sonke: ukusika okufanayo okumile, kuphendulwa kuzo zonke izinhlangothi ngaphezu kwebuso lewindi (njalo ngama-2°, kusuka olunye uhlangothi kuya kolunye), ngakho isakhiwo ngasohlangothini, ifini, noma umbhoshongo ojulile kuthatha ingxenye yawo. Kusuka lapho i-BimCraft yenza **isici sesibhakabhaka esiqondile (VSC)**: ukuthi ukukhanya kwesibhakabhaka esimpunga kufinyelela kangakanani engilazini, njengengxenye yesibhakabhaka esizobe sithola uphahla olucwebile oluyisicaba. Iwindi elingenalutho phambi kwalo lithola **39.6 %**, okuphezulu kakhulu ewindini eliqondile; isakhiwo eside esiphakama ngo-25° ngaphezu kwewindi sishiya cishe **27 %**, inani lomthetho wesandla izincomo zase-UK (BRE 209) ezisisebenzisayo. Iwindi ngalinye enkundleni yegumbi likhombisa i-VSC yalo nengonya lokuvinjwa kwalo (izinto eziphakama kangakanani eziphakama ngqo phambi kwalo).

Isibhakabhaka yisibhakabhaka esimpunga esijwayelekile se-CIE, esikhanya kabili ngaphezulu uma uzama ukubheka phezulu kunasemngceleni, futhi ukusika kunembile: akukho okuthathwa isampula.

## Ilanga ngamawindi ngosuku oluthile

Vula {{ui:Ilanga emawindini ngosuku oluthile}} bese ukhetha usuku. I-BimCraft ilandela ilanga ngalolo suku ngamakota ehora bese ingeza, ewindini ngalinye, ukushisa elanga elikungenisa ngengilazi:

- **ilanga eliqondile**, uma likhona phambi kwewindi futhi akukho okulifihla emodelini (ukusika okufanayo okunembile, okuphendulwe ngokuya elangeni: ibhalkhoni elifihla ilanga lasehlobo emini livumela ilanga lasebusika elisezansi ukungena);
- **ukukhanya kwesibhakabhaka** engilazini, ngaphandle kwalokho iwindi elingakubonile;
- ukukhanya **okuvela emhlabeni** (ukubuya kwawo: 0.2 ukuqala);
- konke kudlula engilazini nge-**g-value** (ingxenye yamandla elanga eyivumelayo: 0.6 ukuqala; sebenzisa inombolo yomkhiqizi) nengxenye yayo engilaziwe.

Igumbi ngalinye likhombisa isamba sosuku ngo-kWh nesikhulumo sawo ngo-watt nesikhathi sawo; imininingwane yegumbi idweba usuku njengegrafu. Isibhakabhaka yisibhakabhaka esicacile ngemodeli ye-Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), nezinombolo zasehlobo noma zasebusika zendawo nesizini, nokuphakama kwesayithi; indawo yelanga iyeNOAA. Ububanzi nobude besayithi kuvela kusayithi ye-IFC, nenyakatho kusuka enyakatheni yeqiniso yemodeli; uma imodeli ingenayo isayithi, bhala ububanzi nobude. Izikhathi ziyisikhathi esijwayelekile (akukho sikhathi sasehlobo) esikhalazini osibhalayo, noma esiphakanyiswa yi-longitude.

Okushiywe ngaphandle: amafu (usuku olucwebile), ingilazi engangeni kakhulu ezingeni eliphansi, izinhlaka ezifihla ingilazi, izikhwezo, nalokho izindonga nophahla okuthatha. Isilinganiso sokupholisa kuleyo thebhu sisebenzisa isikhulumo.

## Ukukhanya kwemini ngegridi

Vula {{ui:Isici sokukhanya kwemini ngegridi}} bese {{ui:Bala igridi}}: i-BimCraft ibeka igridi phezu kwe-floor ngalinye egumbini ngobude besimo sokusebenza (0.85 m ukuqala), ingxenye yemitha ngaphakathi emadongeni, bese ibala isici sokukhanya kwemini ngasemaphoyinteni ngamunye ngendlela ye-**BRE split-flux**:

- **isici sesibhakabhaka**: isibhakabhaka esimpunga esibonwa kusuka kuphoyinti ngokudlula endaweni yokuvuleka kwewindi ngalinye, ngaphandle kwezinhlaka;
- **isici esibhekiswe ngaphandle**: lokho iphoyinti elibona lezakhiwo zangaphandle ngewindi, elikhanya ngeshumi lesibhakabhaka esingemuva kwazo (shintsha ukukhanya kwesithiyo uma zikhanya noma zimnyama kakhulu);
- **isici esibhekiswe ngaphakathi**: ukukhanya okugxumayo egumbini, kusuka ezindaweni zegumbi nokubuya kwazo, indawo yamawindi nokuthi iyiphi ingxenye yayo ephumela ngaphandle (ifomula ye-BRE, nokudlula kwengilazi esikhundleni sengilazi ecacile ayeyicabanga).

Igumbi ngalinye likhombisa isilinganiso salo, ingxenye yalo ephansi kakhulu nokuthi yingakhi ethola u-2 % noma ngaphezulu; imininingwane yegumbi idweba ipulani yalo ngamaphoyinti ngamunye ekhulekile ngesici sokukhanya kwemini, namawindi abomvu. Ukuze kube lula kuyo yonke ikhompyutha, igumbi lithola **amaphoyinti angama-400** kuphela: egumbini elikhulu ibanga liyakhula ukuze lilingane (bhala ibanga ukuze ukhethe wena).

## Okungafakiwe

- Amawindi ophahla (ingilazi elele noma ethambekile) ayadwetshwa kodwa awabalwa: ifomula lapha ngamawindi odongeni.
- Amawindi angenagumbi emuva kwawo (iholo elingenayo indawo, umzekeliso) ayadwetshwa ngokwahlukana.
- Ukuvulwa kwewindi (imbobo ithathwa ebusweni obuphandle), ukuqhwaza, amahora elanga nokukhanya okuncike esimweni sezulu. Ngo-BS EN 17037, LEED noma BREEAM sebenzisa uhlelo lokulingisa ukukhanya kwemini.
- Amabhendi avela kwizeluleko zakudala zaseBrithani (BS 8206-2), akhonjiswa njengesiqondiso kuphela, hhayi njengokudlula noma ukwehluleka.

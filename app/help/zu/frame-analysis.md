---
title: Hlaziya uhlaka lwesakhiwo
summary: Amandla, okuphendula nokuphambuka kwamabhimu, amakholomu nezikhwepha zemodeli ngaphansi kwamacala womthwalo nezinhlanganisela ozisethayo, okugcinwa ku-IFC. Usizo lokuhlaziya, hhayi ukuhlola ikhodi.
keywords: ukuhlaziya, amayunithi, amafidi namayintshi, iyunithi yokubonisa, ukuhlaziya kwesakhiwo, izinhlolo zedizayini, ukusetshenziswa, rolled, welded, AISC 360, EN 1993-1-1, ukuhlaziya kohlaka, imodeli yokuhlaziya, indlela yokuqina, imithwalo, icala lomthwalo, inhlanganisela, isisindo sakho, umthwalo ophilayo, ukuphendula, ukugoba kwebhimu, amandla e-axial, ukuphambuka, ukubukeka kokuphambuka, izinsimbi, izikhwepha, okuqinile, okukhululekile, umbiko, pdf, csv, craftscript, frame3d, amabhimu, amakholomu, izingxenye
from: b93b58c4
---

Ithebhu {{ui:Ukuhlaziya}} ngakwesokudla itholakala amandla emabhimini, amakholomu nezikhwepha emodeli evuliwe, izinhlanganisela ezisezinyaweni zamakholomu nokuthi izingxenye zigoba kangakanani, ngemithwalo oyinikezayo.

:::warning
Kuyisisizo sokuhlaziya, **hhayi ukuhlola ikhodi**. Ukuhlaziya akusebenzisi ikhodi yokuklama: akulungisi izingxenye noma kuhlola amandla, futhi akukhethi izinxenye zemithwalo. Unjiniyela uhlola imodeli yokuhlaziya, imithwalo nokusekela, bese enquma ukuthi izinombolo zisho ukuthini. Ibhlokhi {{ui:Izinhlolo zedizayini}} ngaphansi kwayo ihlola amaI-shape ensimbi egoqiwe ngo-AISC 360 noma ngo-EN 1993-1-1, usizo kuze kubhekwe ngunjiniyela: bona [Izinhlolo zedizayini](topic:frame-analysis#design-checks).
:::

## Yenza kanjani

1. Vula imodeli ye-IFC kanye nethebhu {{ui:Ukuhlaziya}}.
2. Khetha amabhimu, amakholomu noma izikhwepha ebhodweni lombono, khetha {{ui:Icala}}, {{ui:Umthwalo}} ne-{{ui:Uhlangothi}}, thayipha inani bese ucindezela {{ui:Engeza umthwalo}}: kN/m kumthwalo osabalele ngaphezu kwelungu, kN kumthwalo wephoyinti.
3. Cindezela {{ui:Qalisa ukuhlaziya}}.

Ithebhula libala amandla amakhulu we-axial, ukusika, amabhendi, ukujikeka nokuphambuka kwelungu ngalinye; chofoza igama lelungu ukuze uyikhethe kumbono. Ngaphansi kukhona okuphendulwa. {{ui:Emodelini}} udweba isimo esiphambukile, noma isenzo esisodwa njengedayagremu eceleni kwelungu ngalinye. Imiphumela iyahamba uma imodeli ishintsha: qalisa futhi.

Yonke imithwalo nesilungiselelo kuyinguquko eyodwa ohlwini {{ui:Izinguquko}}: {{ui:Hlehlisa}} iyabuyisela emuva, futhi {{ui:Gcina njenge-IFC}} iyazigcina kufayela (isethi yezici yephrojekthi `CadCraft_Analysis`), ngakho ngokuvulwa kwemodeli kokulandelayo lapha imithwalo yayo isalapha.

## Ukwakhiwa kwemodeli yokuhlaziya

- Yonke i-IfcBeam, i-IfcColumn ne-IfcMember okuyi-extrusion eyodwa eqondile ibe ilungu emgogodleni wesigaba sayo. Izici zesigaba zivela kuprofayili: izimo ze-I, U, L no-T, izikwele namatyubhu, izindilinga namatyubhu ajikelezile, noma noma yiliphi uhlaka oluvaliwe (khona-ke ukuqina kokujikeka kuyisilinganiso, kutshelwa emBikweni). Okunye akufakwa kanti kuyabalwa.
- Emodelini, amabhimu amiswa ohlangothini lwekholomu futhi ahlale ngaphansi kwephansi. Ukuphela ngakunye kwelungu kuphethwa emgqeni wakho kuze kufike ku-axis yelungu okuxhumana nalo, uma leyo axis iseduze (cishe ngosayizi wezigaba), futhi leli lungu liyahlukaniswa khona. Umbiko utshela ukuthi amaphethelo angaki ahambile.
- **Izinyawo zekholomu** lapho akukho okwehla ngaphansi kwazo ziyizisekelo: ezinqunyiwe (ukuqala) noma ezibanjiwe (zibanjwe endaweni nasekujikeni, zikhululekile ukujikeka).
- **Amaphethelo ebhimu** aqinile noma abanjwe ngomthetho we-{{ui:Okokugcina kwamabhimu ngaphandle kokuxhumana}}; **izikhwepha** (IfcMember) zibanjwe emaphethelweni omabili. Khetha ilungu elilodwa ukunikeza amaphethelo alo, noma unyawo lwekholomu, umthetho wawo.
- Izinto ngegama: ukhonkolo (E = 30 GPa), ukhuni (E = 11 GPa), kungenjalo insimbi (E = 200 GPa).

Uma uhlaka lunganyakaza lingagobi lutho — isistimu ehamba — ukuqalisa kuyama kutshele ukuthi kuphi nangasiphi isiqondiso.

## Amacala, izinhlanganisela, izimpawu nombiko

Ukuhlaziya kuqala nge-**Dead** (isisindo sakho), **Live** ne-**Dead + live**; engeza amacala nezinhlanganisela ngezinto ezifunwa yikhodi yakho yokuklama. N > 0 kuyinkanuko; My > 0 ibeka uhlangothi lwelungu olungu −z esimweni sokuqina (ibhimu elishaywe yisisindo liba ne-My > 0). {{ui:Umbiko (PDF)}} ne-{{ui:Umbiko (CSV)}} zinamaphepha okucabanga, izigaba, amacala, okuphendulwa nezinhlamba zazo, amandla ezingxenye, ukuphambuka nemvulophu. {{ui:Thumela njenge-CraftScript}} ibhala uhlaka lwe-Script workspace ye-PartCraft, lapho umsebenzi wethala `frame3d` uyixazulula ngekhodi eyafundeka.

Indlela ye-direct stiffness, eyilinear futhi eyi-first order ngaphandle uma uthikha *Second order (P-Delta)*, ihlolwe ngamacala emibhalo yezifundo.

**Second order (P-Delta).** Thikha *Second order (P-Delta)* eduze kwe-Run: inhlanganisela ngayinye ixazululwa futhi ngamandla e-axial asebenza ohlakeni olugobile (ilungu ngalinye lisikwa libe izingxenye ezi-4, ukuze ukugoba kwelungu phakathi kwamaphethelo nakho kubalwe), kuze kuzinze amandla e-axial. Ulayini womphumela unikeza inani lamapasi nokuthi ukuhamba kukhule kangakanani; izikhathi, ukuphambuka, ukuhlolwa kwedizayini nombiko kusebenzisa lezi zimpendulo. Ngaphezu komthwalo ongakabi namandla wohlaka, ukuqalisa kuyama kutshele lokho. Iyi-elastic nezindlela ezincane, i-flexural kuphela, ngaphandle kokwehla kokuqina nemithwalo engabonakali (hhayi indlela ye-AISC direct analysis ngokwayo); amaslabhu, izindonga namaphansi aqinile ahlala kuma-first order.

**Ukucindezela kwephansi kumaslabhu.** Kumaslabhu ekhonkolo (ukuhlaziya kufunda isilabhu njengamapuleti uma impahla yaso ingukhonkolo), ibhlokhi yemithwalo inayo {{ui:Ingcindezelo kuwo wonke amaslabhu}}: thayipha kN/m², khetha icala elingenhla bese ucindezela {{ui:Engeza kumaslabhu}}. Isatshalaliswa kuwo wonke amaslabhu ahlolwe ukuhlaziya, ehla phansi, futhi ibhalwe nesixhumanisi se-Remove. Ingcindezelo eyodwa kuwo wonke amaslabhu, hhayi eyodwa ngayinye, futhi akuyona imithwalo yekhodi: thayipha inani onikezwa unjiniyela wakho.

**Ukuqina kwemvelo (finite elements).** Ibhlokhi {{ui:Izinhlayiya ezingaphelile: amafrikhwensi wemvelo}} ingaphansi kwemiphumela ithola izindlela eziphansi zemodeli efanayo ngenjini ye-finite element: amabhimu nokukhishwa kwawo emaphethelweni, amaslabhu nezindonga njengamashell amane amapuleti, amaphansi aqinile nokusekela. Khetha inani lezindlela (3, 6, 10 noma 20) nesilabhu element (i-four-node shell yamaslabhu ajulile noma amancane, noma eyesilabhu esincane) bese ucindezela {{ui:Thola amafrikhwensi}}. Ithebhula linikeza ifrikhwensi yendlela ngayinye ngo-Hz, isikhathi sayo ngamasekhondi nobunzima bayo obusebenzayo ngomugqa wakwa-X, Y no-Z njengengxenye yobunzima obungahamba. {{ui:Bonisa kumodeli}} udweba noma yiyiphi indlela njengoba kudwetshwa isimo esiphambukile. Ubunzima bukhona ukuminyana kwempahla ngevolumu; imithwalo ayengezi ubunzima, futhi impahla engenaso ukuminyana ayinabo. Umbiko (PDF, CSV) unethebhula. Kuyi-elastic futhi kuncane kuphela ngokuhamba, akukho mthwalo wokuzamazama noma womoya owenziwa ngekhodi lapha. Akuhlolwa ngekhodi; unjiniyela wakho ubuyekeza imiphumela.

**Isipektra yokuphendula, umlando wesikhathi ne-pushover.** Ezinye izibhlokhi ezintathu zisezansi kwamafrikhwensi, zisebenzisa imodeli efanayo ye-finite element. Ubunzima bazo bonke buyinhlanganisela yokuminyana kwempahla nemithwalo ephansi yamacala owakhethayo, ngayinye iphindaphindwa ngesisetshenziswa othayipha (isibonelo Dead ku-1 nemithwalo Live engxenyeni oyibala njengobunzima).

{{ui:Isipektra yokuphendula}} ifunda imodi ngayinye kusuka ku-spectrum oyinikezayo (ithebhula lesikhathi nokusheshisa, noma isimo se-ASCE 7 kusuka ku-SDS, SD1 ne-TL; inkinobho {{ui:Sebenzisa amanani webhlokhi lokunyakaza komhlaba}} ikopisha lawo kusuka kubhlokhi yokunyakaza komhlaba) bese ihlanganisa izindlela nge-CQC, SRSS, umthetho wamaphesenti ayishumi noma isamba esiphelele, bese ihlanganisa izikhombisi ze-X, Y no-Z (100 % + 30 % noma SRSS). Inikeza isisindo sokuqala, ukuhamba kwamazinga, amandla amaphethelo elungu nethebhula lezindlela elisho uma izindlela ezisetshenzisiwe zithwele ngaphansi kuka-90 % wobunzima. Ungalinganisa imiphumela ngesisetshenziswa noma kuya kusisindo sokuqala othayipha; ibhlokhi ayilibali lesi sisindo ngokwayo. Imiphumela ayinazo izimpawu.

{{ui:Umlando wesikhathi}} usebenzisa ukusheshisa komhlaba ngokusebenzisa ukuhlanganiswa kwemodi (kuphelele ezintweni ezilula zerekhodi phakathi kwamaphoyinti) noma ngokuhlanganiswa okuqondile (Newmark average acceleration nedampingi ye-Rayleigh). Okokufaka kungu-sine noma i-pulse eyenziwe (inamelwe njengesifanekiso njalo), irekhodi oliliphastayo, noma ifayela lombhalo oliyivulayo (isikhathi nokusheshisa, okulodwa ngomugqa ngalinye nesinyathelo, noma ifayela elifana ne-PEER enomkhawulo we-DT=; ngo-g noma m/s²). Inikeza ukuhamba kophahla nesisekelo sesisekelo ngesikhathi, ukuhamba kwezinga ngalinye, nemvulophu yamandla amaphethelo ezingxenye. Imodeli enerekhodi elide kakhulu igcina lona ngesikhathi sokusebenza kuphela.

{{ui:Pushover}} ishayela uphahla ngakohlangothini ngezinyathelo ezincane (iphethini efana nemodi yokuqala, noma efanayo), nezikhombisi zepulastiki emaphethelweni ezingxenye ezinesimo se-I. Isikhombisi siyavuma ngokunyathela okuyisibonelo, okuphansi njengoba amandla e-axial ekhula (kubalwa kusuka esimweni esidwetshiwe, ama-fillet ayashiywa); ukuqina ngokuhlasela kuyisinqumo, i-P-delta iyisinqumo, nenhlanganisela yomhlabathi ingasetshenziswa kuqala. Inikeza ijika lokuthwala (isisindo sokuqala ngokuhamba kophahla), isikhombisi sokuqala, nesimo nokujikeka kwepulastiki kwesikhombisi ngasinye. {{ui:Qalisa umlando wesikhathi ongeyona-linear}} isebenzisa izikhombisi ezifanayo ngaphansi kwerekhodi lebhlokhi yoMlando wesikhathi emamodeli amancane. Izikhombisi zakha emaphethelweni wezingxenye kuphela (beka inodi lapho kufanele kwakheke khona ngaphakathi kwesikhala); ilungu elikhululekile emaphethelweni omabili alithola lutho; ukuvuthwa nokugoba kwamabhrasi akumodelwa; amaslabhu nezindonga zihlala ze-elastic; akukho mibandela yokwamukelwa enikeziwe. Akuhlolwa ngekhodi; unjiniyela wakho ubuyekeza imiphumela. Izilungiselelo zigcinwa nemodeli, nombiko uhlanganisa amathebhula.

Akukakwakhiwa: ukuvuthwa (buckling), ukulungiswa kwesisindo ekusabalaliseni kwesipektra, ukukalwa kwerekhodi, imibandela yokwamukelwa yamahinji, imithwalo yezindawo ngaphandle kwalowo mcindezelo oyedwa wawo wonke amaslabhu, ukuthuthwa kwamalungu, izikhwepha ezikhuphuka kuphela, izindonga namaslabhu ohlakeni, nokuhlolwa kwezakhiwo zensimbi ezingegoqiwe nezigaba ezingezona i-I ezigoqiwe. Bona [Okungakakwakhiwa](topic:not-built-yet).

## Amayunithi

Ubude ulandela iyunithi oyikhethayo ku-toolbar ({{ui:Amayunithi}}), njengakho konke kwe-BimCraft: izindawo zemithwalo oyithayipha futhi oyibona ({{ui:Kusuka}}, {{ui:Kuya ku}}, {{ui:Ngo}}), amaphuzu emithwalo yenodi nokuphendula, ukuphakama kwamaphansi ku-{{ui:Seismic}}, nezikholomu zokuphambuka nokuhamba (amafidi namayintshi akhombisa lezi zinde ezincane ngamayintshi ezinhlamvu). Shintsha iyunithi noma nini; ithebhu iyabuya. Amandla agcina ku-kN nokN·m, nombiko (PDF, CSV) nefayela le-CraftScript zigcina ngamamilimitha nokuthi iyunithi ibhalwe. Usayizi wezigaba, ububanzi bamabha nokumbozwa ku-{{ui:Ukhonkolo}} kuhlala ngamamilimitha, njengoba zibizwa.

## Izinhlolo zedizayini

Ibhlokhi {{ui:Izinhlolo zedizayini}} (efana neyeDetailCraft) ithatha {{ui:Ikhodi yedizayini}}, ASCE 7 + AISC 360 noma EN 1990 + EN 1993-1-1, nezinga lensimbi {{ui:Ibanga lensimbi}}. Nika icala ngalinye lomthwalo uhlobo lwalo (isisindo sakho, esiphilayo, umoya …) bese {{ui:Dala izinhlanganisela}} ibhala izinhlanganisela zomthwalo wekhodi yezimpahla zakho; ukuhlaziya kuzisebenzisa njengoba kunjalo.

{{ui:Hlola izingxenye}} bese ihlola i-I-shape ngayinye ensimbi egoqiwe ngezinhlolo ze-DetailCraft (ukuqina, ukucindezela nokuvuthwa, ukugoba nokuvuthwa kwe-lateral-torsional, ukusika, ukugoba nomthwalo we-axial, ukuphambuka; izigatshana zisemBikweni) ibonise ukuthi isebenzisa kangakanani ukuthwala kwayo, ikhombise ngombala emodelini. Iyisisizo **aze unjiniyela ayibuyekeze**.

**Izingxenye ezihlolwayo.** Ifayela le-IFC alisho ukuthi i-I-shape yensimbi igoqiwe noma iwelded, ngakho i-BimCraft iyithatha njengegoqiwe kuphela uma igama layo leprofayili (noma igama lohlobo lwento) liyisayizi kumathebula e-AISC W noma S noma i-EN 10365 IPE, HEA noma HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **futhi** ukujula, ububanzi, ukhalo nemiphetho efayeleni kuvumelana nalowo sayizi ngaphakathi kuka-1 %. Yonke enye i-I-shape (i-plate girder, usayizi ngegama elihlukile, usayizi oguquliwe) ithathwa njengewelded futhi ibuyela **ingahlolwanga**, kanjalo namatyubhu, ama-angle, ama-channel namanye amasekhishini, izingxenye ezincane nokujikeka. Hlola lezo zilungu nonjiniyela.

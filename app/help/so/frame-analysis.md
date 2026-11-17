---
title: Falanqee qaab-dhismeedka
summary: Xoogagga, falcelinta iyo foorarka biimaha, tiirarka iyo xidhayaasha moodelka ee hoos culeysyada iyo isku-darka aad dejisay, oo lagu kaydiyay IFC. Caawiye falanqayn, ma aha hubin xeer.
keywords: falanqayn, cutubyada, feet iyo inches, cutubka muuqda, falanqaynta qaab-dhismeedka, hubinta naqshadda, isticmaalka, la rogay, la alxamay, AISC 360, EN 1993-1-1, falanqaynta qaab-dhismeedka, moodeelka falanqaynta, habka adkaynta, culeysyo, xaaladda culeysyada, isku-darka, culeyska joogtada, culeyska kala duwan, culeyska naftiisa, falcelin, xoogga bend (bending moment), xoogga jeexa (shear), xoogga toosan (axial force), foorarka, qaabka foorarka, taageerayaasha, pinned, fixed, sii-deyn, warbixin, pdf, csv, craftscript, frame3d, biimaha, tiirarka, xubnaha
from: b93b58c4
---

{{ui:Falanqayn}} ee tabka midig wuxuu helaa xoogagga biimaha, tiirarka iyo xidhayaasha moodelka furan, falcelinta cagaha tiirarka, iyo intee ka foorarta xubnaha, culeysyada aad siisay.

:::warning
Waa **caawiye falanqayn, ma aha hubin xeer**. Falanqaynta ma aha xeer naqshad: ma cabbirto xubnaha, ma hubiso awoodooda, ma dooranayso culeys-isku-dhufka. Injineer ayaa hubiya moodelka falanqaynta, culeysyadiisa iyo taageerayaasha, wuxuuna go'aamiyaa macnaha tirooyinka. {{ui:Hubinta naqshadda}} ee hoosta ayaa hubisa biimaha birta la rogay ee AISC 360 ama EN 1993-1-1, caawiye ilaa injineer uu dib u eego: eeg [Hubinta naqshadda](topic:frame-analysis#design-checks).
:::

## Socodsii

1. Fur moodel IFC iyo tabka {{ui:Falanqayn}}.
2. Dooro hal ama in ka badan oo biim, tiir ama xidhay aragga, dooro {{ui:Xaaladda}}, {{ui:Culeys}} iyo {{ui:Jihada}}, qor qiimaha oo taabo {{ui:Ku dar culeys}}: kN/m culeys ku faafsan xubin, kN culeys barta.
3. Taabo {{ui:Socodso falanqaynta}}.

Miiska wuxuu liistaa xoogga toosan ee ugu weyn ee xubin kasta, jeexyada, foorarka, wareejinta iyo qotada; guji magaca xubin si aad aragga uga doorato. Hoostiisa waxaa ah falcelinta. {{ui:Moodelka dushiisa}} wuxuu sawiraa qaabka foorarka, ama hal falcelin oo sawir ah dhinac kasta xubin. Natiijooyinku way ka duwanaan karaan marka moodelku isbeddelo: dib u socodsii.

Culeys kasta iyo dejin kasta waa hal isbeddel liiska {{ui:Isbeddellada}}: {{ui:Ka noqo}} ayaa soo celinaya, {{ui:U kaydi sida IFC}} ayaa ku hayaa faylka (guryaha `CadCraft_Analysis` ee mashruuca), si markii dambe moodelka halkan la furo culeysyadiisu weli jiraan.

## Sida moodelka falanqaynta loo sameeyo

- Kasta oo IfcBeam, IfcColumn iyo IfcMember oo qaabkeedu yahay hal soo-bixid toosan, wuxuu noqdaa xubin ku taal xarriiqda dhexe ee qaybtiisa. Sifooyinkeeda qaybtu waxay ka yimaadaan profile-ka: I, U, L iyo T, afar-geesood iyo tuubooyin, goobo iyo tuubooyin wareegsan, ama qaab xidhan oo kasta (markaas joogta qallafsanaanta waa qiyas, oo warbixinta lagu sheegaa). Wax kasta oo kale waa laga reebaa oo waa la tiriyaa.
- Moodel gudahiisa, biimaha waxay joogsadaan wajiga tiir kasta oo ay ka hoos yihiin dabaqa. Dhamaad kasta oo xubin waxaa loo qaadaa xarriiqdiisa oo gaadha xarriiqda xubinta uu ku xidhan yahay, marka xarriiqdaasi u dhow tahay (qiyaastii cabbirka qaybaha), xubintaasna halkaas ayaa laga gooyaa. Warbixinta waxay sheegtaa inta dhamaad la dhaqaajiyay.
- **Cagaha tiirarka** wax hoos ka gaadha ma jiraan waa taageerayaal: go'an (bilowga) ama pinned (la hayo oo laga hortago wareegga, laakiin xor u ah inuu wareego).
- **Dhamaadyada biimaha** waa adag ama pinned sida xeerka {{ui:Dhamaadyada biimka aan xidhiidh lahayn}} u dhigayo; **xidhayaasha** (IfcMember) labada dhinac waa pinned. Dooro hal xubin si aad u siiso dhamaadyadeeda, ama cagta tiirka, xeer u gaar ah.
- Alaabta magaca ayay ku salaysan tahay: kongareeto (E = 30 GPa), alwaax (E = 11 GPa), kale waa biro (E = 200 GPa).

Haddii qaabku dhaqaaqi karo isagoo aan wax foorarin — mekanism — socodsiintu way joogsataa oo waxay sheegtaa meesha iyo jihada.

## Kiisaska, isku-darka, calaamadaha iyo warbixinta

Falanqaynta waxay bilaabataa **Dead** (miisaanka naftiisa), **Live** (culeyska jiritaanka) iyo **Dead + live**; ku dar kiisas iyo isku-dar, iyadoo adeegsanaysa factor-yada uu xeerka naqshaddaadu codsado. N > 0 waa tansiyon; My > 0 wuxuu xubinta dhinaceeda hoose ee -z ku keenaa tansiyon (biimka oo culeyska dhulka hoosta u foorarta wuxuu leeyahay My > 0).

{{ui:Warbixin (PDF)}} iyo {{ui:Warbixin (CSV)}} waxay hayaan malo-aadinta, qaybaha, kiisaska, falcelinta iyo wadarta, xoogagga xubnaha, foorarka iyo dahaarka. {{ui:U dhoofi CraftScript}} wuxuu qoraa qaabka qaab-dhismeedka PartCraft Script workspace, halkaas oo shaqada maktabada `frame3d` ay ku xallisay koodka la akhrin karo.

Habka waa habka adkaynta tooska ah (direct stiffness), rogmo oo heer-koowaad ah ilaa aad ka dhigto **Second order (P-Delta)** oo lagu hubiyay kiisaska buugaagta.

**Second order (P-Delta).** Ka calaamadee *Second order (P-Delta)* dhinaca Run: isku-dar kasta waa la xalliyaa mar kale iyadoo xoogagga toosan ee xubinta ay saameeyaan qaabka foorarka (xubin kasta waxaa loo gooyaa 4 qaybood, si foorarka xubinta u dhex-dhexaad ah iyo dhamaadkeeda uu u tirmo), ilaa xoogagga toosan ay degaan. Xariiqda natiijada waxay sheegtaa tirada marxaladaha iyo inta ay dhaqaajinta kordhay; foorarka, hubinta naqshadda iyo warbixintu waxay isticmaalaan natiijooyinkan. Ka sarreeya culeyska xadka caabbinta ee qaabka, socodsiintu way joogsataa oo waa sheegtaa. Waa caabbin ku socota oo wareeg yar leh, flexural keliya, aan lahayn yaraynta adkaynta ama culeysyada male-awaan (ma aha habka AISC direct analysis keligiis); sagxadaha, derbiyada iyo sagxadaha adag waxay ku sii jiraan first order.

**Cadaadiska sagxadaha.** Sagxadaha shubka ah (falanqaynta waxay u akhrisaa sagxad sida lakabyo markii alaabtu tahay shub), qaybta Culeysyada waxay leedahay {{ui:Cadaadiska sagxad kasta}}: qor kN/m², dooro kiiska kore oo taabo {{ui:Ku dar sagxadaha}}. Waa la faafiyaa sagxad kasta oo falanqaynta heshay, hoos loo riixo, waxaana lagu liistaa xiriir **Ka saar**. Waa hal cadaadis oo dhammaan sagxadaha u jira, ma aha mid sagxad kasta; ma aha culeys xeer: qor qiimaha injineerkaagu siiyo.

**Dhawaaqyada dabiiciga ah (qaybaha xadidan).** Qaybta {{ui:Qaybaha limitada: dhawaaqyada dabiiciga ah}} ee hoosta natiijooyinka waxay helaa qaababka ugu hooseeya ee isla moodelka iyadoo adeegsanaysa injinka qaybaha xadidan: biimaha oo leh sii-deynta dhamaadkooda, sagxadaha iyo derbiyada oo ah qolof afar-barood, sagxadaha adag, taageerayaasha. Dooro inta qaab (3, 6, 10 ama 20) iyo qaybta sagxadda (qolofka afar-barood ee sagxadaha dhumuc ama khafiif, ama kan sagxadda khafiifka ah) oo taabo {{ui:Hel dhawaaqyada}}. Miiska wuxuu siiyaa qaab kasta dhawaaqa Hz-ka, muddada ilbiriqsiyada, iyo miisaanka wax-ka-qabashada ee X, Y, Z oo qayb ka ah miisaanka dhaqaajin kara. {{ui:Ku muuji moodelka}} wuxuu sawiraa qaab kasta sida qaabka foorarka loo sawiro. Miisaanku waa densiti-ga alaabta marka lagu dhuftay mugga: culeysyadu ma kordhiyaan miisaanka, alaabta aan densiti lahayn ma leh. Warbixinta (PDF, CSV) waxay qaadaysaa miiska. Waa rogmo iyo dhaqdhaqaaq yar oo keliya, ma jiro culeys dhulgariir ama dabayl oo laga sameeyey xeer halkan. Ma aha hubin xeer; injineerkaagu wuu dib u eegaa natiijooyinka.

**Jawaabta xooggii, taariikhda waqtiga iyo riixitaanka (pushover).** Saddex qaybood oo kale ayaa hoos ugu jira dhawaaqyada, iyadoo adeegsanaya isla moodelka qaybaha xadidan. Miisaanka dhammaantood waa densiti-ga alaabta iyo culeysyada hoos-u-riixa ee kiisaska aad calaamadeysay, mid kasta oo lagu dhufo factor aad qortay (tusaale, Dead 1 iyo Live qayb aad u tirinayso miisaan).

{{ui:Jawaabta xooggii}} wuxuu akhrinayaa qaab kasta spectrum aad siisay (miis muddo iyo xawaare, ama qaabka ASCE 7 ee SDS, SD1 iyo TL; badhanka {{ui:Isticmaal qiyamyada Dhulgariirka}} ayaa ka nuqulaya qiyamyadaas qaybta Dhulgariirka), wuxuuna isku geliyaa qaababka CQC, SRSS, xeerka toban boqolkiiba ama wadarta buuxda, kadibna wuxuu isku geliyaa jihooyinka X, Y, Z (100 % + 30 % ama SRSS). Wuxuu siiyaa cadaadiska saldhigga, dhaqaajinta dabaqyada, xoogagga dhamaadka xubinta, iyo miis qaabab oo digta marka qaababka la isticmaalay ay ka yar yihiin 90 % miisaanka. Natiijooyinka waad ku cabbiri kartaa factor ama ilaa cadaadis saldhig oo aad qortay; qaybtu marna kuma xisaabiso cadaadiskaas. Natiijooyinku ma leeyihiin calaamad.

{{ui:Taariikhda waqtiga}} wuxuu socodsiiyaa xawaaraha dhulka isagoo adeegsanaya isku-darka qaababka (sax u ah khadadka toosan ee duubista) ama isku-dhufka toosan (Newmark average acceleration oo leh Rayleigh damping). Gelinta waa sine ama pulse la sameeyay (had iyo jeer lagu calaamadiyaa synthetic), duubis aad ku dhejiso, ama fayl qoraal ah oo aad furto (waqti iyo xawaare, hal xawaare saf kasta oo leh step, ama fayl qaabka PEER oo leh madax DT=; g ama m/s²). Waxay siisaa dhaqaajinta saqafka iyo cadaadiska saldhigga marka waqtiga, dhaqaajinta dabaq kasta, iyo dahaarka xoogagga dhamaadka xubinta. Moodelada duubis aad u dheer leh waxay ilaaliyaan kaliya kalfadka.

{{ui:Riixitaanka (pushover)}} wuxuu saqafka dhinac ahaan ugu riixaa tillaabo yaryar (qaab la mid ah qaabka koowaad, ama isku mid ah), iyadoo qalfiyo plastik ah ay ku jiraan dhamaadka xubinta leh qaabka I. Qalfi wuxuu ku soo degaa xagga plastikada ah, kaas oo hoos u dhacaa markii xoogga toosan kordho (lagu xisaabiyo qaabka la sawiray, fillet-yada lama tixgeliyo); hardening waa ikhtiyaari, P-delta waa ikhtiyaari, isku-darka culeyska dhulka ayaa lagu dabaqi karaa marka hore. Waxay siisaa xariiqda awoodda (cadaadiska saldhigga iyo dhaqaajinta saqafka), qalfiga ugu horreeya, iyo xaaladda iyo wareegga plastikada ah ee qalfi kasta. {{ui:Socodsii taariikhda waqtiga ee khadka jajabka ah}} wuxuu socodsiiyaa qalfiyada isla duubista qaybta Taariikhda waqtiga moodelada yaryar. Qalfiyo waxay samaysmaan dhamaadka xubinta oo keliya (dhig nood halka qalfi u baahan yahay gudaha bannaanka); xubin labada dhinac sii-deysan ma helayso; dhalaalka iyo buckling-ka xidhayaasha lama moodelo; sagxadaha iyo derbiyada waxay ku sii jiraan rogmo; ma jiro shuruudo aqbalaad. Ma aha hubin xeer; injineerkaagu wuu dib u eegaa natiijooyinka. Dejinta waxaa lagu kaydiyaa moodelka, warbixintuna waxay qaadaysaa miisaska.

Weli lama dhisin: buckling, saxitaanka miisaanka maqan ee spectrum-ka, cabbirka duubista, shuruudaha aqbalaadda qalfiyada, culeysyada aagga ka duwan cadaadiska sagxad kasta oo keliya, dhaqaajinta xubinta, xidhayaasha tensiyonka-keliya, derbiyada iyo sagxadaha qaabka ku jira, iyo hubinta naqshadda ee biimaha dhalaalay iyo qaybaha aan I-shape birta la rogay ahayn. Eeg [Weli lama dhisin](topic:not-built-yet).

## Cutubyada

Dherer kasta wuxuu raacaa cutubka aad dooratay qalabka ({{ui:Cutubyada}}), sida qaybta kale ee BimCraft: booska culeysyada aad qortay oo aad aragto ({{ui:Ka yimid}}, {{ui:Meesha}}, {{ui:Ag}}), barta culeysyada barta iyo jawaabaha, dhererka dabaqyada ee {{ui:Dhulgariirka}}, iyo tiirarka foorarka iyo dhaqaajinta (feet iyo inches waxay muujiyaan dherarka yar ee inch tobanka). Beddel cutubka wakhti kasta; tabku wuu dib u rinjiyaa. Xoogagga waxay ku sii jiraan kN iyo kN·m, warbixinta (PDF, CSV) iyo faylka CraftScript waxay ku sii jiraan millimitir oo cutubka lagu qoray. Cabbirrada qaybaha, dhexroorka beddelaha iyo daboolka ee qaybta {{ui:Shub}} waxay ku sii jiraan millimitir sida loo magacaabay.

## Hubinta naqshadda

Qaybta {{ui:Hubinta naqshadda}} (oo la mid ah DetailCraft) waxay qaadataa {{ui:Code-ka naqshadda}}, ASCE 7 + AISC 360 ama EN 1990 + EN 1993-1-1, iyo {{ui:Darajada birta}}. Sii nooc kiis kasta (dead, live, wind …) ka dibna {{ui:Samee isku-darka}} wuxuu qoraa isku-darka culeysyada xeerka kiisaskaaga; falanqaynta markaas ayaa u socodsiisa sida isku-dar kasta.

{{ui:Hubi xubnaha}} ka dib waxay hubisaa I-shape birta la rogay kasta oo leh hubinta DetailCraft (tensiyon, cadaadis oo leh buckling, foorarka oo leh lateral-torsional buckling, jeexa, foorarka oo leh xoogga toosan, qotada; qodobada waxay ku jiraan warbixinta) oo waxay muujinaysaa inta awoodda ay isticmaasho, midabka moodelka. Waa **caawiye ilaa injineer uu dib u eego**.

**Xubnaha la hubiyo.** Haddii profile-ka IFC aanu sheegin in I-shape birta la rogay ama la alxamay yahay, BimCraft waxay u tiriyaa la rogay kaliya marka magaca profile-kiisa (haddii kale magaca nooca curiyaha) yahay cabbir ka mid ah miisaska AISC W ama S, ama miisaska EN 10365 IPE, HEA ama HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **iyo** dhererka, ballaca, derbiga iyo flange-ka faylka ay ku dhex jiraan 1% cabbirkaas. Dhammaan I-shape kale (plate girder, cabbir magac kale ku jira, ama cabbir la wax ka beddelay) waxaa loo qaadaa la alxamay, waana laga soo celiyaa **aan la hubin**; sidaas oo kale tuubooyinka, angles, channels iyo qaybaha kale, qaybaha dherer-qaarka ah iyo torsion. Xubnahaas hubi injineer.

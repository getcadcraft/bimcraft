---
title: Hubi xubnaha kontaadada oo samee culeysyada jilicsanaanta
summary: Dejiso birta beamada kontaadada iyo tiirarka moodelka furan, hubi sida ACI 318-19, samee xoogagga dhinaca ee ASCE 7-22 ee dabaqyada adag, oo eeg kala-gedgedka dabaqa. Caawin injineer oo hubiya.
keywords: kontaado, kontaado birta ku xoogaysan, reinforced concrete, ACI 318, ACI 318-19, birta, beam, tiir, shear, ties, dhulgariir, jilicsanaan, ELF, xoog dhinac, ASCE 7-22, drift, kala-gedgedka dabaqa, dabaqyada, diaphragm adag, miisaanka dabaqa, utilisation, qaab-dhismeed, injineer, falanqayn
from: 2f342e72
---

Qaybaha {{ui:Xubnaha kontaadada}} iyo {{ui:Culeysyada jilicsanaanta}} ee tab-ka {{ui:Falanqayn}} waxay hubiyaan beamada kontaadada ee birta ku xoogaysan iyo tiirarka IFC-ka furan, waxayna sameeyaan xoogagga dhinaca ee dhulgariirka ee dabaqyada qaab-dhismeedkiisa. Waa qaybaha isku mid ah ee DetailCraft, waxaa la socodsiiyaa kadib falanqaynta tab-ka {{ui:Falanqayn}}, waxaana lagu kaydiyaa IFC-ka oo ay weheliyaan dejinta falanqaynta kale.

:::warning
Natiijooyinku **waxay u yihiin hubinta injineer**: caawin ilaa uu mid dib u eegay. Hubinta kontaadada waxay isticmaashaa xoogag kowaad-darajo (tiir ku jira qaab aan dhaqaajin loo naqshadeeyay cabbirka dhidibka ballaadhan), iyada oo aan lagu dhex-dhigin dhaqdhaqaaq, aan la naqshadeyn torsion, aan faahfaahin jilicsanaan (ACI cutubka 18) iyo aan faahfaahin tie. Culeysyada dhulgariirka waxay ka tagaan isku-dhafka dheeraadka ah, xoogga dhulgariirka toosan, kor u kaca torsion iyo saamaynta P-delta. **Culeysyada dabaysha lama dhisin**: cutubyada dabaysha ee heerka ma ku jiraan bogagga tixraaca mashruuca.
:::

## Waxa BimCraft akhrinayo

Falanqaynta waxay akhrisaa beamada, tiirarka iyo braces-ka moodelka oo leh profile-yadooda (eeg [Falanqee qaab-dhismeedka](topic:frame-analysis)). Qaybta {{ui:Xubnaha kontaadada}} waxay liistaa qaybo kasta oo ay isticmaalaan. Riix {{ui:Ku deji kontaado…}} qayb kontaado ah: BimCraft wuxuu afar-xagal ka qaadaa agga iyo adkaynta profile-ka (ballaca b iyo dhererka h oo markaas aad beddeli kartid), sidaas darteed qayb aan u dhowayn afar-xagal (birta la rogay) wuxuu siinayaa cabbir aad wax ka beddeshid, ama waa la daayaa.

Qayb loo dejiyay kontaado, iyo walax kasta oo magaceeda agabkeedu yahay kontaado, waxaa lagu falanqeeyaa sida kontaado: E = 4700 √f′c, 2400 kg/m³, iyo caadi ahaan **qaybo ciirsan** (tiirarka 0.70 Ig, beamada 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Dooro {{ui:Qaybaha buuxa}} si aad u damiso. Dejinta kale la'aan, moodelka waxaa loo falanqeeyaa sida hore.

## Birmo, isku-dhafka, hubin

Bixi daboolka, birta sare, hoose iyo dhinac (ama kaarka tiirka), iyo ties-ka qayb kasta, deji f′c, fy, fyt, K iyo sway ama non-sway. Bixi noocyada culeyska, riix {{ui:Samee isku-darka}} (ASCE 7 §5.3.1) kadibna {{ui:Hubi kontaadada}}: xubin kasta waxay heshaa utilisation, oo midab lagu siiyay moodelka. Xubnaha ka sarreeya awoodda, iyo kala-gedgedka dabaqa ka sarreeya xadka, waxaa lagu liistaa {{ui:Dhibaatooyinka}} iyo qodobkooda; guji mid si aad walaxda u doorato.

## Dabaqyada iyo culeysyada jilicsanaanta

Qaybta {{ui:Culeysyada jilicsanaanta}}, {{ui:Hel dabaqyada}} wuxuu helaa heerarka ay bar laba ama ka badan ku kulmaan; mid kasta wuxuu noqdaa diaphragm adag. {{ui:Qaado miisaanka kiisaska}} wuxuu akhrisaa miisaanka jilicsanaanta dabaq kasta oo kiisaska aad siiso factor. Buuxi SDS, SD1, S1, R, Ie, Cd, TL, nidaamka iyo heerka khatarta, kadibna {{ui:Samee kiisaska jilicsanaanta}} (ASCE 7-22 12.8: period, base shear, qaybinta dabaqyada kor, 5 % accidental torsion). Xoogagga dabaqyada iyo hubinta kala-gedgedka (12.12) ayaa muuqda kadib socodsiin. Isla period-ka iyo adkaynta dabaqa ayaa quudiya dhulgariirka ku jira [Ciyaar daad, dabayl ama dhulgariir](topic:hazard-playback) marka aad dooratid qaabka falanqaynta isha ah.

Sagxadaha iyo darbiyada kontaadada waxay noqdaan saxan falanqaynta, qaybta {{ui:Birta sagxadda}} waxay xisaabisaa birta ay u baahan yihiin mitir kasta. Faahfaahinta hubin kasta waxaa ku jira mawduuca isla magacaas ee DetailCraft.

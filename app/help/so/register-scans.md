---
title: Isku-dhig skaano badan hal mid
summary: Ku dhig skaanada laga qaaday meelo kala duwan hal qaab, iyada oo la dooranayo labo bar oo la isku dhigay ama beegsi la qoro, ICP ku hagaaji, mashruuc ahaan kaydi, oo dhoofi daruurta la isku dhigay sida LAS ama E57.
keywords: isku-dhig, isku-dhigid, skaano, daruurta barta, icp, iterative closest point, beegsiyo, labo bar, rigid transform, isku-saf, isku-geddi, e57, las, scan ilaa bim
from: e8e270db
---

## Waxa aad samayn doontid

Skaano dhowr ah oo meel isku mid ah (mid kastaa booska scanner-kiisa) waxay ka bilaabmaan isku-xirkooda. Isku-dhig: siiso mid kasta mid ka mid ah booska si dhammaantood u fadhiistaan hal qaab, kadibna kaydi sida mashruuc oo qor daruurta la isku dhigay sida LAS ama E57 mid.

## Ku dhig skaanada

1. Fur wada-hadalka ({{ui:Isku-dhig skaanadka…}} bogga bilowga, ama {{ui:Muuji}} › {{ui:Isku-dhig skaanadka…}} markii moodeel la furay). {{ui:Ku dar skaanadka…}} wuxuu qaataa faylasha LAS, LAZ, E57, PLY, PCD, PTX, PTS ama XYZ, ama ku dhig wada-hadalka. Skaanada leh cabbirro kala duwan waa la diidaa oo waxaa lagu sheegaa qoraal: mid hore u beddel.
2. Dooro {{ui:Skaanka la guurinayo}} iyo {{ui:Ku dhig xagga}}. Sawirku wuxuu muujiyaa skaan kasta meesha ay hadda ku taal, midab kasta oo gaar ah: {{ui:Qorshe}}, {{ui:Hore}} ama {{ui:Dhinac}}; jiid si aad u guurto, mataanaha ku dhufo si aad u weynaysid.
3. **Labo bar.** Riix {{ui:Dooro labo}}, kadibna bar ku taal skaanka la guurinayo, kadibna isla meeshaas oo ku taal skaan kale (geesta, beegsiga, saldhigga tiirka). Samee ugu yaraan saddex jeer, barooyin aan hal khad ku jirin oo kala fogaada. Riix {{ui:Ku dhig labooyinka}}: skaanka waa lagu dhigaa habka least-squares, **Hadhay** wuxuu muujiyaa inta labo kasta weli ay ka dhiman tahay. Labo leh tiro weyn waa dooro xun: ka saar iyada xaaqa calaamadda, kadibna mar kale ku dhig.
4. **Beegsiyo.** Haddii isku-xidhka saxda ah ee bar la yaqaan (beegsiyo la sahamiyay), riix {{ui:Dooro, kadibna ku qor beegsiga}}, taabo barta skaanka, kadibna ku qor X, Y iyo Z beegsiga safka. Labo iyo beegsiyo la qoray waa la isku dari karaa.

## Hagaaji ICP

Labo ayaa siiya dhigid qiyaas ah. {{ui:Hagaaji}} wuxuu skaanka guurinayaa ilaa dusha uu ku dhego skaanka kale: marka hore **barta ilaa barta**, kadibna **barta ilaa dusha**. Miiska wuxuu liisanayaa tallaabo kasta oo qalad iyo tirada barooyinka la isku waafajiyay; khadka kor ka sare wuxuu sawiraa qaladka oo hoos u dhacaya. {{ui:Jooji}} wuxuu dhammeeyaa orodka tallaabada socota wuxuuna hayaa waxa uu gaaray. {{ui:Ka noqo}} wuxuu qaadaa orodka oo dhan (ama dhigidda ugu dambaysay); {{ui:Dib u deji}} wuxuu skaanka ku celinayaa kuraasta faylkiisa.

Si ay degdeg ugu noqoto laptop-ka, ICP wuxuu ka shaqeeyaa qayb yaraysan oo barooyinka ah ({{ui:Barood la isticmaalay}}, 5,000 ilaa 60,000) wuxuuna iska dhegayaa isbarbar dhigyada ka fog {{ui:Masaafada ugu weyn ee isbarbar dhigga}} (caadi ahaan 5% cabbirka skaanka, oo yaraanaya marka uu degayo). Wuxuu u baahan yahay dhigid qiyaas ah marka hore: skaano aan ku kala dhow-dhow ka muuqan waxay sheegaan in aan la isbarbar dhigi karin. Dusha siman ama toosan keliya ma hagaajin karto booska iyada, sidaas darteed labo ku dar xaaladdaas.

## Kaydi iyo dhoofi

- {{ui:Kaydi mashruuca}} wuxuu qoraa fayl yar oo `.ccscans.json`: magac kasta oo skaan, cabbirkiisa iyo astaamaha 64 KB-ka ugu horreeya, oo leh isbeddelkiisa. Ma hayo barooyin. {{ui:Fur mashruuc…}} wuxuu helaa faylasha skaanka tixraacyadooda (faylashaasi waa in marka hore lagu daraa) wuxuuna dib u celinayaa isbeddel kasta.
- {{ui:U dhoof LAS}} iyo {{ui:U dhoof E57}} waxay qoraan hal fayl oo leh skaan kasta meeshiisa la isku dhigay. Barooyinka asalka ah looma qoro mar kale; isbeddelka waxa lagu dabaqaa marka la dhoofinayo. Marka {{ui:Ka akhri dhammaan barooyinka faylalka}} la shido, fayl kasta mar kale ayaa la akhriyaa bar kasta (ilaa 20 milyan skaan kasta); marka la damiyo, kaliya barooyinka muuqda ee muuqaalka ayaa la qoraa.
- {{ui:Muuji daruurta la isku dhigay}} (BimCraft) wuxuu qoraa LAS-ka wuxuuna ku furaa muuqaalka 3D ee moodeelka dhinacdiisa, sida daruur kasta.

:::note
Waxba lama soo dirin. Isku-dhigidda waxay ka shaqeysaa cabbirrada faylalka laftooda, waxayna ilaalisaa millimitirada; LAS waxa lagu qoraa miisaan ku habboon (ilaa 0.1 mm), E57 waxa lagu qoraa doubles. Nidaamka isku-xirka wuxuu u gudbaa LAS kaliya marka skaan kasta uu isla koodka EPSG magaca ku sheego. Qoraaga E57 waa kan aanu leenahay; waa la hubiyaa iyadoo faylashiisa lagu akhrinayo akhriskan iyo libE57Format.
:::

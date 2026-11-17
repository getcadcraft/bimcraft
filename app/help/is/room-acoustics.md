---
title: Athugaðu endurómun rýmis og hlustaðu á hana
summary: Endurómunartími eftir áttundarbandi fyrir hvert rými (Sabine og Eyring) út frá stærð þess og áferð, markmiði sem þú setur sjálfur, og rödd, handaklapp eða tónlist spiluð í gegnum reiknaða hvatsvörun rýmisins.
keywords: hljómburður, endurómun, endurómunartími, rt60, sabine, eyring, hljóðgleypni, bergmál, hljóð, hlusta, hvatsvörun, tal, kennslustofa, skrifstofa, teppi, loftaplata, hávaði
from: 16996cbb
---

Hlutinn {{ui:Hljómburður rýma}} í vinstra spjaldinu reiknar út hversu lengi hljóðið ómar í hverju rými. Hann les gólfflatarmál, hæð, veggi, hurðir og glugga hvers rýmis úr opna IFC-líkaninu. Engu í líkaninu er breytt.

## Veldu áferðina

Þar sem líkanið segir hvað er á yfirborði, les rýmið það: innra lag hverrar veggjagerðar (gips, múrhúð, múrsteinn, steinsteypa og hleðslusteinn eru þekkt), gerð gólfsins (viður eða steinsteypa) og hvort loft sé flísalagt. Merkið við hvert val segir hvort það kemur úr líkaninu, er sjálfgefið eða valið af þér; veldu aðra áferð til að yfirskrifa það. Allt sem líkanið segir ekki um helst á sjálfgefnu gildi. Stuðlarnir eru **dæmigerð birt gildi**; skiptu þeim út fyrir prófunargögn vöru þegar þú hefur þau. Sláðu inn **markmið** (lengsta miðtíðni endurómun sem þú vilt) og hvert rými sem fer yfir það birtir aðvörun ásamt hljóðgleypninni sem myndi lækka hana.

## Lestu töfluna

Endurómun er gefin fyrir 125 Hz til 4 kHz. Sabine hentar lifandi rýmum og Eyring dauðum; línan merkt *Notað* tekur Eyring þegar meðalhljóðgleypnin er yfir 0.2. Hljóðgleypni loftsins er innifalin (hún stytti háu böndin í stórum rýmum). Þetta er tölfræðilíkan: það gerir ráð fyrir að hljóðið dreifist jafnt, þannig að löng eða flöt rými og mjög lítil rými eru gróf viðmið, og húsgögn, fólk og opnar hurðir eru ekki talin með.

## Hlustaðu

{{ui:Spila í þessu rými}} spilar rödd (búin til hér), handaklapp, plokkaða tóna eða **þína eigin hljóðskrá** (hún er áfram á tölvunni þinni) í gegnum hvatsvörun sem reiknuð er fyrir rýmið: beina hljóðið, fyrstu endurkastanir kassa af þeirri stærð og hala sem deyr út á eigin endurómunartíma rýmisins í hverju bandi. {{ui:Spila þurrt}} spilar sama hljóð á sama styrk án rýmisins. Þú getur vistað hvatsvörunina eða hljóðið í rýminu sem WAV-skrár. Það hljómar eins og rými af þeirri stærð og áferð, ekki eins og neitt raunverulegt rými.

## Fólk og húsgögn

Sláðu inn fjölda **fólks í þessu rými** til að bæta við hljóðgleypni þeirra. Húsgögn sem líkanið geymir (sófar, rúm, stólar, borð, fataskápar, fundin eftir heiti) bæta við sinni eigin. Tölurnar eru gróf skipulagsgildi, námundaðar; skiptu þeim út fyrir mælingar fyrir rými sem skiptir máli.

## Hljóðgjafi og hlustandi

Undir {{ui:Hljóðgjafi og hlustandi}} ýtirðu á {{ui:Setja hljóðgjafann}} eða {{ui:Setja hlustandann}} og smellir á grunnmynd rýmisins. Hljóðið sem þú spilar heyrist þá þaðan: beina hljóðið berst eftir fjarlægðinni og ómandi hlutinn er á þeim styrk sem gildir fyrir þá fjarlægð. Hreinsaðu bæði til að fara aftur í fjarlægðarreitinn.

## Ójöfn hljóðgleypni og rýmishamir

Undir {{ui:Ójöfn hljóðgleypni (kassalaga herbergi)}} slærðu inn rýmið sem kassa og velur gólf-, loft- og veggáferð þess. Taflan bætir Fitzroy og Arau-Puchades við Sabine og Eyring: þær meta þrjú pör af gagnstæðum flötum hvert fyrir sig, þannig að teppalagt rými með hörðu lofti er ekki metið of stutt. Þegar pörin víkja mikið hvort frá öðru birtist athugasemd sem segir hvoru eigi að treysta. Fyrir neðan töfluna sýnir **Rýmishamir** lægstu stöðubylgjur kassans og tíðnina þar sem rýmið hefur aðskilda hami í stað jafns hljóðsviðs. Þetta eru spár fyrir kassalaga rými, hönnunarhjálp en ekki mæling.

## Einingar

Flatarmál rýma, hæðir, rúmmál og fjarlægðir birtast í {{ui:Einingar}} sem þú valdir (ferfet og rúmfet, tommur, millimetrar, sentímetrar eða metrar). Reiknunin sjálf er áfram í SI; aðeins birtingin breytist. Tímar (sekúndur), tíðnir og styrkur haldast óbreytt.

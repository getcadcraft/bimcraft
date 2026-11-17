---
title: Rafmagnsgrunnmyndin
summary: Settu innstungur, rofa, ljós, skynjara, tengidósir og töflur á grunnmyndina með sömu táknum og rafmagnsviðbót CadCraft notar, tengdu rofa við ljósin sem þeir kveikja á, og skráðu tæki og rásir í listunum.
keywords: rafmagn, rafmagnsgrunnmynd, innstunga, tengiinnstunga, tvöföld innstunga, rofi, þriggja leiða rofi, ljósdeyfir, ljós, loftljós, innfellt ljós, niðurljós, hreyfiskynjari, tengidós, tafla, dreifitafla, rás, álag, watts, amps, rofaleggur, listi yfir tæki, listi yfir töflur
from: f7de1947
---

## Það sem þú gerir

Teiknaðu rafmagnsgrunnmynd hússins í líkaninu: innstungur, rofa og töflur á veggjunum, ljós og skynjara í loftinu. Hvert tæki er raunverulegur rafmagnshlutur í IFC-skránni, með merki, rás og álagi, og rofar muna hvaða ljós þeir kveikja á.

## Setja tæki

1. Á kóta, opnaðu {{ui:Smíð}} og veldu {{ui:Rafmagn}}.
2. Veldu tækið: innstungur (afl, gögn, sími, hljóð og mynd), rofa og skynjara (hitastilli og tímarofa líka), ljós, nema og viðvörunartæki, tengidós, töflu eða undirtöflu.
3. Sláðu inn **Rás** ef þú veist hana (hvaða heiti sem er: 1, 2, A-3). Skildu **Festingarhæð** eftir autt til að fá venjulega hæð þess tækis.
4. Smelltu á grunnmyndina. Innstungur, rofar og töflur fara á flöt næsta veggjar, með andlitið inn í rýmið; ljós, skynjarar og tengidósir fara í loftið þar sem þú smellir.

Tækin fá merki um leið og þau eru sett: **R** fyrir innstungur, **S** fyrir rofa, **L** fyrir ljós, **M** fyrir hreyfiskynjara, **J** fyrir tengidósir, **P** fyrir töflur. Tæki á vegg færast með veggnum þegar þú færir hann.

Viltu frekar skoða eftir mynd? Opnaðu **Táknaspjaldið** frá {{ui:Smíð}} til að finna tæki eftir heiti, stjörnumerkja þau sem þú notar og setja þau með einum smelli: sjá [Táknaspjaldið](topic:symbol-palette).

## Tengja rofa við ljós

1. Veldu rofa (eða hreyfiskynjara) og smelltu á **Tengja ljós** í **Eiginleikar**.
2. Smelltu á hvert ljós sem hann kveikir á. Smelltu aftur á tengt ljós til að aftengja það.
3. Ýttu á {{key:Enter}} eða smelltu á **Lokið**.

Grunnmyndin teiknar brotna bogalínu frá rofanum að hverju ljósi hans. **Eiginleikar** ljóss sýna hvaða rofar kveikja á því.

## Rýmið sem tæki stendur í

Hvert tæki veit í hvaða rými það er. Tæki á vegg er í rýminu sem það snýr að; tæki í lofti er í rýminu sem það er yfir. **Eiginleikar** sýna **Rými**, og listinn **Rafmagnstæki** er með dálkinn **Rými** (númer og heiti, eins og 101 Eldhús).

Þetta er haldið við: endurnefndu rýmið eða breyttu númeri þess, færðu tækið eða færðu vegg, og rýmið fylgir í sama skrefi. Tæki á ytri hlið byggingar, eða í svæði sem er ekki rými, segir að það sé ekki í rými.

Rýmið er líka skrifað í skrána, í eiginleikasafn tækisins `CadCraft_Location` (Room, RoomNumber, RoomName), svo að Finna, Litur eftir eiginleika og merkjalisti geti notað það, og annað forrit líka. Grunnmyndartákn og hlutir tengdir tákni fá sama safn; sjá [Táknaspjaldið](topic:symbol-palette).

## Láttu aðstoðarmann setja þau

Með tengdum aðstoðarmanni (Stillingar › Aðstoðarmenn, með leyfi til breytinga) geturðu beðið um tæki með orðum: „settu tvöfalda innstungu á 2 m fresti meðfram veggjum stofunnar, 300 mm upp, á rás 3“, eða „bættu við loftljósi með rofa þess við dyrnar“.

Aðstoðarmaðurinn notar fimm verkfæri: `devices_add`, `device_change`, `lights_set`, `devices_delete` og `devices_list`. Þau búa til sömu tæki og rafmagnsverkfærið, á sömu veggjum og með sömu merkjum, rásum, álagi og hæðum, og hvert kall er eitt skref í afturköllun.

Tæki fær aldrei tegund sem rafmagnsverkfærið hefur ekki: óþekkt tegund er hafnað og aðstoðarmanninum er sendur listinn. Innstunga eða rofi verður að vera innan 600 mm frá fleti veggjar, eins og smellur, annars er kallinu hafnað og ekkert er sett. Sjálfgefnar hæðir eru í millimetrum: 300 fyrir innstungur, 1100 fyrir rofa; tæki í lofti hangir úr loftinu.

## Breyta og lista þau

Veldu tæki til að breyta merki þess, rás, álagi (vött) og festingarhæð. Veldu nokkur til að setja þau öll á sömu rás í einu. Ýttu á {{key:Delete}} til að fjarlægja eitt; ljósi sem er eytt er tekið af rofum þess.

Í {{ui:Listar}} veldu **Rafmagnstæki** fyrir hvert tæki með kóta þess, rás, álagi, hæð og ljósunum sem hvor rofi kveikir á, eða **Rásir** fyrir tæki hverrar rásar, heildarálag og straum. Hvort tveggja er líka á listablaði teikningasettsins: sjá [Útlit, snið og blöð](topic:sheets).

:::note
Festingarhæðir og álag eru sjálfgefin gildi til áætlunar (innstunga 16" upp og 200 W, rofi í 48", loftljós 60 W), ekki hönnun: rafvirki eða verkfræðingur mæla rásirnar og athuga reglugerðina.
:::

:::tip
Táknin eru þau sömu og rafmagnsviðbót CadCraft teiknar á uppsetningarteikningum, svo að grunnmynd úr hvoru forritinu er lesin eins.
:::

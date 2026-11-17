---
title: Eyða, klippa, afrita og líma byggingarhluti
summary: Veldu veggi, hurðir, húsgögn eða hvað annað sem er í IFC-líkani; eyddu þeim, klipptu þá út, eða afritaðu og límdu þá þar sem þú smellir, á sama stað eða á annarri hæð.
keywords: eyða, fjarlægja, þurrka út, klippa, afrita, líma, tvöfalda, færa, velja allt, velja hvað sem er, byggingarhluti, veggur, hurð, gluggi, stigi, op, afturkalla
from: d9eec37f
---

## Hvað þú gerir

Breyttu því sem er í IFC-líkani: fjarlægðu hluti sem þú vilt ekki hafa, afritaðu vegg eða sett af húsgögnum á annan stað, eða færðu hluti með því að klippa þá út og líma þá. Sérhver breyting er eitt skref sem þú getur afturkallað, og vistun skrifar nýja skrá, þannig að upprunalega skráin helst eins og hún var.

## Skref

1. Opnaðu IFC-líkan. Sjá [Opna IFC-líkan og skoða það í þrívídd](topic:open-ifc-model).
2. Veldu það sem þú vilt breyta: smelltu á hlut, haltu {{key:Mod}} eða {{key:Shift}} niðri og smelltu til að velja fleiri, eða ýttu á {{key:Mod+A}} ({{ui:Meira}}, {{ui:Velja allt}}) til að velja alla hluti sem sjást.
3. Síðan:
   - **Eyða:** ýttu á {{key:Delete}}, eða {{ui:Meira}}, {{ui:Eyða}}.
   - **Afrita:** ýttu á {{key:Mod+C}} eða smelltu á {{ui:Afrita}}.
   - **Klippa:** ýttu á {{key:Mod+X}}, eða {{ui:Meira}}, {{ui:Klippa}}. Hlutirnir hverfa og þú getur límt þá.
4. Til að líma, ýttu á {{key:Mod+V}} eða smelltu á {{ui:Líma}}. Gegnsær kassi í stærð þess sem þú afritaðir fylgir bendlinum á hæðinni sem valin er í staðsetningarstikunni. Ýttu á {{key:R}} til að snúa honum um 90°, og smelltu síðan þar sem hann á að vera. Hver smellur setur inn annað afrit; ýttu á {{key:Esc}} til að hætta.
5. Eða ýttu á {{key:Mod+Shift+V}} ({{ui:Meira}}, {{ui:Líma á sama stað}}): eftir klippingu fara hlutirnir nákvæmlega aftur þangað sem þeir voru; eftir afritun fer afritið rétt við upprunalegu hlutina.
6. Smelltu á {{ui:Vista sem IFC}} til að sækja breytta líkanið.

## Hvað fylgir hlut

- **Hlutar:** stigi tekur með sér stigakafla sína, gluggatjaldsveggur spjöldin sín, og allt sem er búið til úr hlutum tekur þá alla.
- **Op:** veggur tekur með sér opin sem skorin eru í hann. Þegar hurð eða gluggi er eytt fer með honum opið sem hann fyllti, þannig að veggurinn lokast, eins og í hönnunarforriti. Þegar vegg sem teiknaður er í BimCraft er eytt, eyðast líka hurðir og gluggar í honum og veggirnir sem eftir standa tengjast saman á ný. Þegar vegg úr skrá sem gerð var annars staðar er eytt, verða hurðir og gluggar eftir þar sem þeir voru.
- **Gögn:** afrit hefur sömu tegund, efni, eiginleikasöfn og magn og upprunalegi hluturinn, og nýtt GlobalId. Ef gildi á afritinu er breytt síðar, helst upprunalegi hluturinn óbreyttur.
- **Hlutir úr safni** halda gögnum sínum úr safninu; afrit fær næsta laust hlutanúmer, en klippt hlutur sem er límdur aftur heldur sínu númeri.

## Það sem þú átt að sjá

- „Eytt: …“ eða „Límt: …“ í listanum {{ui:Breytingar}}. {{key:Mod+Z}} tekur síðustu breytingu til baka; {{key:Mod+Y}} setur hana aftur.
- Eftir eyðingu segir stöðulínan hversu margir hlutar og op fóru líka.
- Límdir hlutir eru valdir, þannig að þú getur límt aftur á sama stað til að búa til röð, eða eytt þeim.

## Gott að vita

- Afrit nota sömu rúmfræði og upprunalegi hluturinn (IFC leyfir hlutum að deila henni), þannig að skráin stækkar mjög lítið.
- Byggingarhlutir límast inn í líkanið sem þeir voru afritaðir úr, á sama flipa. Til að nota settar hlutir úr safni í öðru líkani, afritaðu einn hlut í einu: sjá [Afrita, líma og tvöfalda hluti úr safni](topic:copy-paste).
- Hæðir, rými, byggingar og lóðin er ekki hægt að eyða eða afrita. Veldu hlutina í þeim í staðinn. Rými sem teiknað er í BimCraft verður til úr veggjunum í kringum það: eyddu vegg til að sameina tvö rými.
- Veggir, hurðir og gluggar sem teiknaðir eru með eigin vegg-, hurðar- og gluggaverkfærum BimCraft er enn ekki hægt að afrita, klippa eða tvöfalda; stöðulínan segir til um það. Teiknaðu þá aftur. Eyðing virkar.
- Afrita setur líka nöfn og eiginleika þess sem þú afritaðir á klippiborðið sem texta, til að líma í töflureikni eða tölvupóst.

## Algeng mistök

- **{{ui:Eyða}} er grátt.** Enginn hluti er valinn, eða aðeins hæðir eða rými eru valin. Bentu á hnappinn til að sjá ástæðuna.
- **Límt segir að hlutirnir komi úr öðru líkani.** Þú opnaðir annað líkan eftir að þú afritaðir þá. Opnaðu fyrsta líkanið aftur og afritaðu þá þar.
- **Límda afritið er á annarri hæð.** {{ui:Hæð}} í staðsetningarstikunni ræður hvert það fer; veldu hæðina áður en þú smellir.

## Tengt

- [Fela, einangra og sjá í gegnum hluti](topic:hide-and-isolate)
- [Lyklar og mús](topic:keyboard#edit)

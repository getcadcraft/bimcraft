---
title: MEP-búnaður með tengjum
summary: Settu almennan loftmeðhöndlunarbúnað, viftur, dælur, katla, vatnshitara, endabúnað, dreifara, rist og geyma, stærðarskilgreint eftir gildunum sem þú slærð inn, hvert með pípu- og loftstokkstengingum sem aðrar lagnir tengjast.
keywords: mep, búnaður, loftmeðhöndlunareining, ahu, vifta, rásarvifta, dæla, ketill, vatnshitari, endabúnaður, vav, dreifari, rist, loftrist, geymir, tengi, tenging, stútur, hálsstærð, hvac, pípulagnir, vélbúnaður, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Það sem þú gerir

Settu búnaðinn við enda pípa og loftstokka. Hvert stykki er almennt form, stærðarskilgreint eftir gildunum sem þú slærð inn, með tengingar sínar sem **tengi**: hvar pípa eða loftstokkur tengist því, hvaða kerfi, í hvaða átt flæðið fer og hvaða stærð. Pípur og loftstokkar sem teiknaðir eru frá tengi taka stærð þess og kerfi og haldast fastir við það: sjá [Tengdu pípur og loftstokka við búnað](topic:mep-connections).

:::note
Þetta er teikni- og samhæfingarhjálp, stærðarákvörðuð af verkfræðingi. Búnaðurinn er ekki vara framleiðanda: engar afkastatölur, þyngdir eða tengistærðir framleiðanda. Komdu með líkan framleiðanda úr MEP-forritinu þínu sem IFC þegar þú þarft það.
:::

## Settu stykki

1. Kveiktu á {{ui:Teikna}}, opnaðu {{ui:Smíð}} og veldu {{ui:Búnaður}}.
2. Í stikunni velurðu tegund og slærð inn stærðir hennar. Hver tegund spyr um sínar eigin:

| Tegund | Þú slærð inn | Tengi hennar |
|---|---|---|
| Loftmeðhöndlunareining | lengd, breidd, hæð; framboðs- og afturopnanir; stærð og kerfi spólupípu; stærð þéttivatns | framboðsloftstokkur út, afturloftstokkur inn, spóla inn og út, frárennsli þéttivatns |
| Rásarvifta | þvermál, lengd, kerfi | loftstokkur inn og út |
| Dæla | stærð pípu, kerfi | inntak og úttak |
| Ketill | lengd, breidd, hæð, stærð pípu, stærð gass, þvermál reykháfs | hitaveitu-framboð út og afturrás inn, gas inn, reykháfur út |
| Vatnshitari | þvermál, hæð, stærð pípu, gas eða rafmagn | kalt vatn inn, heitt vatn út (og gas inn og reykháfur þegar hann brennir gasi) |
| Endabúnaður | lengd, breidd, hæð, kringlótt inntak, breidd og hæð úttaks | framboðsloft inn og út |
| Dreifari | andlit, háls, kerfi | háls hans (loft inn) |
| Rist | breidd og hæð andlits, breidd og hæð háls, kerfi | háls hennar (loft út í afturloftstokk eða útblástur) |
| Geymir | þvermál, hæð, stærð pípu, kerfi | inntak efst, úttak nálægt botni |
| Ofn | lengd, hæð, dýpt, stærð pípu, kerfi | flæði inn efst á öðrum enda, afturrás út neðst á hinum |
| Konvektor / plötuofn | lengd, hæð, dýpt, stærð pípu, kerfi | flæði inn á öðrum enda, afturrás út á hinum |
| Fjölskylda framleiðanda | fjölskyldan (sjá [Pípuforskriftir, lokar, stillilok og fjölskyldur framleiðenda](topic:pipe-specs)) | tengin sem fjölskyldan fékk |

3. Stilltu **Við**, hæð botns þess yfir kótanum. Hæð dreifara eða ristar er andlit hans: sláðu inn hæð loftsins.
4. Sláðu inn **Merki** ef þú vilt; næsta stykki af sömu tegund fær næsta númer.
5. Færðu bendilinn yfir grunnmyndina: fótspor og tengi þess fylgja honum. Ýttu á {{key:R}} til að snúa því 90°. Smelltu þar sem það á að fara.

Stærðir pípa eru stálpípustærðir (ASME B36.10M). Pípa sem dregin er frá dælu í öðru efni tekur sömu nafnstærð í sínu eigin efni.

## Breyta eða fjarlægja

Veldu það í grunnmyndinni eða 3D-sýninni. {{ui:Eiginleikar}} sýna allar stærðir sem þú slóst inn, merkið, X, Y, hæð og snúning, og hvert tengi: stærð þess, kerfi, í hvaða átt flæðið fer og hvort eitthvað er tengt. Hver breyting er eitt skref í {{ui:Afturkalla}}; lagnir sem eru festar við tengi þess færast með því. {{key:Delete}} fjarlægir það; lagnir sem voru festar við það haldast og athugunin {{ui:Athuga tengingar}} telur þær upp.

## Í IFC-skránni

Hver tegund er vistuð sem IFC-flokkur sinn: IfcUnitaryEquipment (loftmeðhöndlunareining), IfcFan (vifta), IfcPump (dæla), IfcBoiler (ketill; vatnshitari er IfcBoiler af gerðinni water með hlutartegundina „Water heater“), IfcAirTerminalBox (endabúnaður), IfcAirTerminal (dreifari, rist) og IfcTank (geymir), með gerð sem deilt er af öllum stykkjum af sömu tegund og stærðum. IFC2X3-skrár fá IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal og IfcFlowStorageDevice með samsvarandi gerðum. Hvert tengi er IfcDistributionPort, staðsett þar sem tengingin er, snýr út, með flæðisátt sína og kerfi; önnur forrit lesa hvaða lögn tengist hvaða tengi. Stykkið tengist kerfi hvers tengis síns og ber þau söfn búnaðarhluta sem sérhver settur hlutur úr safni hefur.

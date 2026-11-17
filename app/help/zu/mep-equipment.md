---
title: Izinsiza ze-MEP ngamaphoyinti
summary: Beka ama-air handler, amafeni, amapompo, amaboyila, izishisi zamanzi, amayunithi okuphela, ama-diffuser, amagrille nezigxobo, ngobukhulu obuthayiphwe ngamanani owathayipha, ngamunye namaxhumano wamapayipi nemisele yomoya ezinye izintambo ezixhumana nawo.
keywords: mep, izinsiza, air handler, ahu, ifeni, ifeni elingaphakathi, ipompo, iboyila, ishisi lamanzi, iyunithi yokuphela, vav, diffuser, grille, register, ithange, iphoyinti, amaphoyinti, ukuxhuma, usayizi wentamo, hvac, mechanical, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Okufanele ukwenze

Beka izinsiza eziphelweni zamapayipi nemisele yomoya. Isiqephu ngasinye siyisimo esijwayelekile esibukhulu ngamanani owathayipha, nezixhumi zaso njengama-**amaphoyinti**: lapho ipayipi noma umsele womoya uxhuma khona, yisistimu, indlela okugeleza ngayo, nosayizi. Amapayipi nemisele yomoya edwetshwe kusuka ephoyinteni athatha usayizi nesistimu yalo futhi ahlala esekelwe kulo: bona [Xhuma amapayipi nemisele yomoya kuzinsiza](topic:mep-connections).

:::note
Lesi isisiza sokudweba nokuhlanganisa, esibukhulu ngumenjiniyela. Lezi zinsiza akuyona imikhiqizo yomkhiqizi: akukho amandla, isisindo noma usayizi wokuxhuma wabakhiqizi. Letha imodeli yomkhiqizi evela ohlelweni lwakho lwe-MEP njenge-IFC uma uyidinga.
:::

## Beka isiqephu

1. Vula {{ui:Dweba}}, vula {{ui:Ukwakhiwa}} bese ukhetha {{ui:Izinsiza}}.
2. Ebhalini, khetha uhlobo bese uthayipha usayizi walo. Uhlobo ngalunye lubuza okwalo:

| Uhlobo | Uthayipha | Amaphoyinti alo |
|---|---|---|
| Air handler | ubude, ububanzi, ukuphakama; izimbobo zokunikeza nokubuyisela; usayizi wepayipi lekhoyili nesistimu; usayizi we-condensate | umsele wokunikeza uphuma, umsele wokubuyisela ungena, khoyili ayangena nayaphuma, ukukhipha i-condensate |
| Ifeni elingaphakathi | ububanzi, ubude, isistimu | umsele ungena nophuma |
| Ipompo | usayizi wepayipi, isistimu | ukungena nokuphuma |
| Iboyila | ubude, ububanzi, ukuphakama, usayizi wepayipi, usayizi wegesi, ububanzi be-flue | ukunikeza ukushisa kuphuma nokubuya kungena, igesi ingena, i-flue iphuma |
| Ishisi lamanzi | ububanzi, ukuphakama, usayizi wepayipi, igesi noma kagesi | amanzi abandayo ayangena, amanzi ashisayo ayaphuma (negesi ingena ne-flue uma eshisa ngegesi) |
| Iyunithi yokuphela | ubude, ububanzi, ukuphakama, ukungena okujikelezile, ububanzi nokuphakama kokuphuma | umoya wokunikeza uyangena nophuma |
| Diffuser | ubuso, intamo, isistimu | intamo yayo (umoya ungena) |
| Grille | ububanzi nokuphakama kobuso, ububanzi nokuphakama kwentamo, isistimu | intamo yayo (umoya uphuma uye emsele wokubuyisela noma wokukhipha) |
| Ithange | ububanzi, ukuphakama, usayizi wepayipi, isistimu | ukungena phezulu, ukuphuma eduze nansi |
| Iradiyetha | ubude, ukuphakama, ukujula, usayizi wepayipi, isistimu | ukugeleza kungena phezulu kolunye uhlangothi, ukubuya kuphume ezansi kolunye |
| Ikhonvekthafa / isishisi sephaneli | ubude, ukuphakama, ukujula, usayizi wepayipi, isistimu | ukugeleza kungena ngolunye uhlangothi, ukubuya kuphume kolunye |
| Umndeni womkhiqizi | umndeni (bona [Izici zamapayipi, ama-valve, amadampa nemindeni yabakhiqizi](topic:pipe-specs)) | amaphoyinti umndeni wawo owanikezwa wona |

3. Setha **Ku**, ukuphakama kwesisekelo sayo ngaphezu kwezinga. Ukuphakama kwe-diffuser noma kwe-grille kuwubuso bayo: thayipha ukuphakama kophahla.
4. Thayipha **Ithegi** uma ufuna enye (`AHU-1`); isiqephu esilandelayo sohlobo olufanayo sithola inombolo elandelayo.
5. Hambisa umbhalo phezu kwe-plan: isisekelo namaphoyinti sakho silandela. Cindezela {{key:R}} ukuze uphendulise ngama-90°. Chofoza lapho sizobekwa khona.

Usayizi wamapayipi ungusayizi wepayipi lensimbi (ASME B36.10M). Ipayipi edwetshwe kusuka epompweni ngempahla yalo ehlukile lithatha usayizi ojwayelekile ofanayo ngempahla yalo.

## Shintsha noma susa

Khetha kwiplani noma kumbono we-3D. Ibhokisi {{ui:Izici}} likhombisa yonke usayizi owathayipha, ithegi lawo, X, Y, ukuphakama nokuphendulwa, nephoyinti ngalinye: usayizi walo, isistimu, indlela okugeleza ngayo, nokuthi kukhona okuxhunyiwe yini. Ushintsho ngalunye lubalwa njengesinyathelo esisodwa se-{{ui:Hlehlisa}}; izintambo ezisekelwe kumaphoyinti alo ziyahamba nalo. {{key:Delete}} iyasusa; izintambo ezazisekelwe kuwo zihlala futhi uhlu lokuxhumana luzibhale.

## Ku-IFC

Uhlobo ngalunye lulondolozwa njengeklasi yalo ye-IFC: IfcUnitaryEquipment (air handler), IfcFan, IfcPump, IfcBoiler (iboyila; ishisi lamanzi liba yi-IfcBoiler yohlobo lwamanzi enesikhombisi sohlobo "Water heater"), IfcAirTerminalBox (iyunithi yokuphela), IfcAirTerminal (diffuser, grille) kanye IfcTank, nohlobo olwabelwana ngalo wonke isiqephu sohlobo olufanayo nosayizi. Amafayela e-IFC2X3 athola IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal kanye IfcFlowStorageDevice nezinhlobo ezihambisanayo. Iphoyinti ngalinye liba yi-IfcDistributionPort ebekwe lapho kukhona ukuxhuma, ibheke ngaphandle, nendlela yokugeleza kanye nesistimu; ezinye izinhlelo zifunda ukuthi yiliphi ipayipi elixhuma kuliphi iphoyinti. Isiqephu sijoyina isistimu yalo ngalinye lamaphoyinti alo, futhi sithwala amasethi ezinto zelabhulali esinazo zonke izinto zelabhulali ezibekiwe.

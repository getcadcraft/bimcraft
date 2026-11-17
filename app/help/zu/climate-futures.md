---
title: "Izimo zesimo sezulu sesikhathi esizayo: izikhukhula, ukushisa nomlilo wehlathi ngo-2050 no-2080"
summary: Phinda uqalise izikhukhula, unyaka wamandla nokuhlola komlilo wehlathi ngesimo sezulu sesikhathi esizayo (izimo SSP2-4.5 ne-SSP5-8.5, iminyaka 2050 no-2080) kusuka kuphakheji yedatha yesimo sezulu, kubonisiwe ngaseceleni: okwamanje nesikhathi esizayo.
keywords: isimo sezulu, ukushintsha kwesimo sezulu, isikhathi esizayo, 2050, 2080, ssp, cmip6, isimo, izinga lolwandle, izikhukhula, ukushisa, ifayela lesimo sezulu, epw, morph, energyplus, umlilo wehlathi, bushfire, isimo somlilo
from: 224ecd08
---

Izibalo zesimo sezulu zivela kuphakheji yedatha (**data pack**), hhayi ku-app. Vula i-add-on ethi {{ui:Climate futures}} ku-Izilungiselelo › Okwengeziwe, noma layisha ifayela lephakheji lakho ku-block ethi {{ui:Climate future}}.

:::warning
Iphakheji elize ne-add-on liyisampula: izindawo ezintathu (Denver, Miami, Johannesburg), imodeli yesimo sezulu eyodwa, kanye neminyaka emihlanu kuzo zonke izikhathi zeminyaka engu-20. Likhona ukuze uzame amathuluzi, **hhayi ukuklama**. Ipane iyasho lokho ngamagama anesibindi ngenkathi lisasetshenziswa. Iphakheji eliphelele (imodeli eminingi, zonke iminyaka, izindawo eziningi) lakhiwa nge-`tools/climate/build-pack.mjs` kusuka kudatha ye-NEX-GDDP-CMIP6 kaNASA.
:::

## Khetha isikhathi esizayo

Kupaneli yesobunxele ethi {{ui:Hazard playback}}, khetha **Isimo** (SSP2-4.5, indlela ephakathi, noma SSP5-8.5, ukukhishwa kwamagesi okuphezulu) nonyaka **Unyaka** (2050 usho 2041-2060, 2080 usho 2071-2090; zombili zibhekiswa ku-1995-2014). **Indawo** iyindawo yephakheji eseduze kakhulu nesayithi lemodeli (ubude nobubanzi be-IfcSite), noma eyodwa ozikhethele yona. Uma ikude kakhulu kuzo zonke izindawo, kusetshenziswa izinguquko zomhlaba wonke zephakheji, nepaneli iyakusho lokho.

## Ukukhukhula, kuseceleni kwamanje

Uma isimo sikhethiwe, setha i-**Uhlobo lokukhukhula**: ogwini (lungeza ukuphakama kolwandle), umfula noma imvula enkulu (ijulile ngokushintsha kwemvula yosuku olumanzi kakhulu), noma kokubili. Cindezela Run: ukukhukhula kudlala njengakuqala, nethebula libonisa ukukhukhula kwamanje nokwesikhathi esizayo ngaseceleni (izinga lamanzi, amakamelo azomanzisa, amanzi ajulile kakhulu). Izinto ezithathelwe ingqalasizinda zibalwe ngaphansi kwalo:

- izinga lasogwini likhuphuka ngokuphakama kolwandle kuphela; ukuvuvukala namagagasi akushintshi;
- ukugeleza komfula kukhuphuka ngokulingana nemvula yosuku olumanzi kakhulu, nokujula kulandela ukugeleza kuphakanyiswe ku-0.6 (isibalo sikaManning somfula obanzi);
- lezi zingxenye ezimbili ziyangezwa kanjalo.

## Ukushisa: ifayela lesimo sezulu sesikhathi esizayo

Khetha uhlobo {{ui:Heat: future weather file}}, khetha ifayela lesimo sezulu le-`.epw` lamanje bese ucindezela {{ui:Make the future weather file}}. Ifayela liyi-**ishintshiwe** ngenyanga ngenyanga ngendlela yokushintsha nokwelula eshicilelwe (Belcher, Hacker and Powell 2005): izinga lokushisa elingokwesilinganiso senyanga liyafudumala ngokushintsha kwephakheji, ukushisa kwasemini kuyafudumala ngokushintsha kokushisa okuphezulu kosuku, nobusuku obubandayo bufudumala ngokushintsha kokushisa okuphansi kosuku; umswakama ohlobene uhamba ngokushintsha kwephakheji futhi iphoyinti lomswakama liyabalwa kabusha. Ingcindezi nomoya kuhlala njengoba kwakunjalo. Ithebula liqhathanisa izinga lokushisa eliphakathi nelishisa kakhulu, amazinga okuklama okupholisa ayi-0.4 % nokufudumeza ayi-99.6 %, amahora angu-30 °C no-35 °C kanye ne-degree-days.

{{ui:Save the future weather file}} iyalondoloza; {{ui:Use it in the energy check}} iyiyisa kuhlolo lwe-EnergyPlus (ithebhu ethi Energy). Ifayela lesikhathi esizayo liyonyaka ofanayo ojwayelekile, ofudumele: alingezi amaza amasha okushisa.

## Unyaka wamandla, kuseceleni kwamanje

Kuhlolo lwe-EnergyPlus ethebhini le-Energy (i-add-on yalo, nenjini yakho), khetha ifayela lesimo sezulu lamanje, bese isimo nonyaka kwi-block yayo ethi {{ui:Climate future}}, bese ucindezela {{ui:Simulate a year: present and future}}: unyaka uqhuba kwifayela lamanje nakwelishintshiwe lesikhathi esizayo, nokushisa nokupholisa kwegumbi ngalinye kubhalwa ngaseceleni.

## Ukuveza umlilo wehlathi (ukuhlola kuphela)

Khetha uhlobo {{ui:Wildfire exposure (screening only)}}: ukhula oluseduze kakhulu, ukuthambeka okusuka kukhula kuya endlini nedilo lakho. Umphumela ubanga kusuka kokuphansi kakhulu kuya kokuphezulu kakhulu, wamanje nesikhathi esizayo.

:::warning
**Ukuhlola kuphela.** Lesi isikali sethu esiqhathaniswayo sokutshela ukuthi isayithi lidinga yini ukuhlolwa okufanele komlilo wehlathi, hhayi isilinganiso sekhodi noma izinga le-bushfire attack. Siphindaphinda isisindo sokhula, isilinganiso sokuthambeka (umlilo uzophuthuma ngamaphindwe amabili ngamadigri ayi-10 ukuthambeka okuphezulu, kubalwa kuze kube ngu-20 degrees), isilinganiso sebanga (10 m ihlukaniswe ngebanga, ikhulu kakhulu ngu-1) nokushintsha kwephakheji ku-Fire Weather Index.
:::

## Lapho izibalo zivela khona

- **Izinga lokushisa, umswakama, ukukhanya kwelanga, imvula, isimo somlilo:** NASA NEX-GDDP-CMIP6, okuphuma kwemodeli ye-CMIP6 enqunyiwe ngansuku. Okuphuma kwemodeli ngayinye kungaphansi kwe-CC BY 4.0. Ukushintsha kwe-fire-weather kuyi-Canadian Fire Weather Index ebalwe ngosuku ngosuku kusuka esimweni semodeli (nomswakama wansuku esikhundleni somswakama wemini).
- **Ukuphakama kolwandle:** isilinganiso somhlaba wonke se-IPCC AR6 (hhayi sendawo; ukuphakama noma ukwehla komhlaba akufakiwe kuso), uma iphakheji lingathwala izibalo zendawo.
- Iphakheji liveza umthombo waso, ilayisensi nosuku; ipaneli iyakubonisa.

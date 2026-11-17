---
title: Kusukela kwifayela leprojekthi kuya ku-BimCraft nge-IFC
summary: Izilungiselelo zokuthumela ku-IFC ezivula kahle ku-BimCraft (inguqulo, amasethi wezakhiwo, izibalo eziyisisekelo, amagumbi, amafayela axhunyiwe, izixhumanisi), indlela yokuvula umphumela, nokuthi ukuthumela kugcina ini.
keywords: thumela, ukuthumela kwe-ifc, rvt kuya ku-ifc, guqula, 3d, geometry, ifc2x3, ifc4, coordination view, reference view, design transfer view, amasethi wezakhiwo, izibalo eziyisisekelo, amagumbi, izikhala, amafayela axhunyiwe, izixhumanisi ezabelanwayo, ipoyinti yesilinganiso, ipoyinti yesisekelo seprojekthi, izilungiselelo
from: 3efd5fc9
---

## Okuzokwenziwa

Guqula ifayela leprojekthi libe ifayela le-IFC ongalijikeleza, ulihlole futhi ulihlele ku-BimCraft. I-BimCraft ayifundi imodeli ye-3D ngaphakathi kwefayela le-`.rvt` okwamanje, ngakho ukuthumela kwenziwa kuhlelo olwenza ifayela (Revit); i-BimCraft ivula umphumela.

## Izinyathelo

1. Vula iprojekthi kuhlelo olwayenza. Ikhadi le-BimCraft libiza inguqulo elagcinwa kuyo.
2. Vula ukubuka kwe-3D okubonisa lokho ofuna ukukuthumela.
3. Khetha **File > Export > IFC**.
4. Ebhokisini lokuthumela khetha isethi (noma **Modify setup…**) nezilungiselelo ezingezansi.
5. Khetha ifolda negama lefayela, bese uthumela.
6. Ku-BimCraft, chofoza {{ui:Choose a file}} bese ukhetha ifayela elisha le-`.ifc`. Amamodeli axhunyiwe athunyelwe njengamafayela awo angokwawo avulelwa endaweni eyodwa nge-{{ui:Add a model}}.

## Izilungiselelo ezivula kahle lapha

| Isilungiselelo kumthumeli | Khetha | Kungani |
|---|---|---|
| IFC version | **IFC4 Reference View** ukubukela, ukuhlola nokubala; **IFC2X3 Coordination View 2.0** uma abanye bedinga i-IFC2X3 | Zombili ziyavula ngokuphelele. **IFC4 Design Transfer View** nayo iyavula, inezimo ezinembe kakhudlwana, kodwa ifayela linkulu futhi lishubile. |
| File type | **IFC** (esijwayelekile) | I-BimCraft ayivuli `.ifczip` noma `.ifcxml`. |
| Phase / visible elements | Isigaba ofuna ukusithumela, ne-**Export only elements visible in view** uma usethe ukubuka kwe-3D ngakho | Kushiya lokho owukufihlile ngenhloso. |
| Property sets | **Export Revit property sets** ne-**Export IFC common property sets** | Zibe ngamasethi wezakhiwo i-BimCraft ayibonisa ku-{{ui:Properties}}, futhi {{ui:Find}}, {{ui:Color}} ne-{{ui:Model checks}} ayisebenzisa. |
| Base quantities | **Export base quantities** | {{ui:Quantity totals}} nohlu basebenzisa lezi (ubude, izindawo, amavolumu) esikhundleni sokuqagela. |
| Rooms and areas | **Export rooms in 3D views** (noma inketho ye-Rooms / Spaces) | Amagumbi afika njengezikhala: chofoza {{ui:Spaces}} ukuwabona. |
| Linked files | **Export linked files as separate IFCs** | Isixhumanisi ngasinye siba ifayela layo; vula ndawonye nge-{{ui:Add a model}} bahlale benqamula ngokufanele. |
| Coordinate base | **Shared coordinates** (noma ipoyinti yesilinganiso) | Ifayela lithwala isikhundla salo emephini (IfcMapConversion), ngakho i-Linganisa › Indawo, izendlalelo zemephu phansi namapoyinti esikanini ahlelwe ngamakhodinethi emephu asebenza. Ipoyinti yesisekelo seprojekthi igcina imodeli eduze nomsuka kodwa ingenaso isikhundla sayo semephu. |
| Split walls and columns by level | Vula, uma uthatha izibalo ngesitezi ngasinye | Ingxenye yesitezi ngasinye iyinto yayo. |

## Okuzobonwa

Imodeli ku-3D, nezitezi ezithathwe emazingeni ephrojekthi kanye nolwazi lweprojekthi ephaneli ye-{{ui:File}}. I-**Exported from** ibiza isithumeli.

## Okugcinwayo nokungagcinwa

- **Kuyagcinwa**: ijiyomethri, izitezi, izinhlobo zezinto, amagama, izinhlobo, amapharamitha amaningi (njengamasethi wezakhiwo), izibalo eziyisisekelo uma zicelwe, amagumbi njengezikhala, nesikhundla semephu nama-shared coordinates.
- **Akugcinwa**: izibuko, amashidi, okungeziwe okubhaliwe (annotation), imindeni njengemindeni ehlelekayo, ama-worksets namakhetho wokwakha. Ifayela le-IFC ngumfanekiso wezinto zemodeli, hhayi iprojekthi. Ngamashidi, thumela i-DWG bese uyivula ku-2D view.

## Izinkinga ezivamile

- **Amapharamitha angekho ku-BimCraft.** Vula izinketho zamasethi wezakhiwo ngenhla bese uthumela futhi.
- **Amagumbi angekho.** Vula inketho yamagumbi, bese uchofoza {{ui:Spaces}}.
- **Ukugcina njenge-`.ifczip`.** Khetha i-IFC esijwayelekile, noma khipha i-`.ifczip`.
- **Akukho sikhundla semephu.** Thumela nge-shared coordinates; hlola ukuthi ipoyinti yesilinganiso seprojekthi isethiwe.
- **Ukulindela ukuthi ushintsho lubuyele.** Ushintsho olugcinwe ku-BimCraft lungena efayeleni elisha le-IFC, hhayi efayeleni leprojekthi.

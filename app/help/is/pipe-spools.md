---
title: Stálpípuspólur og spólublöð
summary: Skerðu stálpípuleiðslu með stúfsuðu í spólur með hámarkslengd og á þeim stöðum á staðnum sem þú setur suðu, númeraðu þær og sæktu spólublað fyrir hverja spólu (þrívíddarmynd, skurðarlengdir, tengistykki, suður, efnislisti) sem PDF og CSV; loftstokkar fá skurðarlista beinna búta.
keywords: spóla, spólur, spólublað, samsætt, smíði, forsmíði, suða á staðnum, verksmiðjusuða, stúfsuða, skurðarlengd, skurðarlisti, efnislisti, bom, stálpípa, gerð 40, línunúmer, skurðarlisti loftstokka, loftstokkahlutar
from: 539f51de
---

## Hvað þú gerir

Breyttu stálpípuleiðslu í hlutina sem verkstæði sýður saman og smiðurinn setur í: spólur sem eru ekki lengri en lengd sem þú velur, skiptar þar sem þú setur suður á staðnum, hver með sitt eigið blað.

Aðeins **stálpípa með stúfsuðu** er skorin í spólur (pípustærðir ASME B36.10M, olnbogar með ASME B16.9 langa radíus). Kopar-, PVC- og PEX-tengingar eru ekki stúfsuðu, þannig að leiðslur þeirra hafa engar spólur.

## Skerðu leiðslu í spólur

1. Veldu stálpípuleiðslu. Í eiginleikum, hakaðu við **Skera í spólur**.
2. **Lengsta spóla**: mesta miðlínulengd sem ein spóla má hafa (6 m, um 20 ft, til að byrja með).
3. **Línunúmer**: hluti af númeri allra spóla. Ný spóluð leiðsla fær næsta laust númer kerfis síns.

Spólurnar eru númeraðar eftir leiðslunni frá fyrsta punkti hennar: `CHW-12-S01`, `CHW-12-S02` … (kerfið, línunúmerið, spólan). Spóla stækkar hluta fyrir hluta; hlutinn sem myndi gera hana of langa byrjar þá næstu, og bein lengd lengri en spóla er skorin þar sem spólan er full.

## Settu suður á staðnum

1. Opnaðu {{ui:Smíð}} og veldu {{ui:Suða á staðnum}}.
2. Smelltu á spóluðu pípuna þar sem suðan á að vera. Inni í beinni lengd er pípan skorin þar; inni í tengistykki eða loka færist suðan á næsta samskeyti.

Eiginleikar listar suðum leiðslunnar á staðnum, hver með {{ui:Fjarlægja}}. Hver breyting er eitt skref af {{ui:Afturkalla}}.

## Spólublöð

Í eiginleikum spóluðrar leiðslu:

- {{ui:Spólublöð (PDF)}}: ein síða fyrir hverja spólu. Vinstra megin, spólan í 30° samsætu útsýni: beinu lengdirnar númeraðar, verksmiðjusuður sem punktar, suður á staðnum merktar FW, og norður grunnmyndarinnar. Hægra megin, númer spólunnar, stærð, gerð og lengd, síðan **skurðarlengdir**, **tengistykki**, **suður** (verksmiðjustúfsuða við hvert samskeyti innan spólunnar, suða á staðnum þar sem hún mætir næstu spólu) og **efnislisti** hennar með þyngd pípunnar (ASME B36.10M þyngd sléttra enda).
- {{ui:Spólulisti (CSV)}}: það sama, blokk fyrir hverja spólu.

:::note
Skurðarlengdir eru frá enda til enda eins og teiknað er: engu rótarbili eða suðuheimild er dregið frá. Olnbogar eru með B16.9 langa radíus; T-stykki, minnkarar og lokar eru almenn og stærð eftir pípunni, ekki eftir B16.9 eða framleiðanda, og blaðið segir það. Þyngd tengistykkja er ekki gefin. Hjálpartæki við teikningu og samræmingu, mælt af verkfræðingi.
:::

## Í IFC-skránni

Sérhver hluti spóluðrar leiðslu ber **CadCraft_Spool** með SpoolId sínu, leiðslunni, númeri spólunnar í leiðslunni og hvar hún byrjar og endar eftir leiðslunni. Leiðslan geymir reglur sínar (lengsta spóla, suður á staðnum, línunúmer) í eigin mengi, þannig að spólurnar koma eins til baka þegar skráin er opnuð aftur.

## Loftstokkar: skurðarlisti

Opnaðu {{ui:Smíð}} og smelltu á {{ui:Skurðarlisti loftstokka}}: CSV-skrá yfir beina loftstokksbúta eftir kerfi, lögun og stærð, þar sem hver bein lengd er skorin í búta af **Bútalengd** á loftstokksstikunni (1500 mm, um 5 ft, til að byrja með), og það sem eftir er. Aðeins lengdir: engir saumar, þykktir eða tengistykki.

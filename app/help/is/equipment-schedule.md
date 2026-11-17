---
title: Búa til búnaðarlista og flytja út CSV
summary: Breyttu hlutamerkjunum í veitingateikningu í búnaðarlista, síaðu hann, farðu að hverjum hlut á blaði hans, og sæktu hann sem CSV.
keywords: búnaður, listi, veitingar, eldhús, hlutamerki, kcl, eigindi, bom, efnislisti, csv, töflureiknir, útflutningur, gagnaúrdráttur
from: e3faa1c8
---

## Það sem þú gerir

Lestu búnaðarlistann úr eldhús- eða veitingateikningu, yfirfarðu hann, finndu hvern hlut á grunnmyndinni og sæktu hann sem töflureiknisskrá.

Þetta virkar á teikningum þar sem merki búnaðarins geyma gögnin sín sem blokkareigindi, eins og eldhúshönnunarsöfn á borð við KCL gera: hvert merki geymir hlutanúmer (`KCL-ITEM`), magn, flokk, framleiðanda, gerð, rafmagns- og pípulagnagögn og athugasemdir. Aðrar teikningar hafa engan {{ui:Búnaður}}-flipa.

## Skref

1. Opnaðu teikninguna, helst úr verkefnamöppunni sinni svo að tengdar teikningar hlaðist líka.
2. Smelltu á {{ui:Búnaður}}-flipann fyrir ofan teikninguna. Heiti hans sýnir hversu margir hlutir eru á blöðum, til dæmis „Búnaður (88)“.
3. Lestu listann: **Hlutur**, **Magn**, **Búnaður**, **Framleiðandi**, **Gerð**, **Rafmagn**, **Pípulagnir** og **Hvar**.
4. Veldu hvað skal birta í valmyndinni fyrir ofan töfluna: **Öll blöð**, eitt blað, **Ekki á neinu blaði**, eða **Allt merkt í teikningunni**. Hvert val sýnir fjölda sinn.
5. Skrifaðu í síureitinn („Sía: flokkur, framleiðandi, gerð…“) til að þrengja listann, til dæmis `refrigerator` eða `208`.
6. Smelltu á heiti blaðs hlutarins í dálkinum **Hvar**.
7. Skoðaðu teikninguna: BimCraft skiptir yfir á það blað, stækkar aðdráttinn að hlutnum og teiknar hring utan um hann. Stöðulínan segir „Hlutur *n*, *flokkur* er hringaður á *blaði*.“
8. Smelltu á {{ui:Búnaður}} til að fara aftur í listann.
9. Smelltu á {{ui:Sækja CSV}}.

## Það sem þú sérð

- Skrá sem heitir „*heiti teikningar* equipment.csv“ (með heiti blaðsins í sviga þegar þú valdir eitt blað) í niðurhalsmöppunni þinni. Hún opnast í Excel, Numbers, LibreOffice eða Google Sheets.
- Stöðulínan: „Sótt *skráarheiti* (*n* hlutir).“

CSV-skráin hefur þessa dálka: Hlutur, Magn, Flokkur, Framleiðandi, Gerð, Rafmagn, Pípulagnir, Athugasemdir, Rafmagnsathugasemdir, Pípulagnaathugasemdir, Blöð, Staðsett (fjöldi merkja). Hún sækir nákvæmlega þær línur sem taflan sýnir, eftir valmyndina og síuna.

## Hvernig listinn verður til

- Hann er lesinn úr **merkjunum sjálfum**, ekki úr listatöflunni sem er teiknuð á blaðinu. Athugasemdin fyrir ofan töfluna segir hversu mörg merki voru lesin.
- Ein röð er eitt hlutanúmer með einu gagnasetti. Magn hennar er **summa** merkjanna, eins og prentaður listi telur það: hillur merktar „5“ á einum stað og „3“ á öðrum eru 8, birt sem „5 + 3“.
- **Hvar** tilgreinir blöðin sem sýna hvern hlut, reiknað út frá því sem sýnigluggar hvers blaðs sýna, en það er það sem prentast. „Aðeins líkan“ þýðir að ekkert blað sýnir hann.
- **Númer notað tvisvar** merkir eitt hlutanúmer á tveimur mismunandi búnaðarstykkjum. Röðin er með gulbrúnu merki.
- Merki sem ekkert blað sýnir eru geymd sér undir **Ekki á neinu blaði**. Þau eru oft leifar frá eldri áætlunum eða öðrum verkum og eru aldrei blönduð inn í **Öll blöð**.
- **Rafmagn** sýnir amps, kW, HP, volts, fasa, tengingu og klóna eins og þau eru merkt. **Pípulagnir** sýna tengistærðir: CW kalt vatn, HW heitt vatn, DD beint frárennsli, ID óbeint frárennsli og gas. Önnur merkjasvið eru ekki birt enn.

## Algeng mistök

- **Enginn {{ui:Búnaður}}-flipi.** Teikningin hefur engin `KCL-ITEM`-merki, eða búnaðurinn er teiknaður án gagna. Það er ekkert til að lesa.
- **Tölur eru frábrugðnar prentaða listanum.** Prentaður listi getur sýnt varanúmer eða styttri heiti en merkin. Treystu merkjunum um það sem er staðsett; athugaðu mismun við hönnuðinn.
- **Opnun CSV sýnir undarlega stafi.** Skráin er UTF-8. Opnaðu hana með innflutningsskipun töflureiknisins og veldu UTF-8 ef forritið spyr.
- **Reitur byrjar á úrfellingarmerki.** Gildi sem byrja á `=`, `+`, `-` eða `@` fá fremstu `'` svo að töflureiknar keyri þau ekki sem formúlur.
- **{{key:F}} og {{key:P}} virka ekki.** Þær virka á teikninguna, ekki á listann. Smelltu fyrst á blaðsflipa.

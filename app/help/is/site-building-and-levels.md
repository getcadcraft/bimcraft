---
title: Lóðin, byggingin á henni og kótar hennar
summary: Teiknaðu útlínu lóðarinnar, settu bygginguna á lóðina og snúðu henni, bættu hæðum við í gefnum hæðum eða skiptu hæð byggingarinnar, og teiknaðu á þá hæð sem þú velur.
keywords: lóð, lóðarskipulag, byggingarlína, fjarlægð frá lóðamörkum, kvöð, réttindi um veg, lóðamörk, reitur, staðsetning byggingar, snúa byggingu, setja byggingu, hæðir, kótar, bæta við hæðum, skipta hæð, hæð milli gólfa, IfcSite, IfcBuilding, IfcBuildingStorey, skipulag byggingar
from: 48d10c1e
---

## Hvað þú gerir

Settu upp hluta IFC-líkansins sem geyma allt hitt: lóðina, bygginguna á henni og kóta byggingarinnar.

Líkan er skipulagt sem **lóð** sem geymir **byggingu**, sem geymir **kóta** sína (**hæðir**); veggir, gólf og allt annað tilheyrir kóta. {{ui:Skrá}} › {{ui:Ný bygging}} setur upp allt þrennt. Líkan úr öðru forriti sem hefur byggingu en enga lóð fær lóð í fyrsta skipti sem þú teiknar hana: byggingin er sett á hana þar sem hún var þegar.

## Teiknaðu lóðina

1. Kveiktu á {{ui:Teikna}} og veldu síðan {{ui:Smíð}} › {{ui:Lóð}}.
2. Smelltu á hornpunkta lóðarinnar (verkfærið smellur eins og veggverkfærið). Smelltu aftur á fyrsta hornpunktinn, tvísmelltu eða ýttu á {{key:Enter}} til að ljúka. {{key:Backspace}} tekur til baka hornpunkt.
3. Línan sýnir flatarmál lóðarinnar. Teiknaðu hana aftur til að breyta henni.

Grunnmynd sérhverrar hæðar sýnir útlínu lóðarinnar sem lóðamörk.

## Settu bygginguna á lóðina

Með {{ui:Lóð}} kveikt skrifarðu **X** og **Y** byggingarinnar á lóðinni og **Snúning** hennar í gráðum, eða smellir á {{ui:Setja húsið með smelli}} og smellir þar sem upphafspunktur byggingarinnar á að vera. Allt í byggingunni (hæðir, veggir, rist, allt sem þú teiknaðir) færist með henni; lóðin og útlína hennar haldast. Grunnmyndirnar sýna áfram hverja hæð hornrétt á bygginguna.

## Byggingarlínur og kvaðir

Byggingarlínur og kvaðir (réttindi um veg, afnotaréttindi) eru teiknaðar á lóðina sem skorður. Þær **vara við, þær loka aldrei**: veggur yfir einni er teiknaður eins og þú baðst um, og aðvörun sem nefnir vegginn og línuna eða kvöðina birtist í Vandamálum. Færðu vegginn til baka og aðvörunin hverfur. Hægt er að samþykkja aðvörun með ástæðu (t.d. undanþágu sem yfirvöld veittu).

- **Byggingarlína út frá fjarlægðum.** {{ui:Smíð}} › {{ui:Byggingarlína}}, síðan {{ui:Fjarlægðir}}: skrifaðu hversu langt línan stendur inn frá hverjum lóðarmörkum. Mörkin eru númeruð á grunnmyndinni meðan verkfærið er í gangi. Línan er reiknuð út frá þessum fjarlægðum og fylgir útlínu lóðarinnar ef þú teiknar hana aftur með jafn mörgum mörkum. Fjarlægðirnar eru þínar, lesnar úr eignarheimild þinni eða skipulagi; BimCraft fyllir ekki inn neitt.
- **Teiknuð byggingarlína.** Með {{ui:Byggingarlína}} kveikt smellirðu á punkta hennar og lýkur með tvísmelli eða {{key:Enter}}. Ljúktu á fyrsta punkti fyrir lokaða línu: svæðið innan hennar er þar sem byggja má, og veggur með einhverjum hluta utan hennar fær aðvörun. Opin lína varar aðeins við vegg sem sker hana.
- **Kvöð.** {{ui:Smíð}} › {{ui:Kvöð}}: veldu gerð hennar, skrifaðu nafn hennar, skráð auðkenni og breidd, smelltu síðan á miðlínu hennar og ljúktu (ræmu), eða lokaðu henni á fyrsta punkti (flötur). Veggur með einhverjum hluta á henni fær aðvörun, á hverri hæð.
- Flötur sem liggur nákvæmlega á línu er snertandi, ekki skerandi (skekkjuþolið er 1 mm).
- Núverandi massavalkostur í hverju valkostasetti er athugaður á sama hátt og veggirnir: massi utan mörkanna, yfir byggingarlínu eða á kvöð fær aðvörun. Sjá [Massavalkostir hafðir hlið við hlið](topic:massing-options).
- Veldu eina með {{ui:Velja}} til að breyta nafni hennar, auðkenni, gerð eða breidd, færa hana eða eyða henni.

Þær eru teiknaðar á grunnmynd sérhverrar hæðar, á blöðum og í grunnmyndar-PDF: byggingarlínur strikaðar, kvaðir punktaðar, hver með merkimiða sínum. Í IFC-skránni er hver þeirra athugasemd (IfcAnnotation, gerðin BuildingLine eða Servitude) á lóðinni, með línu sinni sem venjulegri sveigju sem önnur forrit geta lesið. Athugunin notar raunverulega útlínu hvers veggs á grunnmyndinni, með samskeytum eins og þau eru teiknuð; bogadreginn veggur er athugaður eftir eigin þykkt um miðlínu sína.

## Bæta við hæðum

Í spjaldinu {{ui:Kótar}} bætir {{ui:Bæta við hæð efst}} einni við, og {{ui:Bæta við kóta fyrir neðan}} bætir einni við undir þeirri lægstu (kjallari, í neikvæðri hæð). {{ui:Bæta við kótum…}} bætir nokkrum við í einu:

- **Í þessum hæðum**: skrifaðu hæðir yfir þeirri lægstu, aðskildar með kommum (til dæmis `12', 24', 36'`). Hæðir sem hafa þegar kóta eru sleppt.
- **Skipta hæð byggingarinnar**: skrifaðu hæð byggingarinnar og fjölda hæða. Kótarnir sem þú átt færast í nýjar hæðir frá þeirri lægstu upp, vantandi kótar eru bættir við, og þeir sem eru ofar haldast þar sem þeir eru.

Veggir sem ná upp á hæðina fyrir ofan fylgja henni, eins og súlur og rampar.

{{ui:Afrita þessa hæð…}} (í sama spjaldi) afritar það sem er teiknað á hæðinni sem þú sérð yfir á aðra hæð eða nýja hæð efst, svo grunnmynd getur farið upp byggingina í einu skrefi. Sjá [Teikna veggi](topic:draw-walls).

## Teiknaðu á hæð

Sérhvert {{ui:Teikna}}-verkfæri vinnur á þeirri hæð sem er valin í hæðalista grunnmyndarinnar (eða valin í spjaldinu {{ui:Kótar}}): það sem þú teiknar tilheyrir þeirri hæð.

## Það sem þú ættir að sjá

- Hver þessara breytinga er eitt skref: {{key:Mod+Z}} tekur hana til baka.
- Í IFC-skránni: lóðin (IfcSite) með útlínu sinni og flatarmáli, byggingin (IfcBuilding) sett á hana, og hæðirnar (IfcBuildingStorey) í byggingunni.

Sjá einnig [Hnit í BimCraft](topic:coordinates) fyrir verkefnisuppruna og mælipunktinn.

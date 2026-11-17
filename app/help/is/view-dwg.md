---
title: Skoða DWG- eða DXF-teikningu
summary: Opnaðu DWG eða DXF, færðu þig um líkanrýmið og blöðin, lestu hnit og sjáðu hvað er ekki teiknað enn.
keywords: kvikar blokkir, sýnileikaástand, dwg, dxf, cad, teikning, 2d, sýn, skoðari, hliðra, aðdráttur, líkanrými, pappírsrými, skipulag, hnit, opna dwg
from: 4db3122a
---

## Það sem þú gerir

Opnaðu CAD-teikningu, sjáðu hana í þrívídd eða tvívídd, færðu þig um hana, skiptu milli líkanrýmis og blaða hennar og lestu hnit. BimCraft sýnir DWG- og DXF-teikningar; það breytir þeim ekki og vistar þær ekki. Til að breyta einni smellirðu á {{ui:Edit in CadCraft}} og teikningin opnast í CadCraft-teikniforritinu á nýjum flipa.

## Skref

1. Smelltu á {{ui:Choose a file}}, eða slepptu teikningunni á síðuna.
2. Veldu `.dwg`- eða `.dxf`-skrá.
3. Bíddu meðan stöðulínan segir „Les teikninguna…“. Stórar teikningar taka nokkrar sekúndur. Þá segir hún hversu langan tíma lesturinn tók, „myndgerð…“ meðan fyrsta myndin er teiknuð, og hversu langan tíma það tók.
4. Teikningin opnast í þrívídd, hraðasta leiðin til að sýna stóra teikningu (sjá [Sjá DWG- eða DXF-teikningu í þrívídd](topic:dwg-in-3d)). Smelltu á {{ui:Model}} fyrir flata tvívíddarsýn. Til að opna teikningar alltaf í tvívídd, stilltu {{ui:Settings}} › BimCraft › **Teikningar opnast í** á {{ui:Model (2D)}}. Teikning með engu í líkanrými, eða vafri sem getur ekki sýnt þrívídd, opnast í tvívídd.
5. Litið er á flipana fyrir ofan teikninguna: {{ui:Model}} fyrst, síðan einn flipi fyrir hvert blað, í röð teikningarinnar sjálfrar.
6. Smelltu á blaðflipa til að sjá það blað: pappírinn, með líkaninu sýnt í sýngluggum þess.
7. Smelltu á {{ui:Model}} til að fara aftur í líkanrýmið.
8. Færðu bendilinn yfir teikninguna og lestu X- og Y-hnitin í horninu.

## Það sem þú sérð

- Teikninguna, löguð að glugganum. Litir fylgja teikningunni; hvítar línur (litur 7) teiknast í blekslit þemans, og ljósir litir eru dökkaðir á ljósa þemanu svo þeir séu læsilegir.
- {{ui:Drawing}}-spjaldið vinstra megin: skrá, stærð, snið (til dæmis „AutoCAD 2018 (AC1032)“), einingar, fjölda eininga og laga, fjölda blaða, og tengdar teikningar og búnað þegar þær eru til.
- {{ui:Layers}}-listinn vinstra megin.
- Hægra megin: hvernig þú færir þig um, tengdar teikningar og myndir, og **Ekki teiknað enn**.

## Að færa sig um

:::mouse
| Til að | Gerðu þetta |
|---|---|
| Hliðra | Dragðu með einhverjum músarhnappi |
| Aðdráttur | Skrunaðu hjólinu; punkturinn undir bendlinum helst kyrr |
| Passa | Tvísmelltu, ýttu á {{key:F}}, eða smelltu á {{ui:Fit}} |
:::

:::mac mouse
Á snertiborði **aðdrar** skrun með tveimur fingrum, hún hliðrar ekki. Klípa aðdrar líka. Til að hliðra smellirðu og dregur.
:::

:::touch
Dragðu með einum fingri til að hliðra. Klípuaðdráttur er ekki smíðaður enn fyrir teikningar: pikkaðu á {{ui:Fit}} til að sjá allt blaðið, og notaðu mús eða snertiborð til að aðdraga nær.
:::

## Kvikar blokkir

Kvik blokk er teiknuð eins og teikningin sýnir hana: hver sett blokk í því ástandi sýnileika sem teikningin var vistuð með („Plan“ eða „Front“, „Single bowl“ eða „Double bowl“). Hægra megin listar **Kvikar blokkir** hverja sem er sett í líkanrými: hversu margar eru settar, ástöndin sem þær sýna, og hvert ástand sem blokkin hefur. Í {{ui:3D}} smellirðu á sett blokk til að sjá **Kvik blokk**, **Ástand sem sýnt er** og **Önnur ástönd** í Eiginleikum. BimCraft skiptir ekki um ástand.

## Ekki teiknað enn

Sumar tegundir hluta eru ekki teiknaðar í þessari útgáfu. Þeir eru taldir undir **Ekki teiknað enn** hægra megin („Þessum hlutum teikningarinnar er sleppt í bili, ekki giskað á þá.“), svo þú vitir að eitthvað vantar. Línur, fjöllínur, bogar, hringir, sporbaugar, sveigjur, skyggingar og heilar fyllingar, texti og marglínutexti, blokkir með eigindum, víddir, leiðarar og marglínuleiðarar, töflur, myndir og sýngluggar eru teiknuð. Þrívíddarfletir, fjölfletisnet og marghyrningsnet eru teiknuð sem jaðrar þeirra séðir að ofan; skiptu yfir í {{ui:3D}} til að sjá þá sem fleti.

Tvíunda DXF opnast ekki: BimCraft segir það. Vistaðu hana aftur sem ASCII-DXF, eða sem DWG, úr forritinu sem gerði hana.

## Algengar villur

- **Teikningin lítur tóm út.** Sum lög gætu verið slökkt eða frosin í teikningunni sjálfri; þau byrja ómerkt í {{ui:Layers}}. Smelltu á {{ui:All on}}. Ef stöðulínan segir „*name* er tóm teikning: hún geymir hvorki línur, texta né blokkir.“ er ekkert í henni.
- **Blað sýnir tóman ramma.** Blaðið gæti treyst á tengdar teikningar. Sjá [Finna tengdar teikningar og myndir](topic:dwg-linked-files).
- **Texti lítur aðeins öðruvísi út.** BimCraft teiknar texta með mjóu sans-serif letri, ekki letrum teikningarinnar sjálfrar, svo texti getur verið aðeins breiðari eða mjórri en í forritinu sem gerði hana.
- **„*name* var ekki hægt að lesa. Hún gæti verið skemmd, eða vistuð á sniði sem lesandinn ræður ekki við enn.“** Sviginn í lokin nefnir sniðkóða skráarinnar. Vistaðu hana úr forritinu sem gerði hana sem eldri DWG eða sem DXF, og reyndu aftur.
- **Búast við að mæla, teikna eða breyta.** BimCraft skoðar teikningar eingöngu. Smelltu á {{ui:Edit in CadCraft}} til að opna sömu skrá í CadCraft-teikniforritinu, sem breytir henni og vistar afrit sem DWG eða DXF. Upprunalega skráin þín breytist ekki, og tengdar teikningar haldast í BimCraft. Hnappurinn birtist aðeins þar sem CadCraft er opið þér.

## Næst

- [Sjá DWG- eða DXF-teikningu í þrívídd](topic:dwg-in-3d)
- [Vinna með lög og blöð](topic:dwg-layers-sheets)
- [Yfirfara teikningu í prentsýn](topic:print-view)

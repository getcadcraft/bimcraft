---
title: Sjá DWG- eða DXF-teikningu í þrívídd
summary: Skiptu líkansvæði teikningar yfir í þrívídd til að sjá hæðir, þykkt, þrívíddarfleti, möskva og blokkir, snúa um hana, smella á hlut til að sjá eiginleika hans og sjá hvað er ekki enn teiknað.
keywords: þrívídd, dwg, dxf, teikning, líkansvæði, snúa, snið, skurður, klipping, velja, val, eiginleikar, eigindi, handfang, hæð, þykkt, útdráttur, 3dface, polyface, möskvi, þrívíddarfjöllína, blokkir, sýnir, perspektíf, samsíða, mörk, acis, fast efni
from: a0c6cd17
---

## Hvað þú gerir

Skoðaðu líkansvæði teikningar í þrívídd. Línur og fjöllínur standa í réttri hæð, hlutir með þykkt rísa upp sem veggir, og þrívíddarfletir, möskvar og þrívíddarblokkir birtast sem yfirborð sem þú getur snúið um. Blöðin haldast tvívíð.

## Skref

1. Opnaðu DWG eða DXF. Sjá [Skoða DWG- eða DXF-teikningu](topic:view-dwg). Hún opnast í þrívídd nema {{ui:Stillingar}} › {{ui:BimCraft}} › **Teikningar opnast í** segi {{ui:Líkan (2D)}}.
2. Úr 2D smellirðu á {{ui:3D}} í stikunni fyrir ofan teikninguna, eða ýtir á {{key:3}}.
3. Bíddu augnablik í fyrsta skipti: stöðulínan segir "Byggi teikninguna í þrívídd…", og síðan hversu margar línur og fleti hún sýnir.
4. Snúðu, færðu til og zoomaðu (sjá töfluna hér að neðan).
5. Smelltu á sýn í annarri stikunni: {{ui:Ísó}}, {{ui:Ofan}}, {{ui:Neðan}}, {{ui:Framan}}, {{ui:Aftan}}, {{ui:Vinstri}} eða {{ui:Hægri}}.
6. Smelltu á {{ui:Perspektíf}} til að skipta á milli perspektífsýnar og samsíða sýnar.
7. Smelltu á {{ui:Mörk}} eða ýttu á {{key:F}} til að sjá alla teikninguna aftur.
8. Smelltu aftur á {{ui:3D}}, ýttu á {{key:3}}, eða smelltu á {{ui:Líkan}} eða blaðflipa til að fara aftur í 2D.

## Hvað þú ættir að sjá

- Líkansvæði í þrívídd, Z upp, í eigin litum teikningarinnar. Fletir eru aðeins ljósari en jaðrar þeirra.
- Lög sem þú slekkur á í {{ui:Lög}} hverfa líka úr þrívíddarsýninni.
- Hægra megin: fjöldi lína og flata, stærð teikningarinnar í X, Y og Z, **Aðeins í 2D-sýn** og **Ekki enn teiknað**.

## Skera með skurðarfleti

Smelltu á {{ui:Snið}} á þrívíddarstikunni, eða ýttu á {{key:X}}. Stikan undir henni virkar eins og fyrir IFC-líkön (sjá [Skera IFC-líkan með skurðarfleti](topic:section-plane)): skerðu frá {{ui:Ofan}}, {{ui:Framan}} eða {{ui:Hlið}}, dragðu eða sláðu inn fjarlægðina (í einingum teikningarinnar hér) og notaðu {{ui:Snúa við}} til að halda hinni hliðinni. Það sem flöturinn skerir burt er ekki hægt að velja. Að fara aftur í 2D fjarlægir skurðinn.

## Sjá eiginleika hlutar

Smelltu á hlut í þrívíddarsýninni. Hann fær valslitinn og {{ui:Eiginleikar}} sýnir það sem skráin segir um hann: gerð, lag, lit, línugerð og handfang, síðan eigin gögn, svo sem upphaf, endi og lengd línu, miðju og radíus hrings, horn þrívíddarflatar, eða blokkarvísun, innsetningarpunkt, skala, snúning og gildi eigindanna.

- Blokkarvísun velst í heild, og blokkirnar sem eru inni í henni líka.
- Smellur nokkrum pixlum frá línu velur línuna.
- Haltu {{key:Mod}} inni og smelltu til að velja fleiri hluti, eða til að taka einn út; {{ui:Eiginleikar}} telur þá þá eftir gerð.
- {{key:Esc}}, eða smellur á autt rými, hreinsar valið.
- Hluti á lögum sem þú slökktir á er ekki hægt að velja.

## Hreyfing

:::mouse
| Til að | Gerðu þetta |
|---|---|
| Snúa | Dragðu með miðjuhnappi, eða með vinstri hnappi |
| Hliðra | Dragðu með hægri hnappi, eða haltu {{key:Shift}} inni og dragðu |
| Aðdráttur | Skrunaðu hjólinu; aðdrátturinn fer að því sem er undir bendlinum |
| Sjá allt | {{ui:Mörk}} eða {{key:F}} |
| Horfa frá hlið | Smelltu á flöt, jaðar eða horn á sýnisteningnum neðst hægra megin |
:::

Sýniteningnum má skipta út fyrir ásmerki, eða fela hann, í {{ui:Stillingar}}. Sjá [Stillingar BimCraft](topic:settings).

:::mac mouse
Á snertiborði skaltu strjúka með tveimur fingrum til að snúa, halda {{key:Shift}} inni og strjúka til að hliðra, og klípa til að zooma.
:::

:::touch
Dragðu með einum fingri til að snúa. Klíptu með tveimur fingrum til að zooma, og færðu þá saman til að hliðra.
:::

## Hvað er teiknað í þrívídd

| Í teikningunni | Í þrívídd |
|---|---|
| Línur, þrívíddarfjöllínur | Í réttri hæð |
| Fjöllínur, hringir, bogar, sporöskjur | Í eigin fleti, í sinni hæð, hallandi þegar teikningin hallar þeim |
| Þykkt á línum, fjöllínum, hringjum og bogum | Veggir af þeirri hæð; hringir eru lokaðir efst og neðst |
| Þrívíddarfletir, polyface-möskvar, marghyrningsmöskvar | Skyggðir fletir með sýnilegum jöðrum |
| Blokkir | Staðsettar, snúnar og skalaðar í þrívídd, líka blokkir inni í blokkum |
| Skyggingar | Útlínur þeirra |
| Venjuleg 2D-línuteikning | Flöt, þar sem hún var teiknuð |

## Aðeins í 2D-sýn

Texti, margar línur af texta og sýnilegar eigindi blokka eru teiknuð í þrívídd, í eigin fleti og í eigin hæð, og smellur á þau velur þau. Breiðar fjöllínur sýna breidd sína sem flatt band. Fjölvísar, myndir og skyggingarmynstur eru talin undir **Aðeins í 2D-sýn**: sjáðu þau á flipanum {{ui:Líkan}} eða á blöðunum.

## Ekki teiknað enn

Þrívíddarföst og yfirborð geymd sem ACIS-búkar (þrívíddarföst, búkar, svæði og yfirborð) og undirskiptir möskvar eru skráð undir **Ekki teiknað enn** með fjölda. Þau eru sleppt, ekki giskað á þau.

## Algeng mistök

- **Allt lítur flatt út.** Teikningin er 2D: línur hennar hafa enga hæð. Smelltu á {{ui:Framan}} til að athuga; flöt teikning birtist sem lína.
- **Fast líkan sýnir ekkert.** Föst gerð með föstuforriti eru ACIS-búkar, skráðir undir **Ekki teiknað enn**. Fluttu líkanið út sem IFC eða sem þrívíddarfleti úr forritinu sem gerði það.
- **Teikningin er lítil þyrping í miðjunni.** Eitthvað langt í burtu í líkansvæðinu, eins og gamalt afrit af grunnmynd, gerir mörkin stór. Zoomaðu inn með hjólinu þar sem þú vilt skoða.

## Næst

- [Vinna með lög og blöð](topic:dwg-layers-sheets)
- [Skera IFC-líkan með skurðarfleti](topic:section-plane)

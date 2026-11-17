---
title: Hnitsetning með hvaða vörpun sem er
summary: Segðu BimCraft í hvaða kortakerfi hnit líkansins eru, úr öllum EPSG-listanum, hvaða UTM-belti sem er, eða vörpun sem þú skilgreinir sjálfur, og notaðu það fyrir Staðsetningu, kortalög og punktaský.
keywords: vörpun, hnitakerfi, crs, epsg, utm, utm-belti, sérsniðin vörpun, proj4, proj-strengur, prj, wkt, hnitsetning, kortabreyting, ifcprojectedcrs, mínar vörpanir, breiddargráða, lengdargráða, austurhnit, norðurhnit, lambert, gauss-kruger, state plane, þjóðnet
from: 6894c1f2
---

Sumar teikningar eru gerðar í kortakerfi sem er ekki á stuttum lista: UTM-belti, þjóðneti eða vörpun sem einhver skrifaði niður sem textaskilgreiningu. {{ui:Mæla}} › {{ui:Hnitakerfi…}} gerir þér kleift að segja hvaða kerfi líkanið notar.

## Veldu kerfi fyrir líkan

1. Opnaðu líkanið, veldu {{ui:Mæla}}, og síðan {{ui:Hnitakerfi…}}.
2. Skrifaðu í leitarreitinn. Eitthvað af þessu virkar:
   - EPSG-númer: `32633` eða `EPSG:2277`;
   - UTM-belti: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - orð úr heitinu: `lambert 93`, `mga zone 56`, `texas central`;
   - vörpunarskilgreining: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, valfrjálst með heiti á undan (`Mitt net = +proj=…`);
   - textinn í `.prj`-skrá, eða notaðu {{ui:Hlaða inn .prj-skrá…}}.
3. Veldu niðurstöðu og síðan {{ui:Nota þetta kerfi}}.

Valið er vistað í líkaninu (eiginleikasettið `CadCraft_CRS` á verkefninu), svo það opnast aftur með líkaninu. Vistaðu líkanið til að geyma það. {{ui:Taka það af líkaninu}} fer aftur í það sem skráin segir.

Ef skilgreiningin þín gefur sömu hnit og skráð EPSG-kerfi, segir BimCraft það og notar þann kóða; þegar nokkur skráð kerfi deila sömu stærðfræðinni nefnir það hin líka.

## Mínar vörpanir

Skilgreining sem þú límir inn, eða `.prj` sem þú hleður inn, má geyma með {{ui:Vista í Mínum vörpunum}}. Listinn er í þessu tæki (í þessum vafra) og er boðinn næst þegar þú opnar valgluggann.

## Hvað notar það

- {{ui:Mæla}} › {{ui:Location}} breytir völdum punkti í breiddar- og lengdargráðu í gegnum kerfi líkansins. Áður stöðvaðist það með athugasemd þegar skráin nefndi kortakerfi sitt án EPSG-kóða; með vistuðu vali gefur það svarið.
- Kortalögin undir líkaninu nota sama kerfi. Punktaský eða landslagsskrá í öðru kerfi er boðin í kerfi líkansins (sjá hér að neðan).
- {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Location}} › {{ui:Velja annað kerfi…}} stillir það sem Location skilar líka: breiddar- og lengdargráðu í hvaða skráðu landfræðilegu kerfi sem er, eða austur- og norðurhnit í hvaða vörpuðu kerfi sem er, auk kerfis líkansins sjálfs.

## Líkan sem er ekki á korti ennþá

Ef skráin hefur enga kortabreytingu, opnast {{ui:Settu þetta líkan á kortið}} þegar þú velur kerfi. Þú getur líka opnað það frá {{ui:Mæla}} › {{ui:Upphafspunktur á korti…}}.

1. Gefðu upphafspunkt líkansins sem austur- og norðurhnit í kerfinu, eða skrifaðu breiddar- og lengdargráðu og veldu {{ui:Umreikna í austur- og norðurhnit}}.
2. Gefðu snúninginn að raunnorðri (gráður, rangsælis; 0 þýðir að Y-ás líkansins vísar til norðurs á netinu) og hæð upphafspunktsins.
3. Skölunin byrjar á mismun eininga líkansins og kortsins (0.001 fyrir millimetra-líkan á metranetinu). Breyttu henni aðeins fyrir samsettan jörð-í-net stuðul.
4. Veldu {{ui:Setja á kortið}}. Eitt skref í afturköllun skrifar IfcProjectedCRS og IfcMapConversion (IFC4). Líkanið sjálft hreyfist ekki.

Skrá af gerðinni IFC2X3 hefur hvorugt þessara eininga. BimCraft skrifar sömu tölurnar á þann hátt sem sá staðall leyfir: buildingSMART-eiginleikasettin `ePSet_MapConversion` og `ePSet_ProjectedCRS` á verkefninu, breiddar- og lengdargráðu staðarins og raunnorður. Glugginn segir það. Vistaðu líkanið til að geyma það.

## Líkan sem er þegar á korti

Þegar skráin staðsetur sig þegar á korti og þú velur annað kerfi, spyr BimCraft:

- {{ui:Breyta aðeins því sem Location skilar}} heldur eigin hnitsetningu skráarinnar og notar valið þitt fyrir Staðsetningu, kortalögin og punktaský (tölur líkansins eru þá lesnar sem hnit í nýja kerfinu).
- {{ui:Færa líkanið yfir í þetta kerfi}} endurskrifar hnitsetninguna: upphafspunkturinn fer í gegnum vörpunina (austur- og norðurhnit, hæð, snúningur og skölun) og IfcProjectedCRS (heiti, grunnur, vörpun, belti, eining) er skrifað aftur, svo vistaða IFC-skráin segir nýja kerfið. Staðurinn á jörðinni helst sá sami: upphafspunkturinn heldur breiddar- og lengdargráðu sinni. Einingar í líkaninu breytast aldrei; aðeins hnitsetningin breytist.

Glugginn sýnir gamla og nýja upphafspunktinn áður en þú velur. Að fara þangað og til baka skilar upphafspunktinum innan eins millimetra.

## Punktaský og landslag í öðru kerfi

Ský eða mælingaskrá ber sitt eigið kerfi (LAS, LAZ, E57, GeoTIFF) eða ekkert. Þegar það er frábrugðið kerfi líkansins býður BimCraft {{ui:Varpa aftur yfir í kerfi líkansins}}. Punktarnir eru færðir í lotum (í bakvinnsluferli þegar þeir eru margir, svo síðan haldist nothæf), skráin á tölvunni þinni er ekki snert, og stöðulínan segir hvað var gert. Opnaðu skrána aftur til að fara aftur í eigið kerfi hennar. Fyrir ský sem þegar er opið gerir {{ui:Varpa aftur yfir í líkanið…}} í skýjastikunni það sama.

Ef skráin nefnir ekkert kerfi, spyr BimCraft {{ui:Í hvaða kerfi er þessi skrá?}}: veldu það með {{ui:Veldu kerfið…}} og svarið er munað fyrir þessa skrá í þessu tæki. {{ui:Halda eigin kerfi skráarinnar}} skilur punktana eftir eins og þeir eru.

## Þegar eitthvað er áætlað

Vandamál eru skráð í glugganum og í spjaldinu **Vandamál**, aldrei þögul:

- Staður utan svæðisins sem kerfið er gert fyrir: tölurnar virka, en brenglun eykst.
- Grunnskiptingar sem þurfa rastaskrá (NADCON, NTv2 og þess háttar) eru ekki tiltækar. Kerfi á öðrum grunni eru færð með skiptingu án rastaskrár sem EPSG-skráin gefur upp, og niðurstaðan er áætluð innan þeirrar nákvæmni sem gefin er, sem skilaboðin gefa upp í metrum.
- Punktur sem ekki er hægt að varpa er skilinn út og talinn; skrá sem er yfir stærðarmörkin er hafnað og mörkin nefnd.

:::tip
Hnit á kortinu þurfa kortabreytingu. Skrá án hennar er sett á kortið með {{ui:Upphafspunktur á korti…}}.
:::

:::note
Flutningur milli grunna án rastaskrár er góður upp á nokkra metra; niðurstaða Staðsetningar segir hversu mikið þegar skráin þekkir það.
:::

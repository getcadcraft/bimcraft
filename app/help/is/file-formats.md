---
title: Hvað BimCraft les úr hverju sniði
summary: Nákvæmlega það sem BimCraft les úr IFC-, verkefnis- og fjölskylduskrám, DWG og DXF, og hvað það lætur óáreitt.
keywords: snið, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, útgáfur, samhæfi, hvað er lesið
from: 9b8dfb4f
---

## IFC

| Lesið | Nánar |
|---|---|
| Rúmfræði | Sérhver hlutur með lögun, litaður eins og skráin segir til um. Rými og svæði eru teiknuð gegnsæ og falin í upphafi |
| Hæðir | Byggingarhæðir í hæðarröð, og hvaða hlutir eru á hverri. Hlutir á engri hæð eru flokkaðir sem „Ekki á hæð“ |
| Fjöldi hluta | Hve margir hlutir eru af hverri tegund (veggir, hurðir, plötur…), sýndir í {{ui:Hlutir}} |
| Staðreyndir verkefnis | Heiti verkefnis, langt heiti og áfangi; skema; útflutningsforritið, höfundur og útflutningsdagur úr haus skráarinnar |
| Gögn hluta | Heiti, gerð, hlutartegund, merki, lýsing, GlobalId; hvert eiginleikasafn og magnasafn á hlutnum og á gerð hans |

Hægt er að breyta: heiti, hlutartegund, merki, lýsingu og stökum eiginleikagildum. Vistað sem ný IFC-skrá. Skemu IFC2X3, IFC4 og IFC4X3 opnast, lesin af eigin IFC-vél BimCraft; það sem hún getur ekki teiknað enn er skráð undir **Ekki teiknað enn** í {{ui:Skrá}}-spjaldinu. Líkanið er fært í upphafspunktinn þegar það opnast, svo að líkan sem er staðsett langt frá honum birtist samt í miðju skjásins. `.ifczip` og `.ifcxml` opnast ekki.

## Verkefnis- og fjölskylduskrár

`.rvt` verkefni, `.rte` verkefnissniðmát, `.rfa` fjölskyldur og `.rft` fjölskyldusniðmát.

| Lesið | Nánar |
|---|---|
| Upplýsingar um skrá | Útgáfa og smíð, samvinnuvinnsla, slóð miðlægs líkans, síðasta vistaða slóð, notandanafn, staðfærsla, GUID skjals |
| Upplýsingar um verkefni | Eigin reitir verkefnisins (heiti, númer, viðskiptavinur, heimilisfang, staða…), án sjálfgefinna gilda fyrir ný verkefni |
| Upplýsingar um fjölskyldu | Heiti fjölskyldu, flokkur, útgáfa, síðasta uppfærsla, og breytur hennar eftir hópum |
| Tengingar | Listinn yfir tengd líkön, CAD-tengingar, myndir og lykiltöflur sem skráin vísar á |
| Forskoðunarmynd | Smámyndin sem er vistuð í skránni |

Ekki lesið: þrívíddarlíkanið, hlutir, sýnir, blöð og listar. Þau eru geymd á óskjalfestu sniði. BimCraft les aðeins nokkra tugi kílóbæta úr hverri skrá, svo skráarstærð skiptir varla máli.

## .pln, .pla, .tpl og .bpn verkefnisskrár

Ekki lesið enn: BimCraft segir það þegar þú opnar eina. Fluttu út IFC fyrir líkanið og DWG fyrir teikningarnar; sjá [Opna .pln- og .pla-verkefnisskrár](topic:pln-project-files).

## DWG og DXF

| Lesið | Nánar |
|---|---|
| Svæði | Líkanrými og sérhvert blað (útlit), í fliparöð |
| Sýnigluggar | Sýnigluggar hvers blaðs, með mælikvarða, snúningi og frystum lögum |
| Lög | Heiti, litur, kveikt/slökkt, fryst, prentflagg og línuþykkt |
| Hlutir | Línur, fjöllínur, bogar, hringir, sporbaugar, splínur, skyggingar og búkar, texti og marglínutexti, blokkir og eigindi, málsetningar, leiðarar og margleiðarar, töflur, punktar, myndir |
| Tengdar teikningar | Teiknaðar þar sem þær eru settar inn, þegar skrárnar finnast |
| Myndir | Teiknaðar úr myndskránum þegar þær finnast (PNG, JPEG, GIF, BMP, WebP; ekki TIFF) |
| Merki búnaðar | Hlutamerki veitinga (`KCL-ITEM`-eigindi), fyrir búnaðarlistann |

Allt annað er talið undir **Ekki teiknað enn**, aldrei giskað. DWG-snið frá AutoCAD 2000 til 2018 eru þau sem hafa verið prófuð (R13- og R14-skrár eru líka teknar gildar, en engar voru í prófunarsettinu; eldri DWG-skrár opnast ekki); {{ui:Teikning}}-spjaldið sýnir sniðkóðann (eins og AC1032). DXF-skrár af hvaða útgáfu sem er opnast, þar á meðal R12. Báðar eru lesnar af eigin lesurum BimCraft, í þessum flipa. Ekkert er vistað aftur í DWG eða DXF.

## Í möppu

| Tegund | Endingar | Í skýrslunni |
|---|---|---|
| Líkön | `.rvt` `.rfa` `.rte` `.rft` | Flokkuð með númeruðum öryggisafritum, heilsufarsskoðuð, spjald lesið, tengingar athugaðar |
| IFC | `.ifc` | Skráð; opnast í þrívídd |
| CAD | `.dwg` `.dxf` `.dgn` | Skráð ásamt líkönunum sem tengja þær; DWG og DXF opnast í tvívídd, DGN ekki |
| Afgangar | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Skráð undir **Lagt til hliðar** |
| Viðhaldsmöppur | `*_backup`, `*_log`, `Revit_temp`, faldar möppur | Skráðar undir **Lagt til hliðar**, ekki lesnar |

Sjá [Skýrslu um möppu: hlutverk, stöður og tengingar](topic:folder-roles).

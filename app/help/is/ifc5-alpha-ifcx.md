---
title: Opna og flytja út IFC5 alfa (IFCX-skrár)
summary: Tilraunavalkostur fyrir IFC5 alfa skráarsniðið (.ifcx): opnaðu skrá með lögum hennar, sjáðu hvað lesturinn gat ekki athugað, og fluttu út opnu líkönin. Sniðið er enn að breytast, svo lestu fyrst.
keywords: ifc5, ifcx, alfa, buildingsmart, json, lög, skema, tilraun, magntölur, qto, útflutningur, innflutningur
from: cffe1669
---

IFC5 alfa (skráarending {{ui:.ifcx}}) er skráarsniðið sem buildingSMART er enn að hanna. Það er ekki endanlegt: skrárnar, og túlkun okkar á þeim, geta breyst. Þess vegna er þetta tilraunavalkostur og af hverju lestur kemur fyrst.

## Kveiktu á því

1. Veldu {{ui:Stillingar}}, og síðan kaflann {{ui:IFC5 alfa (IFCX)}} á BimCraft-flipanum.
2. Hakaðu við {{ui:IFC5 alfa (IFCX) - the format is still changing; read first}}.

Það er slökkt sjálfgefið. Meðan það er slökkt er .ifcx-skrá hafnað með setningu sem vísar hingað. {{ui:Opna IFC5 alfa (.ifcx)…}} og útflutningshnappurinn {{ui:IFC5 alpha}} birtast þegar kveikt er á því.

## Opna

- Veldu .ifcx-skrá með {{ui:Opna skrá eða möppu}} (hún kemur í stað opna líkansins, eftir venjulegu spurninguna um breytingar), eða
- veldu {{ui:Opna IFC5 alfa (.ifcx)…}} og veldu nokkrar skrár saman: skrána, lög hennar og skemaskrárnar sem hún flytur inn. Þegar líkan er þegar opið er skráin **bætt við hliðina á því**; x-ið í líkanalistanum fjarlægir hana aftur, sem er afturköllunin.

IFCX-skrá listar hnúta (slóð, börn hennar, það sem hún erfir, eiginleika hennar). Nokkrar skrár geta lýst sama hnútnum: síðari skrá (lag) yfirskrifar eiginleika fyrri skráar, og núll-barn fjarlægir barn. BimCraft setur þær saman og teiknar útkomuna sem lítið IFC4-líkan: verkefni, lóð, byggingu, hæðir og hluti með nöfnum, flokkum, eiginleikum, magntölum, litum og möskvum.

Ekkert er sótt af netinu. Skemaskrárnar sem skrá flytur inn (til dæmis `ifc@v5a.ifcx`) eru aðeins notaðar ef þú valdir þær með skránni; annars segir skýrslan það og eiginleikarnir eru lesnir án tegundaathugunar.

### Skýrslan

Eftir opnun listar skýrslan það sem lesturinn fann: gögn sem passa ekki við skemað sitt, skemaskrár sem ekki voru gefnar, og eiginleika sem hafa enga IFC-merkingu hér. Eiginleikar án varpunar eru **geymdir** í líkaninu, ekki fjarlægðir, og eru skrifaðir aftur við útflutning.

## Hvað verður að hverju

| Í IFCX-skránni | Í BimCraft |
|---|---|
| Hnútur með IFC-flokki (verkefni, lóð, bygging, hæð, veggur …) | Samsvarandi IFC4-hluti; flokkur sem þessi lestur þekkir ekki verður building element proxy |
| Nafnið sem hnúturinn hefur undir foreldri sínu | Heiti hlutarins |
| Eiginleikar með magntegund (Length, Area, Volume, Mass …) | IFC4-magntalnasett sem heitir `Qto_IFCX` (IFC4-magntölur haldast sem IFC4 `Qto_*`-sett) |
| Aðrir eiginleikar | Eiginleikasett sem heitir `Pset_IFCX` |
| Möskva- og umbreytingareiginleikar | Þríhyrningar hlutarins og staðsetning; ósýnilegir möskvar eru ekki teiknaðir |
| Litur, ógegnsæi, efni, flokkun | Yfirborðsstíll, efni og flokkun hlutarins |

Einingar eru teknar sem metrar, með Z upp á við: alfan segir að einingarnar verði skjalfestar síðar.

## Útflutningur

Veldu {{ui:IFC5 alpha}} á tækjastikunni, lestu athugasemdina, og smelltu síðan á {{ui:Flytja út .ifcx}}. Skráin hefur okkar eigin haus (höfundur CadCraft, útgáfa ifcx_alpha) og segir sjálf að hún sé alfa-sniðið. Hvert líkan er skrifað í sínum eigin hnitum skráarinnar, í metrum, með heitum, flokkum, eiginleikasettum, magntölum (sem eiginleikum með sinni tegund), litum og þríhyrningum. Lög og erfð eru skrifuð flöttuð. Yfirfarðu skrána í forritinu sem þú sendir hana til.

## Takmarkanir

- Bogadregin rúmfræði (ferlar, flatir) er ekki lesin: aðeins þríhyrningsmöskvar.
- Hurðir og gluggar sem eru í vegg eru settir á hæðina; veggurinn sem þær komu úr er ekki tengdur.
- IFC4 `Qto_*`-heiti settanna eru geymd sem eigin eiginleikahópar (`cadcraft::qto::…`); staðlaða alfa-skemað hefur aðeins fá magnheiti.
- Sniðið getur breyst undan okkur; skrá sem gerð er í dag getur ekki lesist á morgun.

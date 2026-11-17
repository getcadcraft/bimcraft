---
title: Ang site, ang gusali dito at ang mga level nito
summary: Gumuhit ng outline ng site, ilagay at paikutin ang gusali sa site, magdagdag ng level sa tinukoy na taas o hatiin ang taas ng gusali, at gumuhit sa level na pipiliin mo.
keywords: site, site plan, building line, setback, servitude, easement, right of way, property line, lote, plot, hangganan, paglalagay ng gusali, paikutin ang gusali, ilagay ang gusali, mga level, mga palapag, stories, mga sahig, magdagdag ng level, hatiin ang taas, floor to floor, IfcSite, IfcBuilding, IfcBuildingStorey, spatial structure
from: 48d10c1e
---

## Ano ang gagawin mo

Itakda ang mga bahagi ng IFC model na naglalaman ng lahat ng iba pa: ang site, ang gusali dito at ang mga level ng gusali.

Nakaayos ang model bilang **site** na naglalaman ng **building**, na naglalaman ng mga **level** nito (palapag); ang mga pader, sahig at lahat ng iba pa ay kabilang sa isang level. Itinatakda ng {{ui:File}} › {{ui:New building}} ang tatlong ito. Ang model mula sa ibang program na may building pero walang site ay makakakuha ng site sa unang beses na gumuhit ka ng isa: ilalagay ang building dito kung nasaan na ito dati.

## Gumuhit ng site

1. I-on ang {{ui:Draw}}, saka piliin ang {{ui:Build}} › {{ui:Site}}.
2. I-click ang mga corner ng site (ang tool ay nagsa-snap gaya ng tool na Pader). I-click muli ang unang corner, i-double-click o pindutin ang {{key:Enter}} para tapusin. Inaalis ng {{key:Backspace}} ang isang corner.
3. Ipinapakita ng row ang lawak ng site. Iguhit itong muli para baguhin ito.

Ipinapakita ng plano ng bawat level ang outline ng site bilang property line.

## Ilagay ang gusali sa site

Kapag naka-on ang {{ui:Site}}, i-type ang **X** at **Y** ng gusali sa site at ang **Turn** nito sa degrees, o i-click ang {{ui:Place the building by a click}} at i-click kung saan pupunta ang origin ng gusali. Lahat ng nasa gusali (mga level, pader, grid, lahat ng iginuhit mo) ay gumagalaw kasama nito; nananatili ang site at ang outline nito. Ipinapakita pa rin ng mga plano ang bawat level na nakaharap sa gusali.

## Building line at servitude

Ang building line at servitude (easement, right of way) ay iginuguhit sa site bilang constraint. **Nagbababala sila, hindi kailanman humaharang**: ang pader na nasa ibabaw ng isa ay iginuguhit ayon sa hiniling mo, at lalabas sa Problema ang babala na nagpapangalan sa pader at sa line o servitude. Ilipat pabalik ang pader at mawawala ang babala. Maaaring tanggapin ang babala na may dahilan (halimbawa, relaksasyong ibinigay ng awtoridad).

- **Building line mula sa setback.** {{ui:Build}} › {{ui:Building line}}, saka {{ui:Setbacks}}: i-type kung gaano kalayo nakatayo ang line mula sa bawat hangganan ng site. Nakanumero ang mga hangganan sa plano habang nakabukas ang tool. Ikinakalkula ang line mula sa mga distansyang iyon at sinusundan ang outline ng site kapag iginuhit mo itong muli na may parehong bilang ng hangganan. Ang mga distansya ay sa iyo, kinuha mula sa iyong title deed o zoning scheme; walang inilalagay na distansya ang BimCraft.
- **Iginuhit na building line.** Kapag naka-on ang {{ui:Building line}}, i-click ang mga punto nito at tapusin sa pamamagitan ng double-click o {{key:Enter}}. Tapusin sa unang punto para sa saradong line: ang lugar sa loob nito ay kung saan maaaring magtayo, at may babala ang pader na may anumang bahagi sa labas nito. Ang bukas na line ay nagbababala lamang tungkol sa pader na tumatawid dito.
- **Servitude.** {{ui:Build}} › {{ui:Servitude}}: piliin ang uri nito, i-type ang pangalan nito, ang nakarehistrong reference nito at lapad nito, saka i-click ang center line nito at tapusin (isang strip), o isara sa unang punto nito (isang area). May babala ang pader na may anumang bahagi rito, sa bawat level.
- Ang mukhang eksaktong nasa linya ay nakadikit, hindi tumatawid (ang tolerance ay 1 mm).
- Sinusuri ang kasalukuyang massing option ng bawat option set gaya ng mga pader: ang mass sa labas ng hangganan, sa ibabaw ng building line o sa servitude ay may babala. Tingnan ang [Mga massing option na magkatabi](topic:massing-options).
- Pumili ng isa gamit ang {{ui:Select}} para baguhin ang pangalan, reference, uri o lapad nito, ilipat ito, o burahin.

Iginuguhit ang mga ito sa plano ng bawat level, sa mga sheet at sa plan PDF: naka-dashed ang building line, naka-dotted ang servitude, bawat isa ay may label. Sa IFC file, bawat isa ay annotation (IfcAnnotation, uri na BuildingLine o Servitude) sa site, na ang line nito ay simpleng curve na mababasa ng ibang program. Ginagamit ng pagsusuri ang totoong outline ng bawat pader sa plano, kasama ang mga joint nito gaya ng iginuhit; ang curved na pader ay sinusuri ayon sa sarili nitong kapal sa paligid ng center line nito.

## Magdagdag ng level

Sa panel na {{ui:Mga level}}, nagdaragdag ang {{ui:Magdagdag ng level sa itaas}} ng isa, at ang {{ui:Magdagdag ng level sa ibaba}} ay nagdaragdag ng isa sa ilalim ng pinakamababa (basement, sa negatibong elevation). Nagdaragdag ang {{ui:Magdagdag ng level…}} ng ilan nang sabay-sabay:

- **Sa mga taas na ito**: i-type ang mga taas na mas mataas sa pinakamababang level, pinaghihiwalay ng kuwit (halimbawa `12', 24', 36'`). Nilalaktawan ang mga taas na mayroon nang level.
- **Hatiin ang taas ng gusali**: i-type ang taas ng gusali at ang bilang ng level. Ang mga level na mayroon ka ay lilipat sa mga bagong taas nila mula sa pinakamababa pataas, idaragdag ang mga nawawala, at ang anumang nasa itaas nila ay mananatili.

Sinusundan ng mga pader na umaabot sa level sa itaas ang mga ito, gayundin ang column at ramp.

Ang {{ui:Kopyahin ang level na ito…}} (parehong panel) ay kumokopya ng iginuhit sa level na tinitingnan mo papunta sa ibang level o sa bagong level sa itaas, para mailakad ang floor plan paakyat sa gusali sa isang hakbang. Tingnan ang [Gumuhit ng mga pader](topic:draw-walls).

## Gumuhit sa isang level

Ang bawat tool na {{ui:Draw}} ay gumagana sa level na pinili sa listahan ng level ng plano (o pinili sa panel na {{ui:Mga level}}): ang iginuguhit mo ay kabilang sa level na iyon.

## Ano ang dapat mong makita

- Ang bawat pagbabago rito ay isang hakbang: binabawi ito ng {{key:Mod+Z}}.
- Sa IFC file: ang site (IfcSite) na may outline at lawak nito, ang gusali (IfcBuilding) na nakalagay dito, at ang mga level (IfcBuildingStorey) sa loob ng gusali.

Tingnan din ang [Mga coordinate sa BimCraft](topic:coordinates) para sa project origin at survey point.

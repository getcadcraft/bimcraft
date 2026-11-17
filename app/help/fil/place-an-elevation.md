---
title: Maglagay ng elevation at buksan ang view nito
summary: Ilagay ang elevation marker sa floor plan, itutok ito sa direksyong gusto mo, saka hanapin ang drawing nito sa project browser, i-edit ito at ilagay sa sheet. Mga hakbang para sa ribbon layouts at para sa classic layout.
keywords: elevation, view ng elevation, elevation marker, tag ng elevation, maglagay ng elevation, bagong elevation, gumawa ng elevation, panlabas na elevation, side view, front view, view mula sa isang punto, nasaan ang elevation ko, buksan ang elevation, elevation sa sheet, baligtarin ang elevation, palitan ang pangalan ng elevation, north elevation, tile views, split view, plano at 3D magkatabi
from: a7cfd2b9
---

## Ang gagawin mo

Gagawa ka ng sarili mong elevation: isang drawing ng gusali na nakikita mula sa puntong pipiliin mo, nakaharap sa direksyong pipiliin mo. Dalawang click lang ito sa floor plan. Makikita ang drawing kasama ng iba pang elevation ng gusali.

:::note
Nandiyan na ang apat na gilid. Bawat gusali ay may North, East, South at West na elevation sa {{ui:Project browser}} sa ilalim ng {{ui:Elevations}} nang hindi naglalagay ng kahit ano. Maglagay ng sarili mo kapag gusto mo ng view mula sa ibang lugar: patayo sa angled na pakpak, mula sa loob ng courtyard, o ng isang pader sa loob ng kuwarto.
:::

## Nasaan ang tool

- Ribbon layouts: {{ui:View}} › **Gumawa** › {{ui:Elevation}}.
- Classic layout: i-on ang {{ui:Draw}}, saka {{ui:Build}} › {{ui:Elevation}}.
- Anumang menu style: ang command ay pinangalanang Elevation; mahahanap ito ng command palette, at tumatanggap ang command line ng ELEVATION.

## Mga hakbang

1. Piliin ang {{ui:Elevation}}. Naka-place ang elevation sa floor plan, kaya kung nasa 3D view ka, ipapakita ng BimCraft ang plano ng level na kinaroroonan mo. Ang pointer ay magsasabing **I-click kung saan nakatayo ang elevation**.
2. I-click kung saan kinukunan ang view. Para sa panlabas na elevation, i-click sa labas ng gusali, medyo malayo sa pader na gusto mong makita.
3. Sasabihin na ngayon ng pointer ang **Tukuyin ang itsura nito**. Lumapit sa gusali: may arrow na nagpapakita ng direksyon, at ang maikling linyang nakahalang sa unang click mo ay ang gilid kung saan tinitingnan ang view. I-click.
4. May lumabas na bilog na may numero at pointer sa plano. Iyon ang elevation marker. Ang una ay 1, ang susunod ay 2.
5. Pindutin ang Esc para tapusin, o magpatuloy at maglagay ng isa pa.

Isang hakbang lang ang paglagay ng marker: {{key:Mod+Z}} ang magbabawi nito.

## Buksan ang drawing

Nananatili sa harap mo ang plano pagkatapos ng ikalawang click. Nasa {{ui:Project browser}} ang drawing:

1. Buksan ang {{ui:Elevations}}. Nakalista ang sa iyo pagkatapos ng apat na gilid bilang **Elevation 1**.
2. I-click ang pencil button na {{ui:Edit in this view}} sa row nito para makita ang drawing at makapagtrabaho dito: ilipat ang mga pader, pinto, bintana at level, magdagdag ng tala at dimension. Tingnan ang [I-edit sa elevations at sections](topic:edit-in-elevations).
3. I-click mismo ang row para buksan ang drawing set, o idagdag ang view sa sheet na sarili mo. Tingnan ang [Mga view at sheet](topic:views-and-sheets).

Sa classic layout, nasa kaliwang panel ang project browser habang naka-on ang {{ui:Draw}}. Sa ribbon layouts, ito ang tab na {{ui:Project Browser}} sa ilalim ng Properties.

## Ano ang ipinapakita ng view

- Lahat ng nasa harap ng marker, hanggang saklaw ng gusali. Walang nasa likod nito.
- Ang mga level, kasama ang mga pangalan at taas nito.
- Kung nakatayo ang marker sa loob ng gusali, puputulin doon ang anumang kinatatayuan nito, tulad ng ginagawa ng section. Para sa malinis na panlabas na elevation, tumayo sa labas.

## Palitan ito

Piliin ang marker sa plano (i-click ang bilog nito gamit ang {{ui:Select}}). Ang Properties ay may:

- {{ui:Label}}: ang numero nito o pangalang sarili mo, hanggang 8 character.
- {{ui:Flip the view}}: tingnan sa kabaligtarang direksyon mula sa parehong lugar.
- {{ui:Look as far as}}: hanggang saan aabot ang view sa harap ng marker. Ang 0 ay nagpapakita ng lahat.

Pindutin ang Delete para alisin ang marker at ang drawing nito. Ibabalik ng I-undo ang dalawa.

:::tip
Para makita ang plano at 3D view nang sabay habang nagtatrabaho, gamitin ang {{ui:View}} › **Bintana** › {{ui:Tile Views}} sa ribbon layouts, o {{ui:Split}} sa classic layout. Ang pag-click sa tab ng view ay bumabalik sa iisang view.
:::

## Mga limitasyon

- Hindi pa maaaring i-drag o i-ikot ang marker sa plano. Burahin ito at ilagay muli, o gamitin ang {{ui:Flip the view}}.
- Sa listahan ng mga view na maidadagdag sa sheet, nakalista ang sarili mong elevation kasama ng mga section.
- Ang door at window tags ay iginuguhit sa apat na side elevation, hindi sa isang inilagay mo.

## Sa IFC

Sine-save ang marker sa file bilang IfcAnnotation na may pangalang "Elevation 1" at object type na "Elevation marker", sa level kung saan ito inilagay. Ipinapakita ito ng ibang program bilang annotation; ang mismong drawing ay ginagawa ng BimCraft mula sa model sa bawat pagbubukas.

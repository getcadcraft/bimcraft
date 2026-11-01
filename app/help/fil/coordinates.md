---
title: Mga coordinate sa BimCraft
summary: Kung nasaan ka sa pagtatrabaho: ang posisyon ng pointer sa plano at sa 3D view, ang level na kinaroroonan mo, ang project origin at ang survey point ng site.
keywords: coordinates, nasaan ako, posisyon, pointer, readout, x y z, level, palapag, project origin, origin, base point, survey point, site, map coordinates, eastings, northings, georeference, units, lokasyon
from: 84df5245
---

## Ano ang gagawin mo

Alamin agad kung nasaan ka sa isang model: aling level ang iginuguhit mo, gaano kalayo ang pointer mula sa project origin, at kung nasaan ang survey point ng site.

## Saan lumalabas ang mga numero

- **Sa ibabaw ng 3D view** (sa kanang ibaba, katabi ng view cube): ilipat ang pointer sa ibabaw ng model. Ipinapakita ng kahon ang level kung nasaan ang punto at kung gaano ito kataas sa itaas ng sahig ng level na iyon, pagkatapos ang **X, Y at Z** nito. Kapag nasa bakanteng espasyo, ang binabasa ay ang punto sa sahig ng pinakamababang level.
- **Sa plano** (sa kanang ibaba, habang naka-on ang {{ui:Draw}}): ang level na ipinapakita ng plano at ang taas ng sahig nito, at ang **X at Y** ng pointer habang nasa ibabaw ng plano.
- Kapag may map conversion ang file (na-export na may map coordinates), idinadagdag ng parehong kahon ang **eastings at northings** sa map grid, sa {{ui:Units}} na pinili mo (palaging may nakasulat na unit sa tabi nito; ang feet at inches ay lumalabas bilang decimal feet). Ang drawing (DWG o DXF) ay pinapanatili ang sarili nitong units: ipinapakita ng pointer readout nito ang mga ito at hindi kailanman kino-convert.

Sinusukat ang bawat X, Y at Z mula sa **project origin**, sa {{ui:Units}} na pinili sa toolbar (feet and inches, inches, decimal feet, millimeters, centimeters o meters). Ang positibong Y ay tumuturo sa north ng model, na hindi laging true north. Sumusunod sa parehong pagpili ang map eastings at northings (ang feet and inches ay lumalabas bilang decimal feet). Kapag iba ang sariling unit ng map system sa napili mo, nakasulat ito sa bracket pagkatapos ng mga numero, halimbawa *(US survey feet)*, para makita ng surveyor kung ano ang unit ng mismong sistema.

## Ang dalawang marker

- **Project origin** (pulang bilog na may krus): ang punto 0, 0, 0 kung saan sinusukat ang lahat ng coordinate sa model.
- **Survey point** (asul na bilog na may tatsulok): ang reference point ng site, ang punto kung saan ibinigay ang latitude, longitude at elevation nito, o ang map coordinates nito. Sa 3D view, ituro ito para mabasa kung nasaan ito.

Kapag nasa project origin ang site, gaya ng bagong building na iginuhit dito, isang marker lang ang nagpapakita ng dalawa. I-click ang crosshair button sa alinmang kahon para itago o ipakita ang mga marker. Inaalala ng BimCraft ang pinili mo sa browser na ito.

## Ano ang dapat mong makita

- Nagbabago ang mga numero habang gumagalaw ang pointer, at pinangalanan ng kahon ng plano ang level na pinili mo sa level list.
- Nananatili sa lugar ang mga marker habang umiikot, nagpa-pan at nagzo-zoom ka.

:::tip
Para mabasa ang latitude at longitude ng isang punto, gamitin ang {{ui:Measure}} › {{ui:Lokasyon}}: tingnan ang [Sukatin ang distansya, lawak ng face at lokasyon sa 3D](topic:measure).
:::

:::touch
Sa touch screen, walang lalabas sa 3D na kahon hangga't hindi ka gumagamit ng mouse o pen: ang daliri ay nagpapagalaw ng view.
:::

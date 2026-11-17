---
title: Mag-model mula sa scan
summary: Maikling gabay mula sa laser scan papunta sa mga pader: buksan ang point cloud sa tabi ng bagong building, i-align ito sa isang level, at i-trace ang mga pader nito sa plano.
keywords: scan, laser scan, point cloud, as-built, umiiral na building, survey, trace, scan papuntang BIM, model mula sa scan, slice, align, square, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Ano ang gagawin mo

Iguhit ang umiiral na building mula sa laser scan nito: mga pader kung saan ipinapakita ng scan, nasa tamang level, at naka-square sa isa't isa.

## Mga hakbang

1. **Building na iguguhit.** {{ui:File}} › {{ui:Bagong building}}, may kasing dami ng level gaya ng building (maaari kang magdagdag ng level mamaya, tingnan ang [Ang site, ang building dito, at ang mga level nito](topic:site-building-and-levels)). Naka-on ang {{ui:Draw}}.
2. **Ang scan.** {{ui:Ipakita}} › {{ui:Point cloud}} at piliin ang file (LAS, LAZ, E57, PLY, PCD, PTX o XYZ: tingnan ang [Ipakita ang point cloud sa tabi ng model](topic:point-clouds)). Lumalabas ang cloud sa 3D view, at ipinapakita ng plano ang **slice** nito: ang mga scanned point na 1200 mm (4 feet) sa ibabaw ng level, bilang mga tuldok. Iyon ang taas kung saan pinakamahusay mababasa ang mga pader, pinto at bintana.
3. **I-align sa level.** Buksan ang {{ui:I-scan}} menu ng model bar at i-click ang {{ui:I-align ang sahig nito sa level na ito}}: gagalaw pataas o pababa ang cloud hanggang sumakto ang sahig na na-scan sa ipinapakitang level. Tingnan kung tumatawid na ngayon ang slice sa mga pader.
4. **Naka-square sa building.** {{ui:I-scan}} › {{ui:Ituwid ito sa gusali}} ay iniikot ang cloud para tumakbo ang mga pader sa slice nito kasabay ng mga axis ng plano, kaya sumasakto sa scan ang mga pader na iguguhit mo habang hawak ang {{key:Shift}}. Umiikot ito sa gitna ng mga pader na nakita nito, kaya hindi naitutulak palayo sa scan ang mga puno o pader ng kapitbahay na nasama sa slice. I-align muna ang sahig: tumatawid na ang slice sa mga pader.
5. **I-trace ang mga pader.** Piliin ang {{ui:Pader}} at i-click sa kahabaan ng mga tuldok: sumasakto ang tool sa mga scanned point (maliit na diamond ang snap mark) pati sa mga pader na iginuhit mo. Iginuguhit ang pader sa center line nito, kaya i-click sa gitna ng dalawang hanay ng tuldok na iniiwan ng pader; i-type ang kapal nito sa pamamagitan ng unang pagpili ng wall type. Pagkatapos, idagdag ang mga pinto at bintana kung saan ipinapakita ng slice ang mga puwang.
6. **Ang susunod na level.** Piliin ang level sa itaas sa listahan ng level ng plano: sumusunod ang slice sa cut height ng level. I-align ulit ang sahig sa level na iyon kung hindi nasa tamang lugar ang mga sahig ng scan kumpara sa mga level mo.

## Ang dapat mong makita

- Nagbabago ang slice habang binabago mo ang level, at mas maraming punto ang ipinapakita ng mas makapal na slice ({{ui:I-scan}} › {{ui:Kapal ng slice}}) kung saan manipis ang scan.
- {{ui:I-scan}} › {{ui:I-undo ang alignment}} ibinabalik ang cloud sa puwestong pinagkalagyan nito noong magbukas. Ang pag-align ay gumagalaw sa cloud sa view lang: hindi ito naka-save sa IFC file, at mananatili ang mga pader na iginuhit mo. Kasama ng cloud ang alignment kapag binago mo ang {{ui:Ilagay}} o {{ui:Units}}, o nagbukas ng ibang model.
- {{ui:I-scan}} › {{ui:Ipakita ang slice sa plano}} itinatago o ipinapakita ang mga tuldok.

:::tip
Malalaking scan: gumuguhit ang plano ng hanggang 60,000 punto ng slice at ang 3D view ng ilang milyon mula sa buong cloud, parehong pantay na pinili sa buong scan, kaya mabilis pa rin ang malaking file. Para mag-trace sa drafting app, gamitin ang {{ui:I-trace sa CadCraft}} ng cloud bar.
:::

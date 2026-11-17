---
title: I-export ang model bilang Collada o para sa Google Earth
summary: Isulat ang mga bukas na IFC model bilang Collada (.dae) file para sa Blender at iba pang 3D program, o bilang Google Earth package (.kmz) na nakalagay kung nasaan ang model sa mapa.
keywords: collada, dae, kmz, kml, google earth, blender, export, geolocation, georeference, latitude, longitude, lokasyon, 3D program
from: 81cfec09
---

{{ui:Collada}} sa toolbar (o {{ui:Export Collada (.dae, .kmz)…}} sa File menu ng menu at ribbon style) ay isinusulat ang bukas na nilalaman bilang Collada 1.4.1: bawat model na nakikita, kasama ang mga federated na model na inilagay mo kung saan sila nararapat.

## I-export

1. Piliin ang {{ui:Collada}}.
2. Piliin ang format:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Lumalabas lang ito kapag may lokasyon ang model.
3. Piliin ang mga opsyon, saka i-click ang {{ui:Export}}. Dina-download ang file, at sinasabi ng status bar kung ilang element ang naisama.

| Opsyon | Ano ang ginagawa nito |
|---|---|
| {{ui:Write the location into the file}} | Dinadagdagan ang .dae ng latitude, longitude, taas at heading ng origin ng file |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, o {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Kasama rin ang mga space (hindi ito kasama bilang default) |
| {{ui:Include hidden elements}} | Isinusulat din ang mga element na itinago mo (bilang default, ang nakikita lang ang isinusulat) |

## Ano ang nasa file

| Sa model | Sa Collada file |
|---|---|
| Building, storeys | Nested na node, nakaayos ang mga storey ayon sa elevation; ang mga element na walang storey ay nasa ilalim ng "Unplaced" |
| Bawat element | Isang node na may sariling mesh, pinangalanan gaya ng nasa model (ang pangalan nito, o kung wala, ang class at tag nito) |
| Class, GlobalId, predefined type | Nasa extra data ng node (profile IFC), kasama ang eksaktong pangalan (profile ModelCraft) |
| Kulay | Materyal, kasama ang transparency |
| Unit at axis | Metro, Z pataas. Ang level 0 ng model sa harap ay nasa taas na 0 |

Nananatili ang model malapit sa origin sa ibabaw ng lupa, kaya naipapakita ito ng mga program na gumagana sa single precision nang walang jitter. Sumusulat ang ModelCraft ng Collada file gamit ang parehong writer, at binubuksan ang mga file na ito kasama ang mga pangalan ng element.

## Saan galing ang lokasyon

Ang model sa harap ang nagbibigay ng lokasyon, gaya ng paraan ng pagkuha ng {{ui:Measure}} ng latitude at longitude ng isang punto:

- Isang map conversion (IFC4 IfcMapConversion, o ang IFC2X3 property set) sa pamamagitan ng coordinate system ng model. Nananaig ang sistemang pinili mo para sa model kaysa sa pinangalan ng file.
- Kung wala, ang latitude at longitude ng site (tinatayang lang: sapat na ito sa buong site).

Sinusukat ang heading, hindi hinuhula. Isinasaalang-alang nito ang rotation ng mapa, true north at convergence ng mapa. Para magbigay ng lokasyon sa model, gamitin ang {{ui:Map origin…}} sa Measure.

## Sa ibang program

- Binabasa ng **Google Earth** ang .kmz: lumalabas ang model sa lokasyon nito, nakaharap sa north. Walang lugar ang plain na .dae kung saan binabasa ng Google Earth ang lokasyon; gamitin ang .kmz.
- **Blender** (4.x at mas luma): File, I-import, Collada (.dae). Bawat element ay pumapasok bilang sariling object kasama ang materyal nito. Nananatili ang lokasyon sa extra data ng file, na hindi binabasa ng Blender. Inalis ng Blender 5.0 ang built-in nitong Collada importer; sa bersyong iyon, gamitin na lang ang {{ui:USD}} o ang glTF export, o buksan ang .dae sa Blender 4.5 at i-save bilang .blend.

Sinusuri ng aming mga test ang bawat file laban sa Collada 1.4.1 schema at binabasa ito pabalik gamit ang isang independent na Collada reader. Hindi pa ito nabubuksan sa Blender o Google Earth.

---
title: Sukatin ang distansya, lawak ng face at lokasyon sa 3D
summary: Sukatin sa pagitan ng dalawang punto ng IFC model na may snap sa mga sulok at gilid, basahin ang pagkakaiba sa X, Y at Z, at sukatin ang lawak ng flat na face.
keywords: measure, sukat, pagsukat, distansya, haba, dimension, lawak, face area, snap, sulok, gilid, tape, ruler, clearance, lokasyon, latitude, longitude, lat long, coordinates, georeference, map conversion, EPSG, survey, eastings, northings, WGS 84, datum
from: 5f430bba
---

## Ano ang gagawin mo

Suriin ang clearance, ang haba ng pader o ang laki ng face nang diretso mula sa model, nang hindi binubuksan ang authoring program.

## Mga hakbang

1. Magbukas ng IFC model.
2. I-click ang {{ui:Measure}} sa toolbar, o pindutin ang {{key:M}}. Bubukas ang isang bar sa ibaba ng view.
3. **Distansya:** kapag napili ang {{ui:Distansya}}, i-click ang unang punto, saka ang pangalawa. Malapit sa sulok, sumasalo ang pointer dito; malapit sa gilid, sa gilid mismo; sinasabi ng maliit na label sa pointer kung alin. Bawat pares ng click ay gumagawa ng isang sukat.
4. **Lawak ng face:** piliin ang {{ui:Lawak ng face}} at i-click ang face. Naiilawan ang buong flat na face at lumalabas ang lawak nito.
5. **Tuwid na linya:** pindutin nang matagal ang {{key:Shift}} habang pinipili ang pangalawang punto, o pindutin ang {{ui:Tuwid}} sa bar para manatili ito. Tumatakbo ang linya sa iisang axis na pinakamalapit sa pointer (sa top view, sa X o Y ng plano; sa ibang view, sa X, Y o Z), at sinasabi ng label ng pointer na "tuwid sa isang axis". Sinisimulan at itinitigil pa rin ng {{key:M}} ang Measure.
6. I-click ang {{ui:I-clear}} para alisin ang mga sukat, o ang {{ui:Tapos}} (o {{key:Esc}}) para itigil ang pagsukat.

## Dapat mong makita

- Isang linya sa pagitan ng dalawang punto na may haba nito, at sa bar ang haba kasama kung gaano ito napupunta sa X, Y at Z (sa mga axis ng model, nakataas ang Z), lahat sa {{ui:Units}} na pinili sa toolbar.
- Lawak ng face sa metro kuwadrado, sa face at sa bar.
- Nananatili ang mga label sa kanilang mga sukat habang umiikot, nag-pa-pan at nag-zoom ka.
- Habang nagsusukat, hindi pumipili ng elemento ang mga click. Pinuputol pa rin ng section plane o box ang model, at maaari mong sukatin ang nakikita nito, kasama ang mga cut face.

## Nasaan ang isang punto sa mundo

I-click ang {{ui:Lokasyon}} sa measure bar, saka i-click ang punto sa model (nagsa-snap ito sa mga sulok at gilid gaya ng sa mga distansya). Ipinapakita ng bar ang:

- ang **latitude at longitude**, sa decimal degree at sa degree, minuto at segundo, sa WGS 84 sa umpisa;
- ang **map coordinates** (eastings at northings, nakasulat sa {{ui:Units}} na pinili sa toolbar) sa sariling map system ng model, halimbawa `EPSG:28356`;
- ang **taas** at ang vertical datum na pinangalanan ng file, at ang **sariling datum** ng file (halimbawa GDA94).

Inilalagay ng {{ui:Kopyahin}} ang lahat sa clipboard sa iisang linya. Baguhin ang sistemang gamit ng latitude at longitude sa {{ui:Mga setting}} › BimCraft › {{ui:Lokasyon}}: WGS 84 (gaya ng GPS at web map), ang sariling datum ng file, o ibang karaniwang sistema gaya ng ETRS89 o NAD83.

Kailangan nito ng georeferenced model: isang na-export na may map coordinates (isang map conversion sa projected system na may EPSG code). Ang model na may site latitude at longitude lamang ay nakakakuha ng tinatayang posisyon, kinuwenta mula sa punto ng site at sa true north nito, at sinasabi iyon ng bar. Kapag may ilang model na bukas, bawat punto ay gumagamit ng georeference ng sarili nitong model.

:::note
Ang paglipat sa pagitan ng mga datum (halimbawa GDA94 papuntang WGS 84) ay ginagawa nang walang grid file, kaya tama ito hanggang ilang metro; sinasabi ng status line kung gaano ito katumpak. Eksakto ang mismong map coordinates.
:::

## Mga karaniwang pagkakamali

- **"…has no georeference".** Walang map conversion at walang site latitude at longitude ang file. I-export itong muli na nakatakda ang coordinate system nito (shared coordinates / survey point sa authoring tool).
- **Map coordinates pero walang latitude at longitude.** Walang EPSG code ang pangalan ng map system ng file, o may code na wala sa listahan; sinasabi ng status line kung alin.

- **Sa face bumabagsak ang punto, hindi sa sulok.** Tumitingin ang snapping sa elemento sa ilalim ng pointer. Lumapit sa sulok, o mag-zoom in.
- **Mas maliit kaysa inaasahan ang lawak.** Hindi kasama ang mga opening, at ang face na baluktot ay ilang face: i-click ang bawat isa.
- **Huminto sa pagsukat ang {{key:Esc}}.** Tinatanggal ng unang {{key:Esc}} ang kalahating nagawang distansya; ang ikalawa ang humihinto.

## Susunod

- [Hiwain ang IFC model gamit ang section plane](topic:section-plane)
- [Itago, ihiwalay at gawing transparent ang mga elemento](topic:hide-and-isolate)

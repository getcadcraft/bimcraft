---
title: Ang lupa ng site, ang building pad at ang paving
summary: Ilagay ang lupa sa model mula sa survey points, contours, LAS / LAZ scan, GeoTIFF, LandXML surface (ng CivilCraft) o ilang spot elevation; hukayin ang building pad ng bahay kasama ang mga slope at cut / fill nito; ilatag ang driveway, walk at patio sa ibabaw nito; ibigay sa CivilCraft bilang LandXML.
keywords: lupa, ground, site, topograpiya, survey, points, PNEZD, contours, LAS, LAZ, LiDAR, GeoTIFF, DEM, elevation, spot elevation, grade, grading, pad, building pad, cut, fill, earthwork, daylight, slope, driveway, walk, patio, paving, LandXML, CivilCraft
from: 208298d6
---

## Ang gagawin mo

Ilagay ang bahay sa lugar nito. Nagiging bahagi ng model ang lupa: ipinapakita sa 3D, hinihiwa sa mga section at elevation, at may contours sa plano. Hinuhukay ang building pad sa ilalim ng bahay, sumusunod dito ang driveway at walk, at bumababa kasama nito ang footing.

## Ilagay ang lupa sa model

1. Buksan ang {{ui:Build}} at piliin ang {{ui:Terrain}}.
2. Alinman sa:
   - **Buksan ang survey file…**: survey points (PNEZD, PENZD o simpleng easting, northing, elevation; hiwalay sa comma, tab o space), contours sa DXF o DWG (polylines sa kanilang elevation, 3D polylines), LAS o LAZ scan (nananatili ang ground points, pinanipis hanggang mga isa bawat square meter), GeoTIFF o ASCII elevation grid, o **LandXML** surface gaya ng ine-export ng CivilCraft (nananatili ang sarili nitong points at triangles; kapag maraming surface ang file, itatanong ng BimCraft kung alin ang lupa; galing sa file ang units nito). Piliin muna ang units ng file (sinasabi ng LandXML ang sarili nitong units).
   - O mag-type ng **Spot elevation** (mula sa floor ng level na ito, kaya ang `-1'` ay isang talampakan sa ibaba nito) at i-click ang mga spot sa plano, baguhin ang elevation at mag-click pa, saka **Gawin ang lupa**. Sapat na ang tatlong spot para magsimula.

Ang survey coordinates na malayo sa model (state plane, UTM) ay inililipat sa ibabaw ng bahay, at itinatakda ang mga elevation para ang lupa sa bahay ay mga 8" sa ilalim ng unang floor. Ang **Itaas ang lupa** sa **Properties** ay nagwawasto niyan ng anumang halaga.

## Ang building pad

1. Piliin ang {{ui:Building pad}}.
2. Itakda ang **Margin** sa paligid ng bahay, gaano kalalim ang **pad sa ilalim ng floor** (8" sa ilalim ng slab, mas malalim sa crawlspace) at ang **Slopes** palabas sa umiiral na lupa (`2:1` = dalawang talampakan palabas sa bawat talampakang pataas o pababa).
3. Mag-point sa loob ng bahay at mag-click.

Pinapatag ang lupa sa ilalim ng bahay at palabas hanggang sa margin, saka umaakyat ang slope papunta sa burol (cut) at bumababa sa mababang bahagi (fill) hanggang magtagpo sa umiiral na lupa. Ang **Properties** ng lupa at ng pad ay nagbibigay ng cut at fill volumes. Ilipat ang mga pader at susundan ito ng pad.

## Driveway, walk at patio

Piliin ang {{ui:Paving}}, pumili ng **Walk**, **Driveway** o **Patio**, at i-click ang mga sulok. I-click ulit ang unang sulok, i-double-click o pindutin ang {{key:Enter}} para tapusin. Sinusundan ng paving ang tapos na grade; baguhin ang uri o kapal nito sa **Properties**.

## Bumababa ang footing sa grade

Kapag nasa model na ang lupa, sumusunod dito ang stem wall at crawlspace footing: sa kahabaan ng bawat pader, nananatili ang footing sa lalim nito sa ilalim ng lupang nasa labas, at tumatalon sa buong 8" na hakbang kung saan bumababa ang lupa (tingnan ang [Foundations sa ilalim ng mga pader](topic:foundations)).

## Ibigay sa CivilCraft

**LandXML para sa CivilCraft** (sa Terrain row, o sa **Properties** ng lupa) ay nagda-download ng umiiral na lupa at ng tapos na grade bilang LandXML file. Buksan ito sa CivilCraft para sa tunay na grading, drainage at earthwork.

## Mabuting malaman

- Kailangan ng lupa ng IFC4 model, tulad ng bawat bagong gusali.
- Lumalabas ang contours sa plano ng lupang level sa interval na itinakda sa **Properties** ng lupa; mas makapal ang bawat ikalima.
- Sine-save ang lupa bilang IFC terrain element (isang saradong triangulated surface, kaya nahihiwa ito ng mga section); kasama nitong sine-save ang pad at paving. Burahin ang lupa para magsimulang muli: mabubura kasama nito ang pad at paving nito.

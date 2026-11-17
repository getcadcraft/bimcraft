---
title: I-georeference gamit ang anumang projection
summary: Sabihin sa BimCraft kung aling map system ang nasa coordinates ng model, mula sa buong listahan ng EPSG, anumang UTM zone, o projection na ikaw mismo ang nagtakda, at gamitin ito para sa Location, map layer at point cloud.
keywords: projection, coordinate system, crs, epsg, utm, utm zone, custom projection, proj4, proj string, prj, wkt, georeference, georeferencing, map conversion, ifcprojectedcrs, my projections, latitude, longitude, easting, northing, lambert, gauss-kruger, state plane, national grid
from: 6894c1f2
---

Ang ilang plano ay iginuhit sa map system na wala sa maikling listahan: isang UTM zone, isang national grid, o isang projection na isinulat ng iba bilang text definition. Sinasabi ng {{ui:Measure}} › {{ui:Coordinate system…}} kung alin ang gamit ng model.

## Pumili ng system para sa model

1. Buksan ang model, piliin ang {{ui:Measure}}, saka {{ui:Coordinate system…}}.
2. Mag-type sa search box. Alinman sa mga ito ay gumagana:
   - isang numero ng EPSG: `32633` o `EPSG:2277`;
   - isang UTM zone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - mga salita mula sa pangalan: `lambert 93`, `mga zone 56`, `texas central`;
   - isang kahulugan ng projection: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opsyonal na may pangalan sa unahan (`My grid = +proj=…`);
   - ang teksto ng isang `.prj` file, o gamitin ang {{ui:Load a .prj file…}}.
3. Pumili ng resulta, saka {{ui:Use this system}}.

Ang pagpili ay nase-save sa model (isang property set na `CadCraft_CRS` sa proyekto), kaya muling bumubukas kasama ng model. I-save ang model para mapanatili ito. {{ui:Take it off the model}} ay bumabalik sa sinasabi ng file.

Kung ang iyong kahulugan ay nagbibigay ng parehong coordinates gaya ng isang nakalistang EPSG system, sinasabi ito ng BimCraft at ginagamit ang code na iyon; kapag ilang nakalistang system ang may parehong matematika, binabanggit din nito ang iba.

## My projections

Ang kahulugang idinikit mo, o ang .prj na iniload mo, ay maaaring itago gamit ang {{ui:Keep in My projections}}. Nasa device na ito (browser na ito) ang listahan, at iniaalok ito sa susunod na buksan mo ang picker.

## Ano ang gumagamit nito

- {{ui:Measure}} › {{ui:Location}} ay ginagawang latitude at longitude ang napiling punto sa pamamagitan ng system ng model. Dati itong humihinto na may tala kapag may pangalan ng map system ang file nang walang EPSG code; kapag may naka-save na pagpili, nagbibigay na ito ng sagot.
- Ang mga map layer sa ilalim ng model ay gumagamit ng parehong system. Ang point cloud o terrain file sa ibang system ay iniaalok ang system ng model (tingnan sa ibaba).
- {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}} › {{ui:Choose another system…}} ay nagtatakda kung ano pa ang iniuulat ng {{ui:Location}}: latitude at longitude sa anumang nakalistang geographic system, o easting at northing sa anumang projected, bukod sa sariling system ng model.

## Model na wala pa sa mapa

Kung walang map conversion ang file, ang pagpili ng system ay magbubukas ng {{ui:Place this model on the map}}. Mabubuksan mo rin ito mula sa {{ui:Measure}} › {{ui:Map origin…}}.

1. Ibigay ang origin ng model bilang eastings at northings sa system, o i-type ang latitude at longitude at piliin ang {{ui:Convert to eastings and northings}}.
2. Ibigay ang rotation papunta sa grid north (degrees, counter-clockwise; ang 0 ay nangangahulugang ang Y axis ng model ay tumuturo sa grid north) at ang taas ng origin.
3. Ang scale ay nagsisimula sa unit difference ng model at ng mapa (0.001 para sa model na nasa millimetre sa grid na nasa metre). Baguhin lang ito para sa combined ground-to-grid factor.
4. Piliin ang {{ui:Place on the map}}. Isang undo step ang nagsusulat ng IfcProjectedCRS at IfcMapConversion (IFC4). Hindi gumagalaw ang model mismo.

Walang alinman sa dalawang entity ang IFC2X3 file. Isinusulat ng BimCraft ang parehong numero sa paraang pinapayagan ng pamantayan: ang buildingSMART property set na `ePSet_MapConversion` at `ePSet_ProjectedCRS` sa proyekto, ang latitude at longitude ng site, at true north. Sinasabi ito ng dialog. I-save ang model para mapanatili ito.

## Model na nasa mapa na

Kapag nasa mapa na ang file at pumili ka ng ibang system, nagtatanong ang BimCraft:

- {{ui:Only change what Location reports}} ay pinananatili ang sariling georeference ng file at ginagamit ang pagpili mo para sa {{ui:Location}}, map layer at point cloud (kung gayon, binabasa ang mga numero ng model bilang nasa bagong system).
- {{ui:Move the model to this system}} ay muling isinusulat ang georeference: dumadaan ang origin sa projection (eastings, northings, taas, rotation at scale) at muling isinusulat ang IfcProjectedCRS (pangalan, datum, projection, zone, unit), kaya sinasabi ng naka-save na IFC ang bagong system. Nananatili ang lugar sa lupa: pinapanatili ng origin ang latitude at longitude nito. Hindi kailanman nagbabago ang mga element sa loob ng model; ang georeference lang.

Ipinapakita ng dialog ang lumang at bagong origin bago ka pumili. Ang paglipat doon at pabalik ay ibabalik ang origin sa loob ng isang millimetre.

## Point cloud at terrain sa ibang system

Ang cloud o survey file ay may sariling system (LAS, LAZ, E57, GeoTIFF) o wala. Kapag iba ito sa system ng model, iniaalok ng BimCraft ang {{ui:Reproject into the model's system}}. Inililipat ang mga punto nang batch-batch (sa worker kapag marami, para manatiling magagamit ang pahina), hindi ginagalaw ang file sa iyong computer, at sinasabi ng status line kung ano ang nagawa. Buksan muli ang file para bumalik sa sarili nitong system. Para sa cloud na bukas na, ang {{ui:Reproject to the model…}} sa cloud bar ay gumagawa ng pareho.

Kung walang sinasabing system ang file, nagtatanong ang BimCraft ng {{ui:Which system is this file in?}}: piliin ito gamit ang {{ui:Choose the system…}} at maaalala ang sagot para sa file na iyon sa device na ito. Iniiwan ng {{ui:Keep the file's own system}} ang mga punto gaya ng dati.

## Kapag may approximate

Nakalista ang mga problema sa dialog at sa panel na Problema, hindi kailanman tahimik:

- Lugar sa labas ng area na ginawa para sa system: gumagana ang mga numero, pero lumalaki ang distortion.
- Ang datum shift na nangangailangan ng grid file (NADCON, NTv2 at iba pa) ay hindi available. Ang mga system sa ibang datum ay inililipat gamit ang grid-free shift na nakalista sa EPSG registry, at ang resulta ay approximate sa nakasaad na accuracy, na ibinibigay ng mensahe sa metro.
- Ang punto na hindi maprojection ay iniiwan at binibilang; ang file na lampas sa size limit ay tinatanggihan, kasama ang nakasaad na limit.

:::tip
Ang map coordinates ay nangangailangan ng map conversion. Ang file na wala nito ay inilalagay sa mapa gamit ang {{ui:Map origin…}}.
:::

:::note
Ang paglipat sa pagitan ng datum na walang grid file ay tumpak hanggang ilang metro; sinasabi ng resulta ng Location kung gaano kalayo kapag alam ito ng catalog.
:::

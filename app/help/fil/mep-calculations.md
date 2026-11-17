---
title: Sukatin ang tubo at duct, suriin ang cable fill at lighting
summary: Suriin ang laki ng supply pipe at duct na may pressure drop, iruta ang mga cable sa cable tray at conduit at tingnan ang fill nila, at kalkulahin ang illuminance sa mga silid mula sa IES o EULUMDAT file. Naka-label ang mga default; i-type ang mga value ng code na may bisa.
keywords: pagsukat, pipe sizing, duct sizing, pressure drop, fixture units, demand, hunter, hazen-williams, velocity, friction, pantay na friction, fan pressure, damper, critical path, cable tray, conduit, fill, cable schedule, ies, ldt, eulumdat, photometry, illuminance, lux, uniformity, lighting calculation, power density, mep, calculations, mga problema
from: 9cb90815
---

## Ano ang gagawin mo

Iguhit ang mga tubo, duct, cable tray at conduit gaya ng dati, saka buksan ang pane na **Calculations**. Binabasa ng bawat tab ang model, nagpapakita ng table, at inililista ang mali bilang Problems sa ⚠ panel. Kapag may laking aayos sa isang Problem, binabago ng **Ilapat ang sizes** ang mga run sa iisang undo step.

Mga drafting aid ang mga ito. Naka-label sa screen ang bawat default, at wala sa mga ito ang code table: i-type ang mga numero mula sa pamantayang dinisenyuhan mo, at ipasuri ang resulta sa engineer na mananagot dito.

## Mga tubo

1. Pumili ng **system** key (malamig na tubig ay `cw`, mainit na tubig ay `hw`).
2. Itakda ang pinakamataas na velocity at, kung gusto mong suriin ang pressure, ang pressure sa source at ang pinakamababang pressure na kailangan ng fixture.
3. I-click ang {{ui:Suriin}}.

Bawat tubo ay nagdadala ng demand ng fixture units sa ibaba nito. Ang demand ay galing sa curve ng fixture units laban sa flow, ayon sa paraang inilarawan ni Hunter. **Ang built-in na curve ay halimbawa, hindi code table**; sinasabi ito ng Problems hanggang mag-type ka ng sarili mo. Ang friction ay Hazen–Williams, ang fittings ay loss coefficient, at ang rise ay nagkakahalaga ng 9.8 kPa bawat metro. Ang units ng fixture ay galing sa uri nito, o sa numerong itinakda mo gamit ang assistant tool na `loads_set`.

## Mga duct

Itakda ang system, ang friction rate (equal friction) o isang velocity, at anumang pagkawala ng coil, filter o silencer. Kumukuha ang mga terminal ng airflow nila mula sa `loads_set` sa diffuser. Ipinapakita ng table ang velocity at friction bawat piyesa, ang **fan pressure** sa critical path, at ang pressure na kailangang akuin ng damper ng bawat ibang terminal. Gumagamit ang fitting losses ng bilugan na default coefficient, hindi fitting database.

## Cable tray at conduit

Iguhit ang mga ito gamit ang Duct tool: ang mga system na **Cable tray** at **Conduit** ay sine-save bilang cable carrier, kaya binabasa ito ng ibang program bilang tray at conduit. Sa tab na Cables, i-paste ang cable list (tag, outside diameter sa mm, bilang, from, to). Ang `from` at `to` ay tag ng isang piyesa ng equipment o punto na `x,y,z` sa milimetro. Sinusundan ng mga cable ang pinakamaikling tuloy-tuloy na ruta sa mga tray at conduit; ipinapakita ng bawat run ang fill nito laban sa mga limit na tina-type mo, at nase-save ang schedule bilang CSV na may haba na kasama ang slack percentage at ang mga dulo.

## Lighting

Bigyan ang bawat luminaire ng IES (LM-63) o EULUMDAT na file gamit ang assistant tool na `photometry_set`. I-type ang mga target, ang spacing ng grid at ang taas ng workplane. Ang resulta ay **direct** illuminance lamang: walang inter-reflection at walang anino, kaya ito ay pinakamababang tantiya sa isang silid.

## Mga fire sprinkler

Ang add-on na **Fire sprinklers** ay may sariling tab; tingnan ang help nito.

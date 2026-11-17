---
title: Solar PV array, shading at yield
summary: Ilagay ang solar array sa bubong o sa lupa, lagyan ng anino mula sa model, tantyahin ang taunang enerhiya, sukatin ang mga string at gawin ang datos ng one-line diagram. Ipinapakita ang lahat ng input, at generic ang starter module at losses.
keywords: solar, pv, photovoltaic, array, module, bubong, shading, yield, kwh, kwp, string sizing, inverter, one-line, single line, tilt, azimuth, row spacing
from: adf4aaf3
---

## Ano ang gagawin mo

Buksan ang **Solar PV** pane. Pumili ng bahagi ng bubong (ang tilt at direksyon nito ay binabasa mula sa model) o maglatag ng ground array na may tilt at direksyon; ilalagay ang mga module sa loob na may setback at bibilangin, at ibibigay ang DC power sa kWp. Kapag inilagay ang array, isinusulat ito sa model bilang solar device, sa isang undo step.

## Shading, yield at string

- **Shading** ay nagpapadala ng ray mula sa bawat module papunta sa araw para sa karaniwang araw ng bawat buwan laban sa sariling geometry ng model, kaya binibilang ang mga kalapit na gusali, parapet at mga row sa harap. Tanging ang direktang sikat ng araw ang nababawasan, at ang bahagyang may-anino na array ay nawawalan ng kuryente ayon sa proporsyon nito.
- **Yield** ay nagbibigay ng kWh bawat buwan at taon, kWh bawat kWp, at ang performance ratio. Galing sa sarili mong buwanang kabuuan sa pahalang na ibabaw ang araw kung i-type mo ang mga ito. Kung wala, gumagamit ang pane ng clear-sky upper bound at sinasabi iyon. **Kunin ang klima mula sa NASA POWER** gamit ang button sa Yield tab: ipinapadala lamang nito ang latitude at longitude ng site, minsan lang, at iniingatan ang sagot sa computer na ito (sinuri mula sa browser noong 2026-10-30). Hindi pinapayagan ng PVGIS na basahin ng web page ang sagot nito, kaya nagbibigay ang tab ng link na nagbubukas ng buwanang datos ng PVGIS para sa site sa bagong tab; i-paste ang ipinapakita nito sa kahon at mapupuno ang labindalawang buwan.
- **Strings** ay sumusuri ng mga module bawat string laban sa voltage window ng inverter sa pinakamalamig at pinakamainit na araw, at ng mga parallel string laban sa current nito.
- **One-line** ay gumagawa ng datos ng diagram (array, combiner, disconnect, inverter, panel, utility) na may laki ng wire at fuse mula sa mga factor na tinype mo. Datos at SVG ito; maaaring ilagay ito ng Electrical add-on sa CadCraft bilang mga simbolo.

Ang module, inverter, losses at wire factor na kasama ng BimCraft ay mga generic na halimbawa, may label sa bawat resulta. I-type ang datos ng gumawa at ang mga code value na dinisenyo mo, at ipasuri ang disenyo sa taong nananagot dito.

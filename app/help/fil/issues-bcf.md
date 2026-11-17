---
title: Mga issue at BCF file
summary: I-save ang view ng model bilang issue (camera, mga piniling elemento, mga nakatagong elemento, section), ibahagi ito bilang BCF file sa ibang coordination tool, at buksan ang kanilang BCF file para makita ang kanilang mga issue.
keywords: bcf, bcfzip, issue, mga issue, topic, viewpoint, clash report, coordination, komento, snapshot, buksan ang bcf, i-save ang bcf, export, import
from: 2a6cf201
---

## Ano ang gagawin mo

Ituro ang problema sa model at itago ang view na nagpapakita nito, tapos ibigay ito sa isang BCF file, ang format na binabasa at isinusulat ng ibang coordination tool.

## Mga hakbang

1. Buksan ang IFC model at ayusin ang view: i-orbit ito, piliin ang mga elementong kasangkot, itago ang nasa daan, at hiwain ito gamit ang section plane o box.
2. I-click ang tab na {{ui:Issues}} sa kanan, tapos {{ui:Bagong issue mula sa view na ito}}.
3. I-type ang title, at komento kung gusto mo; pumili ng status; ilagay ang pangalan o e-mail mo (kung naka-sign in, awtomatikong ilalagay ang pangalan ng account mo; tingnan ang [Mga setting ng BimCraft](topic:settings#your-name-on-issues)). I-click ang {{ui:Gumawa ng issue}}.
4. I-click ang {{ui:Ipakita}} sa isang issue para ibalik ang view nito.
5. I-click ang {{ui:I-save ang BCF}} para i-download ang lahat ng issue bilang isang `.bcf` file.
6. Para makita ang mga issue na ginawa ng iba, i-click ang {{ui:Buksan ang BCF…}} at piliin ang kanilang `.bcf` o `.bcfzip` file.

## Ano ang dapat mong makita

- Bawat issue sa listahan kasama ang larawan ng view nito, ang title, status, may-akda at petsa.
- Ibinabalik ng {{ui:Ipakita}} ang camera, ang mga piniling elemento, kung ano ang itinago (o ang tanging ipinakita) at ang section. Hinahanap ang mga elemento sa pamamagitan ng GlobalId nila sa bawat bukas na model; sasabihin ng status line kung may ilan na wala roon.
- Ang section plane o box mula sa ibang tool ay ipinapakita kapag tumutugma ito sa axes ng model; ang nakatagilid o dagdag na plane ay ibinabalik bilang section volume (hanggang 6 plane). Itinatago ng issue ang unang box ng volume na may ilang box.

## Mabuting malaman

- BCF 2.1 ang file at pinananatili nito ang view sa sariling coordinates ng model, para mailagay ng ibang tool ang camera sa parehong lugar.
- Nananatili ang mga issue sa tab na ito hanggang i-save mo ang mga ito. Hindi nabubura ang listahan kapag nagbukas ka ng ibang model; buksan ang model na tungkol sa mga issue bago mo ipakita ang mga ito.
- Ang parallel (orthogonal) camera mula sa ibang tool ay ipinapakita gamit ang perspective camera ng viewer na ito, nakaatras para ang parehong bahagi ng model ang pumuno sa view.

## Mga karaniwang pagkakamali

- **Inilipat ng {{ui:Ipakita}} ang camera sa kakaibang lugar.** Ginawa ang issue sa ibang model o may ibang coordinates. Buksan muna ang tamang model.
- **Hindi mabubuksan ang file.** Hindi ito BCF zip, o sira ito; sasabihin ng status line kung bakit.

## Susunod

- [Itago, i-isolate at gawing transparent ang mga elemento](topic:hide-and-isolate)
- [Hiwain ang IFC model gamit ang section plane](topic:section-plane)

---
title: Suriin ang concrete member at gumawa ng seismic load
summary: I-set up ang mga bar ng concrete beam at column ng bukas na model, suriin ang mga ito ayon sa ACI 318-19, gumawa ng equivalent lateral force ayon sa ASCE 7-22 sa rigid floor, at tingnan ang storey drift. Tulong para sa engineer na susuri.
keywords: concrete, reinforced concrete, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, earthquake, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, rigid diaphragm, story weight, utilisation, structural, engineer, analysis, kongkreto, lindol
from: 2f342e72
---

Ang mga block na {{ui:Concrete members}} at {{ui:Seismic loads}} sa {{ui:Analysis}} tab ay sumusuri sa reinforced concrete beam at column ng bukas na IFC, at gumagawa ng pahalang na puwersa ng lindol sa mga floor ng frame nito. Pareho sila ng mga block ng DetailCraft, pinapatakbo pagkatapos ng analysis ng {{ui:Analysis}} tab, at sine-save sa IFC kasama ng iba pang analysis setting.

:::warning
Ang mga resulta ay **para sa pagsusuri ng isang engineer**: tulong lamang hanggang may makapagrepaso nito. Ang mga concrete check ay gumagamit ng first-order na puwersa (ang column sa frame na tinawag mong non-sway ay dinisenyo para sa pinalaking moment nito), walang sway magnification, walang torsion design, walang seismic detailing (ACI chapter 18) at walang tie detailing. Hindi kasama sa seismic load ang redundancy factor, ang vertical seismic effect, torsional amplification at P-delta effect. **Hindi pa nagagawa ang wind load**: wala sa reference page ng project ang mga wind chapter ng standard.
:::

## Ano ang binabasa ng BimCraft

Binabasa ng analysis ang mga beam, column at brace ng model kasama ang kanilang profile (tingnan ang [Suriin ang structural frame](topic:frame-analysis)). Inililista ng block na {{ui:Concrete members}} ang bawat section na ginagamit nila. Pindutin ang {{ui:Set up as concrete…}} sa isang section na kongkreto: kumukuha ang BimCraft ng rectangle mula sa area at stiffness ng profile (ang lapad b at lalim h na maaari mo pang baguhin), kaya ang section na hindi malapit sa rectangle (gaya ng rolled steel shape) ay magbibigay ng sukat na kailangan mong itama, o iiwanang hindi nagalaw.

Ang section na na-set up bilang kongkreto, at ang alinmang element na ang materyal ay pinangalanang kongkreto, ay sinusuri bilang kongkreto: E = 4700 √f′c, 2400 kg/m³, at bilang default ay may **cracked section** (column 0.70 Ig, beam 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Piliin ang {{ui:Gross sections}} para i-off ito. Kung walang mga setting na ito, sinusuri ang model nang eksaktong gaya ng dati.

## Bar, combination, check

Ibigay ang cover, ang top, bottom at side bar (o column cage) at ang tie ng bawat section, itakda ang f′c, fy, fyt, K, at sway o non-sway. Bigyan ng uri ang mga load case, pindutin ang {{ui:Make combinations}} (ASCE 7 §5.3.1), at saka {{ui:Check concrete}}: bawat member ay makakakuha ng utilisation, kulay na ipinapakita sa model. Ang mga member na lampas sa capacity, at ang storey drift na lampas sa limit nito, ay nakalista sa {{ui:Problems}} kasama ang kanilang clause; i-click ang isa para piliin ang element.

## Floor at seismic load

Sa block na {{ui:Seismic loads}}, kinukuha ng {{ui:Find floors}} ang mga antas kung saan nagtatagpo ang dalawa o higit pang beam; bawat isa ay nagiging rigid diaphragm. Binabasa ng {{ui:Take weights from cases}} ang seismic weight ng bawat floor mula sa mga case na binigyan mo ng factor. Punan ang SDS, SD1, S1, R, Ie, Cd, TL, ang system at ang risk category, saka {{ui:Make seismic cases}} (ASCE 7-22 12.8: period, base shear, distribution pataas sa mga floor, 5 % accidental torsion). Lalabas ang puwersa ng bawat storey at ang drift check (12.12) pagkatapos ng isang run. Ang parehong period at storey stiffness ay nagpapakain din sa lindol sa [Patakbuhin ang flood, wind o earthquake](topic:hazard-playback) kapag piniling pinagmulan ang analysis frame.

Ang slab at pader na kongkreto ay nagiging plate sa analysis, at kinukuwenta ng block na {{ui:Slab reinforcement}} ang bakal na kailangan nila bawat metro. Nasa paksa ng DetailCraft na may parehong pangalan ang mga detalye ng bawat check.

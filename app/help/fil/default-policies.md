---
title: "Mga Default Policy: itakda kung ano ang sisimulan ng bagong building"
summary: Sabihin nang isang beses kung aling wall type, mga palapag, unang sheet, LOD tag, units at tool ang sisimulan ng bagong building, para sa metric at imperial na project, at ibahagi ang mga policy sa buong opisina bilang maliit na file.
keywords: default, mga default, default policies, policy, pamantayan ng opisina, office defaults, template, bagong building, unang wall type, metric wall, masonry, LOD, level of development, unang sheet, paper, scale, levels, taas ng palapag, pangalan ng level, wall tool, units, ibahagi, export, import, json
from: 42379aa5
---

## Ano ang gagawin mo

Sabihin sa BimCraft kung ano ang dapat sisimulan ng bagong building, para hindi na kailangang baguhin ng sinuman sa opisina ang parehong bagay sa bawat pagkakataon. Ito ay add-on: naka-off ito hanggang i-on mo, at ang policy na hindi mo itinakda ay nananatili sa sariling default ng BimCraft.

:::note
Ito ay mga default para sa **bagong** building at **bagong** bagay. Hindi nababago ang project na sinimulan mo na.
:::

## Mga hakbang

1. Buksan ang Settings, pumunta sa {{ui:Add-ons}} at i-on ang {{ui:Default Policies}}.
2. Sa Settings, buksan ang tab na **BimCraft** at piliin ang {{ui:Default Policies}} sa listahan sa kaliwa.
3. Itakda ang mga policy na gusto mo. Bawat isa ay nagsisimula sa **sariling BimCraft**, kasama ang halaga nito sa bracket. Ang policy na may kahong **Metric** at **Imperial** ay kumukuha ng isang value para sa bawat uri ng project; punan lamang ang mga kailangan mo.
4. Walang Save button: bawat pagbabago ay nase-save habang ginagawa mo. Ang value na hindi magagamit ay tinatanggihan sa salita, at nananatili ang luma.
5. I-click ang {{ui:New building}}. Pinupunan ang dialog mula sa iyong mga policy, at ang bawat value na itinakda ng policy ay may **mula sa iyong Default Policies** sa tabi nito. Maaari mo pa ring baguhin ang alinman bago ang {{ui:Create}}.

## Ang mga policy

- **Units ng bagong building**: lilipat ang units sa value na ito sa Create.
- **Bilang ng levels**, **Level names** at **Level height**. Sa pangalan, binibilang ng `{n}` ang 1, 2, 3; ang `{n0}` ay 0, 1, 2; ang `{nn}` at `{nn0}` ay gumagawa ng pareho na may dalawang digit. Kaya ang `Floor {nn0}` ay nagbibigay ng Floor 00, Floor 01, Floor 02.
- **Unang wall type**: ang iginuguhit ng Wall tool muna. Maaaring magsimula ang metric na opisina sa Exterior masonry 300 mm, habang ang imperial na project ay nananatili sa Exterior 2×6.
- **LOD tag sa mga starter wall type**: ang level of development (LOD 100 hanggang 500) na ipinapakita ng siyam na starter type saanman nakalista ang isang type. Tingnan ang [Gumawa ng wall assemblies](topic:wall-assemblies).
- **LOD ng bagong gawang wall type**: ang tag na sinisimulan ng bagong type sa type editor. Maaari mo itong baguhin doon.
- **Unang sheet**: ang paper, scale, sheet number at pangalan nito (gamitin ang `{level}` para sa pangalan ng pinakamababang level), o walang unang sheet.
- **Annotation sizes on paper** (Settings › Global › Default Policies): ang taas ng opisina, sa milimetro gaya ng naka-print, para sa notes, dimension text, tags, pangalan ng silid, letra ng grid bubble, view title at schedule text. Kinukuha ng bagong building ang mga ito sa Create at pinapanatili sa file nito. Tingnan ang [Gumuhit sa full size, mag-annotate ayon sa scale](topic:annotation-sizes).
- **Tool na aktibo pagkatapos ng Create**: Select, gaya ng ginagawa ng BimCraft nang mag-isa, o Wall, para ang unang dalawang click sa plano ay agad gumuguhit ng pader.

## Schedule layout: pamantayan ng opisina

Sa **Settings › Global › Default Policies**, sa ilalim ng **Schedule layout (pamantayan ng opisina)**, itakda kung paano pinagpapangkat ang bawat schedule, kung may subtotal at total ito, ang title nito, at ang case ng column headings nito. Ang bawat schedule na hindi nagsasaad ng sarili nito ay kumukuha ng mga ito, sino man ang nag-set up. Tingnan ang [Ayusin, i-save at i-export ang schedule](topic:schedule-layouts).

## Ibahagi sa buong opisina

1. Sa Settings, buksan ang tab na **Global** at piliin ang {{ui:Default Policies}}.
2. I-type ang **Office name** kung gusto mo. Isinusulat ito sa file.
3. I-click ang {{ui:Save to a file}}. Makakakuha ka ng maliit na file na nagtatapos sa `.ccdefaults.json`.
4. Sa ibang computer, i-on ang add-on, buksan ang parehong lugar, at i-click ang {{ui:Load from a file}}. Papalitan ng mga policy ng file ang mga nasa computer na iyon.

Nasa tab na Global din ang **Unit system of a new project**, na sakop ng bawat app na may add-on, at ang {{ui:Reset every policy}}. Ang {{ui:Reset to BimCraft's own defaults}} sa tab na BimCraft ay nagbubura lamang ng sa BimCraft.

## Good to know

- Plain at bukas na JSON ang file: listahan ng mga pangalan at value ng policy. Ang policy na pinangalanan ng file na hindi alam ng bersyong ito ay hindi isasama at pinangalanan sa mensahe; ang iba ay naglo-load pa rin.
- Nakatago ang mga policy sa browser na ito, para sa bawat CadCraft app sa computer na ito. Hindi ito nakaimbak sa building file, at hindi nagsi-sync sa pagitan ng mga computer: gamitin ang file.
- Ang LOD tag ng starter type ay galing sa policy sa computer na ito. Ang type na ginawa mong kopya ng starter ay dala ang tag nito sa building file.
- Walang precision setting ang BimCraft, kaya walang precision policy dito.
- Ang building na sinimulan mula sa template ay nagdadala ng sariling levels at sheets ng template. Nalalapat pa rin ang wall type at units policy.
- I-off ang add-on at bumabalik ang lahat sa sariling BimCraft. Nananatili ang iyong mga policy para kapag in-on mo ulit.

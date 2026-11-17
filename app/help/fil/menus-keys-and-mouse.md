---
title: Mga menu, key at mouse
summary: Pumili ng istilo ng menu na tugma sa paraan ng iyong pagtatrabaho, bigyan ng sarili mong key ang anumang command, ilipat ang mga command sa pagitan ng mga menu, at itakda kung ano ang gagawin ng wheel at ng bawat mouse button.
keywords: istilo ng menu, mga menu, menu bar, ribbon, command line, mga keyboard shortcut, hotkeys, keys, customize, remap, rebind, mouse, wheel, invert, direksyon ng zoom, middle button, pan, orbit, dalawang-letrang key, export, import, pagpapalit, pamilyar
from: a424e836
---

Pareho ang mga command ng BimCraft anuman ang paraan ng pag-abot mo sa mga ito. Ang **istilo ng menu** ay nagtatakda lamang kung saan sila nakalagay sa screen, kung ano ang tawag sa mga ito roon at aling mga key ang nagpapatakbo sa mga ito, kaya maaari mong panatilihin ang mga nakasanayan mo. Pumili ng isa sa {{ui:Mga setting}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Mga menu, key at mouse}}; agad itong magbabago, at natatandaan ito ng browser na ito.

## Ang limang istilo

| Istilo | Ang makukuha mo |
|---|---|
| {{ui:CadCraft}} | Sariling toolbar at key ng BimCraft ({{key:W}} Pader, {{key:D}} Pinto, {{key:N}} Bintana, {{key:X}} Section, {{key:F}} fit). Ang panimulang istilo. |
| {{ui:Home design}} | Isang menu bar (File, Edit, Build, Library, 3D, CAD, Tools, View) sa ibabaw ng isang hilera ng building tool, ayon sa ayos ng mga residential home-design program. Ganoon din ang mga single key, dagdag ang {{key:Mod+L}} para sa library, {{key:F9}} para sa 3D view, {{key:F10}} para sa plano at {{key:F11}} para sa pareho. |
| {{ui:BIM ribbon}} | Mga tab ng malalaking button (Architecture, Insert, Annotate, Modify, View, Output) na may File menu at mga quick button sa kanan. Mga two-letter key: {{key:W}} tapos {{key:A}} para sa Pader, {{key:D}} {{key:R}} para sa Pinto, {{key:W}} {{key:N}} para sa Bintana, {{key:S}} {{key:C}} para sa Section, {{key:Z}} {{key:F}} para sa fit. Ang middle button ay nag-pan; ang {{key:Shift}} at ang middle button ay nag-orbit. |
| {{ui:Drafting classic}} | Maliit na ribbon at isang command line, para sa mga taong nagta-type ng command: WALL, DOOR, WINDOW, ROOF, U (undo), ZOOM, SECTION, PLOT, INSERT, HELP. Magsimulang mag-type kahit saan at mapupunta ang mga letra sa command line; ang {{key:Enter}} ang nagpapatakbo, ang {{key:Enter}} sa walang laman ay inuulit ang huling command, at nililinis ito ng {{key:Esc}}. |
| {{ui:Viewer}} | Para sa pagbukas at pagsusuri ng mga model sa halip na pagguhit ng mga ito: mga menu na {{ui:File}}, {{ui:View}}, {{ui:Show}}, {{ui:Check}} at {{ui:Edit}} sa ibabaw ng isang hilera ng viewing tool (fit, top, front, side, section, measure, hide, isolate, see-through, show all, walk). Nasa menu na {{ui:Model}} sa dulo ang mga building tool. Ang parehong key gaya ng sariling istilo ng BimCraft. |

Lumalabas ang mga menu at ribbon kapag bukas na ang isang model o nagsimula ka ng bagong gusali; bago iyon, ang panel sa kaliwa ang nagbubukas ng mga file at nagsisimula ng mga gusali.

:::tip
Ang key na bahagi ng sariling layout ng BimCraft pero hindi ng istilong pinili mo ay walang gagawin, at sasabihin ng status line kung saan napunta ang command nito (halimbawa: "Sa BIM ribbon, Section ay SC"). Laging nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at ng mga arrow, at pinananatili ng tool na tumatakbo ang sarili nitong key: {{key:R}} at {{key:Tab}} habang naglalagay, {{key:W}} {{key:A}} {{key:S}} {{key:D}} habang naglalakad, {{key:H}} gamit ang door at window tool, at mga numero habang nagta-type ng haba.
:::

## Gawing sa iyo ito

1. Pumili ng istilong pinakamalapit sa gusto mo, saka i-click ang {{ui:I-customize…}}.
2. Sa {{ui:Mga key at menu}}, hanapin ang isang command (nakakatulong ang search box). I-click ang {{ui:Magdagdag ng key}} at pindutin ang key, o dalawang key na sunod-sunod para sa dalawang-letrang key. I-click ang isang key para alisin ito.
3. Sa menu bar o ribbon, inililipat ng {{ui:Kung saan ito nakalagay}} ang command sa ibang menu o panel, o sa {{ui:Keys lamang}}.
4. Sa {{ui:Mouse}}, itakda ang wheel, ang mga button na nag-pan sa plano, at kung ano ang gagawin ng bawat button sa 3D view.
5. Bigyan ito ng pangalan at i-click ang {{ui:I-save}}.

Ang pag-save ng built-in na istilo ay gumagawa ng sarili mong kopya ("My Home design"); hindi kailanman nagbabago ang built-in. Ang key na ibinigay sa dalawang command, o ang key na tatakbo bago pa ma-type ang dalawang-letrang key, ay ipinapakita sa pula at kailangang ayusin bago mo ma-save.

## Mouse

- **Mouse wheel**: {{ui:Ang pag-scroll pataas ay nag-zoom in}} (ang panimula) o {{ui:Ang pag-scroll pataas ay nag-zoom out}}, at kung gaano kabilis. Ang pinch sa trackpad ay laging nag-zoom sa direksyon ng paggalaw ng mga daliri mo.
- **Pan the plan and drawings with**: alinman sa kaliwa, gitna at kanang button. Nag-pan din ang {{key:Space}} at drag; ang kaliwang drag ay nag-pan lamang kung saan hindi pipiliin o iguguhit ng click.
- **Drag in the 3D views**: ang {{ui:Sariling setting ng bawat view}} ay pinananatili ang mga button ng BimCraft (kaliwa ang nag-oorbit, kanan ang nag-pan). O itakda ang bawat button na mag-orbit, mag-pan, mag-zoom o walang gagawin; ang {{key:Shift}} kasama ng button ay nagpapalitan ng orbit at pan. Ang click na walang drag ay pumipili pa rin.

## Dalhin mo ito

Ise-save ng {{ui:I-export}} ang istilong ginagamit bilang maliit na `.ccinput.json` na file; idadagdag ng {{ui:I-import…}} ang isa, mula sa ibang computer o sa katrabaho. Ang na-import na file ay maaari lamang tumuro sa sariling command ng BimCraft: ang anumang iba pa rito (command na wala sa bersyong ito, key na hindi gumagana rito) ay iniiwan at binibilang sa status line. Binubura ng {{ui:Burahin ang istilong ito}} ang isa sa sarili mong istilo.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Gamitin ang istilong ito sa bawat app}} sa ilalim ng mga style card ay nagpapabukas ng bawat app sa katugmang istilo nito (sariling toolbar, menu bar, ribbon o Drafting classic; ang {{ui:Viewer}} ay sa BimCraft lamang at walang katugma sa ibang app), kasama ang mga pagbabagong ginawa mo sa bawat app; ang app na walang katugmang istilo ay pinananatili ang sarili nito. Ang pagpili ng ibang istilo sa isang app ay nagbabago lamang sa app na iyon.
:::

Kaugnay: [Keyboard at mouse](topic:keyboard) · [Mga setting ng BimCraft](topic:settings) · [Galing sa ibang BIM at drawing program](topic:coming-from)

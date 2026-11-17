---
title: Mga pader mula sa tinrace na drawing
summary: Gawing mga pader, pinto at bintana sa isang level ang DWG o DXF plan, at panatilihin ang drawing sa ilalim ng plan bilang reference.
keywords: dwg, dxf, trace, traced, import plan, convert, cad to bim, 2d to 3d, pader mula sa linya, layers, blocks, pinto mula sa blocks, underlay, reference drawing, background, xref, drafting app
from: 3bf213f1
---

## Ano ang gagawin mo

Gamitin ang plan na iginuhit mo (o ng iba) sa drafting app bilang simula ng model: nagiging mga pader ang mga linya nitong pader, at nagiging mga pinto at bintana ang mga block nitong pinto at bintana.

## Mga hakbang

1. I-on ang {{ui:Draw}} at piliin ang level na ipinapakita ng drawing sa listahan ng level ng plan.
2. Piliin ang {{ui:Build}} › {{ui:From a drawing…}}, pagkatapos ang {{ui:Choose a drawing…}} at piliin ang DWG o DXF.
3. Sa dialog:
   - **Mga unit ng drawing** ay galing sa drawing; pumili ng iba kung mali ang mga ito (ang plan na iginuhit sa feet pero binasa bilang inches ay labindalawang beses na mas maliit).
   - **Mga layer kasama ng mga pader**: lagyan ng tsek ang mga layer kung nasaan ang mga linya ng pader. Ang mga layer na ang pangalan ay may "wall" ay nilalagyan ng tsek para sa iyo.
   - **Ang mga linya ay**: **magkabilang face ng bawat pader** (ang karaniwang paraan ng pagguhit ng plan: ang bawat pares ng magkatapat na linya na hanggang 600 mm ang layo ay nagiging isang pader na kasing kapal ng puwang), **ang mga center line ng mga pader**, o **isang face** na may pader sa kaliwa o kanan nito. Sa center line o isang face, itinatakda ng wall type ang kapal.
   - **Uri ng pader** at **Taas ng pader**, gaya ng para sa tool na {{ui:Wall}}.
   - **Blocks**: pumili ng uri ng pinto o bintana para sa bawat block na pinto o bintana, o iwanan ito. Ang mga block na ang pangalan ay may "door" o "window" ay pinipili para sa iyo. Bawat isa ay inilalagay sa pader na kinalalagyan nito, kasing lapad ng block sa kahabaan ng pader; bumubukas ang pinto sa gilid kung saan iginuhit ang swing nito.
   - **Saan ito pupunta**: sa sariling coordinates ng drawing, o may kaliwang-ibabang sulok nito sa origin ng plan.
   - **Panatilihin ang drawing sa ilalim ng plan ng level na ito**: iwanang naka-tsek para makita ang drawing bilang manipis na linya sa ilalim ng ginawa mo.
4. Sinasabi ng linya sa ilalim ng mga pagpipilian kung ilang pader, pinto at bintana ang gagawin nito. I-click ang {{ui:Make them}}.

## Ano ang makikita mo

- Ang mga pader, pinto at bintana sa level, nakadugtong kung saan sila nagtatagpo, kasama ang mga silid na isinasara nila; iisang hakbang ang lahat ng ito, kaya binabawi ito ng {{key:Mod+Z}}.
- Ang drawing bilang manipis na linya sa ilalim ng plan. Inililista ng {{ui:Build}} › {{ui:From a drawing…}} ang mga drawing na naka-save sa level, bawat isa ay may {{ui:Remove}}; ang pag-alis ng isa ay nag-iiwan ng mga pader.
- Sa IFC file, ang naka-save na drawing ay isang annotation sa level (ang mga linya nito), kaya ipinapakita rin ito ng ibang BIM program.

:::note
Gumagana rin ang PDF o scan: tingnan ang [Mga pader mula sa set ng plan](topic:walls-from-plans). Hindi isinasama ang mga arc (tuwid na pader ang iginuguhit ng BimCraft), gayundin ang mga linyang nasa loob ng block. Ang mga linyang walang kapares sa "magkabilang face" ay binibilang sa dialog at hindi isinasama: iguhit ang mga pader na iyon gamit ang tool na {{ui:Wall}}, o ayusin ang mga ito gamit ang {{ui:Modify}} › {{ui:Trim / extend}} (tingnan ang [Trim, extend at join ng mga pader](topic:trim-extend-walls)).
:::

:::tip
Tinrace sa ibabaw ng scan sa drafting app? Buksan din dito ang scan at suriin ang mga pader laban dito: tingnan ang [Model mula sa scan](topic:model-from-a-scan).
:::

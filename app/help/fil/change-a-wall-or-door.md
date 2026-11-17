---
title: Baguhin ang pader, pinto o bintana
summary: I-click ang iginuhit na pader, pinto o bintana at baguhin ang type, laki, taas, o lugar nito sa Properties, o i-drag ito sa plan; bawat pagbabago ay isang undo step.
keywords: square up, square, 90, tamang anggulo, skew, angle, ortho, laki ng silid, inside face, outside face, sukatin mula sa, distansyang ililipat, distansyang na-type, curved, arc, arc height, radius, location line, justification, baguhin, i-edit, properties, wall type, thickness, length, height, base offset, top, level, flip, outside, laki ng pinto, laki ng bintana, sill, distansya, ilipat, grip, i-drag, baguhin ang type, marami
from: 63052d5d
---

## Ano ang gagawin mo

Baguhin ang iginuhit mo: pumili ng pader, pinto o bintana, pagkatapos ay mag-type ng bagong numero sa **Properties** o i-drag ito sa plan. Susunod ang plan at ang 3D view, muling magdurugtong ang mga sulok, at mananatili sa kanilang mga pader ang mga pinto at bintana.

## Baguhin ang pader

1. Kapag naka-on ang {{ui:Draw}} at naka-on ang {{ui:Select}}, i-click ang pader sa plan (o sa 3D view).
2. Magpapakita ang **Properties** ng kahon na may mga numero ng pader. Baguhin ang isa at pindutin ang {{key:Enter}}:
   - **Uri ng pader**: ibang isa sa mga starter type. Nagbabago ang kapal at mga layer kasabay nito.
   - **Kapal**: anumang kapal. Pinapanatili ng type ang iba nitong layer, at ang pangunahing layer nito (ang studs o block) ang sumasagot sa pagkakaiba, halimbawa "Exterior 2×6, 200 mm".
   - **Sukatin mula sa**: **Center line**, **Inside face** o **Outside face**. Ang **Haba** at **Laki ng silid** ay binabasa at itinatakda mula rito. Ang Outside face ang ipinapakita ng mga dimension ng plan.
   - **Haba**: gumagalaw ang dulo ng pader sa kahabaan ng linya nito. Ang pader na nakadugtong sa dulong iyon ay gumagalaw nang tuwid sa sarili nito at pinapanatili ang anggulo nito.
   - **Laki ng silid** (kapag may katabing pader sa kabila ng silid): i-type ang sukat na gusto mo. Gumagalaw nang tuwid ang pader na ito, at umuunat ang mga nakadugtong na pader para sumunod.
   - **Ilipat nang tuwid**: i-type kung gaano kalayo ililipat ang pader nang tuwid sa sarili nito: ang plain na numero ay ilalabas ito, ang negatibong numero ay papasukin ito.
   - **Anggulo sa nakadugtong na pader**: ang anggulo sa pader na nakadugtong sa simula nito. I-type ang 90 para gawing tuwid. Ang pader na walang nakadugtong ay nagpapakita ng **Direksyon**, sa degrees mula sa silangan.
   - {{ui:Square up}}: ibinabalik sa tamang anggulo ang mga pader na konektado sa isang ito, sa direksyong tinatakbuhan ng karamihan sa kanilang haba. Gumagana ito sa buong konektadong silid o layout, alinman sa mga pader na piliin mo. Ang pader na higit sa 10 degrees ang layo sa tamang anggulo ay nananatili; ligtas kaya ang nakatakda sa 45 degrees. Binabawi ng isang {{ui:Undo}} ang lahat.
   - **Taas ng pader**: ang **Hanggang sa level sa itaas** ay sumusunod sa level na iyon; ang **Hanggang sa Level 3** (at anumang level pa sa itaas) ay gumagawa ng pader na dumadaan sa mga level sa pagitan; ang pag-type ng taas ay nagtatakda kung gaano kalayo sa ibaba o itaas ng level na iyon ang tuktok. Ang **Nakapirming taas** ay nananatili sa numerong i-type mo. Ang **Dumadaan sa** ay naglilista ng mga level na dinadaanan ng ganitong pader: iginuguhit itong mas magaan sa kanilang plan, nagsasara roon ang mga silid laban dito, at maaaring ilagay roon ang mga pinto at bintana mula sa mga plan na iyon. Ginagalaw at binubuo ito sa level kung saan ito nagsisimula.
   - **Base offset**: gaano kataas sa level nagsisimula ang pader. Nananatili pa rin sa dating lugar ang tuktok nito.
   - **Labas**: ang {{ui:Flip}} ay ilalagay ang mga panlabas na layer sa kabilang face.
   - **Location line**: **Center line**, **Outside face**, **Inside face**, **Left face** o **Right face**. Walang nagagalaw kapag binago ito. Mamaya, kapag lumapad ang pader (ayon sa type o **Kapal**) o na-flip ang labas nito, mananatili ang location line at lalaki o magfa-flip ang pader sa paligid nito. Sumusunod ang tuwid na pader na sumasalubong dito sa sulok, kaya nagsasara pa rin ang sulok. Ipinapakitang dashed sa plan ang location line ng napiling pader. Pumili ng ilang pader para itakda ito para sa lahat ng mga ito.
   - **Arc height** (mga kurbadong pader): gaano kalayo sa tuwid na linya bumabaluktot ang gitna. Ang 0 ay gagawing tuwid; ang negatibong halaga ay bumabaluktot sa kabilang panig. Ipinapakita ang radius sa tabi nito.
3. Ang bawat pagbabago ay isang hakbang sa **Mga pagbabago**; binabawi ito ng {{ui:Undo}}.

## I-drag ang pader sa plan

Kapag may napiling isang pader, nagpapakita ito ng tatlong grip: isang parisukat sa bawat dulo at isang bilog sa gitna.

- I-drag ang isang dulo para pahabain, paikliin, o paikutin ang pader. Nagsa-snap ito gaya ng tool na Wall, at kumakapit nang tuwid sa pader na nakadugtong sa kabilang dulo kapag nasa loob ka ng 3 degrees; pinapanatili ito ng {{key:Shift}} sa mga axis ng plan.
- Pinapanatili ng mga pader na nakadugtong sa dulong i-drag mo ang anggulo nila: dumudulas ang mga dulo nila sa sarili nilang linya para magtagpo sa bagong linya ng pader, kaya walang nagiging hilig. Pindutin ang {{key:Mod}} para sa malayang drag (sumasama sa iyo ang dulo ng nakadugtong na pader at iyon ay umiikot), o ang {{key:Alt}} para putulin ang mga dugtong sa pader na ito.
- I-drag ang gitna para ilipat ang buong pader nang tuwid sa sarili nito, alinmang direksyon ang i-drag mo. Dumudulas ang mga sulok nito sa mga nakadugtong na pader, kaya pinapanatili ng mga pader na iyon ang anggulo nila.
- Pindutin ang {{key:Mod}} habang nag-di-drag sa gitna para sa malayang galaw, kapag gusto mong putulin ang anggulo. Ibinabalik ito ng {{ui:Square up}}.
- Habang hawak ang isang grip, i-type ang distansya at pindutin ang {{key:Enter}} (o bitawan): eksaktong ganoon kalayo ang pader, sa paraang nagdi-drag ka. Binibitawan ng {{key:Esc}} ang galaw.
- Ang napiling kurbadong pader ay nagpapakita ng grip sa mga dulo at ng bilog na grip sa gitna ng arc nito. I-drag ang bilog na grip para baluktutin ito.
- Nananatili sa pader ang mga pinto at bintana. Ang pader na masyadong maikli para sa nilalaman nito ay tinatanggihan ng "Hindi ito kasya sa pader na iyon."

## Baguhin ang pinto o bintana

1. I-click ang pinto o bintana sa plan.
2. Sa **Properties**: **Type** (ibang pinto o bintana ng parehong uri), **Lapad**, **Taas**, **Sill** (bintana), **Mula sa simula** at **Mula sa dulo** (ang distansya mula sa bawat dulo ng face ng pader hanggang sa gilid nito), **Mga hinge** {{ui:Flip}} (mga pinto na may isang dahon at casement na bintana; ang sliding, pocket, barn, at bifold na pinto ay nagsasabing **Bumubukas sa** sa halip; ang fixed, hung, at picture na bintana at double door ay walang ganito), at **Umiikot sa** (mga pinto) o **Gilid ng frame** (mga bintana) {{ui:Flip}}.
3. O i-drag ito sa kahabaan ng pader nito, o papunta sa ibang pader: tingnan ang [Mga pinto at bintana](topic:doors-and-windows).

## Baguhin ang ilan nang sabay

Pumili ng ilang pader (o ilang pinto, o ilang bintana) gamit ang {{key:Shift}}+click o {{key:Mod}}+click. Nag-aalok ang **Properties** ng mga pareho nilang katangian: **Baguhin ang type…**, ang taas, ang laki. Isang pagbabago ang nagtatakda sa lahat, at isang {{ui:Undo}} ang bumabawi sa buong pagbabago.

## Mabuting malaman

- Ipinapakita ang mga numero sa {{ui:Units}} na pinili sa toolbar.
- Ang mga pader, pinto at bintana mula sa ibang program ay nagpapakita ng kanilang IFC data sa **Properties** gaya ng dati, nang walang kahon na ito.

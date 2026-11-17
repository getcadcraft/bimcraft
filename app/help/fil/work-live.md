---
title: Magtrabaho sa iisang model nang sabay gamit ang Live TeamWork
summary: Ano ang nagbabago sa BimCraft habang nasa Live TeamWork session ka mula sa CadCraft Studio: ang mga pag-edit ng lahat sa parehong IFC model, ang sarili mong undo, at pagsali mula sa browser sa parehong network.
keywords: live, live teamwork, studio live, magkasama, mag-collaborate, session, ibahagi live, sumali, ifc, properties, palitan ang pangalan, cursor, pointer, makita ang isa't isa, mga pangalan, kulay, pagpili, undo, host
from: 32061b72
---

## Ano ang matututunan mo

Ano ang nangyayari sa isang IFC model habang ilang tao ang sabay-sabay na nag-e-edit nito. Sinisimulan at sinasalihan ng CadCraft Studio ang Live TeamWork session (Ibahagi, Sumali); ang pahinang ito ay tungkol sa mismong model.

## Sabay-sabay ang pag-edit ng lahat

Ang model ng host ay mapupunta sa lahat ng sumasali. Palitan ang pangalan ng mga element, baguhin ang kanilang property value, ilagay, palitan o alisin ang mga library item at element gaya ng dati. Lumalabas agad ang sarili mong pag-edit; ang sa iba ay lumalabas ilang sandali matapos nila itong gawin. Kapag binabago ng pag-edit ang nakikita mo (element na nailagay o naalis), muling iginuguhit ng BimCraft ang model at pinapanatili ang view mo.

- **Dalawang tao ang nagbago ng iisang element:** ang mas huling pagbabago sa parehong linya ng model ang mananaig. Ang property set na ibinabahagi ng ilang element ay kinokopya para sa element na ine-edit mo, gaya ng dati, kaya nananatili ang kanilang mga value.
- **Ang element na kakaalis lang ng isang tao** ay hindi na maaaring i-edit: binabawi ang pag-edit mo, at sinasabi ng status bar kung bakit.
- Ang bagong linya ng bawat tao sa model ay may sariling numero, kaya hindi kailanman nagkakaroon ng iisang numero ang dalawang tao.

## Makita ang isa't isa

Bawat isa sa session ay may sariling kulay. Sa 3D view makikita mo ang pointer ng bawat tao bilang arrow sa kanyang kulay, may pangalan sa tabi, nasa element na tinuturo nila, at may dashed box sa kanilang kulay sa paligid ng bawat element na napili nila.

Ang mga pointer, pangalan at pagpili ay para lamang sa session: hindi sila nise-save sa file at hindi napupunta sa undo ng sinuman. Dumudulas sila papunta sa kinaroroonan ng bawat tao, kaya maayos din ang galaw nila sa mabagal na koneksyon.

## Ang undo ay bumabawi sa sarili mong gawa

{{ui:Undo}} ay binabawi ang sarili mong huling pag-edit at iniiwan ang sa iba. Kapag may nagbago ng parehong bagay mula noon, walang nababawi at sinasabi ng status bar kung sino.

## Sumali mula sa browser

Ang kasamahang walang Studio ay maaaring i-scan ang larawan sa ilalim ng code ng host gamit ang phone, tablet o computer sa parehong network. Magbubukas ang BimCraft sa browser at bubuksan ang model ng host kapag pinapasok ka na ng host. Ang invite link ay nagpapahintulot sa isang tao na sumali mula sa ibang network: kailangan ng host ng Team Cloud Plan seat para sa app, libre sumali ang iba, at gumagana lamang ang link habang bukas ang session ng host.

## Kapag natapos ang session

Ang host lamang ang nagse-save ng model. Ang iba ay nagpapanatili ng hindi na-save na kopya: i-save bilang IFC kung gusto mo itong itago.

:::note
Ang unang model lamang sa eksena ang ibinabahagi. Ang pagbubukas ng ibang file habang may session ay mag-iiwan ng session sa window na iyon.
:::

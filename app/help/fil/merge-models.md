---
title: Pagsamahin ang mga edit ng dalawang tao sa isang model
summary: Hayaan ang git, Fossil o Mercurial na pagsamahin ang dalawang na-edit na kopya ng parehong IFC model, bawat object, para makapagguhit ang dalawang tao sa iisang gusali at maisama ang kanilang gawa.
keywords: merge, git, fossil, mercurial, version control, conflict, three-way, cadcraft merge, gitattributes, ifc, globalid, team, dalawang kopya, branches
from: 50733df8
---

Dalawang tao ang kumuha ng kopya ng parehong gusali; isa ang gumuguhit sa east wing at isa sa west wing, at kalaunan kailangang maging iisa ang mga kopya. Kung magkaibang object ang hinawakan nila, maaaring gawin ito ng isang program sa halip na tao.

## Ano ang nagpapagana nito

Ang bawat pader, pinto, level, room at property set sa isang IFC file ay may GlobalId na hindi nagbabago. Hinahanap ng merge ang mga object sa pamamagitan ng id na iyon, hindi sa numerong ibinibigay ng file (`#123`), dahil nagbabago ang mga numero kapag nagse-save ang isang program. Ang mga bahaging nakasabit sa isang object na walang sariling id (placement, shape, units) ay inihahambing ayon sa laman nila.

Dapat parehong pareho ang IFC version ng dalawang kopya (2x3, 4 o 4.3). Pinananatili ng merge ang file mo gaya ng dati, ang ayos at mga numero nito, at idinadagdag ang bago, kaya ang git diff ng merge ay nagpapakita lamang ng binago ng merge.

## I-set up

Kailangan ng git ng dalawang linya, minsan lang bawat repository:

```
# .gitattributes
*.ifc merge=cadcraft

# minsan lang, sa bawat computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Kung walang git, patakbuhin ang `cadcraft merge <base> <ours> <theirs>`. Ang Fossil at Mercurial ay tumatanggap ng parehong tatlong file sa sarili nilang merge-tool setting. Walang ina-upload; lahat ay tumatakbo sa computer mo.

## Ang mga patakaran

- Ang attribute na binago sa isang panig lamang ay kinukuha. Ang parehong pagbabago sa magkabilang panig ay kinukuha nang isang beses.
- Ang parehong attribute na binago sa dalawang paraan (ang parehong level na pinalitan ng pangalan sa dalawang paraan) ay **conflict**: mananatili ang panig mo at nakalista ang dalawang bersyon sa report. Buksan ang resulta at ayusin ito nang manu-mano.
- Ang listahan ng mga bagay (ang mga pader ng isang level, ang mga property ng isang set) ay sinasama bilang set: pinananatili ang idinagdag ng alinmang panig, at tinatanggal ang tinanggal ng alinmang panig. Ang dalawang taong kapwa nagdaragdag ng pader sa iisang level ay hindi nagkakaconflict.
- Ang object na idinagdag sa alinmang panig ay pinananatili, kasama ang shape at property nito. Tinanggal sa isang panig at hindi ginalaw sa kabila: tinanggal. Tinanggal sa isang panig at binago sa kabila: tinanggal, at iniulat.
- Ang timestamp at author ng file, at ang owner history ng bawat object, ay nananatiling sa iyo.

Buo ang pagsasama ng geometry: ang shape ng pader ay galing sa isang panig, hindi kailanman pinaghalo point by point. Hindi sinasama ang zipped IFC at IFCX na file. Pagkatapos ng merge, buksan ang resulta sa BimCraft at tingnan ang panel na {{ui:Mga problema}} bago ka mag-save.

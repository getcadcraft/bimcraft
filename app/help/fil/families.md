---
title: Mga family at ang kanilang mga laki
summary: Ang mga pinto, bintana at furniture ay nasa mga family. Bawat laki ng family ay isang type sa IFC file, kaya maikli ang listahan ng type sa BimCraft habang nababasa ng ibang program ang mga simpleng type.
keywords: family, families, type, types, laki, size, sizes, uri ng pinto, uri ng bintana, furniture, table, shelf, cabinet, bagong laki, duplicate, ilagay ang family, family file, ccfamily, ifc library, project library, group, visibility, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Ano ang family

Ang family ay isang uri ng bagay sa maraming laki: isang single swing door na 32, 36 at 42 pulgada ang lapad, o isang table na mahaba at maikli. Sa BimCraft, nakikita mo ang family nang isang beses, kasama ang mga laki nito sa ilalim, sa halip na mahabang listahan ng mga type.

Walang family ang IFC. Sa file, bawat laki ay isang ordinaryong type (door type, window type, furniture type…), at ang family ay isang grupo na naglilista ng mga laki nito. Binabasa ng ibang BIM program ang mga type at grupo gaya ng mga ito; binabasa ng BimCraft ang family pabalik mula sa mga ito.

## Saan sila makikita

- Ang **Families** group ng project browser ay naglilista ng mga family sa model na ito, kasama kung ilang laki ang bawat isa at ilan ang nailagay. Sa ibaba nila ang **Starter families**: ang mga pinto at bintana ng Door at Window tool, at isang table, shelf unit at base cabinet.
- Ang {{ui:Build}} › {{ui:Families…}} ay nagpapakita ng parehong listahan sa isang window.
- I-click ang isang family para buksan ito: ang mga laki nito, ang halaga ng bawat laki, at kung ilang element ang gumagamit ng bawat isa.

## Mga pinto at bintana

Inililista ng Door at Window tool ang mga family ng uring iyon, at isang **size list** sa tabi nila. Pumili ng laki, o i-type ang **W** at **H**: ang lapad at taas na wala pang laki ay magiging bagong laki ng family kapag inilagay mo ang pinto. Ang mga pinto ng iisang laki ay nagbabahagi ng iisang type.

Sa {{ui:Properties}}, ang napiling pinto o bintana ay nagpapakita ng **Family** at **Size**. Pumili ng ibang laki sa listahan, o mag-type ng bagong lapad o taas. Binubuksan ng {{ui:Open the family}} ang family na kinabibilangan nito.

Sumusunod ang frame ng bawat pinto o bintana sa kapal ng sarili nitong pader, gaya ng dati bago ang mga family. Pinapanatili rin ng type ng laki ang pagguhit ng pinto sa pader na 140 mm, para sa mga program na nagbabasa ng type.

## Bagong laki mula sa family na ito

1. Buksan ang family.
2. Sa ilalim ng **New size from this family**, i-type ang mga halaga nito (Width, Height at iba pang parameter ng family) at, kung gusto mo, isang pangalan. Kapag walang pangalan, ang pangalan ay mula sa mga halaga nito.
3. I-click ang {{ui:Make the size}}.

Hindi maaaring magkapareho ang halaga ng dalawang laki. Pinapalitan ng **Rename** ang pangalan ng laki; inaalis ng **Remove** ang laking walang gumagamit; pinipili ng **Select** ang mga element ng laking iyon.

## Maglagay ng furniture

1. {{ui:Build}} › {{ui:Place family}}, o {{ui:Place}} sa window ng family.
2. Sa bar, piliin ang family at ang laki nito.
3. I-click sa plan para ilagay ito sa level. Pindutin ang {{key:R}} para paikutin ito ng 90° bago mag-click. Hihinto ang {{key:Esc}}.

Ipinapakita ng {{ui:Properties}} ng nailagay na piraso ang laki nito, kung nasaan ito at kung gaano ito naikot; binubura ito ng {{key:Delete}}. Ang bawat piraso ng iisang laki ay may parehong hugis ng laking iyon, kaya kapag binago ang family, magbabago silang lahat.

## Mga laki mula sa table

{{ui:Sizes from a table…}} sa window ng family ay bumabasa ng CSV file (kuwit, semicolon o tab). Ang unang row ang nagpapangalan sa mga column: pangalan o label ng parameter, at opsyonal ang `Name`. Milimetro ang mga haba maliban kung magsulat ka ng unit (`1.2 m`, `36 in`); ang mga column na Yes / No ay tumatanggap ng yes, no, true, false, 1 o 0; at ang parameter na walang column ay nananatili sa default nito. Bawat row ay nagiging laki, sa isang hakbang na maaari mong i-undo; nilalaktawan ang laking mayroon na. Kapag ang isang row ay hindi nababasa, o hindi kayang iguhit ng family, tinatanggihan ang buong table at sinasabi kung aling linya. Hanggang 200 row at 1 MB lamang. Isinusulat pabalik ng {{ui:Save the sizes as a table}} ang parehong table.

## Itakda sa bawat element

Ang parameter na minarkahang **Per element** sa editor (isang Yes / No na nagdaragdag ng transom, label, o materyal) ay hindi bahagi ng laki: maaaring magkaiba ang dalawang pinto ng iisang laki. Piliin ang element at ipinapakita ng **Properties** ang mga parameter na ito; baguhin ang isa at muling iguguhit ang element na iyon gamit ang sarili nitong hugis (nagkakaroon ng sariling hugis ang furniture at fixture, muling ginagawa ang mga pinto at bintana sa kanilang mga pader). Ibalik silang lahat sa default at babalik ang element sa hugis ng laki nito.

## Antas ng detalye

{{ui:Build}} › {{ui:Families…}} › **Detail level** ay nagtatakda, para sa bawat family sa model, kung ano ang nasa solids at nakaguhit sa mga plan symbol: pinapanatili ng **Fine** ang lahat, inaalis ng **Medium** at **Coarse** ang mga bahaging minarkahan ng editor bilang mas pino (mas maliit na file, mas mabilis na view). Sine-save ng **Automatic** ang lahat at pinipili ng view ng sheet ayon sa scale nito: 1:50 at mas malaki ay fine, 1:100 ay medium, 1:200 at mas maliit ay coarse. Isang hakbang na maaari mong i-undo.

## I-duplicate ang family

Hindi mo kailangang magsimula sa wala. Kinokopya ng {{ui:Duplicate}} ang family kasama ang mga parameter, solid at laki nito sa ilalim ng bagong pangalan. Baguhin ang kopya sa editor; mananatiling pareho ang orihinal.

## Family file

- Sine-save ng {{ui:Save the family file}} ang isang `.ccfamily.json`: ang mga parameter, solid at laki ng family. Buksan ito sa ibang model gamit ang {{ui:Open a family file…}} sa Families group.
- Sine-save ng {{ui:Save as IFC}} ang family bilang maliit na IFC file: ang mga type ng mga laki nito at ang grupo nito, na idineklara ng IFC project library. Binubuksan ito ng ibang program bilang set ng mga type; binubuksan ito ng BimCraft muli bilang family.

Ang family file na binuksan dito ay binabasa bilang data at sinusuri bago may isulat. Ang family na ang key ay nasa model na ay papasok bilang hiwalay na family. Ang family na naglalaman ng iba (tingnan ang Families inside, sa help ng editor) ay nagdadala ng mga ito: nakalista sila sa file, at pinananatili ng model ang mga mayroon na ito.

## Mga family sa Library

Buksan ang {{ui:Families…}} at piliin ang {{ui:From the Library…}} para makita ang mga family na naibahagi sa Library. Binabasa ng {{ui:Add to this project}} ang isa na parang family file: sinusuri ng BimCraft ang bawat field bago gumawa ng kahit ano, papasok ang family bilang sarili nitong family, at magbubukas ito sa editor. Isang undo step ang pagdagdag nito. Para ibahagi ang sarili mo, gamitin ang {{ui:Save all as a library}} at ipadala ang file sa Library (inilalathala ng staff ng Library ang family file gamit ang isang command, at bawat family ay sarili nitong item kasama ang mga laki nito). Kapag hindi maabot ang Library, sinasabi ito ng listahan at walang magbabago.

## Mga type ng ibang program

Lumalabas din sa Families group ang mga type na gawa ng ibang program, nakagrupo ayon sa hula: ayon sa bahagi ng pangalan ng element bago ang unang colon, o kung hindi, ayon sa mga pangalan ng type na nagkakaiba lamang sa mga numero. Sinasabi ng family window kung aling hula ang ginamit. Nakalista sila at maaari mong piliin ang mga element nila, pero hindi sila ine-edit dito: wala silang family recipe.

:::note
Iginuguhit nang eksakto gaya ng dati bago ang mga family ang mga starter na pinto at bintana. Nabubuksan nang hindi nagbabago ang mga file na ginawa bago ang family: lumalabas ang kanilang mga pinto at bintana sa ilalim ng kanilang family kasama ang mga laking ginagamit, at lilipat sa sariling laki ang mga ito sa unang pagbabago.
:::

Tingnan din ang [I-edit ang family](topic:family-editor) at [Mga pinto at bintana](topic:doors-and-windows).

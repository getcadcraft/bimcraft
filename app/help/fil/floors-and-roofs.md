---
title: Mga silid, sahig, kisame at bubong
summary: Lumalabas ang mga silid habang isinasara ito ng mga pader; bigyan ang isang silid o ang buong gusali ng sahig at kisame, at maglagay ng hip o gable na bubong sa mga pader. Sumusunod silang lahat kapag gumalaw ang mga pader.
keywords: silid, room, espasyo, space, lawak, area, perimeter, sahig, floor, slab, subfloor, kisame, ceiling, bubong, roof, hip roof, gable roof, pitch, overhang, eave, ridge, valley, 6/12
from: 1fb1813c
---

## Ano ang gagawin mo

Tapusin ang shell ng gusali. Kusang nalilikha ang mga silid mula sa mga pader; ang sahig, kisame at bubong ay isang click lang bawat isa. Dahil galing ang mga ito sa mga pader, sumusunod sila kapag gumalaw ang mga pader.

## Mga silid

Ang bawat espasyong nakasara ng iginuhit na mga pader ay isang silid. Lumalabas ito sa sandaling isara ito ng huling pader, may numero (101, 102 … sa unang level, 201 … sa susunod) at pangalan (**Room 1**, **Room 2** …), at ipinapakita ang lawak nito sa gitna nito sa plano.

- Kapag naka-on ang {{ui:Select}}, i-click ang loob ng silid para piliin ito. Sa **Properties**, baguhin ang **Name** nito (halimbawa `Kitchen`) at ang **Number**; ipinapakita ang lawak at perimeter nito.
- Burahin ang pader sa pagitan ng dalawang silid at magiging isa sila; gumuhit ng pader na tumatawid sa silid at magiging dalawa ito. Pinapanatili ng silid ang pangalan at numero nito habang gumagalaw ang mga pader sa paligid nito.
- Hindi mabubura ang silid nang mag-isa: ito ang espasyong nabubuo ng mga pader.

Sinusukat ang lawak sa loob ng mga mukha ng pader. Ang mga silid ay sine-save bilang IFC space na may lawak ng sahig, perimeter, taas at volume, kaya nababasa ito ng mga iskedyul (tingnan ang [Pagsamahin ang mga dami, ilista ang mga element at iskedyul ang mga space](topic:quantity-totals)).

## Mga sahig

1. I-click ang {{ui:Floor}}.
2. Pumili ng **Ang silid na ito** o **Ang buong gusali**, ang **Uri** (sahig na kahoy o concrete slab) at ang kapal nito.
3. Ituro ang loob ng silid (o kahit saan sa loob ng gusali). Naka-highlight ang sasakupin ng sahig, kasama ang lawak nito.
4. I-click. Ang tuktok ng sahig ay ang sahig ng level; bababa ito ayon sa kapal nito. Ang sahig ng buong gusali ay aabot sa mga panlabas na mukha ng mga pader.

## Mga kisame

1. I-click ang {{ui:Ceiling}}.
2. Pumili ng **Ang silid na ito** o **Ang buong gusali**, at ang **Height** nito sa itaas ng sahig.
3. Ituro ang loob at i-click.
4. Para makita ito mula sa ibaba, kasama ang grid at mga ilaw dito, ilipat ang plano sa ceiling plan nito: tingnan ang [Mga view, view range at sarili mong sheet](topic:views-and-sheets).

## Isang bubong

1. Sa level na may dalang mga pader ang bubong, i-click ang {{ui:Roof}}.
2. I-type ang **Pitch** bilang rise sa 12 (`6/12`) o sa degree (`30`), at ang **Overhang**.
3. Pumili ng **Ends**: **Hip roof** (lahat ng gilid ay sloped), **Gables on the short sides** o **Gables on the long sides** (gusaling may apat na gilid), o **Shed**.
4. Ituro ang loob ng gusali: lumalabas sa plano ang eave at ridge. I-click.

Nakapatong ang bubong sa ibabaw ng mga pader, sa level sa itaas ng mga ito, at ang ilalim nito ay nagtatagpo sa panlabas na mukha ng mga pader. Pinupuno ng gable wall na kasing kapal ng pader sa ibaba ang mga gable end. Ang gusaling hugis L, T o U ay nakakakuha ng hip roof na ang mga pakpak ay nagtatagpo sa mga valley.

## Baguhin ang mga ito

Pumili ng sahig, kisame o bubong (sa 3D view, sa model tree, o bubong sa pamamagitan ng pag-click sa loob ng outline nito sa level sa itaas) at baguhin ito sa **Properties**: ang uri ng sahig, kapal, at kung gaano kataas ang tuktok nito sa level; ang taas ng kisame, kapal nito at ang **Pattern** nito (ang grid na iginuguhit ng ceiling plan dito: wala, 600 × 600, 600 × 1200, 2' × 2' o 2' × 4'); ang pitch, overhang, ends at kapal ng bubong. Bawat pagbabago ay isang undo step.

## Bigyan ng type ang sahig, kisame o bubong gamit ang mga layer

Ang sahig, kisame at bubong ay maaaring bigyan ng **type**, gaya ng pader: isang pinangalanang build-up ng mga layer, bawat isa ay may sariling materyal at tunay na kapal.

- **Kapag inilalagay ito.** Ang mga tool na Floor, Ceiling, Roof at Draw floor ay may listahang **Type** sa kanilang row. Inilalagay ng **No type** ito gaya ng dati, gamit ang sarili nitong kapal. Inilalagay ito ng type na kasing kapal ng kabuuan ng mga layer ng type.
- **Pagkatapos.** Piliin ang sahig, kisame o bubong at piliin ang **Type** sa Properties. Nananatiling pareho ang element: nananatili ang lugar, silid at data nito, at walang iginuguhit muli. Tanging ang type, kapal at materyal nito ang nagbabago. Ganito nagiging developed element ang isang sketch-stage element: palitan ang generic type nito ng tunay na type.
- **I-edit ang type…** ay nagbubukas ng type editor para sa type na iyon: mga layer mula sa **top** pababa, ang core, ang function ng bawat layer, at ang LOD tag ng type. Ang pag-save ay nagbabago sa bawat element ng type sa isang hakbang, at isang Undo ang bumabawi nito. Ang pagbabago ng starter type ay nagse-save ng kopya bilang sarili mong type.
- Habang may type ang isang element, ang **Thickness** nito ay galing sa type at hindi maaaring i-type. Pumili ng ibang type, o **No type**, para baguhin ito.

Ang starter type ay isang **generic** type para sa bawat isa (isang layer ng generic material, may tag na LOD 200) at dalawang layered na type (may tag na LOD 300): isang timber joist floor at isang concrete floor na may screed; isang timber roof at isang concrete flat roof; isang gypsum board ceiling at isang suspended tile ceiling. Mga panimulang halaga ang mga ito, hindi nasubukang konstruksyon: suriin ang mga layer bago ito pagkatiwalaan.

Inililista ng iskedyul na **Mga layer: lawak at volume** ang bawat layer ng bawat type na ginagamit; tingnan ang [Mga iskedyul, dimension at PDF](topic:plan-schedules-and-pdf). Ang mga type ng sahig, bubong at kisame ay nalilipat sa pagitan ng mga proyekto bilang type pack o bilang Library item; tingnan ang [Mga type pack](topic:type-packs).

## Mga dapat tandaan

- Ang paggalaw, pagdagdag o pagbura ng mga pader ay muling gagawin ang mga silid, sahig, kisame at bubong sa ibabaw nito.
- Kasya ang bubong sa anumang outline. Para bigyan ang bawat pader ng sarili nitong pitch, gable o shed end, raised plate, fascia at soffit, o para gumuhit ng iisang roof plane, tingnan ang [Mga bubong: pitch para sa bawat pader, gable, shed at roof plane](topic:roofs).
- Binubura ng {{key:Delete}} ang piniling sahig, kisame o bubong.

---
title: Vula isethi yeprojekthi
summary: Isethi yeprojekthi iyi-zip eyodwa enemodeli, izibuko zayo, ukwakheka kwayo namaqembu wezakhiwo. Yivule, bonisa umbono ngesitezi nezingqimba zawo, vula ukwakheka, bese ubona izakhiwo emaqenjini eprojekthi yayo.
keywords: isethi, isethi yeprojekthi, ccbundle, zip, imibono, imephu yombono, ukwakheka, incwadi yokwakheka, inhlanganisela yongqimba, amaqembu wezakhiwo, imigomo, pln, isifanekiso
from: b5b86e8f
---

## Okuzokwenza

Vula **isethi yeprojekthi** (`.ccbundle.zip`) bese usebenza neprojekthi njengoba yahlelwa: izibuko zayo, ukwakheka kwayo namaqembu wezakhiwo, phezu kwemodeli.

Isethi iqukethe:

- imodeli njenge-IFC,
- ukwakheka njenge-PDF ne-DWG,
- uhlu lwezinto i-IFC engazifaki: izibuko (ngayinye nesitezi, inhlanganisela yongqimba nesikali sayo), ukwakheka nemidwebo ebekwe kuyo, izincazelo zezakhiwo emaqenjini azo, izigaxekiso, nemigomo efana nezingqimba, amasethi amapeni, izinhlobo zemigqa, izigcwalisi, izindawo nezinhlanganisela.

Amasethi abhalwa yiskripthi esivulekile esisebenza ngaphakathi kwe-Archicad futhi sicela i-Archicad ngokwayo lezi zinhlu. I-BimCraft ayikaze ifunde amafayela `.pln` noma `.tpl` ngqo; bheka [Vula amafayela eprojekthi .pln ne-.pla](topic:pln-project-files).

## Ukwenza isethi

Leli skripthi lisemgqeni wokuhlolwa: alikaze lihlolwe kuzo zonke izinguqulo ze-Archicad. Lithole kule [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Udinga i-Archicad 24 noma eyamuva nePython 3.8 noma eyamuva; akudingeki okunye okufakwayo.

1. Londoloza `archicad_bundle.py` kufolda, isibonelo `C:\cc-bundle`.
2. Ku-Archicad, vula iprojekthi bese wenza isethi yomshicileli ebizwa ngokuqondile **CadCraft bundle**: umbono we-3D njenge-IFC, wonke ukwakheka njenge-PDF, bese wonke ukwakheka futhi njenge-DWG, kushicilelwe emafayeleni ediskini kufolda eyodwa.
3. Ngiprojekthi evulekile, qhuba `python archicad_bundle.py --probe --out .` kanye. Ifunda kuphela, ibhale `probe.json`.
4. Qhuba `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (sebenzisa isiguquli se-IFC okukhethile). I-Archicad ishicilela isethi, bese iskripthi libhala `<project>.ccbundle.zip`.

Uma ukushicilela ngeskripthi kwehluleka, shicilela isethi ngesandla bese uqhuba `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. I-README yerepository inazo zonke izinketho. Uma okuthile kungafiki, vula isihloko lapho bese uhlanganisa `probe.json`.

## Vula isethi

1. Chofoza {{ui:Khetha ifayela}}, noma wehlise `.ccbundle.zip` ku-BimCraft. Ku-folda ovule nge-{{ui:Vula ifolda}}, amasethi ahlolwa ngaphansi kwe-**Amasethi eprojekthi**; chofoza elinye ngegama lalo.
2. Imodeli ivulwa njengoba i-IFC ivulwa njalo, futhi isigaba se-**Isethi yeprojekthi** sivela ngakwesobunxele, ngaphansi kwezici zefayela.

Akukho okulayishwayo: isethi ifundwa ekhompyutheni yakho, ifayela elilodwa ngesikhathi, ngakho imodeli enkulu ayikopishwa kabili.

## Bonisa umbono

Ngaphansi kwe-**Imibono**, imibono ihlelwe ngamafolda ebenawo kuprojekthi. Chofoza igama lombono:

- **Umbono wephansi** ubonisa isitezi sawo kuphela, ubukwe ngaphezulu.
- **Inhlanganisela yongqimba** ifihla izakhi ezingqimbeni ezifihlwa yiyo. Umugqa wesimo utshela ukuthi izakhi ezingaki ezifihliwe.
- **Isikali** sibonakala ngasecaleni kwegama nasemgqeni wesimo.
- **Umbono we-3D** ubonisa wonke amasitezi.

Ukuze ubonise konke futhi, sebenzisa {{ui:Bonisa konke}} ku-{{ui:Bonisa}} bese ukhetha wonke amasitezi.

:::note
I-BimCraft ithola izingqimba ngokusebenzisa izabelo zezingqimba zefayela le-IFC. Uma i-IFC ithunyelwe ngaphandle kwazo, inhlanganisela yongqimba ayifihli lutho, futhi umugqa wesimo uthi izakhi ezifihliwe ziyi-0.
:::

## Vula ukwakheka

Ngaphansi kwe-**Ukwakheka**, ukwakheka ngakunye kubonisa inombolo yakho, igama, usayizi wephepha nemibono ebekwe kuyo.

- **PDF** igcina i-PDF yokwakheka kusuka kwisethi.
- **DWG** ivula umdwebo wokwakheka ku-2D view. Chofoza noma yimuphi umbono ukuze ubuyele kumodeli.
- **Vula ku…** ithumela ifayela lokwakheka ku-app eyilungisayo, ethebhini elisha: i-PDF iya ku-MarkupCraft, i-DWG iya ku-CadCraft. Ivela kuphela lapho leyo app ivulekile eduze ne-BimCraft. Ifayela lifundwa kusuka kwisethi njengoba ithebhu lilayisha, futhi akukho okulayishwayo.

Ukwakheka okungenalo okukodwa kwalezi bhala **Akukho ifayela kwisethi**.

## Bona izakhi emaqenjini eprojekthi

Khetha into. **Amaqembu wezakhi** ibonisa izakhi zayo ngaphansi kwamaqembu eprojekthi achazile, ehlanganiswe ngesethi yempahla negama elinikezwa inkcazo ye-IFC, noma ngegama layo. Okusele kuhlala ku-{{ui:Izici}} njengoba kujwayelekile. **Izincazelo zezakhi** zidweba zonke izincazelo ngeqembu layo, uhlobo negama le-IFC.

## Imigomo namanothi

- **Imigomo** ibala izingqimba, inhlanganisela yezingqimba, amasethi amapeni, izinhlobo zemigqa, izigcwalisi, izindawo, izinhlanganisela nezinto ezisesethini.
- **Amanothi** adwebe okungakwazanga ukuthathwa yiskripthi kulowo khipha we-Archicad, noma yimuphi ensimu i-BimCraft ingayifunda, nanoma iyiphi ifayela isethi eyibiza kodwa ingayibambi.

## Ukuxazulula izinkinga

- **"… iyi-zip kodwa ayisona isethi yeprojekthi."** I-zip ayinayo i-`manifest.json`. Yikhiphe bese uvula i-`.ifc` ekuyo.
- **"… iyisethi yeprojekthi entsha kunaleli BimCraft elifunda."** Vuselela i-BimCraft.
- **"… alikho imodeli ibhekisa kuyo i-manifest yalo."** I-zip inqunyiwe noma ihlelwe. Yenza kabusha isethi.
- **Umbono ubonisa wonke amasitezi.** Isitezi salo asiseyo ku-IFC yemodeli (umugqa wesimo uyakusho). Hlola ukuthi ukuthunyelwa kwe-IFC kubandakanye leso sitezi.

Bheka futhi [Ukusebenza phakathi kwezinhlelo ezimbili ze-BIM](topic:two-bim-programs) kanye [nokufundwa yi-BimCraft kusuka kwifomethi ngayinye](topic:file-formats).

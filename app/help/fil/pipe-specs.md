---
title: Pipe specs, valve, damper at mga family ng manufacturer
summary: Mag-set up ng sarili mong pipe specification (mga size table na may material, joint at roughness), na nakalagay sa model file; maglagay ng valve, strainer at damper sa mga run; at mag-import ng valve o equipment model ng manufacturer bilang family na may connection port.
keywords: pipe spec, pipe specs, piping specification, piping class, custom pipe, size table, tube, hygienic tube, stainless, schedule, outside diameter, wall thickness, inside diameter, roughness, pressure rating, csv, json, mag-import, i-export, spreadsheet, standard, bpe, din, en 10357, en 10255, valve, valves, butterfly valve, balancing valve, control valve, strainer, damper, volume damper, fire damper, oem, manufacturer, maker, family, families, port, koneksyon, step, obj, gltf, ifc, radiator, convector, panel heater, air handler, diffuser, grille
from: bc2f7c4e
---

## Ano ang gagawin mo

Gumuhit ng pipe ayon sa sarili mong specification sa halip na sa built-in na steel, copper at plastic na table, maglagay ng valve at damper sa mga run, at maglagay ng model ng maker na may mga port na kinokonektan ng mga pipe.

:::note
Pantulong sa drafting at coordination. Hawak ng pipe spec ang mga numerong ita-type o ii-import mo: suriin ang bawat table laban sa standard ng proyekto mo. Ang built-in na valve, strainer at damper ay schematic na hugis na sinukat base sa run, hindi sa haba ng maker o ng valve standard.
:::

## Mag-set up ng pipe spec

1. I-on ang {{ui:Draw}}, buksan ang {{ui:Build}} at piliin ang {{ui:Pipe spec}}. Nasa bar ng Tubo tool din ang parehong button.
2. Piliin ang {{ui:Bago}}, o magsimula sa isang file, paste o starter spec (sa ibaba).
3. I-type ang pangalan nito, ang standard o reference na sinusunod nito, ang material at ang uri ng dulo o joint.
4. I-type ang isang row kada size: ang pangalan ng size, ang outside diameter at ang wall, sa millimetre. I-type ang inside diameter sa halip na wall kung iyon ang hawak mo: ang isa ay awtomatikong mapupunan. Opsyonal ang DN, pressure rating at weight.
5. Opsyonal: ang roughness sa millimetre (ginagamit ito ng pressure-drop calculation), ang kapal ng insulation na sinisimulan ng mga bagong run, ang radius ng elbow bilang factor ng outside diameter, kung may tee at reducer ang spec, at sariling kulay nito sa 3D.
6. Lagyan ng tsek ang mga service na dapat magsimula sa spec na ito ang mga bagong run, halimbawa chilled water.
7. Piliin ang {{ui:I-save sa model}}.

Nakasave ang mga spec sa model file. Mayroon nito ang sinumang magbukas ng file, at binabawi ng I-undo ang pagbabago.

Hindi mabubura ang isang spec, o isa sa mga size nito, habang may run na iginuguhit dito. Kapag binago ang mga numero ng isang size, muling iguguhit ang mga run sa size na iyon.

## Gamitin muli ang spec sa ibang model

- Ang {{ui:I-export ang .json}} ay nagsa-save ng napiling spec bilang maliit na file; ang {{ui:I-export lahat}} ay nagsa-save ng lahat ng spec ng model. Binabasa ulit ng {{ui:Mag-import ng file}} ang mga ito.
- Ang {{ui:I-export ang .csv}} ay nagsa-save ng size table para sa spreadsheet. Binabasa rin ng {{ui:Mag-import ng file}} ang `.csv`.
- Ang {{ui:I-paste ang mga row}} ay tumatanggap ng table na kinopya mula sa spreadsheet. Ang unang row ang nagpapangalan sa mga column: `Size`, `OD` at `Wall` (o `ID`), at opsyonal ang `DN`, `Pressure`, `Weight`. Isang row kada size. Millimetre ang mga numero maliban kung pipiliin mo ang inches o may nakasulat na unit ang cell (`0.065 in`).

## Mga starter spec

Ang {{ui:Magdagdag ng starter spec}} ay naglalagay ng isa sa mga ito sa model mo bilang kopyang puwede mong i-edit:

| Starter | Mga size |
|---|---|
| ASME BPE tube | 1/4" hanggang 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 hanggang DN200 |
| EN 10255 steel tube, medium series | DN15 hanggang DN150 |
| EN 10255 steel tube, heavy series | DN15 hanggang DN125 |

Ang mga table na ito ay ang outside diameter at wall na nakalimbag sa dalawa o higit pang nailathalang pahina ng supplier para sa standard at magkakasundo ang mga ito. Hindi ito kinuha mismo sa mga standard. Hindi isinama ang mga size na isang pahina lamang ang nagbigay. Ipinapakita ng bawat starter ang mga source page nito at may markang "check against your project standard". Walang ibinigay na roughness, pressure rating o weight.

## Mag-guhit ng run sa spec

1. Piliin ang {{ui:Tubo}}. Nagsisimula sa spec ang service na tinsekan mo sa isang spec. Para sa ibang run, piliin ang spec sa listahan ng material: nakalista ang mga spec pagkatapos ng built-in na material bilang "Spec: name".
2. Ang listahan ng size ay naglalaman na lamang ng mga size ng spec na iyon. Pumili ng isa at iguhit ang run.

Para ilipat ang run sa isang spec sa susunod, piliin ito at baguhin ang **Material** sa Properties. Ang size nito ay magiging pinakamalapit na size ng spec batay sa outside diameter.

Sa IFC file, dala ng pipe ang pangalan, standard, material, joint at dimensions ng spec (`CadCraft_PipeSpec` at `Pset_PipeSegmentTypeCommon`, sa pipe at sa type nito).

Binabasa ng sizing at pressure-drop calculation ang inside diameter ng spec. Kapag may roughness ang spec, kinukuwenta ang friction ng run gamit ito (Darcy-Weisbach); kung wala, ginagamit ang karaniwang default ng calculation.

## Valve, strainer at damper

1. Piliin ang {{ui:Balbula}} at piliin ang uri sa bar: gate, ball, butterfly, globe, check, balancing o control valve, o strainer, para sa mga pipe; volume damper o fire damper para sa mga duct.
2. I-click ang run kung saan ito pupunta. Puputulin ang run sa paligid nito at mananatiling konektado ang magkabilang panig. Kukunin nito ang size ng run at gagalaw kasama ng run.

Nakalista sa Properties ng run ang bawat isa na may {{ui:Alisin}}; magsasara muli ang run.

Tanging para sa gate, ball, globe at check valve lamang binibilang ng pressure-drop calculation ang fitting loss. Ang ibang uri, damper at family ng manufacturer ay walang dagdag na loss doon: isaalang-alang sila sa sarili mong pagsusuri. Binibilang sila sa iskedyul na **Mga fitting at valve** at sa takeoff, at isinusulat sa IFC bilang valve, filter (ang strainer) at damper na may dalawang konektadong port.

## Model ng manufacturer bilang family

1. Buksan ang {{ui:Build}} at piliin ang {{ui:Mga family}}, pagkatapos ang {{ui:Mag-import ng model}}. Binabasa ang mga file na IFC, STEP, OBJ, STL, glTF at Library item. Para sa OBJ at STL, itakda muna ang units at up axis ng file.
2. Sa dialog ng mga port, i-type ang pangalan, maker at model number.
3. Piliin kung ito ay **On a run** (valve, strainer o damper) o **Equipment**, at kung ano ang nakasulat na uri nito.
4. Bigyan ito ng mga port. Bawat isa ay may pangalan, pipe o duct, service, size sa millimetre (outside diameter ng pipe), nominal size gaya ng pagkakapangalan ng spec mo, uri ng dulo, posisyon nito at direksyon ng pagharap nito. Ang {{ui:Nasa isang face}} ay naglalagay ng port sa gitna ng isang face ng box ng model. Ipinapakita ng maliit na top view ang mga port.
5. Piliin ang {{ui:I-save ang family sa model}}.

Ang family na nasa run ay kailangan ng eksaktong dalawang port na nakaharap palayo sa isa't isa sa iisang linya. Piliin ito sa listahan ng Balbula tool at i-click ang isang run: ilalagay ito sa sarili nitong haba at kokonektahan ng mga pipe ang mga port nito.

Hindi kailanman iniuunat ang family. Kung hindi tugma ang mga port nito sa size ng run, sasabihan ka kapag inilagay ito, at ililista ito ng {{ui:Suriin ang koneksyon}}.

Ang equipment family ay inilalagay gamit ang {{ui:Equipment}}, uri na **Manufacturer's family**. Dumidikit sa mga port nito ang mga pipe at duct.

Ang {{ui:I-download bilang Library item}} ay nagsa-save ng family kasama ang mga port nito bilang file na maisusumite mo sa Library.

## Mga radiator at convector

Mayroon ding **Radiator** at **Convector / panel heater** ang {{ui:Equipment}}: mga generic na katawan na may flow at return connection para sa heating water. Tingnan ang [MEP equipment with ports](topic:mep-equipment).

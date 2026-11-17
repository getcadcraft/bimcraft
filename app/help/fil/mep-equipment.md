---
title: Mga MEP equipment na may port
summary: Maglagay ng generic na air handler, fan, pump, boiler, water heater, terminal unit, diffuser, grille at tank na sinusukat ayon sa mga value na tina-type mo, bawat isa ay may koneksyon ng tubo at duct na sinasalihan ng ibang run.
keywords: mep, equipment, air handler, ahu, fan, inline fan, pump, boiler, water heater, terminal unit, vav, diffuser, grille, register, tank, port, ports, koneksyon, nozzle, laki ng neck, hvac, plumbing, mechanical, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Ano ang gagawin mo

Ilagay ang equipment sa mga dulo ng iyong mga tubo at duct. Ang bawat piyesa ay generic na hugis na sinusukat ayon sa mga value na tina-type mo, na may mga koneksyon bilang **port**: kung saan sumasali ang tubo o duct dito, aling system, aling direksyon ang flow, at anong laki. Ang tubo at duct na iginuhit mula sa port ay kumukuha ng laki at system nito at nananatiling nakakabit dito: tingnan ang [Ikonekta ang mga tubo at duct sa equipment](topic:mep-connections).

:::note
Ito ay drafting at coordination aid na sinusukat ng engineer. Hindi produkto ng manufacturer ang equipment: walang capacity, timbang o laki ng koneksyon ng manufacturer. Dalhin ang model ng manufacturer mula sa iyong MEP program bilang IFC kapag kailangan mo ito.
:::

## Maglagay ng piyesa

1. I-on ang {{ui:Draw}}, buksan ang {{ui:Build}} at piliin ang {{ui:Equipment}}.
2. Sa bar, piliin ang uri at i-type ang mga laki nito. Bawat uri ay humihingi ng sarili nitong:

| Uri | I-type | Mga port nito |
|---|---|---|
| Air handler | haba, lapad, taas; supply at return opening; laki ng coil pipe at system; laki ng condensate | supply duct palabas, return duct papasok, coil papasok at palabas, condensate drain |
| Inline fan | diameter, haba, system | duct papasok at palabas |
| Pump | laki ng pipe, system | inlet at outlet |
| Boiler | haba, lapad, taas, laki ng pipe, laki ng gas, diameter ng flue | heating supply palabas at return papasok, gas papasok, flue palabas |
| Water heater | diameter, taas, laki ng pipe, gas o electric | cold water papasok, hot water palabas (at gas papasok at flue kapag gas ang sinusunog) |
| Terminal unit | haba, lapad, taas, round inlet, lapad at taas ng outlet | supply air papasok at palabas |
| Diffuser | face, neck, system | ang neck nito (air papasok) |
| Grille | lapad at taas ng face, lapad at taas ng neck, system | ang neck nito (air palabas papunta sa return o exhaust duct) |
| Tank | diameter, taas, laki ng pipe, system | inlet sa itaas, outlet malapit sa ibaba |
| Radiator | haba, taas, lalim, laki ng pipe, system | flow papasok sa itaas ng isang dulo, return palabas sa ibaba ng kabilang dulo |
| Convector / panel heater | haba, taas, lalim, laki ng pipe, system | flow papasok sa isang dulo, return palabas sa kabila |
| Family ng manufacturer | ang family (tingnan ang [Mga pipe spec, valve, damper at family ng manufacturer](topic:pipe-specs)) | ang mga port na ibinigay sa family nito |

3. Itakda ang **At**, ang taas ng base nito sa level. Ang taas ng diffuser o grille ay ang face nito: i-type ang taas ng ceiling.
4. I-type ang **Tag** kung gusto mo (`AHU-1`); ang susunod na piyesa ng parehong uri ay makakakuha ng susunod na numero.
5. Ilipat ang pointer sa plano: sumusunod dito ang footprint at mga port nito. Pindutin ang {{key:R}} para ikiling ng 90°. I-click kung saan ito ilalagay.

Steel pipe sizes (ASME B36.10M) ang laki ng pipe. Ang tubong iginuhit mula sa pump sa ibang materyal ay kumukuha ng parehong nominal size sa sarili nitong materyal.

## Baguhin o alisin

Piliin ito sa plano o sa 3D view. Ipinapakita ng Properties ang bawat laking tinype mo, ang tag nito, X, Y, taas at pagliko nito, at bawat port: laki, system, aling direksyon ang flow, at kung may nakakabit. Bawat pagbabago ay isang hakbang ng {{ui:I-undo}}; sasama ang mga run na nakakabit sa mga port nito. Binubura ito ng {{key:Delete}}; mananatili ang mga run na nakakabit dito at ililista ng check ng mga koneksyon.

## Sa IFC file

Bawat uri ay sine-save bilang IFC class nito: IfcUnitaryEquipment (air handler), IfcFan (inline fan), IfcPump (pump), IfcBoiler (boiler; ang water heater ay IfcBoiler ng type na water na may object type na "Water heater"), IfcAirTerminalBox (terminal unit), IfcAirTerminal (diffuser, grille) at IfcTank, na may type na ibinabahagi ng bawat piyesa ng parehong uri at laki. Ang mga IFC2X3 file ay nakakakuha ng IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal at IfcFlowStorageDevice na may katugmang type. Ang bawat port ay IfcDistributionPort na nakalagay kung saan ang koneksyon, nakaharap palabas, kasama ang direksyon ng flow at system nito; mababasa ng ibang program kung aling run ang nakakabit sa aling port. Sumasali ang piyesa sa system ng bawat port nito, at dala nito ang mga library item set na mayroon ang bawat nakalagay na library item.

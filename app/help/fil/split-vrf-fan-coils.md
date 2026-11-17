---
title: Split, VRF at fan coil unit
summary: Maglagay ng wall, cassette at ducted na indoor unit, single-split at VRF na outdoor unit, refnet joint, at 2-pipe o 4-pipe na fan coil, bawat isa may koneksyon sa refrigerant, tubig, condensate at duct, at iguhit ang mga line set sa pagitan nila na may sukat mula sa talahanayang maaari mong baguhin.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variable refrigerant flow, heat pump, indoor unit, outdoor unit, condensing unit, nakadikit sa pader, mataas na pader, cassette, ducted, nakatago, fan coil, fcu, 2-pipe, 4-pipe, refnet, branch joint, y joint, line set, lineset, refrigerant, liquid line, gas line, suction line, acr, tanso, condensate, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Ano ang gagawin mo

Ilagay sa model ang mga unit ng split, multi-split o VRF system at ang kanilang fan coil, saka ikonekta ang mga ito gamit ang line set: isang liquid at isang gas line sa ACR copper, nakakabit sa mga port ng unit. Gumagana ang mga unit gaya ng ibang piyesa sa [MEP equipment na may ports](topic:mep-equipment): parehong bar, Properties, ports at [connections](topic:mep-connections).

:::note
Pantulong ito sa pagguhit at koordinasyon. Generic na hugis ang mga unit, na may sukat ayon sa values na itino-type mo, hindi produkto ng isang maker. Galing sa talahanayan ng **karaniwang halimbawang values** para sa R410A at R32 na equipment ang laki ng tubo nila, hindi sa anumang maker: ang installation manual ng unit maker ang nagtatakda ng tunay na laki, at nagbabago ito kapag mahaba ang takbo o malaki ang pagkakaiba ng taas. Baguhin ang talahanayan, o i-type ang laki, para tumugma sa mga unit na gamit mo.
:::

## Maglagay ng unit

1. I-on ang {{ui:Draw}}, buksan ang {{ui:Build}} at piliin ang {{ui:Equipment}}.
2. Piliin ang uri at itakda ang values nito:

| Uri | Itinakda mo | Mga port nito |
|---|---|---|
| Split indoor unit, nakadikit sa pader | kapasidad, liquid at gas line, haba, lalim, taas, laki ng condensate | refrigerant liquid at gas, condensate drain (sa kanang dulo, malapit sa pader) |
| Split indoor unit, cassette | kapasidad, liquid at gas line, panel, katawan, taas, laki ng condensate | refrigerant liquid at gas, condensate drain (sa isang gilid, malapit sa itaas) |
| Split indoor unit, ducted | kapasidad, liquid at gas line, haba, lapad, taas, supply at return na opening, laki ng condensate | supply duct palabas, return duct papasok, refrigerant liquid at gas, condensate drain |
| Split outdoor unit | kapasidad, liquid at gas line, lapad, lalim, taas | refrigerant liquid at gas (sa kanang gilid) |
| VRF outdoor unit | kapasidad, liquid at gas line, lapad, lalim, taas | refrigerant liquid at gas (sa harap, mababa) |
| Refnet joint | liquid o gas line, ang load ng bawat branch, ang tubo sa bawat dulo | inlet, branch A, branch B |
| Fan coil unit | 2-pipe o 4-pipe, haba, lapad, taas, supply at return na opening, coil pipe at system, heating pipe, laki ng condensate | supply duct palabas, return duct papasok, coil papasok at palabas, heating papasok at palabas (4-pipe), condensate drain |

3. Itakda ang **At**: ang taas ng base ng unit sa itaas ng level. Ang base ng wall unit ay ang ilalim nito (madalas 2100 mm); ang sa cassette ay ang mukha nito sa kisame; ang sa refnet ay ang taas ng center line ng tubo nito.
4. I-click kung saan ito ilalagay ({{key:R}} ang nagpapaikot dito ng 90°).

**Capacity** ay ang nominal cooling capacity ng unit sa kW, may katapat na Btu/h. Kapag nakaiwan sa **Mula sa talahanayan** ang **Liquid line** at **Gas line**, kukunin ng mga koneksyon ng unit ang sukat ng talahanayan para sa kapasidad na iyon; pumili ng laki ng tubo para gamitin ang sarili mong unit. Ang inlet ng refnet ay may sukat para sa dalawang branch nang magkasama, at ang bawat branch ay para sa sarili nitong load.

Gumagana sa magkabilang direksyon ang refrigerant ports (tumatakbo ang heat pump sa alinmang direksyon). Ang condensate drain ay sukat ng pipe, gaya ng ibang drain.

## Gumuhit ng line set

1. Pumili ng dalawang piyesa ({{key:Shift}}+click sa ikalawa): isang outdoor unit at isang indoor unit (single split), o isang outdoor unit at refnet, isang refnet at indoor unit, o dalawang refnet (VRF).
2. Buksan ang {{ui:Build}} at piliin ang {{ui:Line set}}.

Iginuguhit ng BimCraft ang liquid at gas na takbo sa pagitan ng kanilang libreng port, palabas sa bawat port at pataas sa iisang taas, sa ACR copper (annealed coil hanggang 1-5/8 in, drawn tube sa mas malaki), bilang isang hakbang ng {{ui:I-undo}}. Ang refnet ay tumatanggap lamang ng sarili nitong linya: papasok sa inlet nito mula sa outdoor side, at palabas sa isang branch patungo sa mga indoor unit. Kinukuha ng bawat takbo ang laki ng downstream nitong dulo (ang indoor unit, o ang inlet ng refnet). Kapag ibang laki ang port ng kabilang dulo, inililista ito ng {{ui:Suriin ang koneksyon}}: doon kailangan ang reducer. Kailangan ng refnet sa pagitan ng dalawang indoor unit.

Ilipat ang mga takbo pagkatapos, gaya ng alinmang pipe run; nananatili sa mga port ang kanilang mga dulo. Ang mga takbo sa pagitan ng mga level ay iginuguhit gamit ang {{ui:Tubo}}: ang pipe na sinimulan sa refrigerant port ay kukuha ng system, ACR copper at sukat nito.

## Baguhin ang talahanayan ng line set

Buksan ang {{ui:Build}} at piliin ang {{ui:Mga laki ng line set}}. Sinasabi ng bawat hilera: hanggang sa kapasidad na ito (kW), ang liquid na tubo na ito at ang gas na tubo na ito.

| Hanggang | Liquid | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Ito ang panimulang karaniwang values. Baguhin ang isang hilera, magdagdag o magtanggal ng hilera, at piliin ang {{ui:I-save}}: nakalagay ang talahanayan sa model, kaya ginagamit ito ng lahat ng nagtatrabaho sa file, at maibabalik ito ng {{ui:I-undo}}. Ibinabalik ng {{ui:Gamitin ang karaniwang halaga}} ang panimulang talahanayan. Mananatili sa kanilang mga port ang mga piyesang nailagay na hanggang baguhin mo ang mga ito.

## Sa IFC file

Ang indoor at outdoor unit ng split at VRF system ay IfcUnitaryEquipment na type SPLITSYSTEM, at sinasabi ng object type kung alin ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Ang fan coil ay IfcUnitaryEquipment na type AIRHANDLER na may object type na "Fan coil unit": walang fan coil type ang IFC4, at ang fan, coil at filter para sa isang kuwarto ang inilalarawan ng AIRHANDLER. Ang refnet joint ay IfcPipeFitting na type JUNCTION ("Refnet joint"). Ang mga IFC2X3 file ay makakakuha ng IfcEnergyConversionDevice at IfcFlowFitting na may katugmang type.

Nasa REFRIGERATION systems ang refrigerant ports at takbo (isa para sa liquid lines, isa para sa gas lines), at nasa DRAINAGE system ang condensate. Ang ACR runs ay pinangalanan ayon sa outside diameter. Ang line set table ay ang property set na CadCraft_HvacLineSets sa project.

Tingnan din ang [MEP equipment na may ports](topic:mep-equipment), [Ikonekta ang mga pipe at duct sa equipment](topic:mep-connections) at [Mga pipe at duct](topic:pipes-and-ducts).

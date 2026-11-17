---
title: Mga pipe at duct
summary: Gumuhit ng mga pipe at duct run sa plano ayon sa kanilang centre line; ang elbow, tee, reducer at transition ay ginagawa para sa iyo, ang mga run ay kabilang sa mga sistema na may konektadong port sa IFC file, at lumalabas ang mga ito sa mga plano, iskedyul at takeoff.
keywords: pipe, pipes, piping, plumbing, duct, ducts, ductwork, hvac, mep, mechanical, elbow, tee, reducer, transition, fitting, fittings, valve, valves, gate valve, ball valve, globe valve, check valve, riser, slope, drain, sanitary, storm, vent, malamig na tubig, mainit na tubig, chilled water, heating, gas, fire protection, supply air, return air, exhaust, sistema, systems, port, ports, connector, connectors, fixture, fixtures, plumbing fixture, basin, sink, toilet, water closet, lavatory, kitchen sink, shower, laundry tub, fixture units, uhc, dfu, size the drains, drain sizing, building drain, branch, ramal, coletor, airflow, cfm, friction, equal friction, sizing, schedule, takeoff, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Ano ang gagawin mo

Iguhit ang mga pipe at duct ng isang gusali gaya ng pagguhit mo ng pader: i-click ang mga sulok ng centre line ng run sa taas na itinakda mo. Ginagawa ng BimCraft ang mga fitting, inilalagay ang bawat bahagi sa sistema nito at kinokonekta ang mga ito, para mabasa ng ibang programa ang run bilang isang konektadong sistema.

## Mag-guhit ng pipe

1. I-on ang {{ui:Draw}}, buksan ang {{ui:Build}} at piliin ang {{ui:Tubo}}.
2. Sa bar, piliin ang **sistema** (malamig na tubig, mainit na tubig, sanitary drain, gas…). Itinatakda nito ang karaniwang material: copper para sa tubig, PVC para sa drain at vent, steel para sa heating, chilled water, gas at fire protection. Baguhin ang **material**, **class** at **size** kung kailangan. Galing sa mga pampublikong standard ang mga size at wall: steel pipe ASME B36.10M, copper tube ASTM B88, PVC ASTM D1785 at PEX ASTM F876. Puwedeng gamitin ng mga proyektong Brazilian ang **PVC water pipe (NBR 5648)**, ang solvent-weld na PVC para sa malamig na tubig, at ang **PVC drain pipe (NBR 5688)**, série normal o reforçada, para sa drain at vent: pinangangalanan ang kanilang size ayon sa DN (DN 25, DN 100). Kapag napili mo ang isa sa mga ito, ang pagpili ng ibang sistema ay mananatili sa mga pipe ng Brazil (PVC drain pipe para sa sanitary drain pagkatapos ng PVC water pipe).
3. Itakda ang **At**: ang taas ng centre line ng pipe mula sa level.
4. I-click kung saan magsisimula ang pipe, pagkatapos ang bawat sulok. I-double-click, o pindutin ang {{key:Enter}}, sa huling punto. Binabawi ng {{key:Backspace}} ang huling sulok; inaalis ng {{key:Esc}} ang run.

Dumidikit ang pipe gaya ng mga pader, at sa ibang run: magsimula sa dulo ng pipe para magpatuloy mula rito, o magtapos sa linya ng pipe para sumanga rito. Kinukuha ng bagong run ang taas ng pipe na dinidikitan nito.

Ang run na nagsimula o nagtapos sa port ng isang equipment ay kumukuha ng size at sistema nito at nananatiling nakakabit dito: tingnan ang [MEP equipment with ports](topic:mep-equipment) at [Connect pipes and ducts to equipment](topic:mep-connections).

## Itakda ang plumbing standard ng proyekto

Ang unang listahan sa pipe bar ang **plumbing standard** ng model: **US (IPC, inches)** o **Brazil (ABNT, DN)**. Nakasave ito sa model, kaya pareho ang pagsisimula ng mga run ng sinumang magbukas ng file. Sa **US**, ang bagong run ay nagsisimula sa copper (tubig) o PVC Schedule 40 (drain), sa inches, na may slope ng International Plumbing Code. Sa **Brazil**, ang malamig na tubig ay nagsisimula bilang PVC soldável DN 25, ang sanitary at storm drain at vent bilang PVC esgoto DN 100 na may slope ng NBR 8160, at ang mainit na tubig sa copper. Nalalapat din ito sa run na nagsimula sa connector ng fixture o port ng equipment. Pinapanatili ng mga pipe na nakaguhit na ang material at sariling table nila; bukas pa rin ang listahan ng material, kaya puwede mo pa ring iguhit ang isang run ng Brazil sa US model nang sadya. Ang file na walang pinili ay kumikilos gaya ng dati: ang bagong run ay sumusunod sa material na ginagamit.

## Mag-guhit ng duct

1. Piliin ang {{ui:Duct}}. Piliin ang sistema (supply, return, exhaust o outside air) at ang hugis: bilog, parihaba o flat oval.
2. I-type ang lapad at taas (ang lapad ng bilog na duct ay diameter nito), at ang **At** para sa taas ng centre line.
3. Para masukat ito base sa airflow, i-type ang **Airflow** at ang **Friction** rate at i-click ang {{ui:Sukatin}}. Sinusukat ang duct sa equal friction, ang pamamaraan sa kabanata ng duct design ng ASHRAE Handbook, at binibilog pataas sa available na size, kaya ang friction ay nasa o mas mababa sa rate na itinype mo. Kung walang rate na itinype, gumagamit ito ng 0.08 in. ng tubig kada 100 ft (0.8 Pa/m). Pinapanatili ng parihabang duct ang taas na itinype mo at nakakakuha ng lapad; sinasabi ito ng BimCraft kapag mahigit 4 hanggang 1 ang mga gilid nito.
4. I-click ang mga sulok gaya ng sa pipe.

## Mga plumbing fixture

Ang {{ui:Build}} › {{ui:Ilagay ang family}} ay nag-aalok ng limang fixture na puwedeng simulan, bawat isa ay may drain at cold-water connector: **Water closet**, **Lavatory**, **Kitchen sink**, **Shower tray** at **Laundry tub**. Nakaharap sa iyo ang harap nila habang inilalagay mo ang mga ito at nakasandal sa pader ang likod nila. Ang drain nila ay nasa pinakamaliit na fixture drain ng NBR 8160 (DN 100 para sa water closet, DN 50 para sa kitchen sink, DN 40 para sa iba); DN 20 ang tubig. Baguhin ang kanilang size, o i-edit ang mga ito, gaya ng anumang family: tingnan ang [Families and their sizes](topic:families).

Sinasabi ng isang family kung aling fixture ito sa ilalim ng {{ui:Plumbing fixture}} sa tab na {{ui:Connectors}} ng family editor. Binibilang ang drain nito bilang fixture unit: 6 UHC para sa water closet, 1 para sa lavatory, 3 para sa kitchen sink o laundry tub, 2 para sa shower (NBR 8160), o ang drainage fixture unit ng IPC Table 709.1.

## Mula sa connector ng fixture

Ipinapakita ng mga elementong inilagay mula sa family na may connector (drain at gripo ng basin, leeg ng air terminal: tingnan ang [Edit a family](topic:family-editor)) ang kanilang mga libreng connector bilang mga punto habang nakabukas ang {{ui:Tubo}} o {{ui:Duct}}, at dumidikit dito ang pointer.

- **Magsimula sa connector**: kinukuha ng run ang sistema at size nito (ang pipe ng material sa bar na katumbas o bahagyang mas malaki sa size ng connector; bilog na duct na katumbas ng diameter nito). Kapag nakaturo pababa o pataas ang connector, gaya ng drain sa ilalim ng basin, ang run ay unang didiretso pababa o pataas hanggang sa taas sa **At**, pagkatapos ay magpapatuloy ayon sa mga click mo.
- **Magtapos sa connector**: bumababa o umaakyat ang run papunta rito at doon natatapos.

Konektado ang run sa elemento sa IFC file, kaya nakikita ng ibang programa ang fixture bilang bahagi ng sistema nito. Konektado rin dito ang elementong ilalagay sa susunod na may connector sa dulo ng run. Hindi na konektado sa connector ang run na nailipat palayo rito.

## Ang mga fitting, ginawa para sa iyo

| Saan | Ano ang ginagawa ng BimCraft |
|---|---|
| Lumiliko ang run | Isang elbow. Steel pipe sa long radius ng ASME B16.9 (1.5 × ang size), ibang pipe sa isang outside diameter, bilog na duct sa 1.5 diameter, parihabang duct sa isang lapad (o isang taas para sa liko pataas o pababa) |
| Nagtatapos ang run sa linya ng ibang run | Isang tee; hinahati doon ang kabilang run |
| Dalawang run na nagtatagpo dulo-sa-dulo sa magkaibang size | Isang reducer (pipe) o transition (duct) |
| Dalawang run ng iisang size na nagtatagpo dulo-sa-dulo sa anggulo | Isang elbow |

Kapag binago, inilipat o binura mo ang isang run, muling gagawin ang bawat fitting sa level na iyon. Kung masyadong maikli ang isang binti para sa mga fitting sa mga dulo nito, sasabihin ito ng BimCraft at walang papalitan: ilayo pa ang sulok.

:::note
Generic ang mga fitting at valve: iginuhit base sa size ng pipe o duct, hindi sa catalogue ng maker. May sariling size ang maker ang socket, press at grooved na fitting, valve body at equipment; suriin ang mga ito sa supplier mo bago mag-order.
:::

## Mga riser

Habang gumuguhit, i-type ang bagong taas sa **At** at pindutin ang {{key:Enter}}: didiretso pataas o pababa ang run sa huling sulok, na may elbow sa bawat dulo. Puwedeng umakyat ang riser hanggang sa level sa itaas. Ipinapakita ng bawat level ang mga bahagi ng run na inaabot ng view range nito, na may **UP** o **DN** sa riser.

## Mga drain at ang kanilang slope

Nagsisimula sa pinakamaliit na slope na pinapayagan ng International Plumbing Code para sa kanilang size ang sanitary at storm drain: 1/4 in. kada foot hanggang 2-1/2 in., 1/8 in. kada foot mula 3 hanggang 6 in., 1/16 in. kada foot mula 8 in. Nagsisimula ang Brazilian PVC drain pipe sa slope ng NBR 8160: 2 % hanggang DN 75, 1 % mula DN 100. I-type ang ibang slope sa bar o sa Properties: `1/4"/ft`, `2 %` o `1:50`. Bumababa ang run mula sa unang punto nito, kaya iguhit ang mga drain sa direksyon ng daloy nila. Ipinapakita ng plano ang pagbaba at isang arrow. Nagbababala ang Properties kapag mas patag ang drain kaysa sa minimum ng code.

## Sukatin ang mga drain ayon sa fixture unit

Pumili ng sanitary drain: ang **Fixture units** sa Properties ay nagsasabi kung ilan ang dala nito at ang pinakamaliit na size na kailangan nito. Binibilang ang bawat plumbing fixture na ang drain connector ay nasa run, at gayundin ang bawat drain na dumadaloy dito: iguhit ang mga drain sa direksyon ng daloy nila, bawat isa ay nagtatapos sa drain na dinadaluyan nito.

- Ang mga drain sa Brazilian PVC drain pipe ay binibilang sa **UHC** at sumusunod sa NBR 8160; ang iba ay binibilang sa **DFU** at sumusunod sa International Plumbing Code.
- **Drain**: ang **Branch** ay sinusukat base sa table ng code para sa fixture branch; ang **Building drain** base sa table nito ayon sa slope, kaya mahalaga ang **Slope** nito.
- Hindi kailanman mas maliit ang isang drain kaysa sa mga fixture drain na pinagsisilbihan nito (kailangan ng water closet ang DN 100, o 3 in.), at hindi rin mas maliit kaysa sa drain na dumadaloy dito. Ayon sa NBR 8160, hindi bababa sa DN 100 ang isang building drain.

Ang {{ui:Sukatin ang mga drain}} ay ginagawang size na kailangan nito ang bawat sanitary drain ng model na masyadong maliit para sa fixture unit nito, bilang isang hakbang na puwede mong i-undo. Ang drain na iginuhit na mas malaki sa kailangan nito ay iiwan sa dati. Kapag mas marami ang dala ng drain kaysa kaya ng pinakamalaking size ng pipe nito sa slope nito, sasabihin ito ng BimCraft: bigyan ito ng mas matarik na slope o ibang pipe.

:::note
Mga table ng horizontal na drain ang mga ito. Hindi sinusukat dito ang mga stack, vent at storm drain: suriin ang mga ito, at ang buong disenyo, laban sa code na nalalapat sa proyekto.
:::

## Valve

1. Piliin ang {{ui:Balbula}} at ang uri: gate, ball, globe o check.
2. I-click ang pipe kung saan ito pupunta. Pinuputol ang pipe sa paligid nito at konektado sa magkabilang panig ang valve.

Nakalista sa Properties ng run ang mga valve nito, bawat isa ay may {{ui:Alisin}}.

Mas maraming uri ng valve, strainer, damper sa mga duct, sarili mong pipe spec at family ng manufacturer: tingnan ang [Pipe specs, valves, dampers and manufacturers' families](topic:pipe-specs).

## Baguhin ang run

Pumili ng anumang bahagi ng run, sa plano o sa 3D view. Sa Properties:

- **System**, **Material**, **Class** at **Size** (pipe), o **Shape**, **Width**, **Height** (duct).
- Ang **Height above the level** ay naglilipat sa buong run pataas o pababa.
- **Insulation**: ang kapal nito, itinatabi para sa clearance check at listahan ng openings (walang iginuguhit para dito): tingnan ang [Check pipes and ducts against the structure](topic:mep-against-structure).
- Steel pipe: **Cut into spools**: tingnan ang [Steel pipe spools and spool sheets](topic:pipe-spools).
- **Slope** (pipe).
- **Flow** kasama ang {{ui:Sukatin}}: para sa tubig, ang pinakamaliit na size na nagpapanatili ng tubig sa 8 ft/s (2.4 m/s), o 5 ft/s (1.5 m/s) para sa mainit na tubig; sa 3 m/s para sa Brazilian PVC water pipe (NBR 5626). Para sa mga duct, ang velocity at friction rate ng duct gaya ng iginuhit. Ang sanitary drain ay sinusukat ayon sa fixture unit nila sa halip: tingnan ang **Sukatin ang mga drain ayon sa fixture unit** sa ibaba.

Ang bawat pagbabago ay isang hakbang ng {{ui:I-undo}}. Binubura ng {{key:Delete}} ang buong run.

## Mga plano

- Ang mga pipe na mas maliit sa 150 mm (mga 6 in.) ay iginuguhit bilang isang linya sa centre line nila, ang mas malalaking pipe at lahat ng duct ay bilang dalawang linya sa lapad nila.
- May sariling kulay ang bawat sistema; ipi-print ng plan PDF ang mga ito sa itim.
- May label ang bawat run ng size at sistema nito (halimbawa `2" CW` o `16×10 SA`).
- Tinutukoy ng view range ng plano kung aling run ang ipinapakita nito, at ang {{ui:Ipinapakita sa planong ito}} ay puwedeng mag-alis ng **Pipes** o **Ducts**: tingnan ang [Views, view ranges and your own sheets](topic:views-and-sheets).

## Mga iskedyul at takeoff

Idinadagdag ng panel na {{ui:Mga Iskedyul}} ang **Pipes** (ayon sa sistema, material at size, kasama ang haba nila), **Ducts** (ayon sa sistema, hugis at size, kasama ang haba at outside surface area) at **Fittings and valves** (ayon sa uri at size, binilang). I-click ang isang row para piliin kung ano ang nakalista rito; ang {{ui:I-download ang CSV}} ay nagda-download nito.

Dinadala ng {{ui:Takeoff}} ang mga run papunta sa TakeoffCraft: pipe at duct ayon sa size bilang mga run na iginuhit sa plano (ang mga drain na may slope ay sinusukat kasama ang slope nila), fitting at valve na binibilang kung nasaan sila: tingnan ang [Send the model's quantities to TakeoffCraft](topic:takeoff). Hindi kasama sa sheet na iyon ang mga riser, dahil hindi sila masusukat ng plano; ang iskedyul na Pipes ang may haba nila.

## Sa IFC file

Ang bawat run ay isang assembly na naglalaman ng mga bahagi nito: segment ng pipe at duct, fitting at valve, bawat isa ay may sariling type, material, kulay para sa sistema nito at mga port. Konektado ang mga port na magkadikit, at kabilang ang bawat bahagi sa distribution system nito (ang mga IFC2X3 file ay nakakakuha ng parehong bagay bilang flow segment, fitting at controller sa isang sistema). Nakikita ng ibang programang bumabasa ng IFC system ang isang konektadong run bawat sistema. Itinatabi kasama nito ang sariling definition ng run, kaya muli itong ginagawa ng BimCraft sa parehong paraan kapag binago mo ito.

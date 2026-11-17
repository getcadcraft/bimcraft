---
title: Hamisha modeli kama Collada au kwa Google Earth
summary: Andika modeli zilizofunguliwa za IFC kama faili la Collada (.dae) kwa Blender na programu nyingine za 3D, au kama kifurushi cha Google Earth (.kmz) kilichowekwa mahali ilipo kwenye ramani.
keywords: collada, dae, kmz, kml, google earth, blender, hamisha, kuweka kwenye ramani, latitudo, longitudo, mahali, programu za 3d
from: 81cfec09
---

{{ui:Collada}} kwenye upau wa zana (au {{ui:Hamisha Collada (.dae, .kmz)…}} kwenye menyu ya Faili katika mitindo ya menyu na utepe) huandika kilichofunguliwa kama Collada 1.4.1: kila modeli inayoonekana, zile zilizounganishwa zikiwa mahali ulipoziweka.

## Hamisha

1. Chagua {{ui:Collada}}.
2. Chagua umbizo:
   - {{ui:Faili ya Collada (.dae), kwa Blender na programu nyingine za 3D}}.
   - {{ui:Kifurushi cha Google Earth (.kmz): modeli imewekwa mahali ilipo kwenye ramani}}. Hutolewa tu modeli ikiwa na mahali.
3. Chagua chaguo, kisha {{ui:Export}}. Faili hupakuliwa, na upau wa hali unaonyesha vipengele vingapi vimeingia.

| Chaguo | Hufanya nini |
|---|---|
| {{ui:Andika mahali kwenye faili}} | Inaongeza latitudo, longitudo, kimo na mwelekeo wa asili ya faili kwenye .dae |
| {{ui:Kimo}} | {{ui:Ardhini: kiwango 0 cha modeli kimekaa juu ya ardhi}}, au {{ui:Kimo cha modeli chenyewe juu ya usawa wa bahari}} |
| {{ui:Jumuisha vyumba na nafasi}} | Nafasi nazo zinaingia (zinaachwa kwa chaguo-msingi) |
| {{ui:Jumuisha vipengele vilivyofichwa}} | Vipengele ulivyoficha pia vinaandikwa (kwa chaguo-msingi ni kile unachokiona tu) |

## Kilichomo kwenye faili

| Kwenye modeli | Kwenye faili la Collada |
|---|---|
| Jengo, ghorofa | Nodi zilizowekwa ndani, ghorofa kwa mpangilio wa mwinuko; vipengele visivyo kwenye ghorofa yoyote viko chini ya "Haijawekwa" |
| Kila kipengele | Nodi moja yenye mesh yake, ikitajwa kama kwenye modeli (jina lake, la sivyo darasa lake na lebo) |
| Darasa, GlobalId, aina iliyotabiriwa | Kwenye data ya ziada ya nodi (wasifu IFC), kwa jina halisi (wasifu ModelCraft) |
| Rangi | Nyenzo, pamoja na uwazi |
| Vitengo na shoka | Mita, Z juu. Kiwango 0 cha modeli mbele kiko kwenye kimo 0 |

Modeli inabaki karibu na asili ya ardhi, kwa hiyo programu zinazofanya kazi kwa usahihi mmoja zinaionyesha bila kutetemeka. ModelCraft huandika faili zake za Collada kwa kiandishi kilekile, na hufungua faili hizi kwa majina ya vipengele vyake.

## Mahali pa taarifa inapotoka

Modeli iliyo mbele hutoa mahali, kwa namna ile ile {{ui:Pima}} inavyohesabu latitudo na longitudo ya nukta:

- Ubadilishaji wa ramani (IFC4 IfcMapConversion, au seti za sifa za IFC2X3) kupitia mfumo wa kuratibu wa modeli. Mfumo uliouchagua kwa modeli unashinda ule ambao faili unautaja.
- La sivyo, latitudo na longitudo ya eneo (kwa makadirio: inatosha kwa eneo zima).

Mwelekeo unapimwa, si kudhaniwa: unazingatia mzunguko wa ramani, kaskazini halisi na muungano wa ramani. Ili kumpa modeli mahali, tumia {{ui:Asili ya ramani…}} katika {{ui:Pima}}.

## Katika programu nyingine

- **Google Earth** husoma .kmz: modeli inaonekana mahali pake, imegeuzwa kuelekea kaskazini. Faili la kawaida la .dae halina mahali ambapo Google Earth inaisoma; tumia .kmz.
- **Blender** (4.x na za awali): File, Import, Collada (.dae). Kila kipengele kinaingia kama kitu chake chenyewe pamoja na nyenzo yake. Mahali kinahifadhiwa kwenye data ya ziada ya faili, ambayo Blender haisomi. Blender 5.0 iliondoa kiingizaji chake kilichojengwa ndani cha Collada; hapo, tumia {{ui:USD}} au usafirishaji wa glTF, au fungua .dae kwenye Blender 4.5 kisha uhifadhi kama .blend.

Majaribio yetu yanakagua kila faili dhidi ya skimu ya Collada 1.4.1 na kulisoma tena kwa msomaji huru wa Collada. Hayajafunguliwa kwenye Blender au Google Earth.

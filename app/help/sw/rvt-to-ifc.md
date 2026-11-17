---
title: Kutoka faili ya mradi hadi BimCraft kupitia IFC
summary: Mipangilio ya kuhamisha IFC inayofunguka vizuri zaidi kwenye BimCraft (toleo, seti za sifa, wingi wa msingi, vyumba, faili zilizounganishwa, viwianishi), jinsi ya kufungua matokeo, na kile usafirishaji unachohifadhi.
keywords: hamisha, hamisha ifc, rvt hadi ifc, badilisha, 3d, jiometri, ifc2x3, ifc4, mwonekano wa uratibu, mwonekano wa marejeo, mwonekano wa uhamishaji wa muundo, seti za sifa, wingi wa msingi, vyumba, nafasi, faili zilizounganishwa, viwianishi vilivyoshirikiwa, nukta ya upimaji, nukta kuu ya mradi, mipangilio
from: 3efd5fc9
---

## Utakachofanya

Geuza faili ya mradi kuwa faili ya IFC unayoweza kuzungusha, kukagua, kuhakiki na kuhariri kwenye BimCraft. BimCraft bado haisomi modeli ya 3D iliyo ndani ya faili ya `.rvt`, hivyo usafirishaji unafanyika kwenye programu iliyotengeneza faili (Revit); BimCraft inafungua matokeo.

## Hatua

1. Fungua mradi kwenye programu iliyoutengeneza. Kadi ya BimCraft inataja toleo ulilohifadhiwa.
2. Fungua mwonekano wa 3D unaoonyesha unachotaka kuhamisha.
3. Chagua **Faili > Hamisha > IFC**.
4. Kwenye kisanduku cha kuhamisha chagua usanidi (au **Rekebisha usanidi…**) wenye mipangilio iliyo hapa chini.
5. Chagua folda na jina la faili, kisha hamisha.
6. Kwenye BimCraft, bofya {{ui:Choose a file}} kisha uchague faili jipya la `.ifc`. Modeli zilizounganishwa zilizohamishwa kama faili zao wenyewe zinafunguka kwenye eneo moja kwa {{ui:Add a model}}.

## Mipangilio inayofunguka vizuri hapa

| Mpangilio kwenye kihamishi | Chagua | Kwa nini |
|---|---|---|
| Toleo la IFC | **IFC4 Reference View** kwa kuangalia, kukagua na kukadiria kiasi; **IFC2X3 Coordination View 2.0** pale wengine wanapohitaji IFC2X3 | Zote mbili zinafunguka kikamilifu. **IFC4 Design Transfer View** pia inafunguka, ikiwa na maumbo sahihi zaidi, lakini faili ni kubwa na polepole zaidi. |
| Aina ya faili | **IFC** (ya kawaida) | BimCraft haifungui `.ifczip` wala `.ifcxml`. |
| Awamu / vipengele vinavyoonekana | Awamu unayomaanisha, na **Export only elements visible in view** unapoandaa mwonekano wa 3D kwa ajili yake | Inaacha kile ulichokificha kwa makusudi. |
| Seti za sifa | **Export Revit property sets** na **Export IFC common property sets** | Zinakuwa seti za sifa ambazo BimCraft inaonyesha kwenye {{ui:Properties}}, na ambazo {{ui:Find}}, {{ui:Color}} na {{ui:Model checks}} zinatumia. |
| Wingi wa msingi | **Export base quantities** | {{ui:Quantity totals}} na majedwali yanazitumia (urefu, maeneo, ujazo) badala ya kukisia. |
| Vyumba na maeneo | **Export rooms in 3D views** (au chaguo la Rooms / Spaces) | Vyumba vinafika kama nafasi: bofya {{ui:Spaces}} kuviona. |
| Faili zilizounganishwa | **Export linked files as separate IFCs** | Kila kiunganishi kinakuwa faili yake; vifungue pamoja na {{ui:Add a model}} na vitapangana. |
| Msingi wa viwianishi | **Shared coordinates** (au nukta ya upimaji) | Faili kisha linabeba mahali pake kwenye ramani (IfcMapConversion), hivyo Measure › Location, tabaka za ramani ardhini na mawingu ya nukta yaliyowekwa kwa viwianishi vya ramani vinafanya kazi. Nukta kuu ya mradi inaweka modeli karibu na asili lakini bila mahali pake kwenye ramani. |
| Gawa kuta na nguzo kwa ghorofa | Washa, unapokadiria kiasi kwa kila ghorofa | Sehemu ya kila ghorofa ni kipengele chake. |

## Utakachoona

Modeli kwenye 3D, pamoja na ghorofa zilizochukuliwa kutoka viwango vya mradi na taarifa za mradi kwenye paneli ya {{ui:File}}. **Exported from** inataja kihamishi.

## Kinachohifadhiwa na kisichohifadhiwa

- **Kinahifadhiwa**: jiometri, ghorofa, aina za vipengele, majina, aina, vigezo vingi (kama seti za sifa), wingi wa msingi pale unapouomba, vyumba kama nafasi, na mahali kwenye ramani kwa viwianishi vilivyoshirikiwa.
- **Hakihifadhiwi**: mionekano, laha, maelezo ya kuchora, familia kama familia zinazoharirika, worksets na chaguo za muundo. Faili ya IFC ni picha ya vipengele vya modeli, si mradi. Kwa laha, hamisha DWG kisha uifungue kwenye mwonekano wa 2D.

## Makosa ya kawaida

- **Vigezo havipo kwenye BimCraft.** Washa chaguo za seti za sifa zilizo hapo juu kisha hamisha tena.
- **Vyumba havipo.** Washa chaguo la vyumba, kisha bofya {{ui:Spaces}}.
- **Kuhifadhi kama `.ifczip`.** Chagua IFC ya kawaida, au fungua `.ifczip` kwa kuifungua zip.
- **Hakuna mahali kwenye ramani.** Hamisha kwa viwianishi vilivyoshirikiwa; hakikisha nukta ya upimaji ya mradi imewekwa.
- **Kutarajia mabadiliko yarudi kwenye mradi.** Mabadiliko unayohifadhi kwenye BimCraft yanaingia kwenye faili jipya la IFC, si kwenye faili la mradi.

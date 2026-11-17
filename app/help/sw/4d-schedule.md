---
title: Cheza ratiba ya ujenzi kwenye modeli
summary: Fungua orodha ya kazi kama CSV, unganisha kila kazi na vipengele kwa sifa, kisha pitia tarehe uone kilichojengwa, kinachoendelea na kisichoanza bado.
keywords: 4d, ratiba, mfuatano wa ujenzi, rekodi ya muda, awamu, programu, gantt, kazi, tarehe, uigaji, maendeleo, kimejengwa, csv, hatua, awamu, kifurushi cha kazi, wbs, kundi
from: 1b985a64
---

## Unachofanya

Tazama jengo likijengwa: kila kazi katika ratiba yako ikiunganishwa na vipengele inavyojenga, ikionyeshwa siku kwa siku.

## Hatua za kufanya

1. Fungua modeli ya IFC kisha fungua {{ui:4D schedule}} kwenye paneli ya kushoto.
2. Bofya {{ui:Download a template}} kwa orodha ya kazi yenye wiki kwa kila ghorofa, kisha ibadilishe kwenye lahajedwali. Au andika yako mwenyewe.
3. Bofya {{ui:Open a task list…}} kisha uchague CSV.
4. Buruta kitelezi cha tarehe, au bofya {{ui:Play}}.

## Orodha ya kazi

CSV yenye mstari wa kichwa na safu **Task**, **Start**, **Finish**, **Field** na **Value**. Koma au semikoloni zote zinafanya kazi.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Ghorofa 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Paa | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Paa | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Andika tarehe kama YYYY-MM-DD.
- Mstari mmoja unaunganisha kazi na kila kipengele ambacho **Field** yake ina **Value** hiyo kamili. Field ni sifa kama Storey, Class, Name, Type, Material, Tag au GlobalId, au sifa yoyote iliyoandikwa kwa jina la seti na jina lake: `Pset_WallCommon.FireRating`.
- Rudia kazi kwenye mistari mingi, yenye tarehe zile zile, ili kuunganisha vipengele zaidi nayo.

## Hatua na vifurushi vya kazi

Ongeza safu ya **Stage**, safu ya **Package**, au zote mbili, ili kukusanya kazi kwenye hatua na vifurushi vya kazi. Phase na WBS pia hufanya kazi kama majina ya safu.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Sakafu ya Ghorofa 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Muundo | Fremu |
| Kuta za Ghorofa 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Muundo | Fremu |
| Milango | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Umaliziaji | Useremala |

- Kazi moja ni ya hatua moja na kifurushi kimoja. Ikiwa mstari wa baadaye wa kazi hiyo hiyo unataja nyingine, mstari huo unaorodheshwa pamoja na nambari yake ya mstari na kuachwa.
- Jina lile lile la kifurushi katika hatua mbili ni vifurushi viwili.

Orodha ikiwa na vikundi, orodha ya {{ui:Show}} inaonekana juu ya tarehe. Chagua hatua au kifurushi nacho kinacheza kama kitu kimoja:

- kitelezi na {{ui:Play}} vinaendesha kuanzia tarehe ya kwanza ya kuanza kwa kikundi hadi tarehe ya mwisho ya kumaliza,
- kazi za kikundi tu ndizo zinazoorodheshwa na kupakwa rangi, na kila kitu nje ya kikundi kinaonekana kwa uwazi,
- mstari ulio chini ya orodha unaonyesha ni kazi ngapi za kikundi zimekamilika, zinaendelea na zinakuja siku hiyo,
- {{ui:Select its elements}} huchagua kila kipengele cha kikundi, kwa ajili ya {{ui:Show}}, {{ui:Section}} au jedwali.

Chagua **Kila kazi** kuona ratiba nzima tena.

## Kinachopaswa kuonekana

- **Kimejengwa**: vipengele ambavyo kazi zake zote zimekamilika, kwa rangi zao wenyewe.
- **Kinaendelea**: vipengele vyenye kazi inayoendelea siku hiyo, kwa rangi ya ochre (kahawia ya udongo). Kazi inaendelea kuanzia tarehe yake ya kuanza hadi tarehe ya kumaliza.
- **Hakijaanza**: kwa uwazi.
- Vipengele visivyo katika kazi yoyote vinabaki kama vilivyo. Orodha inaonyesha vipengele vingapi kila kazi imepata. Mistari isiyoweza kusomwa, au isiyopata kitu, huorodheshwa pamoja na nambari zake za mistari.

## Viunganishi, chati ya Gantt na MS Project

- Fungua faili ya Microsoft Project XML (`.xml`) au CSV yenye safu ya `Predecessors`. Viunganishi vinaweza kuwa kumaliza hadi kuanza, kuanza hadi kuanza, kumaliza hadi kumaliza au kuanza hadi kumaliza, kila kimoja kikiwa na muda wa mbele au wa nyuma kwa siku.
- Chini ya orodha ya kazi, chati ya Gantt inachora kila kazi kama baa yenye mishale kwa viunganishi. Kazi kwenye njia muhimu ni nyekundu. Kitanzi cha viunganishi au kazi ya kutangulia isiyopo huorodheshwa kwenye paneli.
- {{ui:Save as MS Project XML}} na {{ui:Save CSV with links}} huandika ratiba tena pamoja na viunganishi vyake.

## Ijayo

- [Tafuta vipengele kwa darasa, jina au sifa](topic:find)
- [Paka rangi vipengele kwa sifa](topic:color-by-property)

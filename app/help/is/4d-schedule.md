---
title: Spila byggingaráætlun á líkaninu
summary: Opnaðu verkefnalista sem CSV-skrá, tengdu hvert verkefni við hluti eftir eiginleika og farðu milli dagsetninga til að sjá hvað er byggt, í vinnslu og ekki byrjað enn.
keywords: 4d, áætlun, byggingarröð, tímalína, áfangaskipting, verkáætlun, gantt, verkefni, dagsetningar, hermun, framvinda, byggt, csv, stig, áfangi, verkpakki, wbs, hópur
from: 1b985a64
---

## Hvað þú gerir

Fylgstu með byggingunni rísa: hvert verkefni í áætluninni tengt við þá hluti sem það byggir, sýnt dag fyrir dag.

## Skref

1. Opnaðu IFC-líkan og opnaðu {{ui:4D-áætlun}} í vinstra spjaldinu.
2. Smelltu á {{ui:Sækja sniðmát}} fyrir verkefnalista með einni viku á hverja hæð og breyttu honum í töflureikni. Eða skrifaðu þinn eigin.
3. Smelltu á {{ui:Opna verkefnalista…}} og veldu CSV-skrána.
4. Dragðu dagsetningarsleðann eða smelltu á {{ui:Spila}}.

## Verkefnalistinn

CSV-skrá með hausröð og dálkunum **Task**, **Start**, **Finish**, **Field** og **Value**. Kommur eða semíkommur virka báðar.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Skrifaðu dagsetningar sem YYYY-MM-DD.
- Lína tengir verkefnið við sérhvern hlut þar sem **Field** hefur nákvæmlega þetta **Value**. Reiturinn er eiginleiki eins og Storey, Class, Name, Type, Material, Tag eða GlobalId, eða hvaða eiginleiki sem er skrifaður með sínu eigin mengi og heiti: `Pset_WallCommon.FireRating`.
- Endurtaktu verkefni á fleiri línum, með sömu dagsetningum, til að tengja fleiri hluti við það.

## Áfangar og verkpakkar

Bættu við dálki **Stage**, dálki **Package**, eða báðum, til að safna verkefnum í áfanga og verkpakka. Phase og WBS virka líka sem dálkaheiti.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Verkefni tilheyrir einum áfanga og einum pakka. Ef síðari lína sama verkefnis nefnir annan, er sú lína skráð með línunúmeri sínu og sleppt.
- Sama heiti pakka í tveimur áföngum eru tveir pakkar.

Þegar listinn hefur hópa birtist {{ui:Sýna}}-listi fyrir ofan dagsetninguna. Veldu áfanga eða pakka og hann spilar sem eina heild:

- sleðinn og {{ui:Spila}} keyra frá fyrstu byrjun hópsins til síðasta loka hans,
- aðeins verkefni hópsins eru skráð og máluð, og allt utan hópsins er gegnsætt,
- línan undir listanum segir hversu mörg verkefnanna eru búin, í vinnslu og eftir á þeirri dagsetningu,
- {{ui:Velja hluta þess}} velur alla hluti hópsins, til {{ui:Sýna}}, {{ui:Snið}} eða lista.

Veldu **Öll verkefni** til að sjá alla áætlunina aftur.

## Hvað þú ættir að sjá

- **Byggt**: hlutir þar sem öll verkefni eru búin, í eigin litum.
- **Í vinnslu**: hlutir með verkefni í gangi þann dag, í okkurgulum lit. Verkefni er í gangi frá upphafsdegi til lokadags.
- **Ekki byrjað**: gegnsætt.
- Hlutir sem eru í engu verkefni haldast eins. Listinn sýnir hversu marga hluti hvert verkefni fann. Línur sem ekki var hægt að lesa, eða fundu ekkert, eru skráðar með línunúmerum sínum.

## Tenglar, Gantt-línuritið og MS Project

- Opnaðu Microsoft Project XML-skrá (`.xml`) eða CSV-skrá sem hefur dálk `Predecessors`. Tenglar geta verið loka-til-byrjunar, byrjun-til-byrjunar, lok-til-loka eða byrjun-til-loka, hver með töf eða forskoti í dögum.
- Undir verkefnalistanum teiknar Gantt-línuritið hvert verkefni sem stiku, með örvum fyrir tenglana. Verkefni á mikilvægu leiðinni eru rauð. Tenglalykkja eða forgangsverkefni sem er ekki til er skráð í spjaldinu.
- {{ui:Vista sem MS Project XML}} og {{ui:Vista CSV með tengingum}} skrifa áætlunina til baka með tenglunum.

## Næst

- [Finndu hluti eftir flokki, heiti eða eiginleika](topic:find)
- [Litaðu hluti eftir eiginleika](topic:color-by-property)

---
title: Hati kutoka modeli
summary: Andika vainisho au maelezo mara moja kama kiolezo, chenye sehemu za kiasi, sifa na lebo, kisha ukijaze kutoka IFC iliyofunguliwa kama PDF au hati ya Word.
keywords: hati, hati, vainisho, spec, maelezo, kiolezo, markdown, ripoti, word, docx, pdf, kiasi, jedwali, biashara, jedwali la milango, umaliziaji, documentcad
from: 2b0c9156
---

## Utakachofanya

Kiolezo ni maandishi ya Markdown yenye sehemu ndani ya mabano mawili ya mikunjo. BimCraft hujaza sehemu kutoka modeli iliyofunguliwa (hesabu, kiasi kwa aina, sifa, na [lebo](topic:tags-and-schedules) zako) kisha huhifadhi matokeo kama PDF, hati ya Word (.docx) au Markdown.

## Hatua

1. Fungua modeli ya IFC.
2. Katika paneli ya kushoto, chini ya {{ui:Kiasi}}, fungua {{ui:Hati kutoka modeli}}.
3. Chagua kiolezo: {{ui:Milango na vifaa}} au {{ui:Kuta, mbao za ndani na umaliziaji}}, au {{ui:Pakia kiolezo (.md)…}} cha kwako mwenyewe.
4. Kiolezo kikisoma lebo ambazo modeli bado haijazifafanua, bofya {{ui:Ongeza lebo za kiolezo hiki}}, kisha weka lebo kwenye vipengele chini ya {{ui:Lebo}}.
5. Badilisha maandishi upendavyo kisha ubofye {{ui:Onyesha hati}}.
6. Bofya {{ui:PDF}} (chagua A4 au Letter kwanza) au {{ui:Word (.docx)}}.

## Utakachoona

- Hati iliyojazwa chini ya vitufe, pamoja na majedwali yake.
- Orodha ya onyo sehemu inaposhindwa kusomwa (lebo isiyofafanuliwa, sifa ambayo modeli haina, kizuizi ambacho hakifungwi kamwe); sehemu kama hiyo huchapishwa kama `[?…]`.
- Kurasa za PDF zenye kichwa cha hati na "Ukurasa 1 wa 3" chini ya kila ukurasa; majedwali marefu huendelea na safu yao ya vichwa.

## Sehemu

| Sehemu | Hutoa |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | jina na maelezo ya mradi, jina la faili, leo |
| `{{count IfcDoor}}` | idadi ya milango |
| `{{sum IfcWall NetSideArea}}` | jumla, pamoja na kipimo chake |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | hesabu (`+ - * /` na mabano) juu ya masharti kwenye mabano ya mraba: `[sum …]`, `[count …]`, na ndani ya each `[qty Width]`. `round n` huweka desimali, `unit` huongeza kipimo. Kitu kisichoweza kusomwa, au mgawanyo kwa sifuri, huchapishwa `[?…]` na kutoa onyo |
| `{{qty IfcWall NetSideArea by Type}}` | jedwali: safu moja kwa kila aina yenye idadi yake na jumla, pamoja na safu ya jumla |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | jedwali, safu moja kwa kila kipengele |
| `{{tag Finish}}` | ndani ya mzunguko, thamani ya kipengele; mahali pengine thamani zote zinazotumika (Mwaloni, Rangi) |
| `{{tags}}` | ufafanuzi wa lebo kama jedwali |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | maandishi mara moja kwa kila kipengele; sehemu iliyo baada ya `{{else}}` pale yasipokuwepo |
| `{{#group IfcWall by Type}} … {{/group}}` | maandishi mara moja kwa kila aina, yenye `{{value}}`, `{{count}}`, `{{sum Length}}` na `{{#each}}` rahisi ndani yake |

Ndani ya `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (Lebo ya IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (ya kipengele chenyewe, pamoja na kipimo chake).

Darasa linaweza kuwa nyingi (`IfcDoor|IfcWindow`) au kila kipengele (`*`). Punguza yoyote kati yao kwa `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Majaribio ni `=`, `!=`, `~` (ina), `>`, `<`, `>=`, `<=`, `has` na `hasnot`; unganisha kadhaa kwa `and`; weka thamani yenye nafasi ndani ya "nukuu". `sort Name` hupanga mzunguko.

## Majedwali na vainisho katika hati

`{{schedule doors}}` huchapisha jedwali la modeli kama jedwali, kwa mpangilio wa ofisi yako: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, au jina la mpangilio uliouhifadhi kwenye Majedwali. `{{specification}}` huchapisha vainisho vya mradi. Violezo **Michoro ya kazi ya majedwali** na **Vainisho** vinavitumia. Katika onyesho la kukagua, bofya takwimu ya jedwali kama hilo ili kuchagua vipengele ilivyotoka. Angalia [Panga, hifadhi na hamisha jedwali](topic:schedule-layouts) na [Andika vainisho kutoka modeli](topic:specification).

## Vya kujua

- Sehemu hutaja kitu kilichojengwa ndani (Name, Type, Storey, Class, Material, Mark), lebo (`tag:Fire rating`, au jina lake), sifa (`Pset_WallCommon.FireRating`) au jina la sifa tu (`NetSideArea`, `Width`): jina tupu husoma seti ya kila kipengele chenyewe, seti za kiasi zikitangulia, kwa hiyo `Width` kwenye mlango ni upana wa mlango, si unene wa ukuta. Ndani ya `where`, jina tupu husoma seti ambayo vipengele vingi vilivyochaguliwa vinayo.
- Kiasi ni kile seti za kiasi za faili zinachosema (BimCraft huziandika kwa kile inachochora); vipimo hutoka kwenye mipangilio ya vipimo ya faili.
- Maneno ya sehemu (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) yanabaki kwa Kiingereza katika lugha zote. Violezo vya mfano viko kwa Kiingereza.
- Maandishi kutoka modeli hayageuki kuwa muundo wa maandishi kamwe: jina lenye `*` au `|` ndani yake huchapishwa jinsi lilivyo.
- Hifadhi kiolezo ulichobadilisha kwa {{ui:Hifadhi kwenye kivinjari hiki}} (kivinjari hiki pekee ndicho kinacho) au {{ui:Pakua kiolezo}}.
- Maandishi ya PDF hutumia fonti za kawaida za PDF: herufi isiyo ya maandishi ya Ulaya Magharibi huchapishwa kama "?", na mstari wa hali unasema ni ngapi.
- Violezo kwa kila biashara viko kwenye {{ui:Maktaba}} (aina Kiolezo cha hati). Katika Hati kutoka modeli, chagua Kutoka Maktaba…, chagua moja, na maandishi yake pamoja na lebo inazosoma yataingia; hariri upendavyo. Kuchapisha kiolezo chako kwenye Maktaba ni upakiaji ule ule wa kipengee chochote kingine. Bado haijajengwa: hesabu zaidi ya hesabu za idadi na jumla.

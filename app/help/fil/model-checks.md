---
title: Suriin ang model para sa mga karaniwang problema
summary: Hanapin ang mga elementong kulang sa property na kailangan mo, GlobalId na ginamit nang dalawang beses, mga elementong walang storey, at mga kopyang nakapatong sa isa't isa.
keywords: check, model check, validation, qa, quality, kulang na property, required, duplicate, globalid, guid, storey, nakapatong, overlap
from: 4d835513
---

## Ano ang gagawin mo

Suriin ang model bago mo ito ipasa: ang mga problemang sumisira sa schedule, dami at iba pang software ng ibang tao.

## Mga hakbang

1. Buksan ang isang IFC model.
2. Buksan ang {{ui:Model checks}} sa kaliwang panel.
3. Sa ilalim ng {{ui:Required properties}}, may panuntunan nang nakahanda (anumang class, Name). Palitan ang class nito (o ang {{ui:Any class}}) at property, o i-click ang {{ui:Add a property}} para sa ibang panuntunan; inaalis ng x ang isa. Nabibigo ang isang elemento sa panuntunan kapag kulang o walang laman ang property. Nananatili ang mga panuntunan sa browser na ito para sa bawat model.
4. I-click ang {{ui:Run checks}}.
5. I-click ang isang resulta para piliin ang mga elementong iyon at i-zoom sa mga ito.

## Ano ang dapat mong makita

- **Nawawalang kinakailangang property**: bawat panuntunan kasama ang mga elementong walang value dito.
- **GlobalId na ginamit nang dalawang beses**: mga elementong nagbabahagi ng iisang GlobalId. Itinuturing silang iisang elemento ng ibang software.
- **Walang storey**: mga elementong may hugis na walang storey na naglalaman nito.
- **Mga kopyang nakapatong sa isa't isa**: mga elementong pareho ang class at type, pareho ang hugis at lugar, kaya dalawang beses binibilang sa mga dami.

Ang bawat linya sa mga resulta ay isang button: i-click ito para piliin at i-zoom sa mga elementong iyon. Ang unang 50 grupo lamang ng bawat check ang nakalista. Makikita rin ang parehong natuklasan sa {{ui:Problems}}.

## Mga dapat malaman

- Tinitingnan ng mga check ang aktibong model kapag maraming model ang bukas. Tingnan ang [Tingnan nang sabay ang maraming IFC model](topic:several-models).
- Pagkatapos ng edit, patakbuhin ulit ang mga check.
- Sa panel na {{ui:Problems}}, ang haba, lawak at volume sa mga salita ng problema ay sumusunod sa {{ui:Units}} na pinili sa toolbar (ang pinto na 800 mm ay mababasang 2'-7 1/2" sa feet at inches); palitan ang unit at ire-reword ng panel ang mga ito.

## Susunod

- [I-audit ang model: mga kuwarto, tag, LOD, clash at interface](topic:audit-the-model)
- [Hanapin ang mga elemento ayon sa class, pangalan o property](topic:find)
- [Burahin, i-cut, kopyahin at i-paste ang mga elemento](topic:copy-paste)

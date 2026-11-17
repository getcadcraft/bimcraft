---
title: I-export ang model bilang USD
summary: Isulat ang mga bukas na IFC model bilang USD para sa rendering, scene assembly at iba pang 3D na programa, kasama ang IFC class, GlobalId at properties ng bawat elemento.
keywords: usd, usda, usdc, usdz, openusd, export, ifc, globalid, properties, palapag, disiplina, scene assembly, archviz, pag-render
from: 2be5f7b8
---

{{ui:USD}} sa toolbar ay sumusulat ng kung ano ang bukas (bawat model, pati ang mga federated na inilagay mo) bilang iisang USD file.

## Export

1. Piliin ang {{ui:USD}} sa toolbar.
2. Pumili ng {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} o {{ui:Package (.usdz)}}.
3. Dina-download ang file. Sinasabi ng status bar kung ilang elemento ang naisama.

## Ano ang nasa file

| Sa IFC model | Sa USD file |
|---|---|
| Site, building, palapag | Naka-nest na group, ang mga palapag ayon sa pagkakasunod ng elevation |
| Bawat elemento | Isang prim sa ilalim ng palapag at disiplina nito (Architecture, Structure, MEP, Furnishing, Site, Spaces, Other), kasama ang geometry nito bilang mesh |
| Class, GlobalId, pangalan, uri, tag | Mga attribute na may pangalang `ifc:class`, `ifc:globalId`, `ifc:name` at iba pa |
| Mga set ng property at quantity | Isang attribute bawat property; haba, lawak at volume sa metro, metro kuwadrado at metro kubiko |
| Mga kulay | Mga material (may transparency) |
| Spaces | Pinananatili, minarkahan bilang guides para laktawan ng mga renderer |

Nakalagay ang geometry sa sariling coordinates ng IFC file. Sumusunod ang layout sa nakasulat na USD conventions ng CadCraft para sa mga gusali.

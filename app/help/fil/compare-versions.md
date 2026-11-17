---
title: Ihambing ang dalawang bersyon ng model
summary: Magbukas ng dalawang bersyon ng parehong IFC model at tingnan kung aling mga element ang idinagdag, inalis at binago, itinugma ayon sa GlobalId nila, na may CSV ng bawat pagbabago.
keywords: compare, diff, difference, versions, revision, changes, changed, added, removed, moved, globalid, guid, what changed, ihambing, bersyon, pagbabago
from: cfca6971
---

## Ano ang gagawin mo

Tingnan kung ano ang nagbago sa pagitan ng model na hawak mo at ng ipinadala sa iyo: aling mga element ang bago, alin ang nawala, alin ang nailipat o nagkaroon ng bagong property value.

## Mga hakbang

1. Buksan ang mas bagong bersyon, saka i-click ang {{ui:Add a model…}} at piliin ang mas luma. Tingnan ang [Tingnan ang ilang IFC model nang sabay](topic:several-models).
2. Sa {{ui:Models}}, buksan ang {{ui:Compare versions}}.
3. Piliin ang {{ui:Older version}} at ang {{ui:Newer version}}.
4. I-click ang {{ui:Compare}}.
5. I-click ang isang element sa listahan para piliin ito at makita ang mga property nito. I-click ang {{ui:Download CSV}} para sa bawat pagbabago, property por property.
6. I-click ang {{ui:Clear}} para bumalik sa karaniwang view.

## Ano ang dapat makita

- Ang mga **Added** na element ay asul, mula sa mas bagong bersyon.
- Ang mga **Removed** na element ay pula, mula sa mas lumang bersyon.
- Ang mga **Changed** na element ay ocher, mula sa mas bagong bersyon, at sinasabi kung ano ang nagbago: mga property, galaw kasama ang layo nito, o bagong hugis.
- Ang lahat ng pareho ay see-through.

## Mabuting malaman

- Itinutugma ang mga element ayon sa GlobalId nila. Kapag binibigyan ng program ang mga element ng bagong GlobalId sa bawat export, lalabas na inalis at idinagdag muli ang bawat element.
- Inihahambing ang mga posisyon kung saan nakalagay ang mga model sa eksena. Kung sinadyang ilipat ang isang bersyon, ihanay muna ang mga ito gamit ang {{ui:Move}} sa {{ui:Models}}.
- Hindi isinasama sa paghahambing ang GlobalId na ginamit nang dalawang beses sa iisang model. Hanapin ang mga ganoon sa [Suriin ang model para sa karaniwang problema](topic:model-checks).

## Susunod

- [Mga issue at BCF file](topic:issues-bcf)
- [Pagsamahin ang dami ayon sa property](topic:quantity-totals)

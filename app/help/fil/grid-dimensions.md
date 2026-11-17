---
title: Maglagay ng dimension sa grid
summary: Ipakita ang spacing sa pagitan ng mga katabing grid line at ang kabuuang laki ng grid sa plano ng bawat level, nakaimbak sa IFC at sumusunod sa grid kapag nagbago ang mga linya.
keywords: grid, mga dimension, dimension, spacing, bays, kabuuang laki, bubble, column grid, plano, sheet
from: aaea5d08
---

## Ang gagawin mo

Ilagay ang spacing sa pagitan ng mga grid line at ang kabuuang laki ng grid sa mga plano, lampas sa mga bubble, para dala ng mga sheet na gawa rito ang mga dimension. Kailangan mo muna ng grid: tingnan ang [Mga grid at haligi](topic:grids-and-columns).

## Mga hakbang

1. Ipakita ang plano ng isang level at i-click ang {{ui:Grid}} para i-on ang grid tool. Lumalabas ang hilera ng grid options.
2. Lagyan ng tsek ang {{ui:Mga dimension}}. Iguguhit sa plano ang spacing sa pagitan ng magkakatabing numbered line at ng magkakatabing lettered line, at ang kabuuang laki sa bawat direksyon.
3. Pumili ng ibang level: pareho ring ipapakita ang mga dimension sa plano nito.
4. Ilipat ang isang linya, palitan ang pangalan ng isa o magdagdag ng isa. Susunod ang mga dimension sa grid.
5. Alisin ang tsek sa {{ui:Mga dimension}} para tanggalin ulit ang mga ito.

## Mga tala

- Ang bawat pagbabago ay isang undo step: {{key:Mod+Z}} ang magbabawi nito.
- Naka-save sa IFC kasama ng grid ang setting, at dala ng mga plano na nakalagay sa sheet ang mga dimension.
- Kung walang grid sa model na maaaring baguhin (hindi mababago rito ang grid na galing sa file ng ibang program), ang status line ay nagsasabing "Walang grid na mababago."

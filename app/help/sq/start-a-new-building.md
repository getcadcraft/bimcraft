---
title: Nisni një ndërtesë të re
summary: Bëni një model të zbrazët ndërtese me nivelet e saj, vizatoni muret, vendosni elemente nga biblioteka dhe ruajeni si IFC.
keywords: e re, ndërtesë e re, bosh, e zbrazët, nga e para, shabllon, nivele, katet, dysheme, krijo, model
from: 546b8ae8
---

## Çfarë do të bëni

Nisni një model ndërtese nga e para, në vend që ta hapni një. BimCraft krijon një model IFC bosh me një projekt, një vend, ndërtesën dhe nivelet e saj. Mund të vendosni pajisje dhe mobilje në nivele nga biblioteka, dhe ta ruani si skedar IFC.

:::note
Muret mund të vizatohen tani: shih [Vizato muret](topic:draw-walls). Dyert, dritaret, dyshemetë dhe çatitë po ndërtohen më pas.
:::

## Hapat

1. Klikoni {{ui:New building}} nën **Hap një skedar ose dosje**, ose në faqen e fillimit.
2. Shkruani **Emrin e ndërtesës**.
3. Zgjidhni sa **Nivele** ka (nga 1 deri në 200).
4. Shkruani **Lartësinë e nivelit**, nga dysheme në dysheme: për shembull `10'-0"`, `10'6"` ose `3000 mm`. Një numër i thjeshtë është në këmbë në SHBA, dhe në milimetra gjetkë.
5. Klikoni {{ui:Create}}. Nivelet renditen nga 0, secili një lartësi nivelli mbi tjetrin, dhe emërohen Niveli 1, Niveli 2 e kështu me radhë. Shfaqen në pemën e modelit, dhe planimetria e Nivelit 1 hapet pranë pamjes 3D me {{ui:Draw}} të ndezur.
6. Vizatoni muret: shih [Vizato muret](topic:draw-walls). Riemërtoni nivelet ose ndryshoni lartësitë e tyre te paneli **Nivelet**.
7. Vendosni elemente: shih [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library). Shiriti i vendosjes liston çdo nivel.
8. Klikoni {{ui:Save as IFC}}. Skedari emërohet sipas ndërtesës, për shembull `Shtëpia e Smith.ifc`.

## Të mirë për t'uditur

- Modeli ruhet në milimetra, si IFC4. Programet e tjera BIM e hapin.
- **Katet** në panelin e majtë listojnë vetëm nivelet që kanë diçka mbi to; pema e modelit i liston të gjitha.
- Derisa ta ruani, ndërtesa e re llogaritet si punë e paruajtur. BimCraft pyet përpara se të hapni një skedar tjetër ose të dilni, dhe mban një kopje në këtë shfletues në rast se skeda mbyllet.

---
title: Fillo një ndërtesë të re
summary: Krijo një model ndërtese bosh me nivelet e veta, vizato muret, vendos elemente nga biblioteka dhe ruaje si IFC.
keywords: e re, ndërtesë e re, bosh, e zbrazët, fillo nga e para, shabllon, nivele, katet, dyshemetë, krijo, model
from: 68786865
---

## Çfarë do të bësh

Fillo një model ndërtese nga e zbrazëta, në vend që ta hapësh një. BimCraft krijon një model IFC bosh me një projekt, një vend, ndërtesën dhe nivelet e saj. Mund të vendosësh pajisje dhe mobilje nga biblioteka në nivele dhe ta ruash si skedar IFC.

:::note
Muret mund të vizatohen tani: shih [Vizato muret](topic:draw-walls). Dyert, dritaret, dyshemetë dhe çatitë janë në punë më pas.
:::

## Hapat

1. Kliko {{ui:Ndërtesë e re}} nën **Hap një skedar ose dosje**, ose në faqen e fillimit.
2. Shkruaj **Emrin e ndërtesës**.
3. Zgjidh sa **Nivele** ka (nga 1 deri në 200).
4. Shkruaj **Lartësinë e nivelit**, nga dysheme në dysheme: për shembull `10'-0"`, `10'6"` ose `3000 mm`. Një numër i thjeshtë është në këmbë në SHBA, në milimetra gjetkë.
5. Çdo fushë është plotësuar tashmë, kështu që mund t'i lësh ashtu. Poshtë tyre kutia thotë çfarë fillon me ti: njësitë, **Llojin e murit** që e vizaton i pari mjeti i murit (zgjidh një tjetër nga lista nëse dëshiron) dhe fletën e parë.
6. Kliko {{ui:Krijo}}. Nivelet vendosen nga 0, secili një lartësi nivelit mbi të mëparshmin, dhe emërtohen Niveli 1, Niveli 2 e kështu me radhë. Shfaqen në pemën e modelit, dhe plani i Nivelit 1 hapet pranë pamjes 3D me {{ui:Vizato}} të ndezur.
7. Vizato muret: kliko {{ui:Mur}} dhe dy pika. Shih [Vizato muret](topic:draw-walls). Riemërto nivelet ose ndrysho lartësitë e tyre te paneli **Nivelet**.
8. Vendos elementet: shih [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library). Shiriti i vendosjes liston çdo nivel.
9. Kliko {{ui:Ruaj si IFC}}. Skedari emërohet sipas ndërtesës, për shembull `Smith's house.ifc`.

## Gjëra që duhen ditur

- Modeli ruhet në milimetra, si IFC4. Programe të tjera BIM e hapin.
- Një ndërtesë e re vjen me një fletë, **A-101**, që mban planin e nivelit më të ulët: A3 në 1:100 kur punon me njësi metrike, Tabloid në 1/8" = 1'-0" përndryshe. Është bosh deri te muri i parë dhe pastaj shfaq planin ndërsa vizaton. Hape nën **Fletët** në shfletuesin e projektit për të ndryshuar letrën, shkallën ose titullin e saj, për të shtuar pamje ose për ta fshirë. Një ndërtesë e nisur nga një shabllon sjell fletët e shabllonit.
- Për të ndryshuar çfarë fillon çdo ndërtesë e re (tipin e murit për projektet metrike, nivelet, fletën e parë, mjetin aktiv pas {{ui:Krijo}}), shih [Politikat e parazgjedhura](topic:default-policies).
- Nuk duhet të konfigurohet asgjë para murit të parë. Tipi i murit, lartësitë e niveleve, njësitë dhe fleta mund të ndryshohen më vonë.
- **Katet** në panelin e majtë listojnë vetëm nivelet me diçka në to; pema e modelit i liston të gjitha.
- Derisa ta ruash, ndërtesa e re llogaritet si punë e paruajtur. BimCraft pyet para se të hapësh një skedar tjetër ose të largohesh, dhe mban një kopje në këtë shfletues në rast se skeda mbyllet.

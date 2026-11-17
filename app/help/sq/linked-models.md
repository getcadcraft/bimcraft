---
title: Lidh modele të tjera për koordinim
summary: Shfaq një model tjetër IFC pranë modelit tënd me referencë (kurrë të bashkuar), vendose sipas koordinatave të përbashkëta, koordinatave të hartës ose dy pikave, kapu tek ai kur vizaton, dhe ringarkoje kur ndryshon skedari i tij.
keywords: lidhje, model i lidhur, referencë, xref, koordinim, federim, strukturë, MEP, konsulent, koordinata të përbashkëta, rilevim, koordinata hartës, ringarkim, çngarkim, referencë dokumenti, IfcDocumentReference
from: 3e0f1eab
---

## Çfarë do të bësh

Vizato kundër modelit të një konsulenti (strukturës, shërbimeve, ndërtesës ekzistuese) pa kopjuar asgjë në skedarin tënd.

Një **model i lidhur** shfaqet në pamjen 3D dhe pritet në planimetritë e tua, por nuk ndryshohet kurrë dhe nuk ruhet kurrë në modelin tënd. Modeli yt mban vetëm lidhjen: emrin e skedarit dhe ku shkon ai.

## Lidh një model

1. Në seksionin {{ui:Modele të lidhura}} të panelit të majtë, kliko {{ui:Lidh një model…}} dhe zgjidh skedarin IFC. Shfaqet menjëherë, dhe rreshti i tij thotë **Shfaqet**.
2. Zgjidh ku shkon në {{ui:Vendosja}}:
   - **Koordinata të përbashkëta** (si fillim): koordinatat e tij janë tuajat, sikur të dy modelet të ishin caktuar nga e njëjta origjinë.
   - **Koordinata hartës**: koordinatat e hartës së të dy skedarëve i rreshtojnë (të dyja duhet të kenë një konvertim hartës; BimCraft e thotë kur njëri nuk ka).
   - **Sipas dy pikave…**: kliko një pikë në modelin e lidhur, pastaj ku shkon në modelin tënd; pastaj një çift të dytë. Lidhja zhvendoset dhe rrotullohet (rreth vertikales) për t'u përshtatur.
3. Çdo lidhje dhe ndryshim vendosjeje është një hap: {{key:Mod+Z}} e kthen mbrapsht.

## Puna me të

- Planimetritë shfaqin modelin e lidhur të prerë në lartësinë e prerjes së nivelit, si vija të holla, dhe mjetet {{ui:Mur}} dhe mjetet e tjera të vizatimit kapen te kthesat dhe skajet e tij.
- Zgjidh elementët e tij në pamjen 3D për të lexuar vetitë e tyre; një model i lidhur nuk është kurrë ai që redakton, prandaj butoni i tij i zgjedhjes te {{ui:Modelet}} është i fikur.
- **Skedari ndryshoi?** Kur shfletuesi mund ta ndjekë skedarin (një skedar i hapur përmes zgjedhësit të tij, ose në Studio), BimCraft e ringarkon lidhjen vetë disa sekonda pasi skedari ruhet përsëri, dhe e thotë këtë. Përndryshe kliko {{ui:Ringarko}}.
- {{ui:Unload}} e fsheh dhe liron memorien; lidhja mbetet në modelin tënd. {{ui:Load…}} e shfaq sërish (ti zgjedh skedarin: shfletuesi nuk mund ta hapë vetë një skedar sipas emrit).
- Simboli × e heq lidhjen nga modeli yt.

## Çfarë duhet të shohësh

- Në skedarin tënd IFC: një IfcDocumentReference për çdo lidhje (emri i skedarit), i lidhur me projektin, dhe ku shkon ai në grupin e vetive të projektit CadCraft_Links. Kur hapet sërish modeli yt, lista e lidhjeve të tij shfaq **Nuk është ngarkuar** derisa t'i ngarkosh.

:::note
Kontrollet e përplasjeve, Compare dhe Find mund të përdorin një lidhje të ngarkuar si çdo model tjetër të hapur: shih [Shiko disa modele IFC së bashku](topic:several-models).
:::

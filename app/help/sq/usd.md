---
title: Eksporto modelin si USD
summary: Shkruan modelet IFC të hapura si USD për render, montim skenash dhe programe të tjera 3D, me klasën IFC, GlobalId dhe vetitë e çdo elementi.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, veti, katet, disiplinat, montim skene, archviz, render
from: 2be5f7b8
---

{{ui:USD}} në shirit shkruan atë që është hapur (çdo model, modelet e federuara aty ku i keni vendosur) si një skedar të vetëm USD.

## Eksporto

1. Zgjidhni {{ui:USD}} në shirit.
2. Zgjidhni {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ose {{ui:Package (.usdz)}}.
3. Skedari shkarkohet. Shiriti i statusit thotë sa elemente hynë.

## Çfarë ka në skedar

| Në modelin IFC | Në skedarin USD |
|---|---|
| Sheshi, ndërtesa, katet | Grupe të futura njëra në tjetrën, katet në rend sipas kuotës |
| Çdo element | Një prim nën katin dhe disiplinën e tij (Arkitektura, Struktura, MEP, Mobilimi, Sheshi, Hapësirat, Të tjera), me gjeometrinë si mesh |
| Klasa, GlobalId, emri, tipi, etiketa | Atribute me emrat `ifc:class`, `ifc:globalId`, `ifc:name` e kështu me radhë |
| Grupet e vetive dhe të sasive | Një atribut për çdo veti; gjatësitë, sipërfaqet dhe vëllimet në metra, metra katrorë dhe metra kubikë |
| Ngjyrat | Materiale (me transparencë) |
| Hapësirat | Mbahen, të shënuara si udhëzues që renderuesit t'i anashkalojnë |

Gjeometria qëndron te koordinatat e vetë skedarit IFC. Shtresimi ndjek konventat e shkruara USD të CadCraft për ndërtesat.

---
title: Vista en vivo
summary: Panel modelo ári ohechauka tiempo real ojehecha-pe, sol, sombra ha luz rebotada ndive, ha ojehai nde ojapóva; ojeruru ha emoĩ hora ha mes.
keywords: vista en vivo, tiempo real, render en tiempo real, recorrido, caminar, primera persona, presentación, cliente, segunda pantalla, segunda ventana, monitor, hora del día, sol, estación, mes, sombras, oclusión ambiental, reflejos, luz rebotada, iluminación global, webgpu, webgl
from: ea5c02bf
---

Vista en vivo ohechauka modelo tiempo real ojehecha-pe: cielo ha sol nde sitio lugar ha fecha rehe, sol sombra, nde pintura ha material elementos-pe, lámpara ha luz ojerebota pared ha piso-gui. Ojehai nde ojapóva: 3D vista ojeruguy ha ojeruguy avei, modelo ojemoambue ha peteĩ momento rire ohechauka ojemoambue. Ndaipórirí ojeguejy mba'eve.

Ojapo mismo escena, pintura, lámpara ha sol [Renderizar una imagen](topic:render) ndive; imagen terminada-pe upe ojeruru.

## Mba'éichapa oñepyrũ

1. Peteĩ modelo ojepyta ha eskoge {{ui:Vista en vivo}} herramienta barra-pe. Panel oñepyrũ aplicación ári, tuichave pyrã ñepyrũ.
2. Pyta título barra ojeñemoĩ, ha ejuhu esquina ojeheipa.
3. {{ui:Vista en vivo en una ventana nueva}} (botón ipype) térã {{ui:Ventana nueva}} panel-pe ojerusu peteĩ ventana iñambuéva, segunda pantalla-pe. Navegador ojeipe'a ventana ndojepe, panel rehe ojepyta.
4. {{ui:Cerrar}} ojepe'a.

## Control

| Control | Mba'eichaite ohasa |
|---|---|
| {{ui:Seguir la vista}} | Jaipuru: vista en vivo ohecha 3D vista ojehechava ári. Ojeruguy ohejáu |
| {{ui:Recorrer}} | Modelo-pe ojeguata (ko'ẽrõ) |
| {{ui:Gravedad}} | Ojeguatava: piso rehe ha escalera ojupa. Ndojapóiramo: ojúga |
| {{ui:Hora}} | Ára hora. Sol ojemoambue ojejuhúpe |
| {{ui:Mes}} | Mes, invierno ha verano sol ohechava |
| {{ui:Calidad}} | {{ui:Para esta computadora}}, térã {{ui:Baja}}, {{ui:Medio}} térã {{ui:Alta}} |

Pe línea tuichavegua ohechauka mba'e draw vista (WebGPU térã WebGL 2), calidad ha luz rebotada.

## Modelo-pe ojeguata

1. Ejeruguy 3D vista oikóvape ha eskoge {{ui:Recorrer}}. Pyhare piso ári, vista ojehecha punto gotyo, 1,6 m tuichave.
2. Pyta vista en vivo, upéi ejeru {{key:W}} {{key:A}} {{key:S}} {{key:D}} térã flecha teclas. Pyhare {{key:Shift}} ojeguata ligeramente. Ejeruguy ojehecha hendápe.
3. Pasos 40 cm peve ojupa (escalera); upe ári ndaha'éi pared. Pared ojehejáu ha ojeñeeslizá.
4. {{ui:Gravedad}} ndojapói: ojúga; {{key:E}} ojupa, {{key:Q}} ojúga.
5. {{key:Esc}} ojehejáu ojeguata.

## Luz rebotada

Luz pared ndive sol ojepeʼa piso ári, ha room ñuhãngua, ojapo ojeguerohory tupã ryru pórpe. Oñemoĩ gotyo barra ári {{ui:Luz de rebote: 40 %}}; oñepyrũ ojepyta ndojeguahẽ peve vista ojeipuru. Ojemoambue rire jey oñepyrũ.

:::note
Esto ha'e aproximación vista en vivo-pe, ndaha'éi imagen renderizada: punto-kuéra pequeño detalle umi punto oguerekóva luz rebotada.
:::

:::note
Navegador ojekuaa ojehai: WebGPU ojeruru navegadór-pe ohasa; ambue-pe WebGL 2 ojeruru ha upeicha ohechauka. Oiko ndaipóri, panel ohechauka.
:::

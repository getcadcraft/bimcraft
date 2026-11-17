---
title: Modelo desde un escaneo
summary: Peteĩ tembiapo mbyky laser escaneo-gui paredes-pe: ejejapo nube de puntos peteĩ edificio pyahu rapykue, ejoavasa ipiso peteĩ nivel-pe ha emboguete paredes planta-pe.
keywords: escaneo, escaneo láser, nube de puntos, as-built, edificio existente, relevamiento, trazar, escaneo a BIM, modelo desde escaneo, corte, alinear, escuadra, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Mba'épa rejapóta

Ejapo edificio existente laser escaneo-gui: paredes oĩva escaneo-pe ojehechaukáva, nivel derecho-pe, ha escuadra ojupe.

## Tapykue

1. **Edificio ojapo hag̃ua.** {{ui:File}} › {{ui:New building}}, nivel heta edificio oguerekóicha (nivel ambue upe rire ikatu emoĩ, ehecha [El sitio, el edificio y sus niveles](topic:site-building-and-levels)). {{ui:Draw}} oñemboguejy.
2. **Escaneo.** {{ui:Show}} › {{ui:Point cloud}} ha eiporavo archivo (LAS, LAZ, E57, PLY, PCD, PTX térã XYZ: ehecha [Mostrar nube de puntos junto al modelo](topic:point-clouds)). Nube ohechauka vista 3D-pe, ha planta ohechauka **corte**: escaneo puntos 1200 mm (4 feet) nivel ári, punto-kuéra ojehechaukáva puntokue-icha. Upe ko altura-pe paredes, puerta ha ventana ojehecha porãve.
3. **Ojoavasa ipiso nivel-pe.** Emboguete barra del modelo ryepy {{ui:Scan}} ha ejapo clic {{ui:Align its floor to this level}}: nube oñemboguejy ári térã yvy-pe, peve pe piso oescaneava oñemoĩ nivel ohechaukáva-pe. Ehecha ko corte ojehechápa oñembohovái paredes-kuéra.
4. **Escuadra edificio-pe.** {{ui:Scan}} › {{ui:Turn it square to the building}} omoĩ nube ojoavasa ko paredes corte-pe planta eje-kuéra-gui, upévare paredes ejapóvare {{key:Shift}} ojeguerohorýva ojoavasa escaneo-ndive. Oñemboguejy paredes ojuhúva ryepýpe, upévare yvyra térã ambue tenda pared ndojekuaáiva ndoikóiva pe corte-pe nomoĩkuaái nube. Ojoavasa ipiso ko mboyve: upéicha corte ohovái paredes.
5. **Paredes trazar.** Eiporavo {{ui:Wall}} ha ejapo clic puntokue-icha: herramienta ohechauka escaneo puntos ha paredes ejapóva (kaneʼõ mark pequeño rombo). Pared ojapo ryepy línea-pe; ejapo clic punto-kuéra ryepýpe; ejeiporu hag̃ua grosor, emboguete tipo de pared ko. Upe rire emoĩ puerta ha ventana corte ohechaukáva tavakue.
6. **Upe nivel ári.** Eiporavo nivel ári planta lista-gui: corte ojerovia nivel altura-pe. Ojoavasa ipiso nivel-pe jey ko mboyve ndaha'éi nivel escaneo-pe nivel-kuéra ndojehechái.

## Mba'épa rehechaséva

- Corte oñembohovái nivel ojekambia gueteri, ha corte hasy (`{{ui:Scan}} › {{ui:Slice thickness}}`) ohechauka punto heta escaneo mbyky-pe.
- `{{ui:Scan}} › {{ui:Undo the alignment}}` nube omoĩ jey upe ojeipe'a upe rire. Ojoavasa nube-pe rehechaukáva vista-pe añónte: ndojeguardái IFC archivo-pe, ha paredes ejapóva ndoñemboguejýi. Ojoavasa oñemoñaʼã nube {{ui:Place}} térã {{ui:Units}} ojekambiáramo, térã ambue modelo ejeporavóramo.
- `{{ui:Scan}} › {{ui:Show the slice on the plan}}` omboguejy térã ohechauka puntokuéra.

:::tip
Escaneo tuichave: planta omoañete 60.000 punto corte-gui ha 3D vista omoñaʼã mbohapy millón nube-gui, oñemboguevo tuichaveve escaneo-pe, upévare archivo tuichave ndoikeʼỹ. Ejapo trazado drafting app-pe, eiporu {{ui:Trace in CadCraft}} nube barra-gui.
:::

---
title: Ojekolorea elemento-kuéra propiedad rupive
summary: Ojepinta opa elemento valor rupive peteĩ propiedad-pe, clase, tipo, piso, material, fuego resistencia térã costo, ojelee leyenda, ojekláva valor ojehechauka hag̃ua ko elemento-kuéra añete, ha ojeguarda color esquema-pe ambue modelo-kuérape eiporavo hag̃ua.
keywords: color, colour, color by, leyenda, vista inteligente, apariencia, propiedad, tipo, material, resistencia al fuego, filtro, aislar, tema, valores, esquema, esquema de colores, guardar colores, reutilizar, equipo, json, muestra de color
from: f081d343
---

## Mba'e ndereka̧ta

Ehechakuaa peteĩ mbohapy propiedad mba'éichapa oñemoĩ modelo-pe: mávapa muro externo, mávapa material oñeporu, mávape elemento ndaiporãi fuego resistencia. Opa elemento ojagarra ijeheguáva valor color, ha leyenda omombe'u mba'épa color peteĩ-peteĩ, ha mboépa elemento oguereko.

## Pasos

1. Eabri modelo IFC.
2. Eklika {{ui:Color}} pestaña ryepýpe.
3. Eiporavo propiedad lista-pe. Primera-kuéra oĩ opa elemento-pe ({{ui:Class}}, {{ui:Type}}, {{ui:Storey}}, {{ui:Material}}, {{ui:Name}}…); ambue-kuéra oúva modelo-pe propiedad conjunto ha cantidad conjunto-gui, conjunto-pe héra rupive. Número peteĩ-peteĩ rapykue ohechauka mboépa elemento oguereko.
4. Ojeleé leyenda: peteĩ color, valor ha mboépa elemento oguereko.
5. Eklika valor ojehechauka hag̃ua ko elemento añete. Emoĩ {{key:Mod}} ha eklika ambue valor-kuéra ohendava hag̃ua. Eapreta {{key:Shift+H}} opa ojehechaukávo jey.
6. Eklika {{ui:Off}} ojevolvévo modelo ijeheguáva colores-pe.

## Mba'épa ehechágui

- Pe siete valor-pe peteĩ-peteĩ oguereko ijeheguáva color, akóinte ojehupytýva mboapy oguerekóvare primero. Ambue valor-kuéra ohupytýva peteĩ gris, ojeikuaauka **otros valores** rupive.
- Número mbovy valor diferente-ndive ojepartí seis rango ikatu-pe, marandu ha-tove ((bajo) ha (alto).
- Propiedad ndaiporãiva elemento-kuéra gris ndovevúi-pe, ojeikuaauka **No value** rupive, upévare ojehechakuaa hag̃ua pe ojekolorea.
- Color ojejapo Paper ha Model-ndive, ha oiko jey elemento ojesarekóvo.
- Tipo propiedad ojeporu opa tipo elemento-pe; elemento ijeheguáva valor ojeporu jave propiedad mismo-pe, hembiapo ijeheguáva ohupyty.

## Color ojejapo ha oñongatu esquema ramo

- Eklika valor muestra leyenda-pe color ambue ojeporuhágui. Modelo ojepinta jey hetave.
- {{ui:Save scheme}} ojedescarga color peteĩ michĩ `.json` archivo-pe, propiedad héra rupive, por ejemplo `Class colors.json`.
- Ambue modelo-pe térã ambue kompu-pe, eklika {{ui:Open scheme…}} ha eiporavo pe archivo. Esquema-pe opa valor oguereko ijeheguáva color, upévare fuego resistencia térã sistema mismo color ambue modelo-pe.
- Valor esquema-pe ndoguerekói ojepintahína gris-pe ha ojeikuaauka "not in the scheme" rupive; esquema valor modelo ndoguerekóiva oiko 0 ndive, esquema opa ehechakuaa hag̃ua.
- Esquema ogueru color opa tema-pe. Propiedad lista-pe eiporavo jave, colores automático-gui ojepyrũ jey.

## Mba'eve ojeporu hembiapo ndaiporãiva

- **"This model has no … values".** Esquema ojapo propiedad ndoguerekóiva ko modelo-pe (ambue propiedad conjunto héra, por ejemplo). Eabri ko modelo-pe ojapóva esquema, térã eiporavo propiedad lista-pe.
- **Propiedad oñemoĩ ndaipóri lista-pe.** Ndaipóri elemento forma-ndive modelo-pe oguerekóva. Piso ha espacio propiedad-kuéra ndojeikuaauka lista-pe.
- **Opa color peteĩ.** Opa elemento peteĩ valor térã ndaipóri: eñeha'ã leyenda cuenta-kuéra.

## Upe rire

- [Ojehepyma, ojeaislar ha ojehecha elemento-kuéra ojehapytáva](topic:hide-and-isolate)
- [Eiporavo modelo árbol ha ejuhu tape](topic:model-tree)

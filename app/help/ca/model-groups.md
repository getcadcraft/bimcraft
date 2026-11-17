---
title: Grups de model
summary: Feu que els elements triats siguin un sol grup amb nom, torneu a col·locar el grup en un altre lloc i canvieu una còpia perquè canviïn totes.
keywords: grup, grup de model, agrupar, desagrupar, instància, còpia, repetir, unitat tipus, crugia, apartament, edita el grup, IfcGroup
from: 121c5027
---

## Què faràs

Agrupeu una crugia tipus, col·loqueu-la diverses vegades i canvieu totes les còpies canviant-ne una.

## On és l'eina

- Disposicions amb cinta: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Disposició clàssica: la barra {{ui:Draw}} › menú {{ui:Rooms}} › Grup de model.

## Passos

1. Amb Selecciona, trieu els elements: feu clic a un, i Ctrl+clic o Shift+clic als altres.
2. Trieu {{ui:Model Group}}. Es converteixen en un grup de seguida. Escriviu un {{ui:Group name}} a la fila primer per posar-li nom, o escriviu-ne un després per canviar-li el nom.
3. Premeu {{ui:Place another}} i feu clic on ha d'anar la còpia: la seva cantonada inferior esquerra va al punt on feu clic.
4. Canvieu qualsevol còpia: moveu l'extrem d'un mur, redimensioneu una porta, suprimiu una columna. Totes les altres còpies del grup canvien en el mateix pas, i un Desfés les desfà totes.
5. Mentre {{ui:Model Group}} sigui l'eina activa, un clic sobre un element tria tot el seu grup.

## Altres coses que podeu fer

- {{ui:Add the picked}}: afegiu més elements al grup que heu triat per últim.
- {{ui:Ungroup}}: aquesta còpia torna a ser elements normals. Les altres continuen sent un grup.
- Mogueu una còpia sencera amb {{ui:Mou}}: és el mateix grup en un lloc nou; les altres no es mouen.
- Suprimiu els elements d'una còpia i aquella còpia desapareix.

## Què pot contenir un grup

Els murs amb les seves portes i finestres, les columnes i els forjats dibuixats es poden tornar a col·locar i mantenir iguals. Un grup pot tenir també altres elements, però aleshores no es pot tornar a col·locar encara; la fila n'indica el motiu.

Les còpies es mouen, no es giren ni se'n fa simetria.

## Al fitxer IFC

Un grup és un IfcGroup amb un IfcRelAssignsToGroup cap als seus membres, que continuen sent murs, columnes i forjats normals. Cada còpia d'un mateix grup porta el mateix identificador de definició.

## Encara no implementat

- Girar o fer simetria d'una còpia.
- Escales, cobertes, forjats de sales i elements de la biblioteca en un grup que es torna a col·locar.
- El perfil, la inclinació i les obertures d'un mur no es passen a les còpies.
- Grups dins de grups.

Vegeu també [Mou, alinea i distribueix](topic:move-align-distribute).

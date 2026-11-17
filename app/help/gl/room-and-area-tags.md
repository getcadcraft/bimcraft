---
title: Etiquetas de cuartos e superficies
summary: Ponga unha etiqueta co número, o nome e a superficie nun cuarto ou nunha superficie. A etiqueta segue ao seu elemento e dimensiónase pola súa altura no papel.
keywords: etiqueta, etiqueta de cuarto, etiqueta de superficie, etiquetar cuarto, etiquetar superficie, etiquetar todo, etiquetar os sen etiqueta, rótulo, altura do texto, altura no papel, anotación
from: 67059d8a
---

## O que vai facer

Etiquete cuartos e superficies un a un ou todos de golpe, e mova unha etiqueta ata un lugar onde se lea ben.

## Onde están as ferramentas

- Disposicións en cinta: {{ui:Architecture}} › **Cuarto e superficie** › {{ui:Tag Room}} e {{ui:Tag Area}}.
- Disposición clásica: na barra Debuxar › menú {{ui:Rooms}}.
- Un cuarto ou superficie seleccionados: Propiedades › {{ui:Add a tag}}.

## Pasos

1. Escolla {{ui:Tag Room}} e prema nun cuarto, onde debe estar a etiqueta.
2. Ou prema {{ui:Tag all untagged}} na fila: cada cuarto deste nivel que non teña etiqueta recibirá unha, no seu centro. É un só paso de Desfacer.
3. Para mover unha etiqueta, selecciónea con Seleccionar e arrástrea. Propiedades ten {{ui:Put it back in the middle}}.
4. {{ui:Tag Area}} funciona igual para as superficies.

## Que fai unha etiqueta

- Indica o número, o nome e a superficie, nas súas unidades de visualización.
- Segue ao seu cuarto: cambie o nome do cuarto, mova un muro, e as palabras e o lugar da etiqueta cambian no mesmo paso.
- Dimensiónase no papel: {{ui:Text height on paper}} está en milímetros (2,5 para comezar). Cunha escala de vista 1:50, unha etiqueta de 2,5 mm mide 125 mm de alto no modelo; en 1:100, 250 mm.
- Un cuarto con etiqueta mostra esta en lugar da súa etiqueta simple.
- Cando desaparece o seu cuarto ou superficie, a etiqueta vai con el. Desfacer devolve os dous.

## No IFC

Unha etiqueta é un IfcAnnotation (ObjectType ROOMTAG ou AREATAG) co seu texto como literal de texto, e o GlobalId do elemento que nomea. O texto do ficheiro indica a superficie en metros cadrados.

## Aínda sen construír

- Formas de etiqueta propias e liña de chamada.
- As etiquetas de portas, xanelas e muros son unha ferramenta aparte (vexa os estilos de etiqueta das follas).

Vexa tamén [Cuartos e separadores de cuartos](topic:rooms-and-separators).

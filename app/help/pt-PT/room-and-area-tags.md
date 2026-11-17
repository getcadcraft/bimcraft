---
title: Etiquetas de compartimentos e áreas
summary: Coloque uma etiqueta com o número, o nome e a área num compartimento ou numa área. A etiqueta segue-o e o seu tamanho depende da altura no papel.
keywords: etiqueta, etiqueta de compartimento, etiqueta de área, etiquetar compartimento, etiquetar área, etiquetar tudo, rótulo, altura do texto, altura no papel, anotação
from: 67059d8a
---

## O que vai fazer

Etiquetar compartimentos e áreas um a um ou todos de uma vez, e mover uma etiqueta para onde se leia bem.

## Onde estão as ferramentas

- Esquemas de friso: {{ui:Architecture}} › **Compartimento e área** › {{ui:Tag Room}} e {{ui:Tag Area}}.
- Esquema clássico: a barra Desenhar › menu {{ui:Rooms}}.
- Um compartimento ou área selecionado: Propriedades › {{ui:Add a tag}}.

## Passos

1. Escolha {{ui:Tag Room}} e clique num compartimento, onde a etiqueta deve ficar.
2. Ou prima {{ui:Tag all untagged}} na linha: cada compartimento deste piso que não tem etiqueta recebe uma, no meio. É um único passo de anulação.
3. Para mover uma etiqueta, selecione-a com a ferramenta Selecionar e arraste-a. Em Propriedades há {{ui:Put it back in the middle}}.
4. {{ui:Tag Area}} funciona da mesma forma para áreas.

## O que faz uma etiqueta

- Indica o número, o nome e a área, nas suas unidades de apresentação.
- Segue o seu compartimento: se mudar o nome do compartimento ou mover uma parede, as palavras e o lugar da etiqueta mudam no mesmo passo.
- Tem o tamanho do papel: {{ui:Text height on paper}} é em milímetros (2.5 para começar). Com uma escala de vista de 1:50, uma etiqueta de 2.5 mm tem 125 mm de altura no modelo; a 1:100 tem 250 mm.
- Um compartimento com etiqueta mostra a etiqueta em vez do seu rótulo simples.
- Quando o compartimento ou a área desaparece, a etiqueta vai com ele. Anular repõe os dois.

## No IFC

Uma etiqueta é um IfcAnnotation (ObjectType ROOMTAG ou AREATAG) com o seu texto como literal de texto, e o GlobalId do elemento que nomeia. O texto no ficheiro indica a área em metros quadrados.

## Ainda não implementado

- Formas de etiqueta próprias e uma linha de chamada.
- As etiquetas de portas, janelas e paredes são uma ferramenta à parte (ver os estilos de etiqueta das folhas).

Ver também [Compartimentos e separadores de compartimentos](topic:rooms-and-separators).

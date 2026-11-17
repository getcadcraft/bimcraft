---
title: Etiquetas de ambientes e áreas
summary: Coloque uma etiqueta com o número, o nome e a área em um ambiente ou em uma área. A etiqueta acompanha o ambiente e seu tamanho é definido pela altura no papel.
keywords: etiqueta, etiqueta de ambiente, etiqueta de área, etiquetar ambiente, etiquetar área, etiquetar tudo, etiquetar todos os não etiquetados, rótulo, altura do texto, altura no papel, anotação
from: 67059d8a
---

## O que você vai fazer

Etiquete ambientes e áreas um a um ou todos de uma vez, e mova uma etiqueta para o lugar em que ela fique legível.

## Onde estão as ferramentas

- Layouts com faixa de opções: {{ui:Arquitetura}} › **Ambiente e área** › {{ui:Etiquetar ambiente}} e {{ui:Etiquetar área}}.
- Layout clássico: a barra Desenhar › menu {{ui:Ambientes}}.
- Um ambiente ou uma área selecionados: Propriedades › {{ui:Adicionar uma etiqueta}}.

## Passos

1. Escolha {{ui:Etiquetar ambiente}} e clique em um ambiente, onde a etiqueta deve ficar.
2. Ou pressione {{ui:Etiquetar todos os não etiquetados}} na linha: todo ambiente deste nível que não tiver etiqueta recebe uma, no seu centro. É uma única etapa de Desfazer.
3. Para mover uma etiqueta, selecione-a com Selecionar e arraste-a. Propriedades tem {{ui:Devolver ao centro}}.
4. {{ui:Etiquetar área}} funciona do mesmo modo para áreas.

## O que uma etiqueta faz

- Ela mostra o número, o nome e a área, nas suas unidades de exibição.
- Ela acompanha o ambiente: renomeie o ambiente ou mova uma parede, e o texto e a posição da etiqueta mudam na mesma etapa.
- Ela é dimensionada no papel: {{ui:Altura do texto no papel}} é em milímetros (2.5 para começar). Na escala de vista 1:50, uma etiqueta de 2.5 mm tem 125 mm de altura no modelo; em 1:100, tem 250 mm.
- Um ambiente com etiqueta mostra a etiqueta em vez do seu rótulo simples.
- Quando o ambiente ou a área deixa de existir, a etiqueta vai junto. Desfazer traz as duas de volta.

## No IFC

Uma etiqueta é um IfcAnnotation (ObjectType ROOMTAG ou AREATAG), com o seu texto como literal de texto e o GlobalId do que ela nomeia. O texto no arquivo informa a área em metros quadrados.

## Ainda não implementado

- Formas de etiqueta próprias e uma linha de chamada.
- Etiquetas em portas, janelas e paredes são uma ferramenta separada (veja os estilos de etiqueta das folhas).

Veja também [Ambientes e separadores de ambiente](topic:rooms-and-separators).

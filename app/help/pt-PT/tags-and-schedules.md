---
title: Etiquetar elementos e fazer mapas por etiqueta
summary: Defina as suas próprias etiquetas (um nome, um tipo, os valores permitidos, quais as classes), etiquete muitos elementos de uma vez e crie mapas cujas colunas, filtros e grupos leem as etiquetas. As etiquetas ficam guardadas no IFC.
keywords: etiquetas, etiqueta, etiquetagem, propriedades personalizadas, parâmetros, parâmetros partilhados, conjunto de propriedades, pset, mapa, filtro, agrupar por, acabamento, classificação de resistência ao fogo, edição em massa, csv
from: 9cc7c90d
---

## O que vai fazer

Uma etiqueta é uma propriedade sua, como *Acabamento* ou *Classificação de resistência ao fogo*. Defina-a uma vez para o projeto, aplique-a a muitos elementos de uma vez, e todos os mapas do BimCraft podem lê-la: o mapa de etiquetas aqui, {{ui:Quantities}}, Pesquisar, Colorir por propriedade e [Documentos a partir do modelo](topic:documents-from-the-model).

## Passos

1. Abra um modelo IFC, ou inicie um novo edifício.
2. No painel da esquerda, em {{ui:Quantities}}, abra {{ui:Tags}}.
3. Clique em {{ui:Add a tag}}. Dê-lhe um nome, escolha o seu tipo e, se quiser, indique os valores permitidos (separados por vírgulas) e as classes a que se destina (`IfcDoor`, `IfcWall` …). Clique em {{ui:Add the tag}}.
4. Selecione os elementos no modelo (Pesquisar ajuda: escolha todas as portas de uma vez).
5. Em {{ui:Tag the selection}}, escolha ou escreva um valor para cada etiqueta que quer definir, deixe as outras como estão e clique em {{ui:Apply to … selected elements}}.
6. Em {{ui:Tag schedule}}, marque as colunas, acrescente filtros, escolha {{ui:Group by}} e depois {{ui:Download CSV}}.

## O que deve ver

- Um passo na lista de alterações para cada definição guardada e cada etiquetagem; {{ui:Undo}} o repõe.
- Os elementos de uma classe para a qual uma etiqueta não se destina ficam fora dessa etiqueta, e a linha de estado indica quantos.
- O mapa de etiquetas lista uma linha por elemento, agrupada pelo campo escolhido; clique na primeira célula de uma linha para escolher esse elemento.
- {{ui:Quantities}} lista as etiquetas em `CadCraft_Tags`, por isso pode totalizar áreas ou contagens por etiqueta ali.

## Tipos

Os tipos são a mesma lista dos parâmetros de família: Comprimento (milímetros), Ângulo (graus), Número, Número inteiro, Sim / Não, Caneta (1–16), Texto, Material e Preenchimento. Um valor que não cabe no seu tipo, ou que não é um dos valores permitidos, é recusado com uma mensagem, e nada muda.

## Bom saber

- Tudo é IFC simples, por isso outros programas leem os valores: as definições estão num conjunto de propriedades `CadCraft_TagDefs` no projeto, e os valores num conjunto de propriedades `CadCraft_Tags` em cada elemento (uma propriedade por etiqueta). Os comprimentos são escritos na unidade de comprimento do ficheiro.
- `IfcWall` nas classes de uma etiqueta também inclui paredes de tipo standard-case e paredes compostas por elementos.
- Mudar o nome de uma etiqueta muda os seus valores em todos os elementos no mesmo passo. Remover uma etiqueta remove apenas a sua definição: os valores já definidos ficam nos elementos como propriedades simples. Limpe-os primeiro (escolha {{ui:Clear}}) para os retirar.
- As etiquetas na aplicação de desenho CadCraft (atributos de bloco) ainda não estão implementadas.

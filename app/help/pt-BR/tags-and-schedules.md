---
title: Etiquetar elementos e criar tabelas por etiqueta
summary: Defina suas próprias etiquetas (um nome, um tipo, os valores permitidos, quais classes), marque muitos elementos de uma vez e crie tabelas cujas colunas, filtros e grupos leem as etiquetas. As etiquetas são guardadas no IFC.
keywords: etiquetas, etiqueta, etiquetagem, propriedades personalizadas, parâmetros, parâmetros compartilhados, conjunto de propriedades, pset, tabela, filtro, agrupar por, acabamento, resistência ao fogo, edição em massa, csv
from: 9cc7c90d
---

## O que você vai fazer

Uma etiqueta é uma propriedade sua, como *Acabamento* ou *Resistência ao fogo*. Você a define uma vez para o projeto, aplica-a em muitos elementos de uma vez, e toda tabela do BimCraft pode lê-la: a tabela de etiquetas aqui, {{ui:Quantitativos}}, Localizar, Colorir por propriedade e [Documentos a partir do modelo](topic:documents-from-the-model).

## Passos

1. Abra um modelo IFC, ou inicie uma nova edificação.
2. No painel da esquerda, em {{ui:Quantitativos}}, abra {{ui:Etiquetas}}.
3. Clique em {{ui:Adicionar uma etiqueta}}. Dê um nome, escolha seu tipo e, se quiser, liste os valores permitidos (separados por vírgulas) e as classes a que se aplica (`IfcDoor`, `IfcWall` …). Clique em {{ui:Adicionar a etiqueta}}.
4. Selecione os elementos no modelo (Localizar ajuda: escolha todas as portas de uma vez).
5. Em {{ui:Etiquetar a seleção}}, escolha ou digite um valor para cada etiqueta que quiser definir, deixe as outras como estão, e clique em {{ui:Aplicar a … elementos selecionados}}.
6. Em {{ui:Tabela de etiquetas}}, marque as colunas, adicione filtros, escolha {{ui:Agrupar por}} e depois {{ui:Baixar CSV}}.

## O que você deve ver

- Uma etapa na lista de alterações para cada definição salva e cada marcação; {{ui:Desfazer}} a desfaz.
- Elementos de uma classe para a qual a etiqueta não se aplica ficam de fora dela, e a linha de status diz quantos.
- A tabela de etiquetas lista uma linha por elemento, agrupada pelo campo escolhido; clique na primeira célula de uma linha para escolher esse elemento.
- {{ui:Quantitativos}} lista as etiquetas em `CadCraft_Tags`, então você pode totalizar áreas ou contagens por etiqueta ali.

## Tipos

Os tipos são a mesma lista dos parâmetros de família: Comprimento (milímetros), Ângulo (graus), Número, Número inteiro, Sim / Não, Caneta (1–16), Texto, Material e Preenchimento. Um valor que não cabe no seu tipo, ou não é um dos valores permitidos, é recusado com uma mensagem, e nada muda.

## Bom saber

- Tudo é IFC simples, então outros programas leem os valores: as definições estão em um conjunto de propriedades `CadCraft_TagDefs` no projeto, e os valores, em um conjunto de propriedades `CadCraft_Tags` em cada elemento (uma propriedade por etiqueta). Os comprimentos são gravados na unidade de comprimento do arquivo.
- `IfcWall` nas classes de uma etiqueta também aceita paredes standard-case e paredes elementadas.
- Renomear uma etiqueta renomeia os seus valores em cada elemento na mesma etapa. Remover uma etiqueta remove apenas a sua definição: os valores já definidos permanecem nos elementos como propriedades comuns. Limpe-os antes (escolha {{ui:Limpar}}) para retirá-los.
- Etiquetas no aplicativo de desenho CadCraft (atributos de bloco) ainda não estão implementadas.
